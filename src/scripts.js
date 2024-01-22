
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
    accessToken: "at.c9rdnxkgdfms7jdl4p155a974o3iirs7-2veg476opa-1vbju1s-dg739pgxc",
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
    env:{
    	domain: "https://isgpopen.ezvizlife.com"
    }
});


player.getRealUrl()
