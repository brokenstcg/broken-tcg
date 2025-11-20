(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function $w(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fg={exports:{}},vl={},Ug={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),qw=Symbol.for("react.portal"),Hw=Symbol.for("react.fragment"),Ww=Symbol.for("react.strict_mode"),Kw=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),Yw=Symbol.for("react.forward_ref"),Xw=Symbol.for("react.suspense"),Jw=Symbol.for("react.memo"),Zw=Symbol.for("react.lazy"),hp=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Bg={};function Vi(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||jg}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=Vi.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||jg}var Sh=Ih.prototype=new $g;Sh.constructor=Ih;zg(Sh,Vi.prototype);Sh.isPureReactComponent=!0;var dp=Array.isArray,qg=Object.prototype.hasOwnProperty,Ah={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var i,s={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)qg.call(e,i)&&!Hg.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:lo,type:t,key:o,ref:a,props:s,_owner:Ah.current}}function tE(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fp=/\/+/g;function wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function ha(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case lo:case qw:a=!0}}if(a)return a=t,s=s(a),t=i===""?"."+wu(a,0):i,dp(s)?(n="",t!=null&&(n=t.replace(fp,"$&/")+"/"),ha(s,e,n,"",function(d){return d})):s!=null&&(Rh(s)&&(s=tE(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(fp,"$&/")+"/")+t)),e.push(s)),1;if(a=0,i=i===""?".":i+":",dp(t))for(var u=0;u<t.length;u++){o=t[u];var c=i+wu(o,u);a+=ha(o,e,n,c,s)}else if(c=eE(t),typeof c=="function")for(t=c.call(t),u=0;!(o=t.next()).done;)o=o.value,c=i+wu(o,u++),a+=ha(o,e,n,c,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(t,e,n){if(t==null)return t;var i=[],s=0;return ha(t,i,"","",function(o){return e.call(n,o,s++)}),i}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},da={transition:null},iE={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:da,ReactCurrentOwner:Ah};function Kg(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Vi;Z.Fragment=Hw;Z.Profiler=Kw;Z.PureComponent=Ih;Z.StrictMode=Ww;Z.Suspense=Xw;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;Z.act=Kg;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zg({},t.props),s=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Ah.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)qg.call(e,c)&&!Hg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:lo,type:t.type,key:s,ref:o,props:i,_owner:a}};Z.createContext=function(t){return t={$$typeof:Qw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gw,_context:t},t.Consumer=t};Z.createElement=Wg;Z.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:Yw,render:t}};Z.isValidElement=Rh;Z.lazy=function(t){return{$$typeof:Zw,_payload:{_status:-1,_result:t},_init:rE}};Z.memo=function(t,e){return{$$typeof:Jw,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=da.transition;da.transition={};try{t()}finally{da.transition=e}};Z.unstable_act=Kg;Z.useCallback=function(t,e){return st.current.useCallback(t,e)};Z.useContext=function(t){return st.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return st.current.useDeferredValue(t)};Z.useEffect=function(t,e){return st.current.useEffect(t,e)};Z.useId=function(){return st.current.useId()};Z.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return st.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};Z.useRef=function(t){return st.current.useRef(t)};Z.useState=function(t){return st.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return st.current.useTransition()};Z.version="18.3.1";Ug.exports=Z;var re=Ug.exports;const sE=$w(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=re,aE=Symbol.for("react.element"),lE=Symbol.for("react.fragment"),uE=Object.prototype.hasOwnProperty,cE=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hE={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,s={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)uE.call(e,i)&&!hE.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:aE,type:t,key:o,ref:a,props:s,_owner:cE.current}}vl.Fragment=lE;vl.jsx=Gg;vl.jsxs=Gg;Fg.exports=vl;var x=Fg.exports,ic={},Qg={exports:{}},wt={},Yg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ye=J-1>>>1,ue=B[ye];if(0<s(ue,Q))B[ye]=Q,B[J]=ue,J=ye;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ye=0,ue=B.length,Se=ue>>>1;ye<Se;){var Xt=2*(ye+1)-1,Jt=B[Xt],Zt=Xt+1,en=B[Zt];if(0>s(Jt,J))Zt<ue&&0>s(en,Jt)?(B[ye]=en,B[Zt]=J,ye=Zt):(B[ye]=Jt,B[Xt]=J,ye=Xt);else if(Zt<ue&&0>s(en,J))B[ye]=en,B[Zt]=J,ye=Zt;else break e}}return Q}function s(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var c=[],d=[],p=1,y=null,_=3,k=!1,N=!1,V=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var Q=n(d);Q!==null;){if(Q.callback===null)i(d);else if(Q.startTime<=B)i(d),Q.sortIndex=Q.expirationTime,e(c,Q);else break;Q=n(d)}}function O(B){if(V=!1,R(B),!N)if(n(c)!==null)N=!0,$i(j);else{var Q=n(d);Q!==null&&Yt(O,Q.startTime-B)}}function j(B,Q){N=!1,V&&(V=!1,S(m),m=-1),k=!0;var J=_;try{for(R(Q),y=n(c);y!==null&&(!(y.expirationTime>Q)||B&&!A());){var ye=y.callback;if(typeof ye=="function"){y.callback=null,_=y.priorityLevel;var ue=ye(y.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?y.callback=ue:y===n(c)&&i(c),R(Q)}else i(c);y=n(c)}if(y!==null)var Se=!0;else{var Xt=n(d);Xt!==null&&Yt(O,Xt.startTime-Q),Se=!1}return Se}finally{y=null,_=J,k=!1}}var U=!1,E=null,m=-1,v=5,T=-1;function A(){return!(t.unstable_now()-T<v)}function C(){if(E!==null){var B=t.unstable_now();T=B;var Q=!0;try{Q=E(!0,B)}finally{Q?I():(U=!1,E=null)}}else U=!1}var I;if(typeof w=="function")I=function(){w(C)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Pt=at.port2;at.port1.onmessage=C,I=function(){Pt.postMessage(null)}}else I=function(){L(C,0)};function $i(B){E=B,U||(U=!0,I())}function Yt(B,Q){m=L(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||k||(N=!0,$i(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var J=_;_=Q;try{return B()}finally{_=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=_;_=B;try{return Q()}finally{_=J}},t.unstable_scheduleCallback=function(B,Q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,B={id:p++,callback:Q,priorityLevel:B,startTime:J,expirationTime:ue,sortIndex:-1},J>ye?(B.sortIndex=J,e(d,B),n(c)===null&&B===n(d)&&(V?(S(m),m=-1):V=!0,Yt(O,J-ye))):(B.sortIndex=ue,e(c,B),N||k||(N=!0,$i(j))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Q=_;return function(){var J=_;_=Q;try{return B.apply(this,arguments)}finally{_=J}}}})(Xg);Yg.exports=Xg;var dE=Yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=re,vt=dE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,Os={};function br(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Os[t]=e,t=0;t<e.length;t++)Jg.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,pE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function mE(t){return sc.call(mp,t)?!0:sc.call(pp,t)?!1:pE.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function gE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yE(t,e,n,i){if(e===null||typeof e>"u"||gE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,i,s,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function Ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,Ch);Be[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,Ch);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,Ch);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var s=Be.hasOwnProperty(e)?Be[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yE(e,n,s,i)&&(n=null),i||s===null?mE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var In=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),ey=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),ty=Symbol.for("react.offscreen"),gp=Symbol.iterator;function rs(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Eu;function ds(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Tu=!1;function Iu(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),a=s.length-1,u=o.length-1;1<=a&&0<=u&&s[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(s[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||s[a]!==o[u]){var c=`
`+s[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=u);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function _E(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case Qr:return"Portal";case oc:return"Profiler";case Nh:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ey:return(t.displayName||"Context")+".Consumer";case Zg:return(t._context.displayName||"Context")+".Provider";case xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function vE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wE(t){var e=ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=wE(t))}function ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ny(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function hc(t,e){iy(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function li(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(fs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function sy(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function oy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?oy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,ay=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EE=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(t){EE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ws[e]=ws[t]})});function ly(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ws.hasOwnProperty(t)&&ws[t]?(""+e).trim():e+"px"}function uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=ly(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var TE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(TE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yc=null;function Vh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _c=null,ui=null,ci=null;function Ep(t){if(t=ho(t)){if(typeof _c!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Sl(e),_c(t.stateNode,t.type,e))}}function cy(t){ui?ci?ci.push(t):ci=[t]:ui=t}function hy(){if(ui){var t=ui,e=ci;if(ci=ui=null,Ep(t),e)for(t=0;t<e.length;t++)Ep(e[t])}}function dy(t,e){return t(e)}function fy(){}var Su=!1;function py(t,e,n){if(Su)return t(e,n);Su=!0;try{return dy(t,e,n)}finally{Su=!1,(ui!==null||ci!==null)&&(fy(),hy())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var i=Sl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var vc=!1;if(pn)try{var is={};Object.defineProperty(is,"passive",{get:function(){vc=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{vc=!1}function IE(t,e,n,i,s,o,a,u,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Es=!1,Oa=null,La=!1,wc=null,SE={onError:function(t){Es=!0,Oa=t}};function AE(t,e,n,i,s,o,a,u,c){Es=!1,Oa=null,IE.apply(SE,arguments)}function RE(t,e,n,i,s,o,a,u,c){if(AE.apply(this,arguments),Es){if(Es){var d=Oa;Es=!1,Oa=null}else throw Error(F(198));La||(La=!0,wc=d)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function my(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tp(t){if(Fr(t)!==t)throw Error(F(188))}function kE(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Tp(s),t;if(o===i)return Tp(s),e;o=o.sibling}throw Error(F(188))}if(n.return!==i.return)n=s,i=o;else{for(var a=!1,u=s.child;u;){if(u===n){a=!0,n=s,i=o;break}if(u===i){a=!0,i=s,n=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===n){a=!0,n=o,i=s;break}if(u===i){a=!0,i=o,n=s;break}u=u.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==i)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function gy(t){return t=kE(t),t!==null?yy(t):null}function yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yy(t);if(e!==null)return e;t=t.sibling}return null}var _y=vt.unstable_scheduleCallback,Ip=vt.unstable_cancelCallback,CE=vt.unstable_shouldYield,PE=vt.unstable_requestPaint,Re=vt.unstable_now,NE=vt.unstable_getCurrentPriorityLevel,Oh=vt.unstable_ImmediatePriority,vy=vt.unstable_UserBlockingPriority,Ma=vt.unstable_NormalPriority,xE=vt.unstable_LowPriority,wy=vt.unstable_IdlePriority,wl=null,$t=null;function DE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:LE,VE=Math.log,OE=Math.LN2;function LE(t){return t>>>=0,t===0?32:31-(VE(t)/OE|0)|0}var Ko=64,Go=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var u=a&~s;u!==0?i=ps(u):(o&=a,o!==0&&(i=ps(o)))}else a=n&~s,a!==0?i=ps(a):o!==0&&(i=ps(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Mt(e),s=1<<n,i|=t[n],e&=~s;return i}function ME(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Mt(o),u=1<<a,c=s[a];c===-1?(!(u&n)||u&i)&&(s[a]=ME(u,e)):c<=e&&(t.expiredLanes|=u),o&=~u}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ey(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function FE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Mt(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Mt(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var ae=0;function Ty(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iy,Mh,Sy,Ay,Ry,Tc=!1,Qo=[],Bn=null,$n=null,qn=null,bs=new Map,Fs=new Map,Vn=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function ss(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ho(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function jE(t,e,n,i,s){switch(e){case"focusin":return Bn=ss(Bn,t,e,n,i,s),!0;case"dragenter":return $n=ss($n,t,e,n,i,s),!0;case"mouseover":return qn=ss(qn,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return bs.set(o,ss(bs.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,Fs.set(o,ss(Fs.get(o)||null,t,e,n,i,s)),!0}return!1}function ky(t){var e=vr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=my(n),e!==null){t.blockedOn=e,Ry(t.priority,function(){Sy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yc=i,n.target.dispatchEvent(i),yc=null}else return e=ho(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){fa(t)&&n.delete(e)}function zE(){Tc=!1,Bn!==null&&fa(Bn)&&(Bn=null),$n!==null&&fa($n)&&($n=null),qn!==null&&fa(qn)&&(qn=null),bs.forEach(Ap),Fs.forEach(Ap)}function os(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,zE)))}function Us(t){function e(s){return os(s,t)}if(0<Qo.length){os(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bn!==null&&os(Bn,t),$n!==null&&os($n,t),qn!==null&&os(qn,t),bs.forEach(e),Fs.forEach(e),n=0;n<Vn.length;n++)i=Vn[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)ky(n),n.blockedOn===null&&Vn.shift()}var hi=In.ReactCurrentBatchConfig,Fa=!0;function BE(t,e,n,i){var s=ae,o=hi.transition;hi.transition=null;try{ae=1,bh(t,e,n,i)}finally{ae=s,hi.transition=o}}function $E(t,e,n,i){var s=ae,o=hi.transition;hi.transition=null;try{ae=4,bh(t,e,n,i)}finally{ae=s,hi.transition=o}}function bh(t,e,n,i){if(Fa){var s=Ic(t,e,n,i);if(s===null)Lu(t,e,i,Ua,n),Sp(t,i);else if(jE(s,t,e,n,i))i.stopPropagation();else if(Sp(t,i),e&4&&-1<UE.indexOf(t)){for(;s!==null;){var o=ho(s);if(o!==null&&Iy(o),o=Ic(t,e,n,i),o===null&&Lu(t,e,i,Ua,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else Lu(t,e,i,null,n)}}var Ua=null;function Ic(t,e,n,i){if(Ua=null,t=Vh(i),t=vr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=my(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function Cy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NE()){case Oh:return 1;case vy:return 4;case Ma:case xE:return 16;case wy:return 536870912;default:return 16}default:return 16}}var Un=null,Fh=null,pa=null;function Py(){if(pa)return pa;var t,e=Fh,n=e.length,i,s="value"in Un?Un.value:Un.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[o-i];i++);return pa=s.slice(t,1<i?1-i:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Rp(){return!1}function Et(t){function e(n,i,s,o,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yo:Rp,this.isPropagationStopped=Rp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=Et(Oi),co=we({},Oi,{view:0,detail:0}),qE=Et(co),Ru,ku,as,El=we({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==as&&(as&&t.type==="mousemove"?(Ru=t.screenX-as.screenX,ku=t.screenY-as.screenY):ku=Ru=0,as=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),kp=Et(El),HE=we({},El,{dataTransfer:0}),WE=Et(HE),KE=we({},co,{relatedTarget:0}),Cu=Et(KE),GE=we({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),QE=Et(GE),YE=we({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XE=Et(YE),JE=we({},Oi,{data:0}),Cp=Et(JE),ZE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tT[t])?!!e[t]:!1}function jh(){return nT}var rT=we({},co,{key:function(t){if(t.key){var e=ZE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iT=Et(rT),sT=we({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Et(sT),oT=we({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),aT=Et(oT),lT=we({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),uT=Et(lT),cT=we({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hT=Et(cT),dT=[9,13,27,32],zh=pn&&"CompositionEvent"in window,Ts=null;pn&&"documentMode"in document&&(Ts=document.documentMode);var fT=pn&&"TextEvent"in window&&!Ts,Ny=pn&&(!zh||Ts&&8<Ts&&11>=Ts),Np=" ",xp=!1;function xy(t,e){switch(t){case"keyup":return dT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function pT(t,e){switch(t){case"compositionend":return Dy(e);case"keypress":return e.which!==32?null:(xp=!0,Np);case"textInput":return t=e.data,t===Np&&xp?null:t;default:return null}}function mT(t,e){if(Xr)return t==="compositionend"||!zh&&xy(t,e)?(t=Py(),pa=Fh=Un=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var gT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gT[t.type]:e==="textarea"}function Vy(t,e,n,i){cy(i),e=ja(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Is=null,js=null;function yT(t){qy(t,0)}function Tl(t){var e=ei(t);if(ry(e))return t}function _T(t,e){if(t==="change")return e}var Oy=!1;if(pn){var Pu;if(pn){var Nu="oninput"in document;if(!Nu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Nu=typeof Vp.oninput=="function"}Pu=Nu}else Pu=!1;Oy=Pu&&(!document.documentMode||9<document.documentMode)}function Op(){Is&&(Is.detachEvent("onpropertychange",Ly),js=Is=null)}function Ly(t){if(t.propertyName==="value"&&Tl(js)){var e=[];Vy(e,js,t,Vh(t)),py(yT,e)}}function vT(t,e,n){t==="focusin"?(Op(),Is=e,js=n,Is.attachEvent("onpropertychange",Ly)):t==="focusout"&&Op()}function wT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(js)}function ET(t,e){if(t==="click")return Tl(e)}function TT(t,e){if(t==="input"||t==="change")return Tl(e)}function IT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:IT;function zs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!sc.call(e,s)||!Ft(t[s],e[s]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function My(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?My(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function by(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ST(t){var e=by(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&My(n.ownerDocument.documentElement,n)){if(i!==null&&Bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Mp(n,o);var a=Mp(n,i);s&&a&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AT=pn&&"documentMode"in document&&11>=document.documentMode,Jr=null,Sc=null,Ss=null,Ac=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Jr==null||Jr!==Va(i)||(i=Jr,"selectionStart"in i&&Bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ss&&zs(Ss,i)||(Ss=i,i=ja(Sc,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},xu={},Fy={};pn&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Il(t){if(xu[t])return xu[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fy)return xu[t]=e[n];return t}var Uy=Il("animationend"),jy=Il("animationiteration"),zy=Il("animationstart"),By=Il("transitionend"),$y=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){$y.set(t,e),br(e,[t])}for(var Du=0;Du<Fp.length;Du++){var Vu=Fp[Du],RT=Vu.toLowerCase(),kT=Vu[0].toUpperCase()+Vu.slice(1);lr(RT,"on"+kT)}lr(Uy,"onAnimationEnd");lr(jy,"onAnimationIteration");lr(zy,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(By,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function Up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,RE(i,e,void 0,t),t.currentTarget=null}function qy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var u=i[a],c=u.instance,d=u.currentTarget;if(u=u.listener,c!==o&&s.isPropagationStopped())break e;Up(s,u,d),o=c}else for(a=0;a<i.length;a++){if(u=i[a],c=u.instance,d=u.currentTarget,u=u.listener,c!==o&&s.isPropagationStopped())break e;Up(s,u,d),o=c}}}if(La)throw t=wc,La=!1,wc=null,t}function fe(t,e){var n=e[Nc];n===void 0&&(n=e[Nc]=new Set);var i=t+"__bubble";n.has(i)||(Hy(e,t,2,!1),n.add(i))}function Ou(t,e,n){var i=0;e&&(i|=4),Hy(n,t,i,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[Jo]){t[Jo]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(CT.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Ou("selectionchange",!1,e))}}function Hy(t,e,n,i){switch(Cy(e)){case 1:var s=BE;break;case 4:s=$E;break;default:s=bh}n=s.bind(null,e,n,t),s=void 0,!vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Lu(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;u!==null;){if(a=vr(u),a===null)return;if(c=a.tag,c===5||c===6){i=o=a;continue e}u=u.parentNode}}i=i.return}py(function(){var d=o,p=Vh(n),y=[];e:{var _=$y.get(t);if(_!==void 0){var k=Uh,N=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":k=iT;break;case"focusin":N="focus",k=Cu;break;case"focusout":N="blur",k=Cu;break;case"beforeblur":case"afterblur":k=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=WE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=aT;break;case Uy:case jy:case zy:k=QE;break;case By:k=uT;break;case"scroll":k=qE;break;case"wheel":k=hT;break;case"copy":case"cut":case"paste":k=XE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Pp}var V=(e&4)!==0,L=!V&&t==="scroll",S=V?_!==null?_+"Capture":null:_;V=[];for(var w=d,R;w!==null;){R=w;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,S!==null&&(O=Ms(w,S),O!=null&&V.push($s(w,O,R)))),L)break;w=w.return}0<V.length&&(_=new k(_,N,null,n,p),y.push({event:_,listeners:V}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",_&&n!==yc&&(N=n.relatedTarget||n.fromElement)&&(vr(N)||N[mn]))break e;if((k||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?vr(N):null,N!==null&&(L=Fr(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(V=kp,O="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(V=Pp,O="onPointerLeave",S="onPointerEnter",w="pointer"),L=k==null?_:ei(k),R=N==null?_:ei(N),_=new V(O,w+"leave",k,n,p),_.target=L,_.relatedTarget=R,O=null,vr(p)===d&&(V=new V(S,w+"enter",N,n,p),V.target=R,V.relatedTarget=L,O=V),L=O,k&&N)t:{for(V=k,S=N,w=0,R=V;R;R=Hr(R))w++;for(R=0,O=S;O;O=Hr(O))R++;for(;0<w-R;)V=Hr(V),w--;for(;0<R-w;)S=Hr(S),R--;for(;w--;){if(V===S||S!==null&&V===S.alternate)break t;V=Hr(V),S=Hr(S)}V=null}else V=null;k!==null&&jp(y,_,k,V,!1),N!==null&&L!==null&&jp(y,L,N,V,!0)}}e:{if(_=d?ei(d):window,k=_.nodeName&&_.nodeName.toLowerCase(),k==="select"||k==="input"&&_.type==="file")var j=_T;else if(Dp(_))if(Oy)j=TT;else{j=wT;var U=vT}else(k=_.nodeName)&&k.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(j=ET);if(j&&(j=j(t,d))){Vy(y,j,n,p);break e}U&&U(t,_,d),t==="focusout"&&(U=_._wrapperState)&&U.controlled&&_.type==="number"&&dc(_,"number",_.value)}switch(U=d?ei(d):window,t){case"focusin":(Dp(U)||U.contentEditable==="true")&&(Jr=U,Sc=d,Ss=null);break;case"focusout":Ss=Sc=Jr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,bp(y,n,p);break;case"selectionchange":if(AT)break;case"keydown":case"keyup":bp(y,n,p)}var E;if(zh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Xr?xy(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Ny&&n.locale!=="ko"&&(Xr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Xr&&(E=Py()):(Un=p,Fh="value"in Un?Un.value:Un.textContent,Xr=!0)),U=ja(d,m),0<U.length&&(m=new Cp(m,t,null,n,p),y.push({event:m,listeners:U}),E?m.data=E:(E=Dy(n),E!==null&&(m.data=E)))),(E=fT?pT(t,n):mT(t,n))&&(d=ja(d,"onBeforeInput"),0<d.length&&(p=new Cp("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:d}),p.data=E))}qy(y,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Ms(t,n),o!=null&&i.unshift($s(t,o,s)),o=Ms(t,e),o!=null&&i.push($s(t,o,s))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jp(t,e,n,i,s){for(var o=e._reactName,a=[];n!==null&&n!==i;){var u=n,c=u.alternate,d=u.stateNode;if(c!==null&&c===i)break;u.tag===5&&d!==null&&(u=d,s?(c=Ms(n,o),c!=null&&a.unshift($s(n,c,u))):s||(c=Ms(n,o),c!=null&&a.push($s(n,c,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var PT=/\r\n?/g,NT=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(PT,`
`).replace(NT,"")}function Zo(t,e,n){if(e=zp(e),zp(t)!==e&&n)throw Error(F(425))}function za(){}var Rc=null,kc=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,xT=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(VT)}:Pc;function VT(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Us(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Us(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Li,qs="__reactProps$"+Li,mn="__reactContainer$"+Li,Nc="__reactEvents$"+Li,OT="__reactListeners$"+Li,LT="__reactHandles$"+Li;function vr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$p(t);t!==null;){if(n=t[Bt])return n;t=$p(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Sl(t){return t[qs]||null}var xc=[],ti=-1;function ur(t){return{current:t}}function me(t){0>ti||(t.current=xc[ti],xc[ti]=null,ti--)}function he(t,e){ti++,xc[ti]=t.current,t.current=e}var rr={},Ze=ur(rr),ct=ur(!1),kr=rr;function vi(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ht(t){return t=t.childContextTypes,t!=null}function Ba(){me(ct),me(Ze)}function qp(t,e,n){if(Ze.current!==rr)throw Error(F(168));he(Ze,e),he(ct,n)}function Wy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(F(108,vE(t)||"Unknown",s));return we({},n,i)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,kr=Ze.current,he(Ze,t),he(ct,ct.current),!0}function Hp(t,e,n){var i=t.stateNode;if(!i)throw Error(F(169));n?(t=Wy(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,me(ct),me(Ze),he(Ze,t)):me(ct),he(ct,n)}var sn=null,Al=!1,bu=!1;function Ky(t){sn===null?sn=[t]:sn.push(t)}function MT(t){Al=!0,Ky(t)}function cr(){if(!bu&&sn!==null){bu=!0;var t=0,e=ae;try{var n=sn;for(ae=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}sn=null,Al=!1}catch(s){throw sn!==null&&(sn=sn.slice(t+1)),_y(Oh,cr),s}finally{ae=e,bu=!1}}return null}var ni=[],ri=0,qa=null,Ha=0,Tt=[],It=0,Cr=null,on=1,an="";function gr(t,e){ni[ri++]=Ha,ni[ri++]=qa,qa=t,Ha=e}function Gy(t,e,n){Tt[It++]=on,Tt[It++]=an,Tt[It++]=Cr,Cr=t;var i=on;t=an;var s=32-Mt(i)-1;i&=~(1<<s),n+=1;var o=32-Mt(e)+s;if(30<o){var a=s-s%5;o=(i&(1<<a)-1).toString(32),i>>=a,s-=a,on=1<<32-Mt(e)+s|n<<s|i,an=o+t}else on=1<<o|n<<s|i,an=t}function $h(t){t.return!==null&&(gr(t,1),Gy(t,1,0))}function qh(t){for(;t===qa;)qa=ni[--ri],ni[ri]=null,Ha=ni[--ri],ni[ri]=null;for(;t===Cr;)Cr=Tt[--It],Tt[It]=null,an=Tt[--It],Tt[It]=null,on=Tt[--It],Tt[It]=null}var yt=null,gt=null,ge=!1,Ot=null;function Qy(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,gt=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,gt=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vc(t){if(ge){var e=gt;if(e){var n=e;if(!Wp(t,e)){if(Dc(t))throw Error(F(418));e=Hn(n.nextSibling);var i=yt;e&&Wp(t,e)?Qy(i,n):(t.flags=t.flags&-4097|2,ge=!1,yt=t)}}else{if(Dc(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,yt=t}}}function Kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function ea(t){if(t!==yt)return!1;if(!ge)return Kp(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=gt)){if(Dc(t))throw Yy(),Error(F(418));for(;e;)Qy(t,e),e=Hn(e.nextSibling)}if(Kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=yt?Hn(t.stateNode.nextSibling):null;return!0}function Yy(){for(var t=gt;t;)t=Hn(t.nextSibling)}function wi(){gt=yt=null,ge=!1}function Hh(t){Ot===null?Ot=[t]:Ot.push(t)}var bT=In.ReactCurrentBatchConfig;function ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var i=n.stateNode}if(!i)throw Error(F(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var u=s.refs;a===null?delete u[o]:u[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function Xy(t){function e(S,w){if(t){var R=S.deletions;R===null?(S.deletions=[w],S.flags|=16):R.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function i(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=Qn(S,w),S.index=0,S.sibling=null,S}function o(S,w,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<w?(S.flags|=2,w):R):(S.flags|=2,w)):(S.flags|=1048576,w)}function a(S){return t&&S.alternate===null&&(S.flags|=2),S}function u(S,w,R,O){return w===null||w.tag!==6?(w=qu(R,S.mode,O),w.return=S,w):(w=s(w,R),w.return=S,w)}function c(S,w,R,O){var j=R.type;return j===Yr?p(S,w,R.props.children,O,R.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xn&&Gp(j)===w.type)?(O=s(w,R.props),O.ref=ls(S,w,R),O.return=S,O):(O=Ta(R.type,R.key,R.props,null,S.mode,O),O.ref=ls(S,w,R),O.return=S,O)}function d(S,w,R,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=Hu(R,S.mode,O),w.return=S,w):(w=s(w,R.children||[]),w.return=S,w)}function p(S,w,R,O,j){return w===null||w.tag!==7?(w=Sr(R,S.mode,O,j),w.return=S,w):(w=s(w,R),w.return=S,w)}function y(S,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=qu(""+w,S.mode,R),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qo:return R=Ta(w.type,w.key,w.props,null,S.mode,R),R.ref=ls(S,null,w),R.return=S,R;case Qr:return w=Hu(w,S.mode,R),w.return=S,w;case xn:var O=w._init;return y(S,O(w._payload),R)}if(fs(w)||rs(w))return w=Sr(w,S.mode,R,null),w.return=S,w;ta(S,w)}return null}function _(S,w,R,O){var j=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return j!==null?null:u(S,w,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case qo:return R.key===j?c(S,w,R,O):null;case Qr:return R.key===j?d(S,w,R,O):null;case xn:return j=R._init,_(S,w,j(R._payload),O)}if(fs(R)||rs(R))return j!==null?null:p(S,w,R,O,null);ta(S,R)}return null}function k(S,w,R,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(R)||null,u(w,S,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case qo:return S=S.get(O.key===null?R:O.key)||null,c(w,S,O,j);case Qr:return S=S.get(O.key===null?R:O.key)||null,d(w,S,O,j);case xn:var U=O._init;return k(S,w,R,U(O._payload),j)}if(fs(O)||rs(O))return S=S.get(R)||null,p(w,S,O,j,null);ta(w,O)}return null}function N(S,w,R,O){for(var j=null,U=null,E=w,m=w=0,v=null;E!==null&&m<R.length;m++){E.index>m?(v=E,E=null):v=E.sibling;var T=_(S,E,R[m],O);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(S,E),w=o(T,w,m),U===null?j=T:U.sibling=T,U=T,E=v}if(m===R.length)return n(S,E),ge&&gr(S,m),j;if(E===null){for(;m<R.length;m++)E=y(S,R[m],O),E!==null&&(w=o(E,w,m),U===null?j=E:U.sibling=E,U=E);return ge&&gr(S,m),j}for(E=i(S,E);m<R.length;m++)v=k(E,S,m,R[m],O),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?m:v.key),w=o(v,w,m),U===null?j=v:U.sibling=v,U=v);return t&&E.forEach(function(A){return e(S,A)}),ge&&gr(S,m),j}function V(S,w,R,O){var j=rs(R);if(typeof j!="function")throw Error(F(150));if(R=j.call(R),R==null)throw Error(F(151));for(var U=j=null,E=w,m=w=0,v=null,T=R.next();E!==null&&!T.done;m++,T=R.next()){E.index>m?(v=E,E=null):v=E.sibling;var A=_(S,E,T.value,O);if(A===null){E===null&&(E=v);break}t&&E&&A.alternate===null&&e(S,E),w=o(A,w,m),U===null?j=A:U.sibling=A,U=A,E=v}if(T.done)return n(S,E),ge&&gr(S,m),j;if(E===null){for(;!T.done;m++,T=R.next())T=y(S,T.value,O),T!==null&&(w=o(T,w,m),U===null?j=T:U.sibling=T,U=T);return ge&&gr(S,m),j}for(E=i(S,E);!T.done;m++,T=R.next())T=k(E,S,m,T.value,O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?m:T.key),w=o(T,w,m),U===null?j=T:U.sibling=T,U=T);return t&&E.forEach(function(C){return e(S,C)}),ge&&gr(S,m),j}function L(S,w,R,O){if(typeof R=="object"&&R!==null&&R.type===Yr&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case qo:e:{for(var j=R.key,U=w;U!==null;){if(U.key===j){if(j=R.type,j===Yr){if(U.tag===7){n(S,U.sibling),w=s(U,R.props.children),w.return=S,S=w;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xn&&Gp(j)===U.type){n(S,U.sibling),w=s(U,R.props),w.ref=ls(S,U,R),w.return=S,S=w;break e}n(S,U);break}else e(S,U);U=U.sibling}R.type===Yr?(w=Sr(R.props.children,S.mode,O,R.key),w.return=S,S=w):(O=Ta(R.type,R.key,R.props,null,S.mode,O),O.ref=ls(S,w,R),O.return=S,S=O)}return a(S);case Qr:e:{for(U=R.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(S,w.sibling),w=s(w,R.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Hu(R,S.mode,O),w.return=S,S=w}return a(S);case xn:return U=R._init,L(S,w,U(R._payload),O)}if(fs(R))return N(S,w,R,O);if(rs(R))return V(S,w,R,O);ta(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,R),w.return=S,S=w):(n(S,w),w=qu(R,S.mode,O),w.return=S,S=w),a(S)):n(S,w)}return L}var Ei=Xy(!0),Jy=Xy(!1),Wa=ur(null),Ka=null,ii=null,Wh=null;function Kh(){Wh=ii=Ka=null}function Gh(t){var e=Wa.current;me(Wa),t._currentValue=e}function Oc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function di(t,e){Ka=t,Wh=ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Wh!==t)if(t={context:t,memoizedValue:e,next:null},ii===null){if(Ka===null)throw Error(F(308));ii=t,Ka.dependencies={lanes:0,firstContext:t}}else ii=ii.next=t;return e}var wr=null;function Qh(t){wr===null?wr=[t]:wr.push(t)}function Zy(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Qh(e)):(n.next=s.next,s.next=n),e.interleaved=n,gn(t,i)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dn=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ie&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,gn(t,n)}return s=i.interleaved,s===null?(e.next=e,Qh(i)):(e.next=s.next,s.next=e),i.interleaved=e,gn(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function Qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,i){var s=t.updateQueue;Dn=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var c=u,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==a&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=c))}if(o!==null){var y=s.baseState;a=0,p=d=c=null,u=o;do{var _=u.lane,k=u.eventTime;if((i&_)===_){p!==null&&(p=p.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=t,V=u;switch(_=e,k=n,V.tag){case 1:if(N=V.payload,typeof N=="function"){y=N.call(k,y,_);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=V.payload,_=typeof N=="function"?N.call(k,y,_):N,_==null)break e;y=we({},y,_);break e;case 2:Dn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[u]:_.push(u))}else k={eventTime:k,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=k,c=y):p=p.next=k,a|=_;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;_=u,u=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(p===null&&(c=y),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do a|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=y}}function Yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(F(191,s));s.call(i)}}}var fo={},qt=ur(fo),Hs=ur(fo),Ws=ur(fo);function Er(t){if(t===fo)throw Error(F(174));return t}function Xh(t,e){switch(he(Ws,e),he(Hs,t),he(qt,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pc(e,t)}me(qt),he(qt,e)}function Ti(){me(qt),me(Hs),me(Ws)}function t_(t){Er(Ws.current);var e=Er(qt.current),n=pc(e,t.type);e!==n&&(he(Hs,t),he(qt,n))}function Jh(t){Hs.current===t&&(me(qt),me(Hs))}var _e=ur(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function Zh(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ya=In.ReactCurrentDispatcher,Uu=In.ReactCurrentBatchConfig,Pr=0,ve=null,Ne=null,Oe=null,Ya=!1,As=!1,Ks=0,FT=0;function Ke(){throw Error(F(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function td(t,e,n,i,s,o){if(Pr=o,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?BT:$T,t=n(i,s),As){o=0;do{if(As=!1,Ks=0,25<=o)throw Error(F(301));o+=1,Oe=Ne=null,e.updateQueue=null,ya.current=qT,t=n(i,s)}while(As)}if(ya.current=Xa,e=Ne!==null&&Ne.next!==null,Pr=0,Oe=Ne=ve=null,Ya=!1,e)throw Error(F(300));return t}function nd(){var t=Ks!==0;return Ks=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ve.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Ct(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Oe===null?ve.memoizedState:Oe.next;if(e!==null)Oe=e,Ne=t;else{if(t===null)throw Error(F(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Oe===null?ve.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Gs(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Ct(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var i=Ne,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=a=null,c=null,d=o;do{var p=d.lane;if((Pr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var y={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(u=c=y,a=i):c=c.next=y,ve.lanes|=p,Nr|=p}d=d.next}while(d!==null&&d!==o);c===null?a=i:c.next=u,Ft(i,e.memoizedState)||(ut=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,ve.lanes|=o,Nr|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=t(o,a.action),a=a.next;while(a!==s);Ft(o,e.memoizedState)||(ut=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function n_(){}function r_(t,e){var n=ve,i=Ct(),s=e(),o=!Ft(i.memoizedState,s);if(o&&(i.memoizedState=s,ut=!0),i=i.queue,rd(o_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Qs(9,s_.bind(null,n,i,s,e),void 0,null),Le===null)throw Error(F(349));Pr&30||i_(n,e,s)}return s}function i_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s_(t,e,n,i){e.value=n,e.getSnapshot=i,a_(e)&&l_(t)}function o_(t,e,n){return n(function(){a_(e)&&l_(t)})}function a_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function l_(t){var e=gn(t,1);e!==null&&bt(e,t,1,-1)}function Xp(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:t},e.queue=t,t=t.dispatch=zT.bind(null,ve,t),[e.memoizedState,t]}function Qs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u_(){return Ct().memoizedState}function _a(t,e,n,i){var s=zt();ve.flags|=t,s.memoizedState=Qs(1|e,n,void 0,i===void 0?null:i)}function Rl(t,e,n,i){var s=Ct();i=i===void 0?null:i;var o=void 0;if(Ne!==null){var a=Ne.memoizedState;if(o=a.destroy,i!==null&&ed(i,a.deps)){s.memoizedState=Qs(e,n,o,i);return}}ve.flags|=t,s.memoizedState=Qs(1|e,n,o,i)}function Jp(t,e){return _a(8390656,8,t,e)}function rd(t,e){return Rl(2048,8,t,e)}function c_(t,e){return Rl(4,2,t,e)}function h_(t,e){return Rl(4,4,t,e)}function d_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f_(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4,4,d_.bind(null,e,t),n)}function id(){}function p_(t,e){var n=Ct();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m_(t,e){var n=Ct();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g_(t,e,n){return Pr&21?(Ft(n,e)||(n=Ey(),ve.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function UT(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{ae=n,Uu.transition=i}}function y_(){return Ct().memoizedState}function jT(t,e,n){var i=Gn(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},__(t))v_(e,n);else if(n=Zy(t,e,n,i),n!==null){var s=it();bt(n,t,i,s),w_(n,e,i)}}function zT(t,e,n){var i=Gn(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(__(t))v_(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.hasEagerState=!0,s.eagerState=u,Ft(u,a)){var c=e.interleaved;c===null?(s.next=s,Qh(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Zy(t,e,s,i),n!==null&&(s=it(),bt(n,t,i,s),w_(n,e,i))}}function __(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function v_(t,e){As=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var Xa={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},BT={readContext:kt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_a(4194308,4,d_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _a(4194308,4,t,e)},useInsertionEffect:function(t,e){return _a(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zt();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jT.bind(null,ve,t),[i.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:id,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=UT.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ve,s=zt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Le===null)throw Error(F(349));Pr&30||i_(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,Jp(o_.bind(null,i,o,t),[t]),i.flags|=2048,Qs(9,s_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=zt(),e=Le.identifierPrefix;if(ge){var n=an,i=on;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$T={readContext:kt,useCallback:p_,useContext:kt,useEffect:rd,useImperativeHandle:f_,useInsertionEffect:c_,useLayoutEffect:h_,useMemo:m_,useReducer:ju,useRef:u_,useState:function(){return ju(Gs)},useDebugValue:id,useDeferredValue:function(t){var e=Ct();return g_(e,Ne.memoizedState,t)},useTransition:function(){var t=ju(Gs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:r_,useId:y_,unstable_isNewReconciler:!1},qT={readContext:kt,useCallback:p_,useContext:kt,useEffect:rd,useImperativeHandle:f_,useInsertionEffect:c_,useLayoutEffect:h_,useMemo:m_,useReducer:zu,useRef:u_,useState:function(){return zu(Gs)},useDebugValue:id,useDeferredValue:function(t){var e=Ct();return Ne===null?e.memoizedState=t:g_(e,Ne.memoizedState,t)},useTransition:function(){var t=zu(Gs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:r_,useId:y_,unstable_isNewReconciler:!1};function Dt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=it(),s=Gn(t),o=dn(i,s);o.payload=e,n!=null&&(o.callback=n),e=Wn(t,o,s),e!==null&&(bt(e,t,s,i),ga(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=it(),s=Gn(t),o=dn(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Wn(t,o,s),e!==null&&(bt(e,t,s,i),ga(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),i=Gn(t),s=dn(n,i);s.tag=2,e!=null&&(s.callback=e),e=Wn(t,s,i),e!==null&&(bt(e,t,i,n),ga(e,t,i))}};function Zp(t,e,n,i,s,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!zs(n,i)||!zs(s,o):!0}function E_(t,e,n){var i=!1,s=rr,o=e.contextType;return typeof o=="object"&&o!==null?o=kt(o):(s=ht(e)?kr:Ze.current,i=e.contextTypes,o=(i=i!=null)?vi(t,s):rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function em(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Mc(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yh(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=kt(o):(o=ht(e)?kr:Ze.current,s.context=vi(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Lc(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&kl.enqueueReplaceState(s,s.state,null),Ga(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ii(t,e){try{var n="",i=e;do n+=_E(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function Bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HT=typeof WeakMap=="function"?WeakMap:Map;function T_(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,Kc=i),bc(t,e)},n}function I_(t,e,n){n=dn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){bc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bc(t,e),typeof i!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function tm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new HT;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=sI.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var WT=In.ReactCurrentOwner,ut=!1;function rt(t,e,n,i){e.child=t===null?Jy(e,null,n,i):Ei(e,t.child,n,i)}function im(t,e,n,i,s){n=n.render;var o=e.ref;return di(e,s),i=td(t,e,n,i,o,s),n=nd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,yn(t,e,s)):(ge&&n&&$h(e),e.flags|=1,rt(t,e,i,s),e.child)}function sm(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!dd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,S_(t,e,o,i,s)):(t=Ta(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(a,i)&&t.ref===e.ref)return yn(t,e,s)}return e.flags|=1,t=Qn(o,i),t.ref=e.ref,t.return=e,e.child=t}function S_(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(zs(o,i)&&t.ref===e.ref)if(ut=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,yn(t,e,s)}return Fc(t,e,n,i,s)}function A_(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(oi,mt),mt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(oi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,he(oi,mt),mt|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,he(oi,mt),mt|=i;return rt(t,e,s,n),e.child}function R_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fc(t,e,n,i,s){var o=ht(n)?kr:Ze.current;return o=vi(e,o),di(e,s),n=td(t,e,n,i,o,s),i=nd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,yn(t,e,s)):(ge&&i&&$h(e),e.flags|=1,rt(t,e,n,s),e.child)}function om(t,e,n,i,s){if(ht(n)){var o=!0;$a(e)}else o=!1;if(di(e,s),e.stateNode===null)va(t,e),E_(e,n,i),Mc(e,n,i,s),i=!0;else if(t===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=kt(d):(d=ht(n)?kr:Ze.current,d=vi(e,d));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==i||c!==d)&&em(e,a,i,d),Dn=!1;var _=e.memoizedState;a.state=_,Ga(e,i,a,s),c=e.memoizedState,u!==i||_!==c||ct.current||Dn?(typeof p=="function"&&(Lc(e,n,p,i),c=e.memoizedState),(u=Dn||Zp(e,n,u,i,_,c,d))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=d,i=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,e_(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:Dt(e.type,u),a.props=d,y=e.pendingProps,_=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=kt(c):(c=ht(n)?kr:Ze.current,c=vi(e,c));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==y||_!==c)&&em(e,a,i,c),Dn=!1,_=e.memoizedState,a.state=_,Ga(e,i,a,s);var N=e.memoizedState;u!==y||_!==N||ct.current||Dn?(typeof k=="function"&&(Lc(e,n,k,i),N=e.memoizedState),(d=Dn||Zp(e,n,d,i,_,N,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,N,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=N),a.props=i,a.state=N,a.context=c,i=d):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return Uc(t,e,n,i,o,s)}function Uc(t,e,n,i,s,o){R_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return s&&Hp(e,n,!1),yn(t,e,o);i=e.stateNode,WT.current=e;var u=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ei(e,t.child,null,o),e.child=Ei(e,null,u,o)):rt(t,e,u,o),e.memoizedState=i.state,s&&Hp(e,n,!0),e.child}function k_(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),Xh(t,e.containerInfo)}function am(t,e,n,i,s){return wi(),Hh(s),e.flags|=256,rt(t,e,n,i),e.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var i=e.pendingProps,s=_e.current,o=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(_e,s&1),t===null)return Vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Nl(a,i,0,null),t=Sr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=zc(n),e.memoizedState=jc,t):sd(e,a));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return KT(t,e,a,i,u,s,n);if(o){o=i.fallback,a=e.mode,s=t.child,u=s.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Qn(s,c),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=Qn(u,o):(o=Sr(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?zc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=jc,i}return o=t.child,t=o.sibling,i=Qn(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sd(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,i){return i!==null&&Hh(i),Ei(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KT(t,e,n,i,s,o,a){if(n)return e.flags&256?(e.flags&=-257,i=Bu(Error(F(422))),na(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=Nl({mode:"visible",children:i.children},s,0,null),o=Sr(o,s,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ei(e,t.child,null,a),e.child.memoizedState=zc(a),e.memoizedState=jc,o);if(!(e.mode&1))return na(t,e,a,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(F(419)),i=Bu(o,i,void 0),na(t,e,a,i)}if(u=(a&t.childLanes)!==0,ut||u){if(i=Le,i!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,gn(t,s),bt(i,t,s,-1))}return hd(),i=Bu(Error(F(421))),na(t,e,a,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=oI.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,gt=Hn(s.nextSibling),yt=e,ge=!0,Ot=null,t!==null&&(Tt[It++]=on,Tt[It++]=an,Tt[It++]=Cr,on=t.id,an=t.overflow,Cr=e),e=sd(e,i.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Oc(t.return,e,n)}function $u(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function P_(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(rt(t,e,i.children,n),i=_e.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(he(_e,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),$u(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Qa(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}$u(e,!0,n,null,o);break;case"together":$u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GT(t,e,n){switch(e.tag){case 3:k_(e),wi();break;case 5:t_(e);break;case 1:ht(e.type)&&$a(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;he(Wa,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(he(_e,_e.current&1),t=yn(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(_e,_e.current),i)break;return null;case 22:case 23:return e.lanes=0,A_(t,e,n)}return yn(t,e,n)}var N_,Bc,x_,D_;N_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bc=function(){};x_=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,Er(qt.current);var o=null;switch(n){case"input":s=cc(t,s),i=cc(t,i),o=[];break;case"select":s=we({},s,{value:void 0}),i=we({},i,{value:void 0}),o=[];break;case"textarea":s=fc(t,s),i=fc(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=za)}mc(n,i);var a;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Os.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var c=i[d];if(u=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&c!==u&&(c!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Os.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&fe("scroll",t),o||u===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};D_=function(t,e,n,i){n!==i&&(e.flags|=4)};function us(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function QT(t,e,n){var i=e.pendingProps;switch(qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&Ba(),Ge(e),null;case 3:return i=e.stateNode,Ti(),me(ct),me(Ze),Zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(Yc(Ot),Ot=null))),Bc(t,e),Ge(e),null;case 5:Jh(e);var s=Er(Ws.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(F(166));return Ge(e),null}if(t=Er(qt.current),ea(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Bt]=e,i[qs]=o,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(s=0;s<ms.length;s++)fe(ms[s],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":yp(i,o),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},fe("invalid",i);break;case"textarea":vp(i,o),fe("invalid",i)}mc(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&Zo(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Zo(i.textContent,u,t),s=["children",""+u]):Os.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&fe("scroll",i)}switch(n){case"input":Ho(i),_p(i,o,!0);break;case"textarea":Ho(i),wp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=za)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Bt]=e,t[qs]=i,N_(t,e,!1,!1),e.stateNode=t;e:{switch(a=gc(n,i),n){case"dialog":fe("cancel",t),fe("close",t),s=i;break;case"iframe":case"object":case"embed":fe("load",t),s=i;break;case"video":case"audio":for(s=0;s<ms.length;s++)fe(ms[s],t);s=i;break;case"source":fe("error",t),s=i;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=i;break;case"details":fe("toggle",t),s=i;break;case"input":yp(t,i),s=cc(t,i),fe("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=we({},i,{value:void 0}),fe("invalid",t);break;case"textarea":vp(t,i),s=fc(t,i),fe("invalid",t);break;default:s=i}mc(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?uy(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ay(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ls(t,c):typeof c=="number"&&Ls(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Os.hasOwnProperty(o)?c!=null&&o==="onScroll"&&fe("scroll",t):c!=null&&Ph(t,o,c,a))}switch(n){case"input":Ho(t),_p(t,i,!1);break;case"textarea":Ho(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?li(t,!!i.multiple,o,!1):i.defaultValue!=null&&li(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(F(166));if(n=Er(Ws.current),Er(qt.current),ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bt]=e,(o=i.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bt]=e,e.stateNode=i}return Ge(e),null;case 13:if(me(_e),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&gt!==null&&e.mode&1&&!(e.flags&128))Yy(),wi(),e.flags|=98560,o=!1;else if(o=ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(F(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Bt]=e}else wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),o=!1}else Ot!==null&&(Yc(Ot),Ot=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?xe===0&&(xe=3):hd())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ti(),Bc(t,e),t===null&&Bs(e.stateNode.containerInfo),Ge(e),null;case 10:return Gh(e.type._context),Ge(e),null;case 17:return ht(e.type)&&Ba(),Ge(e),null;case 19:if(me(_e),o=e.memoizedState,o===null)return Ge(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)us(o,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Qa(t),a!==null){for(e.flags|=128,us(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}o.tail!==null&&Re()>Si&&(e.flags|=128,i=!0,us(o,!1),e.lanes=4194304)}else{if(!i)if(t=Qa(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ge)return Ge(e),null}else 2*Re()-o.renderingStartTime>Si&&n!==1073741824&&(e.flags|=128,i=!0,us(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Re(),e.sibling=null,n=_e.current,he(_e,i?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function YT(t,e){switch(qh(e),e.tag){case 1:return ht(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ti(),me(ct),me(Ze),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return Ti(),null;case 10:return Gh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var ra=!1,Xe=!1,XT=typeof WeakSet=="function"?WeakSet:Set,$=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ie(t,e,i)}else n.current=null}function $c(t,e,n){try{n()}catch(i){Ie(t,e,i)}}var um=!1;function JT(t,e){if(Rc=Fa,t=by(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,d=0,p=0,y=t,_=null;t:for(;;){for(var k;y!==n||s!==0&&y.nodeType!==3||(u=a+s),y!==o||i!==0&&y.nodeType!==3||(c=a+i),y.nodeType===3&&(a+=y.nodeValue.length),(k=y.firstChild)!==null;)_=y,y=k;for(;;){if(y===t)break t;if(_===n&&++d===s&&(u=a),_===o&&++p===i&&(c=a),(k=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=k}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},Fa=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var V=N.memoizedProps,L=N.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:Dt(e.type,V),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return N=um,um=!1,N}function Rs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&$c(e,n,o)}s=s.next}while(s!==i)}}function Cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V_(t){var e=t.alternate;e!==null&&(t.alternate=null,V_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[qs],delete e[Nc],delete e[OT],delete e[LT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O_(t){return t.tag===5||t.tag===3||t.tag===4}function cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}function Wc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}var be=null,Vt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)L_(t,e,n),n=n.sibling}function L_(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Xe||si(n,e);case 6:var i=be,s=Vt;be=null,Pn(t,e,n),be=i,Vt=s,be!==null&&(Vt?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Vt?(t=be,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Us(t)):Mu(be,n.stateNode));break;case 4:i=be,s=Vt,be=n.stateNode.containerInfo,Vt=!0,Pn(t,e,n),be=i,Vt=s;break;case 0:case 11:case 14:case 15:if(!Xe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&$c(n,e,a),s=s.next}while(s!==i)}Pn(t,e,n);break;case 1:if(!Xe&&(si(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){Ie(n,e,u)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(Xe=(i=Xe)||n.memoizedState!==null,Pn(t,e,n),Xe=i):Pn(t,e,n);break;default:Pn(t,e,n)}}function hm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XT),e.forEach(function(i){var s=aI.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,a=e,u=a;e:for(;u!==null;){switch(u.tag){case 5:be=u.stateNode,Vt=!1;break e;case 3:be=u.stateNode.containerInfo,Vt=!0;break e;case 4:be=u.stateNode.containerInfo,Vt=!0;break e}u=u.return}if(be===null)throw Error(F(160));L_(o,a,s),be=null,Vt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){Ie(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)M_(e,t),e=e.sibling}function M_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),jt(t),i&4){try{Rs(3,t,t.return),Cl(3,t)}catch(V){Ie(t,t.return,V)}try{Rs(5,t,t.return)}catch(V){Ie(t,t.return,V)}}break;case 1:xt(e,t),jt(t),i&512&&n!==null&&si(n,n.return);break;case 5:if(xt(e,t),jt(t),i&512&&n!==null&&si(n,n.return),t.flags&32){var s=t.stateNode;try{Ls(s,"")}catch(V){Ie(t,t.return,V)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&iy(s,o),gc(u,a);var d=gc(u,o);for(a=0;a<c.length;a+=2){var p=c[a],y=c[a+1];p==="style"?uy(s,y):p==="dangerouslySetInnerHTML"?ay(s,y):p==="children"?Ls(s,y):Ph(s,p,y,d)}switch(u){case"input":hc(s,o);break;case"textarea":sy(s,o);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?li(s,!!o.multiple,k,!1):_!==!!o.multiple&&(o.defaultValue!=null?li(s,!!o.multiple,o.defaultValue,!0):li(s,!!o.multiple,o.multiple?[]:"",!1))}s[qs]=o}catch(V){Ie(t,t.return,V)}}break;case 6:if(xt(e,t),jt(t),i&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(V){Ie(t,t.return,V)}}break;case 3:if(xt(e,t),jt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(V){Ie(t,t.return,V)}break;case 4:xt(e,t),jt(t);break;case 13:xt(e,t),jt(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ld=Re())),i&4&&hm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(d=Xe)||p,xt(e,t),Xe=d):xt(e,t),jt(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(y=$=p;$!==null;){switch(_=$,k=_.child,_.tag){case 0:case 11:case 14:case 15:Rs(4,_,_.return);break;case 1:si(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(V){Ie(i,n,V)}}break;case 5:si(_,_.return);break;case 22:if(_.memoizedState!==null){fm(y);continue}}k!==null?(k.return=_,$=k):fm(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{s=y.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=y.stateNode,c=y.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=ly("display",a))}catch(V){Ie(t,t.return,V)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(V){Ie(t,t.return,V)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:xt(e,t),jt(t),i&4&&hm(t);break;case 21:break;default:xt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O_(n)){var i=n;break e}n=n.return}throw Error(F(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ls(s,""),i.flags&=-33);var o=cm(t);Wc(t,o,s);break;case 3:case 4:var a=i.stateNode.containerInfo,u=cm(t);Hc(t,u,a);break;default:throw Error(F(161))}}catch(c){Ie(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZT(t,e,n){$=t,b_(t)}function b_(t,e,n){for(var i=(t.mode&1)!==0;$!==null;){var s=$,o=s.child;if(s.tag===22&&i){var a=s.memoizedState!==null||ra;if(!a){var u=s.alternate,c=u!==null&&u.memoizedState!==null||Xe;u=ra;var d=Xe;if(ra=a,(Xe=c)&&!d)for($=s;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?pm(s):c!==null?(c.return=a,$=c):pm(s);for(;o!==null;)$=o,b_(o),o=o.sibling;$=s,ra=u,Xe=d}dm(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,$=o):dm(t)}}function dm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||Cl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xe)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Yp(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yp(e,a,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&Us(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Xe||e.flags&512&&qc(e)}catch(_){Ie(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function fm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function pm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cl(4,e)}catch(c){Ie(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(c){Ie(e,s,c)}}var o=e.return;try{qc(e)}catch(c){Ie(e,o,c)}break;case 5:var a=e.return;try{qc(e)}catch(c){Ie(e,a,c)}}}catch(c){Ie(e,e.return,c)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var eI=Math.ceil,Ja=In.ReactCurrentDispatcher,od=In.ReactCurrentOwner,Rt=In.ReactCurrentBatchConfig,ie=0,Le=null,Ce=null,je=0,mt=0,oi=ur(0),xe=0,Ys=null,Nr=0,Pl=0,ad=0,ks=null,lt=null,ld=0,Si=1/0,rn=null,Za=!1,Kc=null,Kn=null,ia=!1,jn=null,el=0,Cs=0,Gc=null,wa=-1,Ea=0;function it(){return ie&6?Re():wa!==-1?wa:wa=Re()}function Gn(t){return t.mode&1?ie&2&&je!==0?je&-je:bT.transition!==null?(Ea===0&&(Ea=Ey()),Ea):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Cy(t.type)),t):1}function bt(t,e,n,i){if(50<Cs)throw Cs=0,Gc=null,Error(F(185));uo(t,n,i),(!(ie&2)||t!==Le)&&(t===Le&&(!(ie&2)&&(Pl|=n),xe===4&&On(t,je)),dt(t,i),n===1&&ie===0&&!(e.mode&1)&&(Si=Re()+500,Al&&cr()))}function dt(t,e){var n=t.callbackNode;bE(t,e);var i=ba(t,t===Le?je:0);if(i===0)n!==null&&Ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ip(n),e===1)t.tag===0?MT(mm.bind(null,t)):Ky(mm.bind(null,t)),DT(function(){!(ie&6)&&cr()}),n=null;else{switch(Ty(i)){case 1:n=Oh;break;case 4:n=vy;break;case 16:n=Ma;break;case 536870912:n=wy;break;default:n=Ma}n=H_(n,F_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F_(t,e){if(wa=-1,Ea=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(fi()&&t.callbackNode!==n)return null;var i=ba(t,t===Le?je:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tl(t,i);else{e=i;var s=ie;ie|=2;var o=j_();(Le!==t||je!==e)&&(rn=null,Si=Re()+500,Ir(t,e));do try{rI();break}catch(u){U_(t,u)}while(!0);Kh(),Ja.current=o,ie=s,Ce!==null?e=0:(Le=null,je=0,e=xe)}if(e!==0){if(e===2&&(s=Ec(t),s!==0&&(i=s,e=Qc(t,s))),e===1)throw n=Ys,Ir(t,0),On(t,i),dt(t,Re()),n;if(e===6)On(t,i);else{if(s=t.current.alternate,!(i&30)&&!tI(s)&&(e=tl(t,i),e===2&&(o=Ec(t),o!==0&&(i=o,e=Qc(t,o))),e===1))throw n=Ys,Ir(t,0),On(t,i),dt(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(F(345));case 2:yr(t,lt,rn);break;case 3:if(On(t,i),(i&130023424)===i&&(e=ld+500-Re(),10<e)){if(ba(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){it(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Pc(yr.bind(null,t,lt,rn),e);break}yr(t,lt,rn);break;case 4:if(On(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var a=31-Mt(i);o=1<<a,a=e[a],a>s&&(s=a),i&=~o}if(i=s,i=Re()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eI(i/1960))-i,10<i){t.timeoutHandle=Pc(yr.bind(null,t,lt,rn),i);break}yr(t,lt,rn);break;case 5:yr(t,lt,rn);break;default:throw Error(F(329))}}}return dt(t,Re()),t.callbackNode===n?F_.bind(null,t):null}function Qc(t,e){var n=ks;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tl(t,e),t!==2&&(e=lt,lt=n,e!==null&&Yc(e)),t}function Yc(t){lt===null?lt=t:lt.push.apply(lt,t)}function tI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!Ft(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~ad,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),i=1<<n;t[n]=-1,e&=~i}}function mm(t){if(ie&6)throw Error(F(327));fi();var e=ba(t,0);if(!(e&1))return dt(t,Re()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var i=Ec(t);i!==0&&(e=i,n=Qc(t,i))}if(n===1)throw n=Ys,Ir(t,0),On(t,e),dt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,lt,rn),dt(t,Re()),null}function ud(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Si=Re()+500,Al&&cr())}}function xr(t){jn!==null&&jn.tag===0&&!(ie&6)&&fi();var e=ie;ie|=1;var n=Rt.transition,i=ae;try{if(Rt.transition=null,ae=1,t)return t()}finally{ae=i,Rt.transition=n,ie=e,!(ie&6)&&cr()}}function cd(){mt=oi.current,me(oi)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xT(n)),Ce!==null)for(n=Ce.return;n!==null;){var i=n;switch(qh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ba();break;case 3:Ti(),me(ct),me(Ze),Zh();break;case 5:Jh(i);break;case 4:Ti();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Gh(i.type._context);break;case 22:case 23:cd()}n=n.return}if(Le=t,Ce=t=Qn(t.current,null),je=mt=e,xe=0,Ys=null,ad=Pl=Nr=0,lt=ks=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,i.next=a}n.pending=i}wr=null}return t}function U_(t,e){do{var n=Ce;try{if(Kh(),ya.current=Xa,Ya){for(var i=ve.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Ya=!1}if(Pr=0,Oe=Ne=ve=null,As=!1,Ks=0,od.current=null,n===null||n.return===null){xe=1,Ys=e,Ce=null;break}e:{var o=t,a=n.return,u=n,c=e;if(e=je,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=u,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=nm(a);if(k!==null){k.flags&=-257,rm(k,a,u,o,e),k.mode&1&&tm(o,d,e),e=k,c=d;var N=e.updateQueue;if(N===null){var V=new Set;V.add(c),e.updateQueue=V}else N.add(c);break e}else{if(!(e&1)){tm(o,d,e),hd();break e}c=Error(F(426))}}else if(ge&&u.mode&1){var L=nm(a);if(L!==null){!(L.flags&65536)&&(L.flags|=256),rm(L,a,u,o,e),Hh(Ii(c,u));break e}}o=c=Ii(c,u),xe!==4&&(xe=2),ks===null?ks=[o]:ks.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var S=T_(o,c,e);Qp(o,S);break e;case 1:u=c;var w=o.type,R=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Kn===null||!Kn.has(R)))){o.flags|=65536,e&=-e,o.lanes|=e;var O=I_(o,u,e);Qp(o,O);break e}}o=o.return}while(o!==null)}B_(n)}catch(j){e=j,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function j_(){var t=Ja.current;return Ja.current=Xa,t===null?Xa:t}function hd(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||!(Nr&268435455)&&!(Pl&268435455)||On(Le,je)}function tl(t,e){var n=ie;ie|=2;var i=j_();(Le!==t||je!==e)&&(rn=null,Ir(t,e));do try{nI();break}catch(s){U_(t,s)}while(!0);if(Kh(),ie=n,Ja.current=i,Ce!==null)throw Error(F(261));return Le=null,je=0,xe}function nI(){for(;Ce!==null;)z_(Ce)}function rI(){for(;Ce!==null&&!CE();)z_(Ce)}function z_(t){var e=q_(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?B_(t):Ce=e,od.current=null}function B_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YT(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=QT(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function yr(t,e,n){var i=ae,s=Rt.transition;try{Rt.transition=null,ae=1,iI(t,e,n,i)}finally{Rt.transition=s,ae=i}return null}function iI(t,e,n,i){do fi();while(jn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(FE(t,o),t===Le&&(Ce=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,H_(Ma,function(){return fi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rt.transition,Rt.transition=null;var a=ae;ae=1;var u=ie;ie|=4,od.current=null,JT(t,n),M_(n,t),ST(kc),Fa=!!Rc,kc=Rc=null,t.current=n,ZT(n),PE(),ie=u,ae=a,Rt.transition=o}else t.current=n;if(ia&&(ia=!1,jn=t,el=s),o=t.pendingLanes,o===0&&(Kn=null),DE(n.stateNode),dt(t,Re()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Za)throw Za=!1,t=Kc,Kc=null,t;return el&1&&t.tag!==0&&fi(),o=t.pendingLanes,o&1?t===Gc?Cs++:(Cs=0,Gc=t):Cs=0,cr(),null}function fi(){if(jn!==null){var t=Ty(el),e=Rt.transition,n=ae;try{if(Rt.transition=null,ae=16>t?16:t,jn===null)var i=!1;else{if(t=jn,jn=null,el=0,ie&6)throw Error(F(331));var s=ie;for(ie|=4,$=t.current;$!==null;){var o=$,a=o.child;if($.flags&16){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var d=u[c];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Rs(8,p,o)}var y=p.child;if(y!==null)y.return=p,$=y;else for(;$!==null;){p=$;var _=p.sibling,k=p.return;if(V_(p),p===d){$=null;break}if(_!==null){_.return=k,$=_;break}$=k}}}var N=o.alternate;if(N!==null){var V=N.child;if(V!==null){N.child=null;do{var L=V.sibling;V.sibling=null,V=L}while(V!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rs(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,$=S;break e}$=o.return}}var w=t.current;for($=w;$!==null;){a=$;var R=a.child;if(a.subtreeFlags&2064&&R!==null)R.return=a,$=R;else e:for(a=w;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Cl(9,u)}}catch(j){Ie(u,u.return,j)}if(u===a){$=null;break e}var O=u.sibling;if(O!==null){O.return=u.return,$=O;break e}$=u.return}}if(ie=s,cr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(wl,t)}catch{}i=!0}return i}finally{ae=n,Rt.transition=e}}return!1}function gm(t,e,n){e=Ii(n,e),e=T_(t,e,1),t=Wn(t,e,1),e=it(),t!==null&&(uo(t,1,e),dt(t,e))}function Ie(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Kn===null||!Kn.has(i))){t=Ii(n,t),t=I_(e,t,1),e=Wn(e,t,1),t=it(),e!==null&&(uo(e,1,t),dt(e,t));break}}e=e.return}}function sI(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>Re()-ld?Ir(t,0):ad|=n),dt(t,e)}function $_(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=it();t=gn(t,e),t!==null&&(uo(t,e,n),dt(t,n))}function oI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$_(t,n)}function aI(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(F(314))}i!==null&&i.delete(e),$_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,GT(t,e,n);ut=!!(t.flags&131072)}else ut=!1,ge&&e.flags&1048576&&Gy(e,Ha,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;va(t,e),t=e.pendingProps;var s=vi(e,Ze.current);di(e,n),s=td(null,e,i,t,s,n);var o=nd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(i)?(o=!0,$a(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yh(e),s.updater=kl,e.stateNode=s,s._reactInternals=e,Mc(e,i,t,n),e=Uc(null,e,i,!0,o,n)):(e.tag=0,ge&&o&&$h(e),rt(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(va(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=uI(i),t=Dt(i,t),s){case 0:e=Fc(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=im(null,e,i,t,n);break e;case 14:e=sm(null,e,i,Dt(i.type,t),n);break e}throw Error(F(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Dt(i,s),Fc(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Dt(i,s),om(t,e,i,s,n);case 3:e:{if(k_(e),t===null)throw Error(F(387));i=e.pendingProps,o=e.memoizedState,s=o.element,e_(t,e),Ga(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Ii(Error(F(423)),e),e=am(t,e,i,n,s);break e}else if(i!==s){s=Ii(Error(F(424)),e),e=am(t,e,i,n,s);break e}else for(gt=Hn(e.stateNode.containerInfo.firstChild),yt=e,ge=!0,Ot=null,n=Jy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wi(),i===s){e=yn(t,e,n);break e}rt(t,e,i,n)}e=e.child}return e;case 5:return t_(e),t===null&&Vc(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,a=s.children,Cc(i,s)?a=null:o!==null&&Cc(i,o)&&(e.flags|=32),R_(t,e),rt(t,e,a,n),e.child;case 6:return t===null&&Vc(e),null;case 13:return C_(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ei(e,null,i,n):rt(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Dt(i,s),im(t,e,i,s,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,a=s.value,he(Wa,i._currentValue),i._currentValue=a,o!==null)if(Ft(o.value,a)){if(o.children===s.children&&!ct.current){e=yn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var c=u.firstContext;c!==null;){if(c.context===i){if(o.tag===1){c=dn(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Oc(o.return,n,e),u.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Oc(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,di(e,n),s=kt(s),i=i(s),e.flags|=1,rt(t,e,i,n),e.child;case 14:return i=e.type,s=Dt(i,e.pendingProps),s=Dt(i.type,s),sm(t,e,i,s,n);case 15:return S_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Dt(i,s),va(t,e),e.tag=1,ht(i)?(t=!0,$a(e)):t=!1,di(e,n),E_(e,i,s),Mc(e,i,s,n),Uc(null,e,i,!0,t,n);case 19:return P_(t,e,n);case 22:return A_(t,e,n)}throw Error(F(156,e.tag))};function H_(t,e){return _y(t,e)}function lI(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,i){return new lI(t,e,n,i)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uI(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xh)return 11;if(t===Dh)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,i,s,o){var a=2;if(i=t,typeof t=="function")dd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return Sr(n.children,s,o,e);case Nh:a=8,s|=8;break;case oc:return t=At(12,n,e,s|2),t.elementType=oc,t.lanes=o,t;case ac:return t=At(13,n,e,s),t.elementType=ac,t.lanes=o,t;case lc:return t=At(19,n,e,s),t.elementType=lc,t.lanes=o,t;case ty:return Nl(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zg:a=10;break e;case ey:a=9;break e;case xh:a=11;break e;case Dh:a=14;break e;case xn:a=16,i=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=At(a,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function Sr(t,e,n,i){return t=At(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=At(22,t,i,e),t.elementType=ty,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cI(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,i,s,o,a,u,c){return t=new cI(t,e,n,u,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=At(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(o),t}function hI(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W_(t){if(!t)return rr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ht(n))return Wy(t,n,e)}return e}function K_(t,e,n,i,s,o,a,u,c){return t=fd(n,i,!0,t,s,o,a,u,c),t.context=W_(null),n=t.current,i=it(),s=Gn(n),o=dn(i,s),o.callback=e??null,Wn(n,o,s),t.current.lanes=s,uo(t,s,i),dt(t,i),t}function xl(t,e,n,i){var s=e.current,o=it(),a=Gn(s);return n=W_(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wn(s,e,a),t!==null&&(bt(t,s,a,o),ga(t,s,a)),a}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ym(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){ym(t,e),(t=t.alternate)&&ym(t,e)}function dI(){return null}var G_=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}Dl.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));xl(t,e,null,null)};Dl.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){xl(null,t,null,null)}),e[mn]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ay();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&ky(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function fI(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=nl(a);o.call(d)}}var a=K_(e,i,t,0,null,!1,!1,"",_m);return t._reactRootContainer=a,t[mn]=a.current,Bs(t.nodeType===8?t.parentNode:t),xr(),a}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var d=nl(c);u.call(d)}}var c=fd(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=c,t[mn]=c.current,Bs(t.nodeType===8?t.parentNode:t),xr(function(){xl(e,c,n,i)}),c}function Ol(t,e,n,i,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var u=s;s=function(){var c=nl(a);u.call(c)}}xl(e,a,t,s)}else a=fI(n,e,t,s,i);return nl(a)}Iy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Lh(e,n|1),dt(e,Re()),!(ie&6)&&(Si=Re()+500,cr()))}break;case 13:xr(function(){var i=gn(t,1);if(i!==null){var s=it();bt(i,t,1,s)}}),pd(t,1)}};Mh=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=it();bt(e,t,134217728,n)}pd(t,134217728)}};Sy=function(t){if(t.tag===13){var e=Gn(t),n=gn(t,e);if(n!==null){var i=it();bt(n,t,e,i)}pd(t,e)}};Ay=function(){return ae};Ry=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};_c=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Sl(i);if(!s)throw Error(F(90));ry(i),hc(i,s)}}}break;case"textarea":sy(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};dy=ud;fy=xr;var pI={usingClientEntryPoint:!1,Events:[ho,ei,Sl,cy,hy,ud]},cs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mI={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gy(t),t===null?null:t.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||dI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{wl=sa.inject(mI),$t=sa}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(F(200));return hI(t,e,null,n)};wt.createRoot=function(t,e){if(!gd(t))throw Error(F(299));var n=!1,i="",s=G_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,i,s),t[mn]=e.current,Bs(t.nodeType===8?t.parentNode:t),new md(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=gy(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return xr(t)};wt.hydrate=function(t,e,n){if(!Vl(e))throw Error(F(200));return Ol(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(F(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",a=G_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=K_(e,null,t,1,n??null,s,!1,o,a),t[mn]=e.current,Bs(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Dl(e)};wt.render=function(t,e,n){if(!Vl(e))throw Error(F(200));return Ol(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(F(40));return t._reactRootContainer?(xr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};wt.unstable_batchedUpdates=ud;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ol(t,e,n,!1,i)};wt.version="18.3.1-next-f1338f8080-20240426";function Q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q_)}catch(t){console.error(t)}}Q_(),Qg.exports=wt;var gI=Qg.exports,vm=gI;ic.createRoot=vm.createRoot,ic.hydrateRoot=vm.hydrateRoot;var wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yI=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],u=t[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},X_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,u=a?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let _=(u&15)<<2|d>>6,k=d&63;c||(k=64,a||(_=64)),i.push(n[p],n[y],n[_],n[k])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new _I;const _=o<<2|u>>4;if(i.push(_),d!==64){const k=u<<4&240|d>>2;if(i.push(k),y!==64){const N=d<<6&192|y;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vI=function(t){const e=Y_(t);return X_.encodeByteArray(e,!0)},rl=function(t){return vI(t).replace(/\./g,"")},J_=function(t){try{return X_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=()=>wI().__FIREBASE_DEFAULTS__,TI=()=>{if(typeof process>"u"||typeof wm>"u")return;const t=wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},II=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&J_(t[1]);return e&&JSON.parse(e)},Ll=()=>{try{return EI()||TI()||II()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z_=t=>{var e,n;return(n=(e=Ll())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SI=t=>{const e=Z_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ev=()=>{var t;return(t=Ll())===null||t===void 0?void 0:t.config},tv=t=>{var e;return(e=Ll())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function CI(){var t;const e=(t=Ll())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="FirebaseError";class Sn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=MI,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?bI(o,i):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,u,i)}}function bI(t,e){return t.replace(FI,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const FI=/\{\$([^}]+)}/g;function UI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(Em(o)&&Em(a)){if(!il(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Em(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new zI(t,e);return n.subscribe.bind(n)}class zI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Wu),s.error===void 0&&(s.error=Wu),s.complete===void 0&&(s.complete=Wu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new AI;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(t){return t===_r?void 0:t}function HI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const KI={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},GI=te.INFO,QI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},YI=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=QI[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let Tm,Im;function JI(){return Tm||(Tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZI(){return Im||(Im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nv=new WeakMap,Xc=new WeakMap,rv=new WeakMap,Ku=new WeakMap,_d=new WeakMap;function eS(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Yn(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&nv.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function tS(t){if(Xc.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Xc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nS(t){Jc=t(Jc)}function rS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Gu(this),e,...n);return rv.set(i,e.sort?e.sort():[e]),Yn(i)}:ZI().includes(t)?function(...e){return t.apply(Gu(this),e),Yn(nv.get(this))}:function(...e){return Yn(t.apply(Gu(this),e))}}function iS(t){return typeof t=="function"?rS(t):(t instanceof IDBTransaction&&tS(t),XI(t,JI())?new Proxy(t,Jc):t)}function Yn(t){if(t instanceof IDBRequest)return eS(t);if(Ku.has(t))return Ku.get(t);const e=iS(t);return e!==t&&(Ku.set(t,e),_d.set(e,t)),e}const Gu=t=>_d.get(t);function sS(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),u=Yn(a);return i&&a.addEventListener("upgradeneeded",c=>{i(Yn(a.result),c.oldVersion,c.newVersion,Yn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const oS=["get","getKey","getAll","getAllKeys","count"],aS=["put","add","delete","clear"],Qu=new Map;function Sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qu.get(e))return Qu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=aS.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||oS.includes(n)))return;const o=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let d=c.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&c.done]))[0]};return Qu.set(e,o),o}nS(t=>({...t,get:(e,n,i)=>Sm(e,n)||t.get(e,n,i),has:(e,n)=>!!Sm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uS(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function uS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Am="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new yd("@firebase/app"),cS="@firebase/app-compat",hS="@firebase/analytics-compat",dS="@firebase/analytics",fS="@firebase/app-check-compat",pS="@firebase/app-check",mS="@firebase/auth",gS="@firebase/auth-compat",yS="@firebase/database",_S="@firebase/data-connect",vS="@firebase/database-compat",wS="@firebase/functions",ES="@firebase/functions-compat",TS="@firebase/installations",IS="@firebase/installations-compat",SS="@firebase/messaging",AS="@firebase/messaging-compat",RS="@firebase/performance",kS="@firebase/performance-compat",CS="@firebase/remote-config",PS="@firebase/remote-config-compat",NS="@firebase/storage",xS="@firebase/storage-compat",DS="@firebase/firestore",VS="@firebase/vertexai-preview",OS="@firebase/firestore-compat",LS="firebase",MS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",bS={[Zc]:"fire-core",[cS]:"fire-core-compat",[dS]:"fire-analytics",[hS]:"fire-analytics-compat",[pS]:"fire-app-check",[fS]:"fire-app-check-compat",[mS]:"fire-auth",[gS]:"fire-auth-compat",[yS]:"fire-rtdb",[_S]:"fire-data-connect",[vS]:"fire-rtdb-compat",[wS]:"fire-fn",[ES]:"fire-fn-compat",[TS]:"fire-iid",[IS]:"fire-iid-compat",[SS]:"fire-fcm",[AS]:"fire-fcm-compat",[RS]:"fire-perf",[kS]:"fire-perf-compat",[CS]:"fire-rc",[PS]:"fire-rc-compat",[NS]:"fire-gcs",[xS]:"fire-gcs-compat",[DS]:"fire-fst",[OS]:"fire-fst-compat",[VS]:"fire-vertex","fire-js":"fire-js",[LS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,FS=new Map,th=new Map;function Rm(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(th.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of sl.values())Rm(n,t);for(const n of FS.values())Rm(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new po("app","Firebase",US);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=MS;function iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});if(n||(n=ev()),!n)throw Xn.create("no-options");const o=sl.get(s);if(o){if(il(n,o.options)&&il(i,o.config))return o;throw Xn.create("duplicate-app",{appName:s})}const a=new WI(s);for(const c of th.values())a.addComponent(c);const u=new jS(n,i,a);return sl.set(s,u),u}function sv(t=eh){const e=sl.get(t);if(!e&&t===eh&&ev())return iv();if(!e)throw Xn.create("no-app",{appName:t});return e}function Jn(t,e,n){var i;let s=(i=bS[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${e}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(u.join(" "));return}Ai(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="firebase-heartbeat-database",BS=1,Xs="firebase-heartbeat-store";let Yu=null;function ov(){return Yu||(Yu=sS(zS,BS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),Yu}async function $S(t){try{const n=(await ov()).transaction(Xs),i=await n.objectStore(Xs).get(av(t));return await n.done,i}catch(e){if(e instanceof Sn)_n.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function km(t,e){try{const i=(await ov()).transaction(Xs,"readwrite");await i.objectStore(Xs).put(e,av(t)),await i.done}catch(n){if(n instanceof Sn)_n.warn(n.message);else{const i=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(i.message)}}}function av(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=1024,HS=30*24*60*60*1e3;class WS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GS(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Cm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=HS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){_n.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cm(),{heartbeatsToSend:i,unsentEntries:s}=KS(this._heartbeatsCache.heartbeats),o=rl(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return _n.warn(n),""}}}function Cm(){return new Date().toISOString().substring(0,10)}function KS(t,e=qS){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pm(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $S(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){Ai(new Dr("platform-logger",e=>new lS(e),"PRIVATE")),Ai(new Dr("heartbeat",e=>new WS(e),"PRIVATE")),Jn(Zc,Am,t),Jn(Zc,Am,"esm2017"),Jn("fire-js","")}QS("");var YS="firebase",XS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(YS,XS,"app");function wd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=lv,uv=new po("auth","Firebase",lv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new yd("@firebase/auth");function ZS(t,...e){ol.logLevel<=te.WARN&&ol.warn(`Auth (${Mi}): ${t}`,...e)}function Ia(t,...e){ol.logLevel<=te.ERROR&&ol.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw Ed(t,...e)}function Ht(t,...e){return Ed(t,...e)}function cv(t,e,n){const i=Object.assign(Object.assign({},JS()),{[e]:n});return new po("auth","Firebase",i).create(e,{appName:t.name})}function Zn(t){return cv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ed(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return uv.create(t,...e)}function K(t,e,...n){if(!t)throw Ed(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function wn(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eA(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eA()||NI()||"connection"in navigator)?navigator.onLine:!0}function nA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=kI()||xI()}get(){return tA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new go(3e4,6e4);function Ml(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bi(t,e,n,i,s={}){return dv(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const u=mo(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},o);return PI()||(d.referrerPolicy="no-referrer"),hv.fetch()(pv(t,t.config.apiHost,n,u),d)})}async function dv(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},rA),e);try{const s=new sA(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw oa(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw oa(t,"user-disabled",a);const p=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw cv(t,p,d);vn(t,p)}}catch(s){if(s instanceof Sn)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function fv(t,e,n,i,s={}){const o=await bi(t,e,n,i,s);return"mfaPendingCredential"in o&&vn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function pv(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Td(t.config,s):`${t.config.apiScheme}://${s}`}class sA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ht(this.auth,"network-request-failed")),iA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ht(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return bi(t,"POST","/v1/accounts:delete",e)}async function mv(t,e){return bi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aA(t,e=!1){const n=ft(t),i=await n.getIdToken(e),s=Id(i);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:Ps(Xu(s.auth_time)),issuedAtTime:Ps(Xu(s.iat)),expirationTime:Ps(Xu(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function Id(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=J_(n);return s?JSON.parse(s):(Ia("Failed to decode base64 JWT payload"),null)}catch(s){return Ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xm(t){const e=Id(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Sn&&lA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function lA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Js(t,mv(n,{idToken:i}));K(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?gv(o.providerUserInfo):[],u=hA(t.providerData,a),c=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),p=c?d:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new rh(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function cA(t){const e=ft(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function gv(t){return t.map(e=>{var{providerId:n}=e,i=wd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e){const n=await dv(t,{},async()=>{const i=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=pv(t,s,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",hv.fetch()(a,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fA(t,e){return bi(t,"POST","/v2/accounts:revokeToken",Ml(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=xm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await dA(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new pi;return i&&(K(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(K(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(K(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aA(this,e)}reload(){return cA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Js(this,oA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,u,c,d,p;const y=(i=n.displayName)!==null&&i!==void 0?i:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(u=n.tenantId)!==null&&u!==void 0?u:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:R,emailVerified:O,isAnonymous:j,providerData:U,stsTokenManager:E}=n;K(R&&E,e,"internal-error");const m=pi.fromJSON(this.name,E);K(typeof R=="string",e,"internal-error"),Nn(y,e.name),Nn(_,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof j=="boolean",e,"internal-error"),Nn(k,e.name),Nn(N,e.name),Nn(V,e.name),Nn(L,e.name),Nn(S,e.name),Nn(w,e.name);const v=new cn({uid:R,auth:e,email:_,emailVerified:O,displayName:y,isAnonymous:j,photoURL:N,phoneNumber:k,tenantId:V,stsTokenManager:m,createdAt:S,lastLoginAt:w});return U&&Array.isArray(U)&&(v.providerData=U.map(T=>Object.assign({},T))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,i=!1){const s=new pi;s.updateFromServerResponse(n);const o=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await al(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];K(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?gv(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),u=new pi;u.updateFromIdToken(i);const c=new cn({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new rh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;function hn(t){wn(t instanceof Function,"Expected a class definition");let e=Dm.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const Vm=yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Sa(this.userKey,s.apiKey,o),this.fullPersistenceKey=Sa("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new mi(hn(Vm),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||hn(Vm);const a=Sa(i,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(a);if(p){const y=cn._fromJSON(e,p);d!==o&&(u=y),o=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new mi(o,e,i):(o=c[0],u&&await o._set(a,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new mi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ev(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iv(e))return"Blackberry";if(Sv(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||wv(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function _v(t=et()){return/firefox\//i.test(t)}function vv(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wv(t=et()){return/crios\//i.test(t)}function Ev(t=et()){return/iemobile/i.test(t)}function Tv(t=et()){return/android/i.test(t)}function Iv(t=et()){return/blackberry/i.test(t)}function Sv(t=et()){return/webos/i.test(t)}function Sd(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pA(t=et()){var e;return Sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mA(){return DI()&&document.documentMode===10}function Av(t=et()){return Sd(t)||Tv(t)||Sv(t)||Iv(t)||/windows phone/i.test(t)||Ev(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=Om(et());break;case"Worker":n=`${Om(et())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,u)=>{try{const c=e(o);a(c)}catch(c){u(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e={}){return bi(t,"GET","/v2/passwordPolicy",Ml(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=6;class vA{constructor(e){var n,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:_A,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lm(this),this.idTokenSubscription=new Lm(this),this.beforeStateQueue=new gA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mv(this,{idToken:e}),i=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(s=c.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Zn(this));const n=e?ft(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yA(this),n=new vA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await fA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bl(t){return ft(t)}class Lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ad={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EA(t){Ad=t}function TA(t){return Ad.loadJS(t)}function IA(){return Ad.gapiScript}function SA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e){const n=vd(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(il(o,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function RA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function kA(t,e,n){const i=bl(t);K(i._canInitEmulator,i,"emulator-config-failed"),K(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=kv(e),{host:a,port:u}=CA(e),c=u===null?"":`:${u}`;i.config.emulator={url:`${o}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),PA()}function kv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CA(t){const e=kv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Mm(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:Mm(a)}}}function Mm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e){return fv(t,"POST","/v1/accounts:signInWithIdp",Ml(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="http://localhost";class Vr extends Cv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=wd(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Vr(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,gi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:NA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Pv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends yo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mn.credential(n,i)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends yo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends yo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Fn.credential(n,i)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return fv(t,"POST","/v1/accounts:signUp",Ml(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await cn._fromIdTokenResponse(e,i,s),a=bm(i);return new ir({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=bm(i);return new ir({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(t){var e;if(ln(t.app))return Promise.reject(Zn(t));const n=bl(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ir({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await xA(n,{returnSecureToken:!0}),s=await ir._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Sn{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ll(e,n,i,s)}}function Nv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,o,e,i):o})}async function VA(t,e,n=!1){const i=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ir._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e,n=!1){const{auth:i}=t;if(ln(i.app))return Promise.reject(Zn(i));const s="reauthenticate";try{const o=await Js(t,Nv(i,s,e,t),n);K(o.idToken,i,"internal-error");const a=Id(o.idToken);K(a,i,"internal-error");const{sub:u}=a;return K(t.uid===u,i,"user-mismatch"),ir._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e,n=!1){if(ln(t.app))return Promise.reject(Zn(t));const i="signIn",s=await Nv(t,i,e),o=await ir._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function MA(t,e,n,i){return ft(t).onIdTokenChanged(e,n,i)}function bA(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function FA(t,e,n,i){return ft(t).onAuthStateChanged(e,n,i)}const ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=1e3,jA=10;class Dv extends xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);mA()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},UA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dv.type="LOCAL";const zA=Dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv extends xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vv.type="SESSION";const Ov=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Fl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(a).map(async d=>d(n.origin,o)),c=await BA(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,c)=>{const d=Rd("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(_.data.response);break;default:clearTimeout(p),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function qA(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function HA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KA(){return Lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firebaseLocalStorageDb",GA=1,cl="firebaseLocalStorage",bv="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ul(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function QA(){const t=indexedDB.deleteDatabase(Mv);return new _o(t).toPromise()}function ih(){const t=indexedDB.open(Mv,GA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(cl,{keyPath:bv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(cl)?e(i):(i.close(),await QA(),e(await ih()))})})}async function Fm(t,e,n){const i=Ul(t,!0).put({[bv]:e,value:n});return new _o(i).toPromise()}async function YA(t,e){const n=Ul(t,!1).get(e),i=await new _o(n).toPromise();return i===void 0?null:i.value}function Um(t,e){const n=Ul(t,!0).delete(e);return new _o(n).toPromise()}const XA=800,JA=3;class Fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>JA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fl._getInstance(KA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HA(),!this.activeServiceWorker)return;this.sender=new $A(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await Fm(e,ul,"1"),await Um(e,ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>YA(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ul(s,!1).getAll();return new _o(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fv.type="LOCAL";const ZA=Fv;new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){return e?hn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Cv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t1(t){return LA(t.auth,new kd(t),t.bypassAuthState)}function n1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),OA(n,new kd(t),t.bypassAuthState)}async function r1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),VA(n,new kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:vn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new go(2e3,1e4);class ai extends Uv{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="pendingRedirect",Aa=new Map;class o1 extends Uv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const i=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(t,e){const n=c1(e),i=u1(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function l1(t,e){Aa.set(t._key(),e)}function u1(t){return hn(t._redirectPersistence)}function c1(t){return Sa(s1,t.config.apiKey,t.name)}async function h1(t,e,n=!1){if(ln(t.app))return Promise.reject(Zn(t));const i=bl(t),s=e1(i,e),a=await new o1(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=10*60*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!jv(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(t,e={}){return bi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function _1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m1(t);for(const n of e)try{if(v1(n))return}catch{}vn(t,"unauthorized-domain")}function v1(t){const e=nh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!y1.test(n))return!1;if(g1.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new go(3e4,6e4);function zm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E1(t){return new Promise((e,n)=>{var i,s,o;function a(){zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zm(),n(Ht(t,"network-request-failed"))},timeout:w1.get()})}if(!((s=(i=Wt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Wt().gapi)===null||o===void 0)&&o.load)a();else{const u=SA("iframefcb");return Wt()[u]=()=>{gapi.load?a():n(Ht(t,"network-request-failed"))},TA(`${IA()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function T1(t){return Ra=Ra||E1(t),Ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=new go(5e3,15e3),S1="__/auth/iframe",A1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Td(e,A1):`https://${t.config.authDomain}/${S1}`,i={apiKey:e.apiKey,appName:t.name,v:Mi},s=k1.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${mo(i).slice(1)}`}async function P1(t){const e=await T1(t),n=Wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:C1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=Ht(t,"network-request-failed"),u=Wt().setTimeout(()=>{o(a)},I1.get());function c(){Wt().clearTimeout(u),s(i)}i.ping(c).then(c,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,D1=600,V1="_blank",O1="http://localhost";class Bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(t,e,n,i=x1,s=D1){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const c=Object.assign(Object.assign({},N1),{width:i.toString(),height:s.toString(),top:o,left:a}),d=et().toLowerCase();n&&(u=wv(d)?V1:n),_v(d)&&(e=e||O1,c.scrollbars="yes");const p=Object.entries(c).reduce((_,[k,N])=>`${_}${k}=${N},`,"");if(pA(d)&&u!=="_self")return M1(e||"",u),new Bm(null);const y=window.open(e||"",u,p);K(y,t,"popup-blocked");try{y.focus()}catch{}return new Bm(y)}function M1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="__/auth/handler",F1="emulator/auth/handler",U1=encodeURIComponent("fac");async function $m(t,e,n,i,s,o){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Mi,eventId:s};if(e instanceof Pv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",UI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof yo){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const c=await t._getAppCheckToken(),d=c?`#${U1}=${encodeURIComponent(c)}`:"";return`${j1(t)}?${mo(u).slice(1)}${d}`}function j1({config:t}){return t.emulator?Td(t,F1):`https://${t.authDomain}/${b1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="webStorageSupport";class z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ov,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,n,i,s){var o;wn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await $m(e,n,i,nh(),s);return L1(e,a,Rd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await $m(e,n,i,nh(),s);return qA(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(wn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await P1(e),i=new f1(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ju];a!==void 0&&n(!!a),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Av()||vv()||Sd()}}const B1=z1;var qm="@firebase/auth",Hm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H1(t){Ai(new Dr("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=i.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},d=new wA(i,s,o,c);return RA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ai(new Dr("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(i=>new $1(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(qm,Hm,q1(t)),Jn(qm,Hm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=5*60,K1=tv("authIdTokenMaxAge")||W1;let Wm=null;const G1=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>K1)return;const s=n==null?void 0:n.token;Wm!==s&&(Wm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Q1(t=sv()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AA(t,{popupRedirectResolver:B1,persistence:[ZA,zA,Ov]}),i=tv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=G1(o.toString());bA(n,a,()=>a(n.currentUser)),MA(n,u=>a(u))}}const s=Z_("auth");return s&&kA(n,`http://${s}`),n}function Y1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}EA({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=Ht("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",Y1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H1("Browser");var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,zv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function v(){}v.prototype=m.prototype,E.D=m.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,A,C){for(var I=Array(arguments.length-2),at=2;at<arguments.length;at++)I[at-2]=arguments[at];return m.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=E.g[0],v=E.g[1],A=E.g[2];var C=E.g[3],I=m+(C^v&(A^C))+T[0]+3614090360&4294967295;m=v+(I<<7&4294967295|I>>>25),I=C+(A^m&(v^A))+T[1]+3905402710&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(v^C&(m^v))+T[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=v+(m^A&(C^m))+T[3]+3250441966&4294967295,v=A+(I<<22&4294967295|I>>>10),I=m+(C^v&(A^C))+T[4]+4118548399&4294967295,m=v+(I<<7&4294967295|I>>>25),I=C+(A^m&(v^A))+T[5]+1200080426&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(v^C&(m^v))+T[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=v+(m^A&(C^m))+T[7]+4249261313&4294967295,v=A+(I<<22&4294967295|I>>>10),I=m+(C^v&(A^C))+T[8]+1770035416&4294967295,m=v+(I<<7&4294967295|I>>>25),I=C+(A^m&(v^A))+T[9]+2336552879&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(v^C&(m^v))+T[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=v+(m^A&(C^m))+T[11]+2304563134&4294967295,v=A+(I<<22&4294967295|I>>>10),I=m+(C^v&(A^C))+T[12]+1804603682&4294967295,m=v+(I<<7&4294967295|I>>>25),I=C+(A^m&(v^A))+T[13]+4254626195&4294967295,C=m+(I<<12&4294967295|I>>>20),I=A+(v^C&(m^v))+T[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=v+(m^A&(C^m))+T[15]+1236535329&4294967295,v=A+(I<<22&4294967295|I>>>10),I=m+(A^C&(v^A))+T[1]+4129170786&4294967295,m=v+(I<<5&4294967295|I>>>27),I=C+(v^A&(m^v))+T[6]+3225465664&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^v&(C^m))+T[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=v+(C^m&(A^C))+T[0]+3921069994&4294967295,v=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(v^A))+T[5]+3593408605&4294967295,m=v+(I<<5&4294967295|I>>>27),I=C+(v^A&(m^v))+T[10]+38016083&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^v&(C^m))+T[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=v+(C^m&(A^C))+T[4]+3889429448&4294967295,v=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(v^A))+T[9]+568446438&4294967295,m=v+(I<<5&4294967295|I>>>27),I=C+(v^A&(m^v))+T[14]+3275163606&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^v&(C^m))+T[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=v+(C^m&(A^C))+T[8]+1163531501&4294967295,v=A+(I<<20&4294967295|I>>>12),I=m+(A^C&(v^A))+T[13]+2850285829&4294967295,m=v+(I<<5&4294967295|I>>>27),I=C+(v^A&(m^v))+T[2]+4243563512&4294967295,C=m+(I<<9&4294967295|I>>>23),I=A+(m^v&(C^m))+T[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=v+(C^m&(A^C))+T[12]+2368359562&4294967295,v=A+(I<<20&4294967295|I>>>12),I=m+(v^A^C)+T[5]+4294588738&4294967295,m=v+(I<<4&4294967295|I>>>28),I=C+(m^v^A)+T[8]+2272392833&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^v)+T[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=v+(A^C^m)+T[14]+4259657740&4294967295,v=A+(I<<23&4294967295|I>>>9),I=m+(v^A^C)+T[1]+2763975236&4294967295,m=v+(I<<4&4294967295|I>>>28),I=C+(m^v^A)+T[4]+1272893353&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^v)+T[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=v+(A^C^m)+T[10]+3200236656&4294967295,v=A+(I<<23&4294967295|I>>>9),I=m+(v^A^C)+T[13]+681279174&4294967295,m=v+(I<<4&4294967295|I>>>28),I=C+(m^v^A)+T[0]+3936430074&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^v)+T[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=v+(A^C^m)+T[6]+76029189&4294967295,v=A+(I<<23&4294967295|I>>>9),I=m+(v^A^C)+T[9]+3654602809&4294967295,m=v+(I<<4&4294967295|I>>>28),I=C+(m^v^A)+T[12]+3873151461&4294967295,C=m+(I<<11&4294967295|I>>>21),I=A+(C^m^v)+T[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=v+(A^C^m)+T[2]+3299628645&4294967295,v=A+(I<<23&4294967295|I>>>9),I=m+(A^(v|~C))+T[0]+4096336452&4294967295,m=v+(I<<6&4294967295|I>>>26),I=C+(v^(m|~A))+T[7]+1126891415&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~v))+T[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=v+(C^(A|~m))+T[5]+4237533241&4294967295,v=A+(I<<21&4294967295|I>>>11),I=m+(A^(v|~C))+T[12]+1700485571&4294967295,m=v+(I<<6&4294967295|I>>>26),I=C+(v^(m|~A))+T[3]+2399980690&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~v))+T[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=v+(C^(A|~m))+T[1]+2240044497&4294967295,v=A+(I<<21&4294967295|I>>>11),I=m+(A^(v|~C))+T[8]+1873313359&4294967295,m=v+(I<<6&4294967295|I>>>26),I=C+(v^(m|~A))+T[15]+4264355552&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~v))+T[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=v+(C^(A|~m))+T[13]+1309151649&4294967295,v=A+(I<<21&4294967295|I>>>11),I=m+(A^(v|~C))+T[4]+4149444226&4294967295,m=v+(I<<6&4294967295|I>>>26),I=C+(v^(m|~A))+T[11]+3174756917&4294967295,C=m+(I<<10&4294967295|I>>>22),I=A+(m^(C|~v))+T[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=v+(C^(A|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+C&4294967295}i.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var v=m-this.blockSize,T=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=v;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<m;)if(T[A++]=E.charCodeAt(C++),A==this.blockSize){s(this,T),A=0;break}}else for(;C<m;)if(T[A++]=E[C++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var v=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=v&255,v/=256;for(this.u(E),E=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)E[v++]=this.g[m]>>>T&255;return E};function o(E,m){var v=u;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=m(E)}function a(E,m){this.h=m;for(var v=[],T=!0,A=E.length-1;0<=A;A--){var C=E[A]|0;T&&C==m||(v[A]=C,T=!1)}this.g=v}var u={};function c(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return L(d(-E));for(var m=[],v=1,T=0;E>=v;T++)m[T]=E/v|0,v*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return L(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),T=y,A=0;A<E.length;A+=8){var C=Math.min(8,E.length-A),I=parseInt(E.substring(A,A+C),m);8>C?(C=d(Math.pow(m,C)),T=T.j(C).add(d(I))):(T=T.j(v),T=T.add(d(I)))}return T}var y=c(0),_=c(1),k=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-L(this).m();for(var E=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*m,m*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(V(this))return"-"+L(this).toString(E);for(var m=d(Math.pow(E,6)),v=this,T="";;){var A=O(v,m).g;v=S(v,A.j(m));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=A,N(v))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function V(E){return E.h==-1}t.l=function(E){return E=S(this,E),V(E)?-1:N(E)?0:1};function L(E){for(var m=E.g.length,v=[],T=0;T<m;T++)v[T]=~E.g[T];return new a(v,~E.h).add(_)}t.abs=function(){return V(this)?L(this):this},t.add=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],T=0,A=0;A<=m;A++){var C=T+(this.i(A)&65535)+(E.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=I>>>16,C&=65535,I&=65535,v[A]=I<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function S(E,m){return E.add(L(m))}t.j=function(E){if(N(this)||N(E))return y;if(V(this))return V(E)?L(this).j(L(E)):L(L(this).j(E));if(V(E))return L(this.j(L(E)));if(0>this.l(k)&&0>E.l(k))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var C=this.i(T)>>>16,I=this.i(T)&65535,at=E.i(A)>>>16,Pt=E.i(A)&65535;v[2*T+2*A]+=I*Pt,w(v,2*T+2*A),v[2*T+2*A+1]+=C*Pt,w(v,2*T+2*A+1),v[2*T+2*A+1]+=I*at,w(v,2*T+2*A+1),v[2*T+2*A+2]+=C*at,w(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function w(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function R(E,m){this.g=E,this.h=m}function O(E,m){if(N(m))throw Error("division by zero");if(N(E))return new R(y,y);if(V(E))return m=O(L(E),m),new R(L(m.g),L(m.h));if(V(m))return m=O(E,L(m)),new R(L(m.g),m.h);if(30<E.g.length){if(V(E)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var v=_,T=m;0>=T.l(E);)v=j(v),T=j(T);var A=U(v,1),C=U(T,1);for(T=U(T,2),v=U(v,2);!N(T);){var I=C.add(T);0>=I.l(E)&&(A=A.add(v),C=I),T=U(T,1),v=U(v,1)}return m=S(E,A.j(m)),new R(A,m)}for(A=y;0<=E.l(m);){for(v=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=d(v),I=C.j(m);V(I)||0<I.l(E);)v-=T,C=d(v),I=C.j(m);N(C)&&(C=_),A=A.add(C),E=S(E,I)}return new R(A,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},t.or=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},t.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function j(E){for(var m=E.g.length+1,v=[],T=0;T<m;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function U(E,m){var v=m>>5;m%=32;for(var T=E.g.length-v,A=[],C=0;C<T;C++)A[C]=0<m?E.i(C+v)>>>m|E.i(C+v+1)<<32-m:E.i(C+v);return new a(A,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,zv=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ar=a}).apply(typeof Km<"u"?Km:typeof self<"u"?self:typeof window<"u"?window:{});var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,gs,$v,ka,sh,qv,Hv,Wv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof aa=="object"&&aa];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function s(l,h){if(h)e:{var f=i;l=l.split(".");for(var g=0;g<l.length-1;g++){var P=l[g];if(!(P in f))break e;f=f[P]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function o(l,h){l instanceof String&&(l+="");var f=0,g=!1,P={next:function(){if(!g&&f<l.length){var D=f++;return{value:h(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(l){return l||function(){return o(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function d(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function p(l,h,f){return l.call.apply(l.bind,arguments)}function y(l,h,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),l.apply(h,P)}}return function(){return l.apply(h,arguments)}}function _(l,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,_.apply(null,arguments)}function k(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function N(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,P,D){for(var z=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)z[ce-2]=arguments[ce];return h.prototype[P].apply(g,z)}}function V(l){const h=l.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function L(l,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const P=l.length||0,D=g.length||0;l.length=P+D;for(let z=0;z<D;z++)l[P+z]=g[z]}else l.push(g)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=u.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var j=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function U(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function E(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function m(l){const h={};for(const f in l)h[f]=l[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)l[f]=g[f];for(let D=0;D<v.length;D++)f=v[D],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function A(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function C(l){u.setTimeout(()=>{throw l},0)}function I(){var l=Q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class at{constructor(){this.h=this.g=null}add(h,f){const g=Pt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Pt=new S(()=>new $i,l=>l.reset());class $i{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,B=!1,Q=new at,J=()=>{const l=u.Promise.resolve(void 0);Yt=()=>{l.then(ye)}};var ye=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(f){C(f)}var h=Pt;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};u.addEventListener("test",f,h),u.removeEventListener("test",f,h)}catch{}return l}();function Jt(l,h){if(Se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{O(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Zt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Jt.aa.h.call(this)}}N(Jt,Se);var Zt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),dw=0;function fw(l,h,f,g,P){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++dw,this.da=this.fa=!1}function Ao(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ro(l){this.src=l,this.g={},this.h=0}Ro.prototype.add=function(l,h,f,g,P){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var z=Jl(l,h,g,P);return-1<z?(h=l[z],f||(h.fa=!1)):(h=new fw(h,this.src,D,!!g,P),h.fa=f,l.push(h)),h};function Xl(l,h){var f=h.type;if(f in l.g){var g=l.g[f],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Ao(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Jl(l,h,f,g){for(var P=0;P<l.length;++P){var D=l[P];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return P}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),eu={};function df(l,h,f,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)df(l,h[D],f,g,P);return null}return f=mf(f),l&&l[en]?l.K(h,f,d(g)?!!g.capture:!1,P):pw(l,h,f,!1,g,P)}function pw(l,h,f,g,P,D){if(!h)throw Error("Invalid event type");var z=d(P)?!!P.capture:!!P,ce=nu(l);if(ce||(l[Zl]=ce=new Ro(l)),f=ce.add(h,f,g,z,D),f.proxy)return f;if(g=mw(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)Xt||(P=z),P===void 0&&(P=!1),l.addEventListener(h.toString(),g,P);else if(l.attachEvent)l.attachEvent(pf(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function mw(){function l(f){return h.call(l.src,l.listener,f)}const h=gw;return l}function ff(l,h,f,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)ff(l,h[D],f,g,P);else g=d(g)?!!g.capture:!!g,f=mf(f),l&&l[en]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],f=Jl(D,f,g,P),-1<f&&(Ao(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=nu(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Jl(h,f,g,P)),(f=-1<l?h[l]:null)&&tu(f))}function tu(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[en])Xl(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(pf(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=nu(h))?(Xl(f,l),f.h==0&&(f.src=null,h[Zl]=null)):Ao(l)}}}function pf(l){return l in eu?eu[l]:eu[l]="on"+l}function gw(l,h){if(l.da)l=!0;else{h=new Jt(h,this);var f=l.listener,g=l.ha||l.src;l.fa&&tu(l),l=f.call(g,h)}return l}function nu(l){return l=l[Zl],l instanceof Ro?l:null}var ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function mf(l){return typeof l=="function"?l:(l[ru]||(l[ru]=function(h){return l.handleEvent(h)}),l[ru])}function qe(){ue.call(this),this.i=new Ro(this),this.M=this,this.F=null}N(qe,ue),qe.prototype[en]=!0,qe.prototype.removeEventListener=function(l,h,f,g){ff(this,l,h,f,g)};function tt(l,h){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new Se(h,l);else if(h instanceof Se)h.target=h.target||l;else{var P=h;h=new Se(g,l),T(h,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];P=ko(z,g,!0,h)&&P}if(z=h.g=l,P=ko(z,g,!0,h)&&P,P=ko(z,g,!1,h)&&P,f)for(D=0;D<f.length;D++)z=h.g=f[D],P=ko(z,g,!1,h)&&P}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],g=0;g<f.length;g++)Ao(f[g]);delete l.g[h],l.h--}}this.F=null},qe.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},qe.prototype.L=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function ko(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var ce=z.listener,Me=z.ha||z.src;z.fa&&Xl(l.i,z),P=ce.call(Me,g)!==!1&&P}}return P&&!g.defaultPrevented}function gf(l,h,f){if(typeof l=="function")f&&(l=_(l,f));else if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(l,h||0)}function yf(l){l.g=gf(()=>{l.g=null,l.i&&(l.i=!1,yf(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class yw extends ue{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yf(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(l){ue.call(this),this.h=l,this.g={}}N(qi,ue);var _f=[];function vf(l){U(l.g,function(h,f){this.g.hasOwnProperty(f)&&tu(h)},l),l.g={}}qi.prototype.N=function(){qi.aa.N.call(this),vf(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var iu=u.JSON.stringify,_w=u.JSON.parse,vw=class{stringify(l){return u.JSON.stringify(l,void 0)}parse(l){return u.JSON.parse(l,void 0)}};function su(){}su.prototype.h=null;function wf(l){return l.h||(l.h=l.i())}function Ef(){}var Hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ou(){Se.call(this,"d")}N(ou,Se);function au(){Se.call(this,"c")}N(au,Se);var dr={},Tf=null;function Co(){return Tf=Tf||new qe}dr.La="serverreachability";function If(l){Se.call(this,dr.La,l)}N(If,Se);function Wi(l){const h=Co();tt(h,new If(h))}dr.STAT_EVENT="statevent";function Sf(l,h){Se.call(this,dr.STAT_EVENT,l),this.stat=h}N(Sf,Se);function nt(l){const h=Co();tt(h,new Sf(h,l))}dr.Ma="timingevent";function Af(l,h){Se.call(this,dr.Ma,l),this.size=h}N(Af,Se);function Ki(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){l()},h)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function ww(l,h,f,g,P,D){l.info(function(){if(l.g)if(D)for(var z="",ce=D.split("&"),Me=0;Me<ce.length;Me++){var se=ce[Me].split("=");if(1<se.length){var He=se[0];se=se[1];var We=He.split("_");z=2<=We.length&&We[1]=="type"?z+(He+"="+se+"&"):z+(He+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+z})}function Ew(l,h,f,g,P,D,z){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+D+" "+z})}function zr(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Iw(l,f)+(g?" "+g:"")})}function Tw(l,h){l.info(function(){return"TIMEOUT: "+h})}Gi.prototype.info=function(){};function Iw(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return iu(f)}catch{return h}}var Po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lu;function No(){}N(No,su),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},lu=new No;function Rn(l,h,f,g){this.j=l,this.i=h,this.l=f,this.R=g||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var Cf={},uu={};function cu(l,h,f){l.L=1,l.v=Oo(tn(h)),l.m=f,l.P=!0,Pf(l,null)}function Pf(l,h){l.F=Date.now(),xo(l),l.A=tn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),$f(f.i,"t",g),l.C=0,f=l.j.J,l.h=new kf,l.g=ap(l.j,f?h:null,!l.m),0<l.O&&(l.M=new yw(_(l.Y,l,l.g),l.O)),h=l.U,f=l.g,g=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(_f[0]=P.toString()),P=_f);for(var D=0;D<P.length;D++){var z=df(f,P[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?m(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Wi(),ww(l.i,l.u,l.A,l.l,l.R,l.m)}Rn.prototype.ca=function(l){l=l.target;const h=this.M;h&&nn(l)==3?h.j():this.Y(l)},Rn.prototype.Y=function(l){try{if(l==this.g)e:{const We=nn(this.g);var h=this.g.Ba();const qr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Yf(this.g)))){this.J||We!=4||h==7||(h==8||0>=qr?Wi(3):Wi(2)),hu(this);var f=this.g.Z();this.X=f;t:if(Nf(this)){var g=Yf(this.g);l="";var P=g.length,D=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Qi(this);var z="";break t}this.h.i=new u.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Ew(this.i,this.u,this.A,this.l,this.R,We,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Me=this.g;if((ce=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ce)){var se=ce;break t}}se=null}if(f=se)zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,du(this,f);else{this.o=!1,this.s=3,nt(12),fr(this),Qi(this);break e}}if(this.P){f=!0;let Nt;for(;!this.J&&this.C<z.length;)if(Nt=Sw(this,z),Nt==uu){We==4&&(this.s=4,nt(14),f=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Cf){this.s=4,nt(15),zr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else zr(this.i,this.l,Nt,null),du(this,Nt);if(Nf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||z.length!=0||this.h.h||(this.s=1,nt(16),f=!1),this.o=this.o&&f,!f)zr(this.i,this.l,z,"[Invalid Chunked Response]"),fr(this),Qi(this);else if(0<z.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),_u(He),He.M=!0,nt(11))}}else zr(this.i,this.l,z,null),du(this,z);We==4&&fr(this),this.o&&!this.J&&(We==4?rp(this.j,this):(this.o=!1,xo(this)))}else zw(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),fr(this),Qi(this)}}}catch{}finally{}};function Nf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Sw(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?uu:(f=Number(h.substring(f,g)),isNaN(f)?Cf:(g+=1,g+f>h.length?uu:(h=h.slice(g,g+f),l.C=g+f,h)))}Rn.prototype.cancel=function(){this.J=!0,fr(this)};function xo(l){l.S=Date.now()+l.I,xf(l,l.I)}function xf(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ki(_(l.ba,l),h)}function hu(l){l.B&&(u.clearTimeout(l.B),l.B=null)}Rn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Tw(this.i,this.A),this.L!=2&&(Wi(),nt(17)),fr(this),this.s=2,Qi(this)):xf(this,this.S-l)};function Qi(l){l.j.G==0||l.J||rp(l.j,l)}function fr(l){hu(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,vf(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function du(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||fu(f.h,l))){if(!l.K&&fu(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)jo(f),Fo(f);else break e;yu(f),nt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ki(_(f.Za,f),6e3));if(1>=Of(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else mr(f,11)}else if((l.K||f.g==l)&&jo(f),!w(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let se=P[h];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const He=se[3];He!=null&&(f.la=He,f.j.info("VER="+f.la));const We=se[4];We!=null&&(f.Aa=We,f.j.info("SVER="+f.Aa));const qr=se[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Nt=l.g;if(Nt){const Bo=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var D=g.h;D.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(pu(D,D.h),D.h=null))}if(g.D){const vu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;vu&&(g.ya=vu,de(g.I,g.D,vu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=l;if(g.qa=op(g,g.J?g.ia:null,g.W),z.K){Lf(g.h,z);var ce=z,Me=g.L;Me&&(ce.I=Me),ce.B&&(hu(ce),xo(ce)),g.g=z}else tp(g);0<f.i.length&&Uo(f)}else se[0]!="stop"&&se[0]!="close"||mr(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?mr(f,7):gu(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}Wi(4)}catch{}}var Aw=class{constructor(l,h){this.g=l,this.map=h}};function Df(l){this.l=l||10,u.PerformanceNavigationTiming?(l=u.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Of(l){return l.h?1:l.g?l.g.size:0}function fu(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function pu(l,h){l.g?l.g.add(h):l.h=h}function Lf(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Df.prototype.cancel=function(){if(this.i=Mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Mf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return V(l.i)}function Rw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],f=l.length,g=0;g<f;g++)h.push(l[g]);return h}h=[],f=0;for(g in l)h[f++]=l[g];return h}function kw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const g in l)h[f++]=g;return h}}}function bf(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=kw(l),g=Rw(l),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],f&&f[D],l)}var Ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cw(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),P=null;if(0<=g){var D=l[f].substring(0,g);P=l[f].substring(g+1)}else D=l[f];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function pr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof pr){this.h=l.h,Do(this,l.j),this.o=l.o,this.g=l.g,Vo(this,l.s),this.l=l.l;var h=l.i,f=new Ji;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Uf(this,f),this.m=l.m}else l&&(h=String(l).match(Ff))?(this.h=!1,Do(this,h[1]||"",!0),this.o=Yi(h[2]||""),this.g=Yi(h[3]||"",!0),Vo(this,h[4]),this.l=Yi(h[5]||"",!0),Uf(this,h[6]||"",!0),this.m=Yi(h[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}pr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Xi(h,jf,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Xi(h,jf,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(Xi(f,f.charAt(0)=="/"?xw:Nw,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",Xi(f,Vw)),l.join("")};function tn(l){return new pr(l)}function Do(l,h,f){l.j=f?Yi(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Vo(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Uf(l,h,f){h instanceof Ji?(l.i=h,Ow(l.i,l.h)):(f||(h=Xi(h,Dw)),l.i=new Ji(h,l.h))}function de(l,h,f){l.i.set(h,f)}function Oo(l){return de(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yi(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xi(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,Pw),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Pw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var jf=/[#\/\?@]/g,Nw=/[#\?:]/g,xw=/[#\?]/g,Dw=/[#\?@]/g,Vw=/#/g;function Ji(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function kn(l){l.g||(l.g=new Map,l.h=0,l.i&&Cw(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ji.prototype,t.add=function(l,h){kn(this),this.i=null,l=Br(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function zf(l,h){kn(l),h=Br(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Bf(l,h){return kn(l),h=Br(l,h),l.g.has(h)}t.forEach=function(l,h){kn(this),this.g.forEach(function(f,g){f.forEach(function(P){l.call(h,P,g,this)},this)},this)},t.na=function(){kn(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=l[g];for(let D=0;D<P.length;D++)f.push(h[g])}return f},t.V=function(l){kn(this);let h=[];if(typeof l=="string")Bf(this,l)&&(h=h.concat(this.g.get(Br(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},t.set=function(l,h){return kn(this),this.i=null,l=Br(this,l),Bf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function $f(l,h,f){zf(l,h),0<f.length&&(l.i=null,l.g.set(Br(l,h),V(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),l.push(P)}}return this.i=l.join("&")};function Br(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Ow(l,h){h&&!l.j&&(kn(l),l.i=null,l.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(zf(this,g),$f(this,P,f))},l)),l.j=h}function Lw(l,h){const f=new Gi;if(u.Image){const g=new Image;g.onload=k(Cn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=k(Cn,f,"TestLoadImage: error",!1,h,g),g.onabort=k(Cn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=k(Cn,f,"TestLoadImage: timeout",!1,h,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function Mw(l,h){const f=new Gi,g=new AbortController,P=setTimeout(()=>{g.abort(),Cn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Cn(f,"TestPingServer: ok",!0,h):Cn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Cn(f,"TestPingServer: error",!1,h)})}function Cn(l,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function bw(){this.g=new vw}function Fw(l,h,f){const g=f||"";try{bf(l,function(P,D){let z=P;d(P)&&(z=iu(P)),h.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Lo(l){this.l=l.Ub||null,this.j=l.eb||!1}N(Lo,su),Lo.prototype.g=function(){return new Mo(this.l,this.j)},Lo.prototype.i=function(l){return function(){return l}}({});function Mo(l,h){qe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Mo,qe),t=Mo.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,es(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function qf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Zi(this):es(this),this.readyState==3&&qf(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zi(this))},t.Qa=function(l){this.g&&(this.response=l,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,es(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function es(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Hf(l){let h="";return U(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function mu(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Hf(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):de(l,h,f))}function Te(l){qe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Te,qe);var Uw=/^https?$/i,jw=["POST","PUT"];t=Te.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lu.g(),this.v=this.o?wf(this.o):wf(lu),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){Wf(this,D);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=u.FormData&&l instanceof u.FormData,!(0<=Array.prototype.indexOf.call(jw,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qf(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Wf(this,D)}};function Wf(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Kf(l),bo(l)}function Kf(l){l.A||(l.A=!0,tt(l,"complete"),tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,tt(this,"complete"),tt(this,"abort"),bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bo(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gf(this):this.bb())},t.bb=function(){Gf(this)};function Gf(l){if(l.h&&typeof a<"u"&&(!l.v[1]||nn(l)!=4||l.Z()!=2)){if(l.u&&nn(l)==4)gf(l.Ea,0,l);else if(tt(l,"readystatechange"),nn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var P=String(l.D).match(Ff)[1]||null;!P&&u.self&&u.self.location&&(P=u.self.location.protocol.slice(0,-1)),g=!Uw.test(P?P.toLowerCase():"")}f=g}if(f)tt(l,"complete"),tt(l,"success");else{l.m=6;try{var D=2<nn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",Kf(l)}}finally{bo(l)}}}}function bo(l,h){if(l.g){Qf(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||tt(l,"ready");try{f.onreadystatechange=g}catch{}}}function Qf(l){l.I&&(u.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function nn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),_w(h)}};function Yf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function zw(l){const h={};l=(l.g&&2<=nn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(w(l[g]))continue;var f=A(l[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[P]||[];h[P]=D,D.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Xf(l){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ts("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ts("baseRetryDelayMs",5e3,l),this.cb=ts("retryDelaySeedMs",1e4,l),this.Wa=ts("forwardChannelMaxRetries",2,l),this.wa=ts("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Df(l&&l.concurrentRequestLimit),this.Da=new bw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xf.prototype,t.la=8,t.G=1,t.connect=function(l,h,f,g){nt(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=op(this,null,this.W),Uo(this)};function gu(l){if(Jf(l),l.G==3){var h=l.U++,f=tn(l.I);if(de(f,"SID",l.K),de(f,"RID",h),de(f,"TYPE","terminate"),ns(l,f),h=new Rn(l,l.j,h),h.L=2,h.v=Oo(tn(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=h.v,f=!0),f||(h.g=ap(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xo(h)}sp(l)}function Fo(l){l.g&&(_u(l),l.g.cancel(),l.g=null)}function Jf(l){Fo(l),l.u&&(u.clearTimeout(l.u),l.u=null),jo(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&u.clearTimeout(l.s),l.s=null)}function Uo(l){if(!Vf(l.h)&&!l.s){l.s=!0;var h=l.Ga;Yt||J(),B||(Yt(),B=!0),Q.add(h,l),l.B=0}}function Bw(l,h){return Of(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ki(_(l.Ga,l,h),ip(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new Rn(this,this.j,l);let D=this.o;if(this.S&&(D?(D=m(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ep(this,P,h),f=tn(this.I),de(f,"RID",l),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),ns(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Hf(D)))+"&"+h:this.m&&mu(f,this.m,D)),pu(this.h,P),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",h),de(f,"SID","null"),P.T=!0,cu(P,f,null)):cu(P,f,h),this.G=2}}else this.G==3&&(l?Zf(this,l):this.i.length==0||Vf(this.h)||Zf(this))};function Zf(l,h){var f;h?f=h.l:f=l.U++;const g=tn(l.I);de(g,"SID",l.K),de(g,"RID",f),de(g,"AID",l.T),ns(l,g),l.m&&l.o&&mu(g,l.m,l.o),f=new Rn(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=ep(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),pu(l.h,f),cu(f,g,h)}function ns(l,h){l.H&&U(l.H,function(f,g){de(h,g,f)}),l.l&&bf({},function(f,g){de(h,g,f)})}function ep(l,h,f){f=Math.min(l.i.length,f);var g=l.l?_(l.l.Na,l.l,l):null;e:{var P=l.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ce=!0;for(let Me=0;Me<f;Me++){let se=P[Me].g;const He=P[Me].map;if(se-=D,0>se)D=Math.max(0,P[Me].g-100),ce=!1;else try{Fw(He,z,"req"+se+"_")}catch{g&&g(He)}}if(ce){g=z.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,g}function tp(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Yt||J(),B||(Yt(),B=!0),Q.add(h,l),l.v=0}}function yu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ki(_(l.Fa,l),ip(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,np(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ki(_(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Fo(this),np(this))};function _u(l){l.A!=null&&(u.clearTimeout(l.A),l.A=null)}function np(l){l.g=new Rn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=tn(l.qa);de(h,"RID","rpc"),de(h,"SID",l.K),de(h,"AID",l.T),de(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&de(h,"TO",l.ja),de(h,"TYPE","xmlhttp"),ns(l,h),l.m&&l.o&&mu(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Oo(tn(h)),f.m=null,f.P=!0,Pf(f,l)}t.Za=function(){this.C!=null&&(this.C=null,Fo(this),yu(this),nt(19))};function jo(l){l.C!=null&&(u.clearTimeout(l.C),l.C=null)}function rp(l,h){var f=null;if(l.g==h){jo(l),_u(l),l.g=null;var g=2}else if(fu(l.h,h))f=h.D,Lf(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=l.B;g=Co(),tt(g,new Af(g,f)),Uo(l)}else tp(l);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&Bw(l,h)||g==2&&yu(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),P){case 1:mr(l,5);break;case 4:mr(l,10);break;case 3:mr(l,6);break;default:mr(l,2)}}}function ip(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function mr(l,h){if(l.j.info("Error code "+h),h==2){var f=_(l.fb,l),g=l.Xa;const P=!g;g=new pr(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Do(g,"https"),Oo(g),P?Lw(g.toString(),f):Mw(g.toString(),f)}else nt(2);l.G=0,l.l&&l.l.sa(h),sp(l),Jf(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function sp(l){if(l.G=0,l.ka=[],l.l){const h=Mf(l.h);(h.length!=0||l.i.length!=0)&&(L(l.ka,h),L(l.ka,l.i),l.h.i.length=0,V(l.i),l.i.length=0),l.l.ra()}}function op(l,h,f){var g=f instanceof pr?tn(f):new pr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Vo(g,g.s);else{var P=u.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new pr(null);g&&Do(D,g),h&&(D.g=h),P&&Vo(D,P),f&&(D.l=f),g=D}return f=l.D,h=l.ya,f&&h&&de(g,f,h),de(g,"VER",l.la),ns(l,g),g}function ap(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Te(new Lo({eb:f})):new Te(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lp(){}t=lp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zo(){}zo.prototype.g=function(l,h){return new pt(l,h)};function pt(l,h){qe.call(this),this.g=new Xf(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new $r(this)}N(pt,qe),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){gu(this.g)},pt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=iu(l),l=f);h.i.push(new Aw(h.Ya++,l)),h.G==3&&Uo(h)},pt.prototype.N=function(){this.g.l=null,delete this.j,gu(this.g),delete this.g,pt.aa.N.call(this)};function up(l){ou.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}N(up,ou);function cp(){au.call(this),this.status=1}N(cp,au);function $r(l){this.g=l}N($r,lp),$r.prototype.ua=function(){tt(this.g,"a")},$r.prototype.ta=function(l){tt(this.g,new up(l))},$r.prototype.sa=function(l){tt(this.g,new cp)},$r.prototype.ra=function(){tt(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Wv=function(){return new zo},Hv=function(){return Co()},qv=dr,sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Po.NO_ERROR=0,Po.TIMEOUT=8,Po.HTTP_ERROR=6,ka=Po,Rf.COMPLETE="complete",$v=Rf,Ef.EventType=Hi,Hi.OPEN="a",Hi.CLOSE="b",Hi.ERROR="c",Hi.MESSAGE="d",qe.prototype.listen=qe.prototype.K,gs=Ef,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,Bv=Te}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});const Gm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new yd("@firebase/firestore");function hs(){return Or.logLevel}function H(t,...e){if(Or.logLevel<=te.DEBUG){const n=e.map(Cd);Or.debug(`Firestore (${Fi}): ${t}`,...n)}}function En(t,...e){if(Or.logLevel<=te.ERROR){const n=e.map(Cd);Or.error(`Firestore (${Fi}): ${t}`,...n)}}function Ri(t,...e){if(Or.logLevel<=te.WARN){const n=e.map(Cd);Or.warn(`Firestore (${Fi}): ${t}`,...n)}}function Cd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function le(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class J1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Z1{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let o=new er;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new er,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new er)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(le(typeof i.accessToken=="string"),new Kv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Ye(e)}}class eR{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tR{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new eR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const i=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new nR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=iR(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%e.length))}return i}}function oe(t,e){return t<e?-1:t>e?1:0}function ki(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new De(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new De(0,0))}static max(){return new Y(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,i){n===void 0?n=0:n>e.length&&G(),i===void 0?i=e.length-n:i>e.length-n&&G(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=e.get(s),a=n.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Zs{construct(e,n,i){return new pe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(M.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Zs{construct(e,n,i){return new Ue(e,n,i)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(i+=u,s++):(o(),s++)}if(o(),a)throw new q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(pe.fromString(e))}static fromName(e){return new W(pe.fromString(e).popFirst(5))}static empty(){return new W(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new pe(e.slice()))}}function oR(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new De(n+1,0):new De(n,i));return new sr(s,W.empty(),e)}function aR(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new sr(Y.min(),W.empty(),-1)}static max(){return new sr(Y.max(),W.empty(),-1)}}function lR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==uR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,i)=>{n(e)})}static reject(e){return new b((n,i)=>{i(e)})}static waitFor(e){return new b((n,i)=>{let s=0,o=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&n()},c=>i(c))}),a=!0,o===s&&n()})}static or(e){let n=b.resolve(!1);for(const i of e)n=n.next(s=>s?b.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,o)=>{i.push(n.call(this,s,o))}),this.waitFor(i)}static mapArray(e,n){return new b((i,s)=>{const o=e.length,a=new Array(o);let u=0;for(let c=0;c<o;c++){const d=c;n(e[d]).next(p=>{a[d]=p,++u,u===o&&i(a)},p=>s(p))}})}static doWhile(e,n){return new b((i,s)=>{const o=()=>{e()===!0?n().next(()=>{o()},s):i()};o()})}}function hR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pd.oe=-1;function jl(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function dR(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new la(this.root,e,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new la(this.root,e,this.comparator,!0)}}class la{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Fe.RED,this.left=s??Fe.EMPTY,this.right=o??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Fe(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,i,s,o){return this}insert(e,n,i){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ym(this.data.getIterator())}getIteratorFrom(e){return new Ym(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Ym{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ze(Ue.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Yv("Invalid base64 string: "+o):o}}(e);return new $e(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const fR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(le(!!t),typeof t=="string"){let e=0;const n=fR.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xd(t){const e=t.mapValue.fields.__previous_value__;return Nd(e)?xd(e):e}function eo(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,i,s,o,a,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={mapValue:{}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nd(t)?4:gR(t)?9007199254740991:mR(t)?10:11:G()}function Qt(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=or(s.timestampValue),u=or(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,o){return Lr(s.bytesValue).isEqual(Lr(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,o){return Ae(s.geoPointValue.latitude)===Ae(o.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(o.geoPointValue.longitude)}(t,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Ae(s.integerValue)===Ae(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Ae(s.doubleValue),u=Ae(o.doubleValue);return a===u?hl(a)===hl(u):isNaN(a)&&isNaN(u)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Qm(a)!==Qm(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Qt(a[c],u[c])))return!1;return!0}(t,e);default:return G()}}function no(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function Ci(t,e){if(t===e)return 0;const n=Mr(t),i=Mr(e);if(n!==i)return oe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(o,a){const u=Ae(o.integerValue||o.doubleValue),c=Ae(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return Xm(t.timestampValue,e.timestampValue);case 4:return Xm(eo(t),eo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(o,a){const u=Lr(o),c=Lr(a);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const p=oe(u[d],c[d]);if(p!==0)return p}return oe(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,a){const u=oe(Ae(o.latitude),Ae(a.latitude));return u!==0?u:oe(Ae(o.longitude),Ae(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Jm(t.arrayValue,e.arrayValue);case 10:return function(o,a){var u,c,d,p;const y=o.fields||{},_=a.fields||{},k=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=(c=_.value)===null||c===void 0?void 0:c.arrayValue,V=oe(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:Jm(k,N)}(t.mapValue,e.mapValue);case 11:return function(o,a){if(o===ua.mapValue&&a===ua.mapValue)return 0;if(o===ua.mapValue)return 1;if(a===ua.mapValue)return-1;const u=o.fields||{},c=Object.keys(u),d=a.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let y=0;y<c.length&&y<p.length;++y){const _=oe(c[y],p[y]);if(_!==0)return _;const k=Ci(u[c[y]],d[p[y]]);if(k!==0)return k}return oe(c.length,p.length)}(t.mapValue,e.mapValue);default:throw G()}}function Xm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=or(t),i=or(e),s=oe(n.seconds,i.seconds);return s!==0?s:oe(n.nanos,i.nanos)}function Jm(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=Ci(n[s],i[s]);if(o)return o}return oe(n.length,i.length)}function Pi(t){return oh(t)}function oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=or(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=oh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${oh(n.fields[a])}`;return s+"}"}(t.mapValue):G()}function Zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ah(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function eg(t){return!!t&&"nullValue"in t}function tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function mR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ns(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=Ue.emptyPath(),i={},s=[];e.forEach((a,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=u.popLast()}a?i[u.lastSegment()]=Ns(a):s.push(u.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Ca(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ui(n,(s,o)=>e[s]=o);for(const s of i)delete e[s]}clone(){return new St(Ns(this.value))}}function Xv(t){const e=[];return Ui(t.fields,(n,i)=>{const s=new Ue([n]);if(Ca(i)){const o=Xv(i.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,i,s,o,a,u){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),St.empty(),0)}static newFoundDocument(e,n,i,s){return new Je(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function ng(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],a=t.position[s];if(o.field.isKeyField()?i=W.comparator(W.fromName(a.referenceValue),n.key):i=Ci(a,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function yR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{}class Pe extends Jv{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new vR(e,n,i):n==="array-contains"?new TR(e,i):n==="in"?new IR(e,i):n==="not-in"?new SR(e,i):n==="array-contains-any"?new AR(e,i):new Pe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new wR(e,i):new ER(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ci(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends Jv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Ut(e,n)}matches(e){return Zv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zv(t){return t.op==="and"}function e0(t){return _R(t)&&Zv(t)}function _R(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function lh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(e0(t))return t.filters.map(e=>lh(e)).join(",");{const e=t.filters.map(n=>lh(n)).join(",");return`${t.op}(${e})`}}function t0(t,e){return t instanceof Pe?function(i,s){return s instanceof Pe&&i.op===s.op&&i.field.isEqual(s.field)&&Qt(i.value,s.value)}(t,e):t instanceof Ut?function(i,s){return s instanceof Ut&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,a,u)=>o&&t0(a,s.filters[u]),!0):!1}(t,e):void G()}function n0(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map(n0).join(" ,")+"}"}(t):"Filter"}class vR extends Pe{constructor(e,n,i){super(e,n,i),this.key=W.fromName(i.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class wR extends Pe{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ER extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>W.fromName(i.referenceValue))}class TR extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&no(n.arrayValue,this.value)}}class IR extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class SR extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class AR extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>no(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n=null,i=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ig(t,e=null,n=[],i=[],s=null,o=null,a=null){return new RR(t,e,n,i,s,o,a)}function Vd(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>lh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Pi(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Pi(i)).join(",")),e.ue=n}return e.ue}function Od(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rg(t.startAt,e.startAt)&&rg(t.endAt,e.endAt)}function uh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n=null,i=[],s=[],o=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kR(t,e,n,i,s,o,a,u){return new ji(t,e,n,i,s,o,a,u)}function Ld(t){return new ji(t)}function sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function i0(t){return t.collectionGroup!==null}function xs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ze(Ue.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ro(o,i))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new ro(Ue.keyField(),i))}return e.ce}function Kt(t){const e=X(t);return e.le||(e.le=CR(e,xs(t))),e.le}function CR(t,e){if(t.limitType==="F")return ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ro(s.field,o)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ch(t,e){const n=t.filters.concat([e]);return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hh(t,e,n){return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zl(t,e){return Od(Kt(t),Kt(e))&&t.limitType===e.limitType}function s0(t){return`${Vd(Kt(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>n0(s)).join(", ")}]`),jl(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>Pi(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>Pi(s)).join(",")),`Target(${i})`}(Kt(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):W.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(t,e)&&function(i,s){for(const o of xs(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(a,u,c){const d=ng(a,u,c);return a.inclusive?d<=0:d<0}(i.startAt,xs(i),s)||i.endAt&&!function(a,u,c){const d=ng(a,u,c);return a.inclusive?d>=0:d>0}(i.endAt,xs(i),s))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function o0(t){return(e,n)=>{let i=!1;for(const s of xs(t)){const o=NR(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function NR(t,e,n){const i=t.field.isKeyField()?W.comparator(e.key,n.key):function(o,a,u){const c=a.data.field(o),d=u.data.field(o);return c!==null&&d!==null?Ci(c,d):G()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,i)=>{for(const[s,o]of i)e(s,o)})}isEmpty(){return Qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new Ee(W.comparator);function Tn(){return xR}const a0=new Ee(W.comparator);function ys(...t){let e=a0;for(const n of t)e=e.insert(n.key,n);return e}function l0(t){let e=a0;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Tr(){return Ds()}function u0(){return Ds()}function Ds(){return new zi(t=>t.toString(),(t,e)=>t.isEqual(e))}const DR=new Ee(W.comparator),VR=new ze(W.comparator);function ee(...t){let e=VR;for(const n of t)e=e.add(n);return e}const OR=new ze(oe);function LR(){return OR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function c0(t){return{integerValue:""+t}}function MR(t,e){return dR(e)?c0(e):Md(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this._=void 0}}function bR(t,e,n){return t instanceof io?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Nd(o)&&(o=xd(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,e):t instanceof so?d0(t,e):t instanceof oo?f0(t,e):function(s,o){const a=h0(s,o),u=og(a)+og(s.Pe);return ah(a)&&ah(s.Pe)?c0(u):Md(s.serializer,u)}(t,e)}function FR(t,e,n){return t instanceof so?d0(t,e):t instanceof oo?f0(t,e):n}function h0(t,e){return t instanceof fl?function(i){return ah(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class io extends $l{}class so extends $l{constructor(e){super(),this.elements=e}}function d0(t,e){const n=p0(e);for(const i of t.elements)n.some(s=>Qt(s,i))||n.push(i);return{arrayValue:{values:n}}}class oo extends $l{constructor(e){super(),this.elements=e}}function f0(t,e){let n=p0(e);for(const i of t.elements)n=n.filter(s=>!Qt(s,i));return{arrayValue:{values:n}}}class fl extends $l{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function og(t){return Ae(t.integerValue||t.doubleValue)}function p0(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.field=e,this.transform=n}}function jR(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof so&&s instanceof so||i instanceof oo&&s instanceof oo?ki(i.elements,s.elements,Qt):i instanceof fl&&s instanceof fl?Qt(i.Pe,s.Pe):i instanceof io&&s instanceof io}(t.transform,e.transform)}class zR{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function m0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new y0(t.key,fn.none()):new Eo(t.key,t.data,fn.none());{const n=t.data,i=St.empty();let s=new ze(Ue.comparator);for(let o of e.fields)if(!s.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?i.delete(o):i.set(o,a),s=s.add(o)}return new Ur(t.key,i,new Lt(s.toArray()),fn.none())}}function BR(t,e,n){t instanceof Eo?function(s,o,a){const u=s.value.clone(),c=lg(s.fieldTransforms,o,a.transformResults);u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(s,o,a){if(!Pa(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=lg(s.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(g0(s)),c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,i){return t instanceof Eo?function(o,a,u,c){if(!Pa(o.precondition,a))return u;const d=o.value.clone(),p=ug(o.fieldTransforms,c,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ur?function(o,a,u,c){if(!Pa(o.precondition,a))return u;const d=ug(o.fieldTransforms,c,a),p=a.data;return p.setAll(g0(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(t,e,n,i):function(o,a,u){return Pa(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(t,e,n)}function $R(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),o=h0(i.transform,s||null);o!=null&&(n===null&&(n=St.empty()),n.set(i.field,o))}return n||null}function ag(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ki(i,s,(o,a)=>jR(o,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends ql{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ur extends ql{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function g0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function lg(t,e,n){const i=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const o=t[s],a=o.transform,u=e.data.field(o.field);i.set(o.field,FR(a,u,n[s]))}return i}function ug(t,e,n){const i=new Map;for(const s of t){const o=s.transform,a=n.data.field(s.field);i.set(s.field,bR(o,a,e))}return i}class y0 extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qR extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&BR(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Vs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Vs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=u0();return this.mutations.forEach(s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=n.has(s.key)?null:u;const c=m0(a,u);c!==null&&i.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Y.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,i)=>ag(n,i))&&ki(this.baseMutations,e.baseMutations,(n,i)=>ag(n,i))}}class bd{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){le(e.mutations.length===i.length);let s=function(){return DR}();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,i[a].version);return new bd(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ne;function GR(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function _0(t){if(t===void 0)return En("GRPC error has no .code"),M.UNKNOWN;switch(t){case ke.OK:return M.OK;case ke.CANCELLED:return M.CANCELLED;case ke.UNKNOWN:return M.UNKNOWN;case ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ke.INTERNAL:return M.INTERNAL;case ke.UNAVAILABLE:return M.UNAVAILABLE;case ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ke.NOT_FOUND:return M.NOT_FOUND;case ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ke.ABORTED:return M.ABORTED;case ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ke.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(ne=ke||(ke={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new Ar([4294967295,4294967295],0);function cg(t){const e=QR().encode(t),n=new zv;return n.update(e),new Uint8Array(n.digest())}function hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ar([n,i],0),new Ar([s,o],0)]}class Fd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new _s(`Invalid padding: ${n}`);if(i<0)throw new _s(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _s(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new _s(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ar.fromNumber(this.Ie)}Ee(e,n,i){let s=e.add(n.multiply(Ar.fromNumber(i)));return s.compare(YR)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=cg(e),[i,s]=hg(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,s,o);if(!this.de(a))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Fd(o,s,n);return i.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const n=cg(e),[i,s]=hg(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(i,s,o);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,To.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Hl(Y.min(),s,new Ee(oe),Tn(),ee())}}class To{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new To(i,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,i,s){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=s}}class v0{constructor(e,n){this.targetId=e,this.me=n}}class w0{constructor(e,n,i=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class dg{constructor(){this.fe=0,this.ge=pg(),this.pe=$e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),i=ee();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:G()}}),new To(this.pe,this.ye,e,n,i)}Ce(){this.we=!1,this.ge=pg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=fg(),this.Qe=new Ee(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const i=this.Ge(n);switch(e.state){case 0:this.ze(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((i,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,i=e.me.count,s=this.Je(n);if(s){const o=s.target;if(uh(o))if(i===0){const a=new W(o.path);this.Ue(n,a,Je.newNoDocument(a,Y.min()))}else le(i===1);else{const a=this.Ye(n);if(a!==i){const u=this.Ze(e),c=u?this.Xe(u,e,a):1;if(c!==0){this.je(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,u;try{a=Lr(i).toUint8Array()}catch(c){if(c instanceof Yv)return Ri("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Fd(a,s,o)}catch(c){return Ri(c instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(e,n,i){return n.me.count===i-this.nt(e,n.targetId)?0:2}nt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let s=0;return i.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,o,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&uh(u.target)){const c=new W(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Je.newNoDocument(c,e))}o.be&&(n.set(a,o.ve()),o.Ce())}});let i=ee();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(i=i.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const s=new Hl(e,n,this.Qe,this.ke,i);return this.ke=Tn(),this.qe=fg(),this.Qe=new Ee(oe),s}$e(e,n){if(!this.ze(e))return;const i=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new dg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fg(){return new Ee(W.comparator)}function pg(){return new Ee(W.comparator)}const JR={asc:"ASCENDING",desc:"DESCENDING"},ZR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ek={and:"AND",or:"OR"};class tk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dh(t,e){return t.useProto3Json||jl(e)?e:{value:e}}function pl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nk(t,e){return pl(t,e.toTimestamp())}function Gt(t){return le(!!t),Y.fromTimestamp(function(n){const i=or(n);return new De(i.seconds,i.nanos)}(t))}function Ud(t,e){return fh(t,e).canonicalString()}function fh(t,e){const n=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function T0(t){const e=pe.fromString(t);return le(k0(e)),e}function ph(t,e){return Ud(t.databaseId,e.path)}function Zu(t,e){const n=T0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(S0(n))}function I0(t,e){return Ud(t.databaseId,e)}function rk(t){const e=T0(t);return e.length===4?pe.emptyPath():S0(e)}function mh(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function S0(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mg(t,e,n){return{name:ph(t,e),fields:n.value.mapValue.fields}}function ik(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(le(p===void 0||typeof p=="string"),$e.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),$e.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?M.UNKNOWN:_0(d.code);return new q(p,d.message||"")}(a);n=new w0(i,s,o,u||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zu(t,i.document.name),o=Gt(i.document.updateTime),a=i.document.createTime?Gt(i.document.createTime):Y.min(),u=new St({mapValue:{fields:i.document.fields}}),c=Je.newFoundDocument(s,o,a,u),d=i.targetIds||[],p=i.removedTargetIds||[];n=new Na(d,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Zu(t,i.document),o=i.readTime?Gt(i.readTime):Y.min(),a=Je.newNoDocument(s,o),u=i.removedTargetIds||[];n=new Na([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Zu(t,i.document),o=i.removedTargetIds||[];n=new Na([],o,s,null)}else{if(!("filter"in e))return G();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,a=new KR(s,o),u=i.targetId;n=new v0(u,a)}}return n}function sk(t,e){let n;if(e instanceof Eo)n={update:mg(t,e.key,e.value)};else if(e instanceof y0)n={delete:ph(t,e.key)};else if(e instanceof Ur)n={update:mg(t,e.key,e.data),updateMask:pk(e.fieldMask)};else{if(!(e instanceof qR))return G();n={verify:ph(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(o,a){const u=a.transform;if(u instanceof io)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof so)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof oo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof fl)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw G()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:nk(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(t,e.precondition)),n}function ok(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,o){let a=s.updateTime?Gt(s.updateTime):Gt(o);return a.isEqual(Y.min())&&(a=Gt(o)),new zR(a,s.transformResults||[])}(n,e))):[]}function ak(t,e){return{documents:[I0(t,e.path)]}}function lk(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=I0(t,s);const o=function(d){if(d.length!==0)return R0(Ut.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(_){return{field:Kr(_.field),direction:hk(_.dir)}}(p))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const u=dh(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function uk(t){let e=rk(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){le(i===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=function(y){const _=A0(y);return _ instanceof Ut&&e0(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(y){return y.map(_=>function(N){return new ro(Gr(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let u=null;n.limit&&(u=function(y){let _;return _=typeof y=="object"?y.value:y,jl(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(y){const _=!!y.before,k=y.values||[];return new dl(k,_)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const _=!y.before,k=y.values||[];return new dl(k,_)}(n.endAt)),kR(e,s,a,o,u,"F",c,d)}function ck(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function A0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Gr(n.unaryFilter.field);return Pe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Gr(n.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Gr(n.unaryFilter.field);return Pe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gr(n.unaryFilter.field);return Pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Gr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(i=>A0(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function hk(t){return JR[t]}function dk(t){return ZR[t]}function fk(t){return ek[t]}function Kr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return Ue.fromServerFormat(t.fieldPath)}function R0(t){return t instanceof Pe?function(n){if(n.op==="=="){if(tg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NAN"}};if(eg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NAN"}};if(eg(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(n.field),op:dk(n.op),value:n.value}}}(t):t instanceof Ut?function(n){const i=n.getFilters().map(s=>R0(s));return i.length===1?i[0]:{compositeFilter:{op:fk(n.op),filters:i}}}(t):G()}function pk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function k0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,i,s,o=Y.min(),a=Y.min(),u=$e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.ct=e}}function gk(t){const e=uk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.un=new _k}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(sr.min())}updateCollectionGroup(e,n,i){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class _k{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ze(pe.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ze(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ni(0)}static kn(){return new Ni(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.changes=new zi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?b.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Vs(i.mutation,s,Lt.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ee()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ee()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(o=>{let a=ys();return o.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const i=Tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ee()))}populateOverlays(e,n,i){const s=[];return i.forEach(o=>{n.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((a,u)=>{n.set(a,u)})})}computeViews(e,n,i,s){let o=Tn();const a=Ds(),u=function(){return Ds()}();return n.forEach((c,d)=>{const p=i.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ur)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Vs(p.mutation,d,p.mutation.getFieldMask(),De.now())):a.set(d.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,o).next(c=>(c.forEach((d,p)=>a.set(d,p)),n.forEach((d,p)=>{var y;return u.set(d,new wk(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,n){const i=Ds();let s=new Ee((a,u)=>a-u),o=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let p=i.get(c)||Lt.empty();p=u.applyToLocalView(d,p),i.set(c,p);const y=(s.get(u.batchId)||ee()).add(c);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,p=c.value,y=u0();p.forEach(_=>{if(!o.has(_)){const k=m0(n.get(_),i.get(_));k!==null&&y.set(_,k),o=o.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return b.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):i0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):b.resolve(Tr());let u=-1,c=o;return a.next(d=>b.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?b.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{c=c.insert(p,_)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,c,d,ee())).next(p=>({batchId:u,changes:l0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(i=>{let s=ys();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let a=ys();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,c=>{const d=function(y,_){return new ji(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,c.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next(p=>{p.forEach((y,_)=>{a=a.insert(y,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s))).next(a=>{o.forEach((c,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Je.newInvalidDocument(p)))});let u=ys();return a.forEach((c,d)=>{const p=o.get(c);p!==void 0&&Vs(p.mutation,d,Lt.empty(),De.now()),Bl(n,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:gk(s.bundledQuery),readTime:Gt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.overlays=new Ee(W.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Tr();return b.forEach(n,s=>this.getOverlay(e,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,o)=>{this.ht(e,n,o)}),b.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),b.resolve()}getOverlaysForCollection(e,n,i){const s=Tr(),o=n.length+1,a=new W(n.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>i&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new Ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>i){let p=o.get(d.largestBatchId);p===null&&(p=Tr(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Tr(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return b.resolve(u)}ht(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new WR(n,i));let o=this.Ir.get(n);o===void 0&&(o=ee(),this.Ir.set(n,o)),this.Ir.set(n,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const i=new Ve(e,n);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(i=>this.removeReference(i,n))}gr(e){const n=new W(new pe([])),i=new Ve(n,e),s=new Ve(n,e+1),o=[];return this.dr.forEachInRange([i,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new pe([])),i=new Ve(n,e),s=new Ve(n,e+1);let o=ee();return this.dr.forEachInRange([i,s],a=>{o=o.add(a.key)}),o}containsKey(e){const n=new Ve(e,0),i=this.Tr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new HR(o,n,i,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new Ve(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.vr(i),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ve(n,0),s=new Ve(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],a=>{const u=this.Dr(a.wr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ze(oe);return n.forEach(s=>{const o=new Ve(s,0),a=new Ve(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{i=i.add(u.wr)})}),b.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;W.isDocumentKey(o)||(o=o.child(""));const a=new Ve(new W(o),0);let u=new ze(oe);return this.br.forEachWhile(c=>{const d=c.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.wr)),!0)},a),b.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(i=>{const s=this.Dr(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return b.forEach(n.mutations,s=>{const o=new Ve(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,n){const i=new Ve(n,0),s=this.br.firstAfterOrEqual(i);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.Mr=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return b.resolve(i?i.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let i=Tn();return n.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Je.newInvalidDocument(s))}),b.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=Tn();const a=n.path,u=new W(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||lR(aR(p),i)<=0||(s.has(p.key)||Bl(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,n,i,s){G()}Or(e,n){return b.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new kk(this)}getSize(e){return b.resolve(this.size)}}class kk extends vk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(i)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.persistence=e,this.Nr=new zi(n=>Vd(n),Od),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jd,this.targetCount=0,this.kr=Ni.Bn()}forEachTarget(e,n){return this.Nr.forEach((i,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=n&&i.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const i=this.Nr.get(n)||null;return b.resolve(i)}addMatchingKeys(e,n,i){return this.Br.Rr(n,i),b.resolve()}removeMatchingKeys(e,n,i){this.Br.mr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach(a=>{o.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Br.yr(n);return b.resolve(i)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pd(0),this.Kr=!1,this.Kr=!0,this.$r=new Sk,this.referenceDelegate=e(this),this.Ur=new Ck(this),this.indexManager=new yk,this.remoteDocumentCache=function(s){return new Rk(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new mk(n),this.Gr=new Tk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ik,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.qr[e.toKey()];return i||(i=new Ak(n,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,i){H("MemoryPersistence","Starting transaction:",e);const s=new Nk(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(e,n){return b.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,n)))}}class Nk extends cR{constructor(e){super(),this.currentSequenceNumber=e}}class zd{constructor(e){this.persistence=e,this.Jr=new jd,this.Yr=null}static Zr(e){return new zd(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,i){return this.Jr.addReference(i,n),this.Xr.delete(i.toString()),b.resolve()}removeReference(e,n,i){return this.Jr.removeReference(i,n),this.Xr.add(i.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,i=>{const s=W.fromPath(i);return this.ei(e,s).next(o=>{o||n.removeEntry(s,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(i=>{i?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.$i=i,this.Ui=s}static Wi(e,n){let i=ee(),s=ee();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Bd(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VI()?8:hR(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.Yi(e,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,n,s,i).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new xk;return this.Xi(e,n,a).next(u=>{if(o.result=u,this.zi)return this.es(e,n,a,u.size)})}).next(()=>o.result)}es(e,n,i,s){return i.documentReadCount<this.ji?(hs()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(hs()<=te.DEBUG&&H("QueryEngine","Query:",Wr(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(hs()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):b.resolve())}Yi(e,n){if(sg(n))return b.resolve(null);let i=Kt(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hh(n,null,"F"),i=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const a=ee(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,i).next(c=>{const d=this.ts(n,u);return this.ns(n,d,a,c.readTime)?this.Yi(e,hh(n,null,"F")):this.rs(e,d,n,c)}))})))}Zi(e,n,i,s){return sg(n)||s.isEqual(Y.min())?b.resolve(null):this.Ji.getDocuments(e,i).next(o=>{const a=this.ts(n,o);return this.ns(n,a,i,s)?b.resolve(null):(hs()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wr(n)),this.rs(e,a,n,oR(s,-1)).next(u=>u))})}ts(e,n){let i=new ze(o0(e));return n.forEach((s,o)=>{Bl(e,o)&&(i=i.add(o))}),i}ns(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,n,i){return hs()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Wr(n)),this.Ji.getDocumentsMatchingQuery(e,n,sr.min(),i)}rs(e,n,i,s){return this.Ji.getDocumentsMatchingQuery(e,i,s).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,i,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ee(oe),this._s=new zi(o=>Vd(o),Od),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ek(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Ok(t,e,n,i){return new Vk(t,e,n,i)}async function C0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,n.ls(e),n.mutationQueue.getAllMutationBatches(i))).next(o=>{const a=[],u=[];let c=ee();for(const d of s){a.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(i,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Lk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,p){const y=d.batch,_=y.keys();let k=b.resolve();return _.forEach(N=>{k=k.next(()=>p.getEntry(c,N)).next(V=>{const L=d.docVersions.get(N);le(L!==null),V.version.compareTo(L)<0&&(y.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),k.next(()=>u.mutationQueue.removeMutationBatch(c,y))}(n,i,e,o).next(()=>o.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(u){let c=ee();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function P0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Mk(t,e){const n=X(t),i=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const u=[];e.targetChanges.forEach((p,y)=>{const _=s.get(y);if(!_)return;u.push(n.Ur.removeMatchingKeys(o,p.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(o,p.addedDocuments,y)));let k=_.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken($e.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,i)),s=s.insert(y,k),function(V,L,S){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,k,p)&&u.push(n.Ur.updateTargetData(o,k))});let c=Tn(),d=ee();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(bk(o,a,e.documentUpdates).next(p=>{c=p.Ps,d=p.Is})),!i.isEqual(Y.min())){const p=n.Ur.getLastRemoteSnapshotVersion(o).next(y=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,i));u.push(p)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(n.os=s,o))}function bk(t,e,n){let i=ee(),s=ee();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Tn();return n.forEach((u,c)=>{const d=o.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):H("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function Fk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Uk(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Ur.getTargetData(i,e).next(o=>o?(s=o,b.resolve(s)):n.Ur.allocateTargetId(i).next(a=>(s=new zn(e,a,"TargetPurposeListen",i.currentSequenceNumber),n.Ur.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.os.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(i.targetId,i),n._s.set(e,i.targetId)),i})}async function gh(t,e,n){const i=X(t),s=i.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!wo(a))throw a;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.os=i.os.remove(e),i._s.delete(s.target)}function gg(t,e,n){const i=X(t);let s=Y.min(),o=ee();return i.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,p){const y=X(c),_=y._s.get(p);return _!==void 0?b.resolve(y.os.get(_)):y.Ur.getTargetData(d,p)}(i,a,Kt(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{o=c})}).next(()=>i.ss.getDocumentsMatchingQuery(a,e,n?s:Y.min(),n?o:ee())).next(u=>(jk(i,PR(e),u),{documents:u,Ts:o})))}function jk(t,e,n){let i=t.us.get(e)||Y.min();n.forEach((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),t.us.set(e,i)}class yg{constructor(){this.activeTargetIds=LR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zk{constructor(){this.so=new yg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,i){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca=null;function ec(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class Hk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+n.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(n,i,s,o,a){const u=ec(),c=this.xo(n,i.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${u}:`,c,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(n,c,d,s).then(p=>(H("RestConnection",`Received RPC '${n}' ${u}: `,p),p),p=>{throw Ri("RestConnection",`RPC '${n}' ${u} failed with error: `,p,"url: ",c,"request:",s),p})}Lo(n,i,s,o,a,u){return this.Mo(n,i,s,o,a)}Oo(n,i,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,a)=>n[a]=o),s&&s.headers.forEach((o,a)=>n[a]=o)}xo(n,i){const s=$k[n];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,i,s){const o=ec();return new Promise((a,u)=>{const c=new Bv;c.setWithCredentials(!0),c.listenOnce($v.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ka.NO_ERROR:const p=c.getResponseJson();H(Qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case ka.TIMEOUT:H(Qe,`RPC '${e}' ${o} timed out`),u(new q(M.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const y=c.getStatus();if(H(Qe,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_==null?void 0:_.error;if(k&&k.status&&k.message){const N=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(k.status);u(new q(N,k.message))}else u(new q(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Qe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);H(Qe,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",d,i,15)})}Bo(e,n,i){const s=ec(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wv(),u=Hv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const p=o.join("");H(Qe,`Creating RPC '${e}' stream ${s}: ${p}`,c);const y=a.createWebChannel(p,c);let _=!1,k=!1;const N=new qk({Io:L=>{k?H(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(_||(H(Qe,`Opening RPC '${e}' stream ${s} transport.`),y.open(),_=!0),H(Qe,`RPC '${e}' stream ${s} sending:`,L),y.send(L))},To:()=>y.close()}),V=(L,S,w)=>{L.listen(S,R=>{try{w(R)}catch(O){setTimeout(()=>{throw O},0)}})};return V(y,gs.EventType.OPEN,()=>{k||(H(Qe,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),V(y,gs.EventType.CLOSE,()=>{k||(k=!0,H(Qe,`RPC '${e}' stream ${s} transport closed`),N.So())}),V(y,gs.EventType.ERROR,L=>{k||(k=!0,Ri(Qe,`RPC '${e}' stream ${s} transport errored:`,L),N.So(new q(M.UNAVAILABLE,"The operation could not be completed")))}),V(y,gs.EventType.MESSAGE,L=>{var S;if(!k){const w=L.data[0];le(!!w);const R=w,O=R.error||((S=R[0])===null||S===void 0?void 0:S.error);if(O){H(Qe,`RPC '${e}' stream ${s} received error:`,O);const j=O.status;let U=function(v){const T=ke[v];if(T!==void 0)return _0(T)}(j),E=O.message;U===void 0&&(U=M.INTERNAL,E="Unknown error status: "+j+" with message "+O.message),k=!0,N.So(new q(U,E)),y.close()}else H(Qe,`RPC '${e}' stream ${s} received:`,w),N.bo(w)}}),V(u,qv.STAT_EVENT,L=>{L.stat===sh.PROXY?H(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===sh.NOPROXY&&H(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return new tk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,i=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n,i,s,o,a,u,c){this.ui=e,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new N0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===n&&this.P_(i,s)},i=>{e(()=>{const s=new q(M.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(e,n){const i=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wk extends x0{constructor(e,n,i,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,a),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ik(this.serializer,e),i=function(o){if(!("targetChange"in o))return Y.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Gt(a.readTime):Y.min()}(e);return this.listener.d_(n,i)}A_(e){const n={};n.database=mh(this.serializer),n.addTarget=function(o,a){let u;const c=a.target;if(u=uh(c)?{documents:ak(o,c)}:{query:lk(o,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=E0(o,a.resumeToken);const d=dh(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){u.readTime=pl(o,a.snapshotVersion.toTimestamp());const d=dh(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const i=ck(this.serializer,e);i&&(n.labels=i),this.a_(n)}R_(e){const n={};n.database=mh(this.serializer),n.removeTarget=e,this.a_(n)}}class Kk extends x0{constructor(e,n,i,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ok(e.writeResults,e.commitTime),i=Gt(e.commitTime);return this.listener.g_(i,n)}p_(){const e={};e.database=mh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>sk(this.serializer,i))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,fh(n,i),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(M.UNKNOWN,o.toString())})}Lo(e,n,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,fh(n,i),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(En(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{i.enqueueAndForget(async()=>{jr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=X(c);d.L_.add(4),await Io(d),d.q_.set("Unknown"),d.L_.delete(4),await Kl(d)}(this))})}),this.q_=new Qk(i,s)}}async function Kl(t){if(jr(t))for(const e of t.B_)await e(!0)}async function Io(t){for(const e of t.B_)await e(!1)}function D0(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wd(n)?Hd(n):Bi(n).r_()&&qd(n,e))}function $d(t,e){const n=X(t),i=Bi(n);n.N_.delete(e),i.r_()&&V0(n,e),n.N_.size===0&&(i.r_()?i.o_():jr(n)&&n.q_.set("Unknown"))}function qd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bi(t).A_(e)}function V0(t,e){t.Q_.xe(e),Bi(t).R_(e)}function Hd(t){t.Q_=new XR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Bi(t).start(),t.q_.v_()}function Wd(t){return jr(t)&&!Bi(t).n_()&&t.N_.size>0}function jr(t){return X(t).L_.size===0}function O0(t){t.Q_=void 0}async function Xk(t){t.q_.set("Online")}async function Jk(t){t.N_.forEach((e,n)=>{qd(t,e)})}async function Zk(t,e){O0(t),Wd(t)?(t.q_.M_(e),Hd(t)):t.q_.set("Unknown")}async function eC(t,e,n){if(t.q_.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))}(t,e)}catch(i){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ml(t,i)}else if(e instanceof Na?t.Q_.Ke(e):e instanceof v0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const i=await P0(t.localStore);n.compareTo(i)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const p=o.N_.get(c);if(!p)return;o.N_.set(c,p.withResumeToken($e.EMPTY_BYTE_STRING,p.snapshotVersion)),V0(o,c);const y=new zn(p.target,c,d,p.sequenceNumber);qd(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(i){H("RemoteStore","Failed to raise snapshot:",i),await ml(t,i)}}async function ml(t,e,n){if(!wo(e))throw e;t.L_.add(1),await Io(t),t.q_.set("Offline"),n||(n=()=>P0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Kl(t)})}function L0(t,e){return e().catch(n=>ml(t,n,e))}async function Gl(t){const e=X(t),n=ar(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tC(e);)try{const s=await Fk(e.localStore,i);if(s===null){e.O_.length===0&&n.o_();break}i=s.batchId,nC(e,s)}catch(s){await ml(e,s)}M0(e)&&b0(e)}function tC(t){return jr(t)&&t.O_.length<10}function nC(t,e){t.O_.push(e);const n=ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function M0(t){return jr(t)&&!ar(t).n_()&&t.O_.length>0}function b0(t){ar(t).start()}async function rC(t){ar(t).p_()}async function iC(t){const e=ar(t);for(const n of t.O_)e.m_(n.mutations)}async function sC(t,e,n){const i=t.O_.shift(),s=bd.from(i,e,n);await L0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gl(t)}async function oC(t,e){e&&ar(t).V_&&await async function(i,s){if(function(a){return GR(a)&&a!==M.ABORTED}(s.code)){const o=i.O_.shift();ar(i).s_(),await L0(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gl(i)}}(t,e),M0(t)&&b0(t)}async function vg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const i=jr(n);n.L_.add(3),await Io(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Kl(n)}async function aC(t,e){const n=X(t);e?(n.L_.delete(2),await Kl(n)):e||(n.L_.add(2),await Io(n),n.q_.set("Unknown"))}function Bi(t){return t.K_||(t.K_=function(n,i,s){const o=X(n);return o.w_(),new Wk(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Xk.bind(null,t),Ro:Jk.bind(null,t),mo:Zk.bind(null,t),d_:eC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wd(t)?Hd(t):t.q_.set("Unknown")):(await t.K_.stop(),O0(t))})),t.K_}function ar(t){return t.U_||(t.U_=function(n,i,s){const o=X(n);return o.w_(),new Kk(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rC.bind(null,t),mo:oC.bind(null,t),f_:iC.bind(null,t),g_:sC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Gl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,u=new Kd(e,n,a,s,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(t,e){if(En("AsyncQueue",`${e}: ${t}`),wo(t))return new q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,i)=>e(n,i)||W.comparator(n.key,i.key):(n,i)=>W.comparator(n.key,i.key),this.keyedMap=ys(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new yi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.W_=new Ee(W.comparator)}track(e){const n=e.doc.key,i=this.W_.get(n);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(n,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(n):e.type===1&&i.type===2?this.W_=this.W_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,i)=>{e.push(i)}),e}}class xi{constructor(e,n,i,s,o,a,u,c,d){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,i,s,o){const a=[];return n.forEach(u=>{a.push({type:0,doc:u})}),new xi(e,n,yi.emptySet(n),a,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class uC{constructor(){this.queries=Eg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,i){const s=X(n),o=s.queries;s.queries=Eg(),o.forEach((a,u)=>{for(const c of u.j_)c.onError(i)})})(this,new q(M.ABORTED,"Firestore shutting down"))}}function Eg(){return new zi(t=>s0(t),zl)}async function F0(t,e){const n=X(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.H_()&&e.J_()&&(i=2):(o=new lC,i=e.J_()?0:1);try{switch(i){case 0:o.z_=await n.onListen(s,!0);break;case 1:o.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const u=Gd(a,`Initialization of query '${Wr(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&Qd(n)}async function U0(t,e){const n=X(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function cC(t,e){const n=X(t);let i=!1;for(const s of e){const o=s.query,a=n.queries.get(o);if(a){for(const u of a.j_)u.X_(s)&&(i=!0);a.z_=s}}i&&Qd(n)}function hC(t,e,n){const i=X(t),s=i.queries.get(e);if(s)for(const o of s.j_)o.onError(n);i.queries.delete(e)}function Qd(t){t.Y_.forEach(e=>{e.next()})}var yh,Tg;(Tg=yh||(yh={})).ea="default",Tg.Cache="cache";class j0{constructor(e,n,i){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new xi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const i=n!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.key=e}}class B0{constructor(e){this.key=e}}class dC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=o0(e),this.Ra=new yi(this.Aa)}get Va(){return this.Ta}ma(e,n){const i=n?n.fa:new wg,s=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const _=s.get(p),k=Bl(this.query,y)?y:null,N=!!_&&this.mutatedKeys.has(_.key),V=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;_&&k?_.data.isEqual(k.data)?N!==V&&(i.track({type:3,doc:k}),L=!0):this.ga(_,k)||(i.track({type:2,doc:k}),L=!0,(c&&this.Aa(k,c)>0||d&&this.Aa(k,d)<0)&&(u=!0)):!_&&k?(i.track({type:0,doc:k}),L=!0):_&&!k&&(i.track({type:1,doc:_}),L=!0,(c||d)&&(u=!0)),L&&(k?(a=a.add(k),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),i.track({type:1,doc:p})}return{Ra:a,fa:i,ns:u,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,y)=>function(k,N){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return V(k)-V(N)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(i),s=s!=null&&s;const u=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new xi(this.query,e.Ra,o,a,e.mutatedKeys,c===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const n=[];return e.forEach(i=>{this.da.has(i)||n.push(new B0(i))}),this.da.forEach(i=>{e.has(i)||n.push(new z0(i))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fC{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class pC{constructor(e){this.key=e,this.va=!1}}class mC{constructor(e,n,i,s,o,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new zi(u=>s0(u),zl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(W.comparator),this.Na=new Map,this.La=new jd,this.Ba={},this.ka=new Map,this.qa=Ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gC(t,e,n=!0){const i=G0(t);let s;const o=i.Fa.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await $0(i,e,n,!0),s}async function yC(t,e){const n=G0(t);await $0(n,e,!0,!1)}async function $0(t,e,n,i){const s=await Uk(t.localStore,Kt(e)),o=s.targetId,a=t.sharedClientState.addLocalQueryTarget(o,n);let u;return i&&(u=await _C(t,e,o,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&D0(t.remoteStore,s),u}async function _C(t,e,n,i,s){t.Ka=(y,_,k)=>async function(V,L,S,w){let R=L.view.ma(S);R.ns&&(R=await gg(V.localStore,L.query,!1).then(({documents:E})=>L.view.ma(E,R)));const O=w&&w.targetChanges.get(L.targetId),j=w&&w.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(R,V.isPrimaryClient,O,j);return Sg(V,L.targetId,U.wa),U.snapshot}(t,y,_,k);const o=await gg(t.localStore,e,!0),a=new dC(e,o.Ts),u=a.ma(o.documents),c=To.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),d=a.applyChanges(u,t.isPrimaryClient,c);Sg(t,n,d.wa);const p=new fC(e,n,a);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function vC(t,e,n){const i=X(t),s=i.Fa.get(e),o=i.Ma.get(s.targetId);if(o.length>1)return i.Ma.set(s.targetId,o.filter(a=>!zl(a,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await gh(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),n&&$d(i.remoteStore,s.targetId),_h(i,s.targetId)}).catch(vo)):(_h(i,s.targetId),await gh(i.localStore,s.targetId,!0))}async function wC(t,e){const n=X(t),i=n.Fa.get(e),s=n.Ma.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),$d(n.remoteStore,i.targetId))}async function EC(t,e,n){const i=CC(t);try{const s=await function(a,u){const c=X(a),d=De.now(),p=u.reduce((k,N)=>k.add(N.key),ee());let y,_;return c.persistence.runTransaction("Locally write mutations","readwrite",k=>{let N=Tn(),V=ee();return c.cs.getEntries(k,p).next(L=>{N=L,N.forEach((S,w)=>{w.isValidDocument()||(V=V.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(k,N)).next(L=>{y=L;const S=[];for(const w of u){const R=$R(w,y.get(w.key).overlayedDocument);R!=null&&S.push(new Ur(w.key,R,Xv(R.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(k,d,S,u)}).next(L=>{_=L;const S=L.applyToLocalDocumentSet(y,V);return c.documentOverlayCache.saveOverlays(k,L.batchId,S)})}).then(()=>({batchId:_.batchId,changes:l0(y)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new Ee(oe)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(i,s.batchId,n),await So(i,s.changes),await Gl(i.remoteStore)}catch(s){const o=Gd(s,"Failed to persist write");n.reject(o)}}async function q0(t,e){const n=X(t);try{const i=await Mk(n.localStore,e);e.targetChanges.forEach((s,o)=>{const a=n.Na.get(o);a&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?le(a.va):s.removedDocuments.size>0&&(le(a.va),a.va=!1))}),await So(n,i,e)}catch(i){await vo(i)}}function Ig(t,e,n){const i=X(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Fa.forEach((o,a)=>{const u=a.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=X(a);c.onlineState=u;let d=!1;c.queries.forEach((p,y)=>{for(const _ of y.j_)_.Z_(u)&&(d=!0)}),d&&Qd(c)}(i.eventManager,e),s.length&&i.Ca.d_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function TC(t,e,n){const i=X(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Na.get(e),o=s&&s.key;if(o){let a=new Ee(W.comparator);a=a.insert(o,Je.newNoDocument(o,Y.min()));const u=ee().add(o),c=new Hl(Y.min(),new Map,new Ee(oe),a,u);await q0(i,c),i.Oa=i.Oa.remove(o),i.Na.delete(e),Yd(i)}else await gh(i.localStore,e,!1).then(()=>_h(i,e,n)).catch(vo)}async function IC(t,e){const n=X(t),i=e.batch.batchId;try{const s=await Lk(n.localStore,e);W0(n,i,null),H0(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await So(n,s)}catch(s){await vo(s)}}async function SC(t,e,n){const i=X(t);try{const s=await function(a,u){const c=X(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return c.mutationQueue.lookupMutationBatch(d,u).next(y=>(le(y!==null),p=y.keys(),c.mutationQueue.removeMutationBatch(d,y))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>c.localDocuments.getDocuments(d,p))})}(i.localStore,e);W0(i,e,n),H0(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await So(i,s)}catch(s){await vo(s)}}function H0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function W0(t,e,n){const i=X(t);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(e);o&&(n?o.reject(n):o.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}function _h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Ma.get(e))t.Fa.delete(i),n&&t.Ca.$a(i,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(i=>{t.La.containsKey(i)||K0(t,i)})}function K0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($d(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yd(t))}function Sg(t,e,n){for(const i of n)i instanceof z0?(t.La.addReference(i.key,e),AC(t,i)):i instanceof B0?(H("SyncEngine","Document no longer in limbo: "+i.key),t.La.removeReference(i.key,e),t.La.containsKey(i.key)||K0(t,i.key)):G()}function AC(t,e){const n=e.key,i=n.path.canonicalString();t.Oa.get(n)||t.xa.has(i)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(i),Yd(t))}function Yd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(pe.fromString(e)),i=t.qa.next();t.Na.set(i,new pC(n)),t.Oa=t.Oa.insert(n,i),D0(t.remoteStore,new zn(Kt(Ld(n.path)),i,"TargetPurposeLimboResolution",Pd.oe))}}async function So(t,e,n){const i=X(t),s=[],o=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((u,c)=>{a.push(i.Ka(c,e,n).then(d=>{var p;if((d||n)&&i.isPrimaryClient){const y=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(c.targetId))===null||p===void 0?void 0:p.current;i.sharedClientState.updateQueryState(c.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Bd.Wi(c.targetId,d);o.push(y)}}))}),await Promise.all(a),i.Ca.d_(s),await async function(c,d){const p=X(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>b.forEach(d,_=>b.forEach(_.$i,k=>p.persistence.referenceDelegate.addReference(y,_.targetId,k)).next(()=>b.forEach(_.Ui,k=>p.persistence.referenceDelegate.removeReference(y,_.targetId,k)))))}catch(y){if(!wo(y))throw y;H("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const _=y.targetId;if(!y.fromCache){const k=p.os.get(_),N=k.snapshotVersion,V=k.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(_,V)}}}(i.localStore,o))}async function RC(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const i=await C0(n.localStore,e);n.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(c=>{c.reject(new q(M.CANCELLED,a))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await So(n,i.hs)}}function kC(t,e){const n=X(t),i=n.Na.get(e);if(i&&i.va)return ee().add(i.key);{let s=ee();const o=n.Ma.get(e);if(!o)return s;for(const a of o){const u=n.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function G0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TC.bind(null,e),e.Ca.d_=cC.bind(null,e.eventManager),e.Ca.$a=hC.bind(null,e.eventManager),e}function CC(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SC.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Ok(this.persistence,new Dk,e.initialUser,this.serializer)}Ga(e){return new Pk(zd.Zr,this.serializer)}Wa(e){return new zk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ig(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=RC.bind(null,this.syncEngine),await aC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uC}()}createDatastore(e){const n=Wl(e.databaseInfo.databaseId),i=function(o){return new Hk(o)}(e.databaseInfo);return function(o,a,u,c){return new Gk(o,a,u,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,o,a,u){return new Yk(i,s,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,n=>Ig(this.syncEngine,n,0),function(){return _g.D()?new _g:new Bk}())}createSyncEngine(e,n){return function(s,o,a,u,c,d,p){const y=new mC(s,o,a,u,c,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const o=X(s);H("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Io(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vh.provider={build:()=>new vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=Gv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Gd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await C0(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NC(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>vg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>vg(e.remoteStore,s)),t._onlineComponents=e}async function NC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new gl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await nc(t,new gl);return t._offlineComponents}async function Y0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Ag(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Ag(t,new vh))),t._onlineComponents}function xC(t){return Y0(t).then(e=>e.syncEngine)}async function wh(t){const e=await Y0(t),n=e.eventManager;return n.onListen=gC.bind(null,e.syncEngine),n.onUnlisten=vC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wC.bind(null,e.syncEngine),n}function DC(t,e,n={}){const i=new er;return t.asyncQueue.enqueueAndForget(async()=>function(o,a,u,c,d){const p=new Q0({next:_=>{p.Za(),a.enqueueAndForget(()=>U0(o,y)),_.fromCache&&c.source==="server"?d.reject(new q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new j0(u,p,{includeMetadataChanges:!0,_a:!0});return F0(o,y)}(await wh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t,e,n){if(!n)throw new q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VC(t,e,n,i){if(e===!0&&i===!0)throw new q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cg(t){if(W.isDocumentKey(t))throw new q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yl{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new X1;switch(i.type){case"firstParty":return new tR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Rg.get(n);i&&(H("ComponentProvider","Removing Datastore"),Rg.delete(n),i.terminate())}(this),Promise.resolve()}}function OC(t,e,n,i={}){var s;const o=(t=Rr(t,Yl))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let u,c;if(typeof i.mockUserToken=="string")u=i.mockUserToken,c=Ye.MOCK_USER;else{u=RI(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ye(d)}t._authCredentials=new J1(new Kv(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class _t{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class tr extends hr{constructor(e,n,i){super(e,n,Ld(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new W(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function Eh(t,e,...n){if(t=ft(t),J0("collection","path",e),t instanceof Yl){const i=pe.fromString(e,...n);return Cg(i),new tr(t,null,i)}{if(!(t instanceof _t||t instanceof tr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(pe.fromString(e,...n));return Cg(i),new tr(t.firestore,null,i)}}function LC(t,e,...n){if(t=ft(t),arguments.length===1&&(e=Gv.newId()),J0("doc","path",e),t instanceof Yl){const i=pe.fromString(e,...n);return kg(i),new _t(t,null,new W(i))}{if(!(t instanceof _t||t instanceof tr))throw new q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(pe.fromString(e,...n));return kg(i),new _t(t.firestore,t instanceof tr?t.converter:null,new W(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new N0(this,"async_queue_retry"),this.Vu=()=>{const i=tc();i&&H("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(i);throw En("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=n,n}enqueueAfterDelay(e,n,i){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Kd.createAndSchedule(this,e,n,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function xg(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1}(t,["next","error","complete"])}class ao extends Yl{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Ng,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ng(e),this._firestoreClient=void 0,await e}}}function MC(t,e){const n=typeof t=="object"?t:sv(),i=typeof t=="string"?t:"(default)",s=vd(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=SI("firestore");o&&OC(s,...o)}return s}function Xd(t){if(t._terminated)throw new q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bC(t),t._firestoreClient}function bC(t){var e,n,i;const s=t._freezeSettings(),o=function(u,c,d,p){return new pR(u,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,X0(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PC(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di($e.fromBase64String(e))}catch(n){throw new q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Di($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=/^__.*__$/;class UC{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}function Z0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class nf{constructor(e,n,i,s,o,a){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:i,xu:!1});return s.Ou(e),s}Nu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Z0(this.Cu)&&FC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jC{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Wl(e)}Qu(e,n,i,s=!1){return new nf({Cu:e,methodName:n,qu:i,path:Ue.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ew(t){const e=t._freezeSettings(),n=Wl(t._databaseId);return new jC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zC(t,e,n,i,s,o={}){const a=t.Qu(o.merge||o.mergeFields?2:0,e,n,s);rw("Data must be an object, but it was:",a,i);const u=tw(i,a);let c,d;if(o.merge)c=new Lt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const _=$C(e,y,n);if(!a.contains(_))throw new q(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);HC(p,_)||p.push(_)}c=new Lt(p),d=a.fieldTransforms.filter(y=>c.covers(y.field))}else c=null,d=a.fieldTransforms;return new UC(new St(u),c,d)}class rf extends Zd{_toFieldTransform(e){return new UR(e.path,new io)}isEqual(e){return e instanceof rf}}function BC(t,e,n,i=!1){return sf(n,t.Qu(i?4:3,e))}function sf(t,e){if(nw(t=ft(t)))return rw("Unsupported field value:",e,t),tw(t,e);if(t instanceof Zd)return function(i,s){if(!Z0(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,s){const o=[];let a=0;for(const u of i){let c=sf(u,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(t,e)}return function(i,s){if((i=ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return MR(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=De.fromDate(i);return{timestampValue:pl(s.serializer,o)}}if(i instanceof De){const o=new De(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:pl(s.serializer,o)}}if(i instanceof ef)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Di)return{bytesValue:E0(s.serializer,i._byteString)};if(i instanceof _t){const o=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ud(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof tf)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return Md(u.serializer,c)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${Ql(i)}`)}(t,e)}function tw(t,e){const n={};return Qv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(i,s)=>{const o=sf(s,e.Mu(i));o!=null&&(n[i]=o)}),{mapValue:{fields:n}}}function nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof ef||t instanceof Di||t instanceof _t||t instanceof Zd||t instanceof tf)}function rw(t,e,n){if(!nw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Ql(n);throw i==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+i)}}function $C(t,e,n){if((e=ft(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return iw(t,e);throw yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const qC=new RegExp("[~\\*/\\[\\]]");function iw(t,e,n){if(e.search(qC)>=0)throw yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jd(...e.split("."))._internalPath}catch{throw yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yl(t,e,n,i,s){const o=i&&!i.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${i}`),a&&(c+=` in document ${s}`),c+=")"),new q(M.INVALID_ARGUMENT,u+t+c)}function HC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(of("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WC extends sw{data(){return super.data()}}function of(t,e){return typeof e=="string"?iw(t,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class af{}class aw extends af{}function Dg(t,e,...n){let i=[];e instanceof af&&i.push(e),i=i.concat(n),function(o){const a=o.filter(c=>c instanceof uf).length,u=o.filter(c=>c instanceof lf).length;if(a>1||a>0&&u>0)throw new q(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class lf extends aw{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new lf(e,n,i)}_apply(e){const n=this._parse(e);return lw(e._query,n),new hr(e.firestore,e.converter,ch(e._query,n))}_parse(e){const n=ew(e.firestore);return function(o,a,u,c,d,p,y){let _;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new q(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Og(y,p);const k=[];for(const N of y)k.push(Vg(c,o,N));_={arrayValue:{values:k}}}else _=Vg(c,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Og(y,p),_=BC(u,a,y,p==="in"||p==="not-in");return Pe.create(d,p,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class uf extends af{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uf(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const c of u)lw(a,c),a=ch(a,c)}(e._query,n),new hr(e.firestore,e.converter,ch(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cf extends aw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cf(e,n)}_apply(e){const n=function(s,o,a){if(s.startAt!==null)throw new q(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ro(o,a)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new ji(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function KC(t,e="asc"){const n=e,i=of("orderBy",t);return cf._create(i,n)}function Vg(t,e,n){if(typeof(n=ft(n))=="string"){if(n==="")throw new q(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!i0(e)&&n.indexOf("/")!==-1)throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(pe.fromString(n));if(!W.isDocumentKey(i))throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zm(t,new W(i))}if(n instanceof _t)return Zm(t,n._key);throw new q(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ql(n)}.`)}function Og(t,e){if(!Array.isArray(t)||t.length===0)throw new q(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lw(t,e){const n=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class GC{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Ui(e,(s,o)=>{i[s]=this.convertValue(o,n)}),i}convertVectorValue(e){var n,i,s;const o=(s=(i=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>Ae(a.doubleValue));return new tf(o)}convertGeoPoint(e){return new ef(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=xd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=or(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=pe.fromString(e);le(k0(i));const s=new to(i.get(1),i.get(3)),o=new W(i.popFirst(5));return s.isEqual(n)||En(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uw extends sw{constructor(e,n,i,s,o,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(of("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class xa extends uw{data(e={}){return super.data(e)}}class cw{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new xa(this._firestore,this._userDataWriter,i.key,i,new vs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new xa(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vs(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const c=new xa(s._firestore,s._userDataWriter,u.doc.key,u.doc,new vs(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:YC(u.type),doc:c,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class hf extends GC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function XC(t){t=Rr(t,hr);const e=Rr(t.firestore,ao),n=Xd(e),i=new hf(e);return ow(t._query),DC(n,t._query).then(s=>new cw(e,i,t,s))}function JC(t,e){const n=Rr(t.firestore,ao),i=LC(t),s=QC(t.converter,e);return eP(n,[zC(ew(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,fn.exists(!1))]).then(()=>i)}function ZC(t,...e){var n,i,s;t=ft(t);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||xg(e[a])||(o=e[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(xg(e[a])){const y=e[a];e[a]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[a+1]=(i=y.error)===null||i===void 0?void 0:i.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let c,d,p;if(t instanceof _t)d=Rr(t.firestore,ao),p=Ld(t._key.path),c={next:y=>{e[a]&&e[a](tP(d,t,y))},error:e[a+1],complete:e[a+2]};else{const y=Rr(t,hr);d=Rr(y.firestore,ao),p=y._query;const _=new hf(d);c={next:k=>{e[a]&&e[a](new cw(d,_,y,k))},error:e[a+1],complete:e[a+2]},ow(t._query)}return function(_,k,N,V){const L=new Q0(V),S=new j0(k,L,N);return _.asyncQueue.enqueueAndForget(async()=>F0(await wh(_),S)),()=>{L.Za(),_.asyncQueue.enqueueAndForget(async()=>U0(await wh(_),S))}}(Xd(d),p,u,c)}function eP(t,e){return function(i,s){const o=new er;return i.asyncQueue.enqueueAndForget(async()=>EC(await xC(i),s,o)),o.promise}(Xd(t),e)}function tP(t,e,n){const i=n.docs.get(e._key),s=new hf(t);return new uw(t,s,e._key,i,new vs(n.hasPendingWrites,n.fromCache),e.converter)}function nP(){return new rf("serverTimestamp")}(function(e,n=!0){(function(s){Fi=s})(Mi),Ai(new Dr("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),u=new ao(new Z1(i.getProvider("auth-internal")),new rR(i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Jn(Gm,"4.7.3",e),Jn(Gm,"4.7.3","esm2017")})();const Lg={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0};let rc,Da,_l;try{Lg.apiKey?(rc=iv(Lg),Da=Q1(rc),_l=MC(rc)):console.warn("Firebase configuration missing. Check your .env file.")}catch(t){console.error("Firebase Initialization Error:",t)}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),An=(t,e)=>{const n=re.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:u="",children:c,...d},p)=>re.createElement("svg",{ref:p,...rP,width:s,height:s,stroke:i,strokeWidth:a?Number(o)*24/Number(s):o,className:["lucide",`lucide-${iP(t)}`,u].join(" "),...d},[...e.map(([y,_])=>re.createElement(y,_)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=An("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=An("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=An("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=An("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=An("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=An("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=An("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=An("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=An("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);src_app_jsx=r;const Th="broken-tcg-prod",bg=async(t,e="",n=null)=>"AI Error: API Key missing",dP=(t,e)=>{if(!t.length)return;const n=Object.keys(t[0]),i=[n.join(","),...t.map(a=>n.map(u=>`"${a[u]}"`).join(","))].join(`
`),s=new Blob([i],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=URL.createObjectURL(s),o.download=e,document.body.appendChild(o),o.click(),document.body.removeChild(o)};function fP({onClose:t,onSuccess:e,notify:n}){const[i,s]=re.useState("login"),[o,a]=re.useState(""),[u,c]=re.useState(""),[d,p]=re.useState(!1),y=_=>{_.preventDefault(),p(!0),setTimeout(()=>{o==="deadlybroken25@gmail.com"&&u==="Deadbroke123!@#"?(n("Access Granted"),e()):(alert("Invalid credentials"),p(!1))},800)};return x.jsx("div",{className:"fixed inset-0 z-[70] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4",children:x.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative",children:[x.jsx("button",{onClick:t,className:"absolute top-4 right-4",children:x.jsx(hP,{size:20})}),x.jsx("h2",{className:"text-2xl font-bold text-center mb-6",children:i==="login"?"Admin Login":"Recover Password"}),i==="login"?x.jsxs("form",{onSubmit:y,className:"space-y-4",children:[x.jsx("input",{type:"email",required:!0,className:"w-full p-2 border rounded",placeholder:"Email",value:o,onChange:_=>a(_.target.value)}),x.jsx("input",{type:"password",required:!0,className:"w-full p-2 border rounded",placeholder:"Password",value:u,onChange:_=>c(_.target.value)}),x.jsx("button",{disabled:d,className:"w-full bg-slate-900 text-white p-2 rounded",children:d?"...":"Login"}),x.jsx("div",{className:"text-center",children:x.jsx("button",{type:"button",onClick:()=>s("forgot"),className:"text-blue-600 text-sm",children:"Forgot Password?"})})]}):x.jsxs("div",{className:"text-center",children:[x.jsx("input",{type:"email",className:"w-full p-2 border rounded mb-4",placeholder:"Email",value:o,onChange:_=>a(_.target.value)}),x.jsx("button",{onClick:()=>{n("Reset link sent"),s("login")},className:"w-full bg-blue-600 text-white p-2 rounded",children:"Send Link"}),x.jsx("button",{onClick:()=>s("login"),className:"text-sm mt-4 text-gray-500",children:"Back"})]})]})})}function pP({settings:t,setView:e}){var s;const[n,i]=re.useState(0);return re.useEffect(()=>{var a;if(!((a=t.hotBuysImages)!=null&&a.length))return;const o=setInterval(()=>i(u=>(u+1)%t.hotBuysImages.length),1500);return()=>clearInterval(o)},[t.hotBuysImages]),x.jsxs("div",{className:"space-y-12 animate-fade-in",children:[x.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 text-white min-h-[500px] flex items-center",children:[x.jsx("img",{src:t.bannerUrl,className:"absolute inset-0 w-full h-full object-cover opacity-30",onError:o=>o.target.src="https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=2069"}),x.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center",children:[x.jsxs("div",{className:"max-w-2xl",children:[x.jsxs("h1",{className:"text-4xl md:text-6xl font-extrabold tracking-tight mb-4",children:["Turn Your Collection ",x.jsx("br",{})," Into Cash."]}),x.jsx("p",{className:"text-xl md:text-2xl text-gray-200 mb-8 font-light border-l-4 border-red-500 pl-4",children:t.promoText}),x.jsxs("button",{onClick:()=>e("sell"),className:"bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg flex items-center",children:["Start Selling Now ",x.jsx(Mg,{className:"ml-2"})]})]}),((s=t.hotBuysImages)==null?void 0:s.length)>0&&x.jsxs("div",{className:"hidden md:flex flex-col items-center justify-center",children:[x.jsxs("div",{className:"mb-4 font-bold text-yellow-400 flex text-3xl",children:[x.jsx(hw,{className:"mr-2"})," HOT BUYS"]}),x.jsx("div",{className:"relative w-64 h-[360px] bg-white/10 backdrop-blur-md rounded-xl border-4 border-yellow-400 shadow-2xl p-1",children:x.jsx("div",{className:"w-full h-full rounded-lg overflow-hidden relative bg-slate-800",children:t.hotBuysImages.map((o,a)=>x.jsx("img",{src:o,className:`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${a===n?"opacity-100":"opacity-0"}`},a))})})]})]})]}),x.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[x.jsx(cP,{className:"text-blue-600 mb-4",size:24}),x.jsx("h3",{className:"text-xl font-bold",children:"1. Upload List"}),x.jsx("p",{className:"text-gray-600",children:"Use AI Smart Paste or Scan with Camera!"})]}),x.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[x.jsx(aP,{className:"text-green-600 mb-4",size:24}),x.jsx("h3",{className:"text-xl font-bold",children:"2. We Compare"}),x.jsx("p",{className:"text-gray-600",children:"Our system checks your list against our Buying List."})]}),x.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[x.jsx(Mg,{className:"text-purple-600 mb-4",size:24}),x.jsx("h3",{className:"text-xl font-bold",children:"3. Get Paid"}),x.jsx("p",{className:"text-gray-600",children:"Ship cards and receive payment quickly."})]})]})]})}function mP({user:t,onSuccess:e,settings:n,notify:i}){const[s,o]=re.useState(1),[a,u]=re.useState({firstName:"",email:"",phone:""}),[c,d]=re.useState([{id:"init-1",name:"",set:"",number:"",condition:"NM",quantity:1}]),[p,y]=re.useState(!1),[_,k]=re.useState(!1),[N,V]=re.useState(""),[L,S]=re.useState(!1),w=()=>d([...c,{id:Date.now().toString(),name:"",set:"",number:"",condition:"NM",quantity:1}]),R=m=>{c.length>1&&d(c.filter(v=>v.id!==m))},O=(m,v,T)=>d(c.map(A=>A.id===m?{...A,[v]:T}:A)),j=async()=>{if(N.trim()){S(!0);try{const m=await bg(`Extract Pokemon cards. Return JSON array: [{name, set, number, condition, quantity}]. Text: "${N}"`,"Return JSON only."),v=JSON.parse(m.replace(/```json/g,"").replace(/```/g,"").trim());Array.isArray(v)&&(d(T=>[...T,...v.map((A,C)=>({id:`ai-${Date.now()}-${C}`,...A,quantity:A.quantity||1,condition:A.condition||"NM"}))]),i(`Extracted ${v.length} cards!`),k(!1))}catch{i("Extraction failed","error")}finally{S(!1)}}},U=(m,v)=>{const T=m.target.files[0];if(!T)return;const A=new FileReader;A.onloadend=async()=>{try{const C=await bg("Identify card: name, set, number, condition. Return JSON.","JSON only",A.result.split(",")[1]),I=JSON.parse(C.replace(/```json/g,"").replace(/```/g,"").trim());d(at=>at.map(Pt=>Pt.id===v?{...Pt,...I}:Pt)),i("Card Scanned!")}catch{i("Scan failed","error")}},A.readAsDataURL(T)},E=async()=>{if(!a.firstName||!a.email)return alert("Name/Email required");y(!0),await JC(Eh(_l,"artifacts",Th,"public","data","submissions"),{customer:a,cards:c,status:"pending",submittedAt:nP()}),y(!1),e()};return x.jsxs("div",{className:"max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in relative",children:[_&&x.jsx("div",{className:"absolute inset-0 z-50 bg-white/95 flex flex-col items-center justify-center p-8",children:x.jsxs("div",{className:"w-full max-w-xl bg-white border p-6 rounded shadow-2xl",children:[x.jsx("h3",{className:"text-xl font-bold mb-4",children:"AI Smart Paste"}),x.jsx("textarea",{className:"w-full h-40 border p-2 rounded mb-4",placeholder:"Paste list here...",value:N,onChange:m=>V(m.target.value)}),x.jsxs("div",{className:"flex gap-2 justify-end",children:[x.jsx("button",{onClick:()=>k(!1),className:"px-4 py-2 bg-gray-200 rounded",children:"Cancel"}),x.jsx("button",{onClick:j,disabled:L,className:"px-4 py-2 bg-purple-600 text-white rounded",children:L?"...":"Extract"})]})]})}),x.jsxs("div",{className:"bg-slate-800 p-6 text-white flex justify-between items-center",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"text-2xl font-bold",children:"Submit Buy List"}),x.jsx("p",{className:"text-slate-300 text-sm",children:"70-90% Market Price"}),x.jsx("p",{className:"text-yellow-400 text-xs font-bold mt-1",children:"Use AI Paste for TCG Player lists!"})]}),x.jsxs("div",{className:"text-sm",children:["Step ",s," of 2"]})]}),s===1?x.jsxs("div",{className:"p-8 space-y-4",children:[x.jsx("input",{className:"w-full border p-2 rounded",placeholder:"First Name",value:a.firstName,onChange:m=>u({...a,firstName:m.target.value})}),x.jsx("input",{className:"w-full border p-2 rounded",placeholder:"Email",value:a.email,onChange:m=>u({...a,email:m.target.value})}),x.jsx("input",{className:"w-full border p-2 rounded",placeholder:"Phone",value:a.phone,onChange:m=>u({...a,phone:m.target.value})}),x.jsx("div",{className:"flex justify-end",children:x.jsx("button",{onClick:()=>o(2),className:"bg-slate-800 text-white px-6 py-2 rounded",children:"Next"})})]}):x.jsxs("div",{className:"p-8",children:[x.jsxs("div",{className:"flex justify-between mb-4",children:[x.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-2 text-purple-700 font-bold",children:[x.jsx(hw,{size:16})," AI Paste"]}),x.jsx("button",{onClick:w,className:"text-blue-600 font-bold",children:"+ Add Row"})]}),x.jsx("div",{className:"max-h-[500px] overflow-y-auto border rounded mb-4",children:x.jsxs("table",{className:"w-full text-sm",children:[x.jsx("thead",{className:"bg-gray-50 sticky top-0",children:x.jsxs("tr",{children:[x.jsx("th",{className:"p-2",children:"Scan"}),x.jsx("th",{className:"p-2",children:"Name"}),x.jsx("th",{className:"p-2",children:"Set"}),x.jsx("th",{className:"p-2",children:"#"}),x.jsx("th",{className:"p-2",children:"Qty"}),x.jsx("th",{className:"p-2",children:"Cond"}),x.jsx("th",{className:"p-2"})]})}),x.jsx("tbody",{children:c.map(m=>x.jsxs("tr",{className:"border-t",children:[x.jsx("td",{className:"p-2",children:x.jsxs("label",{className:"cursor-pointer",children:[x.jsx(sP,{size:16}),x.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:v=>U(v,m.id)})]})}),x.jsx("td",{className:"p-2",children:x.jsx("input",{className:"w-full",value:m.name,onChange:v=>O(m.id,"name",v.target.value),placeholder:"Name"})}),x.jsx("td",{className:"p-2",children:x.jsx("input",{className:"w-full",value:m.set,onChange:v=>O(m.id,"set",v.target.value),placeholder:"Set"})}),x.jsx("td",{className:"p-2",children:x.jsx("input",{className:"w-full",value:m.number,onChange:v=>O(m.id,"number",v.target.value),placeholder:"#"})}),x.jsx("td",{className:"p-2",children:x.jsx("input",{type:"number",className:"w-full",value:m.quantity,onChange:v=>O(m.id,"quantity",v.target.value)})}),x.jsx("td",{className:"p-2",children:x.jsxs("select",{value:m.condition,onChange:v=>O(m.id,"condition",v.target.value),children:[x.jsx("option",{children:"NM"}),x.jsx("option",{children:"LP"}),x.jsx("option",{children:"MP"}),x.jsx("option",{children:"HP"}),x.jsx("option",{children:"DMG"})]})}),x.jsx("td",{className:"p-2",children:x.jsx("button",{onClick:()=>R(m.id),className:"text-red-500",children:x.jsx(uP,{size:16})})})]},m.id))})]})}),x.jsxs("div",{className:"flex justify-between",children:[x.jsx("button",{onClick:()=>o(1),className:"text-gray-600",children:"Back"}),x.jsx("button",{onClick:E,disabled:p,className:"bg-red-600 text-white px-6 py-2 rounded",children:p?"...":"Submit"})]})]})]})}function gP({setView:t}){return x.jsxs("div",{className:"p-12 text-center",children:[x.jsx(oP,{size:48,className:"mx-auto text-green-600 mb-4"}),x.jsx("h2",{className:"text-2xl font-bold",children:"Received!"}),x.jsx("button",{onClick:()=>t("home"),className:"mt-8 bg-slate-800 text-white px-6 py-2 rounded",children:"Home"})]})}function yP({user:t,settings:e,setSettings:n,notify:i,onExport:s}){const[o,a]=re.useState("submissions"),[u,c]=re.useState([]),[d,p]=re.useState([]),[y,_]=re.useState(null),[k,N]=re.useState(!1);re.useEffect(()=>{const L=Dg(Eh(_l,"artifacts",Th,"public","data","submissions"),KC("submittedAt","desc"));return ZC(L,S=>p(S.docs.map(w=>({id:w.id,...w.data()}))))},[]),re.useEffect(()=>{(async()=>{const S=Dg(Eh(_l,"artifacts",Th,"public","data","buylist_chunks")),w=await XC(S);let R=[];w.forEach(O=>R.push(...O.data().data)),c(R)})()},[]);const V=async L=>{const S=L.target.files[0];if(!S)return;N(!0);const w=new FileReader;w.onload=async R=>{const O=R.target.result.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/).filter(m=>m.trim()),j=O[0].split(",").map(m=>m.toLowerCase().replace(/"/g,"")),E=O.slice(1).map(m=>{const v=m.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(A=>A.trim().replace(/^"|"$/g,"")),T={};return j.forEach((A,C)=>T[A]=v[C]||""),T}).map(m=>{let v=m.name||m["card name"]||m["product name"]||"",T=m.set||m["set name"]||m.expansion||"";if(!T&&v){const C=v.match(/^(.*)\s\[(.*)\]$/);C&&(v=C[1],T=C[2])}let A=parseFloat((m.buy_price||m["market price"]||"0").replace(/[^0-9.]/g,""))||0;return{name:v,set:T,number:m.number||"",condition:"NM",price:(A*.75).toFixed(2)}}).filter(m=>m.name);c(E),i(`Parsed ${E.length} items (Preview Mode)`),N(!1)},w.readAsText(S)};return x.jsxs("div",{className:"flex h-[600px] bg-white rounded shadow border",children:[x.jsxs("div",{className:"w-48 bg-gray-50 p-4 border-r",children:[x.jsx("button",{onClick:()=>a("submissions"),className:"block w-full text-left p-2 font-bold",children:"Submissions"}),x.jsx("button",{onClick:()=>a("buylist"),className:"block w-full text-left p-2",children:"Buy List"}),x.jsx("button",{onClick:()=>a("settings"),className:"block w-full text-left p-2",children:"Settings"})]}),x.jsxs("div",{className:"flex-1 p-8 overflow-auto",children:[o==="submissions"&&!y&&d.map(L=>x.jsxs("div",{onClick:()=>_(L),className:"border p-4 mb-2 cursor-pointer hover:bg-gray-50 rounded",children:[x.jsx("div",{className:"font-bold",children:L.customer.firstName}),x.jsxs("div",{className:"text-sm text-gray-500",children:[L.cards.length," Cards - ",L.status]})]},L.id)),o==="submissions"&&y&&x.jsxs("div",{children:[x.jsx("button",{onClick:()=>_(null),className:"mb-4 text-sm",children:"Back"}),x.jsx("h2",{className:"font-bold text-xl mb-4",children:y.customer.firstName}),x.jsx("div",{children:"Matching Logic Placeholder (See full source)"})]}),o==="buylist"&&x.jsxs("div",{children:[x.jsxs("h2",{className:"font-bold mb-4",children:["Master List (",u.length,")"]}),x.jsx("input",{type:"file",onChange:V})]}),o==="settings"&&x.jsx("div",{children:"Settings Placeholder"})]})]})}function _P(){const[t,e]=re.useState(null),[n,i]=re.useState("home"),[s,o]=re.useState({bannerUrl:"",logoUrl:"",hotBuysImages:[],promoText:"We buy cards!",businessName:"Broken TCG"}),[a,u]=re.useState(!1),[c,d]=re.useState(!1),[p,y]=re.useState(null);return re.useEffect(()=>{if(Da)return DA(Da).catch(console.error),FA(Da,e)},[]),t?x.jsxs("div",{className:"min-h-screen bg-gray-50 font-sans text-slate-900",children:[p&&x.jsx("div",{className:"fixed top-4 right-4 z-50 bg-slate-800 text-white px-6 py-3 rounded shadow-xl",children:p.msg}),c&&x.jsx(fP,{onClose:()=>d(!1),onSuccess:()=>{u(!0),d(!1),i("admin")},notify:_=>y({msg:_})}),x.jsxs("nav",{className:"sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center px-4 justify-between",children:[x.jsx("div",{className:"font-bold text-xl cursor-pointer",onClick:()=>i("home"),children:s.businessName}),x.jsxs("div",{className:"flex gap-4 items-center",children:[x.jsx("button",{onClick:()=>i("home"),children:"Home"}),x.jsx("button",{onClick:()=>i("sell"),children:"Sell Cards"}),x.jsx("button",{onClick:()=>a?u(!1):d(!0),children:x.jsx(lP,{size:16})})]})]}),x.jsxs("main",{className:"max-w-7xl mx-auto px-4 py-8",children:[n==="home"&&x.jsx(pP,{settings:s,setView:i}),n==="sell"&&x.jsx(mP,{user:t,settings:s,onSuccess:()=>i("success"),notify:(_,k)=>y({msg:_,type:k})}),n==="success"&&x.jsx(gP,{setView:i}),n==="admin"&&a&&x.jsx(yP,{user:t,settings:s,setSettings:o,notify:_=>y({msg:_}),onExport:dP})]})]}):x.jsx("div",{className:"flex h-screen items-center justify-center text-gray-500",children:"Loading..."})}ic.createRoot(document.getElementById("root")).render(x.jsx(sE.StrictMode,{children:x.jsx(_P,{})}));
