define("loginSocialBar",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins","reactDOM","zepto","textCommon","icon"],(function(t,e,n,i,o,a,r,s,p,l){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=909)}({0:function(e,n){e.exports=t},1:function(t,n){t.exports=e},2:function(t,e){t.exports=n},25:function(t,e){t.exports=p},258:function(t,e,n){var i,o;i=[n(2),n(4),n(0),n(3),n(1),n(99)],void 0===(o=function(t,e,n,i,o,a){"use strict";var r=o.linkRenderer;return{displayName:"loginSocialButton",mixins:[i.mixins.skinBasedComp,i.mixins.createChildComponentMixin],propTypes:n.assign({id:e.string,label:e.string,iconRef:e.object,link:e.object,displayCount:e.number,iconSize:e.number,buttonsDirection:e.string,svgProps:e.object,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo.isRequired},t.utils.santaTypesUtils.getSantaTypesByDefinition(a)),onButtonClick:function(){this.props.onClick&&this.props.onClick()},createBadge:function(){var e=null;if(n.isNumber(this.props.displayCount)){var i=this.props.displayCount>=1e3?"".concat(Math.floor(this.props.displayCount/1e3),"k"):this.props.displayCount;e=t.utils.createReactElement("span",{children:i})}return e},getAriaLabel:function(){var t="";return n.isNumber(this.props.displayCount)&&(t="".concat(this.props.displayCount," ")),t+=this.props.label},createIcon:function(){if(this.props.iconRef)return this.createChildComponent(this.props.iconRef,"wysiwyg.viewer.components.Icon","icon",{ref:"icon",id:"".concat(this.props.id,"icon"),iconSize:this.props.iconSize,link:null,svgProps:this.props.svgProps,style:{width:this.props.iconSize,height:this.props.iconSize}})},getSkinProperties:function(){var t=this.props.iconSize/2,e="rtl"===this.props.buttonsDirection?{right:t,left:"auto"}:{left:t,right:"auto"};return{"":{onClick:this.onButtonClick,"aria-label":this.getAriaLabel()},link:this.props.link?r.renderLink(this.props.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{tabIndex:0},icon:this.createIcon(),badge:{children:this.createBadge(),style:e}}},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.LoginSocialButtonSkin"}}}.apply(e,i))||(t.exports=o)},3:function(t,e){t.exports=i},4:function(t,e){t.exports=o},5:function(t,e){t.exports=a},6:function(t,e){t.exports=r},7:function(t,e){t.exports=s},909:function(t,e,n){var i,o;i=[n(0),n(910),n(258),n(3),n(5),n(911),n(912)],void 0===(o=function(t,e,n,i,o,a,r){"use strict";var s={loginSocialBar:e,loginSocialButton:n,loginSocialBarDataRequirementsChecker:r};return i.compRegistrar.register("wysiwyg.viewer.components.LoginSocialBar",s.loginSocialBar).register("wysiwyg.viewer.components.LoginSocialButton",s.loginSocialButton),o.skinsMap.addBatch(a),s}.apply(e,i))||(t.exports=o)},910:function(t,e,n){var i,o;function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}i=[n(2),n(0),n(1),n(25),n(6),n(7),n(258),n(99),n(3)],void 0===(o=function(t,e,n,i,o,r,s,p,l){"use strict";var d=n.linkRenderer,c="avatarOnly",g="textOnly",u="avatarAndText",h="loggedIn",f="loggedInMenuOpened",m="loggedOut",v={32:"Space",13:"Enter",40:"ArrowDown"};function b(t){return t.loggedInMember===c||t.loggedInMember===u}function y(t){return e.isArray(t.iconItems)&&t.iconItems.length>0}function w(t){return{isLoggedIn:t.isLoggedIn,$loggedIn:t.isLoggedIn?"loggedIn":"loggedOut",$direction:"rtl"===t.compProp.buttonsDirection?"rtl":"ltr",$dropdownDirection:"right"===t.compProp.dropDownTextAlignment?"right":"left",$iconsOnly:t.compData.loggedInMember,$noButtons:y(t)?"buttons":"noButtons"}}function x(t){switch(t.compProp.buttonsAlignment){case"left":return"rtl"===t.compProp.buttonsDirection?"flex-end":"flex-start";case"right":return"rtl"===t.compProp.buttonsDirection?"flex-start":"flex-end";case"center":return"center";default:return"flex-end"}}return{displayName:"loginSocialBar",mixins:[l.mixins.skinBasedComp,i.textScaleMixin,l.mixins.createChildComponentMixin],propTypes:e.assign({compData:t.santaTypesDefinitions.Component.compData.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,isMobileView:t.santaTypesDefinitions.isMobileView,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice,isTabletDevice:t.santaTypesDefinitions.Device.isTabletDevice,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,navigateToRenderedLink:t.santaTypesDefinitions.Navigation.navigateToRenderedLink.isRequired,currentUrlPageId:t.santaTypesDefinitions.Component.currentUrlPageId,linkRenderInfo:t.santaTypesDefinitions.Link.renderInfo.isRequired,componentPreviewState:t.santaTypesDefinitions.RenderFlags.componentPreviewState,componentViewMode:t.santaTypesDefinitions.RenderFlags.componentViewMode,logout:t.santaTypesDefinitions.SiteMembersSantaTypes.logout.isRequired,showAuthenticationDialog:t.santaTypesDefinitions.SiteMembersSantaTypes.showAuthenticationDialog.isRequired,serviceTopology:t.santaTypesDefinitions.ServiceTopology.serviceTopology.isRequired,isLoggedIn:t.santaTypesDefinitions.MemberLogin.isLoggedIn.isRequired,language:t.santaTypesDefinitions.MemberLogin.language.isRequired,memberName:t.santaTypesDefinitions.MemberLogin.memberName.isRequired,memberAvatar:t.santaTypesDefinitions.MemberLogin.memberAvatar,memberDefaultAvatar:t.santaTypesDefinitions.MemberLogin.memberDefaultAvatar,menuItems:t.santaTypesDefinitions.MemberLogin.menuItems,iconItems:t.santaTypesDefinitions.MemberLogin.iconItems,isResponsive:t.santaTypesDefinitions.RendererModel.isResponsive,svgPropsForMemberLoginIconItems:t.santaTypesDefinitions.VectorImage.svgPropsForMemberLoginIconItems,isExperimentOpen:t.santaTypesDefinitions.isExperimentOpen.isRequired},t.utils.santaTypesUtils.getSantaTypesByDefinition(s),t.utils.santaTypesUtils.getSantaTypesByDefinition(p)),getInitialState:function(){return e.assign(w(this.props),{isMenuOpen:!1})},createLoginSocialButtonComponent:function(t,n){var i=null,o=e.get(t,"iconRef.svgId");return o&&(i=e.get(this.props.svgPropsForMemberLoginIconItems,o,null)),this.createChildComponent(this.props.compData,"wysiwyg.viewer.components.LoginSocialButton","button",e.assign(e.clone(t),{ref:"button".concat(n),id:"".concat(this.props.id,"button").concat(n),style:{width:this.props.compProp.iconSize,height:this.props.compProp.iconSize,marginRight:"rtl"===this.props.compProp.buttonsDirection?"auto":10,marginLeft:"rtl"===this.props.compProp.buttonsDirection?10:"auto"},linkRenderInfo:this.props.linkRenderInfo,rootNavigationInfo:this.props.rootNavigationInfo,iconSize:this.props.compProp.iconSize,buttonsDirection:this.props.compProp.buttonsDirection,svgProps:i}))},getButtonsToRender:function(){return y(this.props)?e.map(this.props.iconItems,this.createLoginSocialButtonComponent):null},toggleMenu:function(t){this.registerReLayout(),this.setState({isMenuOpen:t||!this.state.isMenuOpen})},onUserClick:function(){this.toggleMenu()},onDropdownMenuItemKeyDown:function(t){var n,i=t.target;if("ArrowDown"===t.key||"Tab"===t.key||"ArrowUp"===t.key){t.stopPropagation(),t.preventDefault();var a=0,s=(n=l.utils.accessibility.getTabbaleElements(o.findDOMNode(this.refs.dropdownMenu))).indexOf(i);s>-1&&(a="ArrowUp"===t.key?s-1:s+1),a>=n.length?a=0:a<0&&(a=n.length-1);var p=n[a];p&&r(p).focus()}else if("Enter"===t.key)t.stopPropagation(),t.preventDefault(),e.invoke(i,"click");else if("Escape"===t.key){t.stopPropagation(),t.preventDefault(),this.toggleMenu(!1);var d=o.findDOMNode(this.refs.user);d&&d.focus()}},onUserKeyDown:function(t){if(this.state.isMenuOpen&&("Enter"===t.key||"Escape"===t.key||"ArrowUp"===t.key||32===t.keyCode))return t.stopPropagation(),t.preventDefault(),void this.toggleMenu(!1);if(v[t.keyCode])if(t.stopPropagation(),t.preventDefault(),this.state.isMenuOpen){var n=l.utils.accessibility.getTabbaleElements(o.findDOMNode(this.refs.dropdownMenu));e.size(n)>0&&e.head(n).focus()}else this.toggleMenu(!0)},onBlur:function(t){if(this.state.isMenuOpen){if(!t.relatedTarget&&e.includes(e.get(window,"document.activeElement.id",""),this.props.id))return;t.relatedTarget&&e.includes(t.relatedTarget.id,this.props.id)||this.toggleMenu(!1)}},onLogout:function(t){if(this.getLogoutFunction){var n=this.getLogoutFunction(t);e.isFunction(n)&&n.call(this)}else this.setState({isMenuOpen:!1}),this.props.logout(this.props.language)},onLogin:function(t){if(this.getLoginFunction){var n=this.getLoginFunction(t);e.isFunction(n)&&n.call(this)}else this.setState({isMenuOpen:!1}),this.props.showAuthenticationDialog({language:this.props.language,appId:3})},getMenuItems:function(){var n=e.concat(this.props.menuItems||[],{label:this.props.compData.logOutText||"Log Out",onClick:this.onLogout}),i=function(t){switch(t.compProp.dropDownTextAlignment){case"left":return"rtl"===t.compProp.buttonsDirection?"row-reverse":"row";case"right":return"rtl"===t.compProp.buttonsDirection?"row":"row-reverse";default:return"row"}}(this.props),o=n.length-2,a=n.length-1;return e.map(n,function(n,r){var s={};return n.link?s=d.renderLink(n.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):s.tabIndex=0,0===r&&(s["data-preview"]=this.props.componentPreviewState),n.isSelected&&(s["data-state"]="selected"),t.utils.createReactElement("li",{key:"item".concat(r),children:[t.utils.createReactElement("a",e.assign({children:[t.utils.createReactElement("div",{children:n.label,id:"".concat(this.props.id,"menuItemDiv").concat(r),key:"".concat(this.props.id,"menuItemDiv").concat(r)}),e.isNumber(n.displayCount)?t.utils.createReactElement("div",{key:"".concat(this.props.id,"displayCount").concat(r),children:"(".concat(n.displayCount,")")}):null],ref:"menuItem".concat(r),id:"".concat(this.props.id,"menuItem").concat(r),key:"".concat(this.props.id,"menuItem").concat(r),"data-aid":"menuItem".concat(r),style:{flexDirection:i,marginTop:0===r?10:"initial",marginBottom:r===a?10:"initial"},onKeyDown:this.onDropdownMenuItemKeyDown},s)),r===o?t.utils.createReactElement("hr",{key:"separator".concat(r)}):null],onClick:n.onClick||null})}.bind(this))},getMenuOptions:function(){return[{label:"Choose an option",value:-1}].concat(a(e.map(this.props.menuItems,(function(t,e){return{label:t.label,value:e,link:t.link,onClick:t.onClick,isSelected:t.isSelected}}))),[{label:this.props.compData.logOutText||"Log Out",onClick:this.onLogout,value:(e.get(this.props.menuItems,"length")||0)+1}])},onSelectionChange:function(t){var n=e.parseInt(t.target.selectedIndex),i=this.getMenuOptions()[n];if(i.link){var o=d.renderLink(i.link,this.props.linkRenderInfo,this.props.rootNavigationInfo);this.props.navigateToRenderedLink(o)}else e.isFunction(i.onClick)&&i.onClick(t)},componentWillReceiveProps:function(t){var n=w(t);e.isEqual(this.props.componentPreviewState,t.componentPreviewState)?e.isEqual(this.props.componentViewMode,t.componentViewMode)&&e.isEqual(this.props.currentUrlPageId,t.currentUrlPageId)||(n.isMenuOpen=!1):e.includes(t.componentPreviewState,f)?n.isMenuOpen=!0:(!t.componentPreviewState||e.includes(t.componentPreviewState,h)||e.includes(t.componentPreviewState,m))&&(n.isMenuOpen=!1),e.isMatch(this.state,n)||this.setState(n)},componentDidUpdate:function(t,n){this.props.isResponsive&&this.state.isMenuOpen&&!n.isMenuOpen&&r(this.refs.dropdownMenu).css(function(t,n,i,o){var a,s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],p=t.getBoundingClientRect(),l=parseInt(r(t).css("border-width"),10)||0,d=i.offsetWidth,c=p.height,g={top:"".concat(c-l,"px")};if(n.children.length>0&&d>0){var u=s?r("#SITE_ROOT")[0]:r("#SITE_CONTAINER")[0],h=u.getBoundingClientRect(),f=n.children[0].getBoundingClientRect(),m=p.right-f.right-l,v=f.left-p.left-l;if(o){var b=p.left+v+d-h.right;b>0&&(v-=b),a={left:"".concat(v,"px"),right:"initial"}}else{var y=h.left-p.right+m+d;y>0&&(m-=y),a={right:"".concat(m,"px"),left:"initial"}}}return e.assign(g,a||{})}(this.refs[""],this.refs.arrow,this.refs.dropdownMenu,"rtl"===this.props.compProp.buttonsDirection,!1))},renderMemberAvatar:function(){var t,n=null;return this.props.memberAvatar?t={uri:this.props.memberAvatar,type:"Image"}:(t={svgId:this.props.memberDefaultAvatar,type:"VectorImage"},n=e.get(this.props.svgPropsForMemberLoginIconItems,this.props.memberDefaultAvatar,null)),this.createChildComponent(t,"wysiwyg.viewer.components.Icon","avatar",{ref:"avatar",id:"".concat(this.props.id,"avatar"),iconSize:this.props.compProp.iconSize,style:{width:this.props.compProp.iconSize,height:this.props.compProp.iconSize},svgProps:n})},getSkinProperties:function(){var n,i={"":{style:{direction:this.props.compProp.buttonsDirection||"ltr",justifyContent:x(this.props)},"aria-label":"Members bar","data-icon-size":this.props.compProp.iconSize,"data-is-logged-in":this.state.isLoggedIn,onBlur:this.onBlur}},o=[];if(this.props.isMobileView){var a=this.getMenuOptions();n=(o=e.map(a,(function(n){return t.utils.createReactElement("option",e.assign(n,{children:[n.label]}))})))[e.findIndex(a,"isSelected")]||o[0]}var r,s=e.get(this.getFontSize(),"fontSize",null);return this.state.isLoggedIn?e.assign(i,{buttons:{children:this.getButtonsToRender(),style:{display:y(this.props)?null:"none"}},userWrapper:{style:{position:"relative"}},user:{onClick:this.onUserClick,onKeyDown:this.onUserKeyDown,"data-preview":this.props.componentPreviewState,"aria-label":"".concat(this.props.memberName," account menu")},icon:{children:this.renderMemberAvatar(),style:{display:b(this.props.compData)?null:"none"}},text:{children:t.utils.createReactElement("span",{children:this.props.memberName}),style:{display:(r=this.props.compData,r.loggedInMember!==g&&r.loggedInMember!==u?"none":null),fontSize:s}},dropdownMenu:{children:t.utils.createReactElement("ul",{children:this.getMenuItems()}),style:{display:!this.props.isMobileView&&this.state.isMenuOpen?null:"none",fontSize:s},"aria-live":"polite"},dropdownMenuMobile:{style:{display:this.props.isMobileView?"auto":"none",fontSize:s},children:o,value:e.get(n,"props.value"),onChange:this.onSelectionChange}}):(e.assign(i,{login:{children:[b(this.props.compData)?this.renderMemberAvatar():null,t.utils.createReactElement("span",{children:this.props.compData.loggedOutText||"Login | Sign up"})],onClick:this.onLogin,style:{fontSize:s},"data-preview":this.props.componentPreviewState}}),i[""]["aria-label"]="Login or Sign up"),i},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.LoginSocialBarSkin"}}}.apply(e,i))||(t.exports=o)},911:function(t,e,n){var i,o,a;"undefined"!=typeof self&&self,o=[],void 0===(a="function"==typeof(i=function(){"use strict";var t={"wysiwyg.viewer.skins.LoginSocialBarSkin":{react:[["button","login",[],{}],["nav","buttons",[],{}],["div","userWrapper",[],{},["button","user",[],{},["div","icon",[],{}],["div","text",[],{}],["div","arrow",[],{},["svg",null,[],{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8"},["path",null,[],{fillRule:"nonzero",d:"M1.707.293L.293 1.707l6 6a1 1 0 0 0 1.397.016l6-5.726L12.31.55 7.016 5.602 1.707.292z"}]]]],["select","dropdownMenuMobile",[],{}]],["nav","dropdownMenu",[],{}]],exports:{button:{skin:"wysiwyg.viewer.skins.LoginSocialButtonSkin"},avatar:{skin:"wysiwyg.viewer.skins.IconSkin"}},params:{bg:"BG_COLOR_ALPHA",brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW","bg-dd":"BG_COLOR_ALPHA","brw-dd":"BORDER_SIZE","brd-dd":"BORDER_COLOR_ALPHA","rd-dd":"BORDER_RADIUS","shd-dd":"BOX_SHADOW",fnt:"FONT","fnt-size-dd":"TEXT_SIZE","txt-dd":"TEXT_COLOR","txt-slct-dd":"TEXT_COLOR","txth-dd":"TEXT_COLOR",txth:"TEXT_COLOR",txt:"TEXT_COLOR"},paramsDefaults:{bg:"transparent",brw:"0",brd:"color_15",rd:"0px",shd:"0 0 0 rgba(0, 0, 0, 0)","bg-dd":"color_11","brw-dd":"1px","brd-dd":"color_15","rd-dd":"0px","shd-dd":"0 0 0 rgba(0, 0, 0, 0)",fnt:"font_8","fnt-size-dd":"15px","txt-dd":"color_15","txt-slct-dd":"color_18","txth-dd":"color_14",txth:"color_17",txt:"color_18"},css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;pointer-events:none;",'%[data-state~="loggedIn"]':"background-color:[bg];border:[brw] solid [brd];[rd]  [shd]",'%[data-state~="loggedIn"] %login':"display:none;",'%[data-state~="loggedIn"] %dropdownMenuMobile':"pointer-events:all;position:absolute;opacity:0;cursor:pointer;width:100%;height:100%;left:0;",'%[data-state~="loggedIn"] %dropdownMenu':"z-index:99999;background-color:[bg-dd];border:[brw-dd] solid [brd-dd];box-sizing:border-box;[rd-dd]  [shd-dd]  [fnt]  font-size:[fnt-size-dd];position:absolute;min-width:100px;max-width:300px;",'%[data-state~="loggedIn"] %dropdownMenu a':"color:[txt-dd];padding-left:20px;padding-right:20px;display:-webkit-box;display:-webkit-flex;display:flex;line-height:260%;[rd-dd]    pointer-events:all;",'%[data-state~="loggedIn"] %dropdownMenu a[data-state~="selected"],%[data-state~="loggedIn"] %dropdownMenu a[data-preview~="selected"]':"color:[txt-slct-dd];",'%[data-state~="loggedIn"] %dropdownMenu a:hover,%[data-state~="loggedIn"] %dropdownMenu a[data-preview~="hover"]':"color:[txth-dd];",'%[data-state~="loggedIn"] %dropdownMenu a > div:first-child':"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",'%[data-state~="loggedIn"] %dropdownMenu a > div:nth-child(2)':"opacity:0.6;",'%[data-state~="loggedIn"] %dropdownMenu hr':"margin:5px 20px 5px 20px;opacity:0.4;",'%[data-state~="loggedIn"] %user':"cursor:pointer;pointer-events:all;white-space:nowrap;padding-top:6px;padding-bottom:6px;position:relative;",'%[data-state~="loggedIn"] %user:hover %text,%[data-state~="loggedIn"] %user[data-preview~="hover"] %text':"color:[txth];",'%[data-state~="loggedIn"] %user:hover %arrow path,%[data-state~="loggedIn"] %user[data-preview~="hover"] %arrow path':"fill:[txth];",'%[data-state~="loggedIn"] %icon':"display:inline-block;vertical-align:middle;",'%[data-state~="loggedIn"] %icon img':"border-radius:50%;",'%[data-state~="loggedIn"] %text':"color:[txt];[fnt]  display:inline-block;vertical-align:middle;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;min-width:60px;",'%[data-state~="loggedIn"] %arrow':"display:inline-block;vertical-align:middle;padding-left:14px;padding-right:14px;",'%[data-state~="loggedIn"] %arrow path':"fill:[txt];",'%[data-state~="loggedIn"] %buttons':"padding-top:6px;padding-bottom:6px;white-space:nowrap;",'%[data-state~="ltr"] %icon':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"] %buttons':"padding-left:14px;padding-right:initial;",'%[data-state~="ltr"] %login':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"][data-state~="avatarOnly"] %arrow':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"][data-state~="noButtons"] %icon':"padding-left:14px;",'%[data-state~="ltr"][data-state~="noButtons"][data-state~="textOnly"] %text':"padding-left:14px;padding-right:initial;",'%[data-state~="ltr"][data-state~="textOnly"] %login':"padding-left:14px;",'%[data-state~="rtl"] %icon':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"] %buttons':"padding-left:initial;padding-right:14px;",'%[data-state~="rtl"] %login':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"][data-state~="avatarOnly"] %arrow':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"][data-state~="noButtons"] %icon':"padding-right:14px;",'%[data-state~="rtl"][data-state~="noButtons"][data-state~="textOnly"] %text':"padding-right:14px;padding-left:initial;",'%[data-state~="rtl"][data-state~="textOnly"] %login':"padding-right:14px;",'%[data-state~="left"] %dropdownMenu a > div:nth-child(2)':"padding-left:12px;padding-right:initial;",'%[data-state~="right"] %dropdownMenu a > div:nth-child(2)':"padding-left:initial;padding-right:12px;",'%[data-state~="loggedOut"]':"background-color:[bg];border:[brw] solid [brd];[rd]  [shd]",'%[data-state~="loggedOut"] %user,%[data-state~="loggedOut"] %dropdownMenu,%[data-state~="loggedOut"] %buttons,%[data-state~="loggedOut"] %dropdownMenuMobile':"display:none;",'%[data-state~="loggedOut"] %login':"white-space:nowrap;padding-top:6px;padding-bottom:6px;color:[txt];[fnt]  [rd]  cursor:pointer;pointer-events:all;",'%[data-state~="loggedOut"] %login:hover,%[data-state~="loggedOut"] %login[data-preview~="hover"]':"color:[txth];",'%[data-state~="loggedOut"] %login span':"vertical-align:middle;",'%[data-state~="loggedOut"] %login %avatar':"display:inline-block;vertical-align:middle;padding-right:14px;padding-left:14px;"}},"wysiwyg.viewer.skins.LoginSocialButtonSkin":{react:[["a","link",[],{},["div","icon",[],{}],["div","text",[],{}],["div","badge",[],{}]]],exports:{icon:{skin:"wysiwyg.viewer.skins.IconSkin"}},params:{"badge-bg":"COLOR","badge-txt":"TEXT_COLOR"},paramsDefaults:{"badge-bg":"#E21C21","badge-txt":"color_11"},css:{"%":"position:relative;display:inline-block;","%icon":"border-radius:50%;","%badge":"background-color:[badge-bg];color:[badge-txt];border-radius:10px;position:absolute;top:0;text-align:center;height:18px;line-height:18px;letter-spacing:1px;","%badge span":"padding-left:6px;padding-right:6px;","% a":"display:block;pointer-events:all;"}}};return t})?i.apply(e,o):i)||(t.exports=a)},912:function(t,e,n){var i,o;i=[n(0),n(3),n(1)],void 0===(o=function(t,e,n){"use strict";function i(t,e){return n.svg.createSvgFetchRequest(t.serviceTopology.mediaRootUrl,t,e)}function o(e,o,a,r){var s=[i(a,"3d84bae5ad4d4d8a96de15e9f4b79a08.svg")],p=t.get(r,e);t.forEach(p,(function(e){var n=t.get(e,"iconRef.svgId");n&&s.push(i(a,n))}));var l=t.get(r,["data","language"]);return s.push(n.translationsLoader.getRequest(a,l,{initiator:o})),t.compact(s)}return t.map({"wysiwyg.viewer.components.LoginSocialBar":"data.iconItemsRef.menuRef.items","wysiwyg.viewer.components.mobile.TinyMenu":"data.loginSocialBarRef.iconItemsRef.menuRef.items"},(function(t,n){return e.dataRequirementsCheckerRegistrar.registerCheckerForCompType(n,o.bind(null,t,n))})),{DEFAULT_AVATAR_ID:"3d84bae5ad4d4d8a96de15e9f4b79a08.svg"}}.apply(e,i))||(t.exports=o)},99:function(t,e){t.exports=l}})}));
//# sourceMappingURL=loginSocialBar.min.js.map