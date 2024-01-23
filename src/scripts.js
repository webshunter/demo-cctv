
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';



function POST(ln) {
    this.link = ln;
    this.dataFD = new FormData();

    this.data = function (a) {
        let q = this;
        if (typeof a === 'object') {
            let param = Object.keys(a);
            param.forEach(function (o) {
                q.dataFD.append(o, a[o]);
            });
        }
        return q;
    };

    this.then = function (callback, funcerr) {
        fetch(this.link, {
            body: this.dataFD,
            method: "POST", // Gunakan huruf besar untuk metode HTTP
        })
            .then(function (r) {
                return r.json();
            })
            .then(callback)
            .catch(funcerr);
    };

    return this;
}

const plyr = {}

plyr.player2 = function(token){
    let player = document.getElementById("video-container2");
    let w2 = player.clientWidth;
    const ply = new ezuikit.EZUIKitPlayer({
        id: 'video-container2',
        url: 'ezopen://open.ezviz.com/D78805686/1.live',
        autoplay: true,
        accessToken: token,
        template: 'pcLive',
        width: w2,
        height: 400,
        env: {
            domain: "https://isgpopen.ezvizlife.com"
        }
    });
    return ply;
} 

plyr.player = function (token){
    var player1 = document.getElementById("video-container");
    var w = player1.clientWidth;
    const ply = new ezuikit.EZUIKitPlayer({
        id: 'video-container',
        url: 'ezopen://open.ezviz.com/D76265573/1.live',
        autoplay: true,
        accessToken: token,
        template: 'pcLive',
        width: w,
        height: 400,
        env: {
            domain: "https://isgpopen.ezvizlife.com"
        }
    });
} 

const callNewToken = function(id , idplay, appKey, appSecret){
    new POST('https://open.ezvizlife.com/api/lapp/token/get')
        .data({
            appKey: appKey, appSecret: appSecret
        })
        .then(function (res) {
            let data = {
                token: res.data.accessToken ? res.data.accessToken : null,
                expired: res.data.expireTime ? res.data.expireTime : null
            };
            localStorage.setItem(id, btoa(JSON.stringify(data)));
            plyr[idplay](data.token);
        }, function (err) {
        })
}

if(!localStorage.getItem('key-client')){
    callNewToken('key-client', 'player', 'ba8856216e3b4f2681c0c7c706d37df8', '50793f889ca74387bb9028029da6137b');
} else {
    let data = JSON.parse(atob(localStorage.getItem('key-client')));
    if (data.expired < Date.now()){
        callNewToken('key-client', 'player', 'ba8856216e3b4f2681c0c7c706d37df8', '50793f889ca74387bb9028029da6137b');
    }else{
        plyr['player'](data.token)
        console.log(data.expired)
    }
};

if(!localStorage.getItem('key-client2')){
    callNewToken('key-client2', 'player2', 'cd3807c3ddf64098a4628eb188101b04', '50793f889ca74387bb9028029da6137b');
} else {
    let data = JSON.parse(atob(localStorage.getItem('key-client2')));
    if (data.expired < Date.now()){
        callNewToken('key-client2', 'player2', 'cd3807c3ddf64098a4628eb188101b04', '50793f889ca74387bb9028029da6137b');
    }else{
        plyr['player2'](data.token)
        console.log(data.expired)
    }
}






if (document.getElementById('video-container-play-content')){
    document.getElementById('video-container-play-content').setAttribute("title","Play/Stop");
    document.getElementById('video-container-capturePicture-content').setAttribute("title","Screenshot");
    document.getElementById('video-container-sound-content').setAttribute("title","Sound");
    document.getElementById('video-container-pantile-content').setAttribute("title","PTZ Control");
    document.getElementById('video-container-recordvideo-content').setAttribute("title","Record Screen");
    document.getElementById('video-container-talk-content').setAttribute("title","Talk");
    document.getElementById('video-container-zoom-content').setAttribute("title","Zoom");
    document.getElementById('video-container-hd-content').setAttribute("title","Video Resolution");
    document.getElementById('video-container-webExpend-content').setAttribute("title","Full Screen Mode");
    document.getElementById('video-container-expend-content').setAttribute("title","Full Screen");
}
