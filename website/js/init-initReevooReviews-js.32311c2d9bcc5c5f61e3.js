"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4952],{65905:(e,o,n)=>{n.r(o),n.d(o,{default:()=>a});var s=n(78208),t=n(48930);const a=()=>{window.showToggle=()=>{const e=(0,t.Z)("#reevoo_area"),o=(0,t.Z)("#show-more");if(e.classList.contains("open")){var n;e.classList.remove("open");const s=null==e||null===(n=e.dataset)||void 0===n?void 0:n.discover;s&&""!==s&&(o.innerHTML=s)}else{var s;e.classList.add("open");const n=null==e||null===(s=e.dataset)||void 0===s?void 0:s.hide;n&&""!==n&&(o.innerHTML=n)}};const e=(0,t.Z)("reevoo-embeddable");null!==e&&(0,s.Z)((()=>{const o=e.querySelector("div");return o&&null!=o.shadowRoot}),(()=>{const o=(0,t.Z)("#reevoo_area").getAttribute("data-discover"),n='\n                    <div class="text-center show_more_container">\n                        <div id="show-more" class="btn blue-btn reevoo-btn" onclick="showToggle()">\n                            '.concat(o,"\n                        </div>\n                    </div>");e.insertAdjacentHTML("afterend",n)}))}}}]);