import ClipboardJS from "clipboard";
import tippy from "tippy.js";

// friend_cd copied to clipboard
new ClipboardJS('#nintendo-switch');

// show tooltip
const friend_cd = document.createElement('div');
friend_cd.innerHTML = 'Copied to clipboard<br />【SW-1510-1283-3250】';
tippy('#nintendo-switch', {
    trigger: 'click',
    html: friend_cd
});
