
/*Jssor*/
(function(e,g,b,i,d,h,j){/*! Jssor */
new(function(){});var c={Tc:function(a){return-b.cos(a*b.PI)/2+.5},xb:function(a){return a},cb:function(a){return a*a},yc:function(a){return-a*(a-2)},s:function(a){return a*a*a},Wc:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},Cc:function(a){return a==0?0:b.pow(2,10*(a-1))},Rc:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)}};var a=new function(){var f=this,xb=/\S+/g,T=1,fb=2,kb=3,jb=4,ob=5,L,s=0,l=0,p=0,bb=0,A=0,B=navigator,tb=B.appName,k=B.userAgent,x=g.documentElement,z;function Eb(){if(!L){L={Be:"ontouchstart"in e||"createTouch"in g};var a;if(B.pointerEnabled||(a=B.msPointerEnabled))L.jd=a?"msTouchAction":"touchAction"}return L}function v(i){if(!s){s=-1;if(tb=="Microsoft Internet Explorer"&&!!e.attachEvent&&!!e.ActiveXObject){var f=k.indexOf("MSIE");s=T;p=n(k.substring(f+5,k.indexOf(";",f)));/*@cc_on bb=@_jscript_version@*/;l=g.documentMode||p}else if(tb=="Netscape"&&!!e.addEventListener){var d=k.indexOf("Firefox"),b=k.indexOf("Safari"),h=k.indexOf("Chrome"),c=k.indexOf("AppleWebKit");if(d>=0){s=fb;l=n(k.substring(d+8))}else if(b>=0){var j=k.substring(0,b).lastIndexOf("/");s=h>=0?jb:kb;l=n(k.substring(j+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);if(a){s=T;l=p=n(a[1])}}if(c>=0)A=n(k.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(a){s=ob;l=n(a[2])}}}return i==s}function q(){return v(T)}function O(){return q()&&(l<6||g.compatMode=="BackCompat")}function ib(){return v(kb)}function hb(){return v(jb)}function nb(){return v(ob)}function cb(){return ib()&&A>534&&A<535}function M(){return q()&&l<9}function t(a){if(!z){m(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(a.style[b]!=j){z=b;return d}});z=z||"transform"}return z}function sb(a){return{}.toString.call(a)}var K;function Cb(){if(!K){K={};m(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){K["[object "+a+"]"]=a.toLowerCase()})}return K}function m(a,c){if(sb(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))return d}else for(var e in a)if(c(a[e],e,a))return d}function D(a){return a==i?String(a):Cb()[sb(a)]||"object"}function qb(a){for(var b in a)return d}function G(a){try{return D(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function y(a,b){return{x:a,y:b}}function vb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;m(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function eb(b,a){if(l<9)b.style.filter=a}function zb(b,a,c){if(bb<9){var e=b.style.filter,h=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),g=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=I(e,[h],g);eb(b,d);f.kd(b,c.y);f.ld(b,c.x)}}f.Ce=Eb;f.Bd=q;f.we=ib;f.xe=hb;f.ye=nb;f.tc=M;f.id=function(){return l};f.qd=function(){v();return A};f.E=vb;function W(a){a.constructor===W.caller&&a.pd&&a.pd.apply(a,W.caller.arguments)}f.pd=W;f.ib=function(a){if(f.nd(a))a=g.getElementById(a);return a};function r(a){return a||e.event}f.od=r;f.xc=function(a){a=r(a);return a.target||a.srcElement||g};f.bd=function(a){a=r(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};f.cd=function(){var a=g.body;return{x:a.clientWidth||x.clientWidth,y:a.clientHeight||x.clientHeight}};function E(c,d,a){if(a!=j)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&e.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,i);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function Y(b,c,a,d){if(a!=j){d&&(a+="px");E(b,c,a)}else return n(E(b,c))}function o(d,a){var b=a&2,c=a?Y:E;return function(e,a){return c(e,d,a,b)}}function Ab(b){if(q()&&p<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?n(a[1])/100:1}else return n(b.style.opacity||"1")}function Bb(c,a,f){if(q()&&p<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);eb(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}function ab(g,a){var d=a.e||0,c=a.Q==j?1:a.Q;if(M()){var l=f.ae(d/180*b.PI,c,c);zb(g,!d&&c==1?i:l,f.be(l,a.W,a.V))}else{var h=t(g);if(h){var k="rotate("+d%360+"deg) scale("+c+")";if(hb()&&A>535&&"ontouchstart"in e)k+=" perspective(2000px)";g.style[h]=k}}}f.ge=function(b,a){if(cb())vb(f.K(i,ab,b,a));else ab(b,a)};f.le=function(b,c){var a=t(b);if(a)b.style[a+"Origin"]=c};f.me=function(a,c){if(q()&&p<9||p<10&&O())a.style.zoom=c==1?"":c;else{var b=t(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[b]=d}}};f.ne=function(a){if(!a.style[t(a)]||a.style[t(a)]=="none")a.style[t(a)]="perspective(2000px)"};var mb=0,gb=0;f.ed=function(b,a){return M()?function(){var g=d,c=O()?b.document.body:b.document.documentElement;if(c){var f=c.offsetWidth-mb,e=c.offsetHeight-gb;if(f||e){mb+=f;gb+=e}else g=h}g&&a()}:a};f.Qb=function(b,a){return function(c){c=r(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!f.ke(a,d))&&b(c)}};f.a=function(a,c,d,b){a=f.ib(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};f.M=function(a,c,d,b){a=f.ib(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};f.Ib=function(a){a=r(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=h};f.ie=function(a){a=r(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};f.K=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};f.je=function(a,b){if(b==j)return a.textContent||a.innerText;var c=g.createTextNode(b);f.oc(a);a.appendChild(c)};f.U=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function rb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){if(S(a,b)==c)return a;if(!e){var d=rb(a,c,e,b);if(d)return d}}}f.C=rb;function Q(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){S(a,b)==d&&c.push(a);if(!f){var e=Q(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function lb(a,c,d){for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=lb(a,c,d);if(b)return b}}}f.Ue=lb;f.cf=function(b,a){return b.getElementsByTagName(a)};function C(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==j){a=c[b];d[b]=g&&G(d[b])?C(g,{},a):a}}return d}f.q=C;function X(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(G(a)&&G(b)){a=X(b);e=!qb(a)}!e&&(d[c]=a)}}return d}f.af=function(a){return D(a)=="function"};f.lc=function(a){return D(a)=="array"};f.nd=function(a){return D(a)=="string"};f.Ye=function(a){return!isNaN(n(a))&&isFinite(a)};f.l=m;function P(a){return g.createElement(a)}f.X=function(){return P("DIV")};f.Ge=function(){return P("SPAN")};f.nc=function(){};function U(b,c,a){if(a==j)return b.getAttribute(c);b.setAttribute(c,a)}function S(a,b){return U(a,b)||U(a,"data-"+b)}f.J=U;f.t=S;function w(b,a){if(a==j)return b.className;b.className=a}f.Xc=w;function ub(b){var a={};m(b,function(b){a[b]=b});return a}function wb(b,a){return b.match(a||xb)}function N(b,a){return ub(wb(b||"",a))}f.Ie=wb;function Z(b,c){var a="";m(c,function(c){a&&(a+=b);a+=c});return a}function H(a,c,b){w(a,Z(" ",C(X(N(w(a)),N(c)),N(b))))}f.yb=function(a){return a.parentNode};f.P=function(a){f.R(a,"none")};f.L=function(a,b){f.R(a,b?"none":"")};f.Qc=function(b,a){b.removeAttribute(a)};f.Qe=function(){return q()&&l<10};f.Ne=function(d,c){if(c)d.style.clip="rect("+b.round(c.i)+"px "+b.round(c.r)+"px "+b.round(c.u)+"px "+b.round(c.j)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");a.Hb(d,e)}};f.T=function(){return+new Date};f.I=function(b,a){b.appendChild(a)};f.Pb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};f.Ab=function(a,b){(b||a.parentNode).removeChild(a)};f.Le=function(a,b){m(a,function(a){f.Ab(a,b)})};f.oc=function(a){f.Le(f.U(a,d),a)};f.Me=function(b,a){return parseInt(b,a||10)};var n=parseFloat;f.uc=n;f.ke=function(b,a){var c=g.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return h}return b===a};function V(d,c,b){var a=d.cloneNode(!c);!b&&f.Qc(a,"id");return a}f.lb=V;f.ob=function(e,g){var a=new Image;function b(e,d){f.M(a,"load",b);f.M(a,"abort",c);f.M(a,"error",c);g&&g(a,d)}function c(a){b(a,d)}if(nb()&&l<11.6||!e)b(!e);else{f.a(a,"load",b);f.a(a,"abort",c);f.a(a,"error",c);a.src=e}};f.Je=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}m(d,function(a){f.ob(a.src,b)});b()};f.Lc=function(b,g,i,h){if(h)b=V(b);var c=Q(b,g);if(!c.length)c=a.cf(b,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=V(i);w(e,w(d));a.Hb(e,d.style.cssText);a.Pb(e,d);a.Ab(d)}return b};function Db(c){var q=this,o="",r=["av","pv","ds","dn"],d=[],p,k=0,h=0,e=0;function i(){H(c,p,d[e||k||h&2||h])}function b(){k=0;i();f.M(g,"mouseup",b);f.M(g,"touchend",b);f.M(g,"touchcancel",b)}function n(a){if(e)f.Ib(a);else{k=4;i();f.a(g,"mouseup",b);f.a(g,"touchend",b);f.a(g,"touchcancel",b)}}q.Ec=function(a){if(a!=j){h=a&2||a&1;i()}else return h};q.Jc=function(a){if(a==j)return!e;e=a?0:3;i()};c=f.ib(c);var l=a.Ie(w(c));if(l)o=l.shift();m(r,function(a){d.push(o+a)});p=Z(" ",d);d.unshift("");f.a(c,"mousedown",n);f.a(c,"touchstart",n)}f.Jb=function(a){return new Db(a)};f.nb=E;f.Bb=o("overflow");f.z=o("top",2);f.B=o("left",2);f.n=o("width",2);f.p=o("height",2);f.ld=o("marginLeft",2);f.kd=o("marginTop",2);f.H=o("position");f.R=o("display");f.F=o("zIndex",1);f.hc=function(b,a,c){if(a!=j)Bb(b,a,c);else return Ab(b)};f.Hb=function(a,b){if(b!=j)a.style.cssText=b;else return a.style.cssText};var R={f:f.hc,i:f.z,j:f.B,pc:f.n,kc:f.p,ub:f.H,jf:f.R,Mb:f.F},u;function J(){if(!u)u=C({kf:f.kd,hf:f.ld,g:f.Ne,qc:f.ge},R);return u}function pb(){J();u.qc=u.qc;return u}f.Fd=J;f.Cd=pb;f.Ed=function(c,b){J();var a={};m(b,function(d,b){if(R[b])a[b]=R[b](c)});return a};f.hb=function(c,b){var a=J();m(b,function(d,b){a[b]&&a[b](c,d)})};var F=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.Eb=function(d,c){var a=b(d,[[c.x],[c.y]]);return y(a[0][0],a[1][0])}};f.ae=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};f.be=function(d,c,a){var e=F.Eb(d,y(-c/2,-a/2)),f=F.Eb(d,y(c/2,-a/2)),g=F.Eb(d,y(c/2,a/2)),h=F.Eb(d,y(-c/2,a/2));return y(b.min(e.x,f.x,g.x,h.x)+c/2,b.min(e.y,f.y,g.y,h.y)+a/2)};f.Yd=function(l,g,t,r,u,w,j){var d=g;if(l){d={};for(var f in g){var x=w[f]||1,s=u[f]||[0,1],e=(t-s[0])/s[1];e=b.min(b.max(e,0),1);e=e*x;var p=b.floor(e);if(e!=p)e-=p;var v=r[f]||r.Cb||c.Tc,q=v(e),h,y=l[f];g[f];var m=g[f];if(a.Ye(m))h=y+m*q;else{h=a.q({qb:{}},l[f]);a.l(m.qb,function(c,b){var a=c*q;h.qb[b]=a;h[b]+=a})}d[f]=h}if(g.c||g.e)d.qc={e:d.e||0,Q:d.c,W:j.W,V:j.V}}if(g.g&&j.Y){var k=d.g.qb,o=(k.i||0)+(k.u||0),n=(k.j||0)+(k.r||0);d.j=(d.j||0)+n;d.i=(d.i||0)+o;d.g.j-=n;d.g.r-=n;d.g.i-=o;d.g.u-=o}if(d.g&&a.Qe()&&!d.g.i&&!d.g.j&&d.g.r==j.W&&d.g.u==j.V)d.g=i;return d}};function l(){var b=this,d=[];function i(a,b){d.push({gc:a,ic:b})}function h(b,c){a.l(d,function(a,e){a.gc==b&&a.ic===c&&d.splice(e,1)})}b.mb=b.addEventListener=i;b.removeEventListener=h;b.m=function(b){var c=[].slice.call(arguments,1);a.l(d,function(a){a.gc==b&&a.ic.apply(e,c)})}}function k(o,z,k,R,P,K){o=o||0;var f=this,s,p,q,x,B=0,I,J,H,D,A=0,l=0,n=0,E,m=o,g,j,r,y=[],C;function M(a){g+=a;j+=a;m+=a;l+=a;n+=a;A=a}function Q(a,b){var c=a-g+o*b;M(c);return j}function w(o,i){var c=o;if(r&&(c>=j||c<=g))c=((c-g)%r+r)%r+g;if(!E||x||i||l!=c){var e=b.min(c,j);e=b.max(e,g);if(!E||x||i||e!=n){if(K){var h=(e-m)/(z||1);if(k.md)h=1-h;var p=a.Yd(P,K,h,I,H,J,k);a.l(p,function(b,a){C[a]&&C[a](R,b)})}f.vc(n-m,e-m);n=e;a.l(y,function(b,c){var a=o<l?y[y.length-c-1]:b;a.v(n-A,i)});var s=l,q=n;l=c;E=d;f.Fb(s,q)}}}function F(a,c,d){c&&a.ac(j,1);if(!d){g=b.min(g,a.Id()+A);j=b.max(j,a.gb()+A)}y.push(a)}var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame;if(a.we()&&a.id()<7)t=i;t=t||function(b){a.E(b,k.Yc)};function L(){if(s){var d=a.T(),e=b.min(d-B,k.Zc),c=l+e*q;B=d;if(c*q>=p*q)c=p;w(c);if(!x&&c*q>=p*q)N(D);else t(L)}}function v(c,e,h){if(!s){s=d;x=h;D=e;c=b.max(c,g);c=b.min(c,j);p=c;q=p<l?-1:1;f.gd();B=a.T();t(L)}}function N(a){if(s){x=s=D=h;f.hd();a&&a()}}f.fd=function(a,b,c){v(a?l+a:j,b,c)};f.dd=v;f.ab=N;f.Ld=function(a){v(a)};f.S=function(){return l};f.ud=function(){return p};f.kb=function(){return n};f.v=w;f.Y=function(a){w(l+a)};f.Ad=function(){return s};f.Hd=function(a){r=a};f.ac=Q;f.yd=M;f.fb=function(a){F(a,0)};f.ec=function(a){F(a,1)};f.Id=function(){return g};f.gb=function(){return j};f.Fb=f.gd=f.hd=f.vc=a.nc;f.fc=a.T();k=a.q({Yc:16,Zc:50},k);r=k.Sc;C=a.q({},a.Fd(),k.sc);g=m=o;j=o+z;J=k.D||{};H=k.Db||{};I=a.q({Cb:a.af(k.k)&&k.k||c.Tc},k.k)}new(function(){});var f=function(p,ec){var n=this;function Dc(){var a=this;k.call(a,-1e8,2e8);a.Md=function(){var c=a.kb(),d=b.floor(c),f=t(d),e=c-b.floor(c);return{jb:f,Pd:d,ub:e}};a.Fb=function(c,a){var e=b.floor(a);if(e!=a&&a>c)e++;Tb(e,d);n.m(f.Qd,t(a),t(c),a,c)}}function Cc(){var b=this;k.call(b,0,0,{Sc:r});a.l(C,function(a){D&1&&a.Hd(r);b.ec(a);a.yd(hb/ac)})}function Bc(){var a=this,b=Sb.db;k.call(a,-1,2,{k:c.xb,sc:{ub:Yb},Sc:r},b,{ub:1},{ub:-2});a.Ob=b}function pc(m,l){var a=this,c,e,g,j,b;k.call(a,-1e8,2e8,{Zc:100});a.gd=function(){P=d;T=i;n.m(f.Td,t(y.S()),y.S())};a.hd=function(){P=h;j=h;var a=y.Md();n.m(f.Xd,t(y.S()),y.S());!a.ub&&Fc(a.Pd,s)};a.Fb=function(h,f){var a;if(j)a=b;else{a=e;if(g){var d=f/g;a=o.Wd(d)*(e-c)+c}}y.v(a)};a.Lb=function(b,f,d,h){c=b;e=f;g=d;y.v(b);a.v(0);a.dd(d,h)};a.Sd=function(c){j=d;b=c;a.fd(c,i,d)};a.Ud=function(a){b=a};y=new Dc;y.fb(m);y.fb(l)}function qc(){var c=this,b=Wb();a.F(b,0);a.nb(b,"pointerEvents","none");c.db=b;c.Wb=function(){a.P(b);a.oc(b)}}function zc(p,e){var c=this,q,x,N,y,j,B=[],H,v,W,K,S,G,g,w,m;k.call(c,-u,u+1,{});function F(a){x&&x.Nb();q&&q.Nb();V(p,a);G=d;q=new L.A(p,L,1);x=new L.A(p,L);x.v(0);q.v(0)}function Y(){q.fc<L.fc&&F()}function O(p,r,m){if(!K){K=d;if(j&&m){var g=m.width,b=m.height,l=g,k=b;if(g&&b&&o.tb){if(o.tb&3&&(!(o.tb&4)||g>J||b>I)){var i=h,q=J/I*b/g;if(o.tb&1)i=q>1;else if(o.tb&2)i=q<1;l=i?g*I/b:J;k=i?I:b*J/g}a.n(j,l);a.p(j,k);a.z(j,(I-k)/2);a.B(j,(J-l)/2)}a.H(j,"absolute");n.m(f.Od,e)}}a.P(r);p&&p(c)}function X(b,d,f,g){if(g==T&&s==e&&Q)if(!Ec){var a=t(b);A.Rd(a,e,d,c,f);d.Jd();Z.ac(a,1);Z.v(a);z.Lb(b,b,0)}}function cb(b){if(b==T&&s==e){if(!g){var a=i;if(A)if(A.jb==e)a=A.Nd();else A.Wb();Y();g=new xc(p,e,a,c.Kd(),c.Ke());g.Uc(m)}!g.Ad()&&g.Ac()}}function U(f,d,h){if(f==e){if(f!=d)C[d]&&C[d].Pe();else!h&&g&&g.Oe();m&&m.Jc();var j=T=a.T();c.ob(a.K(i,cb,j))}else{var l=b.abs(e-f),k=u+o.Fe-1;(!S||l<=k)&&c.ob()}}function fb(){if(s==e&&g){g.ab();m&&m.Ee();m&&m.De();g.Vc()}}function gb(){s==e&&g&&g.ab()}function bb(a){!M&&n.m(f.He,e,a)}function P(){m=w.pInstance;g&&g.Uc(m)}c.ob=function(c,b){b=b||y;if(B.length&&!K){a.L(b);if(!W){W=d;n.m(f.Re,e);a.l(B,function(b){if(!a.J(b,"src")){b.src=a.t(b,"src2");a.R(b,b["display-origin"])}})}a.Je(B,j,a.K(i,O,c,b))}else O(c,b)};c.Ze=function(){var g=e;if(o.Kb<0)g-=r;var c=g+o.Kb*vc;if(D&2)c=t(c);if(!(D&1))c=b.max(0,b.min(c,r-u));if(c!=e){if(A){var d=A.Dd(r);if(d){var h=T=a.T(),f=C[t(c)];return f.ob(a.K(i,X,c,f,d,h),y)}}ab(c)}};c.Dc=function(){U(e,e,d)};c.Pe=function(){m&&m.Ee();m&&m.De();c.Kc();g&&g.bf();g=i;F()};c.Jd=function(){a.P(p)};c.Kc=function(){a.L(p)};c.We=function(){m&&m.Jc()};function V(b,e,c){if(a.J(b,"jssor-slider"))return;c=c||0;if(!G){if(b.tagName=="IMG"){B.push(b);if(!a.J(b,"src")){S=d;b["display-origin"]=a.R(b);a.P(b)}}a.tc()&&a.F(b,(a.F(b)||0)+1);if(o.xd&&a.qd())(a.qd()<534||!eb&&!a.xe())&&a.ne(b)}var f=a.U(b);a.l(f,function(f){var i=f.tagName,k=a.t(f,"u");if(k=="player"&&!w){w=f;if(w.pInstance)P();else a.a(w,"dataavailable",P)}if(k=="caption"){if(!a.Bd()&&!e){var g=a.lb(f,h,d);a.Pb(g,f,b);a.Ab(f,b);f=g;e=d}}else if(!G&&!c&&!j){if(i=="A"){if(a.t(f,"u")=="image")j=a.Ue(f,"IMG");else j=a.C(f,"image",d);if(j){H=f;a.hb(H,R);v=a.lb(H,d);a.R(v,"block");a.hb(v,R);a.hc(v,0);a.nb(v,"backgroundColor","#000")}}else if(i=="IMG"&&a.t(f,"u")=="image")j=f;if(j){j.border=0;a.hb(j,R)}}V(f,e,c+1)})}c.vc=function(c,b){var a=u-b;Yb(N,a)};c.Kd=function(){return q};c.Ke=function(){return x};c.jb=e;l.call(c);var E=a.C(p,"thumb",d);if(E){c.Xe=a.lb(E);a.Qc(E,"id");a.P(E)}a.L(p);y=a.lb(db);a.F(y,1e3);a.a(p,"click",bb);F(d);c.vd=j;c.zd=v;c.Ob=N=p;a.I(N,y);n.mb(203,U);n.mb(28,gb);n.mb(24,fb)}function xc(E,i,p,u,t){var b=this,l=0,w=0,m,g,c,e,j,q,v,r,o=C[i];k.call(b,0,0);function x(){a.oc(N);cc&&j&&o.zd&&a.I(N,o.zd);a.L(N,!j&&o.vd)}function y(){if(q){q=h;n.m(f.Se,i,c,l,g,c,e);b.v(g)}b.Ac()}function z(a){r=a;b.ab();b.Ac()}b.Ac=function(){var a=b.kb();if(!B&&!P&&!r&&s==i){if(!a){if(m&&!j){j=d;b.Vc(d);n.m(f.Te,i,l,w,m,e)}x()}var h,p=f.wd;if(a!=e)if(a==c)h=e;else if(a==g)h=c;else if(!a)h=g;else if(a>c){q=d;h=c;p=f.he}else h=b.ud();n.m(p,i,a,l,g,c,e);var k=Q&&(!G||H);if(a==e)(c!=e&&!(G&12)||k)&&o.Ze();else(k||a!=c)&&b.dd(h,y)}};b.Oe=function(){c==e&&c==b.kb()&&b.v(g)};b.bf=function(){A&&A.jb==i&&A.Wb();var a=b.kb();a<e&&n.m(f.wd,i,-a-1,l,g,c,e)};b.Vc=function(b){p&&a.Bb(jb,b&&p.Z.gf?"":"hidden")};b.vc=function(b,a){if(j&&a>=m){j=h;x();o.Kc();A.Wb();n.m(f.Zd,i,l,w,m,e)}n.m(f.ce,i,a,l,g,c,e)};b.Uc=function(a){if(a&&!v){v=a;a.mb($JssorPlayer$.Vd,z)}};p&&b.ec(p);m=b.gb();b.gb();b.ec(u);g=u.gb();c=g+(a.uc(a.t(E,"idle"))||oc);t.yd(c);b.fb(t);e=b.gb()}function Yb(g,f){var e=w>0?w:ib,c=Bb*f*(e&1),d=Cb*f*(e>>1&1);c=b.round(c);d=b.round(d);a.B(g,c);a.z(g,d)}function Ob(){qb=P;Kb=z.ud();E=y.S()}function fc(){Ob();if(B||!H&&G&12){z.ab();n.m(f.fe)}}function dc(e){if(!B&&(H||!(G&12))&&!z.Ad()){var c=y.S(),a=b.ceil(E);if(e&&b.abs(F)>=o.Gb){a=b.ceil(c);a+=gb}if(!(D&1))a=b.min(r-u,b.max(a,0));var d=b.abs(a-c);d=1-b.pow(1-d,5);if(!M&&qb)z.Ld(Kb);else if(c==a){ub.We();ub.Dc()}else z.Lb(c,a,d*Ub)}}function Ib(b){!a.t(a.xc(b),"nodrag")&&a.Ib(b)}function tc(a){Xb(a,1)}function Xb(b,c){b=a.od(b);var k=a.xc(b);if(!K&&!a.t(k,"nodrag")&&uc()&&(!c||b.touches.length==1)){B=d;Ab=h;T=i;a.a(g,c?"touchmove":"mousemove",Db);a.T();M=0;fc();if(!qb)w=0;if(c){var j=b.touches[0];vb=j.clientX;wb=j.clientY}else{var e=a.bd(b);vb=e.x;wb=e.y}F=0;cb=0;gb=0;n.m(f.ee,t(E),E,b)}}function Db(e){if(B){e=a.od(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=a.bd(e);if(f){var j=f.x-vb,k=f.y-wb;if(b.floor(E)!=E)w=w||ib&K;if((j||k)&&!w){if(K==3)if(b.abs(k)>b.abs(j))w=2;else w=1;else w=K;if(lb&&w==1&&b.abs(k)-b.abs(j)>3)Ab=d}if(w){var c=k,i=Cb;if(w==1){c=j;i=Bb}if(!(D&1)){if(c>0){var g=i*s,h=c-g;if(h>0)c=g+b.sqrt(h)*5}if(c<0){var g=i*(r-u-s),h=-c-g;if(h>0)c=-g-b.sqrt(h)*5}}if(F-cb<-2)gb=0;else if(F-cb>2)gb=-1;cb=F;F=c;tb=E-F/i/(Y||1);if(F&&w&&!Ab){a.Ib(e);if(!P)z.Sd(tb);else z.Ud(tb)}}}}}function ob(){rc();if(B){B=h;a.T();a.M(g,"mousemove",Db);a.M(g,"touchmove",Db);M=F;z.ab();var b=y.S();n.m(f.de,t(b),b,t(E),E);G&12&&Ob();dc(d)}}function jc(c){if(M){a.ie(c);var b=a.xc(c);while(b&&v!==b){b.tagName=="A"&&a.Ib(c);try{b=b.parentNode}catch(d){break}}}}function nc(a){C[s];s=t(a);ub=C[s];Tb(a);return s}function Fc(a,b){w=0;nc(a);n.m(f.ze,t(a),b)}function Tb(b,c){yb=b;a.l(O,function(a){a.zc(t(b),b,c)})}function uc(){var b=f.rd||0,a=X;if(lb)a&1&&(a&=1);f.rd|=a;return K=a&~b}function rc(){if(K){f.rd&=~X;K=0}}function Wb(){var b=a.X();a.hb(b,R);a.H(b,"absolute");return b}function t(a){return(a%r+r)%r}function kc(a,c){if(c)if(!D){a=b.min(b.max(a+yb,0),r-u);c=h}else if(D&2){a=t(a+yb);c=h}ab(a,o.pb,c)}function zb(){a.l(O,function(a){a.wc(a.Vb.Xb<=H)})}function hc(){if(!H){H=1;zb();if(!B){G&12&&dc();G&3&&C[s].Dc()}}}function gc(){if(H){H=0;zb();B||!(G&12)||fc()}}function ic(){R={pc:J,kc:I,i:0,j:0};a.l(U,function(b){a.hb(b,R);a.H(b,"absolute");a.Bb(b,"hidden");a.P(b)});a.hb(db,R)}function nb(b,a){ab(b,a,d)}function ab(f,e,k){if(Qb&&(!B||o.ad)){P=d;B=h;z.ab();if(e==j)e=Ub;var c=Eb.kb(),a=f;if(k){a=c+f;if(f>0)a=b.ceil(a);else a=b.floor(a)}if(D&2)a=t(a);if(!(D&1))a=b.max(0,b.min(a,r-u));var i=(a-c)%r;a=c+i;var g=c==a?0:e*b.abs(i);g=b.min(g,e*u*1.5);z.Lb(c,a,g||1)}}n.Ae=ab;n.fd=function(){if(!Q){Q=d;C[s]&&C[s].Dc()}};n.qe=function(){return M};function W(){return a.n(x||p)}function kb(){return a.p(x||p)}n.W=W;n.V=kb;function Gb(c,d){if(c==j)return a.n(p);if(!x){var b=a.X(g);a.Xc(b,a.Xc(p));a.Hb(b,a.Hb(p));a.R(b,"block");a.H(b,"relative");a.z(b,0);a.B(b,0);a.Bb(b,"visible");x=a.X(g);a.H(x,"absolute");a.z(x,0);a.B(x,0);a.n(x,a.n(p));a.p(x,a.p(p));a.le(x,"0 0");a.I(x,b);var h=a.U(p);a.I(p,x);a.nb(p,"backgroundImage","");a.l(h,function(c){a.I(a.t(c,"noscale")?p:b,c)})}Y=c/(d?a.p:a.n)(x);a.me(x,Y);var f=d?Y*W():c,e=d?c:Y*kb();a.n(p,f);a.p(p,e);a.l(O,function(a){a.jc(f,e)})}n.td=Gb;n.Ic=function(a){var d=b.ceil(t(hb/ac)),c=t(a-s+d);if(c>u){if(a-s>r/2)a-=r;else if(a-s<=-r/2)a+=r}else a=s+c-d;return a};l.call(n);n.db=p=a.ib(p);var o=a.q({tb:0,Fe:1,mc:0,Zb:h,cc:1,xd:d,ad:d,Kb:1,dc:3e3,Yb:1,pb:500,Wd:c.yc,Gb:20,Tb:0,G:1,bc:0,rc:1,sb:1,Ub:1},ec);if(o.pe!=j)o.dc=o.pe;if(o.Fc!=j)o.G=o.Fc;var ib=o.sb&3,vc=(o.sb&4)/-4||1,fb=o.ff,L=a.q({A:q,Nc:1,Mc:1},o.oe),rb=o.re,V=o.Oc,bb=o.ue,S=!o.rc,x,v=a.C(p,"slides",S),db=a.C(p,"loading",S)||a.X(g),Jb=a.C(p,"navigator",S),bc=a.C(p,"arrowleft",S),Zb=a.C(p,"arrowright",S),Hb=a.C(p,"thumbnavigator",S),mc=a.n(v),lc=a.p(v),R,U=[],wc=a.U(v);a.l(wc,function(b){if(b.tagName=="DIV"&&!a.t(b,"u"))U.push(b);else a.tc()&&a.F(b,(a.F(b)||0)+1)});var s=-1,yb,ub,r=U.length,J=o.te||mc,I=o.se||lc,Vb=o.Tb,Bb=J+Vb,Cb=I+Vb,ac=ib&1?Bb:Cb,u=b.min(o.G,r),jb,w,K,Ab,O=[],Pb,Rb,Nb,cc,Ec,Q,G=o.Yb,oc=o.dc,Ub=o.pb,sb,eb,hb,Qb=u<r,D=Qb?o.cc:0,X,M,H=1,P,B,T,vb=0,wb=0,F,cb,gb,Eb,y,Z,z,Sb=new qc,Y;Q=o.Zb;n.Vb=ec;ic();a.J(p,"jssor-slider",d);a.F(v,a.F(v)||0);a.H(v,"absolute");jb=a.lb(v,d);a.Pb(jb,v);if(fb){cc=fb.ef;sb=fb.A;eb=u==1&&r>1&&sb&&(!a.Bd()||a.id()>=8)}hb=eb||u>=r||!(D&1)?0:o.bc;X=(u>1||hb?ib:-1)&o.Ub;var xb=v,C=[],A,N,Fb=a.Ce(),lb=Fb.Be,E,qb,Kb,tb;Fb.jd&&a.nb(xb,Fb.jd,([i,"pan-y","pan-x","none"])[X]||"");Z=new Bc;if(eb)A=new sb(Sb,J,I,fb,lb);a.I(jb,Z.Ob);a.Bb(v,"hidden");N=Wb();a.nb(N,"backgroundColor","#000");a.hc(N,0);a.Pb(N,xb.firstChild,xb);for(var pb=0;pb<U.length;pb++){var yc=U[pb],Ac=new zc(yc,pb);C.push(Ac)}a.P(db);Eb=new Cc;z=new pc(Eb,Z);if(X){a.a(v,"mousedown",Xb);a.a(v,"touchstart",tc);a.a(v,"dragstart",Ib);a.a(v,"selectstart",Ib);a.a(g,"mouseup",ob);a.a(g,"touchend",ob);a.a(g,"touchcancel",ob);a.a(e,"blur",ob)}G&=lb?10:5;if(Jb&&rb){Pb=new rb.A(Jb,rb,W(),kb());O.push(Pb)}if(V&&bc&&Zb){V.cc=D;V.G=u;Rb=new V.A(bc,Zb,V,W(),kb());O.push(Rb)}if(Hb&&bb){bb.mc=o.mc;Nb=new bb.A(Hb,bb);O.push(Nb)}a.l(O,function(a){a.Bc(r,C,db);a.mb(m.Sb,kc)});Gb(W());a.a(v,"click",jc);a.a(p,"mouseout",a.Qb(hc,p));a.a(p,"mouseover",a.Qb(gc,p));zb();o.Pc&&a.a(g,"keydown",function(a){if(a.keyCode==37)nb(-1);else a.keyCode==39&&nb(1)});var mb=o.mc;if(!(D&1))mb=b.max(0,b.min(mb,r-u));z.Lb(mb,mb,0)};f.He=21;f.ee=22;f.de=23;f.Td=24;f.Xd=25;f.Re=26;f.Od=27;f.fe=28;f.Qd=202;f.ze=203;f.Te=206;f.Zd=207;f.ce=208;f.wd=209;f.he=210;f.Se=211;var m={Sb:1},r=function(c,D){var f=this;l.call(f);c=a.ib(c);var t,u,s,r,n=0,e,o,k,y,z,j,g,q,p,C=[],A=[];function x(a){a!=-1&&A[a].Ec(a==n)}function v(a){f.m(m.Sb,a*o)}f.db=c;f.zc=function(a){if(a!=r){var d=n,c=b.floor(a/o);n=c;r=a;x(d);x(c)}};f.wc=function(b){a.L(c,b)};var B;f.jc=function(f,b){if(!B||e.Q==h){var f=a.yb(c).clientWidth,b=a.yb(c).clientHeight;e.N&1&&a.B(c,(f-u)/2);e.N&2&&a.z(c,(b-s)/2);B=d}};var w;f.Bc=function(D){if(!w){t=b.ceil(D/o);n=0;var m=q+y,r=p+z,l=b.ceil(t/k)-1;u=q+m*(!j?l:k-1);s=p+r*(j?l:k-1);a.n(c,u);a.p(c,s);for(var f=0;f<t;f++){var B=a.Ge();a.je(B,f+1);var h=a.Lc(g,"numbertemplate",B,d);a.H(h,"absolute");var x=f%(l+1);a.B(h,!j?m*x:f%k*m);a.z(h,j?r*x:b.floor(f/(l+1))*r);a.I(c,h);C[f]=h;e.wb&1&&a.a(h,"click",a.K(i,v,f));e.wb&2&&a.a(h,"mouseover",a.Qb(a.K(i,v,f),h));A[f]=a.Jb(h)}w=d}};f.Vb=e=a.q({vb:0,rb:0,O:1,wb:1},D);g=a.C(c,"prototype");q=a.n(g);p=a.p(g);a.Ab(g,c);o=e.zb||1;k=e.Rb||1;y=e.vb;z=e.rb;j=e.O-1;e.Q==h&&a.J(c,"noscale",d)},n=function(b,f,j){var c=this;l.call(c);var u,t,e,g,k,q=a.n(b),o=a.p(b);function n(a){c.m(m.Sb,a,d)}function r(c){a.L(b,c||!j.cc&&e==0);a.L(f,c||!j.cc&&e>=t-j.G);u=c}c.zc=function(b,a,c){if(c)e=a;else{e=b;r(u)}};c.wc=r;var s;c.jc=function(i,c){if(!s||g.Q==h){var e=a.yb(b).clientWidth,c=a.yb(b).clientHeight;if(g.N&1){a.B(b,(e-q)/2);a.B(f,(e-q)/2)}if(g.N&2){a.z(b,(c-o)/2);a.z(f,(c-o)/2)}s=d}};var p;c.Bc=function(c){t=c;e=0;if(!p){a.a(b,"click",a.K(i,n,-k));a.a(f,"click",a.K(i,n,k));a.Jb(b);a.Jb(f);p=d}};c.Vb=g=a.q({zb:1},j);k=g.zb;if(g.Q==h){a.J(b,"noscale",d);a.J(f,"noscale",d)}},p=function(k,B){var i=this,y,p,c,v=[],z,x,e,q,r,u,t,o,s,g,n;l.call(i);k=a.ib(k);function A(l,f){var g=this,b,k,j;function o(){k.Ec(p==f)}function h(){if(!s.qe()){var a=e-f%e,b=s.Ic((f+a)/e-1),c=b*e+e-a;i.m(m.Sb,c)}}g.jb=f;g.Gc=o;j=l.Xe||l.vd||a.X();g.Ob=b=a.Lc(n,"thumbnailtemplate",j,d);k=a.Jb(b);c.wb&1&&a.a(b,"click",h);c.wb&2&&a.a(b,"mouseover",a.Qb(h,b))}i.zc=function(c,d,f){var a=p;p=c;a!=-1&&v[a].Gc();v[c].Gc();!f&&s.Ae(s.Ic(b.floor(d/e)))};i.wc=function(b){a.L(k,b)};i.jc=a.nc;var w;i.Bc=function(F,D){if(!w){y=F;b.ceil(y/e);p=-1;o=b.min(o,D.length);var i=c.O&1,m=u+(u+q)*(e-1)*(1-i),l=t+(t+r)*(e-1)*i,B=m+(m+q)*(o-1)*i,n=l+(l+r)*(o-1)*(1-i);a.H(g,"absolute");a.Bb(g,"hidden");c.N&1&&a.B(g,(z-B)/2);c.N&2&&a.z(g,(x-n)/2);a.n(g,B);a.p(g,n);var j=[];a.l(D,function(l,f){var h=new A(l,f),d=h.Ob,c=b.floor(f/e),k=f%e;a.B(d,(u+q)*k*(1-i));a.z(d,(t+r)*k*i);if(!j[c]){j[c]=a.X();a.I(g,j[c])}a.I(j[c],d);v.push(h)});var E=a.q({xd:h,Zb:h,ad:h,te:m,se:l,Tb:q*i+r*(1-i),Gb:12,pb:200,Yb:1,sb:c.O,Ub:c.ve?0:c.O},c);s=new f(k,E);w=d}};i.Vb=c=a.q({vb:3,rb:3,G:1,O:1,N:3,wb:1},B);if(c.Hc!=j)c.Rb=c.Hc;z=a.n(k);x=a.p(k);g=a.C(k,"slides",d);n=a.C(g,"prototype");u=a.n(n);t=a.p(n);a.Ab(n,g);e=c.Rb||1;q=c.vb;r=c.rb;o=c.G;c.Q==h&&a.J(k,"noscale",d)};function q(){k.call(this,0,0);this.Nb=a.nc}var s=function(p,h,f){var c=this,g,n=f?h.Nc:h.Mc,e=h.sd,o={Z:"t",E:"d",o:"du",x:"x",y:"y",e:"r",c:"z",f:"f",eb:"b"},d={Cb:function(b,a){if(!isNaN(a.bb))b=a.bb;else b*=a.Ve;return b},f:function(b,a){return this.Cb(b-1,a)}};d.c=d.f;k.call(c,0,0);function l(r,m){var k=[],i,j=[],c=[];function h(c,d){var b={};a.l(o,function(g,h){var e=a.t(c,g+(d||""));if(e){var f={};if(g=="t")f.bb=e;else if(e.indexOf("%")+1)f.Ve=a.uc(e)/100;else f.bb=a.uc(e);b[h]=f}});return b}function p(){return e[b.floor(b.random()*e.length)]}function g(f){var h;if(f=="*")h=p();else if(f){var d=e[a.Me(f)]||e[f];if(a.lc(d)){if(f!=i){i=f;c[f]=0;j[f]=d[b.floor(b.random()*d.length)]}else c[f]++;d=j[f];if(a.lc(d)){d=d.length&&d[c[f]%d.length];if(a.lc(d))d=d[b.floor(b.random()*d.length)]}}h=d;if(a.nd(h))h=g(h)}return h}var q=a.U(r);a.l(q,function(b){var c=[];c.db=b;var e=a.t(b,"u")=="caption";a.l(f?[0,3]:[2],function(k,o){if(e){var j,f;if(k!=2||!a.t(b,"t3")){f=h(b,k);if(k==2&&!f.Z){f.E=f.E||{bb:0};f=a.q(h(b,0),f)}}if(f&&f.Z){j=g(f.Z.bb);if(j){var i=a.q({E:0},j);a.l(f,function(c,a){var b=(d[a]||d.Cb).apply(d,[i[a],f[a]]);if(!isNaN(b))i[a]=b});if(!o)if(f.eb)i.eb=f.eb.bb||0;else if(n&2)i.eb=0}}c.push(i)}if(m%2&&!o)c.U=l(b,m+1)});k.push(c)});return k}function m(w,c,z){var g={k:c.k,D:c.D,Db:c.Db,md:f&&!z},m=w,r=a.yb(w),l=a.n(m),j=a.p(m),y=a.n(r),x=a.p(r),h={},e={},i=c.df||1;if(c.f)e.f=1-c.f;g.W=l;g.V=j;if(c.c||c.e){e.c=(c.c||2)-2;if(a.tc()||a.ye())e.c=b.min(e.c,1);h.c=1;var B=c.e||0;e.e=B*360;h.e=0}else if(c.g){var s={i:0,r:l,u:j,j:0},v=a.q({},s),d=v.qb={},u=c.g&4,p=c.g&8,t=c.g&1,q=c.g&2;if(u&&p){d.i=j/2*i;d.u=-d.i}else if(u)d.u=-j*i;else if(p)d.i=j*i;if(t&&q){d.j=l/2*i;d.r=-d.j}else if(t)d.r=-l*i;else if(q)d.j=l*i;g.Y=c.Y;e.g=v;h.g=s}var n=0,o=0;if(c.x)n-=y*c.x;if(c.y)o-=x*c.y;if(n||o||g.Y){e.j=n;e.i=o}var A=c.o;h=a.q(h,a.Ed(m,e));g.sc=a.Cd();return new k(c.E,A,g,m,h,e)}function i(b,d){a.l(d,function(a){var e,h=a.db,d=a[0],k=a[1];if(d){e=m(h,d);b=e.ac(d.eb==j?b:d.eb,1)}b=i(b,a.U);if(k){var f=m(h,k,1);f.ac(b,1);c.fb(f);g.fb(f)}e&&c.fb(e)});return b}c.Nb=function(){c.v(c.gb()*(f||0));g.v(0)};g=new k(0,0);i(0,n?l(p,1):[])};jssor_slider1_starter=function(j){var h=[{o:900,g:3,k:c.Wc},{o:900,g:12,k:c.Wc},{o:600,c:11,k:{c:c.Cc,f:c.xb},f:2},{o:600,x:-.6,c:11,k:{j:c.s,c:c.s},f:2},{o:600,y:-.6,c:11,k:{i:c.s,c:c.s},f:2},{o:700,y:-.6,c:1,k:{i:c.s,c:c.s},f:2},{o:700,c:11,e:1,k:{c:c.Cc,f:c.xb,e:c.Cc},f:2,D:{e:.8}},{o:700,x:-.6,c:11,e:1,k:{j:c.s,c:c.s,f:c.xb,e:c.s},f:2,D:{e:.8}},{o:700,y:-.6,c:11,e:1,k:{i:c.s,c:c.s,f:c.xb,e:c.s},f:2,D:{e:.8}},{o:700,x:-.6,c:1,e:1,k:{j:c.cb,c:c.cb,e:c.cb,f:c.yc},f:2,D:{e:1.2}},{o:700,y:-.6,c:1,e:1,k:{i:c.cb,c:c.cb,e:c.cb,f:c.yc},f:2,D:{e:1.2}},{o:900,x:-.6,k:{j:c.Rc},f:2},{o:900,y:-.6,k:{i:c.Rc},f:2}],i=new f(j,{Zb:d,Kb:1,dc:4e3,Yb:1,Pc:d,pb:500,Gb:20,Tb:0,G:1,bc:0,rc:1,sb:1,Ub:3,oe:{A:s,sd:h,Nc:1,Mc:3},re:{A:r,Xb:2,N:0,zb:1,Rb:1,vb:10,rb:10,O:1},Oc:{A:n,Xb:1,zb:1}});function g(){var c=a.cd().x;if(c)i.td(b.min(c,600));else a.E(g,30)}g();a.a(e,"load",g);a.a(e,"resize",a.ed(e,g));a.a(e,"orientationchange",g)};jssor_slider2_starter=function(i){var g=new f(i,{Zb:d,Kb:1,dc:4e3,Yb:1,Pc:d,pb:500,Gb:20,Tb:0,G:1,bc:0,rc:1,sb:1,Ub:3,Oc:{A:n,Xb:1,zb:1},ue:{A:p,Xb:2,N:3,Rb:1,vb:3,rb:3,G:9,bc:260,O:1,ve:h}});function c(){var d=a.cd().x;if(d)g.td(b.min(d,600));else a.E(c,30)}c();a.a(e,"load",c);a.a(e,"resize",a.ed(e,c));a.a(e,"orientationchange",c)}})(window,document,Math,null,true,false)

