(function(e){function n(n){for(var r,a,o=n[0],i=n[1],s=n[2],f=0,l=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1e07070c":"810c345e","chunk-21bbbdc2":"97691e27","chunk-2d0a2e01":"e80b596d","chunk-2d0a4772":"40df9468","chunk-3a510b1d":"16a9b8da","chunk-44a10ce8":"48aa5faf","chunk-45573f39":"918f2d60","chunk-69c6e9cf":"a02d46f5","chunk-6fbe843f":"3ba6c540","chunk-b62598a2":"ffcaa1c6","chunk-26914555":"52edc8a5","chunk-45bf1f6e":"46e5db55"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1e07070c":1,"chunk-21bbbdc2":1,"chunk-3a510b1d":1,"chunk-69c6e9cf":1,"chunk-6fbe843f":1,"chunk-26914555":1,"chunk-45bf1f6e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1e07070c":"505c5eae","chunk-21bbbdc2":"a174794a","chunk-2d0a2e01":"31d6cfe0","chunk-2d0a4772":"31d6cfe0","chunk-3a510b1d":"d8a7e943","chunk-44a10ce8":"31d6cfe0","chunk-45573f39":"31d6cfe0","chunk-69c6e9cf":"1bc7dc84","chunk-6fbe843f":"c015f1e3","chunk-b62598a2":"31d6cfe0","chunk-26914555":"3fdc7e16","chunk-45bf1f6e":"01954996"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===u))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],f=s.getAttribute("data-href");if(f===r||f===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var l=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}u[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";var r=t("2b0e"),a=t("2f62"),u=t("5d2d"),c={tokenInfo:Object(u["b"])()||{}},o={setTokenInfo:function(e,n){e.tokenInfo=n,Object(u["e"])(n)},removeTokenInfo:function(e){e.tokenInfo="",Object(u["c"])()}},i={},s={},f={namespaced:!0,state:c,mutations:o,actions:i,getters:s},l=t("1da1"),d=(t("4de4"),t("c740"),t("96cf"),t("5986")),h={channels:[],allChannels:[]},p={setChannels:function(e,n){e.channels=n},setAllChannels:function(e,n){e.allChannels=n},addChannels:function(e,n){e.channels.push(n)}},b={getChannels:function(e){return Object(l["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(d["c"])();case 2:t=n.sent,e.commit("setChannels",t.data.channels);case 4:case"end":return n.stop()}}),n)})))()},getAllChannels:function(e){return Object(l["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(d["a"])();case 2:t=n.sent,r=t.data.channels,e.commit("setAllChannels",r);case 5:case"end":return n.stop()}}),n)})))()}},m={optionalChannels:function(e){var n=e.allChannels.filter((function(n){var t=e.channels.findIndex((function(e){return e.id===n.id}));return-1===t}));return n}},v={namespaced:!0,state:h,mutations:p,actions:b,getters:m};r["a"].use(a["a"]);n["a"]=new a["a"].Store({modules:{user:f,channels:v}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("4de4");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.isKeepLive?t("router-view"):e._e()],1),e.$route.meta.isKeepLive?e._e():t("router-view")],1)},u=[],c=t("2877"),o={},i=Object(c["a"])(o,a,u,!1,null,null,null),s=i.exports,f=t("a18c"),l=t("4360"),d=(t("5cfb"),t("5852"),t("d961")),h=(t("bda7"),t("5e46")),p=(t("da3c"),t("0b33")),b=(t("a52c"),t("2ed4")),m=(t("537a"),t("ac28")),v=(t("c3a6"),t("ad06")),k=(t("f1dc"),t("6e47")),g=(t("e7e5"),t("d399")),y=(t("0653"),t("34e9")),O=(t("be7f"),t("565f")),j=(t("5246"),t("6b41")),w=(t("66b9"),t("b650")),_=(t("c194"),t("7744")),x=(t("2994"),t("2bdd")),S=(t("0ec5"),t("21ab")),C=(t("3df5"),t("2830")),I=(t("4056"),t("44bf")),P=(t("ab71"),t("58e6")),T=(t("66cf"),t("343b")),A=(t("8a58"),t("e41f")),E=(t("2cbd"),t("ab2c")),N=(t("ac1e"),t("543e")),L=(t("2b28"),t("9ed2")),R=(t("81e6"),t("9ffb")),q=(t("4d48"),t("d1e1")),z=(t("5f1a"),t("a3e2")),B=(t("e17f"),t("2241")),J=(t("d1cf"),t("ee83"));r["a"].use(J["a"]),r["a"].use(B["a"]),r["a"].use(z["a"]),r["a"].use(q["a"]),r["a"].use(R["a"]),r["a"].use(L["a"]),r["a"].use(N["a"]),r["a"].use(E["a"]),r["a"].use(A["a"]),r["a"].use(T["a"]),r["a"].use(P["a"]),r["a"].use(I["a"]),r["a"].use(C["a"]),r["a"].use(S["a"]),r["a"].use(x["a"]),r["a"].use(_["a"]),r["a"].use(w["a"]),r["a"].use(j["a"]),r["a"].use(O["a"]),r["a"].use(y["a"]),r["a"].use(g["a"]),r["a"].use(k["a"]),r["a"].use(v["a"]),r["a"].use(m["a"]),r["a"].use(b["a"]),r["a"].use(p["a"]),r["a"].use(h["a"]),r["a"].use(d["a"]);t("b20f");var $=t("b775"),K=new r["a"],M=K,D=t("5a0c"),U=t.n(D),F=t("4208"),H=t.n(F);t("a471");U.a.extend(H.a),U.a.locale("zh-cn");var G=function(e){return U()(e).fromNow()};r["a"].prototype.$request=$["a"],r["a"].prototype.$eventBus=M,r["a"].filter("formateTime",G),r["a"].config.productionTip=!1,new r["a"]({router:f["a"],store:l["a"],render:function(e){return e(s)}}).$mount("#app")},5986:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return o}));var r=t("b775"),a=function(){return r["a"].get("/v1_0/channels")},u=function(e,n){return Object(r["a"])({method:"get",url:"/v1_0/articles",params:{channel_id:e,timestamp:n}})},c=function(){return Object(r["a"])({method:"get",url:"/v1_0/user/channels"})},o=function(e){return Object(r["a"])({method:"put",url:"/v1_0/user/channels",data:{channels:e}})}},"5d2d":function(e,n,t){"use strict";t.d(n,"e",(function(){return u})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return i})),t.d(n,"a",(function(){return s}));var r="hm-84-token",a="hm-84-history",u=function(e){return localStorage.setItem(r,JSON.stringify(e))},c=function(){return JSON.parse(localStorage.getItem(r))},o=function(){return localStorage.removeItem(r)},i=function(e){return localStorage.setItem(a,JSON.stringify(e))},s=function(){return JSON.parse(localStorage.getItem(a))||[]}},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0"),t("caad");var r=t("2b0e"),a=t("8c4f"),u=t("4360");r["a"].use(a["a"]);var c=function(){return t.e("chunk-69c6e9cf").then(t.bind(null,"9ed6"))},o=function(){return t.e("chunk-1e07070c").then(t.bind(null,"162e"))},i=function(){return Promise.all([t.e("chunk-b62598a2"),t.e("chunk-26914555")]).then(t.bind(null,"7abe"))},s=function(){return t.e("chunk-2d0a4772").then(t.bind(null,"070e"))},f=function(){return t.e("chunk-2d0a2e01").then(t.bind(null,"007b"))},l=function(){return t.e("chunk-21bbbdc2").then(t.bind(null,"e382"))},d=function(){return t.e("chunk-44a10ce8").then(t.bind(null,"efe3"))},h=function(){return t.e("chunk-6fbe843f").then(t.bind(null,"f799"))},p=function(){return Promise.all([t.e("chunk-b62598a2"),t.e("chunk-45bf1f6e")]).then(t.bind(null,"ec8d"))},b=function(){return t.e("chunk-45573f39").then(t.bind(null,"669d"))},m=function(){return t.e("chunk-3a510b1d").then(t.bind(null,"5b57"))},v=new a["a"]({routes:[{path:"/login",component:c},{path:"/",component:o,children:[{path:"",component:i,meta:{isKeepLive:!0}},{path:"question",component:s},{path:"video",component:f},{path:"user",component:l}]},{path:"/search",component:d},{path:"/result",component:h},{path:"/detail/:id",component:p},{path:"/profile",component:b},{path:"/chat",component:m}]}),k=a["a"].prototype.push;a["a"].prototype.push=function(e){return k.call(this,e).catch((function(e){return e}))};var g=["/user"];v.beforeEach((function(e,n,t){var r=u["a"].state.user.tokenInfo.token;"/login"===e.path&&r?t("/"):g.includes(e.path)?r?t():v.push({path:"/login",query:{backto:e.fullPath}}):t()})),n["a"]=v},b20f:function(e,n,t){},b775:function(e,n,t){"use strict";var r=t("1da1"),a=(t("96cf"),t("d3b7"),t("bc3a")),u=t.n(a),c=t("4360"),o=t("c24f"),i=t("a18c"),s=u.a.create({baseURL:"http://192.168.134.31:8000"});s.interceptors.request.use((function(e){var n=c["a"].state.user.tokenInfo.token;return n&&!e.headers.Authorization&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e.data}),function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(401!==n.response.status){e.next=21;break}if(t=c["a"].state.user.tokenInfo.refresh_token,!t){e.next=19;break}return e.prev=3,e.next=6,Object(o["e"])(t);case 6:return r=e.sent,a=r.data,c["a"].commit("user/setTokenInfo",{token:a.token,refresh_token:t}),n.config.headers.Authorization="Bearer ".concat(a.token),e.abrupt("return",s(n.config));case 13:e.prev=13,e.t0=e["catch"](3),c["a"].commit("user/removeTokenInfo"),i["a"].push({path:"/login",query:{backto:i["a"].currentRoute.fullPath}});case 17:e.next=21;break;case 19:c["a"].commit("user/removeTokenInfo"),i["a"].push({path:"/login",query:{backto:i["a"].currentRoute.fullPath}});case 21:return e.abrupt("return",Promise.reject(n));case 22:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}()),n["a"]=s},c24f:function(e,n,t){"use strict";t.d(n,"f",(function(){return a})),t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"g",(function(){return f})),t.d(n,"i",(function(){return l})),t.d(n,"h",(function(){return d}));var r=t("b775"),a=function(e){return r["a"].get("/v1_0/sms/codes/".concat(e))},u=function(e,n){return r["a"].post("/v1_0/authorizations",{mobile:e,code:n})},c=function(){return Object(r["a"])({method:"get",url:"/v1_0/user/profile"})},o=function(e){return Object(r["a"])({method:"post",url:"/v1_0/user/followings",data:{target:e}})},i=function(e){return Object(r["a"])({method:"delete",url:"/v1_0/user/followings/"+e})},s=function(e){return Object(r["a"])({method:"put",url:"/v1_0/authorizations",headers:{Authorization:"Bearer ".concat(e)}})},f=function(){return Object(r["a"])({method:"get",url:"/v1_0/user"})},l=function(e){return Object(r["a"])({method:"patch",url:"/v1_0/user/profile",data:e})},d=function(e){return Object(r["a"])({method:"patch",url:"/v1_0/user/photo",data:e})}}});
//# sourceMappingURL=app.7a010f5e.js.map