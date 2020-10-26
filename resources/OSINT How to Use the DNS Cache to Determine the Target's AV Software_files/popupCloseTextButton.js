define("popupCloseTextButton",["lodash","santa-components","componentsCore","react","components"],(function(t,e,n,o,r){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=965)}({0:function(e,n){e.exports=t},14:function(t,e){t.exports=o},18:function(t,e){t.exports=r},2:function(t,n){t.exports=e},3:function(t,e){t.exports=n},965:function(t,e,n){var o,r;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}o=[n(2),n(14),n(0),n(18),n(3)],void 0===(r=function(t,e,n,o,r){"use strict";var u=function(t){function o(){return i(this,o),c(this,l(o).apply(this,arguments))}var u,s,y;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,t),u=o,(s=[{key:"render",value:function(){var t,u,i,p,c=this,a=f(l(o.prototype),"render",this).call(this),s=(t=this.props.compData,u=t.link,i=n.get(u,"type"),p=n.get(u,"target"),n.includes(["PageLink","DynamicPageLink","AnchorLink"],i)||"ExternalLink"===i&&"_self"===p?a.props.onClick:function(){var t,e;if((t=c.props).closePopupPage.apply(t,arguments),"function"==typeof a.props.onClick)return(e=a.props).onClick.apply(e,arguments)});return e.cloneElement(a,{role:"button",tabIndex:"0",onClick:s,onKeyDown:function(){var t,e;(t=r.utils.accessibility.keyboardInteractions).activateBySpaceOrEnterButton.apply(t,arguments),"function"==typeof a.props.onKeyDown&&(e=a.props).onKeyDown.apply(e,arguments)}})}}])&&p(u.prototype,s),y&&p(u,y),o}(o.siteButton);return u.propTypes=n.defaults({closePopupPage:t.santaTypesDefinitions.popupPage.close},o.siteButton.propTypes),r.compRegistrar.register("wysiwyg.viewer.components.PopupCloseTextButton",u),u}.apply(e,o))||(t.exports=r)}})}));
//# sourceMappingURL=popupCloseTextButton.min.js.map