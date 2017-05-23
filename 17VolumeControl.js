// ==UserScript==
// @name         17 volume control
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add the lack of function in 17 video js
// @author       Tokenyet (or Dowen)"
// @supportURL   tokenyete@gmail.com
// @homepage     https://github.com/Tokenyet/17-Volume-Control
// @include      http*://17.media*
// @match        http://tampermonkey.net/scripts.php
// @icon         https://17.media/favicon.ico
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
    //$(".vjs-control-bar").append("<input id=\"vol-control\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" oninput=\"SetVolume(this.value)\" onchange=\"SetVolume(this.value)\"></input>");
    $("<input id=\"vol-control\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" oninput=\"SetVolume(this.value)\" onchange=\"SetVolume(this.value)\"></input>").insertBefore(".vjs-fullscreen-control.vjs-control.vjs-button");
    window.SetVolume = function(val)
    {
        videojs("vjs_video_3").ready(function(){
            this.volume(val / 100);
        });
    };
    // Your code here...
})();