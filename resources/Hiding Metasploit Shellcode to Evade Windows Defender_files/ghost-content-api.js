!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).GhostContentAPI=e()}(this,function(){"use strict";var t=function(t){return"object"==typeof t?null!==t:"function"==typeof t},e=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},n=function(t){try{return!!t()}catch(t){return!0}},r=!n(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),a=i.document,s=t(a)&&t(a.createElement),c=function(t){return s?a.createElement(t):{}},u=!r&&!n(function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}),f=Object.defineProperty,l={f:r?Object.defineProperty:function(n,r,o){if(e(n),r=function(e,n){if(!t(e))return e;var r,o;if(n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!t(o=r.call(e)))return o;if(!n&&"function"==typeof(r=e.toString)&&!t(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}(r,!0),e(o),u)try{return f(n,r,o)}catch(t){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(n[r]=o.value),n}},h=l.f,p=Function.prototype,d=/^\s*function ([^ (]*)/;"name"in p||r&&h(p,"name",{configurable:!0,get:function(){try{return(""+this).match(d)[1]}catch(t){return""}}});var v=o(function(t){var e=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)}),m=(v.version,o(function(t){var e=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:v.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),y=0,g=Math.random(),w=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++y+g).toString(36))},b=o(function(t){var e=m("wks"),n=i.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:w)("Symbol."+t))}).store=e}),j=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},S=r?function(t,e,n){return l.f(t,e,j(1,n))}:function(t,e,n){return t[e]=n,t},_=b("unscopables"),E=Array.prototype;null==E[_]&&S(E,_,{});var O=function(t){E[_][t]=!0},P=function(t,e){return{value:e,done:!!t}},x={},C={}.toString,A=function(t){return C.call(t).slice(8,-1)},T=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==A(t)?t.split(""):Object(t)},k=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},R=function(t){return T(k(t))},L={}.hasOwnProperty,M=function(t,e){return L.call(t,e)},N=m("native-function-to-string",Function.toString),I=o(function(t){var e=w("src"),n=(""+N).split("toString");v.inspectSource=function(t){return N.call(t)},(t.exports=function(t,r,o,a){var s="function"==typeof o;s&&(M(o,"name")||S(o,"name",r)),t[r]!==o&&(s&&(M(o,e)||S(o,e,t[r]?""+t[r]:n.join(String(r)))),t===i?t[r]=o:a?t[r]?t[r]=o:S(t,r,o):(delete t[r],S(t,r,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||N.call(this)})}),F=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},q=function(t,e,n){if(F(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},B=function(t,e,n){var r,o,a,s,c=t&B.F,u=t&B.G,f=t&B.S,l=t&B.P,h=t&B.B,p=u?i:f?i[e]||(i[e]={}):(i[e]||{}).prototype,d=u?v:v[e]||(v[e]={}),m=d.prototype||(d.prototype={});for(r in u&&(n=e),n)a=((o=!c&&p&&void 0!==p[r])?p:n)[r],s=h&&o?q(a,i):l&&"function"==typeof a?q(Function.call,a):a,p&&I(p,r,a,t&B.U),d[r]!=a&&S(d,r,s),l&&m[r]!=a&&(m[r]=a)};i.core=v,B.F=1,B.G=2,B.S=4,B.P=8,B.B=16,B.W=32,B.U=64,B.R=128;var U=B,D=Math.ceil,G=Math.floor,W=function(t){return isNaN(t=+t)?0:(t>0?G:D)(t)},z=Math.min,H=function(t){return t>0?z(W(t),9007199254740991):0},V=Math.max,X=Math.min,J=function(t){return function(e,n,r){var o,i=R(e),a=H(i.length),s=function(t,e){return(t=W(t))<0?V(t+e,0):X(t,e)}(r,a);if(t&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},K=m("keys"),$=function(t){return K[t]||(K[t]=w(t))},Q=J(!1),Y=$("IE_PROTO"),Z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return function(t,e){var n,r=R(t),o=0,i=[];for(n in r)n!=Y&&M(r,n)&&i.push(n);for(;e.length>o;)M(r,n=e[o++])&&(~Q(i,n)||i.push(n));return i}(t,Z)},et=r?Object.defineProperties:function(t,n){e(t);for(var r,o=tt(n),i=o.length,a=0;i>a;)l.f(t,r=o[a++],n[r]);return t},nt=i.document,rt=nt&&nt.documentElement,ot=$("IE_PROTO"),it=function(){},at=function(){var t,e=c("iframe"),n=Z.length;for(e.style.display="none",rt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),at=t.F;n--;)delete at.prototype[Z[n]];return at()},st=Object.create||function(t,n){var r;return null!==t?(it.prototype=e(t),r=new it,it.prototype=null,r[ot]=t):r=at(),void 0===n?r:et(r,n)},ct=l.f,ut=b("toStringTag"),ft=function(t,e,n){t&&!M(t=n?t:t.prototype,ut)&&ct(t,ut,{configurable:!0,value:e})},lt={};S(lt,b("iterator"),function(){return this});var ht=function(t,e,n){t.prototype=st(lt,{next:j(1,n)}),ft(t,e+" Iterator")},pt=function(t){return Object(k(t))},dt=$("IE_PROTO"),vt=Object.prototype,mt=Object.getPrototypeOf||function(t){return t=pt(t),M(t,dt)?t[dt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?vt:null},yt=b("iterator"),gt=!([].keys&&"next"in[].keys()),wt=function(){return this},bt=function(t,e,n,r,o,i,a){ht(n,e,r);var s,c,u,f=function(t){if(!gt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",h="values"==o,p=!1,d=t.prototype,v=d[yt]||d["@@iterator"]||o&&d[o],m=v||f(o),y=o?h?f("entries"):m:void 0,g="Array"==e&&d.entries||v;if(g&&(u=mt(g.call(new t)))!==Object.prototype&&u.next&&(ft(u,l,!0),"function"!=typeof u[yt]&&S(u,yt,wt)),h&&v&&"values"!==v.name&&(p=!0,m=function(){return v.call(this)}),(gt||p||!d[yt])&&S(d,yt,m),x[e]=m,x[l]=wt,o)if(s={values:h?m:f("values"),keys:i?m:f("keys"),entries:y},a)for(c in s)c in d||I(d,c,s[c]);else U(U.P+U.F*(gt||p),e,s);return s}(Array,"Array",function(t,e){this._t=R(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,P(1)):P(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");x.Arguments=x.Array,O("keys"),O("values"),O("entries");for(var jt=b("iterator"),St=b("toStringTag"),_t=x.Array,Et={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},Ot=tt(Et),Pt=0;Pt<Ot.length;Pt++){var xt,Ct=Ot[Pt],At=Et[Ct],Tt=i[Ct],kt=Tt&&Tt.prototype;if(kt&&(kt[jt]||S(kt,jt,_t),kt[St]||S(kt,St,Ct),x[Ct]=_t,At))for(xt in bt)kt[xt]||I(kt,xt,bt[xt],!0)}var Rt,Lt,Mt,Nt;Rt="keys",Lt=function(){return function(t){return tt(pt(t))}},Mt=(v.Object||{})[Rt]||Object[Rt],(Nt={})[Rt]=Lt(Mt),U(U.S+U.F*n(function(){Mt(1)}),"Object",Nt);var It={f:Object.getOwnPropertySymbols},Ft={f:{}.propertyIsEnumerable},qt=Object.assign,Bt=!qt||n(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=qt({},t)[n]||Object.keys(qt({},e)).join("")!=r})?function(t,e){for(var n=pt(t),o=arguments.length,i=1,a=It.f,s=Ft.f;o>i;)for(var c,u=T(arguments[i++]),f=a?tt(u).concat(a(u)):tt(u),l=f.length,h=0;l>h;)c=f[h++],r&&!s.call(u,c)||(n[c]=u[c]);return n}:qt;U(U.S+U.F,"Object",{assign:Bt});var Ut,Dt,Gt,Wt=b("toStringTag"),zt="Arguments"==A(function(){return arguments}()),Ht=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Wt))?n:zt?A(e):"Object"==(r=A(e))&&"function"==typeof e.callee?"Arguments":r},Vt=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}},Xt=b("iterator"),Jt=Array.prototype,Kt=b("iterator"),$t=v.getIteratorMethod=function(t){if(null!=t)return t[Kt]||t["@@iterator"]||x[Ht(t)]},Qt=o(function(t){var n={},r={},o=t.exports=function(t,o,i,a,s){var c,u,f,l,h,p=s?function(){return t}:$t(t),d=q(i,a,o?2:1),v=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(void 0===(h=p)||x.Array!==h&&Jt[Xt]!==h){for(f=p.call(t);!(u=f.next()).done;)if((l=Vt(f,d,u.value,o))===n||l===r)return l}else for(c=H(t.length);c>v;v++)if((l=o?d(e(u=t[v])[0],u[1]):d(t[v]))===n||l===r)return l};o.BREAK=n,o.RETURN=r}),Yt=b("species"),Zt=i.process,te=i.setImmediate,ee=i.clearImmediate,ne=i.MessageChannel,re=i.Dispatch,oe=0,ie={},ae=function(){var t=+this;if(ie.hasOwnProperty(t)){var e=ie[t];delete ie[t],e()}},se=function(t){ae.call(t.data)};te&&ee||(te=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return ie[++oe]=function(){!function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}t.apply(n,e)}("function"==typeof t?t:Function(t),e)},Ut(oe),oe},ee=function(t){delete ie[t]},"process"==A(Zt)?Ut=function(t){Zt.nextTick(q(ae,t,1))}:re&&re.now?Ut=function(t){re.now(q(ae,t,1))}:ne?(Gt=(Dt=new ne).port2,Dt.port1.onmessage=se,Ut=q(Gt.postMessage,Gt,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts?(Ut=function(t){i.postMessage(t+"","*")},i.addEventListener("message",se,!1)):Ut="onreadystatechange"in c("script")?function(t){rt.appendChild(c("script")).onreadystatechange=function(){rt.removeChild(this),ae.call(t)}}:function(t){setTimeout(q(ae,t,1),0)});var ce={set:te,clear:ee},ue=ce.set,fe=i.MutationObserver||i.WebKitMutationObserver,le=i.process,he=i.Promise,pe="process"==A(le);function de(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=F(e),this.reject=F(n)}var ve={f:function(t){return new de(t)}},me=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}},ye=i.navigator,ge=ye&&ye.userAgent||"",we=b("species"),be=b("iterator"),je=!1;try{var Se=[7][be]();Se.return=function(){je=!0},Array.from(Se,function(){throw 2})}catch(t){}var _e,Ee,Oe,Pe,xe=ce.set,Ce=function(){var t,e,n,r=function(){var r,o;for(pe&&(r=le.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(pe)n=function(){le.nextTick(r)};else if(!fe||i.navigator&&i.navigator.standalone)if(he&&he.resolve){var o=he.resolve(void 0);n=function(){o.then(r)}}else n=function(){ue.call(i,r)};else{var a=!0,s=document.createTextNode("");new fe(r).observe(s,{characterData:!0}),n=function(){s.data=a=!a}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}(),Ae=i.TypeError,Te=i.process,ke=Te&&Te.versions,Re=ke&&ke.v8||"",Le=i.Promise,Me="process"==Ht(Te),Ne=function(){},Ie=Ee=ve.f,Fe=!!function(){try{var t=Le.resolve(1),e=(t.constructor={})[b("species")]=function(t){t(Ne,Ne)};return(Me||"function"==typeof PromiseRejectionEvent)&&t.then(Ne)instanceof e&&0!==Re.indexOf("6.6")&&-1===ge.indexOf("Chrome/66")}catch(t){}}(),qe=function(e){var n;return!(!t(e)||"function"!=typeof(n=e.then))&&n},Be=function(t,e){if(!t._n){t._n=!0;var n=t._c;Ce(function(){for(var r=t._v,o=1==t._s,i=0,a=function(e){var n,i,a,s=o?e.ok:e.fail,c=e.resolve,u=e.reject,f=e.domain;try{s?(o||(2==t._h&&Ge(t),t._h=1),!0===s?n=r:(f&&f.enter(),n=s(r),f&&(f.exit(),a=!0)),n===e.promise?u(Ae("Promise-chain cycle")):(i=qe(n))?i.call(n,c,u):c(n)):u(r)}catch(t){f&&!a&&f.exit(),u(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&Ue(t)})}},Ue=function(t){xe.call(i,function(){var e,n,r,o=t._v,a=De(t);if(a&&(e=me(function(){Me?Te.emit("unhandledRejection",o,t):(n=i.onunhandledrejection)?n({promise:t,reason:o}):(r=i.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=Me||De(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},De=function(t){return 1!==t._h&&0===(t._a||t._c).length},Ge=function(t){xe.call(i,function(){var e;Me?Te.emit("rejectionHandled",t):(e=i.onrejectionhandled)&&e({promise:t,reason:t._v})})},We=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),Be(e,!0))},ze=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw Ae("Promise can't be resolved itself");(e=qe(t))?Ce(function(){var r={_w:n,_d:!1};try{e.call(t,q(ze,r,1),q(We,r,1))}catch(t){We.call(r,t)}}):(n._v=t,n._s=1,Be(n,!1))}catch(t){We.call({_w:n,_d:!1},t)}}};Fe||(Le=function(t){!function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!")}(this,Le,"Promise","_h"),F(t),_e.call(this);try{t(q(ze,this,1),q(We,this,1))}catch(t){We.call(this,t)}},(_e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=function(t,e,n){for(var r in e)I(t,r,e[r],n);return t}(Le.prototype,{then:function(t,n){var r,o,i,a=Ie((r=Le,void 0===(i=e(this).constructor)||null==(o=e(i)[Yt])?r:F(o)));return a.ok="function"!=typeof t||t,a.fail="function"==typeof n&&n,a.domain=Me?Te.domain:void 0,this._c.push(a),this._a&&this._a.push(a),this._s&&Be(this,!1),a.promise},catch:function(t){return this.then(void 0,t)}}),Oe=function(){var t=new _e;this.promise=t,this.resolve=q(ze,t,1),this.reject=q(We,t,1)},ve.f=Ie=function(t){return t===Le||t===Pe?new Oe(t):Ee(t)}),U(U.G+U.W+U.F*!Fe,{Promise:Le}),ft(Le,"Promise"),function(t){var e=i[t];r&&e&&!e[we]&&l.f(e,we,{configurable:!0,get:function(){return this}})}("Promise"),Pe=v.Promise,U(U.S+U.F*!Fe,"Promise",{reject:function(t){var e=Ie(this);return(0,e.reject)(t),e.promise}}),U(U.S+U.F*!Fe,"Promise",{resolve:function(n){return function(n,r){if(e(n),t(r)&&r.constructor===n)return r;var o=ve.f(n);return(0,o.resolve)(r),o.promise}(this,n)}}),U(U.S+U.F*!(Fe&&function(t,e){if(!e&&!je)return!1;var n=!1;try{var r=[7],o=r[be]();o.next=function(){return{done:n=!0}},r[be]=function(){return o},t(r)}catch(t){}return n}(function(t){Le.all(t).catch(Ne)})),"Promise",{all:function(t){var e=this,n=Ie(e),r=n.resolve,o=n.reject,i=me(function(){var n=[],i=0,a=1;Qt(t,!1,function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=Ie(e),r=n.reject,o=me(function(){Qt(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}});var He={};He[b("toStringTag")]="z",He+""!="[object z]"&&I(Object.prototype,"toString",function(){return"[object "+Ht(this)+"]"},!0);var Ve=b("match"),Xe=function(e,n,r){if(t(o=n)&&(void 0!==(i=o[Ve])?i:"RegExp"==A(o)))throw TypeError("String#"+r+" doesn't accept regex!");var o,i;return String(k(e))},Je=b("match"),Ke=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Je]=!1,!"/./"[t](e)}catch(t){}}return!0},$e="".startsWith;U(U.P+U.F*Ke("startsWith"),"String",{startsWith:function(t){var e=Xe(this,t,"startsWith"),n=H(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return $e?$e.call(e,r,n):e.slice(n,n+r.length)===r}});var Qe="".endsWith;U(U.P+U.F*Ke("endsWith"),"String",{endsWith:function(t){var e=Xe(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=H(e.length),o=void 0===n?r:Math.min(H(n),r),i=String(t);return Qe?Qe.call(e,i,o):e.slice(o-i.length,o)===i}});var Ye=J(!0);U(U.P,"Array",{includes:function(t){return Ye(this,t,arguments.length>1?arguments[1]:void 0)}}),O("includes");var Ze=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}},tn=Object.prototype.toString;function en(t){return"[object Array]"===tn.call(t)}function nn(t){return null!==t&&"object"==typeof t}function rn(t){return"[object Function]"===tn.call(t)}function on(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),en(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}var an={isArray:en,isArrayBuffer:function(t){return"[object ArrayBuffer]"===tn.call(t)},isBuffer:function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:nn,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===tn.call(t)},isFile:function(t){return"[object File]"===tn.call(t)},isBlob:function(t){return"[object Blob]"===tn.call(t)},isFunction:rn,isStream:function(t){return nn(t)&&rn(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:on,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)on(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]="object"==typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)on(arguments[r],n);return e},extend:function(t,e,n){return on(e,function(e,r){t[r]=n&&"function"==typeof e?Ze(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}};function sn(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var cn=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(an.isURLSearchParams(e))r=e.toString();else{var o=[];an.forEach(e,function(t,e){null!=t&&(an.isArray(t)?e+="[]":t=[t],an.forEach(t,function(t){an.isDate(t)?t=t.toISOString():an.isObject(t)&&(t=JSON.stringify(t)),o.push(sn(e)+"="+sn(t))}))}),r=o.join("&")}if(r){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t};function un(){this.handlers=[]}un.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},un.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},un.prototype.forEach=function(t){an.forEach(this.handlers,function(e){null!==e&&t(e)})};var fn=un,ln=function(t,e,n){return an.forEach(n,function(n){t=n(t,e)}),t},hn=function(t){return!(!t||!t.__CANCEL__)},pn=function(t,e){an.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})},dn=function(t,e,n,r,o){return function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}(new Error(t),e,n,r,o)},vn=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],mn=an.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=r(window.location.href),function(e){var n=an.isString(e)?r(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},yn=an.isStandardBrowserEnv()?{write:function(t,e,n,r,o,i){var a=[];a.push(t+"="+encodeURIComponent(e)),an.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),an.isString(r)&&a.push("path="+r),an.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},gn=function(t){return new Promise(function(e,n){var r=t.data,o=t.headers;an.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(t.auth){var a=t.auth.username||"",s=t.auth.password||"";o.Authorization="Basic "+btoa(a+":"+s)}if(i.open(t.method.toUpperCase(),cn(t.url,t.params,t.paramsSerializer),!0),i.timeout=t.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(an.forEach(r.split("\n"),function(t){if(s=t.indexOf(":"),o=an.trim(t.substr(0,s)).toLowerCase(),a=an.trim(t.substr(s+1)),o){if(c[o]&&vn.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}}),c):c):null,f={data:t.responseType&&"text"!==t.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:t,request:i};!function(t,e,n){var r=n.config.validateStatus;!r||r(n.status)?t(n):e(dn("Request failed with status code "+n.status,n.config,null,n.request,n))}(e,n,f),i=null}},i.onabort=function(){i&&(n(dn("Request aborted",t,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(dn("Network Error",t,null,i)),i=null},i.ontimeout=function(){n(dn("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",i)),i=null},an.isStandardBrowserEnv()){var c=yn,u=(t.withCredentials||mn(t.url))&&t.xsrfCookieName?c.read(t.xsrfCookieName):void 0;u&&(o[t.xsrfHeaderName]=u)}if("setRequestHeader"in i&&an.forEach(o,function(t,e){void 0===r&&"content-type"===e.toLowerCase()?delete o[e]:i.setRequestHeader(e,t)}),t.withCredentials&&(i.withCredentials=!0),t.responseType)try{i.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&i.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){i&&(i.abort(),n(t),i=null)}),void 0===r&&(r=null),i.send(r)})},wn={"Content-Type":"application/x-www-form-urlencoded"};function bn(t,e){!an.isUndefined(t)&&an.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var jn,Sn={adapter:("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?jn=gn:"undefined"!=typeof XMLHttpRequest&&(jn=gn),jn),transformRequest:[function(t,e){return pn(e,"Accept"),pn(e,"Content-Type"),an.isFormData(t)||an.isArrayBuffer(t)||an.isBuffer(t)||an.isStream(t)||an.isFile(t)||an.isBlob(t)?t:an.isArrayBufferView(t)?t.buffer:an.isURLSearchParams(t)?(bn(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):an.isObject(t)?(bn(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};Sn.headers={common:{Accept:"application/json, text/plain, */*"}},an.forEach(["delete","get","head"],function(t){Sn.headers[t]={}}),an.forEach(["post","put","patch"],function(t){Sn.headers[t]=an.merge(wn)});var _n=Sn;function En(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var On=function(t){var e,n,r;return En(t),t.baseURL&&(r=t.url,!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r))&&(t.url=(e=t.baseURL,(n=t.url)?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e)),t.headers=t.headers||{},t.data=ln(t.data,t.headers,t.transformRequest),t.headers=an.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),an.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||_n.adapter)(t).then(function(e){return En(t),e.data=ln(e.data,e.headers,t.transformResponse),e},function(e){return hn(e)||(En(t),e&&e.response&&(e.response.data=ln(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})},Pn=function(t,e){e=e||{};var n={};return an.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(n[t]=e[t])}),an.forEach(["headers","auth","proxy"],function(r){an.isObject(e[r])?n[r]=an.deepMerge(t[r],e[r]):void 0!==e[r]?n[r]=e[r]:an.isObject(t[r])?n[r]=an.deepMerge(t[r]):void 0!==t[r]&&(n[r]=t[r])}),an.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}),n};function xn(t){this.defaults=t,this.interceptors={request:new fn,response:new fn}}xn.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=Pn(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[On,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},xn.prototype.getUri=function(t){return t=Pn(this.defaults,t),cn(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},an.forEach(["delete","get","head","options"],function(t){xn.prototype[t]=function(e,n){return this.request(an.merge(n||{},{method:t,url:e}))}}),an.forEach(["post","put","patch"],function(t){xn.prototype[t]=function(e,n,r){return this.request(an.merge(r||{},{method:t,url:e,data:n}))}});var Cn=xn;function An(t){this.message=t}An.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},An.prototype.__CANCEL__=!0;var Tn=An;function kn(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new Tn(t),e(n.reason))})}kn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},kn.source=function(){var t;return{token:new kn(function(e){t=e}),cancel:t}};var Rn=kn;function Ln(t){var e=new Cn(t),n=Ze(Cn.prototype.request,e);return an.extend(n,Cn.prototype,e),an.extend(n,e),n}var Mn=Ln(_n);Mn.Axios=Cn,Mn.create=function(t){return Ln(Pn(Mn.defaults,t))},Mn.Cancel=Tn,Mn.CancelToken=Rn,Mn.isCancel=hn,Mn.all=function(t){return Promise.all(t)},Mn.spread=function(t){return function(e){return t.apply(null,e)}};var Nn=Mn,In=Mn;Nn.default=In;var Fn=Nn,qn=["v2","v3","canary"];return function t(e){var n=e.url,r=e.host,o=e.ghostPath,i=void 0===o?"ghost":o,a=e.version,s=e.key;if(r&&(console.warn("GhostAdminAPI's `host` parameter is deprecated, please use `url` instead"),n||(n=r)),this instanceof t)return t({url:n,version:a,key:s});if(!a)throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "version" like "v2"');if(!qn.includes(a))throw new Error("GhostContentAPI Config Invalid: @tryghost/content-api does not support the supplied version");if(!n)throw new Error('GhostContentAPI Config Missing: @tryghost/content-api requires a "url" like "https://site.com" or "https://site.com/blog"');if(!/https?:\/\//.test(n))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "url" with a protocol like "https://site.com" or "https://site.com/blog"');if(n.endsWith("/"))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "url" without a trailing slash like "https://site.com" or "https://site.com/blog"');if(i.endsWith("/")||i.startsWith("/"))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "ghostPath" without a leading or trailing slash like "ghost"');if(s&&!/[0-9a-f]{26}/.test(s))throw new Error('GhostContentAPI Config Invalid: @tryghost/content-api requires a "key" with 26 hex characters');var c=["posts","authors","tags","pages","settings"].reduce(function(t,e){return Object.assign(t,(o={read:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(!t)return Promise.reject(new Error("Missing data"));if(!t.id&&!t.slug)return Promise.reject(new Error("Must include either data.id or data.slug"));var o=Object.assign({},t,n);return u(e,o,t.id||"slug/".concat(t.slug),r)},browse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return u(e,t,null,n)}},(r=e)in(n={})?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n));var n,r,o},{});return delete c.settings.read,c;function u(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!o&&!s)return Promise.reject(new Error("GhostContentAPI Config Missing: @tryghost/content-api was instantiated without a content key"));delete e.id;var c=o?{Authorization:"GhostMembers ".concat(o)}:void 0;return Fn.get("".concat(n,"/").concat(i,"/api/").concat(a,"/content/").concat(t,"/").concat(r?r+"/":""),{params:Object.assign({key:s},e),paramsSerializer:function(t){return Object.keys(t).reduce(function(e,n){var r=encodeURIComponent([].concat(t[n]).join(","));return e.concat("".concat(n,"=").concat(r))},[]).join("&")},headers:c}).then(function(e){return Array.isArray(e.data[t])?1!==e.data[t].length||e.data.meta?Object.assign(e.data[t],{meta:e.data.meta}):e.data[t][0]:e.data[t]}).catch(function(t){if(t.response&&t.response.data&&t.response.data.errors){var e=t.response.data.errors[0],n=new Error(e.message),r=Object.keys(e);throw n.name=e.type,r.forEach(function(t){n[t]=e[t]}),n.response=t.response,n.request=t.request,n.config=t.config,n}throw t})}}});