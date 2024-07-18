if (self.CavalryLogger) { CavalryLogger.start_js(["UNec\/"]); }

__d("XBasicFBNuxDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/megaphone/dismiss_fbnux/",{nux_id:{type:"Int",required:!0}})}),null);
__d("XBasicFBNuxViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/megaphone/view_fbnux/",{nux_id:{type:"Int",required:!0}})}),null);
__d("BasicFBNux",["AsyncRequest","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f){var g={subscribeHide:function(a,b){a.subscribe("hide",g.onDismiss.bind(this,b))},onView:function(a){a=b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()},onDismiss:function(a){a=b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=g}),null);
__d("FullScreen",["ArbiterMixin","CSS","Event","Keys","UserAgent","UserAgent_DEPRECATED","mixin","throttle"],(function(a,b,c,d,e,f){var g={},h=!1,i=function(a){b("Event").getKeyCode(a)===b("Keys").ESC&&a.stopPropagation()},j=function(){h||(document.addEventListener("keydown",i,!0),h=!0)},k=function(){h&&(document.removeEventListener("keydown",i,!0),h=!1)};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.listenForEvent=function(a){var c=b("throttle")(this.onChange,0,this);g[a.id]||(g[a.id]=!0,b("Event").listen(a,{webkitfullscreenchange:c,mozfullscreenchange:c,MSFullscreenChange:c,fullscreenchange:c}))};d.enableFullScreen=function(a){this.listenForEvent(a);if(a.webkitRequestFullScreen)b("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)j(),a.msRequestFullscreen();else if(a.requestFullScreen)a.requestFullScreen();else return!1;return!0};d.disableFullScreen=function(){if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.exitFullScreen)document.exitFullScreen();else return!1;return!0};d.isFullScreen=function(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement};d.toggleFullScreen=function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)};d.onChange=function(){var a=this.isFullScreen();b("CSS").conditionClass(document.body,"fullScreen",a);this.inform("changed");a||k()};d.isSupportedWithKeyboardInput=function(){return this.isSupported()&&!b("UserAgent").isBrowser("Safari")};d.isSupported=function(){var a=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return a||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen};return c}(b("mixin")(b("ArbiterMixin")));c=new a();d=b("throttle")(c.onChange,0,c);b("Event").listen(document,{webkitfullscreenchange:d,mozfullscreenchange:d,MSFullscreenChange:d,fullscreenchange:d});e.exports=c}),null);
__d("getFullScreenElement",[],(function(a,b,c,d,e,f){function a(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}e.exports=a}),null);
__d("VideoPermalinkURI",[],(function(a,b,c,d,e,f){var g={isValid:function(a){return g.parse(a)!==null},parse:function(a){if(this.isValidLegacy(a)){var b=a.getQueryData();return b.v?{video_id:b.v,set_token:b.set}:null}b=a.getPath();b[b.length-1]==="/"&&(b=b.substring(0,b.length-1));a=b.split("/");if(a.length>=3&&a[2]==="videos")if(a.length===4&&this.isNumeric(a[3]))return{video_id:a[3],set_token:null};else if(a.length===5){if(this.isNumeric(a[4]))return{video_id:a[4],set_token:a[3]};else if(this.isNumeric(a[3]))return{video_id:a[3],story_id:a[4]}}else if(a.length===6&&this.isNumeric(a[4]))return{video_id:a[4],set_token:a[3],story_id:a[5]};return null},isNumeric:function(a){return/^\d+$/.exec(a)!==null},isValidLegacy:function(a){a=a.getPath();a[a.length-1]==="/"&&(a=a.substring(0,a.length-1));return a==="/photo.php"||a==="/force_photo/photo.php"||a==="/photo"||a==="/force_photo/photo/index.php"||a==="/photo/index.php"||a==="/force_photo/photo"||a==="/video.php"||a==="/video/video.php"?!0:!1},getCustomStoryURI:function(a,b){return a+b+"/"}};e.exports=g}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){a=b("throttle")(function(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("VideoFeedFastPreloadController",["DOMQuery","Run"],(function(a,b,c,d,e,f){var g=0,h={preload:function(c){g<2&&(c=b("DOMQuery").scry(c,"video")[0],c instanceof a.HTMLVideoElement&&(g||b("Run").onBeforeUnload(function(){return h.reset()}),c.preload="auto",g+=1))},reset:function(){g=0}};h.reset();e.exports=h}),null);
__d("MaybeNativePromise",["Promise"],(function(a,b,c,d,e,f){"use strict";c=a.Promise||b("Promise");b("Promise").resolve();e.exports=c}),null);
__d("VideoAkamaiRequestHelper",["URI"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){return a.toLowerCase().indexOf("akamai")!==-1}function h(a){var b=a.startByte;a=a.endByte;if(b!=void 0&&!(b===0&&a==void 0)){b="bytes="+b+"-"+(a==void 0?"":a);return{Range:b}}return null}function c(a){var c=new(g||(g=b("URI")))(a);c=c.getQueryData();var d=c.startByte;c=c.endByte;return h({baseUrl:a,startByte:d,endByte:c})}e.exports={isAkamai:a,getRequestHeaders:h,getRequestHeadersFromUrl:c}}),null);
__d("VideoPlayerShakaExperimentsConfig",["VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){"use strict";e.exports=b("VideoPlayerShakaExperimentsPayload").experiments}),null);
__d("VideoPlayerShakaExposureLogger",["QE2Logger","VideoPlayerShakaExperimentsPayload"],(function(a,b,c,d,e,f){var g=Object.keys(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig).reduce(function(a,c){a[c]={};a[c].exposureCondition=b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_condition;a[c].exposureParams=new Set(b("VideoPlayerShakaExperimentsPayload").universeToExposureConfig[c].exposure_params);return a},{});a={logExposureForParamMaybe:function(a){Object.keys(g).forEach(function(c){g[c].exposureCondition==="any_param_accessed"&&g[c].exposureParams.has(a)?(b("QE2Logger").logExposureForUser(c),delete g[c]):g[c].exposureCondition==="all_params_accessed"&&(g[c].exposureParams["delete"](a),g[c].exposureParams.size===0&&(b("QE2Logger").logExposureForUser(c),delete g[c]))})}};e.exports=a}),null);
__d("VideoPlayerShakaParsedContextualConfig",["EventEmitter","FBLogger","VideoPlayerShakaContextualConfig"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoPlayerShakaParsedContextualConfig1=null;b.$VideoPlayerShakaParsedContextualConfig2={};b.parseConfig();return b}var d=c.prototype;d.getGlobalConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig2};d.getStaticConfig=function(){return b("VideoPlayerShakaContextualConfig").staticConfig};d.getRawContextualConfig=function(){return this.$VideoPlayerShakaParsedContextualConfig1};d.parseConfig=function(){this.$VideoPlayerShakaParsedContextualConfig3(),this.$VideoPlayerShakaParsedContextualConfig4(),this.emit("configChange")};d.$VideoPlayerShakaParsedContextualConfig3=function(){if(!b("VideoPlayerShakaContextualConfig").rawContextualConfig)return;try{this.$VideoPlayerShakaParsedContextualConfig1=JSON.parse(b("VideoPlayerShakaContextualConfig").rawContextualConfig)}catch(a){b("FBLogger")("VideoPlayerShakaParsedContextualConfig").warn("Failed to parse raw config")}};d.$VideoPlayerShakaParsedContextualConfig4=function(){var a=this;this.$VideoPlayerShakaParsedContextualConfig2=Object.assign({},b("VideoPlayerShakaContextualConfig").staticConfig);this.$VideoPlayerShakaParsedContextualConfig1&&this.$VideoPlayerShakaParsedContextualConfig1.defaults.forEach(function(b){return a.$VideoPlayerShakaParsedContextualConfig2[b.name]=b.value})};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("VideoPlayerShakaGlobalConfig",["VideoPlayerShakaExperimentsConfig","VideoPlayerShakaExposureLogger","VideoPlayerShakaParsedContextualConfig"],(function(a,b,c,d,e,f){a={getBool:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?d[a]==="true"||d[a]===!0:typeof b("VideoPlayerShakaExperimentsConfig")[a]==="boolean"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getNumber:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?Number(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="number"?b("VideoPlayerShakaExperimentsConfig")[a]:c},getString:function(a,c){b("VideoPlayerShakaExposureLogger").logExposureForParamMaybe(a);var d=b("VideoPlayerShakaParsedContextualConfig").getGlobalConfig();return d&&d[a]!==void 0?String(d[a]):typeof b("VideoPlayerShakaExperimentsConfig")[a]==="string"?b("VideoPlayerShakaExperimentsConfig")[a]:c}};e.exports=a}),null);
__d("parseHeaders",[],(function(a,b,c,d,e,f){var g=/\r?\n[\t]+/g,h=/\r?\n/;function a(a){a=a.replace(g," ");var b={};a.split(h).forEach(function(a){a=a.split(":");var c=a.shift().trim();if(c){a=a.join(":").trim();b[c.toLowerCase()]=a}});return b}e.exports=a}),null);
__d("VideoPlayerShakaError",["VideoPlayerShakaGlobalConfig","parseHeaders"],(function(a,b,c,d,e,f){"use strict";a={translateError:function(a,c,d){var e=b("VideoPlayerShakaGlobalConfig").getBool("fix_shaka_xhr_error_status",!0)?a.errorRawTransportStatus:a.errorCode,f=null;b("VideoPlayerShakaGlobalConfig").getBool("enable_double_ingest",!1)&&a.errorRawResponseHeaders!=null&&(f=b("parseHeaders")(a.errorRawResponseHeaders));a={name:a.errorType,message:a.errorMsg,type:d,url:c,status:e,responseHeaders:f};return a},createTimeoutError:function(a){a={name:"timeout",message:"timeout",type:"net",url:a,status:0,responseHeaders:null};return a}};e.exports=a}),null);
__d("VideoDashPrefetchCache",["regeneratorRuntime","Promise","requireCond","BanzaiODS","Deferred","MaybeNativePromise","cr:1209197","cr:1209198","URI","VideoAkamaiRequestHelper","VideoPlayerPrefetchExperiments","VideoPlayerShakaError","VideoPlayerShakaGlobalConfig","XHRRequest","getCrossOriginTransport","recoverableViolation","requireWeak"],(function(a,b,c,d,e,f){var g,h=function(a){b("cr:1209197")!=null?b("cr:1209197").onLeave(a):b("cr:1209198")!=null?b("cr:1209198").onUnload(a):b("recoverableViolation")("Dash prefetch cache onNavigatingAway handler was not properly set","video")},i=null;b("requireWeak")("VideoPlayerShakaBandwidthEstimator",function(a){return i=a});var j=null;b("requireWeak")("VideoStreamingTaskQueueProvider",function(a){return j=a});function k(a){return a.audio.length+a.video.length+a.manifest.length}function l(a,c){b("BanzaiODS").bumpEntityKey(2966,"www_video_playback","prefetch."+a,c)}function m(a){var b="aborted",c={status:0},d=new Error("Prefetch request aborted.");return Object.assign(d,{type:b,url:a,xhr:c})}function n(a){var c=a.getURI(),d=c.toString();if(b("VideoAkamaiRequestHelper").isAkamai(d)){var e=b("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(d);d=c.removeQueryData(["bytestart","byteend"]);a.setURI(d);e&&Object.keys(e).forEach(function(b){a.setRequestHeader(b,e[b])})}return a}var o=null,p=new Map();function q(a){a=new(g||(g=b("URI")))(a);a=a.getDomain();return a.endsWith("fbcdn.net")&&!a.startsWith("interncache")&&!a.endsWith("ak.fbcdn.net")}function r(a,c){c===void 0&&(c=!1);return c&&q(a)?b("getCrossOriginTransport").withCredentials:b("getCrossOriginTransport")}function s(a){return q(a.url)}function t(a,b,c){return{response:a.slice(b.start+0,b.end+1),responseTime:c}}function u(a){var c=new(g||(g=b("URI")))(a);if(c.getDomain()){c=c.removeQueryData(["oh"]);c=c.removeQueryData("__gda__");var d=Object.keys(c.getQueryData());for(var e=0;e<d.length;e++){var f=d[e];f.startsWith("_nc")&&(c=c.removeQueryData(f))}return c.toString()}return a}a=function(){"use strict";function a(){this.$2=new Map(),this.$9=new Map(),this.$1=new Map(),this.$3=[],this.$4=[],this.$5=0,this.$6=b("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum,this.$7=b("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest}var c=a.prototype;c.$10=function(a,c){var d=this;c===void 0&&(c=!1);var e=a,f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(e,c));n(f);var g=new(b("MaybeNativePromise"))(function(c,h){f.setErrorHandler(function(a){d.$11(f),h(b("VideoPlayerShakaError").translateError(a,e,"preload"))}),f.setResponseHandler(function(a){a=a;var b=f;b.response=a;d.$11(f);c(b)}),f.setAbortHandler(function(){if(b("VideoPlayerPrefetchExperiments").fixPrefetchCacheAbort){d.$11(f);var c=m(a);h(c)}else h(g,new Error("Request promise aborted"))})});this.$12(a,g);this.$3.push(f);this.$8?this.$8.push(f):f.send();return g};c.genPrefetchMpdNow=function(a){return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:if(!this.has(a)){b.next=2;break}return b.abrupt("return",null);case 2:return b.abrupt("return",this.$10(a));case 3:case"end":return b.stop()}},null,this)};c.$13=function(b,c,d){c===void 0&&(c=!1);d===void 0&&(d=null);var e=[];for(var f=0;f<b.length;f++){var g=a.createQueryStringURL(b[f]);this.has(g)||(e.push(this.$10(g,c).then(function(a){l("received",1);return a})),d!=null&&this.$2.set(g,d))}l("sent",e.length);return e};c.$14=function(c){var d=this,e=a.getConsolidatedURL(c);if(e==null)return this.$13(c);var f=new(b("XHRRequest"))(e).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(e));n(f);var g=Date.now(),h=[];for(var i=0;i<c.length;i++){var j=a.createQueryStringURL(c[i]),k=new(b("Deferred"))();this.has(j)||this.$12(j,k.getPromise());h.push(k)}f.setErrorHandler(function(c){d.$11(f);for(var a=0;a<h.length;a++)h[a].reject(b("VideoPlayerShakaError").translateError(c,e,"preload"))});f.setResponseHandler(function(b){b=b;var e=Date.now()-g;for(var a=0;a<c.length;a++){var i=h[a],j=c[a];i.resolve(t(b,j,e))}d.$11(f)});f.setAbortHandler(function(){for(var a=0;a<c.length;a++){var b=h[a];b.reject(new Error("Request aborted."))}});this.$3.push(f);f.send();l("consolidated.sent",1);l("sent",h.length);j=h.map(function(a){return a.getPromise().then(function(a){l("received",1);return a})});b("Promise").all(j).then(function(){return l("consolidated.received",1)});return j};c.$15=function(a){var c=this,d=a.useCredentials,e=a.connectionQualityLevel;this.$5++;var f=this.$7&&!d;b("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch&&(this.$8=[]);var g=f?this.$14(a.video):this.$13(a.video,d,e);f=f?this.$14(a.audio):this.$13(a.audio,d,e);e=this.$13(a.manifest,d);var h=g.concat(f,e);if(this.$8){var i=this.$8||[];this.$8=null;var k=""+a.videoID;d={name:"prefetch task, "+k,run:function(){k&&p["delete"](k);i.forEach(function(a){return a.send()});return b("MaybeNativePromise").all(h).then(function(){})["catch"](function(){})},cancel:function(){}};j?(b("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed&&k&&p.set(k,d),j.getQueue("video").enqueue(d,b("VideoPlayerPrefetchExperiments").prefetchPriority),this.$16()):(d.run(),b("MaybeNativePromise").all(h).then(function(){return c.$16()})["catch"](function(){return c.$16()}))}else b("MaybeNativePromise").all(h).then(function(){return c.$16()})["catch"](function(){return c.$16()})};c.$12=function(a,b){var c=this;a=u(a);this.$1.values().next().done&&h(function(){for(var a=0;a<c.$3.length;a++)c.$3[a].abort();c.$3=[];c.$4=[];c.$5=0;c.$1.clear()});this.$1.set(a,b)};c.$11=function(a){a=this.$3.indexOf(a);a>-1&&this.$3.splice(a,1)};c.$16=function(){this.$5--;var a=this.$4.shift();a&&this.$15(a)};c.has=function(a){a=u(a);return this.$1.has(a)};c.getConnectionQualityLevel=function(a){return this.$2.get(a)};c.getAndDelete=function(a){a=u(a);var b=this.$1.get(a);b?l("cache.hit",1):l("cache.miss",1);this.$1["delete"](a);l("retrieve",1);return b};c.queueRequestBatch=function(a){this.$6===0||this.$5<this.$6?this.$15(a):(l("queued",k(a)),this.$4.push(a))};c.setCachedRepresentations=function(a,b){this.$9.set(a,b)};c.getCachedRepresentations=function(a){return this.$9.get(a)};a.getCachedRepresentations=function(b){return a.getInstance().getCachedRepresentations(b)};a.getInstance=function(){o===null&&(o=new a());return o};a.createQueryStringURL=function(a){var c=a.url,d=a.start;a=a.end;d!==null&&d!==void 0&&a!==null&&a!==void 0&&(c=new(g||(g=b("URI")))(c).addQueryData({bytestart:d,byteend:a}));return c.toString()};a.getConsolidatedURL=function(b){var c="",d=Infinity,e=0;for(var f=0;f<b.length;f++){var g=b[f],h=g.url,i=g.start;g=g.end;if(h==null||i==null||g==null)return null;if(c==="")c=h;else if(c!==h)return null;d=Math.min(d,i);e=Math.max(e,g)}return a.createQueryStringURL({url:c,start:d,end:e})};a.getPrefetchInfoFromRepresentation=function(a){return a.segments.map(function(b){return{url:a.url,start:b.start,end:b.end}})};a.getVideoRepresentationFromRepresentations=function(a,c){var d=a.find(function(a){return a.representation_id.endsWith("d")});!c&&i&&(c=i.getBandwidth());if(!c)return d;var e=b("VideoPlayerShakaGlobalConfig").getNumber("client_prefetch_bandwidth_aggressiveness",1);for(var f=0;f<a.length;f++){var g=a[f],h=d&&d.bandwidth||0;if(h>g.bandwidth)continue;else c>g.bandwidth/e&&(d=g)}return d};a.loadVideoGivenAllRepresentations=function(b,c,d){if(a.isAutoplayBandwidthRestrained())return;var e=[],f=[];c.audio.length>0&&(e=a.getPrefetchInfoFromRepresentation(c.audio[0]),e.length>0&&f.push(c.audio[0].representation_id));var g=[];c=a.getVideoRepresentationFromRepresentations(c.video,d);c&&(g=a.getPrefetchInfoFromRepresentation(c),g.length>0&&f.push(c.representation_id));d=a.getInstance();d.queueRequestBatch({audio:e,video:g,manifest:[],videoID:b,useCredentials:!1});d.setCachedRepresentations(b,f)};a.isAutoplayBandwidthRestrained=function(){return!!i&&i.isAutoplayBandwidthRestrained()};a.loadVideo=function(c,d,e){d=!!d;if(a.isAutoplayBandwidthRestrained())return;if(b("VideoPlayerPrefetchExperiments").disablePrefetchCache)return;var f=a.getInstance();c.manifest||(c.manifest=[]);f.queueRequestBatch({manifest:c.manifest.filter(s),video:c.video.filter(s),audio:c.audio.filter(s),videoID:c.videoID,useCredentials:d,connectionQualityLevel:e})};a.getCacheValue=function(b){return a.getInstance().getAndDelete(b)};a.getConnectionQualityLevel=function(b){return a.getInstance().getConnectionQualityLevel(b)};a.hasCacheValue=function(b){return a.getInstance().has(b)};a.getPrefetchTaskByID=function(a){a=p.get(a)||null;return a};return a}();e.exports=a}),null);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(function(a,b,c,d,e,f){"use strict";var g={},h="_spinner";a={getClicked:function(a){return b("DataStore").get(a,"clicked",!1)},register:function(a,c){var d=a.id;g[d]=b("Event").listen(a,"click",function(){c&&(b("CSS").hide(a),b("CSS").show(c)),b("DataStore").set(a,"clicked",!0)});c&&(g[d+h]=b("Event").listen(c,"click",function(){c&&b("CSS").hide(c),b("CSS").show(a),b("DataStore").set(a,"clicked",!1)}))},unregister:function(a){a=a.id;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove();a=a+h;Object.prototype.hasOwnProperty.call(g,a)&&g[a].remove()}};e.exports=a}),null);
__d("VideoPlayerUIComponentDrawer",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.$VideoPlayerUIComponentDrawer1=b;d.$VideoPlayerUIComponentDrawer2=c;d.$VideoPlayerUIComponentDrawer4=!1;return d}var c=b.prototype;c.reserve=function(){if(this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!0;this.emit("reserve")};c.release=function(){if(!this.$VideoPlayerUIComponentDrawer4)return;this.$VideoPlayerUIComponentDrawer4=!1;this.emit("release")};c.getPriority=function(){return this.$VideoPlayerUIComponentDrawer1};c.getHeight=function(){return this.$VideoPlayerUIComponentDrawer2};c.setHeight=function(a){this.$VideoPlayerUIComponentDrawer2=a,this.emit("heightChange")};c.emit=function(b){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];b==="reposition"&&(this.$VideoPlayerUIComponentDrawer3=e[0]);(c=a.prototype.emit).call.apply(c,[this,b].concat(e))};c.reposition=function(){this.emit("reposition",this.$VideoPlayerUIComponentDrawer3)};c.isReserved=function(){return this.$VideoPlayerUIComponentDrawer4};return b}(b("EventEmitter"));a.priorities={EmbeddedControls:0,AdBreakStartingIndicator:1,ClickForMore:2,PollCard:5,GameshowCard:6,Subtitles:3,SphericalMouseAnimation:4};e.exports=a}),null);
__d("VideoPlayerVolumeSettings",["WebStorage"],(function(a,b,c,d,e,f){var g;a=function(){"use strict";function a(){this.$1=1,this.$2=1}var c=a.prototype;c.getVolume=function(){var a=(g||(g=b("WebStorage"))).getLocalStorage();if(a){a=a.getItem("videoPlayerControllerVolume");return a===null||isNaN(+a)?1:+a}return this.$1};c.getSessionVolume=function(){return this.$1};c.setSessionVolume=function(a){this.$1=a};c.saveVolume=function(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();c&&c.setItem("videoPlayerControllerVolume",a);this.$1=a};c.getLastVolumeBeforeMute=function(){var a=(g||(g=b("WebStorage"))).getLocalStorage();if(a){a=a.getItem("videoPlayerControllerLastVolumeBeforeMute");return a===null||isNaN(+a)?1:+a}return this.$2};c.saveLastVolumeBeforeMute=function(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();c&&c.setItem("videoPlayerControllerLastVolumeBeforeMute",a);this.$2=a};return a}();c=new a();e.exports=c}),null);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(function(a,b,c,d,e,f){var g,h={storeRenderTime:function(a){var c=b("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers?(g||(g=b("performanceAbsoluteNow")))():Date.now();b("DataStore").set(a,"videos_rendering_instrumentation",c);return c},retrieveRenderTime:function(a){var c=b("DataStore").get(a,"videos_rendering_instrumentation",NaN);Number.isNaN(c)&&(c=h.storeRenderTime(a));return c}};e.exports=h}),null);
__d("logVideosClickTracking",["clickRefAction"],(function(a,b,c,d,e,f){function a(a){b("clickRefAction")("click",a,null,"FORCE")}e.exports=a}),null);
__d("HTMLMediaElementReadyStates",[],(function(a,b,c,d,e,f){a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4};e.exports=a}),null);
__d("VideoFrameBuffer",["HTMLMediaElementReadyStates"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,b,c,d,e,f,g){d===void 0&&(d=null),e===void 0&&(e=null),f===void 0&&(f=null),g===void 0&&(g=null),this.$2=b,this.$1=a,this.$3=c||"contain",this.$6=d,this.$7=e,this.$8=f,this.$9=g}var c=a.prototype;c.updateFrameBuffer=function(){this.$4&&(this.$1.width=this.$4,this.$4=null);this.$5&&(this.$1.height=this.$5,this.$5=null);if(this.$2.readyState<b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)return;var a=this.$1.clientWidth||this.$1.width,c=this.$1.clientHeight||this.$1.height,d=a,e=c,f=this.$2.videoWidth/this.$2.videoHeight,g=d/e;this.$3==="cover"&&(g*=-1,f*=-1);g>f?d=e*f:g<f&&(e=d/f);g=this.$1.getContext("2d");if(!(g instanceof window.CanvasRenderingContext2D))return;try{if(this.$6||this.$7){g.drawImage(this.$2,(f=this.$8)!=null?f:0,(f=this.$9)!=null?f:0,(f=this.$6)!=null?f:a,(f=this.$7)!=null?f:c,0,0,a,c)}else g.drawImage(this.$2,(a-d)/2,(c-e)/2,d,e)}catch(a){if(a.name!=="NS_ERROR_NOT_AVAILABLE")throw a}};c.getDOMNode=function(){return this.$1};c.updateDimensions=function(a,b){this.$4=a,this.$5=b};return a}();e.exports=a}),null);
__d("XUIGrayText.react",["cx","React","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.shade;a=babelHelpers.objectWithoutPropertiesLoose(a,["shade"]);c=(c==="light"?"_50f8":"")+(c==="medium"?" _c24":"")+(c==="dark"?" _50f9":"");return h.jsx(b("XUIText.react"),babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,c),children:this.props.children}))};return c}(h.Component);a.propTypes={shade:b("prop-types").oneOf(["light","medium","dark"])};a.defaultProps={shade:"light"};e.exports=a}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){var g={isSupported:function(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")},copy:function(a,c){c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d},copyAsync:function(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g.copy(a)?b("Promise").resolve():b("Promise").reject()}};e.exports=g}),null);
__d("cancelAnimationFramePolyfill",[],(function(a,b,c,d,e,f){b=a.__fbNativeCancelAnimationFrame||a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=b}),null);
__d("cancelAnimationFrame",["TimerStorage","TimeSlice","cancelAnimationFramePolyfill","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f){var g=b("TimerStorage").ANIMATION_FRAME;function a(a){if(a!=null){var c=b("requestAnimationFrameAcrossTransitions").cancelVirtualRAF;if(c!=null)c(a);else{b("TimerStorage").unset(g,a);c=g+String(a);b("TimeSlice").cancelWithToken(c)}}b("cancelAnimationFramePolyfill")(a)}e.exports=a}),null);