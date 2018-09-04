'use strict';

import square from './partial/about.js';
console.log(square(5));

let clipboard = new ClipboardJS('#nintendo-switch');
const friend_code = document.createElement('div');

friend_code.innerHTML = 'Copied to clipboard<br />【SW-1510-1283-3250】';
tippy('#nintendo-switch', {
    trigger: 'click',
    html: friend_code
});
