!function(){function br(a,b){function E(){if(A<B){p&&(c.left=d(e(A,u,f,B))+"px");if(r){var j=d(e(A,w,h,B));c.width=j+"px",i&&(c.left=u+ -i*(j-w)+"px")}q&&(c.top=d(e(A,v,g,B))+"px");if(s){var m=d(e(A,x,k,B));c.height=m+"px",l&&(c.top=v+ -l*(m-x)+"px")}t&&Q(a,e(A,y,z,B)),A++,C=setTimeout(E,15.6)}else p&&(c.left=u+f+"px"),r&&(c.width=w+h+"px",i&&(c.left=u+ -i*h+"px")),q&&(c.top=v+g+"px"),s&&(c.height=x+k+"px",l&&(c.top=v+ -l*k+"px")),t&&Q(a,y+z),b.after&&b.after();b.running&&b.running()}var c=a.style,d=Math.ceil,e=o[b.type||"Both"],f=0,g=0,h=0,i=0,k=0,l=0,m=0,n=0,p=0,q=0,r=0,s=0,t=0,u,v,w,x,y,z,A=0,B=d((b.t||1e3)/16),C,D;j.ie&&j.ie<8&&J(a,"zoom",1),typeof b.w!="undefined"&&(r=1,w=N(a),typeof b.w=="number"?h=b.w-w:h=+b.w,b.ws&&(u=L(a),i=b.ws)),typeof b.h!="undefined"&&(s=1,x=O(a),typeof b.h=="number"?k=b.h-x:k=+b.h,b.hs&&(v=M(a),l=b.hs)),typeof b.x!="undefined"&&(p=1,i=0,u=L(a),typeof b.x=="number"?f=b.x-u:f=+b.x),typeof b.y!="undefined"&&(q=1,l=0,v=M(a),typeof b.y=="number"?g=b.y-v:g=+b.y),b.o>=0&&(t=1,y=Q(a),typeof b.o=="number"?z=b.o-y:z=+b.o);if(p||q||i||l)J(a,"position")=="static"&&(c.position="relative"),j.ie&&j.ie<7&&(r||s)&&(c.overflow="hidden");b.before&&b.before(),C=setTimeout(E,16);return{stop:function(){b.lock||clearTimeout(C),b.stop&&b.stop()}}}function bq(a){return!!a&&!!bp(a.node)}function bp(a){return typeof a=="object"&&a.nodeType===1}function bo(a){return{}.toString.call(a)=="[object Array]"}function bn(a){typeof a=="object"&&(a=a.join(""));if(/{[\w\W]+?}/.test(a)){var b=c.createElement("style");b.type="text/css",b.styleSheet&&(b.styleSheet.cssText=a)||b.appendChild(c.createTextNode(a))}else{var b=c.createElement("link");b.rel="stylesheet",b.href=a}e.appendChild(b);return this}function bm(a,b,d,f){var g=c.createElement("script");d&&(a+="?"+(typeof d=="object"?bd(d):d)),g.src=a,f&&(g.charset=f),e.appendChild(g),g.readyState?g.onreadystatechange=function(){if(g.readyState=="loaded"||g.readyState=="complete")b&&b(),e.removeChild(g)}:g.onload=function(){b&&b(),e.removeChild(g)};return this}function bl(a,b){var c=new Image;c.src=a;if(c.complete)return b&&b.call(c,c);c.onload=function(){b&&b.call(c,c)};return this}function bk(a,b,c){var d=new l;c&&(a+="?"+(typeof c=="object"?bd(c):c)),d.open("get",a,!0),d.onreadystatechange=function(){d.readyState==4&&(d.status==200?b&&b(d.responseText):b&&b(null))},d.send(null);return d}function bj(a,b,c){var d=new l;d.open("post",a,!0),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.onreadystatechange=function(){d.readyState==4&&(d.status==200?b&&b(d.responseText):b&&b(null))},d.send(typeof c=="object"?bd(c):c);return d}function bi(a){try{return Function("return "+a)()}catch(b){return{}}}function bh(a){return a.replace(/^\s+|\s+$/g,"")}function bg(a){return a.replace(/%/g,"%25").replace(/ /g,"%20").replace(/#/g,"%23").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\//g,"%2F").replace(/\?/g,"%3F").replace(/\+/g,"%2B")}function bf(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function be(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bd(a,b){var c=[];if(typeof a=="object")for(var d in a)/^e_/.test(d)?c.push(d.substr(2)+"="+bg(a[d])):c.push(d+"="+a[d]);b&&c.push("t="+ +(new Date));return c.join("&")}function bc(a){switch(typeof a){case"object":if(a==null)return a;var b,c=[];if(Object.prototype.toString.apply(a)=="[object Array]"){for(var d=0,e=a.length;d<e;d++)c[d]=arguments.callee(a[d]);return"["+c.join(",")+"]"}for(d in a)c.push('"'+d+'":'+arguments.callee(a[d]));return"{"+c.join(",")+"}";case"function":a=""+a;case"string":return'"'+a.replace(/"/g,'\\"')+'"';case"number":case"boolean":case"undefined":return a}return a}function bb(a,b){if(bo(a))for(var c=0,d=a.length;c<d;c++)b.call(a[c],c,a[c]);else for(var c in a)b.call(a[c],c,a[c])}function ba(a,b,d){if(typeof b=="undefined"){var f=c.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));return f!=null?unescape(f[2]):null}var e=new Date;e.setTime(e.getTime()+(b==null?-1:d||2592e6)),c.cookie=a+"="+escape(b)+";expires="+e.toGMTString()}function _(a,b,c,d){var e=g[a.___EVENTID][b],f=0;while(e[f]){if(e[f].func==c&&e[f].who==(d||a)){e.splice(f,1);break}f++}return this}function $(b,c,d,e){b.___EVENTID||(g[b.___EVENTID=a++]=[]);var f=g[b.___EVENTID];f[c]||(f[c]=[],h(b,c,function(a){var b=f[c].slice(0);while(b[0])b[0].func.call(b[0].who,Z(a)),b.shift()})),f[c].push({func:d,who:e||b});return this}function Z(a){var b={"native":a,type:a.type,keyCode:a.keyCode,clientX:a.clientX,clientY:a.clientY,target:a.target||a.srcElement,fromTarget:a.fromElement||(a.type=="mouseover"?a.relatedTarget:null),toTarget:a.toElement||(a.type=="mouseout"?a.relatedTarget:null),stopPropagation:function(){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},mouseKey:(j.ie?{1:"left",4:"middle",2:"right"}:{0:"left",1:"middle",2:"right"})[a.button],preventDefault:function(){a.preventDefault?a.preventDefault():a.returnValue=!1}};return b}function Y(a,b){if(b==undefined)return a.value.replace(/^\s+|\s+$/g,"");a.value=b;return this}function X(a,b){if(b==a)return 1;if(a.contains){if(a.contains(b))return 2}else if(a.compareDocumentPosition&&a.compareDocumentPosition(b)==20)return 2;return 0}function W(a,b){if(typeof b!="undefined")return b==a.nodeName;return a.nodeName}function V(a,b){var c=typeof b,d="";if(c=="undefined")return a.innerHTML;c=="function"?d=b():c=="object"?bb(b,function(){d+=this}):d=b;if(a.nodeName=="SELECT"&&c!="undefined"&&$bom_browser.ie){var e=document.createElement("span");e.innerHTML="<select>"+d+"</select>",a.innerHTML="",bb(u("option",e),function(){a.appendChild(this)})}else a.innerHTML=d;return this}function U(a,b,c){if(c===null)a.removeAttribute(b);else{if(c==undefined){if(b=="style")return a.style.cssText;if(b=="href"&&a.nodeName=="A")return a.getAttribute(b,2);if(a[b]!=undefined)return a[b];var e=a.getAttribute(b);return e==null?void 0:e}if(typeof b=="object")for(var d in b)U(a,d,b[d]);else b=="style"?a.style.cssText=c:a[b]!=undefined?a[b]=c:a.setAttribute(b,c,2)}return this}function T(a,b){if((new RegExp("\\s"+b+"\\s")).test(" "+a.className+" "))return!0;return!1}function S(a){a.style.display="none";return this}function R(a){a.style.display="block";return this}function Q(a,b){if(j.ie){if(typeof b=="undefined"){var c=J(a,"filter");if(c)return+c.match(/(\d+)/)[0]/100;return 1}a.style.filter="Alpha(opacity="+b*100+")"}else{if(typeof b=="undefined"){b=+J(a,"opacity");return b>-1?b:1}a.style.opacity=b}return this}function P(a){var e=0,f=0;if("getBoundingClientRect"in d)var g=a.getBoundingClientRect(),h=c.body,i=d.clientTop||h.clientTop||0,j=d.clientLeft||h.clientLeft||0,e=g.top+(b.pageYOffset||d&&d.scrollTop||h.scrollTop)-i,f=g.left+(b.pageXOffset||d&&d.scrollLeft||h.scrollLeft)-j;else do e+=a.offsetTop||0,f+=a.offsetLeft||0,a=a.offsetParent;while(a);return{left:f,top:e,width:a.offsetWidth,height:a.offsetHeight}}function O(a,b){if(b!=undefined){J(a,"height",b);return this}return K(a,"height")||a.offsetHeight-K(a,"paddingTop")-K(a,"paddingBottom")-K(a,"borderTop")-K(a,"borderBottom")}function N(a,b){if(b!=undefined){J(a,"width",b);return this}return K(a,"width")||a.offsetWidth-K(a,"paddingLeft")-K(a,"paddingRight")-K(a,"borderLeft")-K(a,"borderRight")}function M(a,b){if(b!=undefined){J(a,"top",b);return this}return K(a,"top")}function L(a,b){if(b!=undefined){J(a,"left",b);return this}return K(a,"left")}function K(a,b){var c=parseInt(J(a,b))||0;if(/^width|height|left|top$/.test(b))switch(b){case"left":return c||a.offsetLeft-K(a,"marginLeft");case"top":return c||a.offsetTop-K(a,"marginTop");case"width":return c||a.offsetWidth-K(a,"paddingLeft")-K(a,"paddingRight")-K(a,"borderLeftWidth")-K(a,"borderRightWidth");case"height":return c||a.offsetHeight-K(a,"paddingTop")-K(a,"paddingBottom")-K(a,"borderTopWidth")-K(a,"borderBottomWidth")}return c}function J(a,b,d){if(typeof d!="undefined")b=b.replace(/-(\w)/g,function(a,b){return b.toUpperCase()}),a.style[b]=H(b,d);else if(typeof b=="object")for(var e in b)J(a,e,b[e]);else{if(b.indexOf(":")==-1){b=b.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});return I(b,a.style&&a.style[b]||(a.currentStyle||c.defaultView.getComputedStyle(a,null))[b])}var f=b.replace(/;$/,"").split(";"),g;for(var h=0,i=f.length;h<i;h++)g=f[h].split(":"),J(a,g[0],g[1])}return this}function I(a,b){if(/px$/.test(b))return parseFloat(b);return b}function H(a,b){if(/width|height|left|top|right|bottom|margin|padding/.test(a)&&/^[\-\d.]+$/.test(b))return b+"px";return b}function G(a,b,c){if(c)a.className=(" "+a.className+" ").replace(new RegExp("\\s+"+c+"\\s+")," "+b+" ").replace(/^\s+|\s+$/g,"");else{if(!b)return a.className;var d=b.substr(0,1),e=b.substr(1);if(d=="+")T(a,e)||(a.className+=" "+e.split(",").join(" "));else if(d=="-")a.className=(" "+a.className+" ").replace(new RegExp("\\s+("+e.split(",").join("|")+")(?=\\s+)","g"),"").replace(/^\s+|\s+$/g,"");else if(b)return T(a,b)}return this}function F(a,b){a.parentNode.replaceChild(A(b),a);return this}function E(a,b){a=a.cloneNode(b);return a}function D(a){a.parentNode.removeChild(a);return this}function C(a,b,c){b=A(b);if(c){while(a.nextSibling){a=a.nextSibling;if(a.nodeType==1){a.parentNode.insertBefore(b,a);return this}}a.parentNode.appendChild(b)}else a.parentNode.insertBefore(b,a);return this}function B(a,b,d){if(bo(b)){var e=c.createDocumentFragment();bb(b,function(){e.appendChild(A(this))}),b=e}else b=A(b);if(d==undefined){a.appendChild(b);return this}var f=a.childNodes;if(!j.ie){var g=[];for(var h=0,i=f.length;h<i;h++)f[h].nodeType==1&&g.push(f[h]);f=g}d>-1?f=f[d]:d<0&&(f=f[f.length+d+1]?f[f.length+d+1]:f[0]),f?f.parentNode.insertBefore(b,f):a.appendChild(b);return this}function A(a){if(bp(a))return a;if(bq(a))return a.node;if(a.indexOf("<")>-1){var b=c.createElement("div");b.innerHTML=a;return b.firstChild}return c.createElement(a)}function z(a){while(a=a.nextSibling)if(a.nodeType==1)return a}function y(a){while(a=a.previousSibling)if(a.nodeType==1)return a}function x(a,b){if(b==undefined)return a.parentNode;if(b>0){b++;while(b--)a=a.parentNode;return a}b=b.match(/^(?:#([\w\-]+))?\s*(?:(\w+))?(?:.([\w\-]+))?(?:\[(.+)\])?$/);if(!b)return null;var c=b[1],d=b[2],e=b[3],f=b[4];d=d&&d.toUpperCase(),f=f&&f.split("=");if(c)return u(c);while(a=a.parentNode)if((!e||e&&T(a,e))&&(!d||a.nodeName==d)&&(!f||U(a,f[0])==f[1]))return a;return null}function w(a,b){var c=a.parentNode,d,e=b?u(b,a.parentNode):a.parentNode.childNodes,f=[],g=0;while(d=e[g++])d.parentNode==c&&a!=d&&d.nodeType==1&&f.push(d);return f.length?f:null}function v(a,b){var c=[],d=0,e=a.childNodes;while(e[d])e[d].nodeType==1&&c.push(e[d]),d++;if(b>-1)c=c[b];else if(b<0)c=c[c.length+b];else if(typeof b=="string"){var f=u(b,a),g=[];bb(f,function(){this.parentNode==a&&g.push(this)});if(g.length)return g}return c}function u(a,b){var d=c,e,f,g,h,i,j=[];if(typeof a=="object")return a;if(/^#[\w\-]+$/.test(a))return c.getElementById(a.substr(1));a=a.match(/^(?:#([\w\-]+))?\s*(?:(\w+))?(?:.([\w\-]+))?(?:\[(.+)\])?$/);if(a)e=a[1],f=a[2],g=a[3],h=a[4];else return null;typeof b=="object"&&(d=b);if(e){d=c.getElementById(e);if(!d)return null}i=d.getElementsByTagName(f||"*");if(g||h){if(g){j=[];var k=new RegExp("\\s"+g+"\\s");for(var l=0,m=i.length;l<m;l++)k.test(" "+i[l].className+" ")&&j.push(i[l])}if(h){g&&(i=j.slice(0)),j=[],h=h.split("=");var n=h[0],o=h[1]||"";for(var l=0,m=i.length;l<m;l++)i[l].getAttribute(n)==o&&j.push(i[l])}}else for(var l=0,m=i.length;l<m;l++)j[l]=i[l];if(!j.length)return null;return j}function t(a,b,c,d){var e=a.call(this,this.node,b,c,d);if(this.nodes&&e==this){var f=1;while(this.nodes[f])a.call(this,this.nodes[f],b,c,d),f++;return this}return e}function s(a,d){if(a==c||a==b)this.node=a;else{var e=u(a,d);if(e==null)return null;e.nodeName?this.node=e:(this.nodes=e,this.node=e[0])}}function r(a,b){switch(typeof a){case"string":case"object":if(a==null||a==undefined)return null;var c=new s(a,b);return c.node?c:null}}var a=1,b=window,c=document,d=c.documentElement,e=u("head")?u("head")[0]:u("html")[0],f=function(){var a=0,b=/\b_super\b/,c=function(){};c.prototype={ops:function(a,b){b=b||{};for(var c in a)this["_"+c]=c in b?b[c]:a[c]}},c.extend=function(c){function i(b){if(this.constructor!=Object)return new i({FID:"JClassArguments",val:arguments});!a&&this.init&&(b&&b.FID&&b.FID=="JClassArguments"?this.init.apply(this,b.val):this.init.apply(this,arguments),this.init=null)}function f(a,b){return function(){this._super=d[a];var c=b.apply(this,arguments);return c}}var d=this.prototype;a=1;var e=new this;a=0;var g;for(var h in c)g=c[h],e[h]=typeof g=="function"&&typeof d[h]=="function"&&b.test(g)?f(h,g):g;i.prototype=e,i.constructor=i,i.extend=arguments.callee;return i};return c}(),g={},h=function(){return c.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){a.addEventListener(b,c,!1)}}(),i=function(){var a=!1,d=[],e,f=function(b){a?b():d.push(b)},g=function(){for(var a=0,b=d.length;a<b;a++)d[a]();d=null},h=function(d){a||(a=!0,g(),c.removeEventListener?c.removeEventListener("DOMContentLoaded",h,!1):c.attachEvent&&(c.detachEvent("onreadystatechange",h),b==b.top&&(clearInterval(e),e=null)))};c.addEventListener?c.addEventListener("DOMContentLoaded",h,!1):c.attachEvent&&(c.attachEvent("onreadystatechange",function(){/loaded|complete/.test(c.readyState)&&h()}),b==b.top&&(e=setInterval(function(){try{a||c.documentElement.doScroll("left")}catch(b){return}h()},5)));return f}(),j=function(){var a=navigator.userAgent.toLowerCase(),b={},c;(c=a.match(/msie ([\d.]+)/))?b.ie=c[1]:(c=a.match(/firefox\/([\d.]+)/))?b.firefox=c[1]:(c=a.match(/chrome\/([\d.]+)/))?b.chrome=c[1]:(c=a.match(/opera.([\d.]+)/))?b.opera=c[1]:(c=a.match(/version\/([\d.]+).*safari/))?b.safari=c[1]:0;return b}(),k=/MSIE\s*6.0/i.test(navigator.appVersion),l=function(){return b.XMLHttpRequest||function(a){var b=[0,"Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],c=4;while(--c)try{a=new ActiveXObject(b[c]);return function(){return a}}catch(d){alert("ajax\u5bf9\u8c61\u4e0d\u5b58\u5728\uff01")}}()}(),m=function(){var a,b=j.chrome;return function(e,f,g){var h=b?c.body:d;switch(arguments.length){case 0:return h.scrollTop;case 1:return h.scrollTop=e;default:var i=0,j=Math.ceil(f/16),k=h.scrollTop,g=o[g||"circOut"],l=e-k;!function(b){clearTimeout(a),b=arguments.callee,a=setTimeout(function(){i<j?(h.scrollTop=g(i,k,l,j),b()):(h.scrollTop=e,clearTimeout(a)),i++},16)}()}}}(),n={},o={Linear:function(a,b,c,d){return c*a/d+b},slowIn:function(a,b,c,d){return c*(a/=d)*a+b},slowOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},slowBoth:function(a,b,c,d){if((a/=d/2)<1)return c/2*a*a+b;return-c/2*(--a*(a-2)-1)+b},In:function(a,b,c,d){return c*(a/=d)*a*a*a+b},Out:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},Both:function(a,b,c,d){if((a/=d/2)<1)return c/2*a*a*a*a+b;return-c/2*((a-=2)*a*a*a-2)+b},fastIn:function(a,b,c,d){return a==0?b:c*Math.pow(2,10*(a/d-1))+b},fastOut:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},fastBoth:function(a,b,c,d){if(a==0)return b;if(a==d)return b+c;if((a/=d/2)<1)return c/2*Math.pow(2,10*(a-1))+b;return c/2*(-Math.pow(2,-10*--a)+2)+b},circIn:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},circOut:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},circBoth:function(a,b,c,d){if((a/=d/2)<1)return-c/2*(Math.sqrt(1-a*a)-1)+b;return c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},elasticIn:function(a,b,c,d,e,f){if(a==0)return b;if((a/=d)==1)return b+c;f||(f=d*.3);if(!e||e<Math.abs(c)){e=c;var g=f/4}else var g=f/(2*Math.PI)*Math.asin(c/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f))+b},elasticOut:function(a,b,c,d,e,f){if(a==0)return b;if((a/=d)==1)return b+c;f||(f=d*.3);if(!e||e<Math.abs(c)){e=c;var g=f/4}else var g=f/(2*Math.PI)*Math.asin(c/e);return e*Math.pow(2,-10*a)*Math.sin((a*d-g)*2*Math.PI/f)+c+b},elasticBoth:function(a,b,c,d,e,f){if(a==0)return b;if((a/=d/2)==2)return b+c;f||(f=d*.3*1.5);if(!e||e<Math.abs(c)){e=c;var g=f/4}else var g=f/(2*Math.PI)*Math.asin(c/e);if(a<1)return-0.5*e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+b;return e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)*.5+c+b},backIn:function(a,b,c,d,e){e==undefined&&(e=1.70158);return c*(a/=d)*a*((e+1)*a-e)+b},backOut:function(a,b,c,d,e){e==undefined&&(e=1.70158);return c*((a=a/d-1)*a*((e+1)*a+e)+1)+b},backBoth:function(a,b,c,d,e){e==undefined&&(e=1.70158);if((a/=d/2)<1)return c/2*a*a*(((e*=1.525)+1)*a-e)+b;return c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b},bounceIn:function(a,b,c,d){return c-o.bounceOut(d-a,0,c,d)+b},bounceOut:function(a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},bounceBoth:function(a,b,c,d){return a<d/2?o.bounceIn(a*2,0,c,d)*.5+b:o.bounceOut(a*2-d,0,c,d)*.5+c*.5+b}},p={},q=f.extend({init:function(a,b){this.node=a,this.ops({before:0,after:0,runing:0,clone:0,lockx:0,locky:0,range:-1},b),this.addHand(b.hand||a)},addHand:function(a){$(a,"mousedown",this._beforeDrag,this)},rmvHand:function(a){$(a,"mousedown",this._beforeDrag,this)},_beforeDrag:function(a){if(a.mouseKey=="left"){a.stopPropagation();var e=this.node,f=E(e,!0),g=P(e),h=K(e,"marginLeft"),i=K(e,"marginTop");J(f,{position:"absolute",zIndex:9999,left:g.left-h,top:g.top-i,width:K(e,"width"),height:K(e,"height")}),B(u("body")[0],f),this._style=f.style,this._offsetX=a.clientX-f.offsetLeft+h,this._offsetY=a.clientY-f.offsetTop+i,$(c,"mousemove",this._draging,this),$(c,"mouseup",this._drop,this);if(j.ie)this._focusHand=a.target,$(this._focusHand,"losecapture",this._drop,this),this._focusHand.setCapture(!1);else{var k=this;this._win_blur=b.onblur||null,b.onblur=function(){k._win_blur&&k._win_blur(),k._drop(a)},a.preventDefault()}this._before&&this._before(a);if(this._range==-1)this._minX=0,this._minY=0,this._maxX=d.clientWidth-f.offsetWidth-h-K(f,"marginRight"),this._maxY=d.clientHeight-f.offsetHeight-i-K(f,"marginBottom");else if(this._range){var l=u(this._range),m=P(l),n=l.offsetWidth,o=l.offsetHeight,p=J(l,"borderLeftWidth"),q=J(l,"borderRightWidth"),r=J(l,"borderTopWidth"),s=J(l,"borderBottomWidth");this._minX=m.left+p,this._minY=m.top+r,this._maxX=m.left+n-q-f.offsetWidth-h-K(f,"marginRight"),this._maxY=m.top+o-s-f.offsetHeight-i-K(f,"marginBottom")}}},_draging:function(a){b.getSelection?b.getSelection().removeAllRanges():c.selection.empty();var d=a.clientX-this._offsetX,e=a.clientY-this._offsetY;this._range&&(d=Math.min(Math.max(d,this._minX),this._maxX),e=Math.min(Math.max(e,this._minY),this._maxY)),this._lockx||(this._style.left=d+"px"),this._locky||(this._style.top=e+"px"),this._runing&&this._runing(a)},_drop:function(a){_(c,"mousemove",this._draging,this),_(c,"mouseup",this._drop,this),j.ie?(_(this._focusHand,"losecapture",this._drop,this),this._focusHand.releaseCapture()):b.onblur=this._win_blur,this._after&&this._after(a)}});r.Class=function(a){return f.extend(typeof a=="function"?a():a)},r.extend=function(a,b){s.prototype[a]=b},r.widget=function(a,b){if(typeof b=="function")r[a]=b();else{var c=f.extend(b);r[a]=function(a){return new c(a)}}},r.g=u,s.prototype.find=function(a){return r(a,this.node)},s.prototype.eq=function(a){a<0&&(a=this.nodes.length+a);return r(this.nodes[a])},s.prototype.child=function(a){return r(v(this.node,a))},s.prototype.sibling=function(a){return r(w(this.node,a))},s.prototype.parent=function(a){return r(x(this.node,a))},s.prototype.prev=function(){return r(y(this.node))},s.prototype.next=function(){return r(z(this.node))},s.prototype.each=function(a){if(this.nodes){var b=0;while(this.nodes[b])a.call(r(this.nodes[b]),b),b++}else this.node&&a.call(this,0);return this},r.node=function(a){return r(A(a))},s.prototype.append=function(a,b){return t.call(this,B,a,b)},s.prototype.insert=function(a,b){return t.call(this,C,a,b)},s.prototype.remove=function(){return t.call(this,D)},s.prototype.clone=function(a){return r(E(this.node,a))},s.prototype.replace=function(a){return t.call(this,F,a)},s.prototype.cls=function(a,b){return t.call(this,G,a,b)},s.prototype.css=function(a,b){return t.call(this,J,a,b)},s.prototype.px=function(a){return K(this.node,a)},s.prototype.left=function(a){return t.call(this,L,a)},s.prototype.top=function(a){return t.call(this,M,a)},s.prototype.width=function(a){return t.call(this,N,a)},s.prototype.height=function(a){return t.call(this,O,a)},s.prototype.offsetLeft=function(){return P(this.node).left},s.prototype.offsetTop=function(){return P(this.node).top},s.prototype.offset=function(){return P(this.node)},s.prototype.offsetWidth=function(){return this.node.offsetWidth},s.prototype.offsetHeight=function(){return this.node.offsetHeight},s.prototype.opacity=function(a){return t.call(this,Q,a)},s.prototype.show=function(){return t.call(this,R)},s.prototype.hide=function(){return t.call(this,S)},s.prototype.attr=function(a,b){return t.call(this,U,a,b)},s.prototype.html=function(a){return t.call(this,V,a)},s.prototype.tag=function(a){return W(this.node,a)},s.prototype.contains=function(a){return X(this.node,a)},s.prototype.val=function(a){return t.call(this,Y,a)},r.ready=i,s.prototype.on=function(a,b,c){var d=$.call(this,this.node,a,b,c||this.node);if(this.nodes&&d==this){var e=1;while(this.nodes[e])$.call(this,this.nodes[e],a,b,c||this.nodes[e]),e++;return this}return d},s.prototype.un=function(a,b,c){var d=_.call(this,this.node,a,b,c||this.node);if(this.nodes&&d==this){var e=1;while(this.nodes[e])_.call(this,this.nodes[e],a,b,c||this.nodes[e]),e++;return this}return d},s.prototype.click=function(a,b){var c=$.call(this,this.node,"click",a,b||r(this.node));if(this.nodes&&c==this){var d=1;while(this.nodes[d])$.call(this,this.nodes[d],"click",a,b||this.eq(d)),d++;return this}return c},s.prototype.hover=function(a,b,c){var d,e=this;if(this.nodes){var f=0;while(d=this.nodes[f])~function(d){var e=d.node;$(e,"mouseover",function(b){b.fromTarget&&!X(e,b.fromTarget)&&a.call(c||d,b)},c||d),$(e,"mouseout",function(a){(!a.toTarget||!X(e,a.toTarget))&&b.call(c||d,a)},c||d)}(this.eq(f)),f++}else d=this.node,$(d,"mouseover",function(b){b.fromTarget&&!X(d,b.fromTarget)&&a.call(c||e,b)},c||e),$(d,"mouseout",function(a){(!a.toTarget||!X(d,a.toTarget))&&b.call(c||e,a)},c||e);return this},r.browser=j,r.isIE6=k,r.cookie=ba,r.each=bb,r.toJson=bc,r.param=bd,r.tirm=bh,r.encodeURL=bg,r.encodeHTML=be,r.decodeHTML=bf,r.parseJson=bi,r.post=bj,r.get=bk,r.img=bl,r.js=bm,r.css=bn,r.isArray=bo,r.isNode=bp,r.docWidth=function(){return d.clientWidth},r.docHeight=function(){return d.clientHeight},r.scrollWidth=function(){return d.scrollWidth},r.scrollHeight=function(){return Math.max(d.scrollHeight,c.body.scrollHeight)},r.scrollTop=function(){return m.apply(this,arguments)},r.scrollLeft=function(){return d.scrollLeft+c.body.scrollLeft},s.prototype.anime=function(b){if(!this.node.___ANIMEID){var c=this.node.___ANIMEID=a;a++,b=b||{},n[c]=br(this.node,b)}else{var c=this.node.___ANIMEID;n[c].stop(),n[c]=br(this.node,b)}return n[c]},s.prototype.drag=function(b){if(!this.node.___DRAGID){var c=this.node.___DRAGID=a;a++,p[c]=q(this.node,b||{})}return p[this.node.___DRAGID]},this.$1kjs=r}(),!function(a){var b={"default":{js:{hlbox:"padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;",li:"list-style:none;",unit:{keyword:"color:#0000C6;",userword:"color:#e59c38;",comment:"color:#B0812C;",quote:"color:#666666;",number:"color:red;",brackets:"color:#333;",regexp:"color:#008074;"}},html:{hlbox:"padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;",li:"list-style:none;",unit:{tag:"color:#0000C6;",comment:"color:#B0812C;",attrval:"color:#666;",attrkey:"color:red;",doctype:"color:#008074;"}},css:{hlbox:"padding:4px 8px;background:#f5f8fa;color:#333;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;border:1px solid #3C78B5;border-left:4px solid #3C78B5;line-height:1.5;",li:"list-style:none;",unit:{csssel:"color:#008074;",csskey:"color:red;",comment:"color:#B0812C;",cssval:"color:#666;"}}},black:{js:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{keyword:"color:#119BEE;",userword:"color:#FFCC00;",comment:"color:#666;",quote:"color:#89D726;",number:"color:#86CC99;",brackets:"color:#B7B700;",regexp:"color:#FE81F8;"}},html:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{tag:"color:#119BEE;",comment:"color:#666;",attrval:"color:#89D726;",attrkey:"color:#86CC99;",doctype:"color:#B7B700;"}},css:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{csssel:"color:#FE81F8;",csskey:"color:#119BEE;",comment:"color:#666;",cssval:"color:#89D726;"}}},bop:{js:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{keyword:"color:#ef5d32;",userword:"color:#ef5d32;",comment:"color:#808000;",quote:"color:#d9d762;",number:"color:#6c99bb;",brackets:"color:#e6e1c4;",regexp:"color:#8856d2;"}},html:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{tag:"color:#efac32;",comment:"color:#B0812C;",attrval:"color:#d9d762;",attrkey:"color:#6c99bb;",doctype:"color:#efac32;"}},css:{hlbox:"padding:2px 0 2px 52px;background:#060606;color:#eee;font-family:monaco,verdana,Helvetica,Tahoma,Arial,sans-serif;line-height:1.5;",li:"background:#222;padding:0 0 0 5px;border-left:1px solid #333;",unit:{csssel:"color:#efac32;",csskey:"color:#c0c0c0;",comment:"color:#666;",cssval:"color:#d9d762;"}}}},c={"&":{reg:/&/g,to:"&amp;"},"<":{reg:/</g,to:"&lt;"}," ":{reg:/ /g,to:"&nbsp;"},"\t":{reg:/\t/g,to:"&nbsp;&nbsp;&nbsp;&nbsp;"},"\n":{reg:/\n/g,to:"</li><li>"}},d={beskip:{cls:"#",reg:/(\$[\w]*)/},regexp:[{contains:{brackets:{cls:"brackets",reg:/(\[|\()/},keyword:{cls:"keyword",reg:/(typeof|void|return|in|throw|case)/},cop:{cls:"#",reg:/(^|[-~:=?,!>]|\/\s+)/},cop2:{reg:/(<)/,restr:[c["<"]]}}},{unneed:1,contains:{sstr:{reg:/\s/,restr:[c[" "],c["\t"],c["\n"]]},comment:{cls:"comment",reg:/(?:\/\/.*\s|\/\*[\w\W]*?\*\/)/,restr:[c["&"],c["<"],c[" "],c["\t"],{reg:/\n/g,to:'</span></li><li><span class="comment">'}]}}},{contains:{regexp:{cls:"regexp",reg:/(\/(?:\\\\|\\\/|\[.+?\]|[^\/\r\n])+\/[gim]*)/,restr:[c["&"],c["<"],c[" "],c["\t"]]}}}],comment:{cls:"comment",reg:/(\/\*[\w\W]*?\*\/|\/\/.*)/,restr:[c["&"],c["<"],c[" "],c["\t"],{reg:/\n/g,to:'</span></li><li><span class="comment">'}]},quote:{cls:"quote",reg:/("(?:\\\\|\\"|[^"\r])*"|'(?:\\\\|\\'|[^'\r])*')/,restr:[c["&"],c["<"],c[" "],c["\t"],{reg:/\n/g,to:'</span></li><li><span class="quote">'}]},keyword:{cls:"keyword",reg:/(boolean|break|byte|case|catch|char|class|const|continue|default|double|do|else|extends|false|finally|final|float|for|function|goto|if|implements|import|instanceof|interface|int|in|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|typeof|this|throw|throws|transient|true|try|var|void|while|with)(?![\w$])/},userword:{cls:"userword",reg:/(window|document|Math|Boolean)(?![\w$])/},id:{cls:"#",reg:/([a-zA-Z_]+[\w]*)/},number:{cls:"number",reg:/(0x[0-9a-fA-F]+|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+\-]?\d+)?)/},brackets:{cls:"brackets",reg:/([(){}\[\]]+)/},cstr:{cls:"#",reg:/(\s+|<|&)/,restr:[c["&"],c["<"],c[" "],c["\t"],{reg:/\n/g,to:"</li><li>"}]}},e,f,g=/(<script[^>]*?>[\s\S]*?<\/script>)|(<style[^>]*?>[\s\S]*?<\/style>)|(<textarea[^>]*?>[\s\S]*?<\/textarea>)|(<[\w]+[^>]*?>|<\/[\w]+>)|(<!--[\s\S]*?-->)|(<!doctype[^>]*?>)|(\n)|(\t)|(\s)/gi,h,i,j=[],k={init:function(b){b=b||{},k._skin=b.skin||"default",k._line=b.line==!1?!1:!0,k._eidt=b.eidt==!1?!1:!0,k._loadSkin(),k._formatReg(),a.ready(function(){k._ccMenu(),k._doHighlight(),k._ccDemoWin()})},_JsRequire:function(b){b=b.split(","),a.each(b,function(){j.push('<script src="'+this+'"></script>')})},parseCss:function(a,b){function c(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/g,"&nbsp;").replace(/</g,"&lt;")}a=a.replace(/(\{[^\}]*\})|(\/\*[\w\W]*?\*\/)|(\n)|([^\n\{\}]+)/g,function(a,b,d,e,f,g,h){switch(!1){case!b:return a.replace(/([^{\n;]+?:[^}\n;]+)|(\n)|(\/\*[\w\W]*?\*\/)|( )/g,function(a,b,d,e,f){switch(!1){case!b:var g=b.split(":")[0],h=b.split(":")[1];return'<span class="csskey">'+c(g)+'</span>:<span class="cssval">'+h+"</span>";case!d:return"</li><li>";case!e:return'<span class="comment">'+c(e)+"</span>";case!f:return"&nbsp;"}});case!d:return'<span class="comment">'+c(d)+"</span>";case!e:return"</li><li>";case!f:return f.replace(/(\/\*[\w\W]*?\*\/)|( )|(\t)|([^{]+)/g,function(a,b,d,e,f){if(b)return'<span class="comment">'+c(b)+"</span>";if(d)return"&nbsp;";if(e)return"&nbsp;&nbsp;&nbsp;&nbsp;";if(f)return'<span class="csssel">'+f+"</span>"})}});return'<ol class="'+(b||k._skin)+'-hlcss"><li>'+a+"</li></ol>"},parseHtml:function(a,b){function f(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;")}function e(a){return'<span class="tag">'+a.replace("<","&lt;").replace(">","&gt;")+"</span>"}function d(a){return'<span class="tag">'+a.replace("<","&lt;").replace(">","&gt;").replace(/(\w+=)('[\s\S]*?'|"[\s\S]*?")/g,function(a,b,c){return'<span class="attrkey">'+b+'</span><span class="attrval">'+c+"</span>"})+"</span>"}var c=this;a=a.replace(g,function(a){switch(!1){case!arguments[1]:return a.replace(/(<script[^>]*?>)([\s\S]*?)(<\/script>)/,function(a,f,g,h){return d(f)+c.parseJs(g,b).replace(/<ol[^>]+><li>|<\/li><\/ol>/g,"")+e(h)});case!arguments[2]:return a.replace(/(<style[^>]*?>)([\s\S]*?)(<\/style>)/,function(a,f,g,h){return d(f)+c.parseCss(g,b).replace(/<ol[^>]+><li>|<\/li><\/ol>/g,"")+e(h)});case!arguments[3]:return a.replace(/(<textarea[^>]*?>)([\s\S]*?)(<\/textarea>)/,function(a,b,c,g){return d(b)+f(c)+e(g)});case!arguments[4]:return d(a);case!arguments[5]:return'<span class="comment">'+f(a)+"</span>";case!arguments[6]:return'<span class="doctype">'+f(a)+"</span>";case!arguments[7]:return"</li><li>";case!arguments[8]:return"&nbsp;&nbsp;&nbsp;&nbsp;";case!arguments[9]:return"&nbsp;"}}),b=b||c._skin;return'<ol class="'+[b+"-hlhtml",b+"-hljs",b+"-hlcss"].join(" ")+'"><li>'+a+"</li></ol>"},parseJs:function(a,b){var c=f.length;a=a.replace(e,function(){var a=0,b=[];while(a++<c)if(arguments[a]){var d=arguments[a],e=f[a-1];if(e.length){for(var g=0;g<e.length;g++)d=d.replace(e[g].reg,function(a){var b=e[g];if(b.restr)for(var c=0;c<b.restr.length;c++)a=a.replace(b.restr[c].reg,b.restr[c].to);b.cls&&(a='<span class="'+b.cls+'">'+a+"</span>");return a});b.push(d);continue}if(e.restr)for(var g=0;g<e.restr.length;g++)d=d.replace(e.restr[g].reg,e.restr[g].to);e.cls&&(d='<span class="'+e.cls+'">'+d+"</span>"),b.push(d)}return b.join("")});return'<ol class="'+(b||k._skin)+'-hljs"><li>'+a+"</li></ol>"},_doHighlight:function(){a("textarea")&&a("textarea").each(function(){var b=this.cls("lang-js")?"Js":this.cls("lang-html")?"Html":this.cls("lang-css")?"Css":0;if(b){var c=function(a){var b=Array(50).join(" ");a=a.replace(/\t/g,"    ").replace(/\s+$/,""),/^\S/m.test(a)||(a.replace(/^\s+/gm,function(a){a.length<b.length&&(b=a)}),a=a.replace(new RegExp("^"+b,"gm"),""));return a}(this.node.value),d=this.attr("skin");if(!k._eidt||b=="Css")this.replace(a.node('<div class="hlwrap"><div class="hlcode">'+k["parse"+b](c,d)+"</div></div>"));else{var e=a.node('<div class="hlwrap"><div class="hledit"><textarea>'+c+'</textarea><div class="btnbox"><button>\u52a0\u4eae\u4ee3\u7801</button><button>\u6267\u884c\u4ee3\u7801</button><span>\u63d0\u793a\uff1a\u4f60\u53ef\u4ee5\u5148\u4fee\u6539\u4ee3\u7801\u518d\u6267\u884c\u64cd\u4f5c\uff01</span></div></div><div class="hlcode">'+k["parse"+b](c,d)+"</div></div>");this.replace(e);var f=e.child(1).on("contextmenu",function(c){h.left(c.clientX+4),h.top(c.clientY+a.scrollTop()+4),e.type=b,e.skin=d,i=e,c.preventDefault(),c.stopPropagation()}),g=e.child(0).find("textarea");e.find("button").each(function(a){this.click(function(){a?(i=e,k._toRun()):(f.html(k["parse"+b](g.node.value,i.skin)),e.cls("hlwrap","hlwrap-edit"))})
})}}})},_loadSkin:function(){var c=[];a.each(b,function(b){a.each(this,function(d){var e="."+b+"-hl"+d;c.push(e+"{"+this.hlbox+"margin:0;word-wrap:break-word;word-break:break-all;display:inline-block9;font-size:14px;}"),c.push(e+" li{margin:0;"+this.li+"}"),a.each(this.unit,function(a){c.push([e+" .",a,"{",this,"}"].join(""))})})}),c.push([".hlmenu{","position:absolute;","background:#FFFFFF;","border:1px solid #999999;","font-size:12px;","top:0;","left:-999px;","padding:1px;","width:100px;","}",".hlmenu a{display:block;padding:3px 12px;color:#333;text-decoration:none!important;}",".hlmenu a:hover{background:#316AC5;color:#fff;}"].join("")),c.push([".hlwrap,.hlwrap-edit{}",".hledit{border:1px solid #999999;margin: 3px;overflow:hidden;padding:3px;font-size:12px;}",'.hledit textarea{font:14px/1.5 Monaco,"Lucida Console","Consolas","Courier New",Courier,mono,serif;\n\t\t\t\t\tborder:0;\n\t\t\t\t\theight:190px;\n\t\t\t\t\tdisplay:block;\n\t\t\t\t\twidth:100%;\n\t\t\t\t\tresize: none;\n\t\t\t\t\toutline: none;}',".hledit .btnbox{border-top:1px solid #999;padding-top:3px;}",".hledit button{padding:0 6px;}",".hlwrap .hledit{display:none;}",".hlwrap-edit{border:1px solid #999;background:#eee;}",".hlwrap-edit .hlcode{display:none;}",".hlwrap-edit .hledit{display:block;background:#fff;}",".hlwrap-edit span{color:green;padding-left:1em;}"].join("")),c.push([".hldemowin{z-index:9999;display:none;position:fixed;_position:absolute;left:0;top:0;width:100%;height:400px;background:#fff;}",".hldemowin .closebar{margin:3px auto;width:400px;padding:8px;font-size:14px;font-weight:bold;cursor:pointer;text-align:center;background:#fefefe;border:1px solid #999;color:red;}",".hldemowin .closebar:hover{background:#feefff;}",".hldemowin iframe{border-top:1px solid #000}"].join("")),a.css(c.join(""))},_ccMenu:function(){var b=this;h=a.node('<div class="hlmenu"><a href="#" jbtn="edit">\u7f16\u8f91\u4ee3\u7801</a><a href="#" jbtn="run">\u8fd0\u884c\u4ee3\u7801</a></div>'),a("body").append(h),h.click(function(c){h.left(-999);switch(a(c.target).attr("jbtn")){case"edit":b._toEdit();break;case"run":b._toRun();break;default:return}c.preventDefault(),c.stopPropagation()}).on("contextmenu",function(a){a.preventDefault()}),a(document).click(function(a){h.contains(a.target)||h.left(-999)})},_toEdit:function(){i.cls("hlwrap-edit","hlwrap"),a.scrollTop(i.offsetTop()-120,1e3)},_toRun:function(){var a=i.type;a=="Js"?this.demoWin.js(i.find("textarea").node.value):a=="Html"&&this.demoWin.html(i.find("textarea").node.value)},_formatReg:function(){function b(a){var c=[],d=[],e;for(var f in a){e=a[f];if(e.reg)(e.restr||e.cls)&&d.push({cls:e.cls&&e.cls!="#"?e.cls:"",restr:e.restr}),c.push(e.reg.source);else if(e.length){var g,h=[];for(var i=0;i<e.length;i++){g=e[i];if(g.unneed){g=g.contains;var j=[],k=[],l;for(var m in g)l=g[m],j.push(l.reg.source),k.push({reg:RegExp(l.reg.source,"g"),cls:l.cls&&l.cls!="#"?l.cls:"",restr:l.restr});h.push("((?:"+j.join("|")+")*)"),d.push(k)}else{var n=b(g.contains);h.push(n.reg),d=d.concat(n.setting)}}c.push("(?:"+h.join("")+")")}}return{reg:"(?:"+c.join("|")+")",setting:d}}var a=b(d);e=RegExp(a.reg,"g"),f=a.setting},_ccDemoWin:function(){function g(a){return a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/%/g,"%25").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function f(){e&&(b.css({width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}),c.height(document.documentElement.clientHeight-40))}var b=a.node('<div class="hldemowin"><div class="closebar">\u70b9\u51fb\u5173\u95ed</div></div>'),c,d,e=0;a("body").append(b.node),this.demoWin={js:function(d){c&&c.node.parentNode.removeChild(c.node),c=a.node('<iframe src="#" name="demoWin" frameborder="0" width="100%"></iframe>'),b.append(c.node);var e=window.open("","demoWin");e.document.write(j.join("")),e.document.write("<script>"+d+"</script>"),e.document.close()},html:function(g){c&&c.node.parentNode.removeChild(c.node),c=a.node('<iframe src="#" name="demoWin" frameborder="0" width="100%"></iframe>'),b.append(c.node),d=document.documentElement.scrollTop+document.body.scrollTop,a("html").css("overflow","hidden"),e=1,f(),b.show();var h=window.open("","demoWin");h.document.write(g),h.document.close()}},a(window).on("resize",f),b.child(0).click(function(){a("html").css("overflow",""),document.documentElement.scrollTop=d,document.body.scrollTop=d,b.hide(),c.node.parentNode.removeChild(c.node),c=null,e=0})}};a.widget("highlight",function(){return k})}($1kjs)