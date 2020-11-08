/*! For license information please see 2.8ce3c2d7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,a){"use strict";var n=a(0),r=a(112);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},106:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),o=a(90),l=a(89),s=a(94),i=a(103),u=a(117);function d({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:o,activeClassName:i="navbar__link--active",prependBaseUrlToHref:u,...d}){const m=Object(s.default)(a),f=Object(s.default)(e),h=Object(s.default)(r,{forcePrependBaseUrl:!0});return c.a.createElement(l.a,Object(n.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:u?h:r}:{isNavLink:!0,activeClassName:i,to:m,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}:null},d),o)}function m({items:e,position:t,className:a,...l}){const s=Object(r.useRef)(null),i=Object(r.useRef)(null),[u,m]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);const f=(e,t=!1)=>Object(o.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{ref:s,className:Object(o.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},c.a.createElement(d,Object(n.a)({className:f(a)},l,{onClick:l.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),m(!u))}}),l.label),c.a.createElement("ul",{ref:i,className:"dropdown__menu"},e.map((({className:t,...a},r)=>c.a.createElement("li",{key:r},c.a.createElement(d,Object(n.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),m(!1);const e=s.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:f(t,!0)},a))))))):c.a.createElement(d,Object(n.a)({className:f(a)},l))}function f({items:e,className:t,position:a,...l}){const{pathname:s}=Object(i.useLocation)(),[m,f]=Object(r.useState)((()=>{var t;return null===(t=!(null==e?void 0:e.some((e=>Object(u.a)(e.to,s)))))||void 0===t||t})),h=(e,t=!1)=>Object(o.a)("menu__link",{"menu__link--sublist":t},e);return e?c.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":m})},c.a.createElement(d,Object(n.a)({role:"button",className:h(t,!0)},l,{onClick:()=>{f((e=>!e))}}),l.label),c.a.createElement("ul",{className:"menu__list"},e.map((({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(d,Object(n.a)({activeClassName:"menu__link--active",className:h(e)},t,{onClick:l.onClick}))))))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(n.a)({className:h(t)},l)))}t.a=function({mobile:e=!1,...t}){const a=e?f:m;return c.a.createElement(a,t)}},110:function(e,t,a){"use strict";var n=a(0),r=a(111);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},112:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},113:function(e,t,a){"use strict";var n=a(0),r=a(10);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),o=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)((()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0}))),t),a}},114:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},115:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[a,c]=Object(n.useState)(t);return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){c(t())}}),[]),a}},116:function(e,t,a){"use strict";var n=a(101),r=a(94),c=a(105),o=a(91);t.a=()=>{const{navbar:{logo:e}}=Object(o.a)(),{isDarkTheme:t}=Object(n.a)(),a=Object(r.default)(e.href||"/");let l={};e.target?l={target:e.target}:Object(c.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});const s=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(r.default)(s),logoAlt:e.alt}}},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));const n="default";function r(e,t){return`docs-${e}-${t}`}},120:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(121)),s=m(a(7)),i=m(a(122)),u=m(a(123)),d=a(124);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},121:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},124:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},125:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(2),r=a(0),c=a.n(r),o=a(106),l=a(95),s=a(107);function i({label:e,to:t,docsPluginId:a,...r}){var i;const u=Object(l.useActiveVersion)(a),{preferredVersion:d}=Object(s.a)(a),m=Object(l.useLatestVersion)(a),f=null!==(i=null!=u?u:d)&&void 0!==i?i:m,h=null!=e?e:f.label,b=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return c.a.createElement(o.a,Object(n.a)({},r,{label:h,to:b}))}},129:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(0),c=a.n(r),o=a(106),l=a(95),s=a(107);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:a,dropdownItemsBefore:r,dropdownItemsAfter:u,...d}){var m,f;const h=Object(l.useActiveDocContext)(t),b=Object(l.useVersions)(t),v=Object(l.useLatestVersion)(t),{preferredVersion:p,savePreferredVersionName:g}=Object(s.a)(t);const k=null!==(m=null!==(f=h.activeVersion)&&void 0!==f?f:p)&&void 0!==m?m:v,E=e?"Versions":k.label,O=e?void 0:i(k).path;return c.a.createElement(o.a,Object(n.a)({},d,{mobile:e,label:E,to:O,items:function(){const e=b.map((e=>{const t=(null==h?void 0:h.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==h?void 0:h.activeVersion),onClick:()=>{g(e.name)}}})),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:a?()=>!1:void 0}))}},130:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(0),c=a.n(r),o=a(106),l=a(95),s=a(90),i=a(107);function u({docId:e,activeSidebarClassName:t,label:a,docsPluginId:r,...u}){var d;const{activeVersion:m,activeDoc:f}=Object(l.useActiveDocContext)(r),{preferredVersion:h}=Object(i.a)(r),b=Object(l.useLatestVersion)(r),v=null!==(d=null!=m?m:h)&&void 0!==d?d:b,p=v.docs.find((t=>t.id===e));if(!p)throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${v.name}.\nAvailable docIds=\n- ${v.docs.join("\n- ")}`);return c.a.createElement(o.a,Object(n.a)({exact:!0},u,{className:Object(s.a)(u.className,{[t]:f&&f.sidebar===p.sidebar}),label:null!=a?a:p.id,to:p.path}))}},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(90),o=a(91),l=a(110),s=a(54),i=a.n(s);var u=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(l.a)(),{announcementBar:a}=Object(o.a)();if(!a)return null;const{content:n,backgroundColor:s,textColor:u,isCloseable:d}=a;return!n||d&&e?null:r.a.createElement("div",{className:i.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(i.a.announcementBarContent,{[i.a.announcementBarCloseable]:d}),dangerouslySetInnerHTML:{__html:n}}),d?r.a.createElement("button",{type:"button",className:i.a.announcementBarClose,onClick:t,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},d=a(2),m=a(89),f=a(93),h=()=>null,b=a(120),v=a.n(b),p=a(55),g=a.n(p);const k=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.dark),style:t},e),E=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.light),style:t},e);var O=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:a,lightIcon:n,lightIconStyle:c}}}=Object(o.a)(),{isClient:l}=Object(f.a)();return r.a.createElement(v.a,Object(d.a)({disabled:!l,icons:{checked:r.a.createElement(k,{icon:t,style:a}),unchecked:r.a.createElement(E,{icon:n,style:c})}},e))},j=a(101),y=a(103);var _=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)((()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),[t,a]},w=a(113);var C=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[o,l]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]),d=Object(y.useLocation)(),[m,f]=_(d.hash);return Object(w.a)((({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void l(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&t>=o?a(!1):t+i<n&&a(!0),l(t)}),[o,s]),Object(n.useEffect)((()=>{e&&(a(!0),f(d.hash))}),[d]),Object(n.useEffect)((()=>{e&&m&&c(!0)}),[m]),{navbarRef:u,isNavbarVisible:t}},N=a(114),S=a(115),T=a(116),L=a(56),I=a.n(L),x=a(106);const D={default:()=>x.a,docsVersion:()=>a(125).default,docsVersionDropdown:()=>a(129).default,doc:()=>a(130).default};function B({type:e,...t}){const a=((e="default")=>{const t=D[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(a,t)}const M="right";var P=function(){const{isClient:e}=Object(f.a)(),{navbar:{title:t,items:a,hideOnScroll:l,style:s},colorMode:{disableSwitch:i}}=Object(o.a)(),[u,b]=Object(n.useState)(!1),[v,p]=Object(n.useState)(!1),{isDarkTheme:g,setLightTheme:k,setDarkTheme:E}=Object(j.a)(),{navbarRef:y,isNavbarVisible:_}=C(l),{logoLink:w,logoLinkProps:L,logoImageUrl:x,logoAlt:D}=Object(T.a)();Object(N.a)(u);const P=Object(n.useCallback)((()=>{b(!0)}),[b]),A=Object(n.useCallback)((()=>{b(!1)}),[b]),V=Object(n.useCallback)((e=>e.target.checked?E():k()),[k,E]),X=Object(S.a)();Object(n.useEffect)((()=>{X===S.b.desktop&&b(!1)}),[X]);const{leftItems:F,rightItems:U}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:M)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:M)}))}}(a);return r.a.createElement("nav",{ref:y,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===s,"navbar--primary":"primary"===s,"navbar-sidebar--show":u,[I.a.navbarHideable]:l,[I.a.navbarHidden]:!_})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,Object(d.a)({className:"navbar__brand",to:w},L),null!=x&&r.a.createElement("img",{key:e,className:"navbar__logo",src:x,alt:D}),null!=t&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",{[I.a.hideLogoText]:v})},t)),F.map(((e,t)=>r.a.createElement(B,Object(d.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},U.map(((e,t)=>r.a.createElement(B,Object(d.a)({},e,{key:t})))),!i&&r.a.createElement(O,{className:I.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:g,onChange:V}),r.a.createElement(h,{handleSearchBarToggle:p,isSearchBarExpanded:v}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,Object(d.a)({className:"navbar__brand",onClick:A,to:w},L),null!=x&&r.a.createElement("img",{key:e,className:"navbar__logo",src:x,alt:D}),null!=t&&r.a.createElement("strong",{className:"navbar__title"},t)),!i&&u&&r.a.createElement(O,{"aria-label":"Dark mode toggle in sidebar",checked:g,onChange:V})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},a.map(((e,t)=>r.a.createElement(B,Object(d.a)({mobile:!0},e,{onClick:A,key:t})))))))))},A=a(94),V=a(57),X=a.n(V);function F({to:e,href:t,label:a,prependBaseUrlToHref:n,...c}){const o=Object(A.default)(e),l=Object(A.default)(t,{forcePrependBaseUrl:!0});return r.a.createElement(m.a,Object(d.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?l:t}:{to:o},c),a)}const U=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var R=function(){const{footer:e}=Object(o.a)(),{copyright:t,links:a=[],logo:n={}}=e||{},l=Object(A.default)(n.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(F,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"text--center"},n&&n.src&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:X.a.footerLogoLink},r.a.createElement(U,{alt:n.alt,url:l})):r.a.createElement(U,{alt:n.alt,url:l})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))):null},H=a(10);const $="light",G="dark",W=e=>e===G?G:$,Y=()=>H.a.canUseDOM?W(document.documentElement.getAttribute("data-theme")):$,K=e=>{try{localStorage.setItem("theme",W(e))}catch(t){console.error(t)}};var z=()=>{const{colorMode:{disableSwitch:e=!1}}=Object(o.a)(),[t,a]=Object(n.useState)(Y),r=Object(n.useCallback)((()=>{a($),K($)}),[]),c=Object(n.useCallback)((()=>{a(G),K(G)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",W(t))}),[t]),Object(n.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(W(e))}catch(t){console.error(t)}}),[a]),Object(n.useEffect)((()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{a(e?G:$)}))}),[]),{isDarkTheme:t===G,setLightTheme:r,setDarkTheme:c}},J=a(112);var q=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=z();return r.a.createElement(J.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};const Q="docusaurus.tab.";var Z=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(Q)){e[a.substring(Q.length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t((t=>({...t,[e]:n}))),a(e,n)}}};const ee="docusaurus.announcement.dismiss",te="docusaurus.announcement.id";var ae=()=>{const{announcementBar:e}=Object(o.a)(),[t,a]=Object(n.useState)(!0),r=Object(n.useCallback)((()=>{localStorage.setItem(ee,"true"),a(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=localStorage.getItem(te);"annoucement-bar"===n&&(n="announcement-bar");const r=t!==n;localStorage.setItem(te,t),r&&localStorage.setItem(ee,"false"),(r||"false"===localStorage.getItem(ee))&&a(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},ne=a(111);var re=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=Z(),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}=ae();return r.a.createElement(ne.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a,isAnnouncementBarClosed:n,closeAnnouncementBar:c}},e.children)},ce=a(119);function oe({children:e}){return r.a.createElement(q,null,r.a.createElement(re,null,r.a.createElement(ce.a,null,e)))}var le=a(102);function se({language:e,version:t,tag:a}){return r.a.createElement(le.a,null,e&&r.a.createElement("meta",{name:"docusaurus_language",content:""+e}),t&&r.a.createElement("meta",{name:"docusaurus_version",content:t}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var ie=a(118);function ue(e){const{siteConfig:t}=Object(f.a)(),{favicon:a,title:n,themeConfig:{image:c,metadatas:o},url:l,titleDelimiter:s}=t,{title:i,description:u,image:m,keywords:h,permalink:b,searchMetadatas:v}=e,p=i?`${i} ${s} ${n}`:n,g=m||c,k=Object(A.default)(g,{absolute:!0}),E=Object(A.default)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,null,r.a.createElement("html",{lang:"en"}),p&&r.a.createElement("title",null,p),p&&r.a.createElement("meta",{property:"og:title",content:p}),a&&r.a.createElement("link",{rel:"shortcut icon",href:E}),u&&r.a.createElement("meta",{name:"description",content:u}),u&&r.a.createElement("meta",{property:"og:description",content:u}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:k}),g&&r.a.createElement("meta",{property:"twitter:image",content:k}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),b&&r.a.createElement("meta",{property:"og:url",content:l+b}),b&&r.a.createElement("link",{rel:"canonical",href:l+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(se,Object(d.a)({tag:ie.a,language:"en"},v)),r.a.createElement(le.a,null,o.map(((e,t)=>r.a.createElement("meta",Object(d.a)({key:"metadata_"+t},e))))))}a(58);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return r.a.createElement(oe,null,r.a.createElement(ue,e),r.a.createElement(u,null),r.a.createElement(P,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(R,null))}}}]);