!function(e,t){"use strict";function r(r){var n=t.console;i[r]||(i[r]=!0,e.migrateWarnings.push(r),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+r),e.migrateTrace&&n.trace&&n.trace()))}function n(e,t,n,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return r(i),n}})}e.migrateVersion="3.0.0",function(){var r=t.console&&t.console.log&&function(){t.console.log.apply(t.console,arguments)},n=/^[12]\./;r&&(e&&!n.test(e.fn.jquery)||r("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&r("JQMIGRATE: Migrate plugin loaded multiple times"),r("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion))}();var i={};e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var a=e.fn.init,s=e.isNumeric,o=e.find,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,c=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(r("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var t=Array.prototype.slice.call(arguments);if("string"==typeof e&&u.test(e))try{document.querySelector(e)}catch(n){e=e.replace(c,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{document.querySelector(e),r("Attribute selector with '#' must be quoted: "+t[0]),t[0]=e}catch(e){r("Attribute selector with '#' was not fixed: "+t[0])}}return o.apply(this,t)};var l;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e.find[l]=o[l]);e.fn.size=function(){return r("jQuery.fn.size() is deprecated; use the .length property"),this.length},e.parseJSON=function(){return r("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){function n(t){var r=t&&t.toString();return!e.isArray(t)&&r-parseFloat(r)+1>=0}var i=s(t),a=n(t);return i!==a&&r("jQuery.isNumeric() should not be called on constructed objects"),a},n(e,"unique",e.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),n(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),n(e.expr,":",e.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var p=e.ajax;e.ajax=function(){var e=p.apply(this,arguments);return e.promise&&(n(e,"success",e.done,"jQXHR.success is deprecated and removed"),n(e,"error",e.fail,"jQXHR.error is deprecated and removed"),n(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var d=e.fn.removeAttr,f=e.fn.toggleClass,y=/\S+/g;e.fn.removeAttr=function(t){var n=this;return e.each(t.match(y),function(t,i){e.expr.match.bool.test(i)&&(r("jQuery.fn.removeAttr no longer sets boolean properties: "+i),n.prop(i,!1))}),d.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?f.apply(this,arguments):(r("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var r=this.getAttribute&&this.getAttribute("class")||"";r&&e.data(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||t===!1?"":e.data(this,"__className__")||"")}))};var g=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return g=!0,e=n.apply(this,arguments),g=!1,e})}),e.swap=function(e,t,n,i){var a,s,o={};g||r("jQuery.swap() is undocumented and deprecated");for(s in t)o[s]=e.style[s],e.style[s]=t[s];a=n.apply(e,i||[]);for(s in t)e.style[s]=o[s];return a};var h=e.data;e.data=function(t,n,i){var a;return n&&n!==e.camelCase(n)&&(a=e.hasData(t)&&h.call(this,t),a&&n in a)?(r("jQuery.data() always sets/gets camelCased names: "+n),arguments.length>2&&(a[n]=i),a[n]):h.apply(this,arguments)};var m=e.Tween.prototype.run;e.Tween.prototype.run=function(t){e.easing[this.easing].length>1&&(r('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),e.easing[this.easing]=e.easing[this.easing].bind(e.easing,t,this.options.duration*t,0,1,this.options.duration)),m.apply(this,arguments)};var v=e.fn.load,j=e.event.fix;e.event.props=[],e.event.fixHooks={},e.event.fix=function(t){var n,i=t.type,a=this.fixHooks[i],s=e.event.props;if(s.length)for(r("jQuery.event.props are deprecated and removed: "+s.join());s.length;)e.event.addProp(s.pop());if(a&&!a._migrated_&&(a._migrated_=!0,r("jQuery.event.fixHooks are deprecated and removed: "+i),(s=a.props)&&s.length))for(;s.length;)e.event.addProp(s.pop());return n=j.call(this,t),a&&a.filter?a.filter(n,t):n},e.each(["load","unload","error"],function(t,n){e.fn[n]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?v.apply(this,e):(r("jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e(function(){e(document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===document&&r("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,n){return r("jQuery.fn.bind() is deprecated"),this.on(e,null,t,n)},unbind:function(e,t){return r("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,n,i){return r("jQuery.fn.delegate() is deprecated"),this.on(t,e,n,i)},undelegate:function(e,t,n){return r("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Q=e.fn.offset;e.fn.offset=function(){var t,n=this[0],i={top:0,left:0};return n&&n.nodeType?(t=(n.ownerDocument||document).documentElement,e.contains(t,n)?Q.apply(this,arguments):(r("jQuery.fn.offset() requires an element connected to a document"),i)):(r("jQuery.fn.offset() requires a valid DOM element"),i)};var b=e.param;e.param=function(t,n){var i=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===n&&i&&(r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),n=i),b.call(this,t,n)};var w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=e.Deferred,A=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];e.Deferred=function(t){var n=x(),i=n.promise();return n.pipe=i.pipe=function(){var t=arguments;return r("deferred.pipe() is deprecated"),e.Deferred(function(r){e.each(A,function(a,s){var o=e.isFunction(t[a])&&t[a];n[s[1]](function(){var t=o&&o.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[s[0]+"With"](this===i?r.promise():this,o?[t]:arguments)})}),t=null}).promise()},t&&t.call(n,n),n}}(jQuery,window);