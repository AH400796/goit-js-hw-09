!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=t.startBtn,n=t.stopBtn,o=null;e.addEventListener("click",(function(){e.setAttribute("disabled",!0),o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){e.removeAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.cc8c7418.js.map
