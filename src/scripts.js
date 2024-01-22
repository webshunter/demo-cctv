
import './css/styles.css';

import './images/turing-logo.png';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

console.log(ezuikit);

var player = new ezuikit.EZUIKitPlayer({
    id: 'video-container',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    autoplay: true,
    accessToken: "at.c9rdnxkgdfms7jdl4p155a974o3iirs7-2veg476opa-1vbju1s-dg739pgxc",
    width: 600,
    height: 400,
    env:{
    	domain: "https://isgpopen.ezvizlife.com"
    }
});
