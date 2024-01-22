
import './css/styles.css';

import './images/turing-logo.png';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

console.log(ezuikit);

var player = new ezuikit.EZUIKitPlayer({
    id: 'video-container',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    autoplay: true,
    accessToken: "at.augkqi7k55p4793tcv0qxgkr8s2tyvxj-9gw9vatrvr-0jp01y8-h895tjmqi",
    width: 600,
    height: 400,
});

player.getRealUrl()
