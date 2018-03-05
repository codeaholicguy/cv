webpackJsonp([35783957827783],{91:function(e,t,n){"use strict";function a(e){return e}function l(e,t,n){function l(e,t){var n=N.hasOwnProperty(t)?N[t]:null;b.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,r=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&v.mixins(e,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==c){var u=n[o],s=a.hasOwnProperty(o);if(l(s,o),v.hasOwnProperty(o))v[o](e,u);else{var p=N.hasOwnProperty(o),m="function"==typeof u,E=m&&!p&&!s&&n.autobind!==!1;if(E)r.push(o,u),a[o]=u;else if(s){var h=N[o];i(p&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,o),"DEFINE_MANY_MERGED"===h?a[o]=f(a[o],u):"DEFINE_MANY"===h&&(a[o]=d(a[o],u))}else a[o]=u}}}else;}function s(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var l=n in v;i(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var r=n in e;if(r){var o=_.hasOwnProperty(n)?_[n]:null;return i("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],a))}e[n]=a}}}function p(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var l={};return p(l,n),p(l,a),l}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],l=t[n+1];e[a]=m(e,l)}}function h(e){var t=a(function(e,a,l){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=u,this.updater=l||n,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,D),r(t,e),r(t,g),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in N)t.prototype[l]||(t.prototype[l]=null);return t}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){s(e,t)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},b={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return o(M.prototype,e.prototype,b),h}var r,o=n(4),u=n(32),i=n(1),c="mixins";r={},e.exports=l},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,u,i=n(e),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var s in a)r.call(a,s)&&(i[s]=a[s]);if(l){u=l(a);for(var p=0;p<u.length;p++)o.call(a,u[p])&&(i[u[p]]=a[u[p]])}}return i}},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.__esModule=!0;var r=n(5),o=a(r),u=n(7),i=a(u),c=function(e,t){l(e);var n=t.data,a=n.info,r=n.summary,u=n.awards,i=n.history,c=n.educations;return o.default.createElement("div",null,o.default.createElement("div",null,o.default.createElement("h1",null,a.name),o.default.createElement("p",null,o.default.createElement("span",null,a.location),o.default.createElement("span",null," · "),o.default.createElement("span",null,a.mobile),o.default.createElement("span",null," · "),o.default.createElement("span",null,o.default.createElement("a",{href:a.email},a.email))),o.default.createElement("p",null,o.default.createElement("span",null,o.default.createElement("a",{href:a.linkedin},a.linkedin)),o.default.createElement("span",null," · "),o.default.createElement("span",null,o.default.createElement("a",{href:a.github},a.github)),o.default.createElement("span",null," · "),o.default.createElement("span",null,o.default.createElement("a",{href:a.blog},a.blog)))),o.default.createElement("div",null,o.default.createElement("h2",null,"Career summary"),o.default.createElement("ul",null,r.map(function(e,t){return o.default.createElement("li",{key:"summary-"+t},e)}))),o.default.createElement("div",null,o.default.createElement("h2",null,"Awards"),o.default.createElement("ul",null,u.map(function(e,t){return o.default.createElement("li",{key:"award-"+t},o.default.createElement("span",null,e.year),o.default.createElement("span",null," – "),o.default.createElement("span",null,e.detail))}))),o.default.createElement("div",null,o.default.createElement("h2",null,"Work history"),o.default.createElement("div",null,i.map(function(e,t){return o.default.createElement("div",{key:"history-"+t},o.default.createElement("h3",null,o.default.createElement("span",null,e.title),o.default.createElement("span",null,", "),o.default.createElement("span",null,e.company)),o.default.createElement("p",null,o.default.createElement("span",null,o.default.createElement("i",null,e.time))),o.default.createElement("p",null,o.default.createElement("span",null,o.default.createElement("strong",null,"Skill: ")),o.default.createElement("span",null,o.default.createElement("i",null,e.skills))),o.default.createElement("div",null,e.projects.map(function(e,t){return o.default.createElement("div",{key:"project-"+t},o.default.createElement("p",null,e.description),o.default.createElement("ul",null,e.responsibilities.map(function(e,t){return o.default.createElement("li",{key:"responsibility-"+t},e)})))})))}))),o.default.createElement("div",null,o.default.createElement("h2",null,"Education"),o.default.createElement("div",null,c.map(function(e,t){return o.default.createElement("div",null,o.default.createElement("h3",null,o.default.createElement("span",null,e.major),o.default.createElement("span",null,", "),o.default.createElement("span",null,e.school)),o.default.createElement("p",null,o.default.createElement("i",null,e.time)),o.default.createElement("ul",null,e.achievements.map(function(e,t){return o.default.createElement("li",{key:"achievement-"+t},e)})))}))))};c.contextTypes={data:i.default.object},t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-c993e0636ec39d085f6f.js.map