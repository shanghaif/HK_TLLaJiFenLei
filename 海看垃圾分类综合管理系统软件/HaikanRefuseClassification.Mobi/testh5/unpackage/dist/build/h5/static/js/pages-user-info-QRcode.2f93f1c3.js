(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-info-QRcode"],{"081e":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.GetCommonEWM=e.GetCommon=e.commonman=e.UntieMa=e.AddJiatinma=e.JiatinmaList=e.Roomjuli=e.TrashRoomYYList=e.ShopaddRecordList=e.setNewPass=e.AddchangeGoods=e.getgoodlist=e.getShoplist=e.getRegCode=e.addvolunteerPJ=e.getTrashRoomList=e.doscoreList=e.doCreateUser=e.doGetTrashLocation=e.dogetscorelist=e.doVolunteeraddScore=e.dogetOneUser=void 0;var i=n(a("a1b8")),o=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/getOneUser",method:"get"},t)};e.dogetOneUser=o;var s=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/VolunteeraddScore",method:"post"},t)};e.doVolunteeraddScore=s;var r=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/AddScoreRecode",method:"post"},t)};e.dogetscorelist=r;var d=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetTrashLocation/"+t,method:"get"})};e.doGetTrashLocation=d;var u=function(t){return console.log(1111),console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SendCode/CreateUser",method:"post"},t)};e.doCreateUser=u;var c=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/scoreList",method:"get"})};e.doscoreList=c;var l=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/TrashRoomList/"+t,method:"get"})};e.getTrashRoomList=l;var p=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/volunteerPJ/"+t,method:"get"})};e.addvolunteerPJ=p;var v=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SendCode/GetRegCode/"+t,method:"get"})};e.getRegCode=v;var m=function(){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/Shoplist",method:"get"})};e.getShoplist=m;var h=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/goodlist/",method:"get"},t)};e.getgoodlist=h;var g=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/AddchangeGoods",method:"post"},t)};e.AddchangeGoods=g;var f=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/SetNewPass",method:"post"},t)};e.setNewPass=f;var b=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/ShopaddRecordList/",method:"get"},t)};e.ShopaddRecordList=b;var w=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/TrashRoomYYList/",method:"get"},t)};e.TrashRoomYYList=w;var x=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/Roomjuli/",method:"get"},t)};e.Roomjuli=x;var y=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/JiatinmaList/",method:"get"},t)};e.JiatinmaList=y;var k=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/AddJiatinma/",method:"get"},t)};e.AddJiatinma=k;var C=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/UntieMa/",method:"get"},t)};e.UntieMa=C;var A=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/Common?result="+t,method:"get"})};e.commonman=A;var q=function(t){return console.log(t),i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetCommon",method:"post"},t)};e.GetCommon=q;var R=function(t){return i.default.httpTokenRequest({url:"api/v1/app/SupervisorManage/GetCommonEWM/"+t,method:"get"})};e.GetCommonEWM=R},"42cf":function(t,e){t.exports="data:image/png;base64,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"},"46db":function(t,e,a){"use strict";a.r(e);var n=a("f8f1"),i=a("4baa");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("92a3");var s,r=a("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6392779c",null,!1,n["a"],s);e["default"]=d.exports},"4baa":function(t,e,a){"use strict";a.r(e);var n=a("b86e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"66d8":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.GetJiatinEWM=e.ewm=e.test=e.getXFsList=void 0;var i=n(a("a1b8")),o=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/getAllGrabroomPoint",method:"get"})};e.getXFsList=o;var s=function(){return i.default.httpTokenRequest({url:"api/v1/message/test",method:"get"})};e.test=s;var r=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/GetEWM/"+t,method:"get"})};e.ewm=r;var d=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/GetJiatinEWM/"+t,method:"get"})};e.GetJiatinEWM=d},"76d5":function(t,e){t.exports="data:image/png;base64,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"},"7d76":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"body[data-v-6392779c]{font-family:sans-serif}.content[data-v-6392779c]{width:100%\r\n\t/* background-color: #ffffff; */}.top[data-v-6392779c]{width:100%;\r\n\t/* height:400upx; */\r\n\t/* background: url(http://pds.jyt123.com/wxtest/banner.png) no-repeat ; */background-size:100%;background-position:50%}.banner[data-v-6392779c]{width:92%;background-color:#fff;border-radius:15px 15px 15px 15px;position:absolute;overflow:visible;margin:30px 15px}.address[data-v-6392779c]{font-size:%?32?%;text-align:center;margin-top:%?40?%;margin-bottom:%?20?%}.family[data-v-6392779c]{border-bottom:1px dashed #999;margin-left:1rem;margin-right:1rem}.family .code[data-v-6392779c]{font-size:%?40?%;font-weight:600;text-align:center;margin-top:%?26?%;margin-left:%?80?%;color:#1aad19}.family .code1[data-v-6392779c]{font-size:%?40?%;font-weight:600;text-align:center;margin-top:%?26?%;color:#1aad19}.family .unbind[data-v-6392779c]{color:#0294fa;float:right;margin-right:%?37?%}.citizen[data-v-6392779c]{\r\n\t/* margin: 10px 0 0 10px; */}.citizen .ma[data-v-6392779c]{font-size:%?35?%;font-weight:550;margin-left:19px;margin-top:6px}.img[data-v-6392779c]{width:%?400?%;height:%?400?%;margin:0 auto;margin-top:%?60?%;text-align:center}.img uni-image[data-v-6392779c]{width:100%;height:100%;margin-top:%?20?%}.img1[data-v-6392779c]{width:97%;height:85px;padding:%?20?% 0 %?270?% -10px;text-align:center}.img1 uni-image[data-v-6392779c]{width:100%;height:100%;margin-top:%?20?%\r\n\t/* margin-left: 35rpx; */}.img1 .shi[data-v-6392779c],\r\n.img1 .bai[data-v-6392779c]{margin-top:-65px;float:left;margin-left:10px}.img1 .shi uni-image[data-v-6392779c],\r\n.img1 .bai[data-v-6392779c]{width:35px;height:35px}.smbtn[data-v-6392779c]{margin-top:-2px;margin-left:14px;width:100%;height:26px;font-size:12px;color:#8a8a8a;border-radius:0 0 10px 10px}.btn[data-v-6392779c]{width:%?260?%;height:%?60?%;line-height:%?60?%;margin:0 auto;margin-top:%?60?%;border-radius:%?40?%;border:0;font-size:%?26?%;outline:0;background:#33b17b;color:#fff;text-align:center}.bottom[data-v-6392779c]{width:100%;height:%?400?%;\r\n\t/* \tbackground: url(../../static/img/beij.png) no-repeat; */background-position:0 100%; /* 设置背景图片位置 */background-size:20%}.bottom ul[data-v-6392779c]{padding-left:%?40?%;box-sizing:border-box}.bottom ul li[data-v-6392779c]{width:100%;height:%?60?%}.sqbtn[data-v-6392779c]{margin-top:0}.shi .code[data-v-6392779c],\r\n.bai .code[data-v-6392779c]{float:left;z-index:999;position:fixed;margin-left:60px;margin-top:-30px;font-size:16px;font-weight:700}.common[data-v-6392779c]{height:42px}.commgroup[data-v-6392779c]{color:grey;width:86%;border-top:1px solid #cbcbcb;border-bottom:1px solid #cbcbcb;margin-left:5%}.commform[data-v-6392779c]{padding-left:4%;margin-left:5%;width:86%}.getcom[data-v-6392779c]{width:100%;text-align:center}.getcom uni-button[data-v-6392779c]{width:70px;margin:5px}.content11[data-v-6392779c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btn11[data-v-6392779c]{width:50%}",""]),t.exports=e},"7f22":function(t,e,a){var n=a("7d76");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7bd21398",n,!0,{sourceMap:!1,shadowMode:!1})},"92a3":function(t,e,a){"use strict";var n=a("7f22"),i=a.n(n);i.a},b86e:function(t,e,a){"use strict";var n=a("4ea4");a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("8f17")),o=a("081e"),s=a("66d8"),r=a("ffe6"),d=a("87ce"),u={components:{qr:i.default},data:function(){return{result:"",providerList:[],sourceLink:"http://yunzhujiao.cn/bind_pub/index.html",type:0,val:"1111",size:400,unit:"upx",background:"#b4e9e2",foreground:"#309286",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!1,loadMake:!1,src:"",address:"",cindex:1,demo:0,idCard:"",index:0,index1:0,modalName:null,count:"",cardtype:[{name:"请选择",index:0},{name:"居民身份证",index:"01"},{name:"居民户口簿",index:"02"},{name:"护照",index:"03"},{name:"军官证",index:"04"},{name:"驾驶证",index:"05"},{name:"港澳居民来往内地通行证",index:"06"},{name:"台湾居民来往内地通行证",index:"07"},{name:"出生医学证明",index:"08"},{name:"其他法定有效证件",index:"99"}],query:{name:"",idCardType:"",idCardValue:"",sex:"",tel:""},msg:"",code:0}},onLoad:function(){var t=this,e=this.getCookie("name"),a=this.getCookie("phone");""!=a&&""==this.$store.state.userId?this.loginbtn(a):""==this.$store.state.userId?uni.showModal({title:"提示",content:"请在登录后查看！",showCancel:!0,success:function(t){t.confirm?uni.navigateTo({url:"/pages/login/login"}):uni.navigateBack({delta:1,animationDuration:200})}}):(""!=this.$store.state.idCard&&null!=this.$store.state.idCard&&(this.demo=2),null==this.$store.state.HomeAddressUUID?(this.cindex=1,this.demo=0):this.cindex=0,0==this.cindex&&(this.onval=!0,this.loadMake=!0,(0,s.GetJiatinEWM)(this.$store.state.HomeAddressUUID).then((function(e){console.log(e),console.log(777777),200==e.data.code&&(t.val=e.data.data.split(",")[0],t.address=e.data.data.split(",")[1])})))),""!=e&&""!=this.$store.state.userId&&1==this.cindex&&this.GetQRcode(e.split("h_")[1])},methods:{qrR:function(t){this.src=t},getCookie:function(t){for(var e=document.cookie,a=e.split("; "),n=0;n<a.length;n++){var i=a[n].split("=");if(t==i[0])return i[1]}return""},loginbtn:function(t){var e=this;(0,d.geth5OpenAuth)(t).then((function(t){if(console.log("再次登录:"),console.log(t),200==t.data.code){var a=t.data.data.tokens;uni.setStorageSync("token",a);var n={userName:t.data.data.user_name,userId:t.data.data.user_guid,userType:t.data.data.user_type,RoleName:t.data.data.roleName,token:a,phone:t.data.data.phone,openid:t.data.data.openid,HomeAddressUUID:t.data.data.homeAddressUUID,shopid:t.data.data.shop_guid,idCard:t.data.data.idCard};e.$store.commit("login",n),e.$store.state.seltab=1,document.cookie="phone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",uni.redirectTo({url:"/pages/user/info/QRcode"}),console.log("code="+t.data.code),console.log(t)}}))},GetQRcode:function(t){var e=this,a={guid:e.$store.state.userId,vuid:t};(0,o.AddJiatinma)(a).then((function(a){200==a.data.code?"绑定成功"==a.data.message?(e.$store.state.HomeAddressUUID=t,uni.showModal({title:"提示",content:"您已绑定成功！",showCancel:!1,success:function(t){t.confirm&&(document.cookie="name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",uni.redirectTo({url:"/pages/user/info/QRcode"}))}})):uni.showModal({title:"提示",content:"绑定失败！",showCancel:!1,success:function(t){t.confirm&&uni.navigateTo({url:"/pages/user/info/QRcode"})}}):uni.showModal({title:"提示",content:"未查询到家庭码信息！",showCancel:!1,success:function(t){t.confirm}})}))},showModal:function(t){null!=this.$store.state.HomeAddressUUID?this.modalName=t.currentTarget.dataset.target:uni.showToast({title:"请先绑定家庭码",icon:"none"})},claseModal:function(t){this.modalName=null},hideModal:function(t){var e=this;uni.showToast({title:"5秒后进入...",icon:"success"});var a=5;this.timer||(this.count=a,this.show=!1,this.timer=setInterval((function(){e.count>0&&e.count<=a?e.count--:(e.show=!0,clearInterval(e.timer),e.timer=null,e.demo=1,e.modalName=null)}),1e3))},saoma:function(){window.location.href="../../../static/saoma.html"},smbtn:function(){uni.navigateTo({url:"/pages/user/info/common"})},PickerChange:function(t){this.index=t.detail.value,this.query.idCardType=this.cardtype[t.detail.value].index},PickerChange1:function(t){this.index1=t.detail.value,this.query.sex=this.sex[t.detail.value].index},citizencode:function(){},untie:function(){var t=this,e={guid:this.$store.state.userId};(0,o.UntieMa)(e).then((function(e){200==e.data.code?(t.cindex=1,t.demo=0,document.cookie="phone="+t.$store.state.phone+";path=/;",t.$store.state.HomeAddressUUID=null,uni.showToast({title:"解绑成功！"})):uni.showToast({title:"解绑失败！",icon:"none"})}))},save:function(){var t=this;uni.showActionSheet({itemList:["保存图片到相册"],success:function(){uni.saveImageToPhotosAlbum({filePath:t.src,success:function(){uni.showToast({title:"保存成功",icon:"none"})}})},fail:function(){uni.showToast({title:"保存失败，请重试！",icon:"none"})}})},apply:function(){var t=this;if(null!=this.$store.state.HomeAddressUUID)if(""!=this.query.name)if(""!=this.query.idCardType)if(""!=this.query.tel){var e=/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;if(e.test(this.idCard)){var a=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;a.test(this.query.tel)?(this.query.idCardValue=this.idCard,(0,o.GetCommon)(this.query).then((function(e){if(t.code=e.data.data.code,t.msg=e.data.data.msg,console.log(t.code),1==t.code){var a=uni.getStorageSync("openid"),n={idCard:t.idCard,openid:a,phone:t.query.tel,sex:t.query.sex,oldCard:t.query.idCardType,realName:t.query.name};(0,r.setIDCard)(n).then((function(e){console.log(e),200==e.data.code?(uni.showToast({title:e.data.message,icon:"none"}),t.demo=2,t.$store.state.idCard=t.idCard):uni.showToast({title:e.data.message,icon:"none"})}))}else uni.showToast({title:t.msg,icon:"none"})}))):uni.showToast({title:"请输入有效的手机号码",icon:"none"})}else uni.showToast({title:"请输入有效的身份证号",icon:"none"})}else uni.showToast({title:"请输入手机号码",icon:"none"});else uni.showToast({title:"请选择证件类型",icon:"none"});else uni.showToast({title:"请输入姓名",icon:"none"});else uni.showToast({title:"请先绑定家庭码",icon:"none"})}}};e.default=u},c556:function(t,e,a){t.exports=a.p+"static/img/baixinka.3c529cc3.png"},f8f1:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={tkiQrcode:a("8f17").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,tourl:"/pages/home/index"}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("我的家庭码")])],2),n("v-uni-view",{staticClass:"top",staticStyle:{"padding-top":"2rem"}}),n("v-uni-view",{staticClass:"banner"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.cindex,expression:"cindex == 0"}],staticClass:"family"},[n("v-uni-view",{staticClass:"unbind",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.untie.apply(void 0,arguments)}}},[t._v("解绑")]),n("v-uni-view",{staticClass:"code"},[t._v("家庭积分码")]),n("v-uni-view",{staticClass:"img"},[n("tki-qrcode",{ref:"qrcode",attrs:{cid:"qrcode1",val:t.val,size:t.size,unit:t.unit,icon:t.icon,iconSize:t.iconsize,lv:t.lv,onval:t.onval,loadMake:t.loadMake,usingComponents:!0},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)},longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"address"},[t._v(t._s(t.address))]),n("br")],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.cindex,expression:"cindex == 1"}],staticClass:"family"},[n("v-uni-view",{staticClass:"code1"},[t._v("家庭积分码")]),n("v-uni-view",{staticClass:"img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saoma.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"https://ljfl.hztlcgj.com/image/scan1.png",mode:""}})],1),n("v-uni-view",{staticClass:"address"},[t._v("点击“扫一扫” 绑定家庭码")]),n("br")],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.demo,expression:"demo == 0"}],staticClass:"cu-bar bg-white margin-top",staticStyle:{"margin-bottom":"15px"}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("市民卡（百姓码）")],1),n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round sqbtn",attrs:{"data-target":"DialogModal1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}},[t._v("申领")])],1)],1),n("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog",staticStyle:{"margin-top":"75px","margin-bottom":"20px"}},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("电子百姓码开通协议")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.claseModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl",staticStyle:{"text-align":"left","text-indent":"20px"}},[n("p",[t._v("您在申请桐庐县电子百姓码注册流程中，点击确认开通按钮之前，请务必认真阅读以下内容：")]),n("br"),n("p",[t._v('本协议是桐庐县数据资源管理局（以下简称“数管局”）与用户（以下或称为“您”）就使用桐庐县居民电子百姓码授权事宜的有效合约，本协议所称"桐庐县居民电子百姓码"（以下简称“本产品”）系指由桐庐数管局向您提供的电子产品。')]),n("br"),n("p",[t._v("您通过网络页面点击确认或以其他方式选择接受本协议，即表示您与数管局已达成协议并同意接受本协议的全部约定内容。如您不同意接受本协议的任意内容，或者无法准确理解相关条款含义的，请不要进行后续操作。")]),n("br"),n("p",[t._v("1.您具备完全民事行为能力。无民事行为能力或限制行为能力的用户，请务必在监护人的指导下阅读本协议和使用本产品。若您是中国大陆以外的用户，您还需同时遵守您所属国家或地区的法律，且您确认，订立并履行本协议不受您所属、所居住或开展经营活动或其他业务的国家或地区法律法规的限制。")]),n("br"),n("p",[t._v("2.开通本产品时，您需要向数管局提供您本人的信息，包括但不限于姓名、身份证号、手机号码等并授权数管局基于向您提供本产品相关服务使用您的个人信息。您授权数管局保留您在使用本产品期间所形成的相关信息数据，该授权在您终止使用本产品后法定期限内继续有效。您同意将您的信息传输到数管局客户端并进行展示。")]),n("br"),n("p",[t._v("3.数管局依据审核情况决定是否为您开通本产品，并有权决定增加、减少或变更本产品的功能。")]),n("br"),n("p",[t._v("4.您知晓并了解本产品的所有使用规则，并承诺遵照规则使用本产品，您不得通过不正当的手段或其他不公平的手段使用本产品和服务。您使用本产品时实施的所有行为均应当遵守国家法律、法规并符合社会公共利益或公共道德，且遵守包括但不限于本协议相关的规则、业务条款。因您违反本条或其他不合理使用所造成的一切责任，由您自行承担。")]),n("br"),n("p",[t._v("5.您应当保管好您的支付宝账户、密码及本产品信息，且您只能在您本人的支付帐户绑定本人的本产品，否则由此造成的责任，由您自行承担。如您发生手机遗失等情况应及时修改本产品的登陆密码，修改密码前发生的损失需由本人自行承担。")]),n("br"),n("p",[t._v("本协议的生效、解释、变更、执行与争议均适用中华人民共和国法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并由数管局所在地有管辖权的人民法院管辖。")])]),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end",staticStyle:{"margin-bottom":"20px"}},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-green text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.claseModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.demo,expression:"demo == 1"}],staticClass:"citizen"},[n("v-uni-view",{staticClass:"ma"},[t._v("市民卡（百姓码）")]),n("v-uni-view",{staticClass:"search-form round commform"},[n("v-uni-input",{staticClass:"common",staticStyle:{height:"40px"},attrs:{type:"text",placeholder:"证件姓名"},model:{value:t.query.name,callback:function(e){t.$set(t.query,"name",e)},expression:"query.name"}})],1),n("v-uni-view",{staticClass:"cu-form-group commgroup",staticStyle:{height:"42px"}},[n("v-uni-view",[t._v("证件类型")]),n("v-uni-picker",{attrs:{value:t.index,"range-key":"name",range:t.cardtype},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.cardtype[t.index].name))])],1)],1),n("v-uni-view",{staticClass:"search-form round commform"},[n("v-uni-input",{staticClass:"common",attrs:{type:"text",placeholder:"输入身份证号码"},model:{value:this.idCard,callback:function(e){t.$set(this,"idCard",e)},expression:"this.idCard"}})],1),n("v-uni-view",{staticClass:"search-form commform",staticStyle:{"border-bottom":"1px solid #cbcbcb","border-top":"1px solid #cbcbcb"}},[n("v-uni-input",{staticClass:"common",attrs:{type:"text",placeholder:"手机号码"},model:{value:t.query.tel,callback:function(e){t.$set(t.query,"tel",e)},expression:"query.tel"}})],1),n("v-uni-view",{staticClass:"action getcom"},[n("v-uni-button",{staticClass:"cu-btn bg-gradual-green shadow-blur round sqbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.apply.apply(void 0,arguments)}}},[t._v("申领")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2==t.demo,expression:"demo == 2"}],staticClass:"citizen"},[n("v-uni-view",[n("v-uni-view",{staticStyle:{overflow:"hidden","margin-top":"5px","margin-left":"15px"}},[n("v-uni-image",{staticStyle:{width:"22px",height:"22px",float:"left"},attrs:{src:a("42cf"),mode:""}}),n("v-uni-text",{staticStyle:{"font-size":"15px","font-weight":"550","margin-top":"1px",float:"left","margin-left":"5px"}},[t._v("市民卡")]),n("v-uni-view",{staticClass:"img1",staticStyle:{"margin-bottom":"35px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.citizencode.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{src:"https://ljfl.hztlcgj.com/image/citizen.png",mode:""}})],1)],1)],1),n("v-uni-view",[n("v-uni-view",{staticStyle:{overflow:"hidden","margin-top":"15px","margin-left":"10px"}},[n("v-uni-image",{staticStyle:{width:"35px",height:"35px",float:"left"},attrs:{src:a("76d5"),mode:""}}),n("v-uni-text",{staticStyle:{"font-size":"15px","font-weight":"550","margin-top":"8px",float:"left"}},[t._v("百姓码")]),n("v-uni-view",{staticClass:"img1",staticStyle:{"margin-bottom":"50px",padding:"5px","padding-left":"10px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.smbtn.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:a("c556"),mode:""}})],1)],1)],1)],1)],1)],1)},o=[]},ffe6:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.setIDCard=e.editUserInfo=e.GetUserInfo=e.getChangesList=e.getScoreSigle=e.edituserPwd=void 0;var i=n(a("a1b8")),o=function(t){return i.default.httpTokenRequest({url:"api/v1/rbac/user/edituserpwd",method:"post"},t)};e.edituserPwd=o;var s=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/getSingleScoreRecord",method:"post"},t)};e.getScoreSigle=s;var r=function(t){return i.default.httpTokenRequest({url:"api/v1/score/owner/ChangesList",method:"post",data:t})};e.getChangesList=r;var d=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/GetUserInfo/"+t,method:"get"})};e.GetUserInfo=d;var u=function(t){return i.default.httpTokenRequest({url:"api/v1/app/OwnerManage/editUserInfo",method:"post"},t)};e.editUserInfo=u;var c=function(t){return i.default.httpTokenRequest({url:"api/v1/rbac/User/SetIDCard",method:"post"},t)};e.setIDCard=c}}]);