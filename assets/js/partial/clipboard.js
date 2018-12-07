import ClipboardJS from "clipboard";
import tippy from "tippy.js";

const MY_SWITCH_FRIEND_CODE = 'SW-1510-1283-3250';

// friend_cd copied to clipboard
new ClipboardJS('#nintendo-switch');

// show tooltip
const friend_cd = document.createElement('div');
friend_cd.innerHTML = 'Copied to clipboard<br />【' + MY_SWITCH_FRIEND_CODE + '】';
tippy('#nintendo-switch', {
    trigger: 'click',
    html: friend_cd
});
