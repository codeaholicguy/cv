webpackJsonp([0x67ef26645b2a,60335399758886],{97:function(e,t){e.exports={layoutContext:{}}},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(5),a=r(i),s=n(196),c=r(s),u=n(97),l=r(u);t.default=function(e){return a.default.createElement(c.default,o({},e,l.default))},e.exports=t.default},268:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),u(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var d=s(e),p=s(t)}catch(e){return!1}if(d.length!=p.length)return!1;for(d.sort(),p.sort(),i=d.length-1;i>=0;i--)if(d[i]!=p[i])return!1;for(i=d.length-1;i>=0;i--)if(l=d[i],!u(e[l],t[l],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,s=n(270),c=n(269),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},269:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},270:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},277:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},374:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),d=r(l),p=n(7),f=r(p),T=n(394),h=r(T),m=n(268),E=r(m),y=n(375),A=n(179),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case A.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case A.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,s=o(i,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,a),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),d.default.createElement(e,i)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:f.default.object,bodyAttributes:f.default.object,children:f.default.oneOfType([f.default.arrayOf(f.default.node),f.default.node]),defaultTitle:f.default.string,defer:f.default.bool,encodeSpecialCharacters:f.default.bool,htmlAttributes:f.default.object,link:f.default.arrayOf(f.default.object),meta:f.default.arrayOf(f.default.object),noscript:f.default.arrayOf(f.default.object),onChangeClientState:f.default.func,script:f.default.arrayOf(f.default.object),style:f.default.arrayOf(f.default.object),title:f.default.string,titleAttributes:f.default.object,titleTemplate:f.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},g=(0,h.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(S),v=b(g);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},179:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},375:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(5),s=r(a),c=n(4),u=r(c),l=n(179),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=E(e,l.TAG_NAMES.TITLE),n=E(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return E(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();t.indexOf(c)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(s)===-1||s!==l.TAG_PROPERTIES.INNER_HTML&&s!==l.TAG_PROPERTIES.CSS_TEXT&&s!==l.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=(0,u.default)({},r[s],o[s]);r[s]=c}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:h([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:E(e,l.HELMET_PROPS.DEFER),encode:E(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:m(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:m(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,_=function(e){w&&g(w),e.defer?w=S(function(){O(e,function(){w=null})}):(O(e),w=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,o),M(p,f);var T={baseTag:I(l.TAG_NAMES.BASE,n),linkTags:I(l.TAG_NAMES.LINK,i),metaTags:I(l.TAG_NAMES.META,a),noscriptTags:I(l.TAG_NAMES.NOSCRIPT,s),scriptTags:I(l.TAG_NAMES.SCRIPT,u),styleTags:I(l.TAG_NAMES.STYLE,d)},h={},m={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=T[e].oldTags)}),t&&t(),c(e,h,m)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),o.indexOf(c)===-1&&o.push(c);var d=i.indexOf(c);d!==-1&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=C(n),i=P(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+d(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+d(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),i=k(n,o);return[s.default.createElement(l.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),s.default.createElement(e,o)})},x=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return k(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:x(l.TAG_NAMES.BASE,t,r),bodyAttributes:x(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(l.ATTRIBUTE_NAMES.HTML,o,r),link:x(l.TAG_NAMES.LINK,i,r),meta:x(l.TAG_NAMES.META,a,r),noscript:x(l.TAG_NAMES.NOSCRIPT,s,r),script:x(l.TAG_NAMES.SCRIPT,c,r),style:x(l.TAG_NAMES.STYLE,u,r),title:x(l.TAG_NAMES.TITLE,{title:p,titleAttributes:f},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=_,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},394:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function p(){T=e(f.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var f=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!d(e,this.props)},t.prototype.componentWillMount=function(){f.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),p()},t.prototype.render=function(){return u.createElement(s,this.props)},t}(c.Component);return h.displayName="SideEffect("+r(s)+")",h.canUseDOM=l.canUseDOM,h}}var c=n(5),u=r(c),l=r(n(277)),d=r(n(411));e.exports=s},411:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!s(u))return!1;var l=e[u],d=t[u];if(o=n?n.call(r,l,d,u):void 0,o===!1||void 0===o&&l!==d)return!1}return!0}},306:function(e,t){e.exports={meta:{title:"Nguyen Nhat Hoang",description:"Nguyen Nhat Hoang Curriculum Vitae",keywords:"cv, nguyen nhat hoang, codeaholicguy, curriculum vitae, resume"},info:{name:"Nguyen Nhat Hoang",mobile:"+841698246714",email:"hoangnn93@gmail.com",linkedin:"https://vn.linkedin.com/in/nguyennhathoang",github:"https://github.com/codeaholicguy",blog:"https://codeaholicguy.com"},summary:["I have been a full-stack software engineer with more than 5 years in Web Application Development, Enterprise Application and Cloud Computing Development with good knowledge of Object-Oriented Analysis and Design, Architecture Design, Database Design, Design Pattern.","I have extensive knowledge of JavaScript, NodeJS, Java, and related technologies like React/Redux, Spring framework, Hibernate, etc.","I have considerable experience in designing scalability, high availability and high-performance back end services using Load Balancing, RPC, Caching, Message Queue System.","I am strong at leading, communication skill, like to help other and tend to work well within a group. I passionate about learning new languages and technologies as well as sharing with others.","I own a Vietnamese IT blog, love to share my working experience and knowledge with other developers.","I am also a speaker, a maintainer of some open-source projects and I love doing that."],awards:[{year:"2016",detail:"Best product in Marketing Category of Facebook Hackathon Vietnam 2016, team Ambar."}],history:[{title:"Web Team Lead",company:"Kobiton, KMS Technology",time:"April 2016 to present",skills:"JavaScript, NodeJS, ReactJS, Redux, Jest, Enzyme, Electron, KoaJS, Sequelize, Appium, Babel, Gulp, Webpack, Nginx, PostgreSQL, ElasticSearch, LogStash, Kibana, Jenkins, AWS",projects:[{description:"Kobiton (https://kobiton.com) is a mobile application testing service enables the user to test their Android, iOS, and Web apps on real, physical phones and tablets that are hosted by Kobiton cloud. A test report will be generated for each device being part of test execution, which contains playback, detailed logs, HTTP Commands, and Metadata. Support test automation using the Appium framework, which allows testing of native and hybrid Android, iOS applications created with PhoneGap, Titanium, Xamarin, Unity, and other frameworks.",responsibilities:["I managed the team with 5 members, we were responsible for Kobiton portal.","I oversaw and made the decision on all aspects of architecture and development of both frontend and backend of the product, including business focussed trade-offs around technology, features, quality and test strategy.","I mentored and paired with team members to help them learn new technologies, resolve their problems and ship features.","I validated customer problems and found user-focussed solutions by working directly with customers, product and sales teams."]}]},{title:"Senior Software Engineer",company:"NCT Corporation",time:"April 2015 to April 2016",skills:"Java, ElasticSearch, Solr, Gearman, Apache Kafka, Apache Thrift, Redis, Memcached, Kyoto Cabinet, Jetty Embedded, Nginx, MySQL, HTML5/CSS3, Javascript, jQuery",projects:[{description:"XMusic ( http://xmusic-apps.com ) is a quite new product of online music and video streaming of NCT Corporation. With premium content from major music record labels like Sony Music, Universal Music, Warner Music topped with most popular local artists. Currently, it has over 1 million downloads from two main platform iOS and Android.",responsibilities:["I was the lead developer of the team 3 members, we were responsible for building a scalability, high availability and high-performance back -end services using Microservices architecture.","I handled designing, estimation, development, code review of all modules of the backend system.","I mentored and paired with others to help them and coordinated with other teams (product, mobile app, admin dashboard) for shipping features."]},{description:"nhaccuatui.com ( https://nhaccuatui.com ) is one of the largest Vietnamese music on demand services, which runs on multiple platforms like Web, Android, iOS, Smart TV, WAP, Window Phone, Windows with over millions of views per day and average concurrent user on all types of device is over 30000.",responsibilities:["I was the core developer of backend team.","I re-designed the architecture of the backend system follow Microservices architecture in order to reduce the cost of operation and increase the scalability as well as the performance of the system.","I involved in designing, estimation, and development of various modules of the backend system.","I mentored and paired with team members to help them learn new technologies and ship features, I was also the one who usually did research new things and shared it with the team.","I coordinated with other teams for shipping features."]}]},{title:"Software Engineer",company:"FPT Software Ho Chi Minh",time:"Jan 2013 to April 2015",skills:"HTML5/CSS3, Javascript, Java, Spring, Jersey, Thyme leaf, Hibernate, JPA, ElasticSearch, Redis, Memcached, MySQL, OracleDB, LDAP, Tomcat, OAuth, Facebook Graph API, Twitter API, AWS",projects:[{description:"Actvila ( https://actvila.jp ) is a large Japanese video on demand service, which provides streaming multimedia content on multiple platforms such as Web, iOS, Android and especially focus on TV.",responsibilities:["I was the core developer of the project, who handled the Authentication services and various features in backend side.","I worked directly with the customer to understand the requirements of the project and finalize its scope.","I played full-stack developer role in the project and joined in whole project process include designing, estimation, and implementation."]},{description:"Toshiba Cloud TV Services provide services for millions Toshiba Smart TV users in multiple markets such as Euro, North America, Japanese. With key features are  multimedia playback via USB or WIFI/LAN network, providing media guide approach to listings browsing, link TV with mobile device such as iOS, Android for control as well as link multiple TV for sharing information, booking calendar for recording TV program, future viewing history-based recommendations system, interaction with social network services such as Facebook, Twitter.",responsibilities:["I was the backend developer of various modules.","I worked directly with the customer to understand the requirements of the project and finalize its scope as well as help them in changing requirements.","I designed and implemented the backend for the recommendation module, the social network modules."]}]}],education:[{school:"FPT University",major:"Software Engineering",time:"September 2010 to April 2014",achievements:["I had 50% scholarship.","I completed 8 semesters grade Good.","I was chosen as Team leader for Capstone project ."]}]}},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(5),c=r(s),u=n(7),l=r(u),d=n(374),p=r(d),f=n(306),T=r(f),h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{data:T.default}},t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",null,c.default.createElement(p.default,{title:T.default.meta.title,meta:[{name:"description",content:T.default.meta.description},{name:"keywords",content:T.default.meta.keywords}]}),c.default.createElement("div",null,e()))},t}(s.Component);h.propTypes={children:l.default.func},h.childContextTypes={data:l.default.object},t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-ff8de920e92865738548.js.map