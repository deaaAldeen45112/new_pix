"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5577],{37884:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const s={name:"ModalSlideshowDisclaimer",props:{banners:{type:Array,required:!0}},data:()=>({disclaimer:""}),methods:{showModalForIndexes(e,t){var n,s,o,i;const r=null===(n=this.banners)||void 0===n||null===(s=n[e])||void 0===s||null===(o=s.bannerListCollection)||void 0===o?void 0:o[t],{disclaimer:a}=r;null!=r&&null!==(i=r.contentHtmlDefinition)&&void 0!==i&&i.disclaimer&&a&&(this.disclaimer=a,this.$bvModal.show("modal-slideshow-disclaimer"))}}};const o=(0,n(51900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal-slideshow-disclaimer",size:"xl","hide-footer":""},scopedSlots:e._u([{key:"modal-header-close",fn:function(){return[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]},proxy:!0},{key:"default",fn:function(){return[n("p",[e._v(e._s(e.disclaimer))])]},proxy:!0}])})}),[],!1,null,null,null).exports},51900:(e,t,n)=>{function s(e,t,n,s,o,i,r,a){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=l):o&&(l=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}n.d(t,{Z:()=>s})}}]);