(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,r){"use strict";r.r(t);var n=r(201),a=r.n(n),o=r(0),i=r.n(o),s=r(208),l=r.n(s),u=(r(202),r(211)),c=r(212),d=(r(30),r(58),r(21),r(47),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),f=o.createContext&&o.createContext(d),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function y(e){return function(t){return o.createElement(g,p({attr:p({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return o.createElement(t.tag,p({key:r},t.attr),e(t.child))}))}(e.child))}}function g(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var a=e.attr,i=e.title,s=m(e,["attr","title"]);return o.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:p({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&o.createElement("title",null,i),e.children)};return void 0!==f?o.createElement(f.Consumer,null,(function(e){return t(e)})):t(d)}var h=function(e){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}}]})(e)};h.displayName="MdFileDownload";r(101),r(60),r(57);var b=r(12),v=r.n(b),w=r(213),E=r.n(w),S=r(214),P=r.n(S),C=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function N(e){return x({},e,{playerVars:x({},e.playerVars,{autoplay:0,start:0,end:0})})}var O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onPlayerReady=function(e){return r.props.onReady(e)},r.onPlayerError=function(e){return r.props.onError(e)},r.onPlayerStateChange=function(e){switch(r.props.onStateChange(e),e.data){case t.PlayerState.ENDED:r.props.onEnd(e);break;case t.PlayerState.PLAYING:r.props.onPlay(e);break;case t.PlayerState.PAUSED:r.props.onPause(e)}},r.onPlayerPlaybackRateChange=function(e){return r.props.onPlaybackRateChange(e)},r.onPlayerPlaybackQualityChange=function(e){return r.props.onPlaybackQualityChange(e)},r.createPlayer=function(){if("undefined"!=typeof document){var e=x({},r.props.opts,{videoId:r.props.videoId});r.internalPlayer=P()(r.container,e),r.internalPlayer.on("ready",r.onPlayerReady),r.internalPlayer.on("error",r.onPlayerError),r.internalPlayer.on("stateChange",r.onPlayerStateChange),r.internalPlayer.on("playbackRateChange",r.onPlayerPlaybackRateChange),r.internalPlayer.on("playbackQualityChange",r.onPlayerPlaybackQualityChange)}},r.resetPlayer=function(){return r.internalPlayer.destroy().then(r.createPlayer)},r.updatePlayer=function(){r.internalPlayer.getIframe().then((function(e){r.props.id?e.setAttribute("id",r.props.id):e.removeAttribute("id"),r.props.className?e.setAttribute("class",r.props.className):e.removeAttribute("class")}))},r.updateVideo=function(){if(void 0!==r.props.videoId&&null!==r.props.videoId){var e=!1,t={videoId:r.props.videoId};"playerVars"in r.props.opts&&(e=1===r.props.opts.playerVars.autoplay,"start"in r.props.opts.playerVars&&(t.startSeconds=r.props.opts.playerVars.start),"end"in r.props.opts.playerVars&&(t.endSeconds=r.props.opts.playerVars.end)),e?r.internalPlayer.loadVideoById(t):r.internalPlayer.cueVideoById(t)}else r.internalPlayer.stopVideo()},r.refContainer=function(e){r.container=e},r.container=null,r.internalPlayer=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),C(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!E()(N(e.opts),N(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var r=e.opts.playerVars||{},n=t.opts.playerVars||{};return r.start!==n.start||r.end!==n.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.containerClassName},i.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}]),t}(i.a.Component);O.propTypes={videoId:v.a.string,id:v.a.string,className:v.a.string,containerClassName:v.a.string,opts:v.a.objectOf(v.a.any),onReady:v.a.func,onError:v.a.func,onPlay:v.a.func,onPause:v.a.func,onEnd:v.a.func,onStateChange:v.a.func,onPlaybackRateChange:v.a.func,onPlaybackQualityChange:v.a.func},O.defaultProps={id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},O.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var R=O;r.d(t,"query",(function(){return k}));t.default=function(e){e.location;var t=e.data,r=t.file,n=t.site;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{title:n.siteMetadata.title}),i.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-primary text-white d-flex flex-row justify-content-center align-content-center"},i.a.createElement(l.a,{className:"",fixed:r.childImageSharp.fixed,title:"robots-from-jupyter.github.io"}),i.a.createElement("h1",{className:"d-none d-md-flex display-4 px-4 flex-column justify-content-center",style:{maxWidth:"50%"}},"robots-from-jupyter.github.io")),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"media mx-auto"},i.a.createElement(h,{className:"d-none d-md-block text-primary mr-3",style:{height:200,width:200}}),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"list-group list-group-flush"},i.a.createElement("a",{className:"list-group-item list-group-item-action text-primary",href:"https://github.com/robots-from-jupyter/robotlab/releases",title:"RobotLab release downloads"},"RobotLab release downloads"),i.a.createElement("a",{className:"list-group-item list-group-item-action text-primary",href:"https://github.com/robots-from-jupyter/robotkernel/tree/master/docs/notebooks",title:"RobotKenel example notebooks"},"RobotKernel example notebooks"),i.a.createElement("a",{className:"list-group-item list-group-item-action text-primary",href:"https://robots-from-jupyter.github.io/robotkernel/",title:"RobotKernel documentation"},"RobotKernel documentation"),i.a.createElement("a",{className:"list-group-item list-group-item-action text-primary",href:u.data.file.publicURL,title:"RoboCon 2019 Workshop Slides"},"RoboCon 2019 Workshop Slides"),i.a.createElement("a",{className:"list-group-item list-group-item-action text-primary",href:c.data.file.publicURL,title:"RoboCon 2019 Presentation Slides"},"RoboCon 2019 Presentation Slides")))))),i.a.createElement("div",{className:"d-none d-md-block container-fluid bg-primary mt-4 py-4"},i.a.createElement("div",{className:"row",style:{overflow:"hidden"}},i.a.createElement("div",{className:"mx-auto",style:{width:640}},i.a.createElement(R,{videoId:"uYGh9_c3b7s"})))))};var k="858887560"},208:function(e,t,r){"use strict";r(22),r(17),r(14),r(135),r(134),r(209);var n=r(25);t.__esModule=!0,t.default=void 0;var a,o=n(r(59)),i=n(r(80)),s=n(r(136)),l=n(r(137)),u=n(r(0)),c=n(r(12)),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),m=function(e){var t=d(e),r=f(t);return p[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:o}),u.default.createElement("source",{media:a,srcSet:r,sizes:o}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function P(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),b.set(e,t)),function(){r.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?P(e,!0):"")+P(e)})).join("")+"<img "+u+i+s+r+n+t+o+a+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=u.default.createElement(O,(0,l.default)({src:t},a));return r.length>1?u.default.createElement("picture",null,n(r),o):o},O=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,o=e.style,i=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return u.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:a},p,{onLoad:i,onError:c,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=g&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&h&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||g&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,o=void 0===a?{}:a,i=e.imgStyle,s=void 0===i?{}:i,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,y=e.fixed,g=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,w=e.itemProp,P=e.loading,C=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:R?1:0,transition:k?"opacity "+h+"ms":"none"},s),I="boolean"==typeof g?"lightgray":g,V={transitionDelay:h+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&V,{},s,{},f),j={title:t,alt:this.state.isVisible?"":r,style:T,className:p};if(m){var A=m,_=A[0];return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),I&&u.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&V)}),_.base64&&u.default.createElement(N,{src:_.base64,spreadProps:j,imageVariants:A,generateSources:S}),_.tracedSVG&&u.default.createElement(N,{src:_.tracedSVG,spreadProps:j,imageVariants:A,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,v(A),u.default.createElement(O,{alt:r,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:P,draggable:C})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:P},_,{imageVariants:A}))}}))}if(y){var M=y,D=M[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},o);return"inherit"===o.display&&delete z.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},I&&u.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:I,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},k&&V)}),D.base64&&u.default.createElement(N,{src:D.base64,spreadProps:j,imageVariants:M,generateSources:S}),D.tracedSVG&&u.default.createElement(N,{src:D.tracedSVG,spreadProps:j,imageVariants:M,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,v(M),u.default.createElement(O,{alt:r,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:P,draggable:C})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:r,title:t,loading:P},D,{imageVariants:M}))}}))}return null},t}(u.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:k,sizes:L,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var I=R;t.default=I},209:function(e,t,r){"use strict";r(210)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},210:function(e,t,r){var n=r(1),a=r(7),o=r(48),i=/"/g,s=function(e,t,r,n){var a=String(o(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},211:function(e){e.exports=JSON.parse('{"data":{"file":{"publicURL":"/public/static/RobotLab-Workshop_2019-01-16-596135ce8f63423ca3dbcc6fac336e2c.pdf"}}}')},212:function(e){e.exports=JSON.parse('{"data":{"file":{"publicURL":"/public/static/RoboCon-Presentation_2019-01-17-b520942b5365fff6f1785ca30d4aa282.pdf"}}}')},213:function(e,t,r){"use strict";r(78),r(79),r(133),r(22),r(17),r(14),r(24),r(41);var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var i,s,l,u=n(t),c=n(r);if(u&&c){if((s=t.length)!=r.length)return!1;for(i=s;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(u!=c)return!1;var d=t instanceof Date,f=r instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==r.getTime();var p=t instanceof RegExp,m=r instanceof RegExp;if(p!=m)return!1;if(p&&m)return t.toString()==r.toString();var y=a(t);if((s=y.length)!==a(r).length)return!1;for(i=s;0!=i--;)if(!o.call(r,y[i]))return!1;for(i=s;0!=i--;)if(!e(t[l=y[i]],r[l]))return!1;return!0}return t!=t&&r!=r}},214:function(e,t,r){"use strict";r(100),r(14),r(77),r(58),r(57),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=s(r(215)),o=s(r(216)),i=s(r(218));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,a.default)();if(l||(l=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var a=new n.Player(e,t);return s.on("ready",(function(){r(a)})),null}))})),c=i.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},215:function(e,t,r){"use strict";var n;r(50),r(21),n=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(r)},e},e.exports=n},216:function(e,t,r){"use strict";r(100),r(14),r(57),Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(217),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,o.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},217:function(e,t){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(a=t,t={}),t=t||{},a=a||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?r:n)(i,a),i.onload||r(i,a),o.appendChild(i)}},218:function(e,t,r){"use strict";r(100),r(14),r(21),r(41),r(77),r(58),r(22),r(57),Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(219)),a=s(r(223)),o=s(r(224)),i=s(r(225));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,a=!1,i=void 0;try{for(var s,u=o.default[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){r(s.value)}}catch(c){a=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){var t=i.default[n],a=e.getPlayerState(),o=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var a=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())}))})).then((function(){return o})):o}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then((function(e){return e[n].apply(e,r)}))}},o=!0,s=!1,l=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value;n(d)}}catch(f){s=!0,l=f}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}return r}};t.default=u,e.exports=t.default},219:function(e,t,r){(function(n){function a(){var e;try{e=t.storage.debug}catch(r){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}r(23),r(133),r(138),(t=e.exports=r(221)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,r(220))},220:function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,u=[],c=!1,d=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):d=-1,u.length&&p())}function p(){if(!c){var e=s(f);c=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||c||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},221:function(e,t,r){var n;function a(e){function r(){if(r.enabled){var e=r,a=+new Date,o=a-(n||a);e.diff=o,e.prev=n,e.curr=a,n=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var a=t.formatters[n];if("function"==typeof a){var o=i[l];r=a.call(e,o),i.splice(l,1),l--}return r})),t.formatArgs.call(e,i),(r.log||t.log||console.log.bind(console)).apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}r(133),r(49),r(61),r(23),(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(222),t.names=[],t.skips=[],t.formatters={}},222:function(e,t){var r=1e3,n=60*r,a=60*n,o=24*a,i=365.25*o;function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?s(l=e,o,"day")||s(l,a,"hour")||s(l,n,"minute")||s(l,r,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},223:function(e,t,r){"use strict";r(57),Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},224:function(e,t,r){"use strict";r(57),Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},225:function(e,t,r){"use strict";r(57),Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(226),o=(n=a)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},226:function(e,t,r){"use strict";r(57),Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-d6accfd1494b2504c5d5.js.map