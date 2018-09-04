import "clipboard";

const clipboard = new ClipboardJS('#nintendo-switch');
const friend_cd = document.createElement('div');

friend_cd.innerHTML = 'Copied to clipboard<br />【SW-1510-1283-3250】';
tippy('#nintendo-switch', {
    trigger: 'click',
    html: friend_cd
});
