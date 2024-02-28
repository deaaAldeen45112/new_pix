"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5514],{62679:(e,t,o)=>{o.d(t,{g:()=>f});var s=o(91317),r=o.n(s),a=o(70650),i=o(25388),n=o(15679),c=o(94630),l=o(79205),u=o(61561),m=o(89186),p=o(62670),d=o(79656);const g=(0,c.y2)((0,n.GE)({...d.N,...l.N,...u.NQ,...m.N,...p.N}),a.t_),f=r().extend({name:a.t_,mixins:[d.t,u.UG,l.X,m.j,p.J],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:g,watch:{computedLocalChecked(e,t){(0,i.W)(e,t)||this.$emit(u.Du,e)}}})},23512:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(11128),r=o.n(s),a=o(81643),i=o.n(a);const n=(e,t)=>{let o=[],s=r()();document.addEventListener("keydown",(a=>{const n="abcdefghijklmnopqrstuvwxyz0123456789",c=a&&a.key?a.key.toLowerCase():"",l=t||500;if(-1===i()(n).call(n,c))return;const u=r()();u-s>l&&(o=[]),o.push(c),s=u,e(o)}))}},55479:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var s=o(59340),r=o.n(s),a=o(31955),i=o(21777),n=o(62679),c=o(23512),l=o(20629);const u={name:"CustomUrlGenerator",props:{recapEnabled:{type:Boolean,required:!1,default:!1},customConfigResponse:{type:[String,Object],required:!1}},data:()=>({userPreferenceCustomConfig:!0,customUrlTarget:"",cookieName:"show_custom_config",cookieExpire:10,relativePath:window.location.pathname,lossLeaderEntryId:"",tooltipText:"Copy to clipboard"}),components:{BFormInput:i.e,BFormRadio:n.g},computed:{...(0,l.Se)("dictionary",["getDictionaryVoice"]),...(0,l.Se)("links",["lossLeaderLink"])},methods:{keyMapper:c.Z,getCustomConfigUrl(){this.$emit("getCustomConfigUrlClick",{customUrlTarget:this.customUrlTarget,lossLeaderEntryId:this.lossLeaderEntryId})},logKeySequence(e){r()(e)!==r()(["c","q"])||this.userPreferenceCustomConfig||(this.userPreferenceCustomConfig=!0,a.Z.set(this.cookieName,"1",{path:"/",expires:this.cookieExpire})),r()(e)===r()(["q","c"])&&this.userPreferenceCustomConfig&&(this.userPreferenceCustomConfig=!1,a.Z.set(this.cookieName,"0",{path:"/",expires:this.cookieExpire}))},copyURLToClipboard(){this.$refs["textarea-custom-url"].select(),document.execCommand("copy"),this.tooltipText="URL Copied!"},resetTooltip(){this.tooltipText="Copy to clipboard"}},mounted(){this.customUrlTarget=this.relativePath,this.keyMapper(this.logKeySequence),"0"===a.Z.get(this.cookieName)&&(this.userPreferenceCustomConfig=!1)}};const m=(0,o(51900).Z)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.userPreferenceCustomConfig?o("div",{staticClass:"custom-url-container"},[o("h5",[e._v(e._s(e.getDictionaryVoice("product","config_url")))]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("b-form-radio",{attrs:{name:"custom-url-target",value:e.relativePath},model:{value:e.customUrlTarget,callback:function(t){e.customUrlTarget=t},expression:"customUrlTarget"}},[e._v("\n                "+e._s(e.getDictionaryVoice("product","product_page"))+"\n            ")])],1),e._v(" "),o("div",{staticClass:"col-6"},[o("b-form-radio",{attrs:{name:"custom-url-target",value:e.lossLeaderLink},model:{value:e.customUrlTarget,callback:function(t){e.customUrlTarget=t},expression:"customUrlTarget"}},[e._v("\n                "+e._s(e.getDictionaryVoice("product","loss_page"))+"\n            ")])],1)]),e._v(" "),o("b-form-input",{directives:[{name:"show",rawName:"v-show",value:e.customUrlTarget===e.lossLeaderLink,expression:"customUrlTarget === lossLeaderLink"}],attrs:{id:"loss-leader-infos",placeholder:"Contentful ID of the loss leader info entry"},model:{value:e.lossLeaderEntryId,callback:function(t){e.lossLeaderEntryId=t},expression:"lossLeaderEntryId"}}),e._v(" "),o("button",{staticClass:"btn blue-btn custom-url-btn",attrs:{disabled:!e.recapEnabled},on:{click:e.getCustomConfigUrl}},[e._v("\n        "+e._s(e.getDictionaryVoice("product","get_config_url"))+"\n    ")]),e._v(" "),""!==e.customConfigResponse&&e.customConfigResponse.success?o("textarea",{ref:"textarea-custom-url",staticClass:"alert alert-success",attrs:{name:"custom-url",id:"textarea-custom-url"},domProps:{innerHTML:e._s(e.customConfigResponse.url)}}):""===e.customConfigResponse||e.customConfigResponse.success?e._e():o("textarea",{ref:"textarea-custom-url",staticClass:"alert alert-error",attrs:{name:"custom-url",id:"textarea-custom-url"},domProps:{innerHTML:e._s(e.customConfigResponse.message)}}),e._v(" "),""!==e.customConfigResponse&&e.customConfigResponse.success?o("div",{staticClass:"tooltip-custom-url"},[o("button",{staticClass:"btn blue-empty-btn small-btn",on:{click:e.copyURLToClipboard,mouseleave:e.resetTooltip}},[o("span",{staticClass:"tooltiptext"},[e._v(e._s(e.tooltipText))]),e._v("\n            "+e._s(e.getDictionaryVoice("product","copy_url"))+"\n        ")])]):e._e()],1):e._e()}),[],!1,null,"9093fd1a",null).exports}}]);