(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-person-responsedetail"],{2166:function(e,t,r){"use strict";r.r(t);var a=r("bc85"),n=r.n(a);for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"7bd9":function(e,t,r){"use strict";var a;r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticStyle:{"padding-top":"1.4rem"}},[r("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,tourl:"/pages/person/responselist"}},[r("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),r("template",{attrs:{slot:"content"},slot:"content"},[e._v("用户反馈详情")])],2),r("v-uni-form",[r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-view",{staticClass:"title"},[e._v("用户姓名")]),r("v-uni-input",{attrs:{placeholder:"请输入用户姓名查询",name:"input",disabled:!0},model:{value:e.formModel.fields.realName,callback:function(t){e.$set(e.formModel.fields,"realName",t)},expression:"formModel.fields.realName"}})],1),r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-view",{staticClass:"title"},[e._v("反馈内容")]),r("v-uni-input",{attrs:{placeholder:"请输入反馈内容查询",name:"input",disabled:!0},model:{value:e.formModel.fields.problemContent,callback:function(t){e.$set(e.formModel.fields,"problemContent",t)},expression:"formModel.fields.problemContent"}})],1)],1)],1)},o=[]},b944:function(e,t,r){"use strict";var a=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.deleteCarDriver=t.loadCarDriverDetail=t.editCarDriver=t.loadCarDriver=t.createCarDriver=t.getCarDriverList=void 0;var n=a(r("a1b8")),o=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/applist",method:"post"},e)};t.getCarDriverList=o;var i=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/create",method:"post"},e)};t.createCarDriver=i;var s=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/edit/"+e.guid,method:"get"})};t.loadCarDriver=s;var u=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/edit",method:"post"},e)};t.editCarDriver=u;var l=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/detail/"+e.guid,method:"get"})};t.loadCarDriverDetail=l;var d=function(e){return n.default.httpTokenRequest({url:"api/v1/person/response/delete/"+e,method:"get"})};t.deleteCarDriver=d},bc72:function(e,t,r){"use strict";r.r(t);var a=r("7bd9"),n=r("2166");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);var i,s=r("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"763acc25",null,!1,a["a"],i);t["default"]=u.exports},bc85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("b944"),n={data:function(){return{formModel:{fields:{realName:"",problemContent:""}}}},onLoad:function(e){this.doLoadCarDispatch(e.uuid)},methods:{doLoadCarDispatch:function(e){var t=this;(0,a.loadCarDriverDetail)({guid:e}).then((function(e){200==e.data.code?t.formModel.fields=e.data.data:uni.showModal({title:"提示",content:e.data.message,showCancel:!1,success:function(e){e.confirm&&uni.redirectTo({url:"/pages/person/responselist"})}})}))}}};t.default=n}}]);