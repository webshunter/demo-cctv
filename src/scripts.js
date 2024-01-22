
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

console.log(ezuikit);

var player1 = document.getElementById("video-container");

var w = player1.clientWidth;

var player = new ezuikit.EZUIKitPlayer({
    id: 'video-container',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    autoplay: true,
    accessToken: "at.c9rdnxkgdfms7jdl4p155a974o3iirs7-2veg476opa-1vbju1s-dg739pgxc",
    template: 'pcLive',
    width: w,
    height: 400,
    env:{
    	domain: "https://isgpopen.ezvizlife.com"
    }
});
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
player.getRealUrl();