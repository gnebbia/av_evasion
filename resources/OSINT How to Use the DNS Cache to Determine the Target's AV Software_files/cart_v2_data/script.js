try {
if (!window.console) {
window.console = {
log: function() {},
error: function() {}
}
}
var _xnext_included;
if (!_xnext_included && !window.location.href.match(/fb_xd_fragment/g)) {
_xnext_included = true;
window.ec = window.ec || {};
window.ec.config = window.ec.config || {};
window.ec.config.tracking = window.ec.config.tracking || {};
if(!document.body) {
throw "The tag <body> is missing";
}
function xInjectJs(src) {
var script = document.createElement("script");
script.setAttribute("src", src);
script.charset = "utf-8";
script.setAttribute("type", "text/javascript");
document.body.appendChild(script);
}
function isElmNeed() {
var config = ((window.ec || {}).storefront || {});
if (true || !!config.enable_new_product_list || !!config.enable_new_product_details || !!config.enable_new_shopping_cart) {
return true;
}
return false;
}
var isNewStorefront = isElmNeed;
/*! lazysizes - v5.1.2 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b){"use strict";var c,d;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:d,noSupport:!0};var e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=!0===a)&&(g=33),b||(b=!0,d=e-(f.now()-c),d<0&&(d=0),a||d<9?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;a<d?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a){P--,(!a||P<0||!a.target)&&(P=0)},S=function(a){return null==J&&(J="hidden"==x(b.body,"visibility")),J||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},T=function(a,c){var d,f=a,g=S(a);for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)(g=(x(f,"opacity")||1)>0)&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},U=function(){var a,f,h,j,k,m,n,p,q,r,s,t,u=c.elements;if((o=d.loadMode)&&P<8&&(a=u.length)){for(f=0,Q++;f<a;f++)if(u[f]&&!u[f]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u[f]))aa(u[f]);else if((p=u[f][i]("data-expand"))&&(m=1*p)||(m=O),r||(r=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r,s=r*d.expFactor,t=d.hFac,J=null,O<s&&P<1&&Q>2&&o>2&&!b.hidden?(O=s,Q=0):O=o>1&&Q>1&&P<6?r:N),q!==m&&(y=innerWidth+m*t,D=innerHeight+m,n=-1*m,q=m),h=u[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*t&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||S(u[f]))&&(l&&P<3&&!p&&(o<3||Q<4)||T(u[f],m))){if(aa(u[f]),k=!0,P>9)break}else!k&&l&&!j&&P<4&&Q<4&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=u[f][i](d.sizesAttr)))&&(j=g[0]||u[f]);j&&!k&&aa(j)}},V=B(U),W=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;R(a),s(b,d.loadedClass),t(b,d.loadingClass),u(b,Y),v(b,"lazyloaded")},X=A(W),Y=function(a){X({target:a.target})},Z=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},$=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},_=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},s(a,d.loadingClass),p&&(clearTimeout(m),m=k(R,2500),u(a,Y,!0)),l&&q.call(j.getElementsByTagName("source"),$),h?a.setAttribute("srcset",h):g&&!l&&(L.test(a.nodeName)?Z(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),W(o),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&P--},!0)}),aa=function(a){if(!a._lazyRace){var b,c=K.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,P++,_(a,b,f,e,c))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){3==d.loadMode&&(d.loadMode=2),ba()},da=function(){if(!l){if(f.now()-p<999)return void k(da,999);l=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){d.init&&F()}),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
window.ec = window.ec || {}
window.ecwidEvents = {
bind: function(event, fct) {
this._events = this._events || {};
this._events[event] = this._events[event] || [];
this._events[event].push(fct);
},
unbind: function(event, fct) {
this._events = this._events || {};
if (event in this._events === false) return;
this._events[event].splice(this._events[event].indexOf(fct), 1);
},
trigger: function(event /* , args... */ ) {
this._events = this._events || {};
if (event in this._events === false) return;
for (var i = 0; i < this._events[event].length; i++) {
this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
}
}
};
window.ec.events=window.ecwidEvents;(function() {
var injectRosettaRetry = 0;
function tryInjectRosettaScript(url) {
var script = document.createElement('script');
script.type = 'text/javascript';
script.onerror = function() {
document.getElementsByTagName('head')[0].removeChild(script);
injectRosettaRetry++;
if (injectRosettaRetry < 10) {
setTimeout(tryInjectRosettaScript.bind(this, url), 200);
} else {
// ретраи кончились, пошлем ошибку в ga, если он есть на странице
if (!!window.ga) {
window.ga('send', 'exception', {
'exDescription': 'Translation with url ' + url + ' not loaded.',
'exFatal': true
});
}
}
};
script.onload = function () {
window.ecwid_elm_config = window.ecwid_elm_config || {};
window.ecwid_elm_config.translations_loaded = true;
window.ecwidEvents.trigger('TRANSLATIONS_LOADED');
}
script.src = url;
document.getElementsByTagName('head')[0].appendChild(script);
}
tryInjectRosettaScript('https://d3hlm6p2n1wjk4.cloudfront.net/rosetta/translations/new-frontend/files/new-frontend.en.-90816702.js');
})();
(function() {
window.ecwid_init_elm_config = function () {
function load(){
var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.onload = function(){
window.ecwid_elm_config.loaded = true;
window.ecwidEvents.trigger('ELM_LOADED')
};
script.src = selectJsVersion('https://d3hlm6p2n1wjk4.cloudfront.net/venera/static/ecwid-storefront.d3385bbae1b05a3564ac66dfc1ad0a27.min.js');
document.getElementsByTagName('head')[0].appendChild(script);
}
function loadCheckout(callback) {
if (window.ecwid_elm_config.checkoutLoaded) {
callback();
return;
}
var script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.onload = function() {
window.ecwid_elm_config.checkoutLoaded = true;
callback();
};
script.src = selectJsVersion('https://d3hlm6p2n1wjk4.cloudfront.net/venera/static/ecwid-checkout.0d66e64550ba12ea61b2b179eb385eeb.min.js');
document.getElementsByTagName('head')[0].appendChild(script);
}
function consume(callback) {
window.ecwidEvents.bind('ELM_LOADED', callback);
if (window.ecwid_elm_config.loaded) {
callback();
}
}
function consumeTranslations(callback) {
window.ecwidEvents.bind('TRANSLATIONS_LOADED', callback);
if (window.ecwid_elm_config.translations_loaded) {
callback();
}
}
function isDebugEnabled() {
try {
return "true" === window.localStorage.getItem("debug_ecwid_storefront");
} catch (e) {
return false;
}
}
function selectJsVersion(jsFile) {
if (isDebugEnabled()) {
return jsFile.replace('.min.js', '.debug.js');
}
return jsFile;
}
window.ecwid_elm_config = window.ecwid_elm_config || {};
window.ecwid_elm_config.consume = consume;
window.ecwid_elm_config.consumeTranslations = consumeTranslations;
window.ecwid_elm_config.loadCheckout = loadCheckout
load();
}
if (isElmNeed()) {
window.ecwid_init_elm_config();
}
})()
if (window.Ecwid && window.Ecwid.restoreCartData) {
window.ec.config.restored_http_checkout = true;
document.body.className += " restored-http-checkout";
var cartData = window.Ecwid.restoreCartData;
for (var item in cartData) {
if (!cartData.hasOwnProperty(item)) continue;
if (item.match(/PSecwid__\d+PScart/) || item.match(/SP-ecwid__\d+SP-cart/)) {
var cartDataItem = JSON.parse(cartData[item]);
if (cartDataItem && cartDataItem.order && !window.ec.config.custom_redirect_after_purchase) {
window.ec.config.custom_redirect_after_purchase = cartDataItem.order.refererUrl;
}
}
}
}
function isOnIframe() {
return window.top.location != window.location;
}
// Hi! Do you love reading JavaScript code? We too!
// Ecwid has a plenty of different APIs and we welcome all developers to
// create addons and services (free or paid ones) for Ecwid merchants. Such
// addons and apps will be promoted on our site.
// More about our APIs: http://api.ecwid.com
var addExtension = function(cons,ext) {
if (cons.addExtension) cons.addExtension(ext);
else cons(ext);
};
var ep = function() {
this.extensions = [];
this.consumers = [];
var that = this;
this.registerConsumer = function(cons) {
that.consumers.push(cons);
for (var i=0; i<that.extensions.length; i++) addExtension(cons, that.extensions[i]);
};
this.addExtension = this.add = function(ext) {
that.extensions.push(ext);
for (var i=0; i<that.consumers.length; i++) addExtension(that.consumers[i],ext);
};
this.clear = function() {
that.extensions = [];
};
};
var proxyChain = function() {return {Chain:new ep};};
window.ec = window.ec || {};
window.ec.config = window.ec.config || {};
var chameleon = window.ec.config.chameleon || {};
var colorPrefix = "color-";
for (var key in chameleon) {
if (chameleon.hasOwnProperty(key) && key.indexOf(colorPrefix) == 0) {
chameleon.colors = chameleon.colors || {};
chameleon.colors[key] = chameleon[key];
}
}
window.ec.config.chameleon = chameleon;
window.Ecwid = {
MessageBundles:(window.Ecwid && window.Ecwid.MessageBundles) ? window.Ecwid.MessageBundles : {},
restoreCartData: (window.Ecwid && window.Ecwid.restoreCartData) ? window.Ecwid.restoreCartData : {},
ExtensionPoint:ep,
ProductBrowser : {Links:new ep,
CategoryView:proxyChain()
},
Controller : proxyChain(),
ShoppingCartController : proxyChain(),
ProductModel : proxyChain(),
CategoriesModel : proxyChain(),
CategoryModel : proxyChain(),
AppContainer : proxyChain(),
Profile : proxyChain(),
CustomerCredentialsModel : proxyChain(),
LocationHashModel : proxyChain(),
OnAPILoaded: new ep,
OnPageLoad: new ep,
OnSetProfile: new ep,
OnPageLoaded: new ep,
OnConfigLoaded: new ep,
OnCartChanged: new ep,
OnOrderPlaced: new ep,
OnProductOptionsChanged: new ep,
OnConsentChanged: new ep,
signature: "fdff471132fdb96fcd4ffb3716d31ce7-0",
_isInteractiveEnabled: (function() {
var cache = null;
function _getLoadedScripts() {
var loadedScripts = [];
var fullPathLoadedScripts = [];
var scripts = document.getElementsByTagName("script");
for (i = 0; i < scripts.length; i++) {
if (!scripts[i].src) {
continue;
}
var scriptPath = scripts[i].src;
if(typeof scriptPath === 'string') {
pathGroups = scriptPath.match(/.*\/([^\/#?]+)[#?]?.*/);
if (pathGroups && pathGroups.length > 1) {
loadedScripts.push(pathGroups[1]);
}
fullPathLoadedScripts.push(scriptPath);
}
}
return {"loadedScriptNames": loadedScripts, "fullPathLoadedScripts": fullPathLoadedScripts};
}
function _getIncompatibleScript() {
var scripts = _getLoadedScripts();
var loadedScriptNames = scripts.loadedScriptNames;
var fullPathLoadedScripts = scripts.fullPathLoadedScripts;
function isScriptLoadedByName(scriptName) {
return loadedScriptNames.indexOf(scriptName) != -1;
}
function isScriptLoadedByPath(scriptNameWithPath) {
for (var i in fullPathLoadedScripts) {
var path = fullPathLoadedScripts[i]
if (path.indexOf(scriptNameWithPath) != -1) {
return true;
}
}
return false;
}
var incompatibleScriptCheckFunctions = [
function checkForDdlevelsmenu() {
var hasScript = isScriptLoadedByName("menu.js");
var hasPlugin = typeof ddlevelsmenu != "undefined";
if (hasScript && hasPlugin) {
return "ddlevelsmenu";
}
return null;
},
function checkForMobmenu() {
var hasScripts = isScriptLoadedByName("mobmenu.js");
if (hasScripts) {
return "mobmenu";
}
return null;
},
function checkForPipdigBlossom() {
var hasThemeStyle = document.querySelectorAll("link[rel='stylesheet'][id='pipdig-style-css'][href*='themes/pipdig-blossom/style.css']").length > 0;
if (hasThemeStyle) {
return "pipdig-blossom";
}
return null;
},
function checkForSkel() {
var hasScripts = isScriptLoadedByName("skel-layers.min.js") || isScriptLoadedByName("skel-layers.js");
var hasPlugin = typeof skel != "undefined" && skel.hasOwnProperty('plugins') && skel.plugins.hasOwnProperty('layers');
if (hasScripts || hasPlugin) {
return "skel-layers";
}
return null;
},
function checkForJPanelMenu() {
var hasScripts = isScriptLoadedByName("jquery.jpanelmenu.min.js") || isScriptLoadedByName("jquery.jpanelmenu.js");
var hasPlugin = typeof jQuery != "undefined" && jQuery.hasOwnProperty('jPanelMenu') && typeof jQuery.jPanelMenu == "function";
if (hasScripts || hasPlugin) {
return "jPanelMenu";
}
return null;
},
function checkForWeeblyUnresponsiveTheme() {
var useUnresponsiveTheme = isScriptLoadedByName("main-mobile.js") && typeof Weebly != "undefined";
if (useUnresponsiveTheme) {
return "weeblyUnresponsiveTheme";
}
return null;
},
function checkForArtisteer() {
var badScriptLoaded = isScriptLoadedByName("script.responsive.js") && typeof responsiveDesign != "undefined";
if (badScriptLoaded) {
return "Artisteer";
}
return null;
}
];
for (var i = 0; i < incompatibleScriptCheckFunctions.length; i++) {
try {
var incompatibleScript = incompatibleScriptCheckFunctions[i]();
if (incompatibleScript) {
return incompatibleScript;
}
} catch (e) {
console.error("Failed to check plugin is included: " + e.message);
}
}
return null;
}
return function() {
if (cache != null) {
return cache;
}
cache = true;
if (cache) {
var incompatibleScript = _getIncompatibleScript();
if (incompatibleScript) {
cache = false;
console.log("Interactive was disabled by plugin or script " + incompatibleScript);
}
}
if (((window.ec || {}).config || {}).interactive != undefined) {
cache = !!window.ec.config.interactive;
console.log("Interactive was explicitly overriden with value " + cache);
}
return cache;
}
})(),
_isHoverMustBeDisabledOnDevice: function() {
return ('ontouchstart' in window || !!(window.DocumentTouch && document instanceof DocumentTouch))
&& (typeof window.matchMedia == 'function' && !window.matchMedia('(pointer: fine)').matches && window.matchMedia('(hover: none)').matches);
},
_injectEcwidCss: function() {
var cssUrlAddition = '';
cssUrlAddition += window.css_selectors_prefix ? '&id-selector=' + window.css_selectors_prefix : '';
cssUrlAddition += Ecwid._isHoverMustBeDisabledOnDevice() ? '&hover=disable' : '';
cssUrlAddition += isElmNeed() ? '&frontendV2' : '';
ChameleonIntegration = {
getChameleonColors: function () {
var colors = {};
var parent = this.findAncestor();
if (!parent) {
return colors;
}
var colorForeground = getComputedStyle(parent, null).color;
if (colorForeground.replace(/ /g,"") != "rgba(0,0,0,0)"
&& colorForeground != "transparent") {
colors['color-foreground'] = colorForeground;
colors['color-price'] = colors['color-foreground'];
}
var colorBackground = this.getBackground(parent);
if (colorBackground.replace(/ /g,"") != "rgba(0,0,0,0)"
&& colorBackground != "transparent") {
colors['color-background'] = colorBackground;
} else {
colors['color-background'] = 'white';
}
var colorLink = this.getLinkColor(parent);
if (colorLink.replace(/ /g,"") != "rgba(0,0,0,0)"
&& colorLink != "transparent") {
colors['color-link'] = colorLink;
}
return colors;
},
getChameleonFontFamily: function () {
var font = {};
var parent = this.findAncestor();
if (!parent) {
return font;
}
font['font-family'] = this.getStyle(parent, 'font-family');
return font;
},
findAncestor: function () {
var widgetTypes = ['ProductBrowser', 'SingleProduct', 'Product', 'Minicart', 'CategoriesV2', 'VCategories'];
for (var i = 0; i < widgetTypes.length; ++i) {
var productWidget = this.extractWidget(widgetTypes[i]);
if (productWidget) {
var widget = document.querySelector("#" + productWidget.id);
return widget ? widget.parentNode : undefined;
}
}
var nodes = document.getElementsByClassName('ec-cart-widget')
if (nodes.length > 0) {
return nodes[nodes.length - 1].parentNode;
}
return undefined;
},
extractWidget: function (widgetType) {
var widgets = window._xnext_initialization_scripts;
if (!widgets) {
return;
}
for (var i = widgets.length - 1; i >= 0; i--) {
if (widgets[i].widgetType == widgetType) {
return widgets[i];
}
}
},
getLinkColor: function (parent) {
var a = document.createElement('a');
a.href = a.textContent = url = '';
parent.appendChild(a);
var primary_link = document.defaultView.getComputedStyle(a, null).color;
parent.removeChild(a);
return primary_link;
},
toCamelCase: function (s) {
for (var exp = /-([a-z])/; exp.test(s); s = s.replace(exp, RegExp.$1.toUpperCase()));
return s;
},
getStyle: function (e, a) {
var v = null;
if (document.defaultView && document.defaultView.getComputedStyle) {
var cs = document.defaultView.getComputedStyle(e, null);
if (cs && cs.getPropertyValue)
v = cs.getPropertyValue(a);
}
if (!v && e.currentStyle)
v = e.currentStyle[this.toCamelCase(a)];
return v;
},
getBackground: function (e) {
var v = this.getStyle(e, 'background-color');
while (!v || v == 'transparent' || v == '#000000' || v == 'rgba(0, 0, 0, 0)') {
if (e == document.documentElement)
v = 'white';
else {
e = e.parentNode;
v = this.getStyle(e, 'background-color');
}
}
return v;
}
};
function isOnIframe() {
return window.top.location != window.location;
}
function getAdditionalCssUrlParams(colors, valueLengthLimit) {
var cssColorParams = "";
for (var key in colors) {
if (colors.hasOwnProperty(key)) {
var value = colors[key];
cssColorParams += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value.substring(0, valueLengthLimit));
}
}
return cssColorParams;
}
function isIOS13() {
var ua = navigator.userAgent;
var uaSimilarToIos = (/Version\/13/.test(ua) && (/iPad/.test(ua) || /iPod/.test(ua) || /iPhone/.test(ua) || /Intel Mac OS X/.test(ua)));
var supportTouchEvents = 'ontouchstart' in window || !!(window.DocumentTouch && document instanceof DocumentTouch);
return uaSimilarToIos && supportTouchEvents;
}
var colors;
if (window.ec && window.ec.config && window.ec.config.chameleon && window.ec.config.chameleon.colors) {
colors = window.ec.config.chameleon.colors;
}
// disable 'chameleon' if the page doesn't have additional styles (ECWID-26112)
var countStyles = document.styleSheets.length;
var noStyle = (countStyles == 0) || (countStyles == 1 && window.ecwid_loader_shown);
var chameleonEnabled = false || true && !isOnIframe();
if ((!colors && chameleonEnabled || colors === "auto") && !noStyle) {
colors = ChameleonIntegration.getChameleonColors();
}
window.ec = window.ec || {};
window.ec.config = window.ec.config || {};
window.ec.config.chameleonDefaults = window.ec.config.chameleonDefaults || {};
var valueLengthLimit;
if (!!colors) {
valueLengthLimit = 50;
cssUrlAddition += getAdditionalCssUrlParams(colors, valueLengthLimit);
window.ec.config.chameleonDefaults.colors = colors;
}
var font;
if (window.ec && window.ec.config && window.ec.config.chameleon && window.ec.config.chameleon.font) {
font = window.ec.config.chameleon.font;
}
if (!font && chameleonEnabled || font === "auto") {
font = ChameleonIntegration.getChameleonFontFamily();
}
if (isIOS13() && !/-apple-system/.test(font)) {
if (!font) {
font = {"font-family": "-apple-system"};
} else {
font["font-family"] += ", -apple-system";
}
}
if (!!font) {
valueLengthLimit = 150;
var fontFamily = font["font-family"];
if (!!fontFamily) {
var families = fontFamily.split(/,\s*/)
var str = "";
var delimiter = "";
for (var i = 0; i < families.length; i++) {
if (str.length + families[i].length > valueLengthLimit) {
break;
}
str += delimiter + families[i];
delimiter = ",";
}
cssUrlAddition += "&font-family="+encodeURIComponent(str);
window.ec.config.chameleonDefaults.font = { "font-family": str };
}
}
window.ec_legacyCssUrl = 'https://d1oxsl77a1kjht.cloudfront.net/css/new/cut?hc=391697086&ownerid=16830616&useProximaNovaFont=true' + cssUrlAddition;
var cssUrl = 'https://d1oxsl77a1kjht.cloudfront.net/css/new?hc=391697086&ownerid=16830616&useProximaNovaFont=true' + cssUrlAddition;
var l = document.createElement('link');
l.setAttribute('rel', 'stylesheet');
l.setAttribute('href', cssUrl);
document.getElementsByTagName('head')[0].appendChild(l);
window.ec.cssLinkElement = l;
},
_isAllCssLoaded: function() {
if (!true) {
return false;
}
var styleLinks = document.getElementsByTagName('link');
for (var i = 0; i < styleLinks.length; i++) {
var styleLink = styleLinks[i];
if (styleLink.rel !== 'stylesheet') continue;
if (!!styleLink.customAppStyle) continue;
if (!Ecwid._styleLinkIsLoaded(styleLink)) {
return false;
}
}
console.log("CSS loaded: all css files exist in stylesheets");
return true;
},
_styleLinkIsLoaded: function(styleLink) {
var styleSheets = document.styleSheets;
for (var i = 0; i < styleSheets.length; i++) {
if (styleSheets[i].href === styleLink.href) {
return true;
}
}
return false;
},
_documentReadyStateIsComplete: function() {
var isComplete = /complete/.test(document.readyState);
if (isComplete) {
console.log("CSS loaded: document readyState is complete");
}
return isComplete;
},
_waitForCssLoaded: function(callback) {
var ecwidCssLoadedTimer = setInterval(function() {
try {
if (Ecwid._documentReadyStateIsComplete() || /interactive/.test(document.readyState) && Ecwid._isAllCssLoaded()) {
clearInterval(ecwidCssLoadedTimer);
callback();
}
} catch(e) {
console.warn("waitForCssLoaded exception: " + e.message);
}
}, 10);
},
_autoChameleonEnabled: function() {
window.ec = window.ec || {};
window.ec.config = window.ec.config || {};
window.ec.config.chameleon = window.ec.config.chameleon || {};
var colors = window.ec.config.chameleon.colors;
var chameleonEnabled = false || true && !isOnIframe();
if (!colors && chameleonEnabled || colors === "auto") {
return true;
}
var font = window.ec.config.chameleon.font;
if (!font && chameleonEnabled || font === "auto") {
return true;
}
return false;
},
_loadEcwidCss: function() {
var ecwidCssLoaded = !!window.ec.cssLinkElement;
if (ecwidCssLoaded) {
return;
}
if (Ecwid._isInteractiveEnabled() && Ecwid._autoChameleonEnabled()) {
Ecwid._waitForCssLoaded(function() {
Ecwid._injectEcwidCss();
});
} else {
Ecwid._injectEcwidCss();
}
},
_unloadEcwidCss: function() {
if (window.ec && window.ec.cssLinkElement) {
window.ec.cssLinkElement.parentNode.removeChild(window.ec.cssLinkElement);
delete window.ec.cssLinkElement;
}
},
_loadEcwidAsync: function() {
setTimeout(function() {
Ecwid._onBodyDone();
Ecwid._onComplete();
}, 10);
},
_loadEcwidSync: function() {
if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", function() {
Ecwid._onBodyDone();
}, false);
}
window.ecwid_onBodyDoneTimerId = setInterval(function() {
if (/loaded|complete/.test(document.readyState)) {
Ecwid._onBodyDone();
}
}, 50);
document.onreadystatechange = function () {
if (document.readyState === "complete") {
Ecwid._onComplete();
}
}
},
_hasFacebookIframe: function() {
return window.location.href.match(/fb_xd_fragment/g);
},
_showPBLoader: function(id) {
var html;
html = '<style>\
\
/* PB placeholder */\
\
.ecwid-pb-placeholder {\
box-sizing: border-box;\
opacity: 0;\
min-height: 400px;\
padding-top: 1px;\
}\
\
.ecwid-pb-placeholder > div {\
box-sizing: border-box;\
}\
\
.ecwid-pb-placeholder--light,\
.ecwid-pb-placeholder--dark {\
opacity: 1;\
}\
\
.ecwid-pb-placeholder__grid {\
overflow: hidden;\
width: 100%;\
max-width: 786px;\
height: 280px;\
margin: 35px auto 50px;\
text-align: center;\
transition: opacity .15s ease-in-out;\
}\
\
.ecwid-pb-placeholder__wrap {\
margin-right: -30px;\
margin-left: -30px;\
}\
\
.ecwid-pb-placeholder__grid-cell {\
display: inline-block;\
width: 282px;\
height: 280px;\
line-height: 280px;\
white-space: nowrap;\
}\
\
.ecwid-pb-placeholder__product {\
width: 222px;\
height: 222px;\
margin: 0 auto;\
padding: 0;\
}\
\
.ecwid-pb-placeholder__title {\
max-width: 222px;\
margin: 12px auto;\
padding: 0;\
}\
\
.ecwid-pb-placeholder__title > div {\
height: 7px;\
margin: 12px auto;\
padding: 0;\
}\
\
.ecwid-pb-placeholder__title > div:nth-child(3) {\
max-width: 100px;\
}\
\
/* PB placeholder light */\
\
.ecwid-pb-placeholder--light .ecwid-pb-placeholder__grid-cell .ecwid-pb-placeholder__product,\
.ecwid-pb-placeholder--light .ecwid-pb-placeholder__grid-cell .ecwid-pb-placeholder__title > div {\
background-color: rgba(0, 0, 0, .03);\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(1) .ecwid-pb-placeholder__product {\
animation: pb-flash-light 800ms ease-in-out 0ms infinite;\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(1) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-light 800ms ease-in-out 83ms infinite;\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(2) .ecwid-pb-placeholder__product {\
animation: pb-flash-light 800ms ease-in-out 167ms infinite;\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(2) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-light 800ms ease-in-out 250ms infinite;\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(3) .ecwid-pb-placeholder__product {\
animation: pb-flash-light 800ms ease-in-out 333ms infinite;\
}\
\
.ecwid-pb-placeholder--light.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(3) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-light 800ms ease-in-out 416ms infinite;\
}\
\
/* PB placehoder dark */\
\
.ecwid-pb-placeholder--dark .ecwid-pb-placeholder__grid-cell .ecwid-pb-placeholder__product,\
.ecwid-pb-placeholder--dark .ecwid-pb-placeholder__grid-cell .ecwid-pb-placeholder__title > div {\
background-color: rgba(255, 255, 255, .1);\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(1) .ecwid-pb-placeholder__product {\
animation: pb-flash-dark 800ms ease-in-out 0ms infinite;\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(1) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-dark 800ms ease-in-out 83ms infinite;\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(2) .ecwid-pb-placeholder__product {\
animation: pb-flash-dark 800ms ease-in-out 167ms infinite;\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(2) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-dark 800ms ease-in-out 250ms infinite;\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(3) .ecwid-pb-placeholder__product {\
animation: pb-flash-dark 800ms ease-in-out 333ms infinite;\
}\
\
.ecwid-pb-placeholder--dark.ecwid-pb-placeholder--animate .ecwid-pb-placeholder__grid-cell:nth-child(3) .ecwid-pb-placeholder__title > div {\
animation: pb-flash-dark 800ms ease-in-out 416ms infinite;\
}\
\
@keyframes pb-flash-light {\
0% { background-color: rgba(0, 0, 0, .03); }\
30% { background-color: rgba(0, 0, 0, .047); }\
100% { background-color: rgba(0, 0, 0, .03); }\
}\
\
@keyframes pb-flash-dark {\
0% { background-color: rgba(255, 255, 255, .06); }\
30% { background-color: rgba(255, 255, 255, .1); }\
100% { background-color: rgba(255, 255, 255, .06); }\
}\
</style>\
\
<div class="ecwid-pb-placeholder" id="ecwidStorefrontPlaceholder">\
<div class="ecwid-pb-placeholder__grid">\
<div class="ecwid-pb-placeholder__wrap">\
<div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div><div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div><div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div>\
</div>\
</div><div class="ecwid-pb-placeholder__grid">\
<div class="ecwid-pb-placeholder__wrap">\
<div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div><div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div><div class="ecwid-pb-placeholder__grid-cell">\
<div class="ecwid-pb-placeholder__product"></div><div class="ecwid-pb-placeholder__title"><div></div><div></div><div></div></div>\
</div>\
</div>\
</div>\
</div>';
var element = document.createElement("div")
element.innerHTML = html;
var e = document.getElementById(id);
if (e) {
e.appendChild(element);
}
(function() {
var getRGB = function(b){
var a;
if (b && b.constructor==Array && b.length==3)
return b;
if (a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))
return [parseInt(a[1]),parseInt(a[2]),parseInt(a[3])];
if (a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))
return [parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];
if (a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))
return [parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)];
if (a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))
return [parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];
return false;
}
var getLuminance = function(color){
var rgb = getRGB(color);
return (rgb) ? 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2] : false;
}
var getBackgroundColor = function(el){
var bg = getStyle(el, 'background-color');
while (!bg || bg == 'transparent' || bg == 'rgba(0, 0, 0, 0)'){
if (el == document.body)
bg = '#fff';
else {
el = el.parentNode;
bg = getStyle(el, 'background-color');
}
}
return bg;
}
var isDark = function(el){
var color = getStyle(el, 'color');
var bg = getBackgroundColor(el);
return (getLuminance(color) > getLuminance(bg)) ? true : false;
}
var getStyle = function(el, cssRule){
var val = '';
if(document.defaultView && document.defaultView.getComputedStyle){
val = document.defaultView.getComputedStyle(el, '').getPropertyValue(cssRule);
}
else if(el.currentStyle){
cssRule = cssRule.replace(/\-(\w)/g, function (m, p){
return p.toUpperCase();
});
val = el.currentStyle[cssRule];
}
return val;
}
var placeholder = document.querySelector('.ecwid-pb-placeholder'),
grid = placeholder.querySelector('.ecwid-pb-placeholder__grid'),
skin = (isDark(grid)) ? 'ecwid-pb-placeholder--dark' : 'ecwid-pb-placeholder--light';
placeholder.className += ' ecwid-pb-placeholder--animate '+ skin;
})(); },
_onBodyDone: function() {
if ((!window.ecwid_bodyDone && !Ecwid._hasFacebookIframe() && !window.ecwid_dynamic_widgets) || window.ecwid_dynamic_widgets && !window.ecwid_bodyDone) {
window.ecwid_bodyDone = true;
Ecwid._loadEcwidCss();
var useStubbedVersionIfAvailable = false;
var forceUseStubbedVersion = false;
var isNewStorefrontOnly = Ecwid._isNewStorefrontOnly();
var useStubbedVersion = forceUseStubbedVersion || (useStubbedVersionIfAvailable && isNewStorefrontOnly)
console.log('Nocache params: ', {
'useStubbedVersionIfAvailable': useStubbedVersionIfAvailable,
'forceUseStubbedVersion': forceUseStubbedVersion,
'isNewStorefrontOnly': isNewStorefrontOnly,
'useStubbedVersion': useStubbedVersion
});
if (useStubbedVersion) {
// ========================= STUBBED NOCACHE BEGIN =========================
ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub=function(){var P='bootstrap',Q='begin',R='gwt.codesvr.ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub=',S='gwt.codesvr=',T='ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub',U='startup',V='DUMMY',W=0,X=1,Y='iframe',Z='fitvidsignore',$='position:absolute; width:0; height:0; border:none; left: -1000px;',_=' top: -1000px;',ab='CSS1Compat',bb='<!doctype html>',cb='',db='<html><head><\/head><body><\/body><\/html>',eb='undefined',fb='readystatechange',gb=10,hb='script',ib='function',jb='javascript',kb='ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub',lb='Failed to load ',mb='moduleStartup',nb='scriptTagAdded',ob='moduleRequested',pb='meta',qb='name',rb='ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub.nocache.js',Ib='base',Jb='//',Kb='user.agent',Lb='webkit',Mb='safari',Nb='msie',Ob=11,Pb='iemobile/10',Qb='ie10',Rb=9,Sb='ie9',Tb='msie 6.',Ub='msie 7.',Vb=8,Wb='ie8',Xb='gecko',Yb='opera',Zb='gecko1_8',$b=2,_b=3,ac=4,bc='selectingPermutation',cc='ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub.devmode.js',dc='12F67C227063CC8B44D2E9C4F407334D',ec='238F658F16C02D9BC5DDFA466153C25E',fc='2573F9BA6D0BF35071A874FAF00D5510',gc='767B2FE9B20E7A882CD538933D2512EA',hc='C45AC116142DC757087E433151A85C06',ic=':',jc='.cache.js',kc='loadExternalRefs',lc='end',mc='http:',nc='https:',oc='file:',pc='_gwt_dummy_',qc='__gwtDevModeHook:ru.cdev.xnext.legacyfrontendstub.LegacyFrontendStub',rc='Ignoring non-whitelisted Dev Mode URL: ',sc=':moduleBase',tc='head';var n;var o=window;var p=document;r(P,Q);function q(){var a=o.location.search;return a.indexOf(R)!=-1||a.indexOf(S)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:T,sessionId:o.__gwtStatsSessionId,subSystem:U,evtGroup:a,millis:(new Date).getTime(),type:b})}}
ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__sendStats=r;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleName=T;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn=null;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleBase=V;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__softPermutationId=W;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__computePropValue=null;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__getPropMap=null;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__installRunAsyncCode=function(){};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__gwtStartLoadingFragment=function(){return null};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__gwt_isKnownPropertyValue=function(){return false};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[T]={moduleName:T};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleStartupDone=function(e){var f=t[T].bindings;t[T].bindings=function(){var a=f?f():{};var b=e[ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__softPermutationId];for(var c=W;c<b.length;c++){var d=b[c];a[d[W]]=d[X]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(Y);a.id=T;a.className=Z;a.style.cssText=$+_;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==ab?bb:cb;u.write(b+db);u.close()}
function A(f){function g(a){function b(){if(typeof p.readyState==eb){return typeof p.body!=eb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(fb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(fb,d,false)}var e=setInterval(function(){d()},gb)}
function h(a){var b=v();var c=b.body;var d=b.createElement(hb);if(typeof ecwid_addCspNonceToScript===ib){ecwid_addCspNonceToScript(d)}d.language=jb;d.src=a;if(ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn){d.onerror=function(){ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn(kb,new Error(lb+a))}}c.appendChild(d);r(mb,nb)}
r(mb,ob);g(function(){h(f)})}
function B(e){function f(a){var b=v();var c=b.body;var d=b.createElement(hb);d.language=jb;d.src=a;d.async=true;if(ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn){d.onerror=function(){ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn(kb,new Error(lb+a))}}c.appendChild(d);r(mb,nb)}
r(mb,ob);f(e)}
ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__startLoadingFragment=function(a){return F(a)};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(hb);if(typeof ecwid_addCspNonceToScript===ib){ecwid_addCspNonceToScript(d)}d.language=jb;d.text=a;c.appendChild(d);c.removeChild(d)};function C(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=W,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,cb);if(j.indexOf(sb)>=W){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=W){j=k.substring(W,m);l=k.substring(m+X)}else{j=k;l=cb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__errFn=e}
function D(){if(window.ecwid_script_base){n=window.ecwid_script_base;return n}function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=W?a.substring(W,d+X):cb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return cb}
function h(){var a=p.getElementsByTagName(hb);for(var b=W;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return cb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>W){return a[a.length-X].href}return cb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==cb){k=h()}if(k==cb){k=i()}if(k==cb&&j()){k=e(p.location.href)}k=f(k);return k}
function F(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleBase+a}
function G(){var f=[];var g=W;function h(a,b){var c=f;for(var d=W,e=a.length-X;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Lb)!=-1}())return Mb;if(function(){return a.indexOf(Nb)!=-1&&(b>=gb&&b<Ob)||a.indexOf(Pb)!=-1}())return Qb;if(function(){return a.indexOf(Nb)!=-1&&(b>=Rb&&b<Ob)}())return Sb;if(function(){return a.indexOf(Tb)!=-1||(a.indexOf(Ub)!=-1||a.indexOf(Nb)!=-1&&(b>=Vb&&b<Ob))}())return Wb;if(function(){return a.indexOf(Xb)!=-1||(b>=Ob||a.indexOf(Yb)!=-1)}())return Zb;return Mb};i[Kb]={'gecko1_8':W,'ie10':X,'ie8':$b,'ie9':_b,'safari':ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__computePropValue=k;o.__gwt_activeModules[T].bindings=ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__getPropMap;r(P,bc);if(q()){return F(cc)}var l;try{h([Sb],dc);h([Mb],ec);h([Zb],fc);h([Wb],gc);h([Qb],hc);l=f[k(Kb)];var m=l.indexOf(ic);if(m!=-1){g=parseInt(l.substring(m+X),gb);l=l.substring(W,m)}}catch(a){}ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__softPermutationId=g;return F(l+jc)}
function H(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(kc,Q);r(kc,lc)}
C();ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleBase=D();t[T].moduleBase=ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.__moduleBase;var I=G();if(o){var J=!!(o.location.protocol==mc||(o.location.protocol==nc||o.location.protocol==oc));o.__gwt_activeModules[T].canRedirect=J;function K(){var b=pc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(J&&K()){var L=qc;var M=o.sessionStorage[L];if(!/^https:\/\/\w+.local.ecwid.com(:\d+)?\/.*$/.test(M)){if(M&&(window.console&&console.log)){console.log(rc+M)}M=cb}if(M&&!o[L]){o[L]=true;o[L+sc]=D();var N=p.createElement(hb);N.src=M;var O=p.getElementsByTagName(tc)[W];O.insertBefore(N,O.firstElementChild||O.children[W]);return false}}}H();r(P,lc);if(window.needLoadEcwidAsync){B(I)}else{A(I)}return true}
ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub.succeeded=ru_cdev_xnext_legacyfrontendstub_LegacyFrontendStub();
// ========================= STUBBED NOCACHE END ===========================
} else {
// ========================= FULL NOCACHE BEGIN =========================
ru_cdev_xnext_legacyfrontend_LegacyFrontend=function(){var P='bootstrap',Q='begin',R='gwt.codesvr.ru.cdev.xnext.legacyfrontend.LegacyFrontend=',S='gwt.codesvr=',T='ru.cdev.xnext.legacyfrontend.LegacyFrontend',U='startup',V='DUMMY',W=0,X=1,Y='iframe',Z='fitvidsignore',$='position:absolute; width:0; height:0; border:none; left: -1000px;',_=' top: -1000px;',ab='CSS1Compat',bb='<!doctype html>',cb='',db='<html><head><\/head><body><\/body><\/html>',eb='undefined',fb='readystatechange',gb=10,hb='script',ib='function',jb='javascript',kb='ru_cdev_xnext_legacyfrontend_LegacyFrontend',lb='Failed to load ',mb='moduleStartup',nb='scriptTagAdded',ob='moduleRequested',pb='meta',qb='name',rb='ru.cdev.xnext.legacyfrontend.LegacyFrontend::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='ru.cdev.xnext.legacyfrontend.LegacyFrontend.nocache.js',Ib='base',Jb='//',Kb='user.agent',Lb='webkit',Mb='safari',Nb='msie',Ob=11,Pb='iemobile/10',Qb='ie10',Rb=9,Sb='ie9',Tb='msie 6.',Ub='msie 7.',Vb=8,Wb='ie8',Xb='gecko',Yb='opera',Zb='gecko1_8',$b=2,_b=3,ac=4,bc='selectingPermutation',cc='ru.cdev.xnext.legacyfrontend.LegacyFrontend.devmode.js',dc='346DB0380D19C5FB5E3BB83012AD673A',ec='4FDB714B1014F359FFD1C4A93CFE8267',fc='8E381E645A115AF223AEBD8773608C04',gc='CC6396493C5B8EA7338B1A698853A8F4',hc='F0C007534ED5FDA76A38D67407E2B684',ic=':',jc='.cache.js',kc='loadExternalRefs',lc='end',mc='http:',nc='https:',oc='file:',pc='_gwt_dummy_',qc='__gwtDevModeHook:ru.cdev.xnext.legacyfrontend.LegacyFrontend',rc='Ignoring non-whitelisted Dev Mode URL: ',sc=':moduleBase',tc='head';var n;var o=window;var p=document;r(P,Q);function q(){var a=o.location.search;return a.indexOf(R)!=-1||a.indexOf(S)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:T,sessionId:o.__gwtStatsSessionId,subSystem:U,evtGroup:a,millis:(new Date).getTime(),type:b})}}
ru_cdev_xnext_legacyfrontend_LegacyFrontend.__sendStats=r;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleName=T;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn=null;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleBase=V;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__softPermutationId=W;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__computePropValue=null;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__getPropMap=null;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__installRunAsyncCode=function(){};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__gwtStartLoadingFragment=function(){return null};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__gwt_isKnownPropertyValue=function(){return false};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[T]={moduleName:T};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleStartupDone=function(e){var f=t[T].bindings;t[T].bindings=function(){var a=f?f():{};var b=e[ru_cdev_xnext_legacyfrontend_LegacyFrontend.__softPermutationId];for(var c=W;c<b.length;c++){var d=b[c];a[d[W]]=d[X]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(Y);a.id=T;a.className=Z;a.style.cssText=$+_;a.tabIndex=-1;p.body.appendChild(a);u=a.contentWindow.document;u.open();var b=document.compatMode==ab?bb:cb;u.write(b+db);u.close()}
function A(f){function g(a){function b(){if(typeof p.readyState==eb){return typeof p.body!=eb&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(fb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(fb,d,false)}var e=setInterval(function(){d()},gb)}
function h(a){var b=v();var c=b.body;var d=b.createElement(hb);if(typeof ecwid_addCspNonceToScript===ib){ecwid_addCspNonceToScript(d)}d.language=jb;d.src=a;if(ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn){d.onerror=function(){ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn(kb,new Error(lb+a))}}c.appendChild(d);r(mb,nb)}
r(mb,ob);g(function(){h(f)})}
function B(e){function f(a){var b=v();var c=b.body;var d=b.createElement(hb);d.language=jb;d.src=a;d.async=true;if(ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn){d.onerror=function(){ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn(kb,new Error(lb+a))}}c.appendChild(d);r(mb,nb)}
r(mb,ob);f(e)}
ru_cdev_xnext_legacyfrontend_LegacyFrontend.__startLoadingFragment=function(a){return F(a)};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(hb);if(typeof ecwid_addCspNonceToScript===ib){ecwid_addCspNonceToScript(d)}d.language=jb;d.text=a;c.appendChild(d);c.removeChild(d)};function C(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=W,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,cb);if(j.indexOf(sb)>=W){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=W){j=k.substring(W,m);l=k.substring(m+X)}else{j=k;l=cb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;ru_cdev_xnext_legacyfrontend_LegacyFrontend.__errFn=e}
function D(){if(window.ecwid_script_base){n=window.ecwid_script_base;return n}function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=W?a.substring(W,d+X):cb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return cb}
function h(){var a=p.getElementsByTagName(hb);for(var b=W;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return cb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>W){return a[a.length-X].href}return cb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==cb){k=h()}if(k==cb){k=i()}if(k==cb&&j()){k=e(p.location.href)}k=f(k);return k}
function F(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleBase+a}
function G(){var f=[];var g=W;function h(a,b){var c=f;for(var d=W,e=a.length-X;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Lb)!=-1}())return Mb;if(function(){return a.indexOf(Nb)!=-1&&(b>=gb&&b<Ob)||a.indexOf(Pb)!=-1}())return Qb;if(function(){return a.indexOf(Nb)!=-1&&(b>=Rb&&b<Ob)}())return Sb;if(function(){return a.indexOf(Tb)!=-1||(a.indexOf(Ub)!=-1||a.indexOf(Nb)!=-1&&(b>=Vb&&b<Ob))}())return Wb;if(function(){return a.indexOf(Xb)!=-1||(b>=Ob||a.indexOf(Yb)!=-1)}())return Zb;return Mb};i[Kb]={'gecko1_8':W,'ie10':X,'ie8':$b,'ie9':_b,'safari':ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};ru_cdev_xnext_legacyfrontend_LegacyFrontend.__computePropValue=k;o.__gwt_activeModules[T].bindings=ru_cdev_xnext_legacyfrontend_LegacyFrontend.__getPropMap;r(P,bc);if(q()){return F(cc)}var l;try{h([Zb],dc);h([Qb],ec);h([Wb],fc);h([Sb],gc);h([Mb],hc);l=f[k(Kb)];var m=l.indexOf(ic);if(m!=-1){g=parseInt(l.substring(m+X),gb);l=l.substring(W,m)}}catch(a){}ru_cdev_xnext_legacyfrontend_LegacyFrontend.__softPermutationId=g;return F(l+jc)}
function H(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(kc,Q);r(kc,lc)}
C();ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleBase=D();t[T].moduleBase=ru_cdev_xnext_legacyfrontend_LegacyFrontend.__moduleBase;var I=G();if(o){var J=!!(o.location.protocol==mc||(o.location.protocol==nc||o.location.protocol==oc));o.__gwt_activeModules[T].canRedirect=J;function K(){var b=pc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(J&&K()){var L=qc;var M=o.sessionStorage[L];if(!/^https:\/\/\w+.local.ecwid.com(:\d+)?\/.*$/.test(M)){if(M&&(window.console&&console.log)){console.log(rc+M)}M=cb}if(M&&!o[L]){o[L]=true;o[L+sc]=D();var N=p.createElement(hb);N.src=M;var O=p.getElementsByTagName(tc)[W];O.insertBefore(N,O.firstElementChild||O.children[W]);return false}}}H();r(P,lc);if(window.needLoadEcwidAsync){B(I)}else{A(I)}return true}
ru_cdev_xnext_legacyfrontend_LegacyFrontend.succeeded=ru_cdev_xnext_legacyfrontend_LegacyFrontend();
// ========================= FULL NOCACHE END ===========================
}
if (!Ecwid._isInteractiveEnabled()) {
Ecwid._legacyAfterBodyDone();
}
}
},
_onComplete: function() {
},
_legacyAfterBodyDone: function() {
window.ecwid_script_defer = true;
if (document.removeEventListener) {
document.removeEventListener("DOMContentLoaded", Ecwid._onBodyDone, false);
}
if (window.ecwid_onBodyDoneTimerId) {
clearInterval(window.ecwid_onBodyDoneTimerId);
}
},
_isIos: function() {
return navigator.userAgent.match(/(iPod|iPhone|iPad)/) != null;
},
_fixIosIframeBlur: function() {
document.body.addEventListener("touchstart", function () {
var ae = document.activeElement;
if (ae && ae.tagName.toLowerCase() === "iframe") {
ae.blur();
}
});
window.addEventListener("message", function (event) {
var ae = document.activeElement;
if (
event.data === "iosIframeFocus"
&& ae
&& ae.tagName.toLowerCase() !== "iframe"
) {
ae.blur();
}
}, false);
},
_localStorageSupported: (function () {
var tested = false;
var testResult = false;
return function () {
if (!tested) {
var c = '_ec_dummy_';
try {
window.localStorage.setItem(c, c);
window.localStorage.removeItem(c);
testResult = true;
} catch (e) {
testResult = false;
}
tested = true;
}
return testResult;
}
})(),
_getDisabledAppsSetting: (function () {
var calculated = false;
var calculationResult = [];
return function () {
if (!calculated) {
if (!Ecwid._localStorageSupported()) {
calculationResult = [];
} else {
var disabledApps = window.localStorage.getItem('ec_disabled_apps');
if (disabledApps === null
|| disabledApps === 'none'
|| disabledApps === '') {
calculationResult = [];
} else if (disabledApps === 'all') {
calculationResult = 'all';
} else {
try {
calculationResult = JSON.parse(disabledApps);
} catch (e) {
console.error(e);
}
}
}
calculated = true;
}
return calculationResult;
}
})(),
_isAppEnabled: function (namespace) {
var disabledAppSetting = Ecwid._getDisabledAppsSetting();
if (disabledAppSetting === 'all') {
return false;
} else if (Object.prototype.toString.call(disabledAppSetting) === '[object Array]') {
return disabledAppSetting.indexOf(namespace) == -1;
}
return true;
},
_filter: function (arr, fn) {
var result = [];
for (var i = 0, len = arr.length; i < len; i++) {
if (fn(arr[i])) {
result.push(arr[i]);
}
}
return result;
},
_map: function(arr, fn) {
var result = [];
for (var i = 0, len = arr.length; i < len; i++) {
result.push(fn(arr[i]));
}
return result;
},
_forEach: function(arr, fn) {
for (var i = 0, len = arr.length; i < len; i++) {
fn(arr[i]);
}
},
_isNewStorefrontOnly: function() {
var config = ((window.ec || {}).storefront || {});
var newStorefrontOnly = true;
var newStorefrontOnlyIfForced = true;
var newStorefrontForcedByEcSettings = !!config.enable_new_checkout && !!config.enable_new_product_details && !!config.enable_new_product_list && !!config.enable_new_shopping_cart;
return newStorefrontOnly || (newStorefrontOnlyIfForced && newStorefrontForcedByEcSettings);
}
};
if (Ecwid._isIos()) {
Ecwid._fixIosIframeBlur();
}
window.ecwid_onBodyDoneTimerId = null;
window.ecwid_bodyDone = false;
window.ecwid_onBodyDone = Ecwid._onBodyDone;
window.needLoadEcwidAsync = Ecwid._isInteractiveEnabled(); //need for async loading in gwt library
if (!Ecwid._isNewStorefrontOnly()) {
xInjectJs('https://d3hlm6p2n1wjk4.cloudfront.net/static/br/2020-25055-g758ecf096fb/lang/en.js');
}
xInjectJs('https://app.ecwid.com/states.js?hc=-1463380187&callback=window.ecwid_states_data.loaded');
if (window.top != window && document.referrer) {
var hash_position = document.referrer.lastIndexOf('#!/');
if (hash_position == -1) {
// compatibility with old hashes
// TODO: remove it
hash_position = document.referrer.lastIndexOf('#ecwid:');
}
if (hash_position != -1) {
var hash = document.referrer.substr(hash_position);
var loc = window.location.href;
if (loc.indexOf('#') == -1) window.location.replace(loc + hash);
else {
if (loc.substr(loc.indexOf('#')) != hash) window.location.replace(loc.substr(0, loc.indexOf('#')) + hash);
}
}
if (typeof ecwid_history_token != 'undefined') {
var loc = window.location.href;
if(hash_position != -1)
window.location.replace(loc.substr(0, loc.indexOf('#')) + ecwid_history_token);
else
window.location.replace(loc + '#' + ecwid_history_token);
}
}
if (!window.css_selectors_prefix) {
window.css_selectors_prefix = "";
if (!window.ecwid_nocssrewrite) {
var html_id = null;
var html_tag = document.getElementsByTagName("html");
if (html_tag && html_tag.length) {
html_tag = html_tag[0];
if (!html_tag.id) html_tag.id = "ecwid_html";
html_id = html_tag.id;
}
var body_id = null;
var body_tag = document.getElementsByTagName("body");
if (body_tag && body_tag.length) {
body_tag = body_tag[0];
if (!body_tag.id) body_tag.id = "ecwid_body";
body_id = body_tag.id;
}
if (html_id || body_id) {
if (html_id) {
window.css_selectors_prefix += "html#" + html_id;
}
if (html_id && body_id) {
css_selectors_prefix += " ";
}
if (body_id) {
css_selectors_prefix += "body#" + body_id;
}
}
}
}
window.css_selectors_prefix = encodeURIComponent(window.css_selectors_prefix);
window.ecwid_script_base="https://d3hlm6p2n1wjk4.cloudfront.net/static/br/2020-25055-g758ecf096fb/";
window.ecwid_url="https://app.ecwid.com/";
window.ecwid_wait_for_interactive_seconds=5;
window.ecwid_use_new_loader = true;
window.ecwid_loader_logo_url = "";
if (!window.amazon_image_domain) {
window.amazon_image_domain = "https://d2j6dbq0eux0bg.cloudfront.net";
}
window.xnext_ownerId=16830616;
window.Ecwid.publicToken = "public_FvGUbtrQnx7Yen2giKw8jZ5WTbeQsLD4",
window.Ecwid.demo=false;
window.Ecwid.cssUrl="https://d1oxsl77a1kjht.cloudfront.net/css/new?hc=391697086&ownerid=16830616&useProximaNovaFont=true";
window.Ecwid.acceptLanguage=["en"];
window.Ecwid.appDomain="https://app.ecwid.com/";
window.Ecwid.startup_flags = {
amazonImageDomain: window.amazon_image_domain,
statsDomain: "https://stats.ecwid.com/storefront-logs",
googleMapsKey: "AIzaSyCNCmAGyN4bJYu5qeLgbASzZafm-M5TA_o"
};
(function() {
window.ecwid_initial_data = {}
window.ecwid_initial_data.data = window.ecwid_initial_data.data || {}
window.ecwid_initial_data.refetchedInitialData = window.ecwid_initial_data.refetchedInitialData || {}
window.ecwid_initial_data.init = false
window.ecwid_initial_data.consume = consume
window.ecwid_initial_data.consumeRefetch = consumeRefetch
window.ecwid_initial_data.data.doInit = function(data) {
processResponse(data)
window.ecwid_initial_data.init = true;
window.ecwidEvents.trigger('INITIAL_DATA_LOADED')
}
window.ecwid_initial_data.data.refetchInitialData = function(data) {
processResponse(data)
window.ecwidEvents.trigger('INITIAL_DATA_REFETCHED')
}
function processResponse(data) {
window.ecwid_initial_data = window.ecwid_initial_data || {}
window.ecwid_initial_data.data = window.ecwid_initial_data.data || {}
window.ecwid_initial_data.data.storeClosed = data.storeClosed
window.ecwid_initial_data.data.storeConfig = data.config
window.ecwid_initial_data.data.categories = data.categories
}
var ecDataJsBaseUrl = "https://app.ecwid.com/data.js?ownerid=16830616";
xInjectJs(ecDataJsBaseUrl + "&callback=window.ecwid_initial_data.data.doInit")
function consume(callback) {
window.ecwidEvents.bind('INITIAL_DATA_LOADED', callback)
if (window.ecwid_initial_data.init) {
callback()
}
}
function consumeRefetch(callback) {
window.ecwidEvents.bind('INITIAL_DATA_REFETCHED', callback)
xInjectJs(ecDataJsBaseUrl + "&callback=window.ecwid_initial_data.data.refetchInitialData")
}
})();
(function() {
window.ecwid_states_data = {
'data': null,
'loaded': function(data) {
window.ecwid_states_data.data = data;
window.ecwidEvents.trigger('STATES_DATA_LOADED', data);
},
'consume': function(callback) {
window.ecwidEvents.bind('STATES_DATA_LOADED', callback);
if (window.ecwid_states_data.data) {
callback(window.ecwid_states_data.data);
}
}
}
})()
window.Ecwid.getAppPublicConfig = function(namespace) {
var publicData = {"ecwid-degenerator-app":"{}","ecwid-startersite-app":"{}","ecwid-storefront":"{}","ecwid-wix-app":"{}"};
var result = Ecwid._isAppEnabled(namespace) ? publicData[namespace] : null;
return typeof result === 'string' ? result : null;
}
window.Ecwid.getAppPublicToken = function(namespace) {
var tokenMap = {"ecwid-storefront":"public_FvGUbtrQnx7Yen2giKw8jZ5WTbeQsLD4"};
var result = tokenMap[namespace];
return typeof result === 'string' ? result : null;
}
if (Ecwid._isInteractiveEnabled()) {
Ecwid._loadEcwidAsync();
} else {
Ecwid._loadEcwidSync();
}
if (!window.__heap_inits__ && !(((window.ec || {}).config || {}).disable_all_cookies === true)) {
(function(i,s,o,g,r,a,m){i['HeapAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];
a.async=1;a.src=g;if(Ecwid._isInteractiveEnabled() && m != null && m.parentNode != null)m.parentNode.insertBefore(a,m);else var h=50,k=setInterval(function(){if((/loaded|complete/.test(s.readyState)||0==h--) && m != null && m.parentNode != null)m.parentNode.insertBefore(a,m),clearInterval(k)},100)})(window,document,"script","https://ecomm.events/i.js","eca");
window.__heap_inits__ = true
}
function parseId(args) {
var idPrefix = "id=";
var id;
for (var i=0; i<args.length; i++) {
if (args[i].substr(0, idPrefix.length) == idPrefix) {
id = args[i].substr(idPrefix.length);
}
}
return id;
}
function parseStyle(args) {
var stylePrefix = "style=";
var style = "";
for (var i=0; i<args.length; i++) {
if (args[i].substr(0,stylePrefix.length) == stylePrefix) {
var str = args[i].substr(stylePrefix.length);
str = str.replace(/^ +\'?/,"").replace(/\'? +$/,"");
if (str.substring(0,1)=="'") str = str.substring(1);
if (str.substring(str.length-1)=="'") str = str.substring(0, str.length-1);
style += str;
}
}
return style;
}
function xAddWidget(widgetType, args) {
args = Array.prototype.slice.call(args); // Cast Argument object into array
var id = parseId(args);
var style = parseStyle(args);
var hashParams = window.location.hash.match(/.*\/(.*)$/);
if (hashParams && hashParams.length > 1) {
hashParams = hashParams[1].split('&');
for (i = 0; i < hashParams.length; i++) {
var hashParam = hashParams[i];
var paramPrefix = '_x' + widgetType + '_';
if (hashParam.indexOf(paramPrefix) != 0) {
continue;
}
hashParam = hashParam.split('=');
if (hashParam.length != 2) {
continue;
}
var paramName = hashParam[0].replace(paramPrefix, '');
var paramValue = decodeURIComponent(hashParam[1]);
var replaceIndex = args.length;
for (var j = 0; j < args.length; j++) {
if (args[j].indexOf(paramName + '=') == 0) {
replaceIndex = j;
break;
}
}
args[replaceIndex] = paramName + '=' + paramValue;
}
}
if(id && document.getElementById(id)) {
var e = document.getElementById(id);
while(e.hasChildNodes()) e.removeChild(e.firstChild);
e.setAttribute("style", style);
try { e.style.cssText = style; } catch(ex) { } // IE
} else {
i=1;
do {
id = widgetType+"-"+i++;
} while (document.getElementById(id));
if (!!document.currentScript && !!document.currentScript.parentElement) {
var widgetElem = document.createElement("div");
widgetElem.id = id;
if (style) {
widgetElem.setAttribute("style", style);
} else {
if (widgetType == "Product") {
widgetElem.setAttribute("style", "display: none");
}
}
document.currentScript.parentElement.appendChild(widgetElem);
} else {
var html = "<div id='" + id + "'";
if (style) {
html += " style='" + style + "'";
} else {
if (widgetType == "Product") {
html += " style='display:none'";
}
}
html += "></div>";
document.write(html);
}
}
if (widgetType == "ProductBrowser" ||
widgetType == "Categories") {
ecwid_loader(id);
}
var l = 0;
if (!window._xnext_initialization_scripts) {
window._xnext_initialization_scripts = [];
} else {
l = window._xnext_initialization_scripts.length;
}
window.console.log("Widget " + widgetType + " " + id + " added");
window._xnext_initialization_scripts[l] = {widgetType:widgetType, id:id, arg:args};
window.ecwid_dynamic_widgets && Ecwid._onBodyDone();
}
function xProductBrowser() {
window.ecwid_dynamic_widgets && Ecwid.destroy();
xAddWidget("ProductBrowser", arguments);
}
function ecwid_loader(id) {
if (!window.ecwid_loader_shown && !Ecwid._hasFacebookIframe()) {
if (!window.ecwid_use_custom_loading_indicator) {
Ecwid._showPBLoader(id);
}
window.ecwid_loader_shown = true;
}
}
function xAddToBag() {
xAddWidget("AddToBag", arguments);
}
function xProductThumbnail() {
xAddWidget("ProductThumbnail", arguments);
}
function xLoginForm() {
xAddWidget("LoginForm", arguments);
}
function xMinicart() {
xAddWidget("Minicart", arguments);
}
function xCategories() {
xAddWidget("Categories", arguments);
}
function xVCategories() {
xAddWidget("VCategories", arguments);
}
function xCategoriesV2() {
xAddWidget("CategoriesV2", arguments);
}
function xSearchPanel() {
xAddWidget("SearchPanel", arguments);
}
function xSearch() {
xAddWidget("SearchWidget", arguments);
}
function xGadget() {
xAddWidget("Gadget", arguments);
}
function xSingleProduct() {
xAddWidget("SingleProduct", arguments)
}
function xProduct() {
xAddWidget("Product", arguments)
}
(function(w, undefined) {
var injectRosettaRetry = 0;
function tryInjectRosettaScript(url) {
var script = document.createElement('script');
script.type = 'text/javascript';
script.onerror = function() {
document.getElementsByTagName('head')[0].removeChild(script);
injectRosettaRetry++;
if (injectRosettaRetry < 10) {
setTimeout(tryInjectRosettaScript.bind(this, url), 200);
} else {
// ретраи кончились, пошлем ошибку в ga, если он есть на странице
if (!!window.ga) {
window.ga('send', 'exception', {
'exDescription': 'Translation with url ' + url + ' not loaded.',
'exFatal': true
});
}
}
};
script.onload = function () {
window.ecwid_elm_config = window.ecwid_elm_config || {};
window.ecwid_elm_config.translations_loaded = true;
window.ecwidEvents.trigger('TRANSLATIONS_LOADED');
}
script.src = url;
document.getElementsByTagName('head')[0].appendChild(script);
}
w.Ecwid.renderCartWidget = renderCartWidget;
w.Ecwid.readyToCreate = readyToCreate;
w.Ecwid.init = init;
var widgets = [];
var rosettaInjected = false;
function init() {
var nodes = document.getElementsByClassName('ec-cart-widget')
if (nodes.length > 0 && !isElmNeed() && !rosettaInjected) {
tryInjectRosettaScript('https://d3hlm6p2n1wjk4.cloudfront.net/rosetta/translations/new-frontend/files/new-frontend.en.-90816702.js');
rosettaInjected = true;
}
for (var i = 0; i < nodes.length ; i++) {
widgets.push({type:"cart", node: nodes[i]});
}
maybeLoad();
}
function renderCartWidget(node) {
widgets.push({type:"cart", node: node})
maybeLoad();
}
function readyToCreate() {
maybeLoad()
}
function maybeLoad() {
maybeLoadSource();
!!w.Ecwid.__loadWidgets && w.Ecwid.__loadWidgets(widgets);
}
function maybeLoadSource() {
if (!window.ecwid_elm_config) {
window.ecwid_init_elm_config()
}
}
})(window);
function xAffiliate(id) { Ecwid.affiliateId = id; }
if (typeof xInitialized == 'function') xInitialized();
}
} catch (e) {
function xReportError(msg) {
var html = '<div style="font-family:sans-serif;"><div style="padding:30px 20px;max-width:500px;word-wrap: break-word;margin:0 auto;border-radius:5px;box-shadow:0 10px 35px rgba(0, 0, 0, 0.15);box-sizing:border-box;background-color:#fff;"><div style="font-size:15px;line-height:1.8em;margin:16px;">' + msg + '</div></div></div><br/>';
if (window.ecwid_script_defer) {
var element = document.createElement("div");
element.innerHTML = html;
document.body.appendChild(element);
} else {
document.write(html);
}
}
var commonError = "The store cannot be loaded in your browser because of some JavaScript errors, sorry. Below here's the exact error occurred.";
var bodyTagError = "This document doesn't contain the required " +
"<a href='http://www.htmldog.com/reference/htmltags/body/'>&lt;body&gt; and &lt;/body&gt;</a> "+
"tags. Thus your Ecwid store cannot be loaded. " +
"Please add these tags and refresh the page. This message will disappear and you will see your store.";
var isWindowsMobile2005 = /(msie 4).*(windows ce)/i.test(navigator.userAgent);
if (!document.body && !isWindowsMobile2005) {
xReportError(bodyTagError);
} else {
xReportError(commonError + '<br/><br/>Error: <i>' + e.message + '</i>');
}
throw e;
}