webpackJsonp([14],{TPmK:function(e,t){},sQcy:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),l=i.n(a),n=i("xVjy"),r=i("t5DY"),s=i("myXI"),o={data:function(){return{selectionRowData:[],articles:[],totalArticleNum:1,filters:{directoryId:"",origin:"",title:"",timeRange:null},colunm:[],origins:[],loadingTable:!1,pageConfig:{pageNum:1,pageSize:10,directoryId:"",origin:"",title:"",publishTimeStart:"",publishTimeEnd:""}}},created:function(){var e=this;Object(r.a)(s.getListInfoDirectory).then(function(t){e.colunm=t.result,e.colunm.unshift({directoryName:"全部"})}),Object(r.a)(s.getListAccount).then(function(t){e.origins=t.result,e.origins.unshift({infoAccountId:"",nickName:"全部"})}),this.initData()},methods:{filter:function(){var e=this.filters.timeRange?this.filters.timeRange[0]:"",t=this.filters.timeRange?this.filters.timeRange[1]:"";this.pageConfig=l()({},this.pageConfig,this.filters,{publishTimeStart:e,publishTimeEnd:t,pageNum:1}),delete this.pageConfig.timeRange,this.$refs.table.resetCurrentPage()||this.initData()},initData:function(){var e=this;this.loadingTable=!0,Object(r.a)(s.getRecycleList,l()({},this.pageConfig)).then(function(t){e.articles=t.result.list,e.totalArticleNum=t.result.total,e.loadingTable=!1})},formatterDate:function(e,t,i){return Object(n.a)(i)},handleLookDetail:function(e,t){console.log(t)},handleRecover:function(e,t){var i=this,a=t?t.id:this.parseSelected();if(!a)return this.$message({showClose:!0,type:"error",message:"请选择文章"}),!1;this.$confirm("确定恢复文章么?","提示",{}).then(function(){Object(r.a)(s.recoverRecycle,{list:a}).then(function(e){200==e.returnCode&&(i.$message({showClose:!0,message:"恢复成功!",type:"success"}),i.initData())})}).catch(function(){})},handleDelete:function(e,t){var i=this,a=t?t.id:this.parseSelected();if(!a)return this.$message({showClose:!0,type:"error",message:"请选择文章"}),!1;this.$confirm("确定彻底删除该资讯么?","提示",{}).then(function(){Object(r.a)(s.delRecycle,{list:a}).then(function(e){i.$message({showClose:!0,message:"删除成功!",type:"success"}),i.initData()})}).catch(function(){})},handleSelectionChange:function(e){this.selectionRowData=e},parseSelected:function(){var e=[];return this.selectionRowData.forEach(function(t){e.push(t.id)}),e.join(",")},changePage:function(e){var t={pageNum:e.page,pageSize:e.rows||this.pageConfig.pageSize};this.pageConfig=l()({},this.pageConfig,t),this.initData()}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("za-page-content",{attrs:{header:"已删除列表",scroll:"true"}},[i("za-table",{ref:"table",attrs:{data:e.articles,total:e.totalArticleNum,isLoading:e.loadingTable},on:{"action-change":e.changePage,"selection-change":e.handleSelectionChange}},[i("el-col",{staticStyle:{"padding-bottom":"0px"},attrs:{slot:"searchBar",span:24},slot:"searchBar"},[i("el-form",{ref:"filtersForm",attrs:{model:e.filters}},[i("el-form-item",[i("el-col",{attrs:{span:8}},[i("el-col",{attrs:{span:8}},[e._v("来源:")]),e._v(" "),i("el-col",{attrs:{span:16}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.filters.origin,callback:function(t){e.$set(e.filters,"origin",t)},expression:"filters.origin"}},e._l(e.origins,function(e){return i("el-option",{key:e.infoAccountId,attrs:{label:e.nickName,value:e.nickName}})}))],1)],1),e._v(" "),i("el-col",{attrs:{span:8,offset:4}},[i("el-col",{attrs:{span:8}},[e._v("所属栏目:")]),e._v(" "),i("el-col",{attrs:{span:16}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.filters.directoryId,callback:function(t){e.$set(e.filters,"directoryId",t)},expression:"filters.directoryId"}},e._l(e.colunm,function(e){return i("el-option",{key:e.directoryId,attrs:{label:e.directoryName,value:e.id}})}))],1)],1)],1),e._v(" "),i("el-form-item",[i("el-col",{attrs:{span:8}},[i("el-col",{attrs:{span:8}},[e._v("标题:")]),e._v(" "),i("el-col",{attrs:{span:16}},[i("el-input",{attrs:{placeholder:"搜索标题..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.filter(t)}},model:{value:e.filters.title,callback:function(t){e.$set(e.filters,"title",t)},expression:"filters.title"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8,offset:4}},[i("el-col",{attrs:{span:8}},[e._v("发布时间:")]),e._v(" "),i("el-col",{attrs:{span:16}},[i("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.filters.timeRange,callback:function(t){e.$set(e.filters,"timeRange",t)},expression:"filters.timeRange"}})],1)],1)],1),e._v(" "),i("el-form-item",[i("el-col",{attrs:{span:10}},[i("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.filter}},[e._v("查询")]),e._v(" "),i("el-button",{attrs:{type:"success"},on:{click:e.handleRecover}},[e._v("批量恢复")]),e._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:e.handleDelete}},[e._v("批量彻底删除")])],1)],1)],1)],1),e._v(" "),i("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),i("el-table-column",{attrs:{prop:"title",label:"标题",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"origin",label:"来源"}}),e._v(" "),i("el-table-column",{attrs:{prop:"requestUrl",label:"超链接"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("a",{attrs:{href:t.row.requestUrl,target:"_Blank"}},[e._v(e._s(t.row.requestUrl))])]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"directoryName",label:"所属栏目",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"crawlerTime",width:"160",formatter:e.formatterDate,label:"爬取时间"}}),e._v(" "),i("el-table-column",{attrs:{prop:"publishTime",width:"160",formatter:e.formatterDate,label:"发布时间"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){e.handleRecover(t.$index,t.row)}}},[e._v("恢复")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){e.handleDelete(t.$index,t.row)}}},[e._v("彻底删除")])]}}])})],1)],1)},staticRenderFns:[]};var u=i("VU/8")(o,c,!1,function(e){i("TPmK")},"data-v-4203ae26",null);t.default=u.exports}});
//# sourceMappingURL=14.js.map