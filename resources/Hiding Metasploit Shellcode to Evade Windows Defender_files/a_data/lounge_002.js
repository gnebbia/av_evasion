!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.a8dc02def3107413d47189b1bce61bd9.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.7e9ed29df262aaa2166dbd33e16af7a4.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.f86a840f3451e5487a277f1443585291.js","recommendations/main":"https://c.disquscdn.com/next/embed/recommendations.bundle.baf6e3fc6bd5dc65efc3be8dc20f0f7d.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","recommendations/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.847783fd9a0d1b9b80a706571a35d786.js",a.body.appendChild(c)}();