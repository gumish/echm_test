function O(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function $(t){var e=O(t).Element;return t instanceof e||t instanceof Element}function T(t){var e=O(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function dt(t){if(typeof ShadowRoot>"u")return!1;var e=O(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var X=Math.max,at=Math.min,z=Math.round;function vt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function bt(){return!/^((?!chrome|android).)*safari/i.test(vt())}function I(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),i=1,a=1;e&&T(t)&&(i=t.offsetWidth>0&&z(o.width)/t.offsetWidth||1,a=t.offsetHeight>0&&z(o.height)/t.offsetHeight||1);var s=$(t)?O(t):window,p=s.visualViewport,n=!bt()&&r,m=(o.left+(n&&p?p.offsetLeft:0))/i,f=(o.top+(n&&p?p.offsetTop:0))/a,v=o.width/i,x=o.height/a;return{width:v,height:x,top:f,right:m+v,bottom:f+x,left:m,x:m,y:f}}function nt(t){var e=O(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function It(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ft(t){return t===O(t)||!T(t)?nt(t):It(t)}function L(t){return t?(t.nodeName||"").toLowerCase():null}function W(t){return(($(t)?t.ownerDocument:t.document)||window.document).documentElement}function pt(t){return I(W(t)).left+nt(t).scrollLeft}function H(t){return O(t).getComputedStyle(t)}function ft(t){var e=H(t),r=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+o)}function Ve(t){var e=t.getBoundingClientRect(),r=z(e.width)/t.offsetWidth||1,o=z(e.height)/t.offsetHeight||1;return r!==1||o!==1}function qt(t,e,r){r===void 0&&(r=!1);var o=T(e),i=T(e)&&Ve(e),a=W(e),s=I(t,i,r),p={scrollLeft:0,scrollTop:0},n={x:0,y:0};return(o||!o&&!r)&&((L(e)!=="body"||ft(a))&&(p=Ft(e)),T(e)?(n=I(e,!0),n.x+=e.clientLeft,n.y+=e.clientTop):a&&(n.x=pt(a))),{x:s.left+p.scrollLeft-n.x,y:s.top+p.scrollTop-n.y,width:s.width,height:s.height}}function st(t){var e=I(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function G(t){return L(t)==="html"?t:t.assignedSlot||t.parentNode||(dt(t)?t.host:null)||W(t)}function Tt(t){return["html","body","#document"].indexOf(L(t))>=0?t.ownerDocument.body:T(t)&&ft(t)?t:Tt(G(t))}function Q(t,e){var r;e===void 0&&(e=[]);var o=Tt(t),i=o===((r=t.ownerDocument)==null?void 0:r.body),a=O(o),s=i?[a].concat(a.visualViewport||[],ft(o)?o:[]):o,p=e.concat(s);return i?p:p.concat(Q(G(s)))}function Xt(t){return["table","td","th"].indexOf(L(t))>=0}function me(t){return!T(t)||H(t).position==="fixed"?null:t.offsetParent}function He(t){var e=/firefox/i.test(vt()),r=/Trident/i.test(vt());if(r&&T(t)){var o=H(t);if(o.position==="fixed")return null}var i=G(t);for(dt(i)&&(i=i.host);T(i)&&["html","body"].indexOf(L(i))<0;){var a=H(i);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return i;i=i.parentNode}return null}function U(t){for(var e=O(t),r=me(t);r&&Xt(r)&&H(r).position==="static";)r=me(r);return r&&(L(r)==="html"||L(r)==="body"&&H(r).position==="static")?e:r||He(t)||e}var P="top",M="bottom",D="right",A="left",Mt="auto",Z=[P,M,D,A],J="start",mt="end",le="clippingParents",Lt="viewport",gt="popper",ce="reference",Ut=Z.reduce(function(t,e){return t.concat([e+"-"+J,e+"-"+mt])},[]),jt=[].concat(Z,[Mt]).reduce(function(t,e){return t.concat([e,e+"-"+J,e+"-"+mt])},[]),ke="beforeRead",_e="read",$e="afterRead",Ie="beforeMain",Fe="main",qe="afterMain",Xe="beforeWrite",Ue="write",Ye="afterWrite",ue=[ke,_e,$e,Ie,Fe,qe,Xe,Ue,Ye];function ze(t){var e=new Map,r=new Set,o=[];t.forEach(function(a){e.set(a.name,a)});function i(a){r.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(p){if(!r.has(p)){var n=e.get(p);n&&i(n)}}),o.push(a)}return t.forEach(function(a){r.has(a.name)||i(a)}),o}function Yt(t){var e=ze(t);return ue.reduce(function(r,o){return r.concat(e.filter(function(i){return i.phase===o}))},[])}function zt(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function j(t){return t.split("-")[0]}function Gt(t){var e=t.reduce(function(r,o){var i=r[o.name];return r[o.name]=i?Object.assign({},i,o,{options:Object.assign({},i.options,o.options),data:Object.assign({},i.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}function Jt(t,e){var r=O(t),o=W(t),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,p=0,n=0;if(i){a=i.width,s=i.height;var m=bt();(m||!m&&e==="fixed")&&(p=i.offsetLeft,n=i.offsetTop)}return{width:a,height:s,x:p+pt(t),y:n}}function Kt(t){var e,r=W(t),o=nt(t),i=(e=t.ownerDocument)==null?void 0:e.body,a=X(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=X(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),p=-o.scrollLeft+pt(t),n=-o.scrollTop;return H(i||r).direction==="rtl"&&(p+=X(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:s,x:p,y:n}}function Ot(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&dt(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ht(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ge(t,e){var r=I(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function de(t,e,r){return e===Lt?ht(Jt(t,r)):$(e)?Ge(e,r):ht(Kt(W(t)))}function Je(t){var e=Q(G(t)),r=["absolute","fixed"].indexOf(H(t).position)>=0,o=r&&T(t)?U(t):t;return $(o)?e.filter(function(i){return $(i)&&Ot(i,o)&&L(i)!=="body"}):[]}function Qt(t,e,r,o){var i=e==="clippingParents"?Je(t):[].concat(e),a=[].concat(i,[r]),s=a[0],p=a.reduce(function(n,m){var f=de(t,m,o);return n.top=X(f.top,n.top),n.right=at(f.right,n.right),n.bottom=at(f.bottom,n.bottom),n.left=X(f.left,n.left),n},de(t,s,o));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function F(t){return t.split("-")[1]}function lt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Et(t){var e=t.reference,r=t.element,o=t.placement,i=o?j(o):null,a=o?F(o):null,s=e.x+e.width/2-r.width/2,p=e.y+e.height/2-r.height/2,n;switch(i){case P:n={x:s,y:e.y-r.height};break;case M:n={x:s,y:e.y+e.height};break;case D:n={x:e.x+e.width,y:p};break;case A:n={x:e.x-r.width,y:p};break;default:n={x:e.x,y:e.y}}var m=i?lt(i):null;if(m!=null){var f=m==="y"?"height":"width";switch(a){case J:n[m]=n[m]-(e[f]/2-r[f]/2);break;case mt:n[m]=n[m]+(e[f]/2-r[f]/2);break;default:}}return n}function Pt(){return{top:0,right:0,bottom:0,left:0}}function St(t){return Object.assign({},Pt(),t)}function Rt(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}function Y(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=o===void 0?t.placement:o,a=r.strategy,s=a===void 0?t.strategy:a,p=r.boundary,n=p===void 0?le:p,m=r.rootBoundary,f=m===void 0?Lt:m,v=r.elementContext,x=v===void 0?gt:v,l=r.altBoundary,w=l===void 0?!1:l,u=r.padding,c=u===void 0?0:u,y=St(typeof c!="number"?c:Rt(c,Z)),S=x===gt?ce:gt,R=t.rects.popper,d=t.elements[w?S:x],g=Qt($(d)?d:d.contextElement||W(t.elements.popper),n,f,s),h=I(t.elements.reference),E=Et({reference:h,element:R,strategy:"absolute",placement:i}),C=ht(Object.assign({},R,E)),N=x===gt?C:h,B={top:g.top-N.top+y.top,bottom:N.bottom-g.bottom+y.bottom,left:g.left-N.left+y.left,right:N.right-g.right+y.right},b=t.modifiersData.offset;if(x===gt&&b){var k=b[i];Object.keys(B).forEach(function(V){var tt=[D,M].indexOf(V)>=0?1:-1,et=[P,M].indexOf(V)>=0?"y":"x";B[V]+=k[et]*tt})}return B}var ve={placement:"bottom",modifiers:[],strategy:"absolute"};function ge(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function he(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,i=e.defaultOptions,a=i===void 0?ve:i;return function(p,n,m){m===void 0&&(m=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},ve,a),modifiersData:{},elements:{reference:p,popper:n},attributes:{},styles:{}},v=[],x=!1,l={state:f,setOptions:function(y){var S=typeof y=="function"?y(f.options):y;u(),f.options=Object.assign({},a,f.options,S),f.scrollParents={reference:$(p)?Q(p):p.contextElement?Q(p.contextElement):[],popper:Q(n)};var R=Yt(Gt([].concat(o,f.options.modifiers)));if(f.orderedModifiers=R.filter(function(b){return b.enabled}),!1){var d;if(getBasePlacement(f.options.placement)===auto)var g;var h,E,C,N,B}return w(),l.update()},forceUpdate:function(){if(!x){var y=f.elements,S=y.reference,R=y.popper;if(ge(S,R)){f.rects={reference:qt(S,U(R),f.options.strategy==="fixed"),popper:st(R)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(b){return f.modifiersData[b.name]=Object.assign({},b.data)});for(var d=0,g=0;g<f.orderedModifiers.length;g++){if(f.reset===!0){f.reset=!1,g=-1;continue}var h=f.orderedModifiers[g],E=h.fn,C=h.options,N=C===void 0?{}:C,B=h.name;typeof E=="function"&&(f=E({state:f,options:N,name:B,instance:l})||f)}}}},update:zt(function(){return new Promise(function(c){l.forceUpdate(),c(f)})}),destroy:function(){u(),x=!0}};if(!ge(p,n))return l;l.setOptions(m).then(function(c){!x&&m.onFirstUpdate&&m.onFirstUpdate(c)});function w(){f.orderedModifiers.forEach(function(c){var y=c.name,S=c.options,R=S===void 0?{}:S,d=c.effect;if(typeof d=="function"){var g=d({state:f,name:y,instance:l,options:R}),h=function(){};v.push(g||h)}})}function u(){v.forEach(function(c){return c()}),v=[]}return l}}var Wt={passive:!0};function Ke(t){var e=t.state,r=t.instance,o=t.options,i=o.scroll,a=i===void 0?!0:i,s=o.resize,p=s===void 0?!0:s,n=O(e.elements.popper),m=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&m.forEach(function(f){f.addEventListener("scroll",r.update,Wt)}),p&&n.addEventListener("resize",r.update,Wt),function(){a&&m.forEach(function(f){f.removeEventListener("scroll",r.update,Wt)}),p&&n.removeEventListener("resize",r.update,Wt)}}var xe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ke,data:{}};function Qe(t){var e=t.state,r=t.name;e.modifiersData[r]=Et({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ye={name:"popperOffsets",enabled:!0,phase:"read",fn:Qe,data:{}};var Ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tr(t,e){var r=t.x,o=t.y,i=e.devicePixelRatio||1;return{x:z(r*i)/i||0,y:z(o*i)/i||0}}function we(t){var e,r=t.popper,o=t.popperRect,i=t.placement,a=t.variation,s=t.offsets,p=t.position,n=t.gpuAcceleration,m=t.adaptive,f=t.roundOffsets,v=t.isFixed,x=s.x,l=x===void 0?0:x,w=s.y,u=w===void 0?0:w,c=typeof f=="function"?f({x:l,y:u}):{x:l,y:u};l=c.x,u=c.y;var y=s.hasOwnProperty("x"),S=s.hasOwnProperty("y"),R=A,d=P,g=window;if(m){var h=U(r),E="clientHeight",C="clientWidth";if(h===O(r)&&(h=W(r),H(h).position!=="static"&&p==="absolute"&&(E="scrollHeight",C="scrollWidth")),h=h,i===P||(i===A||i===D)&&a===mt){d=M;var N=v&&h===g&&g.visualViewport?g.visualViewport.height:h[E];u-=N-o.height,u*=n?1:-1}if(i===A||(i===P||i===M)&&a===mt){R=D;var B=v&&h===g&&g.visualViewport?g.visualViewport.width:h[C];l-=B-o.width,l*=n?1:-1}}var b=Object.assign({position:p},m&&Ze),k=f===!0?tr({x:l,y:u},O(r)):{x:l,y:u};if(l=k.x,u=k.y,n){var V;return Object.assign({},b,(V={},V[d]=S?"0":"",V[R]=y?"0":"",V.transform=(g.devicePixelRatio||1)<=1?"translate("+l+"px, "+u+"px)":"translate3d("+l+"px, "+u+"px, 0)",V))}return Object.assign({},b,(e={},e[d]=S?u+"px":"",e[R]=y?l+"px":"",e.transform="",e))}function er(t){var e=t.state,r=t.options,o=r.gpuAcceleration,i=o===void 0?!0:o,a=r.adaptive,s=a===void 0?!0:a,p=r.roundOffsets,n=p===void 0?!0:p;if(!1)var m;var f={placement:j(e.placement),variation:F(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,we(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:n})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,we(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:n})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var be={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:er,data:{}};function rr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},i=e.attributes[r]||{},a=e.elements[r];!T(a)||!L(a)||(Object.assign(a.style,o),Object.keys(i).forEach(function(s){var p=i[s];p===!1?a.removeAttribute(s):a.setAttribute(s,p===!0?"":p)}))})}function or(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var i=e.elements[o],a=e.attributes[o]||{},s=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),p=s.reduce(function(n,m){return n[m]="",n},{});!T(i)||!L(i)||(Object.assign(i.style,p),Object.keys(a).forEach(function(n){i.removeAttribute(n)}))})}}var Oe={name:"applyStyles",enabled:!0,phase:"write",fn:rr,effect:or,requires:["computeStyles"]};function ir(t,e,r){var o=j(t),i=[A,P].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=a[0],p=a[1];return s=s||0,p=(p||0)*i,[A,D].indexOf(o)>=0?{x:p,y:s}:{x:s,y:p}}function ar(t){var e=t.state,r=t.options,o=t.name,i=r.offset,a=i===void 0?[0,0]:i,s=jt.reduce(function(f,v){return f[v]=ir(v,e.rects,a),f},{}),p=s[e.placement],n=p.x,m=p.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=n,e.modifiersData.popperOffsets.y+=m),e.modifiersData[o]=s}var Ee={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ar};var nr={left:"right",right:"left",bottom:"top",top:"bottom"};function xt(t){return t.replace(/left|right|bottom|top/g,function(e){return nr[e]})}var pr={start:"end",end:"start"};function Vt(t){return t.replace(/start|end/g,function(e){return pr[e]})}function Zt(t,e){e===void 0&&(e={});var r=e,o=r.placement,i=r.boundary,a=r.rootBoundary,s=r.padding,p=r.flipVariations,n=r.allowedAutoPlacements,m=n===void 0?jt:n,f=F(o),v=f?p?Ut:Ut.filter(function(w){return F(w)===f}):Z,x=v.filter(function(w){return m.indexOf(w)>=0});x.length===0&&(x=v);var l=x.reduce(function(w,u){return w[u]=Y(t,{placement:u,boundary:i,rootBoundary:a,padding:s})[j(u)],w},{});return Object.keys(l).sort(function(w,u){return l[w]-l[u]})}function fr(t){if(j(t)===Mt)return[];var e=xt(t);return[Vt(t),e,Vt(e)]}function sr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=r.mainAxis,a=i===void 0?!0:i,s=r.altAxis,p=s===void 0?!0:s,n=r.fallbackPlacements,m=r.padding,f=r.boundary,v=r.rootBoundary,x=r.altBoundary,l=r.flipVariations,w=l===void 0?!0:l,u=r.allowedAutoPlacements,c=e.options.placement,y=j(c),S=y===c,R=n||(S||!w?[xt(c)]:fr(c)),d=[c].concat(R).reduce(function(ut,K){return ut.concat(j(K)===Mt?Zt(e,{placement:K,boundary:f,rootBoundary:v,padding:m,flipVariations:w,allowedAutoPlacements:u}):K)},[]),g=e.rects.reference,h=e.rects.popper,E=new Map,C=!0,N=d[0],B=0;B<d.length;B++){var b=d[B],k=j(b),V=F(b)===J,tt=[P,M].indexOf(k)>=0,et=tt?"width":"height",_=Y(e,{placement:b,boundary:f,rootBoundary:v,altBoundary:x,padding:m}),q=tt?V?D:A:V?M:P;g[et]>h[et]&&(q=xt(q));var At=xt(q),rt=[];if(a&&rt.push(_[k]<=0),p&&rt.push(_[q]<=0,_[At]<=0),rt.every(function(ut){return ut})){N=b,C=!1;break}E.set(b,rt)}if(C)for(var Dt=w?3:1,Ht=function(K){var wt=d.find(function(Nt){var ot=E.get(Nt);if(ot)return ot.slice(0,K).every(function(kt){return kt})});if(wt)return N=wt,"break"},yt=Dt;yt>0;yt--){var Ct=Ht(yt);if(Ct==="break")break}e.placement!==N&&(e.modifiersData[o]._skip=!0,e.placement=N,e.reset=!0)}}var Pe={name:"flip",enabled:!0,phase:"main",fn:sr,requiresIfExists:["offset"],data:{_skip:!1}};function te(t){return t==="x"?"y":"x"}function ct(t,e,r){return X(t,at(e,r))}function Se(t,e,r){var o=ct(t,e,r);return o>r?r:o}function mr(t){var e=t.state,r=t.options,o=t.name,i=r.mainAxis,a=i===void 0?!0:i,s=r.altAxis,p=s===void 0?!1:s,n=r.boundary,m=r.rootBoundary,f=r.altBoundary,v=r.padding,x=r.tether,l=x===void 0?!0:x,w=r.tetherOffset,u=w===void 0?0:w,c=Y(e,{boundary:n,rootBoundary:m,padding:v,altBoundary:f}),y=j(e.placement),S=F(e.placement),R=!S,d=lt(y),g=te(d),h=e.modifiersData.popperOffsets,E=e.rects.reference,C=e.rects.popper,N=typeof u=="function"?u(Object.assign({},e.rects,{placement:e.placement})):u,B=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),b=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(h){if(a){var V,tt=d==="y"?P:A,et=d==="y"?M:D,_=d==="y"?"height":"width",q=h[d],At=q+c[tt],rt=q-c[et],Dt=l?-C[_]/2:0,Ht=S===J?E[_]:C[_],yt=S===J?-C[_]:-E[_],Ct=e.elements.arrow,ut=l&&Ct?st(Ct):{width:0,height:0},K=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Pt(),wt=K[tt],Nt=K[et],ot=ct(0,E[_],ut[_]),kt=R?E[_]/2-Dt-ot-wt-B.mainAxis:Ht-ot-wt-B.mainAxis,Be=R?-E[_]/2+Dt+ot+Nt+B.mainAxis:yt+ot+Nt+B.mainAxis,_t=e.elements.arrow&&U(e.elements.arrow),Te=_t?d==="y"?_t.clientTop||0:_t.clientLeft||0:0,ee=(V=b==null?void 0:b[d])!=null?V:0,Me=q+kt-ee-Te,Le=q+Be-ee,re=ct(l?at(At,Me):At,q,l?X(rt,Le):rt);h[d]=re,k[d]=re-q}if(p){var oe,je=d==="x"?P:A,We=d==="x"?M:D,it=h[g],Bt=g==="y"?"height":"width",ie=it+c[je],ae=it-c[We],$t=[P,A].indexOf(y)!==-1,ne=(oe=b==null?void 0:b[g])!=null?oe:0,pe=$t?ie:it-E[Bt]-C[Bt]-ne+B.altAxis,fe=$t?it+E[Bt]+C[Bt]-ne-B.altAxis:ae,se=l&&$t?Se(pe,it,fe):ct(l?pe:ie,it,l?fe:ae);h[g]=se,k[g]=se-it}e.modifiersData[o]=k}}var Re={name:"preventOverflow",enabled:!0,phase:"main",fn:mr,requiresIfExists:["offset"]};var lr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,St(typeof e!="number"?e:Rt(e,Z))};function cr(t){var e,r=t.state,o=t.name,i=t.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,p=j(r.placement),n=lt(p),m=[A,D].indexOf(p)>=0,f=m?"height":"width";if(!(!a||!s)){var v=lr(i.padding,r),x=st(a),l=n==="y"?P:A,w=n==="y"?M:D,u=r.rects.reference[f]+r.rects.reference[n]-s[n]-r.rects.popper[f],c=s[n]-r.rects.reference[n],y=U(a),S=y?n==="y"?y.clientHeight||0:y.clientWidth||0:0,R=u/2-c/2,d=v[l],g=S-x[f]-v[w],h=S/2-x[f]/2+R,E=ct(d,h,g),C=n;r.modifiersData[o]=(e={},e[C]=E,e.centerOffset=E-h,e)}}function ur(t){var e=t.state,r=t.options,o=r.element,i=o===void 0?"[data-popper-arrow]":o;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||Ot(e.elements.popper,i)&&(e.elements.arrow=i))}var Ae={name:"arrow",enabled:!0,phase:"main",fn:cr,effect:ur,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function De(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Ce(t){return[P,D,M,A].some(function(e){return t[e]>=0})}function dr(t){var e=t.state,r=t.name,o=e.rects.reference,i=e.rects.popper,a=e.modifiersData.preventOverflow,s=Y(e,{elementContext:"reference"}),p=Y(e,{altBoundary:!0}),n=De(s,o),m=De(p,i,a),f=Ce(n),v=Ce(m);e.modifiersData[r]={referenceClippingOffsets:n,popperEscapeOffsets:m,isReferenceHidden:f,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}var Ne={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:dr};var vr=[xe,ye,be,Oe,Ee,Pe,Re,Ae,Ne],gr=he({defaultModifiers:vr});export{gr as a};
