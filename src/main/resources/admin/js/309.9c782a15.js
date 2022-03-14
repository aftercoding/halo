"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[309],{1309:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:0}},[a("a-col",{staticClass:"h-screen",staticStyle:{"border-right":"1px solid #f2f2f2"},attrs:{md:6,sm:24}},[a("a-spin",{staticClass:"h-full",attrs:{spinning:e.theme.loading}},[a("ThemeSettingForm",{attrs:{theme:e.theme.data,wrapperCol:{span:24}},on:{saved:e.onSettingsSaved}})],1)],1),a("a-col",{staticClass:"h-screen",attrs:{md:18,sm:24}},[a("iframe",{attrs:{id:"themeViewIframe",src:e.options.blog_url,frameborder:"0",height:"100%",scrolling:"auto",width:"100%"}})])],1)},r=[],s=a(47458),i=a(86475),o=(a(70315),a(32221)),l=a(17132),m=a(98906),u={name:"ThemeVisualSetting",components:{ThemeSettingForm:o.Z},data:function(){return{theme:{data:{},loading:!1}}},computed:(0,i.Z)({},(0,m.Se)(["options"])),beforeRouteEnter:function(e,t,a){var n=e.query.themeId;a(function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.handleGetTheme(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},methods:{handleGetTheme:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.theme.loading=!0,a.next=4,l.Z.theme.get(e);case 4:n=a.sent,r=n.data,t.theme.data=r;case 7:return a.prev=7,t.theme.loading=!1,a.finish(7);case 10:case"end":return a.stop()}}),a,null,[[0,,7,10]])})))()},onSettingsSaved:function(){document.getElementById("themeViewIframe").contentWindow.location.reload()}}},c=u,f=a(42177),d=(0,f.Z)(c,n,r,!1,null,"3839a26e",null),h=d.exports},32221:function(e,t,a){a.d(t,{Z:function(){return f}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.theme.id?a("div",{staticClass:"card-container h-full"},[a("a-tabs",{staticClass:"h-full",attrs:{defaultActiveKey:"0",type:"card"}},[a("a-tab-pane",{key:0,attrs:{tab:"关于"}},[e.theme.logo?a("div",[a("a-avatar",{attrs:{alt:e.theme.name,size:72,src:e.theme.logo,shape:"square"}}),a("a-divider")],1):e._e(),a("a-descriptions",{attrs:{column:1,layout:"horizontal"}},[a("a-descriptions-item",{attrs:{label:"作者"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.author.website||"#",target:"_blank"}},[e._v(" "+e._s(e.theme.author.name)+" ")])]),a("a-descriptions-item",{attrs:{label:"介绍"}},[e._v(" "+e._s(e.theme.description||"-")+" ")]),a("a-descriptions-item",{attrs:{label:"官网"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.website||"#",target:"_blank"}},[e._v(" "+e._s(e.theme.website||"-")+" ")])]),a("a-descriptions-item",{attrs:{label:"Git 仓库"}},[a("a",{staticClass:"text-inherit",attrs:{href:e.theme.repo||"#",target:"_blank"}},[e._v(" "+e._s(e.theme.repo||"-")+" ")])]),a("a-descriptions-item",{attrs:{label:"主题标识"}},[e._v(" "+e._s(e.theme.id)+" ")]),a("a-descriptions-item",{attrs:{label:"当前版本"}},[e._v(" "+e._s(e.theme.version)+" ")]),a("a-descriptions-item",{attrs:{label:"存储位置"}},[e._v(" "+e._s(e.theme.themePath)+" ")])],1)],1),e._l(e.form.configurations,(function(t,n){return a("a-tab-pane",{key:n+1,attrs:{tab:t.label}},[a("a-form",{attrs:{wrapperCol:e.wrapperCol,layout:"vertical"}},[e._l(t.items,(function(t,n){return a("a-form-item",{key:n,attrs:{label:t.label+"："}},[t.description&&""!==t.description?a("p",{attrs:{slot:"help"},domProps:{innerHTML:e._s(t.description)},slot:"help"}):e._e(),"TEXT"===t.type?a("a-input",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):"TEXTAREA"===t.type?a("a-input",{attrs:{autoSize:{minRows:5},placeholder:t.placeholder,type:"textarea"},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):"RADIO"===t.type?a("a-radio-group",{attrs:{defaultValue:t.defaultValue},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}},e._l(t.options,(function(t,n){return a("a-radio",{key:n,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1):"SELECT"===t.type?a("a-select",{attrs:{defaultValue:t.defaultValue},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}},e._l(t.options,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1):"COLOR"===t.type?a("verte",{staticStyle:{display:"inline-block",height:"24px"},attrs:{defaultValue:t.defaultValue,model:"hex",picker:"square"},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):"ATTACHMENT"===t.type?a("AttachmentInput",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):"NUMBER"===t.type?a("a-input-number",{staticStyle:{width:"100%"},attrs:{defaultValue:t.defaultValue},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):"SWITCH"===t.type?a("a-switch",{attrs:{defaultChecked:t.defaultValue},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}}):a("a-input",{attrs:{defaultValue:t.defaultValue,placeholder:t.placeholder},model:{value:e.form.settings[t.name],callback:function(a){e.$set(e.form.settings,t.name,a)},expression:"form.settings[item.name]"}})],1)})),a("a-form-item",[a("ReactiveButton",{attrs:{errored:e.form.saveErrored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSaveSettingsCallback,click:e.handleSaveSettings}})],1)],2)],1)}))],2)],1):e._e()},r=[],s=a(47458),i=(a(70315),a(43154)),o=a(17132),l={name:"ThemeSettingForm",components:{Verte:i.Z},props:{theme:{type:Object,default:function(){}},wrapperCol:{type:Object,default:function(){return{xl:{span:8},lg:{span:8},sm:{span:12},xs:{span:24}}}}},data:function(){return{form:{settings:[],configurations:[],loading:!1,saving:!1,saveErrored:!1}}},watch:{theme:function(e){e&&this.handleGetConfigurations()}},methods:{handleGetConfigurations:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.theme.listConfigurations(e.theme.id);case 3:return a=t.sent,n=a.data,e.form.configurations=n,t.next=8,e.handleGetSettings();case 8:t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$log.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},handleGetSettings:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.theme.listSettings(e.theme.id);case 3:a=t.sent,n=a.data,e.form.settings=n,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$log.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},handleSaveSettings:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.form.saving=!0,t.next=4,o.Z.theme.saveSettings(e.theme.id,e.form.settings);case 4:t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),e.$log.error(t.t0),e.form.saveErrored=!0;case 10:return t.prev=10,setTimeout((function(){e.form.saving=!1}),400),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,6,10,13]])})))()},handleSaveSettingsCallback:function(){this.form.saveErrored?this.form.saveErrored=!1:(this.handleGetSettings(),this.$emit("saved"))}}},m=l,u=a(42177),c=(0,u.Z)(m,n,r,!1,null,null,null),f=c.exports}}]);