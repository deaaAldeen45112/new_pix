"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7321],{23041:(t,e,o)=>{o.d(e,{Z:()=>v});var a=o(20629),n=o(34910),i=o(9489),r=o(77766),l=o.n(r),c=o(48383),s=o(32639),d=o(95063),u=o(78914),m=o.n(u);const p={name:"DownloadSectionTemplateUpload",extends:d.Z,props:{lineItem:{type:Object,required:!1},customQuantity:{type:[Number,String],required:!1}},components:{BSpinner:s.X},computed:{...(0,a.Se)("product",["options"]),...(0,a.Se)("dictionary",["getDictionaryVoice"])},methods:{templateDownload(){var t;(0,c.Z)("Clicked Download Template","ga_event",{type:"Product Page",action:"Clicked Download Template",label:l()(t="Clicked Download Template ".concat(this.merchantProductId," - ")).call(t,this.lineItem.merchantInfo.merchantProductName),NonInteraction:!1}),(0,c.Z)("Clicked Download Template General","download_template",{add_product_id:this.merchantProductId,add_product_name:this.lineItem.merchantInfo.merchantProductName});const e=this.setSetsTo1(this.lineItem.productConfig),o=(t=>{const e={};return m()(t).call(t,(t=>{const{option:o}=t,a=t.label;if(o&&void 0!==o.label){const t=o.label;e[a]=t}else e[a]="undefined"})),e})(this.lineItem.merchantInfo.attributesData),a={product:{mcpSku:this.lineItem.mcpSku,productName:this.lineItem.mcpProdName,merchantProductName:this.lineItem.merchantInfo.merchantProductName,productSku:this.lineItem.merchantInfo.merchantSku,variant:this.lineItem.merchantInfo.merchantVar},variables:{...e,Quantity:this.customQuantity},options:{...o}};this.templateDownloadRequest(a)}}};var h=o(51900);const y=(0,h.Z)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-6 m-0"},[o("b-button",{staticClass:"download-btn layout-panoramic blue-empty-btn",attrs:{variant:"primary"},on:{click:function(e){return t.templateDownload()}}},[t.templateIsLoading?o("b-spinner",{attrs:{small:""}}):o("i",{staticClass:"pixicon icon-download"}),t._v(" "),t.templateIsLoading?o("div",{staticClass:"filler"}):t._e(),t._v("\n        "+t._s(t.getDictionaryVoice("product","CTA_download_template"))+"\n    ")],1)],1)}),[],!1,null,"f581b022",null).exports,w={name:"DownloadSection",props:{instructionFile:{type:Object,required:!1},hasInstructions:{type:Boolean,required:!1},templateEnabled:{type:Boolean,required:!1},customQuantity:{type:[Number,String],required:!1},selectionIsValid:{type:Boolean,required:!1},productName:{type:String,required:!1},lineItem:{type:Object,required:!1},page:{type:String,required:!1}},components:{DownloadSectionInstructions:n.Z,DownloadSectionTemplateProduct:i.Z,DownloadSectionTemplateUpload:y},data:()=>({templateError:{hasError:!1}}),computed:{...(0,a.Se)("dictionary",["getDictionaryVoice"])},methods:{onTemplateErrorUpdate(t){this.templateError.hasError=t}}};const v=(0,h.Z)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"step-3-box"},[o("h5",{staticClass:"title text-left"},[t._v(t._s(t.getDictionaryVoice("product","useful_elements")))]),t._v(" "),o("div",{staticClass:"row buttons-template"},[t.hasInstructions?o("download-section-instructions",{attrs:{"instruction-file":t.instructionFile,"product-name":t.productName,"custom-style":"uploadPage"==t.page?"layout-panoramic":""}}):t._e(),t._v(" "),t.templateEnabled&&"uploadPage"===t.page?o("download-section-template-upload",{attrs:{"custom-quantity":t.customQuantity,"line-item":t.lineItem},on:{templateErrorUpdate:t.onTemplateErrorUpdate}}):t.templateEnabled?o("download-section-template-product",{attrs:{"custom-quantity":t.customQuantity,"selection-is-valid":t.selectionIsValid},on:{templateErrorUpdate:t.onTemplateErrorUpdate}}):t._e()],1),t._v(" "),t.templateError.hasError?o("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[o("strong",[t._v(t._s(t.getDictionaryVoice("product","download_error")))])]):t._e()])}),[],!1,null,"7d33c388",null).exports},34910:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(20629),n=o(48383);const i={name:"DownloadSectionInstructions",props:{instructionFile:{type:Object,required:!0},productName:{type:String,required:!1},customStyle:{type:String,required:!1}},computed:{...(0,a.Se)("dictionary",["getDictionaryVoice"]),...(0,a.Se)("product",["merchantProductId"]),hasLayoutPanoramic(){return"layout-panoramic"===this.customStyle}},methods:{showFile(t){window.open(t)},showInstructionsFile(){var t;const e=null===(t=this.instructionFile)||void 0===t?void 0:t.url;e&&((0,n.Z)("Clicked Download Instructions","ga_event",{type:"Product Page",action:"Clicked Download Instruction",label:"Clicked Download Instruction ".concat(this.productName),NonInteraction:!1}),(0,n.Z)("Clicked Download Instructions General","download_instructions",{add_product_id:this.merchantProductId}),this.showFile(e))}}};const r=(0,o(51900).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-6 m-0"},[o("b-button",{staticClass:"download-btn",class:t.hasLayoutPanoramic?["layout-panoramic","blue-empty-btn"]:"blue-btn",attrs:{variant:"primary"},on:{click:t.showInstructionsFile}},[o("i",{staticClass:"pixicon icon-download"}),t._v(" "+t._s(t.getDictionaryVoice("common","CTA_download_istruzioni"))+"\n    ")])],1)}),[],!1,null,"c8dc13fc",null).exports},95063:(t,e,o)=>{o.d(e,{Z:()=>c});var a=o(59340),n=o.n(a),i=o(20629),r=o(19017);const l={name:"DownloadSectionTemplateBaseComponent",props:{customQuantity:{type:[Number,String],required:!1},selectionIsValid:{type:Boolean,required:!1},customStyle:{type:String,required:!1},lineItem:{type:Object,required:!1}},computed:{...(0,i.Se)("prices",["selectedQuantity"]),...(0,i.Se)("dictionary",["getDictionaryVoice"]),hasLayoutPanoramic(){return"layout-panoramic"===this.customStyle}},data:()=>({templateIsLoading:!1,templateDownloadUrl:"/product/template/pdf/"}),methods:{setSetsTo1:t=>"Sets"in t?{...t,Sets:1}:t,templateDownloadRequest(t){this.templateIsLoading=!0,this.$emit("templateErrorUpdate",!1),axios.post(this.templateDownloadUrl,t).then((e=>{var o,a;r.Z.log(n()(t),e);const i=null==e||null===(o=e.data)||void 0===o||null===(a=o.template)||void 0===a?void 0:a.signedUrl;i&&""!==i?(r.Z.log(i),window.open(i,"_blank")):(this.$emit("templateErrorUpdate",!0),r.Z.log(e.data.error||"")),this.templateIsLoading=!1})).catch((t=>{console.log(t),this.templateIsLoading=!1,this.$emit("templateErrorUpdate",!0)}))}}};const c=(0,o(51900).Z)(l,undefined,undefined,!1,null,"e6aaea86",null).exports},9489:(t,e,o)=>{o.d(e,{Z:()=>_});o(33948);var a=o(77766),n=o.n(a),i=o(41511),r=o.n(i),l=o(20629),c=o(32639),s=o(48383),d=o(95063),u=o(78914),m=o.n(u),p=o(66024),h=o(98271),y=o(93628),w=o(89872),v=o(58809);const I={name:"DownloadSectionTemplateProduct",extends:d.Z,props:{customQuantity:{type:[Number,String],required:!1},selectionIsValid:{type:Boolean,required:!1},customStyle:{type:String,required:!1}},components:{BSpinner:c.X},computed:{...(0,l.Se)("product",["data","userSelection","mcpSku","merchantProductName","productName","merchantProductId","options"]),...(0,l.Se)("prices",["selectedQuantity"]),...(0,l.Se)("dictionary",["getDictionaryVoice"]),hasLayoutPanoramic(){return"layout-panoramic"===this.customStyle}},methods:{templateDownload(){var t;const{productId:e,productVar:o}=this.data;(0,s.Z)("Clicked Download Template","ga_event",{type:"Product Page",action:"Clicked Download Template",label:n()(t="Clicked Download Template ".concat(this.merchantProductId," - ")).call(t,this.merchantProductName),NonInteraction:!1}),(0,s.Z)("Clicked Download Template General","download_template",{add_product_id:this.merchantProductId,add_product_name:this.merchantProductName});let a=this.selectedQuantity;void 0!==a&&0!==a||(a=this.customQuantity?this.customQuantity:0);let i=24;r()(this.data.validProductionTimes)&&this.data.validProductionTimes.length>0&&([i]=this.data.validProductionTimes);const l=this.setSetsTo1(this.userSelection),c=(t=>{const e=(0,w.Z)(t),o={};return m()(e).call(e,(e=>{const a=t[e],n=(0,p.Z)(a),i=(0,h.Z)(a);let r;if(""!==i){const t=(0,v.Z)(a,i);r=void 0!==t?(0,y.Z)(t):i}o[n]=r})),o})(this.options),d={product:{mcpSku:this.mcpSku,productName:this.productName,merchantProductName:this.merchantProductName,productSku:e,variant:o},variables:{...l,"Production Time":i,Quantity:a},options:{...c}};this.templateDownloadRequest(d)}}};const _=(0,o(51900).Z)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-sm-6 m-0"},[o("b-button",{staticClass:"download-btn",class:t.hasLayoutPanoramic?["layout-panoramic","blue-empty-btn"]:"blue-btn",attrs:{variant:"primary",disabled:!t.selectionIsValid},on:{click:function(e){return t.templateDownload()}}},[t.templateIsLoading?o("b-spinner",{attrs:{small:""}}):o("i",{staticClass:"pixicon icon-download"}),t._v(" "),t.templateIsLoading?o("div",{staticClass:"filler"}):t._e(),t._v("\n        "+t._s(t.getDictionaryVoice("product","CTA_download_template"))+"\n    ")],1)],1)}),[],!1,null,"63f4ab07",null).exports}}]);