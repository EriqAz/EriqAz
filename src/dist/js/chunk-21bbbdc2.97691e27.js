(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21bbbdc2"],{"72a8":function(t,n,a){},bdf5:function(t,n,a){"use strict";a("72a8")},e382:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"user"},[a("div",{staticClass:"user-profile"},[a("div",{staticClass:"info"},[a("van-image",{attrs:{round:"",src:t.user.photo}}),a("h3",{staticClass:"name"},[t._v(" "+t._s(t.user.name)+" "),a("br"),a("van-tag",{attrs:{size:"mini"}},[t._v("申请认证")])],1)],1),a("van-row",[a("van-col",{attrs:{span:"8"}},[a("p",[t._v(t._s(t.user.art_count))]),a("p",[t._v("动态")])]),a("van-col",{attrs:{span:"8"}},[a("p",[t._v(t._s(t.user.follow_count))]),a("p",[t._v("关注")])]),a("van-col",{attrs:{span:"8"}},[a("p",[t._v(t._s(t.user.like_count))]),a("p",[t._v("粉丝")])])],1)],1),a("van-row",{staticClass:"user-links"},[a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"newspaper-o",color:"#7af"}}),t._v("我的作品 ")],1),a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"star-o",color:"#f00"}}),t._v("我的收藏 ")],1),a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"tosend",color:"#fa0"}}),t._v("阅读历史 ")],1)],1),a("van-cell-group",{staticClass:"user-group"},[a("van-cell",{attrs:{icon:"edit",title:"编辑资料",to:"/profile","is-link":""}}),a("van-cell",{attrs:{icon:"chat-o",title:"小智同学",to:"/chat","is-link":""}}),a("van-cell",{attrs:{icon:"setting-o",title:"系统设置","is-link":""}}),a("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""},on:{click:t.logout}})],1)],1)},e=[],r=a("1da1"),o=(a("96cf"),a("c24f")),c={name:"User",data:function(){return{user:{}}},created:function(){this.userInfo()},methods:{userInfo:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["g"])();case 2:a=n.sent,s=a.data,t.user=s;case 5:case"end":return n.stop()}}),n)})))()},logout:function(){var t=this;this.$dialog.confirm({title:"温馨提示",message:"确定要退出么"}).then((function(){t.$store.commit("user/removeTokenInfo"),t.$router.push("/login")})).catch((function(){}))}}},i=c,l=(a("bdf5"),a("2877")),u=Object(l["a"])(i,s,e,!1,null,"e67077fc",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-21bbbdc2.97691e27.js.map