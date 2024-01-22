// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ezuikit from 'ezuikit-js';

console.log(ezuikit);

const player = new ezuikit.EZUIKitPlayer({
    id: 'video-container', // 视频容器ID
    accessToken: 'at.3e4df1kgbwdx202h8b96kwmj6j6kcmxz-839qr4f7fa-0dllssw-6zgclci2b',
    url: 'ezopen://open.ezviz.com/D76265573/1.live',
    width: 600,
    height: 400,
    handleError: (err) => {
        if (err.type === "handleRunTimeInfoError" && err.data.nErrorCode === 5) {
            // 加密设备密码错误
        }
    },
})
