
async function waitForOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000); // 1000 milliseconds = 1 second
    });
}

function getImgsSlidersByType(type) { 
return fetch(host + 'home' + `/getImgsSlidersByType/${type}`, {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(res => {return res.json();});
}

  
function getCategoriesByParentId(id) {
  return fetch(host + 'category' + `/getCategoriesByParentId?id=${id==null?'':id}`, {
      method: "GET",
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(res => {return res.json();});
}


const host="http://localhost:8000/api/";
const hostImage="http://localhost:8000/storage/";
    (self.webpackChunk = self.webpackChunk || []).push([
        [4649],
        {
          31581: (e, t, n) => {
            e.exports = n(43474);
          },
          89877: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => M });
            var r = n(2991),
              i = n.n(r),
              o = n(78914),
              a = n.n(o),
              c = n(25843),
              u = n.n(c),
              s = n(81643),
              l = n.n(s),
              d = n(66419),
              f = n.n(d),
              v = n(77766),
              h = n.n(v),
              p = n(65993),
              m = n(29934),
              b = n(48383),
              g = n(48930),
              w = n(82762),
              y = n(44985);
            const M = async () => {

            //await waitForOneSecond();
             
       
           let slider = document.getElementById('silder-cat-img');
           if(slider !=null){
        let id =localStorage.getItem('subId');
        let imgs=await 
           fetch("http://localhost:8000/api/category" + `/getCategoryImgsSliderByCategoryId/${id}`, {
              method: "GET",
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              }
          })
          .then(res =>  {return res.json()});
      
     
   let imgTags="";
 for(let i=0;i<imgs.length;i++)
 {
  imgTags+=`<div class="slide-container keen-slider__slide" style="min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(-670px, 0px, 0px);">
     <div class="img-overlay" style="background-color: #;">
 
         <picture class="d-lg-block">
             <img src="${"http://localhost:8000/storage/"+imgs[i].img_path}"  alt="" class="img-fluid lazyloaded" width="1340" height="777" fetchpriority="low">
         </picture>
         <img class="d-md-block zoom-svg zoom-main-banner" src="../images/zoom-icon.svg" alt="zoom icon">
     </div>
 </div>`
   
 }
        slider.innerHTML=imgTags;
           }
      


            let silderParCatImg=document.getElementById("silder-par-cat-img");
           if(silderParCatImg!=null && localStorage.getItem('parCatId')!=null){
            let id =localStorage.getItem('parCatId');
            let imgs=await 
               fetch("http://localhost:8000/api/category" + `/getCategoryImgsSliderByCategoryId/${id}`, {
                  method: "GET",
                  headers: {
                      "Content-type": "application/json; charset=UTF-8"
                  }
              })
              .then(res =>  {return res.json()});
          
         
       let imgTags="";
     for(let i=0;i<imgs.length;i++)
     {
      imgTags+=`<div class="slide-container keen-slider__slide" style="min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(-670px, 0px, 0px);">
         <div class="img-overlay" style="background-color: #;">
     
             <picture class="d-lg-block">
                 <img src="${"http://localhost:8000/storage/"+imgs[i].img_path}"  alt="" class="img-fluid lazyloaded" width="1340" height="777" fetchpriority="low">
             </picture>
             <img class="d-md-block zoom-svg zoom-main-banner" src="../images/zoom-icon.svg" alt="zoom icon">
         </div>
     </div>`
       
     }
     silderParCatImg.innerHTML=imgTags;
       
           }



             let divHomeImgSliders=document.getElementById('div-home-img-sliders');
            if(divHomeImgSliders!=null){
              let homeImages= await  getImgsSlidersByType('home');
                
              for (let index = 0; index < homeImages.length; index++) {
                divHomeImgSliders.innerHTML+=`
                <div class="slide-container keen-slider__slide" style="min-width: calc(100% - 0px); max-width: calc(100% - 0px); transform: translate3d(0px, 0px, 0px);">
                <div class="img-overlay-content cursor-img" style="height:465px">
                  <picture class="">
                    <img src="${hostImage+homeImages[index].img_path}" alt="" class="img-fluid" width="1440" style="height:465px!important" onclick="window.location.href='/printing-deals/'" fetchpriority="high">
                  </picture>
                </div>
                `
   
              }
       


              }

              let e = !1;
              const t = (0, g.Z)(".keen-slider.banner"),
                n = (0, g.Z)(".keen-slider-container.banner-container"),
                r = (0, m.Z)(),
                o = new p.Z(t, {
                  loop: !0,
                  duration: 1e3,
                  dragStart: (e) => {
                    r(e, !1);
                  },
                  dragEnd: (t) => {
                    e && r(t, !0);
                  },
                  created(i) {
                    var o, a;
                    null === (o = n.querySelector(".prev")) ||
                      void 0 === o ||
                      o.addEventListener("click", () => {
                        i.prev(), e && r(i, !0);
                      }),
                      null === (a = n.querySelector(".next")) ||
                        void 0 === a ||
                        a.addEventListener("click", () => {
                          i.next(), e && r(i, !0);
                        }),
                      t.addEventListener("mouseover", () => {
                        r(i, !1);
                      }),
                      t.addEventListener("mouseout", () => {
                        e && r(i, !0);
                      });
                  },
                  mounted() {
                    n.classList.add("mounted");
                  },
                });
              let c;
              document.body.addEventListener("zoomModal.shown", () => {
                const e = (0, g.Z)(".keen-slider-container.zoom-slider-container"),
                  t = (0, g.Z)(".keen-slider.zoom-slider"),
                  n = (0, w.Z)(".fader-slide");
                r(o, !1);
                const u = o.details().relativeSlide;
                c = new p.Z(t, {
                  loop: !0,
                  initial: u,
                  slides: n.length,
                  duration: 2e3,
                  move: (e) => {
                    var t;
                    const r = i()((t = e.details().positions)).call(
                      t,
                      (e) => e.portion
                    );
                    a()(n).call(n, (e, t) => {
                      e.style.opacity = r[t];
                    });
                  },
                  created(t) {
                    e.querySelector(".prev").addEventListener("click", () => {
                      t.prev();
                    }),
                      e.querySelector(".next").addEventListener("click", () => {
                        t.next();
                      });
                  },
                  mounted() {
                    e.classList.add("mounted");
                  },
                });
              }),
                document.body.addEventListener("zoomModal.hidden", () => {
                  const t = (0, g.Z)(".keen-slider-container.zoom-slider-container");
                  c && (c.destroy(), t.classList.remove("mounted")), e && r(o, !0);
                });
              window.addEventListener("scroll", () => {
                window.pageYOffset > 3 && !1 === e && (r(o, !0), (e = !0));
              });
              const s = window.envTemplate;
              (0, y.Z)("click", ".slide-container", (e, t) => {
                var n, r, i;
                const o =
                    null === (n = t.querySelector(".slider-title-small ")) ||
                    void 0 === n
                      ? void 0
                      : n.textContent,
                  a = o ? u()(o).call(o) : "",
                  c = l()(
                    (r = f()((0, g.Z)(".keen-slider__slide").parentElement.children))
                  ).call(r, e.target.closest(".keen-slider__slide"));
                (0, b.Z)("Clicked Banner", "ga_event", {
                  type: "Clicked Banner",
                  action: "click on banner - ".concat(s),
                  label: h()((i = "".concat(a, " - "))).call(i, c),
                });
              }),
                (0, y.Z)("click", ".banner-container .keen-slider-arrow", (e, t) => {
                  const n = t.classList.contains("prev") ? "left" : "right";
                  (0, b.Z)("Clicked Banner", "ga_event", {
                    type: "Clicked Banner",
                    action: "click on arrow - ".concat(s),
                    label: "".concat(n),
                  });
                });
            };
          },
          29934: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r = n(31581),
              i = n.n(r);
            const o = function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 3e3,
                t = 0;
              return (n, r) => {
                clearInterval(t),
                  (t = i()(() => {
                    r && n && n.next();
                  }, e));
              };
            };
          },
          82762: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            const r = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return t.querySelectorAll(e);
            };
          },
          43474: (e, t, n) => {
            n(71249);
            var r = n(54058);
            e.exports = r.setInterval;
          },
          65993: (e, t, n) => {
            "use strict";
            function r(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function i(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      r(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : i(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function a(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return c(e);
                })(e) ||
                (function (e) {
                  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e);
                })(e) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n && e.constructor && (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? c(e, t)
                        : void 0
                    );
                  }
                })(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function c(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            function u(e) {
              return Array.prototype.slice.call(e);
            }
            function s(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document;
              return "function" == typeof e
                ? u(e())
                : "string" == typeof e
                ? u(t.querySelectorAll(e))
                : e instanceof HTMLElement != 0
                ? [e]
                : e instanceof NodeList != 0
                ? e
                : [];
            }
            function l(e, t, n) {
              return Math.min(Math.max(e, t), n);
            }
            n.d(t, { Z: () => d }),
              Math.sign ||
                (Math.sign = function (e) {
                  return (e > 0) - (e < 0) || +e;
                });
            const d = function (e) {
              var t,
                n,
                r,
                i,
                c,
                u,
                d,
                f,
                v,
                h,
                p,
                m,
                b,
                g,
                w,
                y,
                M,
                k,
                S,
                O,
                E,
                x,
                A,
                L,
                j,
                Z,
                P,
                C,
                T,
                q,
                z,
                D,
                _,
                I,
                V =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Y = "data-keen-slider-moves",
                B = "data-keen-slider-v",
                X = [],
                H = null,
                F = !1,
                W = !1,
                N = 0,
                R = [];
              function U(e, t, n) {
                var r =
                  arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                e.addEventListener(t, n, r), X.push([e, t, n, r]);
              }
              function $(e) {
                if (k && S === Q(e) && se()) {
                  var n = te(e).x;
                  if (!re(e) && L) return J(e);
                  L && (Fe(), (O = n), (L = !1)), e.cancelable && e.preventDefault();
                  var r = O - n;
                  (j += Math.abs(r)),
                    !Z && j > 5 && ((Z = !0), t.setAttribute(Y, !0)),
                    De(A(r, Ge) * (de() ? -1 : 1), e.timeStamp),
                    (O = n);
                }
              }
              function G(e) {
                k ||
                  !se() ||
                  ne(e.target) ||
                  ((k = !0),
                  (L = !0),
                  (S = Q(e)),
                  (Z = !1),
                  (j = 0),
                  re(e),
                  pe(),
                  (M = h),
                  (O = te(e).x),
                  De(0, e.timeStamp),
                  ce("dragStart"));
              }
              function J(e) {
                k &&
                  S === Q(e, !0) &&
                  se() &&
                  (t.removeAttribute(Y), (k = !1), ge(), ce("dragEnd"));
              }
              function K(e) {
                return e.changedTouches;
              }
              function Q(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = t ? K(e) : ee(e);
                return n ? (n[0] ? n[0].identifier : "error") : "default";
              }
              function ee(e) {
                return e.targetTouches;
              }
              function te(e) {
                var t = ee(e);
                return {
                  x: ve() ? (t ? t[0].screenY : e.pageY) : t ? t[0].screenX : e.pageX,
                  timestamp: e.timeStamp,
                };
              }
              function ne(e) {
                return e.hasAttribute(y.preventEvent);
              }
              function re(e) {
                var t = ee(e);
                if (!t) return !0;
                var n = t[0],
                  r = ve() ? n.clientY : n.clientX,
                  i = ve() ? n.clientX : n.clientY,
                  o =
                    void 0 !== E &&
                    void 0 !== x &&
                    Math.abs(x - i) <= Math.abs(E - r);
                return (E = r), (x = i), o;
              }
              function ie(e) {
                se() && k && e.preventDefault();
              }
              function oe() {
                U(window, "orientationchange", Pe),
                  U(window, "resize", function () {
                    return Ze();
                  }),
                  U(t, "dragstart", function (e) {
                    se() && e.preventDefault();
                  }),
                  U(t, "mousedown", G),
                  U(y.cancelOnLeave ? t : window, "mousemove", $),
                  y.cancelOnLeave && U(t, "mouseleave", J),
                  U(window, "mouseup", J),
                  U(t, "touchstart", G, { passive: !0 }),
                  U(t, "touchmove", $, { passive: !1 }),
                  U(t, "touchend", J, { passive: !0 }),
                  U(t, "touchcancel", J, { passive: !0 }),
                  U(window, "wheel", ie, { passive: !1 });
              }
              function ae() {
                X.forEach(function (e) {
                  e[0].removeEventListener(e[1], e[2], e[3]);
                }),
                  (X = []);
              }
              function ce(e) {
                y[e] && y[e](Ge);
              }
              function ue() {
                return y.centered;
              }
              function se() {
                return void 0 !== n ? n : y.controls;
              }
              function le() {
                return y.loop && r > 1;
              }
              function de() {
                return y.rtl;
              }
              function fe() {
                return !y.loop && y.rubberband;
              }
              function ve() {
                return !!y.vertical;
              }
              function he() {
                P = window.requestAnimationFrame(me);
              }
              function pe() {
                P && (window.cancelAnimationFrame(P), (P = null)), (C = null);
              }
              function me(e) {
                C || (C = e);
                var t = e - C,
                  n = be(t);
                if (t >= q) return De(T - D, !1), I ? I() : void ce("afterChange");
                var r = _e(n);
                if (0 === r || le() || fe() || _) {
                  if (0 !== r && fe() && !_) return Se();
                  (D += n), De(n, !1), he();
                } else De(n - r, !1);
              }
              function be(e) {
                return T * z(e / q) - D;
              }
              function ge() {
                switch ((ce("beforeChange"), y.mode)) {
                  case "free":
                    Me();
                    break;
                  case "free-snap":
                    ke();
                    break;
                  default:
                    we();
                }
              }
              function we() {
                ye((1 === d && 0 !== p ? M : h) + Math.sign(p));
              }
              function ye(e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : y.duration,
                  r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  o = function (e) {
                    return 1 + --e * e * e * e * e;
                  };
                Oe(Be((e = Ye(e, r, i))), n, o, t);
              }
              function Me() {
                if (0 === b) return !(!_e(0) || le()) && ye(h);
                var e = y.friction / Math.pow(Math.abs(b), -0.5);
                Oe(
                  (Math.pow(b, 2) / e) * Math.sign(b),
                  6 * Math.abs(b / e),
                  function (e) {
                    return 1 - Math.pow(1 - e, 5);
                  }
                );
              }
              function ke() {
                if (0 === b) return ye(h);
                var e = y.friction / Math.pow(Math.abs(b), -0.5),
                  t = (Math.pow(b, 2) / e) * Math.sign(b),
                  n = 6 * Math.abs(b / e),
                  r = (N + t) / (u / d);
                Oe(
                  (-1 === p ? Math.floor(r) : Math.ceil(r)) * (u / d) - N,
                  n,
                  function (e) {
                    return 1 - Math.pow(1 - e, 5);
                  }
                );
              }
              function Se() {
                if ((pe(), 0 === b)) return ye(h, !0);
                var e = 0.04 / Math.pow(Math.abs(b), -0.5),
                  t = (Math.pow(b, 2) / e) * Math.sign(b),
                  n = function (e) {
                    return --e * e * e + 1;
                  },
                  r = b;
                Oe(t, 3 * Math.abs(r / e), n, !0, function () {
                  Oe(Be(Ye(h)), 500, n, !0);
                });
              }
              function Oe(e, t, n, r, i) {
                pe(),
                  (T = e),
                  (D = 0),
                  (q = t),
                  (z = n),
                  (_ = r),
                  (I = i),
                  (C = null),
                  he();
              }
              function Ee(n) {
                var r = s(e);
                r.length && ((t = r[0]), Ze(n), oe(), ce("mounted"));
              }
              function xe() {
                var e,
                  t = V.breakpoints || [];
                for (var n in t) window.matchMedia(n).matches && (e = n);
                if (e === H) return !0;
                var r = (H = e) ? t[H] : V;
                r.breakpoints && H && delete r.breakpoints,
                  (y = o(o(o({}, $e), V), r)),
                  (F = !0),
                  (v = null),
                  ce("optionsChanged"),
                  je();
              }
              function Ae(e) {
                if ("function" == typeof e) return e();
                var t = y.autoAdjustSlidesPerView;
                t || (r = Math.max(e, r));
                var n = le() && t ? r - 1 : r;
                return l(e, 1, Math.max(n, 1));
              }
              function Le() {
                xe(), (W = !0), ce("created");
              }
              function je(e, t) {
                e && (V = e), t && (H = null), Ce(), Ee(t);
              }
              function Ze(e) {
                var n = window.innerWidth;
                if (xe() && (n !== v || e)) {
                  v = n;
                  var o = y.slides;
                  "number" == typeof o
                    ? ((c = null), (r = o))
                    : ((c = s(o, t)), (r = c ? c.length : 0));
                  var a = y.dragSpeed;
                  (A =
                    "function" == typeof a
                      ? a
                      : function (e) {
                          return e * a;
                        }),
                    (u = ve() ? t.offsetHeight : t.offsetWidth),
                    (d = Ae(y.slidesPerView)),
                    (f = l(y.spacing, 0, u / (d - 1) - 1)),
                    (u += f),
                    (i = ue() ? (u / 2 - u / d / 2) / u : 0),
                    qe();
                  var p = !W || (F && y.resetSlide) ? y.initial : h;
                  Ue(le() ? p : Ie(p)), ve() && t.setAttribute(B, !0), (F = !1);
                }
              }
              function Pe(e) {
                Ze(), setTimeout(Ze, 500), setTimeout(Ze, 2e3);
              }
              function Ce() {
                ae(),
                  ze(),
                  t && t.hasAttribute(B) && t.removeAttribute(B),
                  ce("destroyed");
              }
              function Te() {
                c &&
                  c.forEach(function (e, t) {
                    var n =
                        g[t].distance * u - t * (u / d - f / d - (f / d) * (d - 1)),
                      r = ve() ? 0 : n,
                      i = ve() ? n : 0,
                      o = "translate3d(".concat(r, "px, ").concat(i, "px, 0)");
                    (e.style.transform = o), (e.style["-webkit-transform"] = o);
                  });
              }
              function qe() {
                c &&
                  c.forEach(function (e) {
                    var t = "calc("
                      .concat(100 / d, "% - ")
                      .concat((f / d) * (d - 1), "px)");
                    ve()
                      ? ((e.style["min-height"] = t), (e.style["max-height"] = t))
                      : ((e.style["min-width"] = t), (e.style["max-width"] = t));
                  });
              }
              function ze() {
                if (c) {
                  var e = ["transform", "-webkit-transform"];
                  (e = [].concat(
                    a(e),
                    ve ? ["min-height", "max-height"] : ["min-width", "max-width"]
                  )),
                    c.forEach(function (t) {
                      e.forEach(function (e) {
                        t.style.removeProperty(e);
                      });
                    });
                }
              }
              function De(e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : Date.now();
                He(e, n), t && (e = Ne(e)), (N += e), We();
              }
              function _e(e) {
                var t = (u * (r - 1 * (ue() ? 1 : d))) / d,
                  n = N + e;
                return n > t ? n - t : n < 0 ? n : 0;
              }
              function Ie(e) {
                return l(e, 0, r - 1 - (ue() ? 0 : d - 1));
              }
              function Ve() {
                var e = Math.abs(w),
                  t = N < 0 ? 1 - e : e;
                return {
                  direction: p,
                  progressTrack: t,
                  progressSlides: (t * r) / (r - 1),
                  positions: g,
                  position: N,
                  speed: b,
                  relativeSlide: ((h % r) + r) % r,
                  absoluteSlide: h,
                  size: r,
                  slidesPerView: d,
                  widthOrHeight: u,
                };
              }
              function Ye(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return le() ? (t ? Xe(e, n) : e) : Ie(e);
              }
              function Be(e) {
                return -((-u / d) * e + N);
              }
              function Xe(e, t) {
                var n = ((h % r) + r) % r,
                  i = n < (e = ((e % r) + r) % r) ? -n - r + e : -(n - e),
                  o = n > e ? r - n + e : e - n,
                  a = t ? (Math.abs(i) <= o ? i : o) : e < n ? i : o;
                return h + a;
              }
              function He(e, t) {
                clearTimeout(m);
                var n = Math.sign(e);
                if (
                  (n !== p && Fe(),
                  (p = n),
                  R.push({ distance: e, time: t }),
                  (m = setTimeout(function () {
                    (R = []), (b = 0);
                  }, 50)),
                  (R = R.slice(-6)).length <= 1 || 0 === p)
                )
                  return (b = 0);
                var r = R.slice(0, -1).reduce(function (e, t) {
                    return e + t.distance;
                  }, 0),
                  i = R[R.length - 1].time,
                  o = R[0].time;
                b = l(r / (i - o), -10, 10);
              }
              function Fe() {
                R = [];
              }
              function We() {
                (w = le() ? (N % ((u * r) / d)) / ((u * r) / d) : N / ((u * r) / d)),
                  Re();
                for (var e = [], t = 0; t < r; t++) {
                  var n = (((1 / r) * t - (w < 0 && le() ? w + 1 : w)) * r) / d + i;
                  le() &&
                    (n += n > (r - 1) / d ? -r / d : n < -r / d + 1 ? r / d : 0);
                  var o = 1 / d,
                    a = n + o,
                    c = a < o ? a / o : a > 1 ? 1 - ((a - 1) * d) / 1 : 1;
                  e.push({
                    portion: c < 0 || c > 1 ? 0 : c,
                    distance: de() ? -1 * n + 1 - o : n,
                  });
                }
                (g = e), Te(), ce("move");
              }
              function Ne(e) {
                if (le()) return e;
                var t,
                  n = _e(e);
                return fe()
                  ? 0 === n
                    ? e
                    : e * ((t = n / u), (1 - Math.abs(t)) * (1 - Math.abs(t)))
                  : e - n;
              }
              function Re() {
                var e = Math.round(N / (u / d));
                e !== h &&
                  ((!le() && (e < 0 || e > r - 1)) || ((h = e), ce("slideChanged")));
              }
              function Ue(e) {
                ce("beforeChange"), De(Be(e), !1), ce("afterChange");
              }
              var $e = {
                  autoAdjustSlidesPerView: !0,
                  centered: !1,
                  breakpoints: null,
                  controls: !0,
                  dragSpeed: 1,
                  friction: 0.0025,
                  loop: !1,
                  initial: 0,
                  duration: 500,
                  preventEvent: "data-keen-slider-pe",
                  slides: ".keen-slider__slide",
                  vertical: !1,
                  resetSlide: !1,
                  slidesPerView: 1,
                  spacing: 0,
                  mode: "snap",
                  rtl: !1,
                  rubberband: !0,
                  cancelOnLeave: !0,
                },
                Ge = {
                  controls: function (e) {
                    n = e;
                  },
                  destroy: Ce,
                  refresh: function (e) {
                    je(e, !0);
                  },
                  next: function () {
                    ye(h + 1, !0);
                  },
                  prev: function () {
                    ye(h - 1, !0);
                  },
                  moveToSlide: function (e, t) {
                    ye(e, !0, t);
                  },
                  moveToSlideRelative: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = arguments.length > 2 ? arguments[2] : void 0;
                    ye(e, !0, n, !0, t);
                  },
                  resize: function () {
                    Ze(!0);
                  },
                  details: function () {
                    return Ve();
                  },
                  options: function () {
                    var e = o({}, y);
                    return delete e.breakpoints, e;
                  },
                };
              return Le(), Ge;
            };
          },
        },
      ]);
      

