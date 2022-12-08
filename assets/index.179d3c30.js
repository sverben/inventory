(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Kr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?us(r):Kr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Q(e))return e;if(V(e))return e}}const ls=/;(?![^(]*\))/g,fs=/:([^]+)/,cs=/\/\*.*?\*\//gs;function us(e){const t={};return e.replace(cs,"").split(ls).forEach(n=>{if(n){const r=n.split(fs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Hn(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Hn(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ds="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ms=Wr(ds);function Ri(e){return!!e||e===""}const Na=e=>Q(e)?e:e==null?"":F(e)||V(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Li,2):String(e),Li=(e,t)=>t&&t.__v_isRef?Li(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!F(t)&&!zi(t)?String(t):t,K={},_t=[],Ee=()=>{},ps=()=>!1,hs=/^on[^a-z]/,Bn=e=>hs.test(e),qr=e=>e.startsWith("onUpdate:"),le=Object.assign,Xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gs=Object.prototype.hasOwnProperty,D=(e,t)=>gs.call(e,t),F=Array.isArray,wt=e=>Yn(e)==="[object Map]",ji=e=>Yn(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",Vr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",$i=e=>V(e)&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Yn=e=>Di.call(e),vs=e=>Yn(e).slice(8,-1),zi=e=>Yn(e)==="[object Object]",Jr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bs=/-(\w)/g,Re=Wn(e=>e.replace(bs,(t,n)=>n?n.toUpperCase():"")),ys=/\B([A-Z])/g,St=Wn(e=>e.replace(ys,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=Wn(e=>e?`on${Kn(e)}`:""),Tn=(e,t)=>!Object.is(e,t),An=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Mn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const xs=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class _s{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function ws(e,t=Te){t&&t.active&&t.effects.push(e)}const Gr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&Ge)>0,Hi=e=>(e.n&Ge)>0,ks=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},As=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Hi(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},yr=new WeakMap;let jt=0,Ge=1;const xr=30;let we;const ut=Symbol(""),_r=Symbol("");class Zr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ws(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Xe=!0,Ge=1<<++jt,jt<=xr?ks(this):Fa(this),this.fn()}finally{jt<=xr&&As(this),Ge=1<<--jt,we=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Bi=[];function Tt(){Bi.push(Xe),Xe=!1}function Nt(){const e=Bi.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&we){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Gr()),Yi(a)}}function Yi(e,t){let n=!1;jt<=xr?Hi(e)||(e.n|=Ge,n=!Ui(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function De(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Mn(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Jr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),wt(e)&&s.push(o.get(_r)));break;case"delete":F(e)||(s.push(o.get(ut)),wt(e)&&s.push(o.get(_r)));break;case"set":wt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&wr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);wr(Gr(l))}}function wr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ra(r);for(const r of n)r.computed||Ra(r)}function Ra(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Os=Wr("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),Es=Qr(),Ps=Qr(!1,!0),Cs=Qr(!0),La=Is();function Is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=B(this)[t].apply(this,n);return Nt(),r}}),e}function Qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ws:Ji:t?Vi:Xi).get(r))return r;const o=F(r);if(!e&&o&&D(La,a))return Reflect.get(La,a,i);const s=Reflect.get(r,a,i);return(Vr(a)?Wi.has(a):Os(a))||(e||me(r,"get",a),t)?s:se(s)?o&&Jr(a)?s:s.value:V(s)?e?Gi(s):na(s):s}}const Ss=Ki(),Ts=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&se(o)&&!se(a))return!1;if(!e&&(!kr(a)&&!Yt(a)&&(o=B(o),a=B(a)),!F(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=F(n)&&Jr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Tn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ns(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ms(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Wi.has(t))&&me(e,"has",t),n}function Fs(e){return me(e,"iterate",F(e)?"length":ut),Reflect.ownKeys(e)}const qi={get:Es,set:Ss,deleteProperty:Ns,has:Ms,ownKeys:Fs},Rs={get:Cs,set(e,t){return!0},deleteProperty(e,t){return!0}},Ls=le({},qi,{get:Ps,set:Ts}),ea=e=>e,qn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=qn(a),s=r?ea:n?ia:aa;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ut),Reflect.get(e,"size",e)}function ja(e){e=B(e);const t=B(this);return qn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function $a(e,t){t=B(t);const n=B(this),{has:r,get:a}=qn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Da(e){const t=B(this),{has:n,get:r}=qn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function za(){const e=B(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?ea:e?ia:aa;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ea:t?ia:aa;return!t&&me(i,"iterate",l?_r:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function js(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:ja,set:$a,delete:Da,clear:za,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:ja,set:$a,delete:Da,clear:za,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[$s,Ds,zs,Us]=js();function ta(e,t){const n=t?e?Us:zs:e?Ds:$s;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Hs={get:ta(!1,!1)},Bs={get:ta(!1,!0)},Ys={get:ta(!0,!1)},Xi=new WeakMap,Vi=new WeakMap,Ji=new WeakMap,Ws=new WeakMap;function Ks(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qs(e){return e.__v_skip||!Object.isExtensible(e)?0:Ks(vs(e))}function na(e){return Yt(e)?e:ra(e,!1,qi,Hs,Xi)}function Xs(e){return ra(e,!1,Ls,Bs,Vi)}function Gi(e){return ra(e,!0,Rs,Ys,Ji)}function ra(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=qs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Yt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function Zi(e){return kt(e)||Yt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Qi(e){return Nn(e,"__v_skip",!0),e}const aa=e=>V(e)?na(e):e,ia=e=>V(e)?Gi(e):e;function Vs(e){Xe&&we&&(e=B(e),Yi(e.dep||(e.dep=Gr())))}function Js(e,t){e=B(e),e.dep&&wr(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function Gs(e){return se(e)?e.value:e}const Zs={get:(e,t,n)=>Gs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return kt(e)?e:new Proxy(e,Zs)}var to;class Qs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[to]=!1,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,Js(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Vs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}to="__v_isReadonly";function el(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new Qs(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Xn(i,t,n)}return a}function Pe(e,t,n,r){if(L(e)){const i=Ve(e,t,n,r);return i&&$i(i)&&i.catch(o=>{Xn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Xn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,o,s]);return}}tl(e,n,a,r)}function tl(e,t,n,r=!0){console.error(e)}let Wt=!1,Ar=!1;const re=[];let Me=0;const At=[];let $e=null,ot=0;const no=Promise.resolve();let oa=null;function nl(e){const t=oa||no;return e?t.then(this?e.bind(this):e):t}function rl(e){let t=Me+1,n=re.length;for(;t<n;){const r=t+n>>>1;Kt(re[r])<e?t=r+1:n=r}return t}function sa(e){(!re.length||!re.includes(e,Wt&&e.allowRecurse?Me+1:Me))&&(e.id==null?re.push(e):re.splice(rl(e.id),0,e),ro())}function ro(){!Wt&&!Ar&&(Ar=!0,oa=no.then(io))}function al(e){const t=re.indexOf(e);t>Me&&re.splice(t,1)}function il(e){F(e)?At.push(...e):(!$e||!$e.includes(e,e.allowRecurse?ot+1:ot))&&At.push(e),ro()}function Ua(e,t=Wt?Me+1:0){for(;t<re.length;t++){const n=re[t];n&&n.pre&&(re.splice(t,1),t--,n())}}function ao(e){if(At.length){const t=[...new Set(At)];if(At.length=0,$e){$e.push(...t);return}for($e=t,$e.sort((n,r)=>Kt(n)-Kt(r)),ot=0;ot<$e.length;ot++)$e[ot]();$e=null,ot=0}}const Kt=e=>e.id==null?1/0:e.id,ol=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function io(e){Ar=!1,Wt=!0,re.sort(ol);const t=Ee;try{for(Me=0;Me<re.length;Me++){const n=re[Me];n&&n.active!==!1&&Ve(n,null,14)}}finally{Me=0,re.length=0,ao(),Wt=!1,oa=null,(re.length||At.length)&&io()}}function sl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(k=>Q(k)?k.trim():k)),m&&(a=n.map(Mn))}let s,l=r[s=fr(t)]||r[s=fr(Re(t))];!l&&i&&(l=r[s=fr(St(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function oo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=oo(c,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):le(o,i),V(e)&&r.set(e,o),o)}function Vn(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,St(t))||D(e,t))}let ve=null,Jn=null;function Fn(e){const t=ve;return ve=e,Jn=e&&e.type.__scopeId||null,t}function so(e){Jn=e}function lo(){Jn=null}function ll(e,t=ve,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&Ja(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:N}=e;let z,_;const P=Fn(e);try{if(n.shapeFlag&4){const j=a||r;z=Ne(d.call(j,j,m,i,k,v,R)),_=l}else{const j=t;z=Ne(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),_=t.props?l:fl(l)}}catch(j){zt.length=0,Xn(j,e,1),z=ae(mt)}let E=z;if(_&&N!==!1){const j=Object.keys(_),{shapeFlag:U}=E;j.length&&U&7&&(o&&j.some(qr)&&(_=cl(_,o)),E=Pt(E,_))}return n.dirs&&(E=Pt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),z=E,Fn(P),z}const fl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},cl=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ul(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Vn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Vn(n,i))return!0}return!1}function dl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ml=e=>e.__isSuspense;function pl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):il(e)}function hl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){const r=te||ve;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const mn={};function En(e,t,n){return fo(e,t,n)}function fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=te;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=kr(e)):kt(e)?(l=()=>e,r=!0):F(e)?(d=!0,c=e.some(E=>kt(E)||kr(E)),l=()=>e.map(E=>{if(se(E))return E.value;if(kt(E))return lt(E);if(L(E))return Ve(E,s,2)})):L(e)?t?l=()=>Ve(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Ee,t&&r){const E=l;l=()=>lt(E())}let m,v=E=>{m=_.onStop=()=>{Ve(E,s,4)}},k;if(Xt)if(v=Ee,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=mf();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ee;let R=d?new Array(e.length).fill(mn):mn;const N=()=>{if(!!_.active)if(t){const E=_.run();(r||c||(d?E.some((j,U)=>Tn(j,R[U])):Tn(E,R)))&&(m&&m(),Pe(t,s,3,[E,R===mn?void 0:d&&R[0]===mn?[]:R,v]),R=E)}else _.run()};N.allowRecurse=!!t;let z;a==="sync"?z=N:a==="post"?z=()=>ue(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),z=()=>sa(N));const _=new Zr(l,z);t?n?N():R=_.run():a==="post"?ue(_.run.bind(_),s&&s.suspense):_.run();const P=()=>{_.stop(),s&&s.scope&&Xr(s.scope.effects,_)};return k&&k.push(P),P}function gl(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?co(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;Ct(this);const s=fo(a,i.bind(r),n);return o?Ct(o):dt(),s}function co(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))lt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(ji(e)||wt(e))e.forEach(n=>{lt(n,t)});else if(zi(e))for(const n in e)lt(e[n],t);return e}function la(e){return L(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function vl(e,t){mo(e,"a",t)}function bl(e,t){mo(e,"da",t)}function mo(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)uo(a.parent.vnode)&&yl(r,t,n,a),a=a.parent}}function yl(e,t,n,r){const a=Gn(t,e,r,!0);po(()=>{Xr(r[t],a)},n)}function Gn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),Ct(n);const s=Pe(t,n,e,o);return dt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=te)=>(!Xt||e==="sp")&&Gn(e,(...r)=>t(...r),n),xl=Be("bm"),_l=Be("m"),wl=Be("bu"),kl=Be("u"),Al=Be("bum"),po=Be("um"),Ol=Be("sp"),El=Be("rtg"),Pl=Be("rtc");function Cl(e,t=te){Gn("ec",e,t)}function Il(e,t){const n=ve;if(n===null)return e;const r=er(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Pe(l,n,8,[e.el,s,e,t]),Nt())}}const ho="components";function Rn(e,t){return Tl(ho,e,!0,t)||e}const Sl=Symbol();function Tl(e,t,n=!0,r=!1){const a=ve||te;if(a){const i=a.type;if(e===ho){const s=cf(i,!1);if(s&&(s===t||s===Re(t)||s===Kn(Re(t))))return i}const o=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!o&&r?i:o}}function Ba(e,t){return e&&(e[t]||e[Re(t)]||e[Kn(Re(t))])}function Nl(e,t,n,r){let a;const i=n&&n[r];if(F(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Or=e=>e?Po(e)?er(e)||e.proxy:Or(e.parent):null,Dt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>fa(e),$forceUpdate:e=>e.f||(e.f=()=>sa(e.update)),$nextTick:e=>e.n||(e.n=nl.bind(e.proxy)),$watch:e=>gl.bind(e)}),ur=(e,t)=>e!==K&&!e.__isScriptSetup&&D(e,t),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ur(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&D(c,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const d=Dt[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,D(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ur(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||ur(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(Dt,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Er=!0;function Fl(e){const t=fa(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:N,deactivated:z,beforeDestroy:_,beforeUnmount:P,destroyed:E,unmounted:j,render:U,renderTracked:fe,renderTriggered:ne,errorCaptured:be,serverPrefetch:he,expose:Le,inheritAttrs:Ft,components:rn,directives:an,filters:or}=t;if(c&&Rl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const Y=o[J];L(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=na(J))}if(Er=!0,i)for(const J in i){const Y=i[J],tt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ee,on=!L(Y)&&L(Y.set)?Y.set.bind(n):Ee,nt=ge({get:tt,set:on});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ce=>nt.value=Ce})}if(s)for(const J in s)go(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{hl(Y,J[Y])})}d&&Ya(d,e,"c");function ie(J,Y){F(Y)?Y.forEach(tt=>J(tt.bind(n))):Y&&J(Y.bind(n))}if(ie(xl,m),ie(_l,v),ie(wl,k),ie(kl,R),ie(vl,N),ie(bl,z),ie(Cl,be),ie(Pl,fe),ie(El,ne),ie(Al,P),ie(po,j),ie(Ol,he),F(Le))if(Le.length){const J=e.exposed||(e.exposed={});Le.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:tt=>n[Y]=tt})})}else e.exposed||(e.exposed={});U&&e.render===Ee&&(e.render=U),Ft!=null&&(e.inheritAttrs=Ft),rn&&(e.components=rn),an&&(e.directives=an)}function Rl(e,t,n=Ee,r=!1){F(e)&&(e=Pr(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=On(i.from||a,i.default,!0):o=On(i.from||a):o=On(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ya(e,t,n){Pe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function go(e,t,n,r){const a=r.includes(".")?co(n,r):()=>n[r];if(Q(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(V(e))if(F(e))e.forEach(i=>go(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),V(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Wa,props:it,emits:it,methods:it,computed:it,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:it,directives:it,watch:$l,provide:Wa,inject:jl};function Wa(e,t){return t?e?function(){return le(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function jl(e,t){return it(Pr(e),Pr(t))}function Pr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?le(le(Object.create(null),e),t):t}function $l(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function Dl(e,t,n,r=!1){const a={},i={};Nn(i,Qn,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function zl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Vn(e.emitsOptions,v))continue;const k=t[v];if(l)if(D(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=Re(v);a[R]=Cr(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{vo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=St(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(kn(l))continue;const c=t[l];let d;a&&D(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Vn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!D(c,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=bo(m,t,!0);le(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,_t),_t;if(F(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Ka(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Re(d);if(Ka(m)){const v=i[d],k=o[m]=F(v)||L(v)?{type:v}:Object.assign({},v);if(k){const R=Va(Boolean,k.type),N=Va(String,k.type);k[0]=R>-1,k[1]=N<0||R<N,(R>-1||D(k,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Ka(e){return e[0]!=="$"}function qa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xa(e,t){return qa(e)===qa(t)}function Va(e,t){return F(t)?t.findIndex(n=>Xa(n,e)):L(t)&&Xa(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",ca=e=>F(e)?e.map(Ne):[Ne(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=ll((...a)=>ca(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(L(i))t[a]=Ul(a,i,r);else if(i!=null){const o=ca(i);t[a]=()=>o}}},_o=(e,t)=>{const n=ca(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Nn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);Nn(e.slots,Qn,1)},Bl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function wo(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Wl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=wo(),o=new Set;let s=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ae(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,er(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Ir(e,t,n,r,a=!1){if(F(e)){e.forEach((v,k)=>Ir(v,t&&(F(t)?t[k]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,D(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Ve(l,s,12,[o,d]);else{const v=Q(l),k=se(l);if(v||k){const R=()=>{if(e.f){const N=v?D(m,l)?m[l]:d[l]:l.value;a?F(N)&&Xr(N,i):F(N)?N.includes(i)||N.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,ue(R,n)):R()}}}const ue=pl;function Kl(e){return ql(e)}function ql(e,t){const n=xs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ee,insertStaticContent:R}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(g=sn(f),Ce(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Zn:z(f,u,p,g);break;case mt:_(f,u,p,g);break;case dr:f==null&&P(u,p,g,A);break;case xe:rn(f,u,p,g,h,x,A,y,w);break;default:C&1?U(f,u,p,g,h,x,A,y,w):C&6?an(f,u,p,g,h,x,A,y,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,w,gt)}S!=null&&h&&Ir(S,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},_=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},P=(f,u,p,g)=>{[f.el,f.anchor]=R(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},j=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?fe(u,p,g,h,x,A,y,w):he(f,u,h,x,A,y,w)},fe=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:S,props:C,shapeFlag:T,transition:M,dirs:$}=f;if(w=f.el=o(f.type,x,C&&C.is,C),T&8?d(w,f.children):T&16&&be(f.children,w,null,g,h,x&&S!=="foreignObject",A,y),$&&rt(f,null,g,"created"),C){for(const H in C)H!=="value"&&!kn(H)&&i(w,H,null,C[H],x,f.children,g,h,je);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Se(b,g,f)}ne(w,f,f.scopeId,A,g),$&&rt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;W&&M.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||W||$)&&ue(()=>{b&&Se(b,g,f),W&&M.enter(w),$&&rt(f,null,g,"mounted")},h)},ne=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ne(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=y?qe(f[b]):Ne(f[b]);N(null,S,u,p,g,h,x,A,y)}},he=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const C=f.props||K,T=u.props||K;let M;p&&at(p,!1),(M=T.onVnodeBeforeUpdate)&&Se(M,p,u,f),S&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const $=h&&u.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,$,x):A||Y(f,u,y,null,p,g,$,x,!1),w>0){if(w&16)Ft(y,u,C,T,p,g,h);else if(w&2&&C.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",C.style,T.style,h),w&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Z=W[H],ye=C[Z],vt=T[Z];(vt!==ye||Z==="value")&&i(y,Z,ye,vt,h,f.children,p,g,je)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Ft(y,u,C,T,p,g,h);((M=T.onVnodeUpdated)||S)&&ue(()=>{M&&Se(M,p,u,f),S&&rt(u,f,p,"updated")},g)},Le=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],S=w.el&&(w.type===xe||!Lt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,S,null,g,h,x,A,!0)}},Ft=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==K)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(kn(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:M}=u;M&&(y=y?y.concat(M):M),f==null?(r(b,p,g),r(S,p,g),be(u.children,p,S,h,x,A,y,w)):C>0&&C&64&&T&&f.dynamicChildren?(Le(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&ko(f,u,!0)):Y(f,u,p,S,h,x,A,y,w)},an=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):or(u,p,g,h,x,A,w):Ea(f,u,w)},or=(f,u,p,g,h,x,A)=>{const y=f.component=af(f,g,h);if(uo(f)&&(y.ctx.renderer=gt),of(y),y.asyncDep){if(h&&h.registerDep(y,ie),!f.el){const w=y.subTree=ae(mt);_(null,w,u,p)}return}ie(y,f,u,p,h,x,A)},Ea=(f,u,p)=>{const g=u.component=f.component;if(ul(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,al(g.update),g.update();else u.el=f.el,g.vnode=u},ie=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:M,vnode:$}=f,W=S,H;at(f,!1),S?(S.el=$.el,J(f,S,A)):S=$,C&&An(C),(H=S.props&&S.props.onVnodeBeforeUpdate)&&Se(H,M,S,$),at(f,!0);const Z=cr(f),ye=f.subTree;f.subTree=Z,N(ye,Z,m(ye.el),sn(ye),f,h,x),S.el=Z.el,W===null&&dl(f,Z.el),T&&ue(T,h),(H=S.props&&S.props.onVnodeUpdated)&&ue(()=>Se(H,M,S,$),h)}else{let S;const{el:C,props:T}=u,{bm:M,m:$,parent:W}=f,H=Pn(u);if(at(f,!1),M&&An(M),!H&&(S=T&&T.onVnodeBeforeMount)&&Se(S,W,u),at(f,!0),C&&lr){const Z=()=>{f.subTree=cr(f),lr(C,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=cr(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if($&&ue($,h),!H&&(S=T&&T.onVnodeMounted)){const Z=u;ue(()=>Se(S,W,Z),h)}(u.shapeFlag&256||W&&Pn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Zr(y,()=>sa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,at(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,zl(f,u.props,g,p),Bl(f,u.children,p),Tt(),Ua(),Nt()},Y=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:M}=u;if(T>0){if(T&128){on(b,C,p,g,h,x,A,y,w);return}else if(T&256){tt(b,C,p,g,h,x,A,y,w);return}}M&8?(S&16&&je(b,h,x),C!==b&&d(p,C)):S&16?M&16?on(b,C,p,g,h,x,A,y,w):je(b,h,x,!0):(S&8&&d(p,""),M&16&&be(C,p,g,h,x,A,y,w))},tt=(f,u,p,g,h,x,A,y,w)=>{f=f||_t,u=u||_t;const b=f.length,S=u.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const M=u[T]=w?qe(u[T]):Ne(u[T]);N(f[T],M,p,null,h,x,A,y,w)}b>S?je(f,h,x,!0,!1,C):be(u,p,g,h,x,A,y,w,C)},on=(f,u,p,g,h,x,A,y,w)=>{let b=0;const S=u.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const M=f[b],$=u[b]=w?qe(u[b]):Ne(u[b]);if(Lt(M,$))N(M,$,p,null,h,x,A,y,w);else break;b++}for(;b<=C&&b<=T;){const M=f[C],$=u[T]=w?qe(u[T]):Ne(u[T]);if(Lt(M,$))N(M,$,p,null,h,x,A,y,w);else break;C--,T--}if(b>C){if(b<=T){const M=T+1,$=M<S?u[M].el:g;for(;b<=T;)N(null,u[b]=w?qe(u[b]):Ne(u[b]),p,$,h,x,A,y,w),b++}}else if(b>T)for(;b<=C;)Ce(f[b],h,x,!0),b++;else{const M=b,$=b,W=new Map;for(b=$;b<=T;b++){const de=u[b]=w?qe(u[b]):Ne(u[b]);de.key!=null&&W.set(de.key,b)}let H,Z=0;const ye=T-$+1;let vt=!1,Ia=0;const Rt=new Array(ye);for(b=0;b<ye;b++)Rt[b]=0;for(b=M;b<=C;b++){const de=f[b];if(Z>=ye){Ce(de,h,x,!0);continue}let Ie;if(de.key!=null)Ie=W.get(de.key);else for(H=$;H<=T;H++)if(Rt[H-$]===0&&Lt(de,u[H])){Ie=H;break}Ie===void 0?Ce(de,h,x,!0):(Rt[Ie-$]=b+1,Ie>=Ia?Ia=Ie:vt=!0,N(de,u[Ie],p,null,h,x,A,y,w),Z++)}const Sa=vt?Xl(Rt):_t;for(H=Sa.length-1,b=ye-1;b>=0;b--){const de=$+b,Ie=u[de],Ta=de+1<S?u[de+1].el:g;Rt[b]===0?N(null,Ie,p,Ta,h,x,A,y,w):vt&&(H<0||b!==Sa[H]?nt(Ie,p,Ta,2):H--)}}},nt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,gt);return}if(A===xe){r(x,u,p);for(let C=0;C<w.length;C++)nt(w[C],u,p,g);r(f.anchor,u,p);return}if(A===dr){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:C,delayLeave:T,afterLeave:M}=y,$=()=>r(x,u,p),W=()=>{C(x,()=>{$(),M&&M()})};T?T(x,$,W):W()}else r(x,u,p)},Ce=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Ir(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const M=S&1&&T,$=!Pn(f);let W;if($&&(W=A&&A.onVnodeBeforeUnmount)&&Se(W,u,f),S&6)ss(f.component,p,g);else{if(S&128){f.suspense.unmount(p,g);return}M&&rt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,gt,g):b&&(x!==xe||C>0&&C&64)?je(b,u,p,!1,!0):(x===xe&&C&384||!h&&S&16)&&je(w,u,p),g&&Pa(f)}($&&(W=A&&A.onVnodeUnmounted)||M)&&ue(()=>{W&&Se(W,u,f),M&&rt(f,null,u,"unmounted")},p)},Pa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){os(p,g);return}if(u===dr){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},os=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ss=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&An(g),h.stop(),x&&(x.active=!1,Ce(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ce(f[A],u,p,g,h)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ca=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ua(),ao(),u._vnode=f},gt={p:N,um:Ce,m:nt,r:Pa,mt:or,mc:be,pc:Y,pbc:Le,n:sn,o:e};let sr,lr;return t&&([sr,lr]=t(gt)),{render:Ca,hydrate:sr,createApp:Wl(Ca,sr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ko(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||ko(o,s)),s.type===Zn&&(s.el=o.el)}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,xe=Symbol(void 0),Zn=Symbol(void 0),mt=Symbol(void 0),dr=Symbol(void 0),zt=[];let Ae=null;function Je(e=!1){zt.push(Ae=e?null:[])}function Jl(){zt.pop(),Ae=zt[zt.length-1]||null}let qt=1;function Ja(e){qt+=e}function Ao(e){return e.dynamicChildren=qt>0?Ae||_t:null,Jl(),qt>0&&Ae&&Ae.push(e),e}function Et(e,t,n,r,a,i){return Ao(_e(e,t,n,r,a,i,!0))}function Oo(e,t,n,r,a){return Ao(ae(e,t,n,r,a,!0))}function Sr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Eo=({key:e})=>e!=null?e:null,Cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||se(e)||L(e)?{i:ve,r:e,k:t,f:!!n}:e:null;function _e(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eo(t),ref:t&&Cn(t),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ve};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),qt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const ae=Gl;function Gl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sl)&&(e=mt),Sr(e)){const s=Pt(e,t,!0);return n&&ua(s,n),qt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=Hn(s)),V(l)&&(Zi(l)&&!F(l)&&(l=le({},l)),t.style=Kr(l))}const o=Q(e)?1:ml(e)?128:Vl(e)?64:V(e)?4:L(e)?2:0;return _e(e,t,n,r,a,o,i,!0)}function Zl(e){return e?Zi(e)||Qn in e?le({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Eo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Ql(e=" ",t=0){return ae(Zn,null,e,t)}function ef(e="",t=!1){return t?(Je(),Oo(mt,null,e)):ae(mt,null,e)}function Ne(e){return e==null||typeof e=="boolean"?ae(mt):F(e)?ae(xe,null,e.slice()):typeof e=="object"?qe(e):ae(Zn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Qn in t)?t._ctx=ve:a===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Ql(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Hn([t.class,r.class]));else if(a==="style")t.style=Kr([t.style,r.style]);else if(Bn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Pe(e,t,7,[n,r])}const nf=wo();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new _s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:oo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sl.bind(null,i),e.ce&&e.ce(i),i}let te=null;const Ct=e=>{te=e,e.scope.on()},dt=()=>{te&&te.scope.off(),te=null};function Po(e){return e.vnode.shapeFlag&4}let Xt=!1;function of(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=Po(e);Dl(e,n,a,t),Hl(e,r);const i=a?sf(e,t):void 0;return Xt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ff(e):null;Ct(e),Tt();const i=Ve(r,e,0,[e.props,a]);if(Nt(),dt(),$i(i)){if(i.then(dt,dt),t)return i.then(o=>{Ga(e,o,t)}).catch(o=>{Xn(o,e,0)});e.asyncDep=i}else Ga(e,i,t)}else Co(e,t)}function Ga(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=eo(t)),Co(e,n)}let Za;function Co(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template||fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=le(le({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}e.render=r.render||Ee}Ct(e),Tt(),Fl(e),Nt(),dt()}function lf(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function ff(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=lf(e))},slots:e.slots,emit:e.emit,expose:t}}function er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function cf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>el(e,t,Xt);function Io(e,t,n){const r=arguments.length;return r===2?V(t)&&!F(t)?Sr(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),ae(e,t,n))}const df=Symbol(""),mf=()=>On(df),pf="3.2.45",hf="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,Qa=st&&st.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(hf,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bf(e,t,n){const r=e.style,a=Q(n);if(n&&!a){for(const i in n)Tr(r,i,n[i]);if(t&&!Q(t))for(const i in t)n[i]==null&&Tr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ei=/\s*!important$/;function Tr(e,t,n){if(F(n))n.forEach(r=>Tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yf(e,t);ei.test(n)?e.setProperty(St(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],mr={};function yf(e,t){const n=mr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return mr[t]=r;r=Kn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return mr[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=ms(t);n==null||i&&!Ri(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ri(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function bt(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const c=i[t]=Pf(r,a);bt(e,s,c,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let pr=0;const Of=Promise.resolve(),Ef=()=>pr||(Of.then(()=>pr=0),pr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Cf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Cf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vf(e,r,a):t==="style"?bf(e,n,r):Bn(t)?qr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?_f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&Q(n)?!1:t in e}const ii=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>An(t,n):t};function Tf(e){e.target.composing=!0}function oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Nf={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=ii(a);const i=r||a.props&&a.props.type==="number";bt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Mn(s)),e._assign(s)}),n&&bt(e,"change",()=>{e.value=e.value.trim()}),t||(bt(e,"compositionstart",Tf),bt(e,"compositionend",oi),bt(e,"change",oi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=ii(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Mn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Mf=le({patchProp:If},gf);let si;function Ff(){return si||(si=Kl(Mf))}const Rf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return Q(e)?document.querySelector(e):e}const tr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},jf={data(){return{query:""}},watch:{query(e){this.$emit("search",e)}}},$f=e=>(so("data-v-85fc0eaf"),e=e(),lo(),e),Df={class:"header"},zf=$f(()=>_e("h2",{class:"title"},"Zoeken",-1));function Uf(e,t,n,r,a,i){return Je(),Et("div",Df,[zf,Il(_e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>a.query=o)},null,512),[[Nf,a.query]])])}const Hf=tr(jf,[["render",Uf],["__scopeId","data-v-85fc0eaf"]]);const Bf={components:{},data(){return{toggled:!1}},props:["definition"]},Yf=e=>(so("data-v-bf89c95d"),e=e(),lo(),e),Wf={class:"primary"},Kf={class:"left"},qf={class:"name"},Xf=Yf(()=>_e("div",{class:"more"},"Waar ligt dit?",-1)),Vf={class:"right"},Jf={key:0,class:"extra"},Gf=["src"],Zf={class:"description"};function Qf(e,t,n,r,a,i){const o=Rn("font-awesome-icon");return Je(),Et("div",{class:"result",onClick:t[0]||(t[0]=s=>a.toggled=!a.toggled)},[_e("div",Wf,[_e("div",Kf,[_e("div",qf,Na(n.definition.name),1),Xf]),_e("div",Vf,[ae(o,{class:Hn(["open",{rotate:a.toggled,reset:!a.toggled}]),icon:"fa-solid fa-caret-down"},null,8,["class"])])]),a.toggled?(Je(),Et("div",Jf,[_e("img",{class:"location",src:`https://inventory.djoamersfoort.nl/api/v1/location/${n.definition.location_id}/photo`,alt:"Location"},null,8,Gf),_e("div",Zf,Na(n.definition.location_description),1)])):ef("",!0)])}const ec=tr(Bf,[["render",Qf],["__scopeId","data-v-bf89c95d"]]);const tc={props:["results"],components:{Result:ec}},nc={class:"results"};function rc(e,t,n,r,a,i){const o=Rn("Result");return Je(),Et("div",nc,[(Je(!0),Et(xe,null,Nl(n.results,s=>(Je(),Oo(o,{definition:s},null,8,["definition"]))),256))])}const ac=tr(tc,[["render",rc],["__scopeId","data-v-a20fd31e"]]),ic={data(){return{query:"",results:[]}},methods:{async search(e){if(this.query=e,e.length<3)return this.results=[];const n=await(await fetch(`https://inventory.djoamersfoort.nl/api/v1/items/search/${e}`)).json();this.query===e&&(this.results=n.items,console.log(this.results))}},components:{Header:Hf,Results:ac}};function oc(e,t,n,r,a,i){const o=Rn("Header"),s=Rn("Results");return Je(),Et(xe,null,[ae(o,{onSearch:i.search},null,8,["onSearch"]),ae(s,{results:a.results},null,8,["results"])],64)}const sc=tr(ic,[["render",oc]]);function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function lc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function da(e,t){return uc(e)||mc(e,t)||So(e,t)||hc()}function en(e){return cc(e)||dc(e)||So(e)||pc()}function cc(e){if(Array.isArray(e))return Nr(e)}function uc(e){if(Array.isArray(e))return e}function dc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function So(e,t){if(!!e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},ma={},To={},No=null,Mo={mark:ci,measure:ci};try{typeof window<"u"&&(ma=window),typeof document<"u"&&(To=document),typeof MutationObserver<"u"&&(No=MutationObserver),typeof performance<"u"&&(Mo=performance)}catch{}var gc=ma.navigator||{},ui=gc.userAgent,di=ui===void 0?"":ui,Ze=ma,X=To,mi=No,pn=Mo;Ze.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Fo=~di.indexOf("MSIE")||~di.indexOf("Trident/"),hn,gn,vn,bn,yn,ze="___FONT_AWESOME___",Mr=16,Ro="fa",Lo="svg-inline--fa",pt="data-fa-i2svg",Fr="data-fa-pseudo-element",vc="data-fa-pseudo-element-pending",pa="data-prefix",ha="data-icon",pi="fontawesome-i2svg",bc="async",yc=["HTML","HEAD","STYLE","SCRIPT"],jo=function(){try{return!0}catch{return!1}}(),q="classic",G="sharp",ga=[q,G];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Vt=tn((hn={},ee(hn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(hn,G,{fa:"solid",fass:"solid","fa-solid":"solid"}),hn)),Jt=tn((gn={},ee(gn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(gn,G,{solid:"fass"}),gn)),Gt=tn((vn={},ee(vn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(vn,G,{fass:"fa-solid"}),vn)),xc=tn((bn={},ee(bn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(bn,G,{"fa-solid":"fass"}),bn)),_c=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,$o="fa-layers-text",wc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,kc=tn((yn={},ee(yn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(yn,G,{900:"fass"}),yn)),Do=[1,2,3,4,5,6,7,8,9,10],Ac=Do.concat([11,12,13,14,15,16,17,18,19,20]),Oc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys(Jt[q]).map(Zt.add.bind(Zt));Object.keys(Jt[G]).map(Zt.add.bind(Zt));var Ec=[].concat(ga,en(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Do.map(function(e){return"".concat(e,"x")})).concat(Ac.map(function(e){return"w-".concat(e)})),Ut=Ze.FontAwesomeConfig||{};function Pc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Cc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Ic=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ic.forEach(function(e){var t=da(e,2),n=t[0],r=t[1],a=Cc(Pc(n));a!=null&&(Ut[r]=a)})}var zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ro,replacementClass:Lo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var It=O(O({},zo),Ut);It.autoReplaceSvg||(It.observeMutations=!1);var I={};Object.keys(zo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){It[e]=n,Ht.forEach(function(r){return r(I)})},get:function(){return It[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Ht.forEach(function(n){return n(I)})},get:function(){return It.cssPrefix}});Ze.FontAwesomeConfig=I;var Ht=[];function Sc(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ke=Mr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tc(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Nc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qt(){for(var e=12,t="";e-- >0;)t+=Nc[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Uo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Uo(e[n]),'" ')},"").trim()}function nr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ba(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Fc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Rc(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Lc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ho(){var e=Ro,t=Lo,n=I.cssPrefix,r=I.replacementClass,a=Lc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function hr(){I.autoAddCss&&!hi&&(Tc(Ho()),hi=!0)}var jc={mixout:function(){return{dom:{css:Ho,insertCss:hr}}},hooks:function(){return{beforeDOMElementCreation:function(){hr()},beforeI2svg:function(){hr()}}}},Ue=Ze||{};Ue[ze]||(Ue[ze]={});Ue[ze].styles||(Ue[ze].styles={});Ue[ze].hooks||(Ue[ze].hooks={});Ue[ze].shims||(Ue[ze].shims=[]);var Oe=Ue[ze],Bo=[],$c=function e(){X.removeEventListener("DOMContentLoaded",e),$n=1,Bo.map(function(t){return t()})},$n=!1;Ye&&($n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),$n||X.addEventListener("DOMContentLoaded",$c));function Dc(e){!Ye||($n?setTimeout(e,0):Bo.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Uo(e):"<".concat(t," ").concat(Mc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},gr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?zc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Uc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=Uc(e);return t.length===1?t[0].toString(16):null}function Hc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,vi(t)):Oe.styles[e]=O(O({},Oe.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}var xn,_n,wn,yt=Oe.styles,Bc=Oe.shims,Yc=(xn={},ee(xn,q,Object.values(Gt[q])),ee(xn,G,Object.values(Gt[G])),xn),ya=null,Yo={},Wo={},Ko={},qo={},Xo={},Wc=(_n={},ee(_n,q,Object.keys(Vt[q])),ee(_n,G,Object.keys(Vt[G])),_n);function Kc(e){return~Ec.indexOf(e)}function qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Kc(a)?a:null}var Vo=function(){var t=function(i){return gr(yt,function(o,s,l){return o[l]=gr(s,i,{}),o},{})};Yo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Wo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Xo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||I.autoFetchSvg,r=gr(Bc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ko=r.names,qo=r.unicodes,ya=rr(I.styleDefault,{family:I.familyDefault})};Sc(function(e){ya=rr(e.styleDefault,{family:I.familyDefault})});Vo();function xa(e,t){return(Yo[e]||{})[t]}function Xc(e,t){return(Wo[e]||{})[t]}function ct(e,t){return(Xo[e]||{})[t]}function Jo(e){return Ko[e]||{prefix:null,iconName:null}}function Vc(e){var t=qo[e],n=xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return ya}var _a=function(){return{prefix:null,iconName:null,rest:[]}};function rr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Vt[r][e],i=Jt[r][e]||Jt[r][a],o=e in Oe.styles?e:null;return i||o||null}var bi=(wn={},ee(wn,q,Object.keys(Gt[q])),ee(wn,G,Object.keys(Gt[G])),wn);function ar(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,q,"".concat(I.cssPrefix,"-").concat(q)),ee(t,G,"".concat(I.cssPrefix,"-").concat(G)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return bi[q].includes(c)}))&&(s=q),(e.includes(i[G])||e.some(function(c){return bi[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=qc(I.cssPrefix,d);if(yt[d]?(d=Yc[s].includes(d)?xc[s][d]:d,o=d,c.prefix=d):Wc[s].indexOf(d)>-1?(o=d,c.prefix=rr(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[q]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Jo(c.iconName):{},k=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},_a());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(yt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var Jc=function(){function e(){lc(this,e),this.definitions={}}return fc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=Gt[q][s];l&&Lr(l,o[s]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],xt={},Ot={},Gc=Object.keys(Ot);function Zc(e,t){var n=t.mixoutsTo;return yi=e,xt={},Object.keys(Ot).forEach(function(r){Gc.indexOf(r)===-1&&delete Ot[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(!!t)return t=ct(n,t)||t,gi(Go.definitions,n,t)||gi(Oe.styles,n,t)}var Go=new Jc,Qc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ht("noAuto")},eu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(ht("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Dc(function(){nu({autoReplaceSvgRoot:n}),ht("watch",t)})}},tu={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rr(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(_c))){var a=ar(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ct(i,t)||t}}}},pe={noAuto:Qc,config:I,dom:eu,parse:tu,library:Go,findIconDefinition:$r,toHtml:nn},nu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||I.autoFetchSvg)&&Ye&&I.autoReplaceSvg&&pe.dom.i2svg({node:r})};function ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ru(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ba(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=nr(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function au(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,N=R.width,z=R.height,_=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},j=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};k&&(E.attributes[pt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Qt())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),fe=r.found&&n.found?He("generateAbstractMask",U)||{children:[],attributes:{}}:He("generateAbstractIcon",U)||{children:[],attributes:{}},ne=fe.children,be=fe.attributes;return U.children=ne,U.attributes=be,s?au(U):ru(U)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=O({},o.styles);ba(a)&&(d.transform=Rc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=nr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function iu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=Oe.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ou={found:!1,width:512,height:512};function su(e,t){!jo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=Jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(Dr(o))}su(e,t),r(O(O({},ou),{},{icon:I.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var _i=function(){},Ur=I.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:_i,measure:_i},$t='FA "6.2.1"',lu=function(t){return Ur.mark("".concat($t," ").concat(t," begins")),function(){return Zo(t)}},Zo=function(t){Ur.mark("".concat($t," ").concat(t," ends")),Ur.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},ka={begin:lu,end:Zo},In=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function fu(e){var t=e.getAttribute?e.getAttribute(pa):null,n=e.getAttribute?e.getAttribute(ha):null;return t&&n}function cu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function uu(){if(I.autoReplaceSvg===!0)return Sn.replace;var e=Sn[I.autoReplaceSvg];return e||Sn.replace}function du(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function mu(e){return X.createElement(e)}function Qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?du:mu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Qo(o,{ceFn:r}))}),a}function pu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Qo(a),n)}),n.getAttribute(pt)===null&&I.keepOriginalSource){var r=X.createComment(pu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~va(n).indexOf(I.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function ki(e){e()}function es(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=ki;I.mutateApproach===bc&&(r=Ze.requestAnimationFrame||ki),r(function(){var a=uu(),i=ka.begin("mutate");e.map(a),i(),n()})}}var Aa=!1;function ts(){Aa=!0}function Hr(){Aa=!1}var Dn=null;function Ai(e){if(!!mi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Dn=new mi(function(c){if(!Aa){var d=Qe();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~Oc.indexOf(m.attributeName))if(m.attributeName==="class"&&fu(m.target)){var v=ar(va(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(pa,k||d),R&&m.target.setAttribute(ha,R)}else cu(m.target)&&a(m.target)})}}),Ye&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hu(){!Dn||Dn.disconnect()}function gu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function vu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ar(va(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Xc(a.prefix,e.innerText)||xa(a.prefix,Rr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function bu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function yu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vu(e),r=n.iconName,a=n.prefix,i=n.rest,o=bu(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?gu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var xu=Oe.styles;function ns(e){var t=I.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf($o)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var et=new Set;ga.map(function(e){et.add("fa-".concat(e))});Object.keys(Vt[q]).map(et.add.bind(et));Object.keys(Vt[G]).map(et.add.bind(et));et=en(et);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=I.autoFetchSvg?et:ga.map(function(d){return"fa-".concat(d)}).concat(Object.keys(xu));i.includes("fa")||i.push("fa");var o=[".".concat($o,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ka.begin("onTree"),c=s.reduce(function(d,m){try{var v=ns(m);v&&d.push(v)}catch(k){jo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){es(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function _u(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ns(e).then(function(n){n&&es([n],t)})}function wu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,O(O({},n),{},{mask:a}))}}var ku=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,N=n.classes,z=N===void 0?[]:N,_=n.attributes,P=_===void 0?{}:_,E=n.styles,j=E===void 0?{}:E;if(!!t){var U=t.prefix,fe=t.iconName,ne=t.icon;return ir(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||Qt()):(P["aria-hidden"]="true",P.focusable="false")),wa({icons:{main:Dr(ne),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:fe,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:P,styles:j,classes:z}})})}},Au={mixout:function(){return{icon:wu(ku)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=_u,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=da(N,2),_=z[0],P=z[1];k([n,wa({icons:{main:_,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nr(s);l.length>0&&(a.style=l);var c;return ba(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ou={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ir({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},Eu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ir({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),iu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},Pu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return ir({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(en(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Fo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Cu=new RegExp('"',"ug"),Pi=[1105920,1112319];function Iu(e){var t=e.replace(Cu,""),n=Hc(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(vc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(ne){return ne.getAttribute(Fr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(wc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?G:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jt[v][l[2].toLowerCase()]:kc[v][c],R=Iu(m),N=R.value,z=R.isSecondary,_=l[0].startsWith("FontAwesome"),P=xa(k,N),E=P;if(_){var j=Vc(N);j.iconName&&j.prefix&&(P=j.iconName,k=j.prefix)}if(P&&!z&&(!o||o.getAttribute(pa)!==k||o.getAttribute(ha)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=yu(),fe=U.extra;fe.attributes[Fr]=t,zr(P,k).then(function(ne){var be=wa(O(O({},U),{},{icons:{main:ne,mask:_a()},prefix:k,iconName:E,extra:fe,watchable:!0})),he=X.createElement("svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=be.map(function(Le){return nn(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Su(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Tu(e){return e.parentNode!==document.head&&!~yc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ii(e){if(!!Ye)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Tu).map(Su),a=ka.begin("searchPseudoElements");ts(),Promise.all(r).then(function(){a(),Hr(),t()}).catch(function(){a(),Hr(),n()})})}var Nu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&Ii(a)}}},Si=!1,Mu={mixout:function(){return{dom:{unwatch:function(){ts(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ai(jr("mutationObserverCallbacks",{}))},noAuto:function(){hu()},watch:function(n){var r=n.observeMutationsRoot;Si?Hr():Ai(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Fu={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ru(e){return e.tag==="g"?e.children:[e]}var Lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ar(a.split(" ").map(function(o){return o.trim()})):_a();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Fc({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},br),{},{fill:"white"})},N=d.children?{children:d.children.map(Ni)}:{},z={tag:"g",attributes:O({},k.inner),children:[Ni(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},_={tag:"g",attributes:O({},k.outer),children:[z]},P="mask-".concat(s||Qt()),E="clip-".concat(s||Qt()),j={tag:"mask",attributes:O(O({},br),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,_]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Ru(v)},j]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},br)}),{children:r,attributes:a}}}},ju={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Du=[jc,Au,Ou,Eu,Pu,Nu,Mu,Fu,Lu,ju,$u];Zc(Du,{mixoutsTo:pe});pe.noAuto;var rs=pe.config,zu=pe.library;pe.dom;var zn=pe.parse;pe.findIconDefinition;pe.toHtml;var Uu=pe.icon;pe.layer;var Hu=pe.text;pe.counter;function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yu(e,t){if(e==null)return{};var n=Bu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Br(e){return Wu(e)||Ku(e)||qu(e)||Xu()}function Wu(e){if(Array.isArray(e))return Yr(e)}function Ku(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qu(e,t){if(!!e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};(function(e){(function(t){var n=function(_,P,E){if(!c(P)||m(P)||v(P)||k(P)||l(P))return P;var j,U=0,fe=0;if(d(P))for(j=[],fe=P.length;U<fe;U++)j.push(n(_,P[U],E));else{j={};for(var ne in P)Object.prototype.hasOwnProperty.call(P,ne)&&(j[_(ne,E)]=n(_,P[ne],E))}return j},r=function(_,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return _.split(j).join(E)},a=function(_){return R(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var P=a(_);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(_,P){return r(_,P).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},v=function(_){return s.call(_)=="[object RegExp]"},k=function(_){return s.call(_)=="[object Boolean]"},R=function(_){return _=_-0,_===_},N=function(_,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?_:function(j,U){return E(j,_,U)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,P){return n(N(a,P),_)},decamelizeKeys:function(_,P){return n(N(o,P),_,P)},pascalizeKeys:function(_,P){return n(N(i,P),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(Vu)})(as);var Ju=as.exports,Gu=["class","style"];function Zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ju.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Qu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Oa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Oa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Qu(d);break;case"style":l.style=Zu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Yu(n,Gu);return Io(e.tag,ke(ke(ke({},t),{},{class:a.class,style:ke(ke({},a.style),o)},a.attrs),s),r)}var is=!1;try{is=!0}catch{}function ed(){if(!is&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function td(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Un(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(zn.icon)return zn.icon(e);if(e===null)return null;if(Un(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var nd=la({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return Fi(t.icon)}),i=ge(function(){return Bt("classes",td(t))}),o=ge(function(){return Bt("transform",typeof t.transform=="string"?zn.transform(t.transform):t.transform)}),s=ge(function(){return Bt("mask",Fi(t.mask))}),l=ge(function(){return Uu(a.value,ke(ke(ke(ke({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});En(l,function(d){if(!d)return ed("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ge(function(){return l.value?Oa(l.value.abstract[0],{},r):null});return function(){return c.value}}});la({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=rs.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(Br(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Io("div",{class:i.value},r.default?r.default():[])}}});la({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=rs.familyPrefix,i=ge(function(){return Bt("classes",[].concat(Br(t.counter?["".concat(a,"-layers-counter")]:[]),Br(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return Bt("transform",typeof t.transform=="string"?zn.transform(t.transform):t.transform)}),s=ge(function(){var c=Hu(t.value.toString(),ke(ke({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ge(function(){return Oa(s.value,{},r)});return function(){return l.value}}});var rd={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]};zu.add(rd);Rf(sc).component("font-awesome-icon",nd).mount("#app");
