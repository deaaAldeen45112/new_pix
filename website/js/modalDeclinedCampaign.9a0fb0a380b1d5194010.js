"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2865],{56230:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var o=t(20629),s=t(31955);const d={name:"ModalDeclinedCampaign",props:["image","imageXs","promoInputCode","show"],data:()=>({isVisible:!1,hiddenModal:!1}),computed:{...(0,o.Se)("dictionary",["getDictionaryVoice"]),...(0,o.Se)("screen",["isMobileScreen"])},methods:{initModal(){this.isVisible=!0},leaveModal(){this.isVisible=!1},showModal(){this.$bvModal.show("modal-declined-campaign")},removeModal(){this.hiddenModal=!0,s.Z.set("declinedPopUp","setup-popup",{path:"/",expires:10})}},created(){s.Z.get("declinedPopUp")&&(this.hiddenModal=!0)},mounted(){this.show&&this.showModal()}};const l=(0,t(51900).Z)(d,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.hiddenModal?e._e():t("b-modal",{attrs:{id:"modal-declined-campaign"},on:{show:e.initModal,hide:e.leaveModal}},[t("template",{slot:"modal-header-close"},[t("i",{staticClass:"fal fa-times-circle",on:{click:e.removeModal}})]),e._v(" "),t("template",{slot:"modal-title"},[t("div",{staticClass:"declined-title"},[e._v(e._s(e.getDictionaryVoice("declined_customers_modal","declined_title")))]),e._v(" "),t("img",{staticClass:"declined-img",attrs:{alt:"declined-img",src:e.isMobileScreen?e.imageXs:e.image}}),e._v(" "),t("div",{staticClass:"declined-subtitle d-none"},[e._v("\n            "+e._s(e.getDictionaryVoice("declined_customers_modal","declined_subtitle"))+"\n        ")])]),e._v(" "),t("template",{slot:"default"},[t("div",{staticClass:"promo-title"},[e._v("\n            "+e._s(e.getDictionaryVoice("declined_customers_modal","declined_use_promo"))+"\n        ")]),e._v(" "),t("div",{staticClass:"promo-type"},[e._v("\n            "+e._s(e.promoInputCode)+"\n        ")]),e._v(" "),t("div",{staticClass:"promo-how"},[e._v("\n            "+e._s(e.getDictionaryVoice("declined_customers_modal","declined_how_title"))+"\n        ")]),e._v(" "),t("div",{staticClass:"promo-how-text",domProps:{innerHTML:e._s(e.getDictionaryVoice("declined_customers_modal","declined_how_text"))}})]),e._v(" "),t("template",{slot:"modal-footer"},[t("hr"),e._v(" "),t("div",{staticClass:"disclaimer",domProps:{innerHTML:e._s(e.getDictionaryVoice("declined_customers_modal","disclaimer-"+this.promoInputCode))}})])],2)}),[],!1,null,null,null).exports}}]);