webpackJsonp([3],{"0xDb":function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i=function(t,e,a){var i;return function(){var l=this,r=arguments;if(i&&clearTimeout(i),a){var o=!i;i=setTimeout(function(){i=null},e),o&&t.apply(l,r)}else i=setTimeout(function(){t.apply(l,r)},e)}}},MznX:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return l}),a.d(e,"c",function(){return r});var i=[{label:"全部",value:""},{label:"草稿",value:"01"},{label:"上线",value:"04"},{label:"下线",value:"05"}],l=[{value:"01",label:"样式一（文字）"},{value:"02",label:"样式二（栏目）"},{value:"03",label:"样式三（PK）"},{value:"04",label:"样式四（视频）"}],r=[{value:"",label:"全部"},{value:"01",label:"样式一（文字）"},{value:"02",label:"样式二（栏目）"},{value:"03",label:"样式三（PK）"},{value:"04",label:"样式四（视频）"}]},f0Ye:function(t,e){},"oZ+5":function(t,e){},qNvm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),r=a("xVjy"),o=a("mvHQ"),n=a.n(o),s=a("t5DY"),c=a("myXI"),u=a("0xDb"),d=a("NYxO"),p=a("PJh5"),f=a.n(p),m="添加资讯",h="编辑资讯",g={data:function(){return{ajaxUrl:c,uploadServer:c.uploadArticleImage,articleData:{},dialogFormVisible:!1,dialogTitle:"",content:"",columnListData:[],articleLabels:[],dialogImageUrl:"",dialogVisible:!1,loading:!1,submitImageUrl:"",templateType:[{value:"v1",label:"外部爬取内容"},{value:"v2",label:"众安原创内容"}],formValidate:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{max:40,message:"最多40个字",trigger:"blur"}],directoryId:[{required:!0,message:"请选择所属栏目",trigger:"blur"}],infoAccountId:[{required:!0,message:"请选择来源",trigger:"blur"}],labels:[{required:!0,message:"请选择标签",trigger:"blur",type:"array"}]}}},methods:{debounceFunc:u.a,show:function(t,e){e.labels=e.labels?this.parseLabelData(e.labels):[],"全部"===this.columnList[0].directoryName&&this.columnList.shift(),this.columnListData=this.columnList,"add"===t?(this.dialogTitle=m,this.articleData=l()({},e,{imageList:[],productList:[],isTimeliness:"N",isLinkProduct:"N"})):(this.dialogTitle=h,this.articleData=e,this.articleData.productList=this.articleData.productList||[],this.articleData.imageList=this.articleData.imageList||[],this.articleData.validityDate=f()(this.articleData.validityDate).format("YYYY/MM/DD HH:mm:ss"),this.parseArticleType(e.articleType)),this.dialogFormVisible=!0},hide:function(){this.articleData.imageList=[],this.$refs.form.resetFields(),this.submitImageUrl=""},formatPublishTime:function(t){this.articleData.publishTime=t.getTime()},validityForm:function(){var t=!1;return this.$refs.form.validate(function(e){e&&(t=!0)}),t},ctrlSubmitData:function(){var t=l()({},this.articleData);t.labels=this.handleLabelData(t.labels),this.submitImageUrl?t.coverImage=this.submitImageUrl:t.coverImage=this.parseCoverImage(t.imageList),delete t.imageList,delete t.columnData;var e=t.productList.filter(function(t){return!!t.imageUrl&&!!t.url});return t.productList=n()(e),t},saveArticle:function(t){var e=this;if(!this.validityForm())return!1;var a=this.ctrlSubmitData();this.loading=!0,this.dialogTitle===m?(a.status="04",Object(s.a)(c.saveInfoArticle,a).then(function(t){e.loading=!1,e.dialogFormVisible=!1,e.$emit("submit-article")})):(a.status="saveNormal"===t.currentTarget.id?a.status:"04","01"===a.articleType&&(a.content=n()(l()({},a.content,{extraContent:this.articleData.extraContent}))),Object(s.a)(c.updateInfoArticle,a).then(function(t){e.loading=!1,e.dialogFormVisible=!1,e.$emit("submit-article")}))},onContentChange:function(t){this.articleData.content=t},extraContentChange:function(t){this.articleData.extraContent=t},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleRemove:function(t,e){var a=[];this.articleData.imageList.find(function(e,a,i){t.uid===e.uid&&i.splice(a,1)}),e.forEach(function(t){a.push(t.url)}),this.submitImageUrl=a.join(",")},changeImage:function(t,e){},handleCoverSuccess:function(t,e){var a=[];this.articleData.imageList.push({url:t.result}),this.articleData.imageList.forEach(function(t){a.push(t.url)}),this.submitImageUrl=a.join(",")},beforeCoverUpload:function(t){},parseLabelData:function(t){return t.split(",").map(function(t){return t})},parseArticleType:function(t){if("01"===t){var e=JSON.parse(this.articleData.content);this.articleData.content={title:e.title,content:e.content},this.articleData.extraContent=e.extraContent}},handleLabelData:function(t){var e=[];return t.forEach(function(t){e.push(t)}),e.join(",")},parseCoverImage:function(t){var e=[];return t.forEach(function(t){e.push(t.url)}),e.join(",")},getLabels:function(){var t=this;Object(s.a)(c.getArticleLabel,{articleId:this.articleData.articleId}).then(function(e){e.result.forEach(function(e){-1===t.articleData.labels.indexOf(e)&&t.articleData.labels.push(e)})})},addProduction:function(){this.articleData.productList.push({imageUrl:"",url:""})},arrayIndexReplace:function(t,e,a,i){var l=void 0;"up"===i?(l=t[a-1],t[a-1]=e):(l=t[a+1],t[a+1]=e),t[a]=l,this.$set(t,a,t[a])},spliceData:function(t,e){t.splice(e,1)},handleProductionSuccess:function(t,e,a){a.imageUrl=t.result},queryLabels:function(t){var e=this;t?Object(s.a)(c.getLabels,{labelName:t}).then(function(t){e.articleLabels=t.result}):this.articleLabels=[]}},computed:l()({},Object(d.c)(["columnList","infoAccount"]))},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit-article-dialog"},[a("el-dialog",{attrs:{customClass:"dialog-wrap",title:t.dialogTitle,visible:t.dialogFormVisible,width:"680px",top:"5vh",center:!0},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.hide}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",attrs:{model:t.articleData,rules:t.formValidate,"label-position":"left","label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:23}},[a("span",{staticClass:"title-tip"},[t._v("注: 最多40个字")]),t._v(" "),a("el-form-item",{attrs:{label:"标题:",prop:"title"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入资讯标题"},model:{value:t.articleData.title,callback:function(e){t.$set(t.articleData,"title",e)},expression:"articleData.title"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:18}},[a("el-form-item",{attrs:{label:"标签:",prop:"labels"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",multiple:"","allow-create":"",remote:"","remote-method":t.debounceFunc(t.queryLabels,300,!1),placeholder:"请选择标签"},model:{value:t.articleData.labels,callback:function(e){t.$set(t.articleData,"labels",e)},expression:"articleData.labels"}},t._l(t.articleLabels,function(t,e){return a("el-option",{key:e,attrs:{label:t.labelName,value:t.labelName}})}))],1)],1),t._v(" "),"编辑资讯"===t.dialogTitle?a("el-col",{attrs:{span:5}},[a("el-button",{staticClass:"get-label-btn",attrs:{type:"primary"},on:{click:t.getLabels}},[t._v("获取分词结果")])],1):t._e()],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"作者:",inline:"true"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入文章作者"},model:{value:t.articleData.author,callback:function(e){t.$set(t.articleData,"author",e)},expression:"articleData.author"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"directoryId",label:"所属栏目:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属栏目"},model:{value:t.articleData.directoryId,callback:function(e){t.$set(t.articleData,"directoryId",e)},expression:"articleData.directoryId"}},t._l(t.columnListData,function(t){return a("el-option",{key:t.id,attrs:{label:t.directoryName,value:t.id}})}))],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"infoAccountId",label:"来源:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:!0,placeholder:"请选择所属栏目"},model:{value:t.articleData.infoAccountId,callback:function(e){t.$set(t.articleData,"infoAccountId",e)},expression:"articleData.infoAccountId"}},t._l(t.infoAccount,function(t,e){return a("el-option",{key:e,attrs:{label:t.nickName,value:t.infoAccountId}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择发布时间"},on:{change:t.formatPublishTime},model:{value:t.articleData.publishTime,callback:function(e){t.$set(t.articleData,"publishTime",e)},expression:"articleData.publishTime"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"资讯时效性:"}},[a("el-radio",{attrs:{label:"N"},model:{value:t.articleData.isTimeliness,callback:function(e){t.$set(t.articleData,"isTimeliness",e)},expression:"articleData.isTimeliness"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"Y"},model:{value:t.articleData.isTimeliness,callback:function(e){t.$set(t.articleData,"isTimeliness",e)},expression:"articleData.isTimeliness"}},[t._v("是")])],1)],1),t._v(" "),"Y"===t.articleData.isTimeliness?a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"有效截止时间:"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择截止时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.articleData.validityDate,callback:function(e){t.$set(t.articleData,"validityDate",e)},expression:"articleData.validityDate"}})],1)],1):t._e()],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"展示模板:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择模板类型"},model:{value:t.articleData.extraInfo,callback:function(e){t.$set(t.articleData,"extraInfo",e)},expression:"articleData.extraInfo"}},t._l(t.templateType,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"封面:"}},[a("el-upload",{ref:"upload",attrs:{"auto-upload":!0,"on-change":t.changeImage,action:t.ajaxUrl.baseUrl+t.ajaxUrl.uploadArticleImage,"file-list":t.articleData.imageList,"before-upload":t.beforeCoverUpload,"on-success":t.handleCoverSuccess,limit:5,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("div",{staticClass:"upload-tip",attrs:{slot:"tip"},slot:"tip"},[t._v("建议宽高比200:120")])])],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"摘要:"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off",maxlength:40,placeholder:"请输入摘要"},model:{value:t.articleData.summary,callback:function(e){t.$set(t.articleData,"summary",e)},expression:"articleData.summary"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:23}},["00"!==t.articleData.articleType&&"02"!==t.articleData.articleType&&t.articleData.articleType?a("div",{staticStyle:{"margin-bottom":"30px"}},[a("el-form-item",{attrs:{label:"视频标题:"}},[a("el-input",{attrs:{placeholder:"请输入title"},model:{value:t.articleData.content.title,callback:function(e){t.$set(t.articleData.content,"title",e)},expression:"articleData.content.title"}})],1),t._v(" "),a("el-table",{attrs:{data:t.articleData.content.content,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:"文本:"}},[a("el-input",{staticStyle:{width:"80%","margin-left":"8px"},model:{value:e.row.text,callback:function(a){t.$set(e.row,"text",a)},expression:"scopeRoot.row.text"}})],1),t._v(" "),a("el-table",{attrs:{data:e.row.videos}},[a("el-table-column",{attrs:{type:"index",label:"排序",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频链接",prop:"src"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入视频链接"},model:{value:e.row.src,callback:function(a){t.$set(e.row,"src",a)},expression:"scope.row.src"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(i){return[1!==e.row.videos.length&&0!==i.$index?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-up",type:"primary"},on:{click:function(a){t.arrayIndexReplace(e.row.videos,i.row,i.$index,"up")}}}):t._e(),t._v(" "),i.$index!==e.row.videos.length-1?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-down",type:"primary"},on:{click:function(a){t.arrayIndexReplace(e.row.videos,i.row,i.$index,"down")}}}):t._e(),t._v(" "),a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(a){t.spliceData(e.row.videos,i.$index)}}})]}}])})],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"封面图",prop:"coverImg"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.coverImg?a("img",{attrs:{src:e.row.coverImg,alt:"封面图"}}):a("span",[t._v("无")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"文本",prop:"text"}}),t._v(" "),a("el-table-column",{attrs:{label:"视频数",prop:"voides",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videos.length>0?a("span",[t._v(t._s(e.row.videos.length)+"个")]):a("span",[t._v("无")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==e.row.videos.length&&0!==e.$index?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-up",type:"primary"},on:{click:function(a){t.arrayIndexReplace(t.articleData.content.content,e.row,e.$index,"up")}}}):t._e(),t._v(" "),e.$index!==e.row.videos.length-1?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-down",type:"primary"},on:{click:function(a){t.arrayIndexReplace(t.articleData.content.content,e.row,e.$index,"down")}}}):t._e(),t._v(" "),a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(a){t.spliceData(t.articleData.content.content,e.$index)}}})]}}])})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"},attrs:{label:"正文:"}},[a("za-editor",{ref:"editor",attrs:{id:"editor_id",height:"500px",width:"500px",minWidth:500,resizeType:1,urlType:"absolut",content:t.articleData.extraContent,loadStyleMode:!1},on:{"on-content-change":t.extraContentChange}})],1)],1):a("el-form-item",{attrs:{label:"正文:"}},[a("za-editor",{ref:"editor",attrs:{id:"editor_id",height:"500px",width:"500px",minWidth:500,resizeType:1,urlType:"absolut",content:t.articleData.content,loadStyleMode:!1},on:{"on-content-change":t.onContentChange}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:23}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"功能组件:"}},[a("el-input",{attrs:{placeholder:"多个组件逗号隔开"},model:{value:t.articleData.componentsIds,callback:function(e){t.$set(t.articleData,"componentsIds",e)},expression:"articleData.componentsIds"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"是否外链产品:"}},[a("el-radio",{attrs:{label:"N"},model:{value:t.articleData.isLinkProduct,callback:function(e){t.$set(t.articleData,"isLinkProduct",e)},expression:"articleData.isLinkProduct"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"Y"},model:{value:t.articleData.isLinkProduct,callback:function(e){t.$set(t.articleData,"isLinkProduct",e)},expression:"articleData.isLinkProduct"}},[t._v("是")])],1)],1),t._v(" "),"Y"===t.articleData.isLinkProduct?a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"success"},on:{click:t.addProduction}},[t._v("增加产品")])],1):t._e()],1),t._v(" "),"Y"===t.articleData.isLinkProduct?a("el-row",{attrs:{gutter:20}},[a("el-table",{ref:"productionTable",staticStyle:{width:"100%"},attrs:{data:t.articleData.productList,border:""}},[a("el-table-column",{attrs:{label:"产品图片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-upload",{staticClass:"link-production",attrs:{action:t.ajaxUrl.baseUrl+t.ajaxUrl.uploadArticleImage,"show-file-list":!1,"on-success":function(a,i){return t.handleProductionSuccess(a,i,e.row)}}},[e.row.imageUrl?a("img",{staticClass:"link-production-img",attrs:{src:e.row.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),t._v(" "),a("div",{staticClass:"upload-tip",attrs:{slot:"tip"},slot:"tip"},[t._v("建议宽高比690:290")])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"超链接"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{placeholder:"请输入超链接"},model:{value:e.row.url,callback:function(a){t.$set(e.row,"url",a)},expression:"scope.row.url"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==t.articleData.productList.length&&0!==e.$index?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-up",type:"primary"},on:{click:function(a){t.arrayIndexReplace(t.articleData.productList,e.row,e.$index,"up")}}}):t._e(),t._v(" "),e.$index!==t.articleData.productList.length-1?a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-arrow-down",type:"primary"},on:{click:function(a){t.arrayIndexReplace(t.articleData.productList,e.row,e.$index,"down")}}}):t._e(),t._v(" "),a("el-button",{staticClass:"handle-up-btn",attrs:{icon:"el-icon-close",type:"danger"},on:{click:function(a){t.spliceData(t.articleData.productList,e.$index)}}})]}}])})],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{id:"saveNormal",type:"primary"},on:{click:function(e){t.saveArticle(e)}}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{id:"saveToOnlone",type:"success"},on:{click:function(e){t.saveArticle(e)}}},[t._v("上 线")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var v=a("VU/8")(g,b,!1,function(t){a("oZ+5")},null,null).exports,w=a("MznX"),y={components:{EditArticleDialog:v},data:function(){return{articleStatus:w.a,ajaxUrl:c,id:"",contentHeader:"栏目",selectionRowData:[],articles:[],origins:[],isPreviewArticle:!1,previewArticleData:{isShow:!1,qrBase64:""},weightedValue:{id:"",isTop:0,isShow:!1,weight:0,heatSort:"",heatCoverImage:""},filters:{title:"",status:"",articleId:"",isRecommend:"",publishTimeStart:"",publishTimeEnd:"",infoAccountId:"",timeRange:[]},checkboxVal:"",isHotRecommend:"",loadingTable:!1,pageConfig:{pageNum:1,pageSize:10,total:1}}},created:function(){this.id=this.$route.params.id,this.initData(),this.getColunmList(),this.getListOrigin()},methods:l()({},Object(d.b)(["initInfoAccount","initColumnList"]),{filter:function(){var t=this.filters.timeRange?this.filters.timeRange[0]:"",e=this.filters.timeRange?this.filters.timeRange[1]:"";this.pageConfig=l()({},this.pageConfig,this.filters,{publishTimeStart:t,publishTimeEnd:e,pageNum:1}),delete this.pageConfig.timeRange,this.$refs.table.resetCurrentPage()||this.initData()},resetFilter:function(){this.filters={},this.checkboxVal=!1,this.pageConfig={pageSize:10,pageNum:1},this.initData()},initData:function(){var t=this;this.loadingTable=!0,Object(s.a)(c.getArticleList,l()({directoryId:this.id},this.pageConfig)).then(function(e){setTimeout(function(){t.contentHeader="栏目-"+e.result.directoryName,t.articles=e.result.list,t.pageConfig.total=e.result.total,t.loadingTable=!1},200)})},getColunmList:function(){var t=this;Object(s.a)(c.getListInfoDirectory).then(function(e){e.result.unshift({directoryName:"全部"}),t.initColumnList(e.result)})},getListOrigin:function(){var t=this;Object(s.a)(c.getListAccount).then(function(e){t.origins=e.result,t.initInfoAccount(l()({},t.origins)),t.origins.unshift({infoAccountId:"",nickName:"全部"})})},addArticle:function(){this.$refs.articleDialog.show("add",{})},batchOnlineOrOffLine:function(t,e,a){var i=this,l="",r="",o=[],n="";if("online"===t?(r="04",l="选中文章上线?"):(r="05",l="选中文章下线?"),a)n=a.articleId;else if(this.selectionRowData.forEach(function(t){o.push(t.articleId)}),!(n=o.join(",")))return this.$message({showClose:!0,message:"请选择文章",type:"error"}),!1;this.$confirm(l,"提示",{}).then(function(){Object(s.a)(c.batchLineOrDownLine,{list:n,status:r},"application/json; charset=utf-8").then(function(t){if(200==t.returnCode){var e="04"===r?"上线成功":"下线成功";i.$message({showClose:!0,message:e,type:"success"}),i.initData()}else i.$message({showClose:!0,message:t.returnMsg,type:"error"})})}).catch(function(){})},batchDelete:function(t,e){var a=this,i="",l=[],r="";if(e?(i="删除该条文章么?",r=e.articleId):(i="删除选中文章么?",this.selectionRowData.forEach(function(t){l.push(t.articleId)}),r=l.join(",")),!r)return this.$message({showClose:!0,message:"请选择文章",type:"error"}),!1;this.$confirm(i,"提示",{}).then(function(){Object(s.a)(c.deleteInfoArticle,{list:r}).then(function(t){200==t.returnCode?(a.$message({showClose:!0,message:"删除成功",type:"success"}),a.initData()):a.$message({showClose:!0,message:t.returnMsg,type:"error"})}).catch(function(t){})}).catch(function(){})},formatterStatus:function(t,e,a){switch(a){case"01":return"草稿";case"04":return"上线";case"05":default:return"下线"}},formatterOrigin:function(t,e,a){return a||"未分类"},formatterDate:function(t,e,a){return Object(r.a)(a)||"无"},formatterWeight:function(t,e,a){return t.isTop?"热门":t.weight},handleEdit:function(t,e){var a=this;Object(s.a)(c.getArticleDetail,{articleId:e.articleId}).then(function(t){a.$refs.articleDialog.show("edit",l()({},t.result))})},handleWeightValue:function(t,e){this.weightedValue={id:e.id,isShow:!0,isTop:1===e.isTop,weight:e.weight,heatSort:e.heatSort,heatCoverImage:e.heatCoverImage}},validateWeightValue:function(){var t="";if(this.weightedValue.isTop){var e=this.weightedValue,a=e.heatSort,i=e.heatCoverImage;Number(a)<0?t="热门排序不能小于0":i||(t="请上传热门大图!")}else{var l=Number(this.weightedValue.weight);0!==l&&(!l||l<0||l>100)&&(t="请输入0-100的权重值")}return!t||(this.$message({showClose:!0,message:t,type:"error"}),!1)},modifyWeightValue:function(){var t=this,e=this.weightedValue.isTop?"1":"0",a=l()({},this.weightedValue,{isTop:e});if(!this.validateWeightValue())return!1;Object(s.a)(c.modifyWeight,a).then(function(e){200==e.returnCode?(t.$message({showClose:!0,message:"修改成功",type:"success"}),t.initData(),t.weightedValue.isShow=!1):t.$message({showClose:!0,message:e.returnMsg,type:"error"})})},handleSelectionChange:function(t){this.selectionRowData=t},changePage:function(t){var e={pageNum:t.page,pageSize:t.rows||this.pageConfig.pageSize};this.pageConfig=l()({},this.pageConfig,e),this.initData()},changeRecommend:function(t){this.filters.isRecommend=t?"Y":""},handleAvatarSuccess:function(t){this.weightedValue.heatCoverImage=t.result},previewArticle:function(t){var e=this;Object(s.a)(c.previewArticle,{articleId:t}).then(function(t){200==t.returnCode?(e.previewArticleData.qrBase64="data:image/png;base64,"+t.result,e.previewArticleData.isShow=!0):e.$message({showClose:!0,message:t.returnMsg,type:"error"})})}}),beforeRouteUpdate:function(t,e,a){this.id=t.params.id,this.initData(),a()}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("za-page-content",{attrs:{header:t.contentHeader,scroll:"true"}},[a("za-table",{ref:"table",attrs:{data:t.articles,total:t.pageConfig.total,isLoading:t.loadingTable},on:{"selection-change":t.handleSelectionChange,"action-change":t.changePage}},[a("div",{staticStyle:{"padding-bottom":"0px"},attrs:{slot:"searchBar"},slot:"searchBar"},[a("el-form",{ref:"filtersForm",attrs:{model:t.filters}},[a("el-form-item",[a("el-col",{attrs:{span:8}},[a("el-col",{attrs:{span:6}},[t._v("来源:")]),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.filters.infoAccountId,callback:function(e){t.$set(t.filters,"infoAccountId",e)},expression:"filters.infoAccountId"}},t._l(t.origins,function(t){return a("el-option",{key:t.infoAccountId,attrs:{label:t.nickName,value:t.infoAccountId}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-col",{attrs:{span:6,offset:2}},[t._v("状态:")]),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},t._l(t.articleStatus,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("el-col",{attrs:{span:6,offset:2}},[a("el-checkbox",{on:{change:t.changeRecommend},model:{value:t.checkboxVal,callback:function(e){t.checkboxVal=e},expression:"checkboxVal"}},[t._v("运营推荐")])],1)],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{span:8}},[a("el-col",{attrs:{span:6}},[t._v("文章ID:")]),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{placeholder:"文章ID"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.filter(e)}},model:{value:t.filters.articleId,callback:function(e){t.$set(t.filters,"articleId",e)},expression:"filters.articleId"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-col",{attrs:{span:6,offset:2}},[t._v("标题:")]),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{placeholder:"搜索标题..."},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.filter(e)}},model:{value:t.filters.title,callback:function(e){t.$set(t.filters,"title",e)},expression:"filters.title"}})],1)],1)],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{span:16}},[a("el-col",{attrs:{span:3}},[t._v("发布时间:")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:t.filters.timeRange,callback:function(e){t.$set(t.filters,"timeRange",e)},expression:"filters.timeRange"}})],1),t._v(" "),a("el-col",{attrs:{span:6,align:"center"}},[a("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:t.filter}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",type:"primary"},on:{click:t.resetFilter}},[t._v("重置")])],1)],1),t._v(" "),a("el-form-item",[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"success"},on:{click:t.addArticle}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.batchOnlineOrOffLine("online")}}},[t._v("批量上线")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.batchOnlineOrOffLine("offline")}}},[t._v("批量下线")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.batchDelete}},[t._v("批量删除")])],1)],1)],1)],1),t._v(" "),a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",formatter:t.formatterStatus,label:"状态",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"articleId",label:"文章ID",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickName",formatter:t.formatterOrigin,label:"来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"directoryName",label:"所属栏目"}}),t._v(" "),a("el-table-column",{attrs:{prop:"weight",formatter:t.formatterWeight,label:"权重"}}),t._v(" "),a("el-table-column",{attrs:{prop:"crawlerTime",width:"160",formatter:t.formatterDate,label:"爬取时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gmtCreated",width:"160",formatter:t.formatterDate,label:"发布时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gmtModified",width:"160",formatter:t.formatterDate,label:"修改时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.previewArticle(e.row.articleId)}}},[t._v("预览")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.handleWeightValue(e.$index,e.row)}}},[t._v("权重")]),t._v(" "),"04"!==e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.batchOnlineOrOffLine("online",e.$index,e.row)}}},[t._v("上线")]):t._e(),t._v(" "),"04"===e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.batchOnlineOrOffLine("offline",e.$index,e.row)}}},[t._v("下线")]):t._e()]}}])})],1),t._v(" "),a("edit-article-dialog",{ref:"articleDialog",on:{"submit-article":t.initData}}),t._v(" "),a("el-dialog",{attrs:{visible:t.previewArticleData.isShow,width:"30%"},on:{"update:visible":function(e){t.$set(t.previewArticleData,"isShow",e)}}},[a("img",{attrs:{width:"100%",src:t.previewArticleData.qrBase64,alt:""}})]),t._v(" "),a("el-dialog",{attrs:{visible:t.weightedValue.isShow,width:"500px",title:"修改权重"},on:{"update:visible":function(e){t.$set(t.weightedValue,"isShow",e)}}},[a("el-row",[a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"90px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"设为热门：",prop:"labelName"}},[a("el-checkbox",{model:{value:t.weightedValue.isTop,callback:function(e){t.$set(t.weightedValue,"isTop",e)},expression:"weightedValue.isTop"}})],1)],1),t._v(" "),t.weightedValue.isTop?a("el-col",{attrs:{span:13}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"热门排序：",prop:"heatSort"}},[a("el-input",{attrs:{type:"number",placeholder:"请输入0-100"},model:{value:t.weightedValue.heatSort,callback:function(e){t.$set(t.weightedValue,"heatSort",e)},expression:"weightedValue.heatSort"}})],1)],1):t._e()],1),t._v(" "),t.weightedValue.isTop?a("el-row",{attrs:{type:"flex",align:"middle"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"热门大图",prop:"heatCoverImage"}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"img-tip",staticStyle:{color:"red"}},[t._v("* 建议宽高比690：330")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.ajaxUrl.baseUrl+t.ajaxUrl.uploadArticleImage,"show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.weightedValue.heatCoverImage?a("img",{staticClass:"avatar",attrs:{src:t.weightedValue.heatCoverImage}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1):t._e(),t._v(" "),t.weightedValue.isTop?t._e():a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"权重：",prop:"labelName"}},[a("el-row",[a("el-col",{attrs:{span:16}},[a("el-input",{attrs:{type:"number",placeholder:"请输入0-100"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.modifyWeightValue(e)}},model:{value:t.weightedValue.weight,callback:function(e){t.$set(t.weightedValue,"weight",e)},expression:"weightedValue.weight"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24,align:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.modifyWeightValue}},[t._v("确 定")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var D=a("VU/8")(y,_,!1,function(t){a("f0Ye")},"data-v-8cadd26c",null);e.default=D.exports}});
//# sourceMappingURL=3.js.map