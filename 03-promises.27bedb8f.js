function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const{form:i,delayInput:l,stepInput:a,amountInput:d}={form:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')};let s=null,f=null,c=null;function p(t,n){new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(u).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}l.addEventListener("input",(function(e){s=Number(e.target.value),localStorage.setItem("first delay",s)})),a.addEventListener("input",(function(e){f=Number(e.target.value)})),d.addEventListener("input",(function(e){c=Number(e.target.value)})),i.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=c;e+=1)p(e,s),s+=f;s=Number(localStorage.getItem("first delay"))}));
//# sourceMappingURL=03-promises.27bedb8f.js.map
