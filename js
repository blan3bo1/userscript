// ==UserScript==
// @name         Bypass Url
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bypass Rip.Linkvertise.lol
// @match        *://linkvertise.com/*
// @downloadURL https://raw.githubusercontent.com/blan3bo1/userscript/refs/heads/main/js
// @updateURL https://raw.githubusercontent.com/blan3bo1/userscript/refs/heads/main/js
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;

    // Replace .com at the end of the domain with .lol
    let newUrl = url.replace(/\.com(\/|$)/, '.lol$1');

    if (newUrl !== url) {
        window.location.href = newUrl; // full redirect
        console.log("Redirecting to:", newUrl);
    }
})();
