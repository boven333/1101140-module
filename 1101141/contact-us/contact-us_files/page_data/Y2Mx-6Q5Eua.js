if (self.CavalryLogger) { CavalryLogger.start_js(["F2Wh8"]); }

__d("ClickableAreaButton.react",["cx","invariant","Focus","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.$1&&b("Focus").relocate(b("ReactDOM").findDOMNode(this.$1),b("ReactDOM").findDOMNode(this))};d.focus=function(){b("Focus").set(this.$1)};d.render=function(){var a=this,b=this.props,c=b.children,d=b.disabled,e=b.label,f=b.onClick,g=b.onMouseDown,j=b.onMouseEnter,k=b.onMouseMove,l=b.onMouseOut,m=b.onMouseLeave,n=b.pressed;b=b.tabIndex;c=i.Children.only(c);c.props.onClick&&h(0,2794);n=f?i.jsx("button",{"aria-pressed":n,className:"accessible_elem",disabled:d,label:e,tabIndex:b,ref:function(b){return a.$1=b},children:e},"accessible_button"):null;return i.cloneElement(c,{onClick:d?null:f,onMouseDown:g,onMouseEnter:j,onMouseMove:k,onMouseOut:l,onMouseLeave:m},[c.props.children,n])};return c}(i.Component);e.exports=a}),null);
__d("FlexboxStyles",[],(function(a,b,c,d,e,f){"use strict";a={alignItems:!0,flexDirection:!0,justifyContent:!0};e.exports=a}),null);
__d("LayoutStyles",["FlexboxStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("FlexboxStyles"),{borderBottomWidth:!0,borderLeftWidth:!0,borderRightWidth:!0,borderTopWidth:!0,borderWidth:!0,bottom:!0,height:!0,left:!0,margin:!0,marginBottom:!0,marginLeft:!0,marginRight:!0,marginTop:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,opacity:!0,overflow:!0,padding:!0,paddingBottom:!0,paddingLeft:!0,paddingRight:!0,paddingTop:!0,position:!0,top:!0,transform:!0,transformOrigin:!0,width:!0});e.exports=a}),null);
__d("ImageStyles",["LayoutStyles"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("LayoutStyles"),{backgroundColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderColor:!0,borderRadius:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderWidth:!0,height:!0,opacity:!0,overflow:!0,width:!0});e.exports=a}),null);
__d("flattenStyle",["mapObject"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){if(!a)return null;if(!Array.isArray(a))return(g||(g=b("mapObject"))).untyped(a,function(b,a){return i(b,a)});var c={};for(var d=0,e=a.length;d<e;++d){var f=h(a[d]);if(f)for(var j in f)c[j]=f[j]}return c}function i(a,b){return b==="lineHeight"&&typeof a==="number"?a+"px":a}e.exports=h}),null);
__d("getValidatedStyle",["filterObject","flattenStyle"],(function(a,b,c,d,e,f){"use strict";var g={textDecorationLine:"textDecoration"};function a(a,c){if(!a)return null;a=b("flattenStyle")(a);return h(b("filterObject")(a,function(a,b){return!!c[b]}),g)}function h(a,b){var c=babelHelpers["extends"]({},a);Object.keys(b).forEach(function(a){if(Object.prototype.hasOwnProperty.call(c,a)){var d=b[a];c[d]=c[a];delete c[a]}});return c}e.exports=a}),null);
__d("pluckClassNames",[],(function(a,b,c,d,e,f){"use strict";function g(a){var b=[],c=[];Array.isArray(a)?a.forEach(function(a){a=g(a);var d=a.classNames;a=a.styles;b=b.concat(d);c=c.concat(a)}):typeof a==="string"?b.push(a):c.push(a);return{classNames:b,styles:c}}e.exports=g}),null);
__d("Image",["cx","CssBackgroundImage.react","Image.react","ImageStyles","React","getValidatedStyle","joinClasses","pluckClassNames"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i={cover:"cover",contain:"contain",stretch:"fill",center:"none"},j={cover:"cover",contain:"contain",stretch:"100% 100%",center:"auto"},k=function(c){babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){var a=this.props,c=a.source,d=a.style,e=a.resizeMode;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style","resizeMode"]);d=b("pluckClassNames")(d);var f=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));var g=e&&j[e]||"cover";e=e&&i[e]||"cover";var k=c.scale!=null?Math.max(c.scale,1):1;return h.jsxs("div",babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(f)),src:c,style:d},a,{children:[h.jsx(b("CssBackgroundImage.react"),{className:b("joinClasses")("_b5a _6jm9"),imageURI:c.uri,backgroundPosition:"center center",style:{backgroundSize:g,transform:"scale("+k+", "+k+")"}}),h.jsx(b("Image.react"),{className:b("joinClasses")("_b5a _6jma"),src:c,style:{transform:"scale("+k+", "+k+")",objectFit:e}})]}))};return a}(h.PureComponent);k.defaultProps={resizeMode:"cover"};function a(a){var c=a.source,d=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["source","style"]);if(typeof c==="object"&&c.uri&&c.sprited===void 0)return h.jsx(k,babelHelpers["extends"]({source:c,style:d},a));d=b("pluckClassNames")(d);var e=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ImageStyles"));return h.jsx(b("Image.react"),babelHelpers["extends"]({className:b("joinClasses").apply(void 0,["_b5a"].concat(e)),src:c,style:d},a))}e.exports=a}),null);
__d("EmbeddedVideoCopyLinkButton.react",["ix","cx","fbt","ClickableAreaButton.react","Clipboard","Image","React","asset","setTimeout"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");c=b("React");var k=c.useState,l=3e3;function a(a){var c=a.videoURL;a=k(!1);var d=a[0],e=a[1];a=function(){var a=b("Clipboard").copy(c);e(a);b("setTimeout")(function(){return e(!1)},l)};return j.jsx("div",{children:j.jsx(b("ClickableAreaButton.react"),{onClick:a,label:i._("\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d"),children:j.jsxs("div",{className:"_8z55",children:[d?j.jsx(b("Image"),{source:g("1265630")}):j.jsx(b("Image"),{source:g("1265095")}),j.jsx("div",{className:"_8z4-",children:d?i._("\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e41\u0e25\u0e49\u0e27"):i._("\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e25\u0e34\u0e07\u0e01\u0e4c")})]})})})}e.exports=a}),null);
__d("EmbeddedVideoPlaybackOverlay.react",["cx","DOMContainer.react","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useEffect,j=c.useState;function a(a){var c=a.rolloverOverlay,d=a.pauseOverlay,e=a.endOverlay,f=a.vpc;a=j(!1);var g=a[0],k=a[1];a=j("unknown");var l=a[0],m=a[1];a=h.jsx(b("DOMContainer.react"),{children:c});c=h.jsx(b("DOMContainer.react"),{children:d});d=h.jsx(b("DOMContainer.react"),{children:e});i(function(){var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(f.addListener("stateChange",function(){m(f.getState())}),f.addListener("beginPlayback",function(){var a=f.getOption("VideoControls","areControlsVisible");k(!a)}),f.addListener("VideoControls/visibilityUpdate",function(a){a=a.areControlsVisible;return k(!a)}));return function(){a.release()}});e=null;switch(l){case"paused":e=c;break;case"finished":e=d;break;case"loading":case"ready":case"playing":e=a;break;default:break}return!f||!e||l==="destroyed"?null:h.jsx("div",{className:(g?"_8z69":"")+(g?"":" _8z6a"),children:e})}e.exports=a}),null);