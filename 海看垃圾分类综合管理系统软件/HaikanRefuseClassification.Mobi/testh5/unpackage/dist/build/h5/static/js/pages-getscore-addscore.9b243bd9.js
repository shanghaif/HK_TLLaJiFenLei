(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-getscore-addscore"],{"081e":function(e,t,o){"use strict";var a=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.GetCommonEWM=t.GetCommon=t.commonman=t.UntieMa=t.AddJiatinma=t.JiatinmaList=t.Roomjuli=t.TrashRoomYYList=t.ShopaddRecordList=t.setNewPass=t.AddchangeGoods=t.getgoodlist=t.getShoplist=t.getRegCode=t.addvolunteerPJ=t.getTrashRoomList=t.doscoreList=t.doCreateUser=t.doGetTrashLocation=t.dogetscorelist=t.doVolunteeraddScore=t.dogetOneUser=void 0;var n=a(o("a1b8")),i=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/getOneUser",method:"get"},e)};t.dogetOneUser=i;var r=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/VolunteeraddScore",method:"post"},e)};t.doVolunteeraddScore=r;var s=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/AddScoreRecode",method:"post"},e)};t.dogetscorelist=s;var u=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetTrashLocation/"+e,method:"get"})};t.doGetTrashLocation=u;var d=function(e){return console.log(1111),console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SendCode/CreateUser",method:"post"},e)};t.doCreateUser=d;var c=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/scoreList",method:"get"})};t.doscoreList=c;var l=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/TrashRoomList/"+e,method:"get"})};t.getTrashRoomList=l;var p=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/volunteerPJ/"+e,method:"get"})};t.addvolunteerPJ=p;var v=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SendCode/GetRegCode/"+e,method:"get"})};t.getRegCode=v;var h=function(){return n.default.httpTokenRequest({url:"api/v1/app/OwnerManage/Shoplist",method:"get"})};t.getShoplist=h;var f=function(e){return n.default.httpTokenRequest({url:"api/v1/app/OwnerManage/goodlist/",method:"get"},e)};t.getgoodlist=f;var g=function(e){return n.default.httpTokenRequest({url:"api/v1/app/OwnerManage/AddchangeGoods",method:"post"},e)};t.AddchangeGoods=g;var m=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/SetNewPass",method:"post"},e)};t.setNewPass=m;var k=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/ShopaddRecordList/",method:"get"},e)};t.ShopaddRecordList=k;var C=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/TrashRoomYYList/",method:"get"},e)};t.TrashRoomYYList=C;var w=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/Roomjuli/",method:"get"},e)};t.Roomjuli=w;var b=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/JiatinmaList/",method:"get"},e)};t.JiatinmaList=b;var R=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/AddJiatinma/",method:"get"},e)};t.AddJiatinma=R;var x=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/UntieMa/",method:"get"},e)};t.UntieMa=x;var _=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/Common?result="+e,method:"get"})};t.commonman=_;var T=function(e){return console.log(e),n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetCommon",method:"post"},e)};t.GetCommon=T;var M=function(e){return n.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetCommonEWM/"+e,method:"get"})};t.GetCommonEWM=M},"207d":function(e,t,o){var a=o("24fb");t=a(!1),t.push([e.i,".hezi[data-v-64231cdc]{background-color:#fff;margin:20px 20px 0 20px;border-radius:5px}.hang[data-v-64231cdc]{line-height:45px;border-top:1px solid #ccc;overflow:hidden;margin:0 15px}.hang[data-v-64231cdc]:nth-child(1){line-height:45px;border-top:0}.zuo[data-v-64231cdc]{float:left;font-weight:700}.you[data-v-64231cdc]{float:right;color:#999;font-weight:700}.cu-form-group[data-v-64231cdc]{border-radius:5px}",""]),e.exports=t},"4f92":function(e,t,o){"use strict";o.r(t);var a=o("bf52"),n=o("dfcf");for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);o("d170");var r,s=o("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"64231cdc",null,!1,a["a"],r);t["default"]=u.exports},b8f6:function(e,t,o){var a=o("207d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=o("4f06").default;n("12e2bca1",a,!0,{sourceMap:!1,shadowMode:!1})},bf52:function(e,t,o){"use strict";var a;o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,tourl:"/pages/getscore/menu"}},[o("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),o("template",{attrs:{slot:"content"},slot:"content"},[e._v("赋分")])],2),o("v-uni-view",{staticClass:"cu-form-group margin-top",staticStyle:{margin:"20px 20px 0px 20px"}},[o("v-uni-view",{staticClass:"title"},[e._v("申请人")]),o("v-uni-input",{attrs:{placeholder:"输入手机,老年卡号,住址",name:"input",focus:"true"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}}),o("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitsearch.apply(void 0,arguments)}}},[e._v("搜索")])],1),o("v-uni-view",{staticClass:"hezi"},[o("v-uni-view",{staticClass:"hang"},[o("v-uni-view",{staticClass:"zuo"},[e._v("用户昵称")]),o("v-uni-view",{staticClass:"you"},[e._v(e._s(e.userinfo.name))])],1),o("v-uni-view",{staticClass:"hang"},[o("v-uni-view",{staticClass:"zuo"},[e._v("手机号码")]),o("v-uni-view",{staticClass:"you"},[e._v(e._s(e.userinfo.phone))])],1),o("v-uni-view",{staticClass:"hang"},[o("v-uni-view",{staticClass:"zuo"},[e._v("老年卡号")]),o("v-uni-view",{staticClass:"you"},[e._v(e._s(e.userinfo.cardnum))])],1),o("v-uni-view",{staticClass:"hang"},[o("v-uni-view",{staticClass:"zuo"},[e._v("家庭住址")]),o("v-uni-view",{staticClass:"you"},[e._v(e._s(e.userinfo.address))])],1)],1),o("v-uni-view",{staticClass:"hezi"},[o("v-uni-view",{staticClass:"cu-form-group margin-top"},[o("v-uni-view",{staticClass:"title"},[e._v("垃圾厢房：")]),o("v-uni-picker",{attrs:{value:e.index3,"range-key":"ljname",range:e.picker_room},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PickerChange3.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.index3>-1?e.picker_room[e.index3].ljname:e.picker_room[0].ljname))])],1)],1),o("v-uni-view",{staticClass:"cu-form-group margin-top"},[o("v-uni-view",{staticClass:"title"},[e._v("评价方式：")]),o("v-uni-picker",{attrs:{value:e.index,"range-key":"scoreName",range:e.picker},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.PickerChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"picker"},[e._v(e._s(e.index>-1?e.picker[e.index].scoreName:e.picker[0].scoreName))])],1)],1),o("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitfrom.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)},i=[]},d170:function(e,t,o){"use strict";var a=o("b8f6"),n=o.n(a);n.a},dc14:function(e,t,o){"use strict";o("ac1f"),o("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("081e"),n={data:function(){return{index:0,index2:0,index3:0,picker:[],picker_trashtype:["可回收物","厨余垃圾","有害垃圾","其他垃圾"],picker_room:[],modalName:null,userinfo:{name:"",phone:"",cardnum:"",address:"",userUUid:"",old:""},query:{name:""},score:"",trashtype:"",trashroom:""}},onLoad:function(){this.getscorelist(),this.doTrashRoomList();var e=this.$store.state.EWM.split(",");this.userinfo.phone=e[0],this.userinfo.old=e[1],this.userinfo.address=e[2],""!=e[0]?this.query.name=e[0]:""!=e[1]&&(this.query.name=e[1]),this.submitsearch()},methods:{getscorelist:function(){var e=this;(0,a.doscoreList)().then((function(t){console.log(t),200==t.data.code&&(e.picker=t.data.data)}))},doTrashRoomList:function(){var e=this,t="";uni.getLocation({type:"gcj02",altitude:!0,success:function(o){t=o.longitude+","+o.latitude,(0,a.getTrashRoomList)(t).then((function(t){console.log(t),200==t.data.code?(e.picker_room=t.data.data,e.trashroom=e.picker_room[e.index].garbageRoomUuid):uni.showToast({icon:"none",title:"请检查定位信息"})}))},fail:function(e){console.log(e),uni.showModal({title:"提示",content:"定位失败",showCancel:!1})}})},PickerChange:function(e){console.log(e.detail.value),this.index=e.detail.value,this.score=this.picker[this.index].scoreUuid},PickerChange2:function(e){console.log(e.detail.value),this.index2=e.detail.value,this.trashtype=this.picker_trashtype[this.index2]},PickerChange3:function(e){console.log(e.detail.value),this.index3=e.detail.value,this.trashroom=this.picker_room[this.index3].garbageRoomUuid},textareaBInput:function(e){this.textareaBValue=e.detail.value},submitsearch:function(){var e=this;(0,a.dogetOneUser)(this.query.name).then((function(t){200==t.data.code?(e.userinfo.name=t.data.data.realName,e.userinfo.phone=t.data.data.phone,e.userinfo.cardnum=t.data.data.oldCard,e.userinfo.address=t.data.data.address,e.userinfo.userUUid=t.data.data.userUUid):""!=e.query.name&&null!=e.query.name&&uni.showModal({title:"提示",content:t.data.message,showCancel:!1})}))},submitfrom:function(){if(""!=this.userinfo.userUUid&&null!=this.userinfo.userUUid){console.log(this.picker),this.score=this.picker[this.index].scoreUuid,this.trashroom=this.picker_room[this.index3].garbageRoomUuid;var e={systemUserUuid:this.userinfo.userUUid,scoreSettingUuid:this.score,grabageRoomId:this.trashroom};(0,a.doVolunteeraddScore)(e).then((function(e){console.log(e),200==e.data.code?uni.showModal({title:"提示",content:e.data.message,success:function(e){e.confirm&&uni.redirectTo({url:"/pages/getscore/menu"})}}):uni.showModal({title:"提示",content:e.data.message,showCancel:!1})}))}else uni.showModal({title:"提示",content:"赋分人员不能为空",showCancel:!1})}}};t.default=n},dfcf:function(e,t,o){"use strict";o.r(t);var a=o("dc14"),n=o.n(a);for(var i in a)"default"!==i&&function(e){o.d(t,e,(function(){return a[e]}))}(i);t["default"]=n.a}}]);