!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){k.toggleOne(e)}function u(e){k.toggleAll(e.target.checked)}function d(){k.clearCompleted()}function c(e){if(e.which===m.ENTER){var t=e.target.value.trim();t&&(k.add(t),e.target.value="")}}function s(e){k.del(e)}var f=n(2),p=o(f),h=n(7),v=o(h),m=n(1),g=n(5),y=n(4),_=n(6),N=o(_),k=new N.default,C=function(e){function t(n){r(this,t);var o=i(this,e.call(this,n));return k.sub(o.setState.bind(o,{})),o.focus=o.focus.bind(o),o.save=o.save.bind(o),o}return l(t,e),t.prototype.setRoute=function(){this.setState({route:String(location.hash||"").split("/").pop()||"all"})},t.prototype.componentWillMount=function(){addEventListener("hashchange",this.setRoute.bind(this)),this.setRoute()},t.prototype.save=function(e,t){this.setState({editing:0}),k.save(e,t)},t.prototype.focus=function(e){this.setState({editing:e.id})},t.prototype.render=function(e,t){var n=k.data,o=this,r=n.length,i=n.filter(m.filters[t.route]),l=n.filter(m.filters.completed).length,f=r-l;return p.default.createVNode(2,"div",null,[p.default.createVNode(16,y.Head,{onEnter:c}),r?p.default.createVNode(2,"section",{id:"main"},[p.default.createVNode(512,"input",{id:"toggle-all",type:"checkbox",checked:0===f},null,{onClick:u}),p.default.createVNode(2,"ul",{id:"todo-list"},i.map(function(e){return p.default.createVNode(16,g.Item,{data:e,doSave:o.save,doFocus:o.focus,doRemove:s,doToggle:a,editing:e.id===t.editing},null,null,null,{onComponentShouldUpdate:g.itemSCU})}))]):null,f||l?p.default.createVNode(16,y.Foot,{onClear:d,left:f,done:l,route:t.route}):null])},t}(v.default);p.default.render(p.default.createVNode(16,C),document.getElementById("todoapp"))},function(e,t){"use strict";function n(){for(var e=void 0,t={},n=0;n<arguments.length;n++){e=Object(arguments[n]);for(var o in e)t[o]=e[o]}return t}function o(){var e=void 0,t=void 0,n="";for(t=0;t<32;t++)e=16*Math.random()|0,8!==t&&12!==t&&16!==t&&20!==t||(n+="-"),n+=(12===t?4:16===t?3&e|8:e).toString(16);return n}function r(e,t){return 1===e?t:t+"s"}t.__esModule=!0,t.assign=n,t.uuid=o,t.pluralize=r;t.ENTER=13,t.ESCAPE=27,t.filters={all:function(){return!0},active:function(e){return!e.completed},completed:function(e){return e.completed}}},function(e,t,n){e.exports=n(3)},function(e,t,n){/*!
	 * inferno v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(e,n){n(t)}(this,function(e){"use strict";function t(e){return!s(e.prototype)&&!s(e.prototype.render)}function n(e){return a(e)||u(e)}function o(e){return s(e)||d(e)}function r(e){return d(e)||e===!1||c(e)||s(e)}function i(e){return"function"==typeof e}function l(e){return"o"===e[0]&&"n"===e[1]&&e.length>3}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function d(e){return null===e}function c(e){return e===!0}function s(e){return void 0===e}function f(e){return"object"==typeof e}function p(e){throw e||(e=ft),new Error("Inferno Error: "+e)}function h(e,t){for(var n=[],i=arguments.length-2;i-- >0;)n[i]=arguments[i+2];var l=n;n.length>0&&!d(n[0])&&(t||(t={}),1===n.length&&(l=n[0]),s(t.children)?t.children=l:ht(l)?ht(t.children)?t.children=t.children.concat(l):t.children=[t.children].concat(l):ht(t.children)?t.children.push(l):(t.children=[t.children],t.children.push(l))),l=null;var a,u=e.flags,c=e.events||t&&t.events||null;if(ht(e))a=e.map(function(e){return h(e)});else if(o(t)&&o(l))a=Object.assign({},e);else{var f=o(e.key)?t.key:e.key,p=e.ref||t.ref;28&u?a=N(u,e.type,Object.assign({},e.props,t),null,c,f,p,!0):3970&u&&(l=t&&t.children||e.children,a=N(u,e.type,Object.assign({},e.props,t),l,c,f,p,!l))}if(28&u){var v=a.props;if(v){var m=v.children;if(m)if(ht(m))for(var g=0;g<m.length;g++){var y=m[g];!r(y)&&S(y)&&(v.children[g]=h(y))}else S(m)&&(v.children=h(m))}a.children=null}return a.dom=null,a}function v(e,t,o){for(;o<e.length;o++){var i=e[o];r(i)||(Array.isArray(i)?v(i,t,0):(n(i)?i=C(i):S(i)&&i.dom&&(i=h(i)),t.push(i)))}}function m(e){var t;e.$?e=e.slice():e.$=!0;for(var o=0;o<e.length;o++){var i=e[o];if(r(i))t||(t=e.slice(0,o)),t.push(i);else{if(Array.isArray(i)){var l=(t||e).slice(0,o);return v(e,l,o),l}n(i)?(t||(t=e.slice(0,o)),t.push(C(i))):S(i)&&i.dom?(t||(t=e.slice(0,o)),t.push(h(i))):t&&t.push(h(i))}}return t||e}function g(e){return ht(e)?m(e):S(e)&&e.dom?h(e):e}function y(e,t,n){28&e.flags||!o(n)||o(t.children)||(e.children=t.children),t.ref&&(e.ref=t.ref),t.events&&(e.events=t.events),o(t.key)||(e.key=t.key)}function _(e){var t=e.props,n=e.children;a(e.type)&&28&e.flags&&(e.flags=3970),t&&y(e,t,n),r(n)||(e.children=g(n)),t&&!r(t.children)&&(t.children=g(t.children))}function N(e,n,o,r,i,l,a,u){16&e&&(e=t(n)?4:8);var d={children:s(r)?null:r,dom:null,events:i||null,flags:e||0,key:void 0===l?null:l,props:o||null,ref:a||null,type:n};return u||_(d),d}function k(){return N(4096)}function C(e){return N(1,null,null,e)}function S(e){return!!e.flags}function b(){return gt.id++}function w(e,t){var n=new CustomEvent("inferno.client.message",{detail:JSON.stringify(t,function(e,t){if(!d(t)&&!s(t)){if("_vComponent"===e||!s(t.nodeType))return;if(i(t))return"$$f:"+t.name}return t})});e.dispatchEvent(n)}function x(){for(var e=0;e<Dt.length;e++){var t=Dt[e];ut(t.input,t.dom)}}function O(e){e.__INFERNO_DEVTOOLS_GLOBAL_HOOK__=Dt,e.addEventListener("inferno.devtools.message",function(t){var n=JSON.parse(t.detail),o=n.type;switch(o){case"get-roots":mt.connected||(mt.connected=!0,x(),U(e))}})}function U(e){w(e,{type:"roots",data:Dt})}function M(e,t,n){e.split(",").forEach(function(e){return t[e]=n})}function E(e,t,n,o){var r=Et.get(e);if(n){if(!r){r={items:new Map,count:0,docEvent:null};var i=I(e,r);r.docEvent=i,Et.set(e,r)}t||r.count++,r.items.set(o,n)}else r&&r.items.has(o)&&(r.count--,r.items.delete(o),0===r.count&&(document.removeEventListener(T(e),r.docEvent),Et.delete(e)))}function V(e,t,n,o,r){var i=n.get(t);if(!i||(o--,r.dom=t,i.event?i.event(i.data,e):i(e),!r.stopPropagation)){var l=t.parentNode;o>0&&(l||l===document.body)&&V(e,l,n,o,r)}}function T(e){return e.substr(2).toLowerCase()}function I(e,t){var n=function(e){var n={stopPropagation:!1,dom:document};Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),e.stopPropagation=function(){n.stopPropagation=!0};var o=t.count;o>0&&V(e,e.target,t.items,o,n)};return document.addEventListener(T(e),n),n}function R(e){return"checkbox"===e||"radio"===e}function D(e){var t=R(e.type);return t?!o(e.checked):!o(e.value)}function P(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),L(this.vNode,o)}function A(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onClick?n.onClick(e):n.onclick&&n.onclick(e),L(this.vNode,o)}function W(e){var t=document.querySelectorAll('input[type="radio"][name="'+e+'"]');[].forEach.call(t,function(e){var t=Vt.get(e);if(t){var n=t.vNode.props;n&&(e.checked=t.vNode.props.checked)}})}function j(e,t){var n=e.props||vt;if(L(e,t),D(n)){var o=Vt.get(t);o||(o={vNode:e},R(n.type)?(t.onclick=A.bind(o),t.onclick.wrapped=!0):(t.oninput=P.bind(o),t.oninput.wrapped=!0),Vt.set(t,o)),o.vNode=e}}function L(e,t){var n=e.props||vt,r=n.type,i=n.value,l=n.checked;r!==t.type&&r&&(t.type=r),n.multiple!==t.multiple&&(t.multiple=n.multiple),R(r)?(o(i)||(t.value=i),t.checked=l,"radio"===r&&n.name&&W(n.name)):o(i)||t.value===i?o(l)||(t.checked=l):t.value=i}function F(e){return!o(e.value)}function J(e,t){var n=e.props||vt,o=e.dom;o.value=n.value,ht(t)&&t.indexOf(n.value)!==-1||n.value===t?o.selected=!0:o.selected=n.selected||!1}function K(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onChange?n.onChange(e):n.onchange&&n.onchange(e),G(this.vNode,o)}function B(e,t){var n=e.props||vt;if(G(e,t),F(n)){var o=Vt.get(t);o||(o={vNode:e},t.onchange=K.bind(o),t.onchange.wrapped=!0,Vt.set(t,o)),o.vNode=e}}function G(e,t){var n=e.props||vt;n.multiple!==t.multiple&&(t.multiple=n.multiple);var o=e.children,r=n.value;if(ht(o))for(var i=0;i<o.length;i++)J(o[i],r);else S(o)&&J(o,r)}function H(e){return!o(e.value)}function z(e){var t=this.vNode,n=t.events||vt,o=t.dom;n.onInput?n.onInput(e):n.oninput&&n.oninput(e),$(this.vNode,o)}function Y(e,t){var n=e.props||vt;$(e,t);var o=Vt.get(t);H(n)&&(o||(o={vNode:e},t.oninput=z.bind(o),t.oninput.wrapped=!0,Vt.set(t,o)),o.vNode=e)}function $(e,t){var n=e.props||vt,o=n.value;t.value!==o&&(t.value=o)}function q(e,t,n){512&e?j(t,n):2048&e?B(t,n):1024&e&&Y(t,n)}function X(e,t,n,o,r,i){var l=e.flags;28&l?Z(e,t,n,o,r,i):3970&l?ee(e,t,n,o,r,i):4097&l&&Q(e,t)}function Q(e,t){t&&Ge(t,e.dom)}function Z(e,t,n,r,i,l){var a=e.children,u=e.flags,d=4&u,c=e.ref,s=e.dom;if(!l){if(!i)if(d){var f=a._lifecycle;f.fastUnmount||X(a._lastInput,null,n,!1,i,l)}else n.fastUnmount||X(a,null,n,!1,i,l);d?(a._ignoreSetState=!0,a.componentWillUnmount(),c&&!l&&c(null),a._unmounted=!0,At&&Pt.delete(a)):o(c)||o(c.onComponentWillUnmount)||c.onComponentWillUnmount(s)}if(t){var p=a._lastInput;o(p)&&(p=a),Ge(t,s)}Tt&&!d&&(t||r)&&Se(e)}function ee(e,t,n,r,i,l){var a=e.dom,u=e.ref,c=e.events;if(!i&&!n.fastUnmount){u&&!l&&ne(u);var s=e.children;o(s)||te(s,n,i,l)}if(!d(c))for(var f in c)ve(f,c[f],null,a,n),c[f]=null;t&&Ge(t,a),Tt&&(t||r)&&ke(e)}function te(e,t,n,o){if(ht(e))for(var i=0;i<e.length;i++){var l=e[i];!r(l)&&f(l)&&X(l,null,t,!1,n,o)}else f(e)&&X(e,null,t,!1,n,o)}function ne(e){if(i(e))e(null);else{if(r(e))return;p()}}function oe(e,t,n,o,r,i,l){if(e!==t){var a=e.flags,u=t.flags;28&u?28&a?ae(e,t,n,o,r,i,4&u,l):Pe(n,Me(t,null,o,r,i,4&u),e,o,l):3970&u?3970&a?ie(e,t,n,o,r,i,l):Pe(n,Oe(t,null,o,r,i),e,o,l):1&u?1&a?ue(e,t):Pe(n,we(t,null),e,o,l):4096&u?4096&a?de(e,t):Pe(n,xe(t,null),e,o,l):De(e,t,n,o,r,i,l)}}function re(e,t,n,o){S(e)?X(e,t,n,!0,!1,o):ht(e)?He(t,e,n,!1,o):t.textContent=""}function ie(e,t,n,o,r,i,l){var a=t.type,u=e.type;if(u!==a)Ke(e,t,n,o,r,i,l);else{var d=e.dom,c=e.props,s=t.props,f=e.children,p=t.children,h=e.flags,v=t.flags,m=e.ref,g=t.ref,y=e.events,_=t.events;t.dom=d,(i||128&v)&&(i=!0),f!==p&&le(h,v,f,p,d,o,r,i,l),2&v||q(v,t,d),c!==s&&me(c,s,d,o,r,i),y!==_&&he(y,_,d,o),g&&(m!==g||l)&&Te(d,g,o)}}function le(e,t,o,i,l,a,u,d,c){var s=!1,f=!1;64&t?s=!0:32&e&&32&t?(f=!0,s=!0):r(i)?re(o,l,a,c):r(o)?n(i)?We(l,i):ht(i)?Ue(i,l,a,u,d):be(i,l,a,u,d):n(i)?n(o)?je(l,i):(re(o,l,a,c),We(l,i)):ht(i)?ht(o)?(s=!0,Ye(o,i)&&(f=!0)):(re(o,l,a,c),Ue(i,l,a,u,d)):ht(o)?(He(l,o,a,!1,c),be(i,l,a,u,d)):S(i)?S(o)?oe(o,i,l,a,u,d,c):(re(o,l,a,c),be(i,l,a,u,d)):S(o),s&&(f?se(o,i,l,a,u,d,c):ce(o,i,l,a,u,d,c))}function ae(e,t,n,i,l,a,u,c){var v=e.type,m=t.type,g=t.props||vt,y=e.key,_=t.key;if(v!==m)if(u)Ke(e,t,n,i,l,a,c);else{var N=e.children._lastInput||e.children,C=Ae(t,m,g,l);oe(N,C,n,i,l,a,c);var S=t.dom=C.dom;t.children=C,Ve(t.ref,S,i),X(e,null,i,!1,!0,c)}else if(u){if(y!==_)return Ke(e,t,n,i,l,a,c),!1;var w=e.children;if(w._unmounted){if(d(n))return!0;Be(n,Me(t,null,i,l,a,4&t.flags),e.dom)}else{var x=m.defaultProps,O=w.props;w._devToolsStatus.connected&&!w._devToolsId&&yt.set(w._devToolsId=b(),w),i.fastUnmount=!1,s(x)||(Ie(O,g),t.props=g);var U=w.state,M=w.state,E=w.getChildContext();t.children=w,w._isSVG=a,E=o(E)?l:Object.assign({},l,E);var V=w._lastInput,T=w._updateComponent(U,M,O,g,l,!1),I=!0;if(w._childContext=E,r(T)?T=k():ht(T)?p():T===st?(T=V,I=!1):f(T)&&T.dom&&(T=h(T)),28&T.flags?T.parentVNode=t:28&V.flags&&(V.parentVNode=t),w._lastInput=T,w._vNode=t,I){var R=i.fastUnmount,D=w._lifecycle;i.fastUnmount=D.fastUnmount,oe(V,T,n,i,E,a,c),D.fastUnmount=i.unmount,i.fastUnmount=R,w.componentDidUpdate(O,U),At&&Pt.set(w,T.dom)}t.dom=T.dom}}else{var P=!0,A=e.props,W=t.ref,j=!o(W),L=e.children,F=L;t.dom=e.dom,t.children=L,y!==_?P=!0:j&&!o(W.onComponentShouldUpdate)&&(P=W.onComponentShouldUpdate(A,g)),P!==!1&&(j&&!o(W.onComponentWillUpdate)&&(i.fastUnmount=!1,W.onComponentWillUpdate(A,g)),F=m(g,l),r(F)?F=k():ht(F)?p():f(F)&&F.dom&&(F=h(F)),F!==st&&(oe(L,F,n,i,l,a,c),t.children=F,j&&!o(W.onComponentDidUpdate)&&(i.fastUnmount=!1,W.onComponentDidUpdate(A,g)),t.dom=F.dom)),28&F.flags?F.parentVNode=t:28&L.flags&&(L.parentVNode=t)}return!1}function ue(e,t){var n=t.children,o=e.dom;t.dom=o,e.children!==n&&(o.nodeValue=n)}function de(e,t){t.dom=e.dom}function ce(e,t,n,o,i,l,a){var u,d,c=e.length,s=t.length,f=c>s?s:c,p=null;if(c<s)for(u=s-1;u>=f;u--){var v=t[u];r(v)||(v.dom&&(t[u]=v=h(v)),d=be(v,null,o,i,l),Fe(n,d,p),p=d)}else if(0===s)He(n,e,o,!1,a);else if(c>s)for(u=f;u<c;u++){var m=e[u];r(m)||X(e[u],n,o,!1,!1,a)}for(u=f-1;u>=0;u--){var g=e[u],y=t[u];r(y)?r(g)||X(g,n,o,!0,!1,a):(y.dom&&(t[u]=y=h(y)),r(g)?(d=be(y,null,o,i,l),Fe(n,d,p),p=d):(oe(g,y,n,o,i,l,a),p=y.dom))}}function se(e,t,n,o,r,i,l){var a,u,c,f,p,v,m,g=e.length,y=t.length,_=g-1,N=y-1,k=0,C=0;if(0===g)return void(0!==y&&Ue(t,n,o,r,i));if(0===y)return void He(n,e,o,!1,l);var S=e[k],b=t[C],w=e[_],x=t[N];b.dom&&(t[C]=b=h(b)),x.dom&&(t[N]=x=h(x));e:for(;;){for(;S.key===b.key;){if(oe(S,b,n,o,r,i,l),k++,C++,k>_||C>N)break e;S=e[k],b=t[C],b.dom&&(t[C]=b=h(b))}for(;w.key===x.key;){if(oe(w,x,n,o,r,i,l),_--,N--,k>_||C>N)break e;w=e[_],x=t[N],x.dom&&(t[N]=x=h(x))}if(w.key!==b.key){if(S.key!==x.key)break;oe(S,x,n,o,r,i,l),v=N+1,p=v<t.length?t[v].dom:null,Fe(n,x.dom,p),k++,N--,S=e[k],x=t[N],x.dom&&(t[N]=x=h(x))}else oe(w,b,n,o,r,i,l),Fe(n,b.dom,S.dom),_--,C++,w=e[_],b=t[C],b.dom&&(t[C]=b=h(b))}if(k>_){if(C<=N)for(v=N+1,p=v<t.length?t[v].dom:null;C<=N;)m=t[C],m.dom&&(t[C]=m=h(m)),C++,Fe(n,be(m,null,o,r,i),p)}else if(C>N)for(;k<=_;)X(e[k++],n,o,!1,!1,l);else{g=_-k+1,y=N-C+1;var O=e,U=new Array(y);for(a=0;a<y;a++)U[a]=-1;var M=!1,E=0,V=0;if(y<=4||g*y<=16){for(a=k;a<=_;a++)if(c=e[a],V<y)for(u=C;u<=N;u++)if(f=t[u],c.key===f.key){U[u-C]=a,E>u?M=!0:E=u,f.dom&&(t[u]=f=h(f)),oe(c,f,n,o,r,i,l),V++,O[a]=null;break}}else{var T=new Map;for(a=C;a<=N;a++)m=t[a],T.set(m.key,a);for(a=k;a<=_;a++)c=e[a],V<y&&(u=T.get(c.key),s(u)||(f=t[u],U[u-C]=a,E>u?M=!0:E=u,f.dom&&(t[u]=f=h(f)),oe(c,f,n,o,r,i,l),V++,O[a]=null))}if(g===e.length&&0===V)for(He(n,e,o,!1,l);C<y;)m=t[C],m.dom&&(t[C]=m=h(m)),C++,Fe(n,be(m,null,o,r,i),null);else{for(a=g-V;a>0;)c=O[k++],d(c)||(X(c,n,o,!1,!1,l),a--);if(M){var I=fe(U);for(u=I.length-1,a=y-1;a>=0;a--)U[a]===-1?(E=a+C,m=t[E],m.dom&&(t[E]=m=h(m)),v=E+1,p=v<t.length?t[v].dom:null,Fe(n,be(m,n,o,r,i),p)):u<0||a!==I[u]?(E=a+C,m=t[E],v=E+1,p=v<t.length?t[v].dom:null,Fe(n,m.dom,p)):u--}else if(V!==y)for(a=y-1;a>=0;a--)U[a]===-1&&(E=a+C,m=t[E],m.dom&&(t[E]=m=h(m)),v=E+1,p=v<t.length?t[v].dom:null,Fe(n,be(m,null,o,r,i),p))}}}function fe(e){var t=e.slice(0),n=[];n.push(0);var o,r,i,l,a;for(o=0;o<e.length;o++)if(e[o]!==-1)if(r=n[n.length-1],e[r]<e[o])t[o]=r,n.push(o);else{for(i=0,l=n.length-1;i<l;)a=(i+l)/2|0,e[n[a]]<e[o]?i=a+1:l=a;e[o]<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function pe(e,t,n,r,i,a){if(!Ot[e])if(bt[e])r[e]=!!n;else if(St[e]){var u=o(n)?"":n;r[e]!==u&&(r[e]=u)}else if(l(e))ve(e,t,n,r,a);else if(t!==n)if(o(n))r.removeAttribute(e);else if("className"===e)i?r.setAttribute("class",n):r.className=n;else if("style"===e)ge(t,n,r);else if("dangerouslySetInnerHTML"===e){var d=t&&t.__html,c=n&&n.__html;d!==c&&(o(c)||(r.innerHTML=c))}else if("childrenType"!==e&&"ref"!==e&&"key"!==e){var s=Ut[e],f=wt[e];f?r.setAttributeNS(f,s||e,n):r.setAttribute(s||e,n)}}function he(e,t,n,r){if(e=e||vt,t=t||vt,t!==vt)for(var i in t)ve(i,e[i],t[i],n,r);if(e!==vt)for(var l in e)o(t[l])&&ve(l,e[l],null,n,r)}function ve(e,t,n,o,r){if(t!==n){var i=e.toLowerCase(),l=o[i];if(l&&l.wrapped)return;Mt[e]?(r.fastUnmount=!1,E(e,t,n,o)):o[i]=n}}function me(e,t,n,r,i,l){if(e=e||vt,t=t||vt,t!==vt)for(var a in t){var u=t[a],d=e[a];o(u)?ye(a,n):pe(a,d,u,n,l,r)}if(e!==vt)for(var c in e)o(t[c])&&ye(c,n)}function ge(e,t,n){if(a(t))return void(n.style.cssText=t);for(var r in t){var i=t[r];u(i)&&!xt[r]?n.style[r]=i+"px":n.style[r]=i}if(!o(e))for(var l in e)o(t[l])&&(n.style[l]="")}function ye(e,t){"className"===e?t.removeAttribute("class"):"value"===e?t.value="":"style"===e?(t.style.cssText=null,t.removeAttribute("style")):Mt[e]?E(e,null,null,t):t.removeAttribute(e)}function _e(){Tt=!1,It.clear(),Rt.clear()}function Ne(e,t,n,o){var r=e.type,i=e.key,l=Rt.get(r);if(!s(l)){var a=null===i?l.nonKeyed:l.keyed.get(i);if(!s(a)){var u=a.pop();if(!s(u))return ie(u,e,null,t,n,o,!0),e.dom}}return null}function ke(e){var t=e.type,n=e.key,o=Rt.get(t);if(s(o)&&(o={nonKeyed:[],keyed:new Map},Rt.set(t,o)),d(n))o.nonKeyed.push(e);else{var r=o.keyed.get(n);s(r)&&(r=[],o.keyed.set(n,r)),r.push(e)}}function Ce(e,t,n,o){var r=e.type,i=e.key,l=It.get(r);if(!s(l)){var a=null===i?l.nonKeyed:l.keyed.get(i);if(!s(a)){var u=a.pop();if(!s(u)){var d=e.flags,c=ae(u,e,null,t,n,o,4&d,!0);if(!c)return e.dom}}}return null}function Se(e){var t=e.type,n=e.key,o=e.ref,r=o&&(o.onComponentWillMount||o.onComponentWillUnmount||o.onComponentDidMount||o.onComponentWillUpdate||o.onComponentDidUpdate);if(!r){var i=It.get(t);if(s(i)&&(i={nonKeyed:[],keyed:new Map},It.set(t,i)),d(n))i.nonKeyed.push(e);else{var l=i.keyed.get(n);s(l)&&(l=[],i.keyed.set(n,l)),l.push(e)}}}function be(e,t,n,o,r){var i=e.flags;return 3970&i?Oe(e,t,n,o,r):28&i?Me(e,t,n,o,r,4&i):4096&i?xe(e,t):1&i?we(e,t):void p()}function we(e,t){var n=document.createTextNode(e.children);return e.dom=n,t&&Le(t,n),n}function xe(e,t){var n=document.createTextNode("");return e.dom=n,t&&Le(t,n),n}function Oe(e,t,o,r,i){if(Tt){var l=Ne(e,o,r,i);if(!d(l))return d(t)||Le(t,l),l}var a=e.type,u=e.flags;(i||128&u)&&(i=!0);var c=Je(a,i),s=e.children,f=e.props,p=e.events,h=e.ref;if(e.dom=c,d(s)||(n(s)?We(c,s):ht(s)?Ue(s,c,o,r,i):S(s)&&be(s,c,o,r,i)),2&u||q(u,e,c),!d(f))for(var v in f)pe(v,null,f[v],c,i,o);if(!d(p))for(var m in p)ve(m,null,p[m],c,o);return d(h)||Te(c,h,o),d(t)||Le(t,c),c}function Ue(e,t,n,o,i){for(var l=0;l<e.length;l++){var a=e[l];r(a)||(a.dom&&(e[l]=a=h(a)),be(e[l],t,n,o,i))}}function Me(e,t,n,o,r,i){if(Tt){var l=Ce(e,n,o,r);if(!d(l))return d(t)||Le(t,l),l}var a,u=e.type,c=e.props||vt,f=e.ref;if(i){var p=u.defaultProps;n.fastUnmount=!1,s(p)||(Ie(p,c),e.props=c);var h=Re(e,u,c,o,r,mt),v=h._lastInput,m=n.fastUnmount;n.fastUnmount=!0,h._vNode=e,e.dom=a=be(v,null,n,h._childContext,r);var g=h._lifecycle=new _t;g.fastUnmount=n.fastUnmount,n.fastUnmount=m,d(t)||Le(t,a),Ee(f,h,n),At&&Pt.set(h,a),e.children=h}else{var y=Ae(e,u,c,o);e.dom=a=be(y,null,n,o,r),e.children=y,Ve(f,a,n),d(t)||Le(t,a)}return a}function Ee(e,t,n){e&&(i(e)?e(t):p()),d(t.componentDidMount)||n.addListener(function(){t.componentDidMount()})}function Ve(e,t,n){e&&(o(e.onComponentWillMount)||(n.fastUnmount=!1,e.onComponentWillMount()),o(e.onComponentDidMount)||(n.fastUnmount=!1,n.addListener(function(){return e.onComponentDidMount(t)})))}function Te(e,t,n){if(i(t))n.fastUnmount=!1,n.addListener(function(){return t(e)});else{if(r(t))return;p()}}function Ie(e,t){for(var n in e)s(t[n])&&(t[n]=e[n])}function Re(e,t,n,i,l,a){s(i)&&(i={});var u=new t(n,i);u.context=i,u.props===vt&&(u.props=n),u._patch=oe,u._devToolsStatus=a,At&&(u._componentToDOMNodeMap=Pt);var d=u.getChildContext();o(d)?u._childContext=i:u._childContext=Object.assign({},i,d),u._unmounted=!1,u._pendingSetState=!0,u._isSVG=l,u.componentWillMount(),u._beforeRender&&u._beforeRender();var c=u.render(n,u.state,i);return u._afterRender&&u._afterRender(),ht(c)?p():r(c)?c=k():(c.dom&&(c=h(c)),28&c.flags&&(c.parentVNode=e)),u._pendingSetState=!1,u._lastInput=c,u}function De(e,t,n,o,r,i,l){Pe(n,be(t,null,o,r,i),e,o,l)}function Pe(e,t,n,o,r){var i=!1;28&n.flags&&(X(n,null,o,!1,!1,r),n=n.children._lastInput||n.children,i=!0),Be(e,t,n.dom),X(n,null,o,!1,i,r)}function Ae(e,t,n,o){var i=t(n,o);return ht(i)?p():r(i)?i=k():(i.dom&&(i=h(i)),28&i.flags&&(i.parentVNode=e)),i}function We(e,t){""!==t?e.textContent=t:e.appendChild(document.createTextNode(""))}function je(e,t){e.firstChild.nodeValue=t}function Le(e,t){e.appendChild(t)}function Fe(e,t,n){o(n)?Le(e,t):e.insertBefore(t,n)}function Je(e,t){return t===!0?document.createElementNS(Ct,e):document.createElement(e)}function Ke(e,t,n,o,r,i,l){X(e,null,o,!1,!1,l);var a=be(t,null,o,r,i);t.dom=a,Be(n,a,e.dom)}function Be(e,t,n){e||(e=n.parentNode),e.replaceChild(t,n)}function Ge(e,t){e.removeChild(t)}function He(e,t,n,o,r){e.textContent="",n.fastUnmount||ze(null,t,n,o,r)}function ze(e,t,n,o,i){for(var l=0;l<t.length;l++){var a=t[l];r(a)||X(a,e,n,!0,o,i)}}function Ye(e,t){return t.length&&!o(t[0])&&!o(t[0].key)&&e.length&&!o(e[0])&&!o(e[0].key)}function $e(e){for(var t=e.childNodes,n=t.length,o=0;o<n;){var r=t[o];if(8===r.nodeType)if("!"===r.data){var i=document.createTextNode("");e.replaceChild(i,r),o++}else e.removeChild(r),n--;else o++}}function qe(e,t,n,o,r,i){var l=e.type,a=e.props||{},u=e.ref;if(e.dom=t,i){var d=t.namespaceURI===Ct,c=l.defaultProps;n.fastUnmount=!1,s(c)||(Ie(c,a),e.props=a);var f=Re(e,l,a,o,d,mt),p=f._lastInput,h=n.fastUnmount;n.fastUnmount=!0,f._vComponent=e,f._vNode=e,tt(p,t,n,f._childContext,d);var v=f._lifecycle=new _t;v.fastUnmount=n.fastUnmount,n.fastUnmount=h,Ee(u,f,n),At&&Pt.set(f,t),e.children=f}else{var m=Ae(e,l,a,o);tt(m,t,n,o,r),e.children=m,e.dom=m.dom,Ve(u,t,n)}}function Xe(e,t,n,o,r){var i=e.type,l=e.children,a=e.props,u=e.events,d=e.flags;if((r||128&d)&&(r=!0),1!==t.nodeType||t.tagName.toLowerCase()!==i){var c=Oe(e,null,n,o,r);e.dom=c,Be(t.parentNode,c,t)}else{e.dom=t,l&&Qe(l,t,n,o,r),2&d||q(d,e,t);for(var s in a)pe(s,null,a[s],t,r,n);for(var f in u)ve(f,null,u[f],t,n)}}function Qe(e,t,n,o,r){$e(t);var i=Array.prototype.slice.call(t.childNodes),l=0;if(ht(e))for(var a=0;a<e.length;a++){var u=e[a];f(u)&&!d(u)&&tt(u,i[l++],n,o,r)}else f(e)&&tt(e,t.firstChild,n,o,r)}function Ze(e,t){if(3===t.nodeType){var n=we(e,null);e.dom=n,Be(t.parentNode,n,t)}else e.dom=t}function et(e,t){e.dom=t}function tt(e,t,n,o,r){var i=e.flags;return 28&i?qe(e,t,n,o,r,4&i):3970&i?Xe(e,t,n,o,r):1&i?Ze(e,t):4096&i?et(e,t):void p()}function nt(e,t,n){return!(!t||1!==t.nodeType||!t.firstChild)&&(tt(e,t.firstChild,n,{},!1),!0)}function ot(){At=!0}function rt(e){At||p();var t=e&&e.nodeType?e:null;return Pt.get(e)||t}function it(e){for(var t=0;t<Dt.length;t++){var n=Dt[t];if(n.dom===e)return n}return null}function lt(e,t,n){Dt.push({dom:e,input:t,lifecycle:n})}function at(e){for(var t=0;t<Dt.length;t++)if(Dt[t]===e)return void Dt.splice(t,1)}function ut(e,t){if(Wt===t&&p(),e!==st){var n=it(t);if(d(n)){var i=new _t;r(e)||(e.dom&&(e=h(e)),nt(e,t,i)||be(e,t,i,{},!1),i.trigger(),lt(t,e,i))}else{var l=n.lifecycle;l.listeners=[],o(e)?(X(n.input,t,l,!1,!1,!1),at(n)):(e.dom&&(e=h(e)),oe(n.input,e,t,l,{},!1,!1)),l.trigger(),n.input=e}mt.connected&&U(window)}}function dt(){var e;return function(t,n){e||(e=t),ut(n,e)}}function ct(e,t){return{data:e,event:t}}var st="$NO_OP",ft="a runtime error occured! Use Inferno in development environment to find the error.",pt="undefined"!=typeof window&&window.document,ht=Array.isArray,vt={},mt={connected:!1},gt={id:0},yt=new Map,_t=function(){this.listeners=[],this.fastUnmount=!0};_t.prototype.addListener=function(e){this.listeners.push(e)},_t.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var Nt="http://www.w3.org/1999/xlink",kt="http://www.w3.org/XML/1998/namespace",Ct="http://www.w3.org/2000/svg",St={},bt={},wt={},xt={},Ot={},Ut={textAnchor:"text-anchor"},Mt={};M("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type",wt,Nt),M("xml:base,xml:lang,xml:space",wt,kt),M("volume,defaultValue,defaultChecked",St,!0),M("children,ref,key,selected,checked,value,multiple",Ot,!0),M("onClick,onMouseDown,onMouseUp,onMouseMove",Mt,!0),M("muted,scoped,loop,open,checked,default,capture,disabled,readonly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate",bt,!0),M("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,",xt,!0);var Et=new Map,Vt=new Map,Tt=!0,It=new Map,Rt=new Map,Dt=[],Pt=new Map,At=!1,Wt=pt?document.body:null;pt&&(window.process={env:{NODE_ENV:"development"}},O(window));var jt={linkEvent:ct,createVNode:N,cloneVNode:h,NO_OP:st,EMPTY_OBJ:vt,render:ut,findDOMNode:rt,createRenderer:dt,disableRecycling:_e,enableFindDOMNode:ot};e.default=jt,e.linkEvent=ct,e.createVNode=N,e.cloneVNode=h,e.NO_OP=st,e.EMPTY_OBJ=vt,e.render=ut,e.findDOMNode=rt,e.createRenderer=dt,e.disableRecycling=_e,e.enableFindDOMNode=ot,Object.defineProperty(e,"__esModule",{value:!0})})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return a.default.createVNode(2,"header",{id:"header"},[a.default.createVNode(2,"h1",null,"todos"),a.default.createVNode(512,"input",{id:"new-todo",autofocus:!0,autocomplete:"off",placeholder:"What needs to be done?"},null,{onKeyDown:e.onEnter})])}function i(e){return a.default.createVNode(2,"footer",{id:"footer"},[a.default.createVNode(2,"span",{id:"todo-count"},[a.default.createVNode(2,"strong",null,e.left)," ",(0,u.pluralize)(e.left,"item")," left"]),a.default.createVNode(2,"ul",{id:"filters"},d.map(function(t){return a.default.createVNode(2,"li",null,a.default.createVNode(2,"a",{href:t.hash,className:t.name.toLowerCase()===e.route?"selected":""},t.name))})),e.done>0?a.default.createVNode(2,"button",{id:"clear-completed"},"Clear completed",{onClick:e.onClear}):null])}t.__esModule=!0,t.links=void 0,t.Head=r,t.Foot=i;var l=n(2),a=o(l),u=n(1),d=t.links=[{hash:"#/",name:"All"},{hash:"#/active",name:"Active"},{hash:"#/completed",name:"Completed"}]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=this.data,n=e.target.value.trim();n?this.doSave(t,n):this.doRemove(t)}function i(e,t){return t.which===s.ENTER?t.target.blur():t.which===s.ESCAPE?(t.target.value=e.data.title,t.target.blur()):void 0}function l(e){this.editing&&e&&(e.value=this.data.title,e.focus())}function a(e,t){return t.editing||t.data!==e.data}function u(e){var t=e.data,n=[];return e.editing&&n.push("editing"),t.completed&&n.push("completed"),c.default.createVNode(2,"li",{className:n.join(" ")},[c.default.createVNode(2,"div",{className:"view"},[c.default.createVNode(512,"input",{className:"toggle",type:"checkbox",checked:t.completed},null,{onClick:f(t,e.doToggle)}),c.default.createVNode(2,"label",null,t.title,{onDblClick:f(t,e.doFocus)}),c.default.createVNode(2,"button",{className:"destroy"},null,{onClick:f(t,e.doRemove)})]),c.default.createVNode(512,"input",{className:"edit"},null,{onblur:r.bind(e),onKeyDown:f(e,i)},null,l.bind(e))])}t.__esModule=!0,t.itemSCU=a,t.Item=u;var d=n(2),c=o(d),s=n(1),f=c.default.linkEvent},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){if(e)return localStorage[l]=JSON.stringify(e);var t=localStorage[l];return t&&JSON.parse(t)||[]}t.__esModule=!0;var i=n(1),l="todos-inferno",a=function(){function e(){o(this,e),this.data=r()||[],this.onChanges=[]}return e.prototype.sub=function(e){this.onChanges=this.onChanges.concat(e)},e.prototype.inform=function(){r(this.data),this.onChanges.forEach(function(e){e()})},e.prototype.add=function(e){this.data=this.data.concat({id:(0,i.uuid)(),title:e,completed:!1}),this.inform()},e.prototype.put=function(e,t){this.data=this.data.map(function(n){return n!==e?n:(0,i.assign)(e,t)}),this.inform()},e.prototype.save=function(e,t){this.put(e,{title:t})},e.prototype.del=function(e){this.data=this.data.filter(function(t){return t!==e}),this.inform()},e.prototype.toggleOne=function(e){this.put(e,{completed:!e.completed})},e.prototype.toggleAll=function(e){this.data=this.data.map(function(t){return(0,i.assign)(t,{completed:e})}),this.inform()},e.prototype.clearCompleted=function(){this.data=this.data.filter(function(e){return!e.completed}),this.inform()},e}();t.default=a},function(e,t,n){e.exports=n(8)},function(e,t,n){/*!
	 * inferno-component v1.0.0-beta32
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(t,o){e.exports=o(n(3))}(this,function(e){"use strict";function t(e){return l(e)||r(e)}function n(e){return r(e)||e===!1||i(e)||l(e)}function o(e){return"function"==typeof e}function r(e){return null===e}function i(e){return e===!0}function l(e){return void 0===e}function a(e){throw e||(e=p),new Error("Inferno Error: "+e)}function u(e,t){if(28&e.flags){var n=e.parentVNode;n&&(n.dom=t,u(n,t))}}function d(){return e.createVNode(4096)}function c(e,t,n){var o=g.get(e);o||(o=[],g.set(e,o),Promise.resolve().then(function(){f(e,t,function(){for(var e=0;e<o.length;e++)o[e]()}),g.delete(e),e._processingSetState=!1})),n&&o.push(n)}function s(e,t,n){o(t)&&(t=t(e.state));for(var r in t)e._pendingState[r]=t[r];e._pendingSetState?(e.state=Object.assign({},e.state,e._pendingState),e._pendingState={}):e._processingSetState||n?c(e,!1,n):(e._pendingSetState=!0,e._processingSetState=!0,f(e,!1,n),e._processingSetState=!1)}function f(o,r,i){if((!o._deferSetState||r)&&!o._blockRender){o._pendingSetState=!1;var l=o._pendingState,c=o.state,s=Object.assign({},c,l),f=o.props,p=o.context;o._pendingState={};var m=o._updateComponent(c,s,f,f,p,r),g=!0;n(m)?m=d():h(m)?a():m===e.NO_OP&&(m=o._lastInput,g=!1);var y=o._lastInput,_=y.dom.parentNode;if(o._lastInput=m,g){var N=o._lifecycle;N?N.listeners=[]:N=new v,o._lifecycle=N;var k=o.getChildContext();k=t(k)?Object.assign({},p,o._childContext):Object.assign({},p,o._childContext,k),o._patch(y,m,_,N,k,o._isSVG,!1),N.trigger(),o.componentDidUpdate(f,c)}var C=o._vNode,S=C.dom=m.dom,b=o._componentToDOMNodeMap;b&&b.set(o,m.dom),u(C,S),t(i)||i()}}var p="a runtime error occured! Use Inferno in development environment to find the error.",h=Array.isArray,v=function(){this.listeners=[],this.fastUnmount=!0};v.prototype.addListener=function(e){this.listeners.push(e)},v.prototype.trigger=function(){for(var e=this,t=0;t<this.listeners.length;t++)e.listeners[t]()};var m=p,g=new Map,y=function(t,n){this.state={},this.refs={},this._processingSetState=!1,this._blockRender=!1,this._ignoreSetState=!1,this._blockSetState=!1,this._deferSetState=!1,this._pendingSetState=!1,this._pendingState={},this._lastInput=null,this._vNode=null,this._unmounted=!0,this._devToolsStatus=null,this._devToolsId=null,this._lifecycle=null,this._childContext=null,this._patch=null,this._isSVG=!1,this._componentToDOMNodeMap=null,this.props=t||e.EMPTY_OBJ,this.context=n||{},this.componentDidMount||(this.componentDidMount=null)};return y.prototype.render=function(e,t,n){},y.prototype.forceUpdate=function(e){if(this._unmounted)throw Error(m);f(this,!0,e)},y.prototype.setState=function(e,t){if(this._unmounted)throw Error(m);this._blockSetState?a():this._ignoreSetState||s(this,e,t)},y.prototype.componentWillMount=function(){},y.prototype.componentDidMount=function(){},y.prototype.componentWillUnmount=function(){},y.prototype.componentDidUpdate=function(e,t,n){},y.prototype.shouldComponentUpdate=function(e,t,n){return!0},y.prototype.componentWillReceiveProps=function(e,t){},y.prototype.componentWillUpdate=function(e,t,n){},y.prototype.getChildContext=function(){},y.prototype._updateComponent=function(t,n,o,r,i,l){if(this._unmounted===!0&&a(),o!==r||r===e.EMPTY_OBJ||t!==n||l){o===r&&r!==e.EMPTY_OBJ||(this._blockRender=!0,this.componentWillReceiveProps(r,i),this._blockRender=!1,this._pendingSetState&&(n=Object.assign({},n,this._pendingState),this._pendingSetState=!1,this._pendingState={}));var u=this.shouldComponentUpdate(r,n,i);if(u!==!1||l){this._blockSetState=!0,this.componentWillUpdate(r,n,i),this._blockSetState=!1,this.props=r;var d=this.state=n;this.context=i,this._beforeRender&&this._beforeRender();var c=this.render(r,d,i);return this._afterRender&&this._afterRender(),c}}return e.NO_OP},y})}]);
