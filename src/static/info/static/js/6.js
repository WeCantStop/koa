webpackJsonp([6],{j7e0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),l=n.n(s),a=n("NYxO"),o={props:["collapsed"],data:function(){return{}},methods:{showMenu:function(t,e){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+t)[0].style.display=e?"block":"none"}},computed:l()({},Object(a.c)(["sideMenu"]))},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"menu-aside"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:"","unique-opened":""}},[t._l(t.sideMenu,function(e,s){return[e.childrens?n("el-submenu",{key:s,attrs:{index:s+""}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v(t._s(e.menuName))]),t._v(" "),t._l(e.childrens,function(e,s){return[e.childrens?n("el-submenu",{key:s,attrs:{index:s.toString()}},[n("template",{slot:"title"},[t._v(t._s(e.menuName))]),t._v(" "),t._l(e.childrens,function(e){return n("el-menu-item",{key:e.frontUrl,attrs:{index:"/"===e.frontUrl?"":e.frontUrl}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.url)+"\n\t\t\t\t\t\t")])})],2):n("el-menu-item",{key:s,attrs:{index:"/"===e.frontUrl?"":e.frontUrl}},[t._v("\n\t\t\t\t\t\t"+t._s(e.url)+"\n\t\t\t\t\t")])]})],2):n("el-menu-item",{key:e.frontUrl,attrs:{index:"/"===e.frontUrl?"":e.frontUrl}},[n("i",{staticClass:"el-icon-menu"}),t._v("\n\t\t\t\t"+t._s(e.url)+"\n\t\t\t")])]})],2),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo el-menu--darkcollapsed custom-menu"},t._l(t.sideMenu,function(e,s){return n("li",{key:s,staticClass:"el-submenu item"},[[n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"10px",height:"50px","line-height":"40px"},on:{mouseover:function(e){t.showMenu(s,!0)},mouseout:function(e){t.showMenu(s,!1)}}},[n("i",{staticClass:"el-icon-menu"})]),t._v(" "),n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+s,on:{mouseover:function(e){t.showMenu(s,!0)},mouseout:function(e){t.showMenu(s,!1)}}},t._l(e.childrens,function(e,s){return n("li",{key:s,staticClass:"el-menu-item",class:t.$route.path==e.frontUrl?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(n){t.$router.push(e.frontUrl)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.menuName)+"\n\t\t\t\t\t")])}))]],2)}))],1)},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(t){n("xxEd")},null,null).exports,c=n("t5DY"),u=n("myXI"),d="",m=[];if(window.global){var p=window.global;d=p.username;try{m=[{text:"内容管理",children:[{text:"待审核资讯列表",modulepath:"/unCheckList"},{text:"栏目",modulepath:"",children:[{text:"保险攻略",modulepath:"/columnList?type=baoxian"},{text:"健康",modulepath:"/columnList?type=health"},{text:"好医生",modulepath:"/columnList?tyep=doctor"}]},{text:"专题管理",modulepath:"/specialmange"},{text:"栏目管理",modulepath:"/columnmanage"}]},{text:"标签",children:[{text:"标签管理",modulepath:"/tag"},{text:"标签分类管理",modulepath:"/cate"}]},{text:"爬虫目标管理",modulepath:"/target"},{text:"推荐算法参数配置",modulepath:"/math"}]}catch(t){m=[]}}var h={data:function(){return{sysName:"资讯后台",collapsed:!1,sysUserName:d,menus:m,transitionName:"slide-left",menuData:[]}},methods:l()({},Object(a.b)(["initSideMenu"]),{logout:function(){this.$confirm("确认退出吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="/logout"})},collapse:function(){this.collapsed=!this.collapsed}}),created:function(){var t=this;Object(c.a)(u.sideMenu).then(function(e){t.initSideMenu(e.result.menuList),t.sysUserName=e.result.userName})},components:{sidebar:r},watch:{$route:function(t,e){var n=t.path.split("/").length,s=e.path.split("/").length;this.transitionName=n<s?"slide-right":"slide-left"}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:t.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[t._v("\n\t\t\t"+t._s(t.collapsed?"":t.sysName)+"\n\t\t")]),t._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"tools",on:{click:function(e){e.preventDefault(),t.collapse(e)}}},[n("i",{staticClass:"el-icon-menu"})])]),t._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[t._v("欢迎："+t._s(t.sysUserName))]),t._v(" "),n("a",{staticClass:"logout",attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("退出登录")])])],1),t._v(" "),n("el-col",{staticClass:"main",class:t.collapsed?"menu-collapsed":"menu-expanded",attrs:{span:24}},[n("sidebar",{attrs:{collapsed:t.collapsed}}),t._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:t.transitionName}},[n("router-view",{staticClass:"child-view"})],1)],1)],1)])],1)],1)},staticRenderFns:[]};var v=n("VU/8")(h,f,!1,function(t){n("x7rn")},null,null);e.default=v.exports},x7rn:function(t,e){},xxEd:function(t,e){}});
//# sourceMappingURL=6.js.map