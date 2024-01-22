
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

var player1 = document.getElementById("video-container");
var player2 = document.getElementById("video-container2");

var w = player1.clientWidth;
var w2 = player2.clientWidth;

var player = new ezuikit.EZUIKitPlayer({
    id: 'video-container',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    autoplay: true,
    accessToken: "at.2woo7ro34v66nia077hwk23n3fa1rvbf-3k7pom88cq-19muc9b-oppzktz1e",
    template: 'pcLive',
    width: w,
    height: 400,
    env:{
    	domain: "https://isgpopen.ezvizlife.com"
    }
});


var player2 = new ezuikit.EZUIKitPlayer({
    id: 'video-container2',
    url: 'ezopen://open.ezviz.com/D78805686/1.live',
    autoplay: true,
    accessToken: "at.8b307h0d69oq3i4s1sfdtssy02d05m2v-6t6tl7w1b7-1msu7lt-nwd7uc2k5",
    template: 'pcLive',
    width: w,
    height: 400,
    env: {
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
