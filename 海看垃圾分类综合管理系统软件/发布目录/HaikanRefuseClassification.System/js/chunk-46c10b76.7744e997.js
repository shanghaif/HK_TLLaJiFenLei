(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46c10b76"],{"070b":function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"g",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"c",function(){return u}),a.d(t,"a",function(){return d});var r=a("66df"),n=function(e){return r["a"].request({url:"base/household/list",method:"post",data:e})},o=function(e){return r["a"].request({url:"base/household/create",method:"post",data:e})},s=function(e){return r["a"].request({url:"base/household/huoqushequ?guid="+e,method:"get"})},i=function(e){return r["a"].request({url:"base/household/edit/"+e.guid,method:"get"})},l=function(e){return r["a"].request({url:"base/household/edit",method:"post",data:e})},c=function(e){return r["a"].request({url:"base/household/detail/"+e.guid,method:"get"})},u=function(e){return r["a"].request({url:"base/household/delete/"+e,method:"get"})},d=function(e){return r["a"].request({url:"base/household/batch",method:"get",params:e})}},"4e6d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("dz-table",{attrs:{totalCount:e.stores1.grab.query.totalCount,pageSize:e.stores1.grab.query.pageSize},on:{"on-page-change":e.handlePageChanged1,"on-page-size-change":e.handlePageSizeChanged1}},[a("div",{attrs:{slot:"searcher"},slot:"searcher"},[a("section",{staticClass:"dnc-toolbar-wrap"},[a("Row",{attrs:{gutter:16}},[a("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"24"}},[a("ButtonGroup",{staticClass:"mr3"},[a("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh1}})],1)],1)],1)],1)]),a("Table",{ref:"tables",attrs:{slot:"table",border:!1,size:"small","highlight-row":!0,data:e.stores1.grab.data,columns:e.stores1.grab.columns,"row-class-name":e.rowClsRender},on:{"on-select":e.handleSelect,"on-refresh":e.handleRefresh1,"on-page-change":e.handlePageChanged1,"on-page-size-change":e.handlePageSizeChanged1,"on-sort-change":e.handleSortChange1},slot:"table",scopedSlots:e._u([{key:"action",fn:function(t){var r=t.row;t.index;return[a("Tooltip",{attrs:{placement:"top",content:"详情",delay:1e3,transfer:!0}},[a("Button",{directives:[{name:"can",rawName:"v-can",value:"show1",expression:"'show1'"}],attrs:{type:"warning",size:"small",shape:"circle",icon:"md-search"},on:{click:function(t){return e.handleDetail(r)}}})],1)]}}])})],1)],1),a("Drawer",{attrs:{title:"赋分记录",width:"90%","mask-closable":!1,mask:!0},model:{value:e.formModelopened,callback:function(t){e.formModelopened=t},expression:"formModelopened"}},[a("Card",[a("dz-table",{attrs:{totalCount:e.stores.grab.query.totalCount,pageSize:e.stores.grab.query.pageSize},on:{"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged}},[a("div",{attrs:{slot:"searcher"},slot:"searcher"},[a("section",{staticClass:"dnc-toolbar-wrap"},[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"16"}},[a("Form",{attrs:{inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",[a("Select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择街道"},on:{"on-change":e.xz},model:{value:e.stores.grab.query.street,callback:function(t){e.$set(e.stores.grab.query,"street",t)},expression:"stores.grab.query.street"}},e._l(this.stores.grab.sources.town,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1),a("Select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择社区"},on:{"on-change":e.sq},model:{value:e.stores.grab.query.ccmmunity,callback:function(t){e.$set(e.stores.grab.query,"ccmmunity",t)},expression:"stores.grab.query.ccmmunity"}},e._l(this.stores.grab.sources.college,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1),a("FormItem",[a("Input",{staticStyle:{width:"150px"},attrs:{type:"text",search:"",clearable:!0,placeholder:"请输入地址"},on:{"on-search":function(t){return e.handleSearchData()}},model:{value:e.stores.grab.query.kw1,callback:function(t){e.$set(e.stores.grab.query,"kw1",t)},expression:"stores.grab.query.kw1"}})],1),a("FormItem",[a("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"赋分状态"},on:{"on-change":function(t){return e.handleSearchData()}},model:{value:e.stores.grab.query.isScore,callback:function(t){e.$set(e.stores.grab.query,"isScore",t)},expression:"stores.grab.query.isScore"}},e._l(e.stores.grab.sources.isSources,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.text))])}),1)],1),a("FormItem",[a("Select",{staticStyle:{width:"100px"},attrs:{placeholder:"赋分渠道"},on:{"on-change":function(t){return e.handleSearchData()}},model:{value:e.stores.grab.query.markType,callback:function(t){e.$set(e.stores.grab.query,"markType",t)},expression:"stores.grab.query.markType"}},e._l(e.stores.grab.mark,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.value))])}),1)],1),a("FormItem",[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",format:"yyyy/MM/dd",placement:"top",placeholder:"输入时间搜索...",confirm:!0,editable:!1},on:{"on-ok":function(t){return e.handleSearchData()}},model:{value:e.stores.grab.query.time,callback:function(t){e.$set(e.stores.grab.query,"time",t)},expression:"stores.grab.query.time"}})],1)],1)],1),a("Col",{staticClass:"dnc-toolbar-btns",attrs:{span:"8"}},[a("ButtonGroup",{staticClass:"mr3"},[a("Button",{attrs:{icon:"md-refresh",title:"刷新"},on:{click:e.handleRefresh}})],1)],1)],1)],1)]),a("Table",{ref:"tables",attrs:{slot:"table",border:!1,size:"small","highlight-row":!0,data:e.stores.grab.data,columns:e.stores.grab.columns,"row-class-name":e.rowClsRender},on:{"on-select":e.handleSelect,"on-selection-change":e.handleSelectionChange,"on-refresh":e.handleRefresh,"on-page-change":e.handlePageChanged,"on-page-size-change":e.handlePageSizeChanged,"on-sort-change":e.handleSortChange},slot:"table",scopedSlots:e._u([{key:"Score",fn:function(t){var r=t.row;t.index;return[a("Tag",{attrs:{color:e.renderScore(r.isScore).color}},[e._v(e._s(e.renderScore(r.isScore).text))])]}},{key:"action",fn:function(t){var r=t.row;t.index;return[a("Poptip",{attrs:{confirm:"",transfer:!0,title:"确定要为其赋分吗?"},on:{"on-ok":function(t){return e.handleEdit(r)}}},[a("Tooltip",{attrs:{placement:"top",content:"赋分",delay:1e3,transfer:!0}},[a("Button",{directives:[{name:"can",rawName:"v-can",value:"edit",expression:"'edit'"},{name:"show",rawName:"v-show",value:"已投放"==r.isScore,expression:"row.isScore == '已投放'"}],attrs:{type:"primary",size:"small",shape:"circle",icon:"md-create"}})],1)],1),a("Poptip",{attrs:{confirm:"",transfer:!0,title:"确定要取消其赋分吗?"},on:{"on-ok":function(t){return e.handleEditNo(r)}}},[a("Tooltip",{attrs:{placement:"top",content:"投放",delay:1e3,transfer:!0}},[a("Button",{directives:[{name:"can",rawName:"v-can",value:"edit",expression:"'edit'"},{name:"show",rawName:"v-show",value:"已赋分"==r.isScore,expression:"row.isScore == '已赋分'"}],attrs:{type:"primary",size:"small",shape:"circle",icon:"md-create"}})],1)],1)]}}])})],1)],1)],1)],1)},n=[],o=(a("55dd"),a("ac6a"),a("4f7f"),a("5df3"),a("1c4c"),a("dc44")),s=a("96ee"),i=a("838a"),l=a("c60f"),c=a("070b"),u={name:"rbac_user_page",components:{DzTable:o["a"]},data:function(){return{commands:{delete:{name:"delete",title:"删除"},recover:{name:"recover",title:"恢复"}},formModelopened:!1,formModel:{opened:!1,title:"创建用户",mode:"create",selection:[],fields:{loginName:"",realName:"",passWord:"",userType:0,isDeleted:0,systemRoleUuid:"",userIdCard:"",departmentUuid:""},rules:{loginName:[{type:"string",required:!0,message:"请输入登录名",min:3}],realName:[],password:[]}},formAssignRole:{userGuid:"",opened:!1,ownedRoles:[],inited:!1,roles:[]},list33:[],stores1:{grab:{query:{totalCount:0,pageSize:30,currentPage:1,kw1:"",isDeleted:0,status:-1,sort:[{direct:"DESC",field:"ID"}]},columns:[{title:"社区",key:"ccmmunity"},{title:"赋分总数",key:"score"},{title:"操作",align:"center",width:150,className:"table-command-column",slot:"action"}],data:[]}},stores:{grab:{query:{totalCount:0,pageSize:20,currentPage:1,kw:"",kw1:"",time:"",isScore:"已赋分",vuuid:this.$store.state.user.villageGuid,street:"",ccmmunity:"",markType:"全部",isDeleted:0,status:-1,sort:[{direct:"DESC",field:"ID"}]},mark:[{value:"全部"},{value:"家庭码"},{value:"百姓码"},{value:"市民卡"}],sources:{college:["全部"],town:["全部"],isSources:[{value:"全部",text:"全部"},{value:"已投放",text:"已投放"},{value:"已赋分",text:"已赋分"}],userTypes:[{value:0,text:"超级管理员"},{value:1,text:"管理员"},{value:2,text:"普通用户"}],isDeletedSources:[{value:-1,text:"全部"},{value:0,text:"正常"},{value:1,text:"已删"}],statusSources:[{value:-1,text:"全部"},{value:0,text:"禁用"},{value:1,text:"正常"}],statusFormSources:[{value:0,text:"禁用"},{value:1,text:"正常"}]},columns:[{title:"住户",key:"address",ellipsis:!0,tooltip:!0,sortable:!0},{title:"箱房名",key:"roomID",ellipsis:!0,tooltip:!0},{title:"赋分渠道",key:"markType",width:100},{title:"赋分状态",key:"isScore",width:100,slot:"Score"},{title:"投放时间",key:"addTime"},{title:"赋分时间",key:"scoreAddtime"},{title:"本次积分",width:80,ellipsis:!0,tooltip:!0,key:"score"},{title:"操作",align:"center",width:80,className:"table-command-column",slot:"action"}],data:[]}},styles:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"},rolelist:[],departmentlist:[]}},computed:{formTitle:function(){return"create"===this.formModel.mode?"创建用户":"edit"===this.formModel.mode?"编辑用户":""},selectedRows:function(){return this.formModel.selection},selectedRowsId:function(){return this.formModel.selection.map(function(e){return e.garbageDisposalUuid})}},methods:{loadGrabDisList1:function(){var e=this;Object(s["f"])(this.stores1.grab.query).then(function(t){console.log(t.data.data),e.stores1.grab.data=t.data.data,e.stores1.grab.query.totalCount=t.data.totalCount})},loadGrabDisList:function(){var e=this;Object(s["e"])(this.stores.grab.query).then(function(t){console.log(t.data.data),e.stores.grab.data=t.data.data,e.stores.grab.query.totalCount=t.data.totalCount})},renderScore:function(e){var t={color:"",text:""};return"已投放"==e&&(t.color="#5cadff",t.text="已投放"),"已赋分"==e&&(t.color="#19be6b",t.text="已赋分"),t},loadDepartmentList1:function(){var e=this,t=this.$store.state.user.villageGuid;Object(c["f"])(t).then(function(t){e.list33=t.data.data;var a=Array.from(new Set(e.list33.map(function(e){return e.towns})));e.stores.grab.sources.town=a})},xz:function(e){var t=this.list33.filter(function(t){return t.towns==e});this.stores.grab.sources.college=t.map(function(e){return e.vname}),this.loadGrabDisList()},sq:function(e){"全部"==e&&(this.stores.grab.query.ccmmunity=""),this.loadGrabDisList()},doloadRoleList:function(){var e=this;Object(i["h"])().then(function(t){e.rolelist=t.data.data})},doloadDepartmentListdetail:function(){var e=this;Object(l["g"])().then(function(t){e.departmentlist=t.data.data})},handleOpenFormWindow:function(){this.formModel.opened=!0},handleCloseFormWindow:function(){this.formModel.opened=!1},handleSwitchFormModeToCreate:function(){this.formModel.mode="create"},handleSwitchFormModeToEdit:function(){this.formModel.mode="edit",this.handleOpenFormWindow()},handleEdit:function(e){this.doLoadUser(e.garbageDisposalUuid)},handleEditNo:function(e){this.doLoadUserNo(e.garbageDisposalUuid)},handleSelect:function(e,t){},handleSelectionChange:function(e){this.formModel.selection=e},handleRefresh:function(){this.loadGrabDisList()},handleRefresh1:function(){this.loadGrabDisList1()},handleShowCreateWindow:function(){this.handleSwitchFormModeToCreate(),this.handleOpenFormWindow(),this.handleResetFormUser()},handleSubmitUser:function(){var e=this.validateUserForm();e&&("create"===this.formModel.mode&&this.doCreateUser(),"edit"===this.formModel.mode&&this.doEditUser())},doCreateUser:function(){var e=this;createUser(this.formModel.fields).then(function(t){200===t.data.code?(e.$Message.success(t.data.message),e.handleCloseFormWindow(),e.loadUserList()):e.$Message.warning(t.data.message)})},doEditUser:function(){var e=this;editUser(this.formModel.fields).then(function(t){200===t.data.code?(e.$Message.success(t.data.message),e.handleCloseFormWindow(),e.loadUserList()):e.$Message.warning(t.data.message)})},validateUserForm:function(){var e=this,t=!1;return this.$refs["formUser"].validate(function(a){a?t=!0:e.$Message.error("请完善表单信息")}),t},doLoadUser:function(e){var t=this,a=e;Object(s["c"])(a).then(function(e){200===e.data.code?(t.$Message.success("赋分成功"),t.loadGrabDisList()):t.$Message.warning(e.data.message)})},doLoadUserNo:function(e){var t=this,a=e;Object(s["d"])(a).then(function(e){200===e.data.code?(t.$Message.success("取消赋分成功"),t.loadGrabDisList()):t.$Message.warning(e.data.message)})},handleDelete:function(e){this.doDelete(e.garbageDisposalUuid)},doDelete:function(e){var t=this;e?Object(s["b"])(e).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadGrabDisList(),t.formModel.selection=[]):t.$Message.warning(e.data.message)}):this.$Message.warning("请选择至少一条数据")},handleBatchCommand:function(e){var t=this;!this.selectedRowsId||this.selectedRowsId.length<=0?this.$Message.warning("请选择至少一条数据"):this.$Modal.confirm({title:"操作提示",content:"<p>确定要执行当前 ["+this.commands[e].title+"] 操作吗?</p>",loading:!0,onOk:function(){t.doBatchCommand(e)}})},doBatchCommand:function(e){var t=this;Object(s["a"])({command:e,ids:this.selectedRowsId.join(",")}).then(function(e){200===e.data.code?(t.$Message.success(e.data.message),t.loadGrabDisList(),t.formModel.selection=[]):t.$Message.warning(e.data.message),t.$Modal.remove()})},handleSearchData:function(){this.loadGrabDisList()},rowClsRender:function(e,t){return e.isDelete?"table-row-disabled":""},handleSortChange:function(e){this.stores.grab.query.sort.direction=e.order,this.stores.grab.query.sort.field=e.key,this.loadGrabDisList()},handleSortChange1:function(e){this.stores1.grab.query.sort.direction=e.order,this.stores1.grab.query.sort.field=e.key,this.loadGrabDisList1()},handlePageChanged:function(e){this.stores.grab.query.currentPage=e,this.loadGrabDisList()},handlePageChanged1:function(e){this.stores1.grab.query.currentPage=e,this.loadGrabDisList1()},handlePageSizeChanged:function(e){this.stores.grab.query.pageSize=e,this.loadGrabDisList()},handlePageSizeChanged1:function(e){this.stores1.grab.query.pageSize=e,this.loadGrabDisList1()},renderUserType:function(e){var t="未知";switch(e){case 0:t="超级管理员";break;case 1:t="管理员";break;case 2:t="普通用户";break}return t},renderStatus:function(e){var t={color:"success",text:"正常"};switch(e){case 0:t.text="禁用",t.color="error";break}return t},handleDetail:function(e){console.log(e),this.formModelopened=!0,this.stores.grab.query.ccmmunity=e.ccmmunity,this.loadGrabDisList()}},mounted:function(){this.loadDepartmentList1(),this.loadGrabDisList1(),this.doloadRoleList(),this.doloadDepartmentListdetail()}},d=u,h=a("2877"),g=Object(h["a"])(d,r,n,!1,null,null,null);t["default"]=g.exports},"838a":function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"c",function(){return o}),a.d(t,"g",function(){return s}),a.d(t,"e",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"h",function(){return u}),a.d(t,"a",function(){return d});var r=a("66df"),n=function(e){return r["a"].request({url:"rbac/role/list",method:"post",data:e})},o=function(e){return r["a"].request({url:"rbac/role/create",method:"post",data:e})},s=function(e){return r["a"].request({url:"rbac/role/edit/"+e.guid,method:"get"})},i=function(e){return r["a"].request({url:"rbac/role/edit",method:"post",data:e})},l=function(e){return r["a"].request({url:"rbac/role/delete/"+e,method:"get"})},c=function(e){return r["a"].request({url:"rbac/role/batch",method:"get",params:e})},u=function(){return r["a"].request({url:"rbac/role/find_simple_list",method:"get"})},d=function(e){return r["a"].request({url:"rbac/role/assign_permission",method:"post",data:e})}},"96ee":function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"f",function(){return c});var r=a("66df"),n=function(e){return r["a"].request({url:"grab/GrabageDisposal/list",method:"post",data:e})},o=function(e){return r["a"].request({url:"grab/GrabageDisposal/Delete/"+e,method:"get"})},s=function(e){return r["a"].request({url:"grab/GrabageDisposal/Batch",method:"post",data:e})},i=function(e){return r["a"].request({url:"grab/GrabageDisposal/disUpdate?guid="+e,method:"get"})},l=function(e){return r["a"].request({url:"grab/GrabageDisposal/disUpdateNo?guid="+e,method:"get"})},c=function(e){return r["a"].request({url:"grab/GrabageDisposal/VillageList",method:"post",data:e})}},bc57:function(e,t,a){"use strict";var r=a("ee02"),n=a.n(r);n.a},c60f:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"d",function(){return i}),a.d(t,"g",function(){return l}),a.d(t,"c",function(){return c}),a.d(t,"a",function(){return u});var r=a("66df"),n=function(e){return r["a"].request({url:"rbac/department/list",method:"post",data:e})},o=function(e){return r["a"].request({url:"rbac/department/create",method:"post",data:e})},s=function(e){return r["a"].request({url:"rbac/department/edit/"+e.guid,method:"get"})},i=function(e){return r["a"].request({url:"rbac/department/edit",method:"post",data:e})},l=function(){return r["a"].request({url:"rbac/department/DepartmentList",method:"get"})},c=function(e){return r["a"].request({url:"rbac/department/delete/"+e,method:"get"})},u=function(e){return r["a"].request({url:"rbac/department/batch",method:"get",params:e})}},dc44:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dnc-table-wrap"},[e._t("searcher",[e.searchable&&"top"===e.searchPlace?a("div",{staticClass:"search-con search-con-top"},[a("Input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"输入关键字搜索"},on:{"on-change":e.handleClear},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),a("Button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:e.handleSearch}},[a("Icon",{attrs:{type:"search"}}),e._v("  搜索\n      ")],1)],1):e._e()]),e._t("table",[e._v("暂无数据")]),a("div",{staticStyle:{"margin-top":"15px"}},[e._t("pager",[a("Page",{attrs:{total:e.totalCount,"page-size":e.pageSize,size:"small","show-elevator":"","show-sizer":"","show-total":"","page-size-opts":e.pageSizeOpts},on:{"on-change":e.onPageChanged,"on-page-size-change":e.onPageSizeChanged}})])],2)],2)},n=[],o=(a("c5f6"),{name:"DzTable",data:function(){return{searchValue:""}},props:{searchable:{type:Boolean,default:!1},searchPlace:{type:String,default:"top"},totalCount:{type:Number,default:0},pageSize:{type:Number,default:20},showRefreshButton:{type:Boolean,default:!1},pageSizeOpts:{type:Array,default:function(){return[5,10,20,30,40,50]}}},methods:{handleClear:function(){},handleSearch:function(){this.$emit("on-search")},onPageChanged:function(e){this.$emit("on-page-change",e)},onPageSizeChanged:function(e){this.$emit("on-page-size-change",e)}}}),s=o,i=(a("bc57"),a("2877")),l=Object(i["a"])(s,r,n,!1,null,null,null);t["a"]=l.exports},ee02:function(e,t,a){}}]);