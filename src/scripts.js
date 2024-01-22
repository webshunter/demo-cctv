
import './css/styles.css';

import './images/turing-logo.png';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

console.log(ezuikit);

var player = new ezuikit.EZUIKitPlayer({
    id: 'video-container',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    autoplay: true,
    accessToken: "at.3e4df1kgbwdx202h8b96kwmj6j6kcmxz-839qr4f7fa-0dllssw-6zgclci2b",
    decoderPath: '/',
    width: 600,
    height: 400,
});
