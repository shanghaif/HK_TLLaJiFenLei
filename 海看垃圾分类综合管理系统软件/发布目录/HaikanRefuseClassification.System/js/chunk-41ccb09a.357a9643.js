(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ccb09a"],{"070b":function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"b",function(){return r}),a.d(t,"f",function(){return n}),a.d(t,"g",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"h",function(){return d}),a.d(t,"c",function(){return c}),a.d(t,"a",function(){return u});var o=a("66df"),s=function(e){return o["a"].request({url:"base/household/list",method:"post",data:e})},r=function(e){return o["a"].request({url:"base/household/create",method:"post",data:e})},n=function(e){return o["a"].request({url:"base/household/huoqushequ?guid="+e,method:"get"})},l=function(e){return o["a"].request({url:"base/household/edit/"+e.guid,method:"get"})},i=function(e){return o["a"].request({url:"base/household/edit",method:"post",data:e})},d=function(e){return o["a"].request({url:"base/household/detail/"+e.guid,method:"get"})},c=function(e){return o["a"].request({url:"base/household/delete/"+e,method:"get"})},u=function(e){return o["a"].request({url:"base/household/batch",method:"get",params:e})}},b0fb:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("dz-table",{attrs:{totalCount:e.stores.grab.query.totalCount,pageSize:e.stores.grab.query.pageSize},on:{"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged}},[a("div",{attrs:{slot:"searcher"},slot:"searcher"},[a("section",{staticClass:"dnc-toolbar-wrap"},[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"16"}},[a("Form",{attrs:{inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",[a("Select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择街道"},on:{"on-change":e.xz},model:{value:e.stores.grab.query.street,callback:function(t){e.$set(e.stores.grab.query,"street",t)},expression:"stores.grab.query.street"}},e._l(this.stores.grab.sources.town,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1),a("Select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择社区"},on:{"on-change":e.sq},model:{value:e.stores.grab.query.ccmmunity,callback:function(t){e.$set(e.stores.grab.query,"ccmmunity",t)},expression:"stores.grab.query.ccmmunity"}},e._l(this.stores.grab.sources.college,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1),a("FormItem",[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",search:"",clearable:!0,placeholder:"请输入问题类型"},on:{"on-search":function(t){return e.handleSearchDispatch()}},model:{value:e.stores.grab.query.kw,callback:function(t){e.$set(e.stores.grab.query,"kw",t)},expression:"stores.grab.query.kw"}})],1),a("FormItem",[a("Select",{staticStyle:{width:"150px"},attrs:{placeholder:"所在箱房",clearable:""},on:{"on-change":function(t){return e.handleSearchDispatch()}},model:{value:e.stores.grab.query.kw1,callback:function(t){e.$set(e.stores.grab.query,"kw1",t)},expression:"stores.grab.query.kw1"}},e._l(e.stores.grab.sources.question,function(t){return a("Option",{key:t.garbageRoomUuid,attrs:{value:t.garbageRoomUuid}},[e._v(e._s(t.ljname))])}),1)],1)],1)],1),a("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"8"}},[a("ButtonGroup",{staticClass:"mr3"},[a("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh}})],1)],1)],1)],1)]),a("Table",{ref:"tables",attrs:{slot:"table",border:!1,size:"small","highlight-row":!0,data:e.stores.grab.data,columns:e.stores.grab.columns,"row-class-name":e.rowClsRender},on:{"on-select":e.handleSelect,"on-selection-change":e.handleSelectionChange,"on-refresh":e.handleRefresh,"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged,"on-sort-change":e.handleSortChange},slot:"table",scopedSlots:e._u([{key:"auditState",fn:function(t){var o=t.row;t.index;return[a("span",[e._v(e._s(e.renderAuditState(o.auditState)))])]}},{key:"action",fn:function(t){var o=t.row;t.index;return[a("Tooltip",{attrs:{placement:"top",content:"编辑",delay:1e3,transfer:!0}},[""==o.estimate||null==o.estimate?a("Button",{directives:[{name:"can",rawName:"v-can",value:"edit",expression:"'edit'"}],attrs:{type:"primary",size:"small",shape:"circle",icon:"md-create"},on:{click:function(t){return e.handleEdit(o)}}}):e._e()],1),a("Tooltip",{attrs:{placement:"top",content:"详情",delay:1e3,transfer:!0}},[a("Button",{directives:[{name:"can",rawName:"v-can",value:"show",expression:"'show'"}],attrs:{type:"warning",size:"small",shape:"circle",icon:"md-search"},on:{click:function(t){return e.handleDetail(o)}}})],1)]}}])})],1)],1),a("Drawer",{attrs:{title:"处理",width:"400","mask-closable":!1,mask:!0},model:{value:e.formModel.opened,callback:function(t){e.$set(e.formModel,"opened",t)},expression:"formModel.opened"}},[a("Form",{ref:"formdispatch",attrs:{model:e.formModel.fields,"label-position":"top"}},[a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"处理结果",prop:"estimate"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入处理结果"},model:{value:e.formModel.fields.estimate,callback:function(t){e.$set(e.formModel.fields,"estimate",t)},expression:"formModel.fields.estimate"}})],1)],1)],1),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{attrs:{icon:"md-checkmark-circle",type:"primary"},on:{click:e.handleSubmitConsumable}},[e._v("保 存")]),a("Button",{staticStyle:{"margin-left":"30px"},attrs:{icon:"md-close"},on:{click:function(t){e.formModel.opened=!1}}},[e._v("取 消")])],1)],1),a("Drawer",{attrs:{title:"问题反馈详情",width:"400","mask-closable":!1,mask:!0},model:{value:e.formModel1.opened,callback:function(t){e.$set(e.formModel1,"opened",t)},expression:"formModel1.opened"}},[a("Form",{ref:"formdispatch",attrs:{model:e.formModel1.fields,"label-position":"top"}},[a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈人",prop:"addPeople"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.addPeople,callback:function(t){e.$set(e.formModel1.fields,"addPeople",t)},expression:"formModel1.fields.addPeople"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈车辆",prop:"carNum"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.carNum,callback:function(t){e.$set(e.formModel1.fields,"carNum",t)},expression:"formModel1.fields.carNum"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈箱房",prop:"ljname"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.ljname,callback:function(t){e.$set(e.formModel1.fields,"ljname",t)},expression:"formModel1.fields.ljname"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈问题",prop:"queType"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.queType,callback:function(t){e.$set(e.formModel1.fields,"queType",t)},expression:"formModel1.fields.queType"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈街道",prop:"towns"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.towns,callback:function(t){e.$set(e.formModel1.fields,"towns",t)},expression:"formModel1.fields.towns"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈社区",prop:"vname"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.vname,callback:function(t){e.$set(e.formModel1.fields,"vname",t)},expression:"formModel1.fields.vname"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"反馈时间",prop:"addTime"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.addTime,callback:function(t){e.$set(e.formModel1.fields,"addTime",t)},expression:"formModel1.fields.addTime"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"备注",prop:"remarks"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.remarks,callback:function(t){e.$set(e.formModel1.fields,"remarks",t)},expression:"formModel1.fields.remarks"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"处理结果",prop:"estimate"}},[a("Input",{attrs:{readonly:"",type:"textarea",placeholder:"无"},model:{value:e.formModel1.fields.estimate,callback:function(t){e.$set(e.formModel1.fields,"estimate",t)},expression:"formModel1.fields.estimate"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"处理时间",prop:"esttime"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.esttime,callback:function(t){e.$set(e.formModel1.fields,"esttime",t)},expression:"formModel1.fields.esttime"}})],1)],1),a("Row",{attrs:{gutter:16}},[a("FormItem",{attrs:{label:"处理人",prop:"estpeople"}},[a("Input",{attrs:{readonly:"",placeholder:"无"},model:{value:e.formModel1.fields.estpeople,callback:function(t){e.$set(e.formModel1.fields,"estpeople",t)},expression:"formModel1.fields.estpeople"}})],1)],1)],1),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{icon:"md-close"},on:{click:function(t){e.formModel1.opened=!1}}},[e._v("取 消")])],1)],1)],1)},s=[],r=(a("55dd"),a("ac6a"),a("4f7f"),a("5df3"),a("1c4c"),a("dc44")),n=a("66df"),l=function(e){return n["a"].request({url:"grab/Question/list",method:"post",data:e})},i=function(e){return n["a"].request({url:"grab/Question/huoqu",method:"post",data:e})},d=function(e){return n["a"].request({url:"grab/Question/EditQuestion",method:"post",data:e})},c=function(e){return n["a"].request({url:"grab/Question/ShowQuestion?guid="+e,method:"get"})},u=function(e){return n["a"].request({url:"grab/Question/batch",method:"get",params:e})},m=a("070b"),f={name:"question",components:{DzTable:r["a"]},data:function(){return{formModel:{opened:!1,title:"处理",selection:[],fields:{guid:"",estimate:""}},formModel1:{opened:!1,title:"问题反馈详情",selection:[],fields:{guid:"",addPeople:"",carNum:"",ljname:"",queType:"",towns:"",vname:"",addTime:"",estimate:"",esttime:"",estpeople:"",remarks:""}},commands:{delete:{name:"delete",title:"删除"},recover:{name:"recover",title:"恢复"}},list33:[],stores:{grab:{query:{totalCount:0,pageSize:20,currentPage:1,kw:"",kw1:"",vuuid:this.$store.state.user.villageGuid,street:"",ccmmunity:"",isDelete:0,status:-1,sort:[{direct:"DESC",field:"ID"}]},sources:{college:["全部"],town:["全部"],question:[{garbageRoomUuid:"0",ljname:"全部"}]},columns:[{type:"selection",width:50,key:"questionUuid"},{title:"问题类型",key:"queType",sortable:!0},{title:"问题箱房",key:"ljname"},{title:"反馈车辆",key:"carNum"},{title:"街道",key:"towns"},{title:"社区",key:"vname"},{title:"时间",key:"addTime"},{title:"操作",align:"center",width:150,className:"table-command-column",slot:"action"}],data:[]}}}},computed:{selectedRows:function(){return this.formModel.selection},selectedRowsId:function(){return this.formModel.selection.map(function(e){return e.questionUuid})}},methods:{loadCarDispatchList:function(){var e=this;l(this.stores.grab.query).then(function(t){e.stores.grab.data=t.data.data,e.stores.grab.query.totalCount=t.data.totalCount})},loadDepartmentList2:function(){var e=this;i().then(function(t){e.stores.grab.sources.question=t.data.data})},handlePageChanged:function(e){this.stores.grab.query.currentPage=e,this.loadCarDispatchList()},handlePageSizeChanged:function(e){this.stores.grab.query.pageSize=e,this.loadCarDispatchList()},rowClsRender:function(e,t){return e.isDeleted?"table-row-disabled":""},handleSearchDispatch:function(){this.loadCarDispatchList()},handleRefresh:function(){this.loadCarDispatchList()},handleBatchCommand:function(e){var t=this;!this.selectedRowsId||this.selectedRowsId.length<=0?this.$Message.warning("请选择至少一条数据"):this.$Modal.confirm({title:"操作提示",content:"<p>确定要执行当前 ["+this.commands[e].title+"] 操作吗?</p>",loading:!0,onOk:function(){t.doBatchCommand(e)}})},doBatchCommand:function(e){var t=this;u({command:e,ids:this.selectedRowsId.join(",")}).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadCarDispatchList(),t.formModel.selection=[]):t.$Message.warning(e.data.message),t.$Modal.remove()})},handleSelect:function(e,t){},handleSelectionChange:function(e){this.formModel.selection=e},loadDepartmentList1:function(){var e=this,t=this.$store.state.user.villageGuid;Object(m["f"])(t).then(function(t){e.list33=t.data.data;var a=Array.from(new Set(e.list33.map(function(e){return e.towns})));e.stores.grab.sources.town=a})},xz:function(e){var t=this.list33.filter(function(t){return t.towns==e});this.stores.grab.sources.college=t.map(function(e){return e.vname}),this.loadCarDispatchList()},sq:function(e){"全部"==e&&(this.stores.grab.query.ccmmunity=""),this.loadCarDispatchList()},handleResetFormDispatch:function(){this.$refs["formdispatch"].resetFields()},handleEdit:function(e){this.formModel.opened=!0,this.handleResetFormDispatch(),this.doShowQuestion(e.questionUuid)},handleDetail:function(e){var t=this;console.log(e),this.formModel1.opened=!0,this.handleResetFormDispatch();var a=e.questionUuid;c(a).then(function(o){200==o.data.code&&(t.formModel1.fields=o.data.data,t.formModel1.fields.guid=a,t.formModel1.fields.addPeople=e.addPeople,t.formModel1.fields.ljname=e.ljname,t.formModel1.fields.towns=e.towns,t.formModel1.fields.vname=e.vname,t.formModel1.fields.carNum=e.carNum)})},doShowQuestion:function(e){var t=this,a=e;c(a).then(function(e){200==e.data.code&&(t.formModel.fields=e.data.data,t.formModel.fields.guid=a)})},handleSubmitConsumable:function(){var e=this;null!=this.formModel.fields.estimate&&""!=this.formModel.fields.estimate?d(this.formModel.fields).then(function(t){200===t.data.code?(e.$Message.success(t.data.message),e.loadCarDispatchList(),e.formModel.selection=[],e.formModel.opened=!1):e.$Message.warning(t.data.message)}):this.$Message.warning("请输入处理结果")},handleSortChange:function(e){this.stores.grab.query.sort.direction=e.order,this.stores.grab.query.sort.field=e.key,this.loadCarDispatchList()}},mounted:function(){this.loadDepartmentList1(),this.loadCarDispatchList(),this.loadDepartmentList2()}},h=f,p=a("2877"),g=Object(p["a"])(h,o,s,!1,null,null,null);t["default"]=g.exports},bc57:function(e,t,a){"use strict";var o=a("ee02"),s=a.n(o);s.a},dc44:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dnc-table-wrap"},[e._t("searcher",[e.searchable&&"top"===e.searchPlace?a("div",{staticClass:"search-con search-con-top"},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[a("Icon",{attrs:{type:"search"}}),e._v("  搜索\n      ")],1)],1):e._e()]),e._t("table",[e._v("暂无数据")]),a("div",{staticStyle:{"margin-top":"15px"}},[e._t("pager",[a("Page",{attrs:{total:e.totalCount,"page-size":e.pageSize,size:"small","show-elevator":"","show-sizer":"","show-total":"","page-size-opts":e.pageSizeOpts},on:{"on-change":e.onPageChanged,"on-page-size-change":e.onPageSizeChanged}})])],2)],2)},s=[],r=(a("c5f6"),{name:"DzTable",data:function(){return{searchValue:""}},props:{searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"},totalCount:{type:Number,default:0},pageSize:{type:Number,default:20},showRefreshButton:{type:Boolean,default:!1},pageSizeOpts:{type:Array,default:function(){return[5,10,20,30,40,50]}}},methods:{handleClear:function(){},handleSearch:function(){this.$emit("on-search")},onPageChanged:function(e){this.$emit("on-page-change",e)},onPageSizeChanged:function(e){this.$emit("on-page-size-change",e)}}}),n=r,l=(a("bc57"),a("2877")),i=Object(l["a"])(n,o,s,!1,null,null,null);t["a"]=i.exports},ee02:function(e,t,a){}}]);