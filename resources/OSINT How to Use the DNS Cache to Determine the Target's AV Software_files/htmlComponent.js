define("htmlComponent",["lodash","coreUtils","santa-components","componentsCore","skins","reactDOM"],(function(t,e,o,n,s,i){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=797)}({0:function(e,o){e.exports=t},1:function(t,o){t.exports=e},2:function(t,e){t.exports=o},3:function(t,e){t.exports=n},5:function(t,e){t.exports=s},6:function(t,e){t.exports=i},797:function(t,e,o){var n,s;n=[o(2),o(0),o(1),o(6),o(5),o(798),o(3)],void 0===(s=function(t,e,o,n,s,i,r){"use strict";var p=o.urlUtils;function a(){var t=this.props.compData.url,n="external"===this.props.compData.sourceType,s=this.props.serviceTopologyStaticHTMLComponentUrl,i=e.startsWith(this.props.serviceTopologyStaticHTMLComponentUrl,"https")?"https:":"http:";if(!n&&o.stringUtils.startsWith(t,"html/")&&(t=s+t),t=p.addProtocolIfMissing(t,i),s=p.addProtocolIfMissing(s),"https:"===i&&(t=p.setProtocol(t,i)),!n&&(t=t.replace("//static.wixstatic.com",s),e.includes(t,"static.wix.com"))){var r=e.head(t.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im));t=t.replace(r,s)}return t}function l(t){return!!t.url}function c(){return this.props.useSandboxInHTMLComp}var u={displayName:"HtmlComponent",mixins:[r.mixins.skinBasedComp],propTypes:{compData:t.santaTypesDefinitions.Component.compData,compProp:t.santaTypesDefinitions.Component.compProp,isExperimentOpen:t.santaTypesDefinitions.isExperimentOpen,serviceTopologyStaticHTMLComponentUrl:t.santaTypesDefinitions.ServiceTopology.staticHTMLComponentUrl,useSandboxInHTMLComp:t.santaTypesDefinitions.RendererModel.useSandboxInHTMLComp,ios:t.santaTypesDefinitions.BrowserFlags.ios.isRequired,registerComponentToPostMessage:t.santaTypesDefinitions.HtmlPostMessage.registerComponent.isRequired,unRegisterComponentFromPostMessage:t.santaTypesDefinitions.HtmlPostMessage.unRegisterComponent.isRequired,shouldResetComponent:t.santaTypesDefinitions.RenderFlags.shouldResetComponent.isRequired,isResponsive:t.santaTypesDefinitions.RendererModel.isResponsive,externalBaseUrl:t.santaTypesDefinitions.PublicModel.externalBaseUrl},getIframeAttributes:function(){var t={width:"100%",height:"100%",ref:"iframe",name:"htmlComp-iframe",scrolling:this.props.compData.scrolling||"auto","data-src":l(this.props.compData)?a.call(this):"",key:"iframe-".concat(this.props.id,"-").concat(this.props.shouldResetComponent)};return this.props.isResponsive&&(t.src=t["data-src"],delete t["data-src"]),this.props.compData.allowFullScreen&&e.assign(t,{allowFullScreen:!0}),e.get(this.props,"compProp.isHidden")&&e.set(t,"style.display","none"),c.call(this)?e.assign(t,{sandbox:"allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"}):t},onLoad:function(){this.props.registerComponentToPostMessage(this.props.id,this.refs.iframe.contentWindow)},getInitialState:function(){return{$content:l(this.props.compData)?"hasContent":"noContent"}},componentDidMount:function(){var t=n.findDOMNode(this.refs.iframe);t&&(t.onload=this.onLoad)},componentWillUpdate:function(t){t.shouldResetComponent!==this.props.shouldResetComponent&&this.props.unRegisterComponentFromPostMessage(this.props.id)},componentDidUpdate:function(t){t.shouldResetComponent!==this.props.shouldResetComponent&&this.props.registerComponentToPostMessage(this.props.id,this.refs.iframe.contentWindow)},componentWillUnmount:function(){this.props.unRegisterComponentFromPostMessage(this.props.id)},componentWillReceiveProps:function(){this.setState({$content:l(this.props.compData)?"hasContent":"noContent"})},getSkinProperties:function(){var o={},n=this.getIframeAttributes();!0===this.props.ios()&&e.assign(o,{overflow:"scroll",WebkitOverflowScrolling:"touch"});var s={"":{style:o,"data-src":n["data-src"],tagName:"wix-iframe"},iFrameHolder:{children:[t.utils.createReactElement("iframe",n)]}};return this.props.isResponsive&&delete s[""]["data-src"],s}};return r.compRegistrar.register("wysiwyg.viewer.components.HtmlComponent",u),s.skinsMap.addBatch(i),u}.apply(e,n))||(t.exports=s)},798:function(t,e,o){var n,s,i;"undefined"!=typeof self&&self,s=[],void 0===(i="function"==typeof(n=function(){"use strict";var t={"wysiwyg.viewer.skins.HtmlComponentSkin":{react:[["div","iFrameHolder",[],{}]],css:{"%iFrameHolder":"width:100%;height:100%;","%iFrameHolder > iframe":"position:absolute;",'%[data-state="noContent"]':"background-color:#A5A5A5;"}}};return t})?n.apply(e,s):n)||(t.exports=i)}})}));
//# sourceMappingURL=htmlComponent.min.js.map