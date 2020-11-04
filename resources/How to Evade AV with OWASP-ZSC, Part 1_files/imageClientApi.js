!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.imageClientApi=t():e.imageClientApi=t()}(this,(function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t,i){"use strict";var a={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},r=[a.JPG,a.JPEG,a.JPE,a.PNG,a.GIF,a.WEBP];e.exports={alignTypes:{CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},alignTypesMap:{center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},transformTypes:{FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},fittingTypes:{SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},htmlTag:{BG:"bg",IMG:"img",SVG:"svg"},upscaleMethods:{AUTO:"auto",CLASSIC:"classic",SUPER:"super"},upscaleMethodsValues:{classic:1,super:2},defaultUSM:{radius:.66,amount:1,threshold:.01},emptyData:{uri:"",css:{img:{},container:{}},attr:{img:{},container:{}}},imageQuality:{HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},imageFilters:{CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},imageScaleDefaults:{HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},fileType:a,supportedExtensions:r,webp:{LOSSLESS:"lossless",LOSSY:"lossy",ALPHA:"alpha",ANIMATION:"animation"},SAFE_TRANSFORMED_AREA:25e6,SUPER_UPSCALE_MODELS:[1.5,2,4],MAX_DEVICE_PIXEL_RATIO:2,API_VERSION:"v1"}},function(e,t,i){"use strict";var a=i(5),r=i(2),n=i(0),s=i(3);function o(e){var t=[n.fileType.PNG,n.fileType.JPEG,n.fileType.JPG,n.fileType.JPE,n.fileType.WIX_ICO_MP,n.fileType.WIX_MP];return r.includes(t,l(e))}function c(e){return r.includes(["webp"],l(e))}function h(e){return/(^https?)|(^data)|(^\/\/)/.test(e)}function l(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function u(e,t,i,a,r){return r===n.transformTypes.FILL?function(e,t,i,a){return Math.max(i/e,a/t)}(e,t,i,a):r===n.transformTypes.FIT?function(e,t,i,a){return Math.min(i/e,a/t)}(e,t,i,a):1}function p(e,t){var i=m(e,t);return{optimizedScaleFactor:n.imageScaleDefaults[i].maxUpscale,upscaleMethodValue:n.upscaleMethodsValues.classic,forceUSM:!1}}function g(e,t){var i=m(e,t);return{optimizedScaleFactor:n.imageScaleDefaults[i].maxUpscale,upscaleMethodValue:n.upscaleMethodsValues.classic,forceUSM:!1}}function T(e,t,i){return{optimizedScaleFactor:r.last(n.SUPER_UPSCALE_MODELS),upscaleMethodValue:n.upscaleMethodsValues.super,forceUSM:!(n.SUPER_UPSCALE_MODELS.includes(i)||i>r.last(n.SUPER_UPSCALE_MODELS))}}function m(e,t){var i=e*t;return i>n.imageScaleDefaults[n.imageQuality.HIGH].size?n.imageQuality.HIGH:i>n.imageScaleDefaults[n.imageQuality.MEDIUM].size?n.imageQuality.MEDIUM:i>n.imageScaleDefaults[n.imageQuality.LOW].size?n.imageQuality.LOW:n.imageQuality.TINY}function d(e,t){var i=Math.pow(10,t||0);return(e*i/i).toFixed(parseInt(t,10))}e.exports={populateGlobalFeatureSupport:function(e){void 0===e&&(e=""),"undefined"!=typeof window&&"undefined"!=typeof navigator?(a.checkSupportByUserAgent(navigator.userAgent),a.checkSupportByFeatureDetection(),s.setFeature("isObjectFitBrowser","objectFit"in window.document.documentElement.style)):a.checkSupportByUserAgent(e)},isWEBPBrowserSupport:a.isWEBPBrowserSupport,isObjectFitBrowserSupport:function(){return s.getFeature("isObjectFitBrowser")},isImageTransformApplicable:function(e){return o(e)&&!h(e)},isValidRequest:function(e,t,i){return i&&t&&!(!(a=t.id)||!a.trim()||"none"===a.toLowerCase())&&r.includes(n.fittingTypes,e);var a},isImageTypeSupported:o,isExternalUrl:h,isWEBP:c,isSEOBot:function(e){return e&&e.isSEOBot||!1},getFileType:function(e){return function(e){return r.includes([n.fileType.JPEG,n.fileType.JPG,n.fileType.JPE],l(e))}(e)?n.fileType.JPG:function(e){return r.includes(["png"],l(e))}(e)?n.fileType.PNG:c(e)?n.fileType.WEBP:n.fileType.UNRECOGNIZED},getFileExtension:l,getFileName:function(e,t){var i=/\.([^.]*)$/;if("string"==typeof t&&t.length){var a=["/","\\","?","<",">","|","“",":",'"'].map(encodeURIComponent),s=new RegExp("("+a.concat(["\\.","\\*"]).join("|")+")","g"),o=t,c=t.match(i);return c&&r.includes(n.supportedExtensions,c[1])&&(o=t.replace(i,"")),encodeURIComponent(o).replace(s,"_")}var h=e.match(/\/(.*?)$/);return(h?h[1]:e).replace(i,"")},getAlignedRect:function(e,t,i){var a,r;switch(i){case n.alignTypes.CENTER:a=Math.max(0,(e.width-t.width)/2),r=Math.max(0,(e.height-t.height)/2);break;case n.alignTypes.TOP:a=Math.max(0,(e.width-t.width)/2),r=0;break;case n.alignTypes.TOP_LEFT:a=0,r=0;break;case n.alignTypes.TOP_RIGHT:a=Math.max(0,e.width-t.width),r=0;break;case n.alignTypes.BOTTOM:a=Math.max(0,(e.width-t.width)/2),r=Math.max(0,e.height-t.height);break;case n.alignTypes.BOTTOM_LEFT:a=0,r=Math.max(0,e.height-t.height);break;case n.alignTypes.BOTTOM_RIGHT:a=Math.max(0,e.width-t.width),r=Math.max(0,e.height-t.height);break;case n.alignTypes.LEFT:a=0,r=Math.max(0,(e.height-t.height)/2);break;case n.alignTypes.RIGHT:a=Math.max(0,e.width-t.width),r=Math.max(0,(e.height-t.height)/2)}return{x:e.x?e.x+a:a,y:e.y?e.y+r:r,width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}},getOverlappingRect:function(e,t){var i=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),a=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return i&&a&&(e.width!==i||e.height!==a)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:i,height:a}:null},getScaleFactor:u,getTransformData:function(e,t,i,a,r,s){var o=function(e,t,i,a,r){var s,o,c;if(s=u(e,t,i,a,r),r===n.transformTypes.FILL?(o=i,c=a):r===n.transformTypes.FIT&&(o=e*s,c=t*s),o*c>n.SAFE_TRANSFORMED_AREA){var h=Math.sqrt(n.SAFE_TRANSFORMED_AREA/(o*c));s=u(e,t,o*=h,c*=h,r)}return{scaleFactor:s,width:o,height:c}}(e=e||i.width,t=t||i.height,i.width*a,i.height*a,r),c=o.scaleFactor;return function(e,t,i,a,r,s,o){var c,h,l=function(e,t,i,a){return{classic:p,auto:g,super:T}[a](e,t,i)}(e,t,s,r),u=l.optimizedScaleFactor,m=l.upscaleMethodValue,d=l.forceUSM;if(s<=u)return{width:i,height:a,scaleFactor:s,upscaleMethodValue:m,forceUSM:d,cssUpscaleNeeded:!1};switch(o){case n.transformTypes.FILL:c=i*(u/s),h=a*(u/s);break;case n.transformTypes.FIT:c=e*u,h=t*u}return{width:c,height:h,scaleFactor:u,upscaleMethodValue:m,forceUSM:d,cssUpscaleNeeded:!0}}(e,t,o.width,o.height,s,c,r)},getDevicePixelRatio:function(e){return Math.min(e.pixelAspectRatio||1,n.MAX_DEVICE_PIXEL_RATIO)},getAlignment:function(e){return n.alignTypesMap[e.alignment]||n.alignTypesMap[n.alignTypes.CENTER]},getPreferredImageQuality:function(e,t){return n.imageScaleDefaults[m(e,t)].quality},getDimension:function(e,t,i,a,r){var n=u(e,t,i,a,r);return{width:Math.round(e*n),height:Math.round(t*n)}},getFocalPoint:function(e){var t=null;return"number"!=typeof e.x||isNaN(e.x)||"number"!=typeof e.y||isNaN(e.y)||(t={x:d(Math.max(0,Math.min(100,e.x))/100,2),y:d(Math.max(0,Math.min(100,e.y))/100,2)}),t},getUpscaleString:function(e){return e&&e.upscaleMethod&&"string"==typeof e.upscaleMethod&&n.upscaleMethods[e.upscaleMethod.toUpperCase()]||n.upscaleMethods.AUTO},roundToFixed:d}},function(e,t,i){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports={assign:function(){for(var e=arguments[0]||{},t=Array.prototype.slice.call(arguments,1,arguments.length),i=0;i<t.length;i++){var a=t[i];for(var r in a)a.hasOwnProperty(r)&&(e[r]=a[r])}return e},includes:function(e,t){return e.indexOf?e.indexOf(t)>-1:!(!e||"object"!==a(e))&&Object.keys(e).some((function(i){return e[i]===t}))},last:function(e){return e[e.length-1]},template:function(e){return function(t){var i=e;for(var a in t)t.hasOwnProperty(a)&&(i=i.replace(new RegExp("\\${"+a+"}","g"),t[a]));return i}}}},function(e,t,i){"use strict";var a={isWEBP:{lossless:!1,lossy:!1,alpha:!1,animation:!1},isObjectFitBrowser:!0};e.exports={getFeature:function(e){return a[e]},setFeature:function(e,t){a[e]=t}}},function(e,t,i){"use strict";var a=i(1),r=i(7),n=i(8);e.exports=function(e,t,i,s){var o=a.isSEOBot(s),c=a.getFileType(t.id),h=a.getFileName(t.id,t.name),l=a.getFileExtension(t.id),u=!o&&a.isWEBPBrowserSupport(c),p=o?1:a.getDevicePixelRatio(i),g={fileName:h,fileExtension:l,fileType:c,isWEBPSupport:u,fittingType:e,preferredExtension:u?"webp":l,src:{id:t.id,width:t.width,height:t.height,isCropped:!1},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},parts:[],devicePixelRatio:p,quality:0,upscaleMethod:a.getUpscaleString(s),progressive:!0,watermark:"",unsharpMask:{},filters:{}};return a.isImageTransformApplicable(t.id)&&(r.setTransformParts(g,t,i),n.setTransformOptions(g,s)),g}},function(e,t,i){"use strict";var a=i(6),r=i(3),n=i(0);function s(e){var t=r.getFeature("isWEBP"),i=new window.Image;i.onload=function(){t[e]=i.width>0&&i.height>0,r.setFeature("isWEBP",t)},i.onerror=function(){t[e]=!1,r.setFeature("isWEBP",t)},i.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]}e.exports={checkSupportByUserAgent:function(e){if(e){var t,i=a(e),s=i.browser,o=i.os,c=parseFloat(s.version),h=parseFloat(o.version),l=new RegExp(/AppleWebKit\/([\d.]+)/),u=null===l.exec(e)?null:parseFloat(l.exec(e)[1]),p=function(e,t,i,a,r){var n=!e.phone&&!e.tablet&&i.chrome&&a>=23,s=e.android&&(e.phone||e.tablet)&&i.webkit&&i.chrome&&a>=25,o=e.android&&r<535&&(e.phone||e.tablet)&&t>=4.2&&i.webkit&&!i.safari,c=i.edge&&a>=18,h=!e.firefoxos&&i.firefox&&!i.webkit&&a>=65;return!!(n||s||o||c||h)}(o,h,s,c,u);r.setFeature("isWEBP",((t={})[n.webp.LOSSY]=function(e,t,i,a,r){var n=!e.phone&&!e.tablet&&i.chrome&&a>=17,s=e.android&&(e.phone||e.tablet)&&i.webkit&&i.chrome&&a>=25,o=e.android&&r<535&&(e.phone||e.tablet)&&t>=4&&i.webkit,c=i.edge&&a>=18,h=!e.firefoxos&&i.firefox&&!i.webkit&&a>=65;return!!(n||s||o||c||h)}(o,h,s,c,u),t[n.webp.LOSSLESS]=p,t[n.webp.ALPHA]=p,t[n.webp.ANIMATION]=function(e,t,i,a){var r=!e.ios&&i.chrome&&a>=32,n=i.edge&&a>=18,s=!e.firefoxos&&i.firefox&&!i.webkit&&a>=65;return!!(r||n||s)}(o,0,s,c),t))}},checkSupportByFeatureDetection:function(){s(n.webp.LOSSY),s(n.webp.LOSSLESS),s(n.webp.ALPHA),s(n.webp.ANIMATION)},isWEBPBrowserSupport:function(e){var t=r.getFeature("isWEBP"),i=e===n.fileType.JPG&&t[n.webp.LOSSY],a=e===n.fileType.PNG&&t[n.webp.LOSSLESS],s=e===n.fileType.PNG&&t[n.webp.ALPHA];return i||a&&s}}},function(e,t,i){e.exports=function(){"use strict";
/*!
     * Based on Zepto's detect module - https://github.com/madrobby/zepto/blob/master/src/detect.js#files
     * Zepto.js may be freely distributed under the MIT license. See: https://github.com/madrobby/zepto/blob/master/MIT-LICENSE
     *
     * note - MS Edge detection was added here, which Zepto does not have.
     */return function(e){var t={},i={};if(!e)return{browser:i,os:t};var a=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=e.match(/(Android);?[\s\/]+([\d.]+)?/),n=!!e.match(/\(Macintosh\; Intel /),s=e.match(/(iPad).*OS\s([\d_]+)/),o=e.match(/(iPod)(.*OS\s([\d_]+))?/),c=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),h=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=e.match(/Windows Phone ([\d.]+)/),u=h&&e.match(/TouchPad/),p=e.match(/Kindle\/([\d.]+)/),g=e.match(/Silk\/([\d._]+)/),T=e.match(/(BlackBerry).*Version\/([\d.]+)/),m=e.match(/(BB10).*Version\/([\d.]+)/),d=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),f=e.match(/PlayBook/),A=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),_=e.match(/Firefox\/([\d.]+)/),I=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),E=!A&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),L=E||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),b=e.match(/Edge\/(\d{2,}\.[\d\w]+)$/),y=e.match(/Opera Mini/);return i.webkit=a&&!b,i.webkit&&(i.version=a[1]),r&&(t.android=!0,t.version=r[2]),c&&!o&&(t.ios=t.iphone=!0,t.version=c[2].replace(/_/g,".")),s&&(t.ios=t.ipad=!0,t.version=s[2].replace(/_/g,".")),o&&(t.ios=t.ipod=!0,t.version=o[3]?o[3].replace(/_/g,"."):null),l&&(t.wp=!0,t.version=l[1]),h&&(t.webos=!0,t.version=h[2]),u&&(t.touchpad=!0),T&&(t.blackberry=!0,t.version=T[2]),m&&(t.bb10=!0,t.version=m[2]),d&&(t.rimtabletos=!0,t.version=d[2]),f&&(i.playbook=!0),p&&(t.kindle=!0,t.version=p[1]),g&&(i.silk=!0,i.version=g[1]),!g&&t.android&&e.match(/Kindle Fire/)&&(i.silk=!0),A&&!b&&(i.chrome=!0,i.version=A[1]),_&&!b&&(i.firefox=!0,i.version=_[1]),I&&(i.ie=!0,i.version=I[1]),L&&(n||t.ios)&&(i.safari=!0,n&&(i.version=L[1])),E&&(i.webview=!0),b&&(i.edge=!0,i.version=b[1]),y&&(i.operaMini=!0),t.tablet=!!(s||f||r&&!e.match(/Mobile/)||_&&e.match(/Tablet/)||(I||b)&&!e.match(/Phone/)&&e.match(/Touch/)),t.phone=!(t.tablet||t.ipod||!(r||c||h||T||m||A&&e.match(/Android/)||A&&e.match(/CriOS\/([\d.]+)/)||_&&e.match(/Mobile/)||I&&e.match(/Touch/))),t.mac=n,t.googleBot=!!e.match(/Googlebot\/2.1/),{browser:i,os:t}}}()},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);function s(e,t){var i=n.getTransformData(e.src.width,e.src.height,t,e.devicePixelRatio,r.transformTypes.FIT,e.upscaleMethod);return{transformType:r.transformTypes.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:r.alignTypesMap.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function o(e){return{transformType:r.transformTypes.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}e.exports={setTransformParts:function(e,t,i){var c;switch(t.crop&&(c=n.getOverlappingRect(t,t.crop))&&(e.src.width=c.width,e.src.height=c.height,e.src.cropped=!0,e.parts.push(o(c))),e.fittingType){case r.fittingTypes.SCALE_TO_FIT:case r.fittingTypes.LEGACY_FIT_WIDTH:case r.fittingTypes.LEGACY_FIT_HEIGHT:case r.fittingTypes.LEGACY_FULL:case r.fittingTypes.FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.fittingTypes.LEGACY_BG_NORMAL:e.parts.push(s(e,i));break;case r.fittingTypes.SCALE_TO_FILL:e.parts.push(function(e,t){var i=n.getTransformData(e.src.width,e.src.height,t,e.devicePixelRatio,r.transformTypes.FILL,e.upscaleMethod),a=n.getFocalPoint(e.focalPoint);return{transformType:a?r.transformTypes.FILL_FOCAL:r.transformTypes.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:n.getAlignment(t),focalPointX:a&&a.x,focalPointY:a&&a.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(e,i));break;case r.fittingTypes.STRETCH:e.parts.push(function(e,t){var i=n.getScaleFactor(e.src.width,e.src.height,t.width,t.height,r.transformTypes.FILL),o=a.assign({},t);return o.width=e.src.width*i,o.height=e.src.height*i,s(e,o)}(e,i));break;case r.fittingTypes.TILE_HORIZONTAL:case r.fittingTypes.TILE_VERTICAL:case r.fittingTypes.TILE:case r.fittingTypes.LEGACY_ORIGINAL_SIZE:case r.fittingTypes.ORIGINAL_SIZE:c=n.getAlignedRect(e.src,i,i.alignment),e.src.isCropped?(a.assign(e.parts[0],c),e.src.width=c.width,e.src.height=c.height):e.parts.push(o(c));break;case r.fittingTypes.LEGACY_STRIP_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_STRIP_TILE_VERTICAL:case r.fittingTypes.LEGACY_STRIP_TILE:case r.fittingTypes.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FIT:case r.fittingTypes.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:r.transformTypes.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);function s(e,t,i){return!isNaN(e)&&"number"==typeof e&&0!==e&&e>=t&&e<=i}e.exports={setTransformOptions:function(e,t){t=t||{},e.quality=function(e,t){var i=e.fileType===r.fileType.PNG&&e.isWEBPSupport;if(e.fileType===r.fileType.JPG||i){var s=a.last(e.parts),o=n.getPreferredImageQuality(s.width,s.height),c=t.quality&&t.quality>=5&&t.quality<=90?t.quality:o;return c=i?c+5:c,parseInt(c,10)}return 0}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t),e.unsharpMask=function(e,t){var i;!function(e){e=e||{};var t=!isNaN(e.radius)&&"number"==typeof e.radius&&e.radius>=.1&&e.radius<=500,i=!isNaN(e.amount)&&"number"==typeof e.amount&&e.amount>=0&&e.amount<=10,a=!isNaN(e.threshold)&&"number"==typeof e.threshold&&e.threshold>=0&&e.threshold<=255;return t&&i&&a}(t.unsharpMask)?function(e){return e=e||{},!isNaN(e.radius)&&"number"==typeof e.radius&&0===e.radius&&!isNaN(e.amount)&&"number"==typeof e.amount&&0===e.amount&&!isNaN(e.threshold)&&"number"==typeof e.threshold&&0===e.threshold}(t.unsharpMask)||function(e){var t=a.last(e.parts);return!(t.scaleFactor>=1)||t.forceUSM}(e)&&(i=r.defaultUSM):i={radius:t.unsharpMask.radius,amount:t.unsharpMask.amount,threshold:t.unsharpMask.threshold};i&&(i.radius=n.roundToFixed(i.radius,2),i.amount=n.roundToFixed(i.amount,2),i.threshold=n.roundToFixed(i.threshold,2));return i}(e,t),e.filters=function(e){var t=e.filters||{},i={};s(t[r.imageFilters.CONTRAST],-100,100)&&(i[r.imageFilters.CONTRAST]=t[r.imageFilters.CONTRAST]);s(t[r.imageFilters.BRIGHTNESS],-100,100)&&(i[r.imageFilters.BRIGHTNESS]=t[r.imageFilters.BRIGHTNESS]);s(t[r.imageFilters.SATURATION],-100,100)&&(i[r.imageFilters.SATURATION]=t[r.imageFilters.SATURATION]);s(t[r.imageFilters.HUE],-180,180)&&(i[r.imageFilters.HUE]=t[r.imageFilters.HUE]);s(t[r.imageFilters.BLUR],0,100)&&(i[r.imageFilters.BLUR]=t[r.imageFilters.BLUR]);return i}(t)}}},function(e,t,i){"use strict";var a=i(0),r=i(1),n=i(10),s=i(4);e.exports=function(e,t,i,o,c){var h=a.emptyData.uri;return r.isImageTransformApplicable(t.id)?(c=c||s(e,t,i,o,c),h=n.getImageURI(c)):h=t.id,h}},function(e,t,i){"use strict";var a,r=i(2),n=i(0),s=r.template("fit/w_${width},h_${height}"),o=r.template("fill/w_${width},h_${height},al_${alignment}"),c=r.template("fill/w_${width},h_${height},fp_${focalPointX}_${focalPointY}"),h=r.template("crop/x_${x},y_${y},w_${width},h_${height}"),l=r.template("crop/w_${width},h_${height},al_${alignment}"),u=r.template("fill/w_${width},h_${height},al_${alignment}"),p=r.template(",lg_${upscaleMethodValue}"),g=r.template(",q_${quality}"),T=r.template(",usm_${radius}_${amount}_${threshold}"),m=r.template(",bl"),d=r.template(",wm_${watermark}"),f=((a={})[n.imageFilters.CONTRAST]=r.template(",con_${contrast}"),a[n.imageFilters.BRIGHTNESS]=r.template(",br_${brightness}"),a[n.imageFilters.SATURATION]=r.template(",sat_${saturation}"),a[n.imageFilters.HUE]=r.template(",hue_${hue}"),a[n.imageFilters.BLUR]=r.template(",blur_${blur}"),a);e.exports={getImageURI:function(e){var t=[];e.parts.forEach((function(e){switch(e.transformType){case n.transformTypes.CROP:t.push(h(e));break;case n.transformTypes.LEGACY_CROP:t.push(l(e));break;case n.transformTypes.LEGACY_FILL:var i=u(e);e.upscale&&(i+=p(e)),t.push(i);break;case n.transformTypes.FIT:var a=s(e);e.upscale&&(a+=p(e)),t.push(a);break;case n.transformTypes.FILL:var r=o(e);e.upscale&&(r+=p(e)),t.push(r);break;case n.transformTypes.FILL_FOCAL:var g=c(e);e.upscale&&(g+=p(e)),t.push(g)}}));var i=t.join("/");return e.quality&&(i+=g(e)),e.unsharpMask&&(i+=T(e.unsharpMask)),e.progressive||(i+=m(e)),e.watermark&&(i+=d(e)),e.filters&&(i+=Object.keys(e.filters).map((function(t){return f[t](e.filters)})).join("")),e.src.id+"/"+n.API_VERSION+"/"+i+"/"+e.fileName+"."+e.preferredExtension}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1),s=i(12),o=i(4),c=i(9);n.populateGlobalFeatureSupport(),e.exports={populateGlobalFeatureSupport:n.populateGlobalFeatureSupport,getData:function(e,t,i,h){var l={};if(n.isValidRequest(e,t,i)){var u=o(e,t,i,h);l.uri=c(e,t,i,h,u),a.assign(l,s.getAttributes(u,i))}else l=r.emptyData;return l},fittingTypes:r.fittingTypes,alignTypes:r.alignTypes,htmlTag:r.htmlTag,upscaleMethods:r.upscaleMethods}},function(e,t,i){"use strict";var a=i(0),r=i(1),n=i(13),s=i(14),o=i(15),c=i(16);e.exports={getAttributes:function(e,t){return(t.htmlTag===a.htmlTag.BG?n:t.htmlTag===a.htmlTag.SVG?o:r.isObjectFitBrowserSupport()?s:c).get(e,t)}}},function(e,t,i){"use strict";var a=i(0);e.exports={get:function(e,t){var i={css:{container:{}}},r=i.css,n=a.alignTypes,s=e.fittingType,o=a.fittingTypes;switch(s){case o.ORIGINAL_SIZE:case o.LEGACY_ORIGINAL_SIZE:case o.LEGACY_STRIP_ORIGINAL_SIZE:r.container.backgroundSize="auto",r.container.backgroundRepeat="no-repeat";break;case o.SCALE_TO_FIT:case o.LEGACY_STRIP_SCALE_TO_FIT:r.container.backgroundSize="contain",r.container.backgroundRepeat="no-repeat";break;case o.STRETCH:r.container.backgroundSize="100% 100%",r.container.backgroundRepeat="no-repeat";break;case o.SCALE_TO_FILL:case o.LEGACY_STRIP_SCALE_TO_FILL:r.container.backgroundSize="cover",r.container.backgroundRepeat="no-repeat";break;case o.TILE_HORIZONTAL:case o.LEGACY_STRIP_TILE_HORIZONTAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-x";break;case o.TILE_VERTICAL:case o.LEGACY_STRIP_TILE_VERTICAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-y";break;case o.TILE:case o.LEGACY_STRIP_TILE:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat";break;case o.FIT_AND_TILE:case o.LEGACY_STRIP_FIT_AND_TILE:r.container.backgroundSize="contain",r.container.backgroundRepeat="repeat";break;case o.LEGACY_BG_FIT_AND_TILE:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat";break;case o.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-x";break;case o.LEGACY_BG_FIT_AND_TILE_VERTICAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-y";break;case o.LEGACY_BG_NORMAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="no-repeat"}switch(t.alignment){case n.CENTER:r.container.backgroundPosition="center center";break;case n.LEFT:r.container.backgroundPosition="left center";break;case n.RIGHT:r.container.backgroundPosition="right center";break;case n.TOP:r.container.backgroundPosition="center top";break;case n.BOTTOM:r.container.backgroundPosition="center bottom";break;case n.TOP_RIGHT:r.container.backgroundPosition="right top";break;case n.TOP_LEFT:r.container.backgroundPosition="left top";break;case n.BOTTOM_RIGHT:r.container.backgroundPosition="right bottom";break;case n.BOTTOM_LEFT:r.container.backgroundPosition="left bottom"}return i}}},function(e,t,i){"use strict";var a=i(0);e.exports={get:function(e,t){var i={css:{container:{},img:{}}},r=i.css,n=e.fittingType,s=t.alignment,o=a.fittingTypes,c=a.alignTypes;switch(r.container.position="relative",n){case o.ORIGINAL_SIZE:case o.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(r.img.width=e.parts[0].width,r.img.height=e.parts[0].height):(r.img.width=e.src.width,r.img.height=e.src.height);break;case o.SCALE_TO_FIT:case o.LEGACY_FIT_WIDTH:case o.LEGACY_FIT_HEIGHT:case o.LEGACY_FULL:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="contain";break;case o.STRETCH:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="fill";break;case o.SCALE_TO_FILL:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="cover"}if(r.img.width!==t.width||r.img.height!==t.height){var h=Math.round((t.height-r.img.height)/2),l=Math.round((t.width-r.img.width)/2);switch(r.img.position="absolute",r.img.top="auto",r.img.right="auto",r.img.bottom="auto",r.img.left="auto",s){default:case c.CENTER:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="none";break;case c.LEFT:r.img.left=0,r.img.top=h;break;case c.RIGHT:r.img.right=0,r.img.top=h;break;case c.TOP:r.img.left=l,r.img.top=0;break;case c.BOTTOM:r.img.left=l,r.img.bottom=0;break;case c.TOP_RIGHT:r.img.right=0,r.img.top=0;break;case c.TOP_LEFT:r.img.left=0,r.img.top=0;break;case c.BOTTOM_RIGHT:r.img.right=0,r.img.bottom=0;break;case c.BOTTOM_LEFT:r.img.left=0,r.img.bottom=0}}return i}}},function(e,t,i){"use strict";var a=i(0),r=i(1);e.exports={get:function(e,t){var i,n={css:{container:{}},attr:{container:{},img:{}}},s=n.css,o=n.attr,c=e.fittingType,h=a.fittingTypes,l=t.alignment,u=a.alignTypes,p=e.src.width,g=e.src.height;switch(s.container.position="relative",c){case h.ORIGINAL_SIZE:case h.LEGACY_ORIGINAL_SIZE:case h.TILE:e.parts&&e.parts.length?(o.img.width=e.parts[0].width,o.img.height=e.parts[0].height):(o.img.width=p,o.img.height=g),o.img.preserveAspectRatio="xMidYMid slice";break;case h.SCALE_TO_FIT:case h.LEGACY_FIT_WIDTH:case h.LEGACY_FIT_HEIGHT:case h.LEGACY_FULL:o.img.width="100%",o.img.height="100%",o.img.transform="",o.img.preserveAspectRatio="";break;case h.STRETCH:o.img.width=t.width,o.img.height=t.height,o.img.x=0,o.img.y=0,o.img.transform="",o.img.preserveAspectRatio="none";break;case h.SCALE_TO_FILL:r.isImageTransformApplicable(e.src.id)?(o.img.width=t.width,o.img.height=t.height):(i=r.getDimension(p,g,t.width,t.height,a.transformTypes.FILL),o.img.width=i.width,o.img.height=i.height),o.img.x=0,o.img.y=0,o.img.transform="",o.img.preserveAspectRatio="xMidYMid slice"}if(o.img.width!==t.width||o.img.height!==t.height){var T,m,d=0,f=0;c===h.TILE?(T=t.width%o.img.width,m=t.height%o.img.height):(T=t.width-o.img.width,m=t.height-o.img.height);var A=Math.round(T/2),_=Math.round(m/2);switch(l){case u.TOP_LEFT:d=0,f=0;break;case u.TOP:d=A,f=0;break;case u.TOP_RIGHT:d=T,f=0;break;case u.LEFT:d=0,f=_;break;case u.CENTER:d=A,f=_;break;case u.RIGHT:d=T,f=_;break;case u.BOTTOM_LEFT:d=0,f=m;break;case u.BOTTOM:d=A,f=m;break;case u.BOTTOM_RIGHT:d=T,f=m}o.img.x=d,o.img.y=f}return o.container.width=t.width,o.container.height=t.height,o.container.viewBox=[0,0,t.width,t.height].join(" "),n}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);e.exports={get:function(e,t){var i,s,o,c={css:{container:{},img:{}}},h=c.css,l=e.fittingType,u=r.fittingTypes,p=t.alignment,g=r.alignTypes;switch(e.parts&&e.parts.length?(i=e.parts[0].width,s=e.parts[0].height):(i=e.src.width,s=e.src.height),h.img.display="block",h.container.position="relative",h.img.position="absolute",h.img.top="auto",h.img.right="auto",h.img.bottom="auto",h.img.left="auto",l){case u.ORIGINAL_SIZE:case u.LEGACY_ORIGINAL_SIZE:h.img.width=i,h.img.height=s;break;case u.SCALE_TO_FIT:case u.LEGACY_FIT_WIDTH:case u.LEGACY_FIT_HEIGHT:case u.LEGACY_FULL:o=n.getDimension(i,s,t.width,t.height,r.transformTypes.FIT),a.assign(h.img,o);break;case u.STRETCH:h.img.width=t.width,h.img.height=t.height;break;case u.SCALE_TO_FILL:var T=e.src.id;n.isImageTypeSupported(T)||n.isExternalUrl(T)?(h.img.width=t.width,h.img.height=t.height):(o=n.getDimension(i,s,t.width,t.height,r.transformTypes.FILL),a.assign(h.img,o),h.container.overflow="hidden")}if(h.img.width!==t.width||h.img.height!==t.height){var m=Math.round((t.height-h.img.height)/2),d=Math.round((t.width-h.img.width)/2);switch(p){default:case g.CENTER:h.img.top=m,h.img.left=d;break;case g.LEFT:h.img.left=0,h.img.top=m;break;case g.RIGHT:h.img.right=0,h.img.top=m;break;case g.TOP:h.img.left=d,h.img.top=0;break;case g.BOTTOM:h.img.left=d,h.img.bottom=0;break;case g.TOP_RIGHT:h.img.right=0,h.img.top=0;break;case g.TOP_LEFT:h.img.left=0,h.img.top=0;break;case g.BOTTOM_RIGHT:h.img.right=0,h.img.bottom=0;break;case g.BOTTOM_LEFT:h.img.left=0,h.img.bottom=0}}return c}}}])}));
//# sourceMappingURL=imageClientApi.js.map