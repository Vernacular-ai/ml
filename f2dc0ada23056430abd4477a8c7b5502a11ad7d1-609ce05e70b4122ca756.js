(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},C8Qj:function(e,t,r){"use strict";r("t+fG")("small",(function(e){return function(){return e(this,"small","","")}}))},Emh6:function(e,t,r){"use strict";r("t+fG")("sup",(function(e){return function(){return e(this,"sup","","")}}))},EtCU:function(e,t,r){"use strict";var n=r("cMlJ");t.a=function(){return n.data.site.siteMetadata}},GIzu:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz"),c=r("EtCU"),l=function(e){var t=e.title,r=e.description,n=e.pathname,l=e.image,s=e.children,u=Object(c.a)(),f=u.siteTitle,p=u.siteTitleAlt,d=u.siteUrl,b=u.siteDescription,g=u.siteLanguage,h=u.siteImage,m=u.author,y={title:t||p,description:r||b,url:""+d+(n||""),image:""+d+(l||h)};return a.a.createElement(o.a,{title:t,defaultTitle:p,titleTemplate:"%s | "+f},a.a.createElement("html",{lang:g}),a.a.createElement("meta",{name:"description",content:y.description}),a.a.createElement("meta",{name:"image",content:y.image}),a.a.createElement("meta",{property:"og:title",content:y.title}),a.a.createElement("meta",{property:"og:url",content:y.url}),a.a.createElement("meta",{property:"og:description",content:y.description}),a.a.createElement("meta",{property:"og:image",content:y.image}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:image:alt",content:y.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:title",content:y.title}),a.a.createElement("meta",{name:"twitter:url",content:y.url}),a.a.createElement("meta",{name:"twitter:description",content:y.description}),a.a.createElement("meta",{name:"twitter:image",content:y.image}),a.a.createElement("meta",{name:"twitter:image:alt",content:y.description}),a.a.createElement("meta",{name:"twitter:creator",content:m}),a.a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(i.withPrefix)("/favicon-32x32.png")}),a.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(i.withPrefix)("/favicon-16x16.png")}),a.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(i.withPrefix)("/apple-touch-icon.png")}),s)};t.a=l,l.defaultProps={title:"",description:!1,pathname:!1,image:!1,children:null}},"Ml7+":function(e,t,r){"use strict";r("t+fG")("sub",(function(e){return function(){return e(this,"sub","","")}}))},Q3iF:function(e,t,r){"use strict";r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var n=r("q1tI"),a=r.n(n),o=r("qKvR"),i=r("txSG"),c=(r("c95Q"),r("GIzu")),l=(r("pJf4"),r("Wbzz")),s=r("izhR"),u=r("EtCU"),f=r("dq5L"),p=function(e){var t=e.isDark,r=e.toggle;return Object(i.h)("button",{onClick:r,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},Object(i.h)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},d=r("n/Q7"),b=function(e){var t=e.nav,r=Object(f.a)().basePath;return Object(i.h)(a.a.Fragment,null,t&&t.length>0&&Object(i.h)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return Object(i.h)(i.d.a,{key:e.slug,as:l.Link,activeClassName:"active",to:Object(d.a)("/"+r+"/"+e.slug)},e.title)}))))},g=function(){var e=Object(u.a)().siteTitle,t=Object(f.a)(),r=t.navigation,n=t.externalLinks,a=t.basePath,o=Object(i.i)(),c=o[0],g=o[1],h="dark"===c;return Object(i.h)("header",{sx:{mb:[5,6]}},Object(i.h)(s.b,{sx:{alignItems:"center",justifyContent:"space-between"}},Object(i.h)(l.Link,{to:Object(d.a)("/"+a),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},Object(i.h)("h1",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e)),Object(i.h)(p,{isDark:h,toggle:function(e){e.preventDefault(),g(h?"light":"dark")}})),Object(i.h)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},Object(i.h)(b,{nav:r}),n&&n.length>0&&Object(i.h)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},n.map((function(e){return Object(i.h)(i.d.a,{key:e.url,href:e.url},e.name)})))))},h=function(){var e=Object(u.a)().siteTitle;return Object(i.h)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},Object(i.h)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),Object(i.h)("div",null,Object(i.h)(i.d.a,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",Object(i.h)(i.d.a,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de/en"},"LekoArts")))};r("sC2a"),r("sc67"),r("q8oJ"),r("C9fy"),r("Emh6"),r("Ml7+"),r("C8Qj"),r("HXzo"),r("OeI1"),r("m210"),r("U6Bt"),r("MIFh"),r("Ll4R"),r("HQhv"),r("zGcK"),r("AqHK"),r("klQ5"),r("JHok"),r("v1Bz");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e,t,r){return(O=w()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&v(a,r.prototype),a}).apply(null,arguments)}function x(e){var t="function"==typeof Map?new Map:void 0;return(x=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return O(e,arguments,y(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,e)})(e)}var k=function(e){var t,r;function n(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n}(x(Error));function j(e){return Math.round(255*e)}function T(e,t,r){return j(e)+","+j(t)+","+j(r)}function E(e,t,r,n){if(void 0===n&&(n=T),0===t)return n(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(a%2-1)),c=0,l=0,s=0;a>=0&&a<1?(c=o,l=i):a>=1&&a<2?(c=i,l=o):a>=2&&a<3?(l=o,s=i):a>=3&&a<4?(l=i,s=o):a>=4&&a<5?(c=i,s=o):a>=5&&a<6&&(c=o,s=i);var u=r-o/2;return n(c+u,l+u,s+u)}var S={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var C=/^#[a-fA-F0-9]{6}$/,A=/^#[a-fA-F0-9]{8}$/,I=/^#[a-fA-F0-9]{3}$/,P=/^#[a-fA-F0-9]{4}$/,L=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,M=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,q=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,D=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function R(e){if("string"!=typeof e)throw new k(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return S[t]?"#"+S[t]:e}(e);if(t.match(C))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(A)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(I))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(P)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var a=L.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=M.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var i=q.exec(t);if(i){var c="rgb("+E(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",l=L.exec(c);if(!l)throw new k(4,t,c);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var s=D.exec(t);if(s){var u="rgb("+E(parseInt(""+s[1],10),parseInt(""+s[2],10)/100,parseInt(""+s[3],10)/100)+")",f=L.exec(u);if(!f)throw new k(4,t,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+s[4])}}throw new k(5)}var F=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function z(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function N(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return F("#"+z(e)+z(t)+z(r));if("object"==typeof e&&void 0===t&&void 0===r)return F("#"+z(e.red)+z(e.green)+z(e.blue));throw new k(6)}function _(e,t,r,n){if("string"==typeof e&&"number"==typeof t){var a=R(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?N(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?N(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new k(7)}function H(e){return function e(t,r,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=r?t.apply(this,a):e(t,r,a)}}(e,e.length,[])}function U(e,t,r){if("transparent"===t)return r;if("transparent"===r)return t;if(0===e)return r;var n=R(t),a=m({},n,{alpha:"number"==typeof n.alpha?n.alpha:1}),o=R(r),i=m({},o,{alpha:"number"==typeof o.alpha?o.alpha:1}),c=a.alpha-i.alpha,l=2*parseFloat(e)-1,s=((l*c==-1?l:l+c)/(1+l*c)+1)/2,u=1-s;return _({red:Math.floor(a.red*s+i.red*u),green:Math.floor(a.green*s+i.green*u),blue:Math.floor(a.blue*s+i.blue*u),alpha:a.alpha*(parseFloat(e)/1)+i.alpha*(1-parseFloat(e)/1)})}var G=H(U);function B(e,t){return"transparent"===t?t:G(parseFloat(e),"rgb(255, 255, 255)",t)}var J=H(B);var Q=r("OJSm"),Y=function(e,t){return Object(Q.c)(e,"colors."+t,t).replace(/^var\(--(\w+)(.*?), /,"").replace(/\)/,"")},K=function(e,t){return function(r){return J(t,Y(r,e))}},W={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:K("primary",.7)},".prism-code":{fontSize:1,padding:3,webkitOverflowScrolling:"touch",backgroundColor:"transparent",overflow:"initial",float:"left",minWidth:"100%",mb:0,'&[data-linenumber="false"]':{".token-line":{pl:3}}},".token":{display:"inline-block"},"p > code, li > code":{bg:"rgb(1, 22, 39)",color:"rgb(214, 222, 235)",px:2,py:1},".gatsby-highlight":{fontSize:1,position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",overflow:"auto",mx:[0,0,0,-3],".token-line":{mx:-3},"pre.language-":{mt:0},"pre.language-noLineNumbers":{mt:0},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:K("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}}};r("E5k/");function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},ee=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children"]);return Object(i.h)("a",Object.assign({},r,{sx:Z({},X),href:"#skip-nav","data-skip-link":"true"}),t)};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=function(e){var t=e.children,r=e.className;return a.a.createElement(i.d.root,{"data-testid":"theme-root"},a.a.createElement(o.a,{styles:Object(i.g)({"*":{boxSizing:"inherit"},body:{margin:0,padding:0,boxSizing:"border-box",textRendering:"optimizeLegibility"},"::selection":{backgroundColor:"primary",color:"white"},a:{transition:"all 0.3s ease-in-out",color:"text"}})}),a.a.createElement(c.a,null),a.a.createElement(ee,null,"Skip to content"),a.a.createElement(i.b,null,a.a.createElement(g,null),a.a.createElement(i.c,{id:"skip-nav",css:Object(i.g)(re({},W)),className:r},t),a.a.createElement(h,null)))}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,l,s,u=n(t),f=n(r);if(u&&f){if((l=t.length)!=r.length)return!1;for(c=l;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==r.getTime();var b=t instanceof RegExp,g=r instanceof RegExp;if(b!=g)return!1;if(b&&g)return t.toString()==r.toString();var h=a(t);if((l=h.length)!==a(r).length)return!1;for(c=l;0!=c--;)if(!o.call(r,h[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=l;0!=c--;)if(!("_owner"===(s=h[c])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},c95Q:function(e,t,r){},cMlJ:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteTitle":"Machine Learning at Vernacular.ai","siteTitleAlt":"Machine Learning | Vernacular.ai","siteHeadline":"Machine Learning | Vernacular.ai","siteUrl":"https://vernacular-ai.github.io/ml","siteDescription":"Notes from the Machine Learning team at Vernacular.ai","siteLanguage":"en","siteImage":"","author":""}}}}')},"n/Q7":function(e,t,r){"use strict";r("sC2a");t.a=function(e){return e.replace(/\/\/+/g,"/")}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ge}));r("wZFJ"),r("HQhv"),r("n7j8"),r("1dPr"),r("JHok"),r("OeI1"),r("MIFh"),r("sC2a"),r("sc67"),r("LagC"),r("pS08"),r("E5k/"),r("R48M"),r("m210"),r("4DPX"),r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK");var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),p=r.n(f),d=r("q1tI"),b=r.n(d),g=r("MgzW"),h=r.n(g),m="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(w).map((function(e){return w[e]})),"charset"),x="cssText",k="href",j="http-equiv",T="innerHTML",E="itemprop",S="name",C="property",A="rel",I="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",q="defer",D="encodeSpecialCharacters",R="onChangeClientState",F="titleTemplate",z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),N=[w.NOSCRIPT,w.SCRIPT,w.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=V(e,w.TITLE),r=V(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,M);return t||n||void 0},K=function(e){return V(e,R)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===A&&"canonical"===e[r].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==T&&c!==x&&c!==E||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=h()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(f,p);var d={baseTag:se(w.BASE,r),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},b={},g={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(b[e]=r),n.length&&(g[e]=d[e].oldTags)})),t&&t(),l(e,b,g)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===T)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[b.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Q(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===T||r===x){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),b.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Q(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(m,r,n),htmlAttributes:pe(y,a,n),link:pe(w.LINK,o,n),meta:pe(w.META,i,n),noscript:pe(w.NOSCRIPT,c,n),script:pe(w.SCRIPT,l,n),style:pe(w.STYLE,s,n),title:pe(w.TITLE,{title:f,titleAttributes:p},n)}},be=u()((function(e){return{baseTag:$([k,P],e),bodyAttributes:W(m,e),defer:V(e,q),encode:V(e,D),htmlAttributes:W(y,e),linkTags:Z(w.LINK,[A,k],e),metaTags:Z(w.META,[S,O,j,C,E],e),noscriptTags:Z(w.NOSCRIPT,[T],e),onChangeClientState:K(e),scriptTags:Z(w.SCRIPT,[I,T],e),styleTags:Z(w.STYLE,[x],e),title:Y(e),titleAttributes:W(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),ge=(a=be,i=o=function(e){function t(){return H(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return G({},n,((t={})[r.type]=[].concat(n[r.type]||[],[G({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return G({},a,((t={})[n.type]=i,t.titleAttributes=G({},o),t));case w.BODY:return G({},a,{bodyAttributes:G({},o)});case w.HTML:return G({},a,{htmlAttributes:G({},o)})}return G({},a,((r={})[n.type]=G({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=G({},t);return Object.keys(e).forEach((function(t){var n;r=G({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return b.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=G({},r);return t&&(n=this.mapChildrenToProps(t,n)),b.a.createElement(a,n)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(b.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ge.renderStatic=ge.rewind}).call(this,r("yLpj"))},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),o=r("ap2Z"),i=/"/g,c=function(e,t,r,n){var a=String(o(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},v1Bz:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Fgx0");n(n.S+n.F*r("96qb")((function(){function e(){}return!(Array.of.call(e)instanceof e)})),"Array",{of:function(){for(var e=0,t=arguments.length,r=new("function"==typeof this?this:Array)(t);t>e;)a(r,e,arguments[e++]);return r.length=t,r}})}}]);
//# sourceMappingURL=f2dc0ada23056430abd4477a8c7b5502a11ad7d1-609ce05e70b4122ca756.js.map