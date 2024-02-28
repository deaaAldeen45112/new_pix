
async function waitForOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 5000); // 1000 milliseconds = 1 second
    });
}



(self.webpackChunk = self.webpackChunk || []).push([
  [5662, 7570, 7531],
  {
    94473: (e, t, n) => {
      e.exports = n(61577);
    },
    49316: (e, t, n) => {
      "use strict";
      n.r(t);
      var r = n(81643),
        i = n.n(r),
        o = n(66419),
        a = n.n(o),
        c = n(77766),
        s = n.n(c),
        l = n(19828),
        u = n(58151),
        d = n(48930),
        f = n(44985),
        v = n(82762),
        p = n(17283),
        h = n(61464),
        m = n(48383),
        g = n(55435);
      ((0, d.Z)(".global-container").style.opacity = "1"),
        (0, l.default)(),
        (0, u.default)();
      const y = window.envTemplate;
      (0, f.Z)("click", ".home-page-list .card-btn > a", (e) => {
        var t, n, r, o;
        let c = 1;
        c += i()((t = a()((0, v.Z)(".content-keen")))).call(
          t,
          e.target.closest(".content-keen")
        );
        let l = 1;
        (l += i()(
          (n = a()(
            null === (r = e.target.closest(".keen-slider__slide")) ||
              void 0 === r
              ? void 0
              : r.parentElement.children
          ))
        ).call(n, e.target.closest(".keen-slider__slide"))),
          (0, m.Z)("Clicked Grid Menu Position", "ga_event", {
            type: "Clicked Grid Menu Position",
            action: y,
            label: s()((o = "list".concat(c, " - position"))).call(o, l),
          });
      }),
        (0, p.Z)(() => {
          (0, h.Z)("click", ".slider-disclaimer", (e, t) => {
            var n, r;
            (0, g.Z)("showModalForIndexes", "home-modals-container")(
              null == t || null === (n = t.dataset) || void 0 === n
                ? void 0
                : n.iIndex,
              null == t || null === (r = t.dataset) || void 0 === r
                ? void 0
                : r.jIndex
            );
          });
        });
    },
    58151: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      n(33948);
      var r = n(91317),
        i = n.n(r);
      const o = () => {
        new (i())({
          el: "#home-modals-container",
          components: {
            ModalSlideshowDisclaimer: () =>
              Promise.all([n.e(5202), n.e(5577)]).then(n.bind(n, 37884)),
          },
        });
      };
    },
    19828: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => w });
      var r = n(77766),
        i = n.n(r),
        o = n(81643),
        a = n.n(o),
        c = n(78914),
        s = n.n(c),
        l = n(65993),
        u = n(68583),
        d = n(82762),
        f = n(48930),
        v = n(42514),
        p = n(89350),
        h = n(3960);
      const m = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
          new l.Z(e.querySelector(".keen-slider"), {
            slidesPerView: 2,
            spacing: n,
            loop: !0,
            autoAdjustSlidesPerView: !1,
            breakpoints: { "(min-width: 577px)": { slidesPerView: t } },
            created(n) {
              const r = (0, u.Z)().width < 577 ? 2 : t;
              e.querySelectorAll(".keen-slider__slide").length > r &&
                (e.querySelector(".prev").classList.remove("d-none"),
                e.querySelector(".next").classList.remove("d-none"),
                e.querySelector(".prev").addEventListener("click", () => {
                  n.prev();
                }),
                e.querySelector(".next").addEventListener("click", () => {
                  n.next();
                }));
            },
          });
        },
        g = async () => {
          var e, t;
          s()((e = (0, d.Z)(".prod-6-slider-wrapper"))).call(e, (e) => {
            const { opacity: t } = getComputedStyle(e);
            "1" !== t && ((e.style.opacity = 1), m(e, 6, 20));
          });

        //  let categories=await getCategoriesByParentId(null);
        
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

        let divHomeSliderCategories=document.getElementById("div-home-slider-categories");
      
      function  getCategoryPage(){

        console.log("5");
      }
         if(divHomeSliderCategories!=null){
            let categories=await getCategoriesByParentId(null);
           // let categories=await getCategoriesByParentId(null);
              for (let index = 0; index < categories.length; index++) {
                divHomeSliderCategories.innerHTML+=`
                
                <div id="${categories[index].category_id}" class="keen-slider__slide" onclick="getParentCategory(this);">
                <div class="card-btn">
                  <a
                    data-page-id="aYzhwaY4iiue56PX2F5dg"
                    data-page-type="category"
                    class="focus-section-link"
                  >
                    <div class="image-container" >
                      <div class="image-hover"></div>
                      <picture class="">
                     
                        <img
                          src="  ${hostImage+categories[index].category_img}"
                          alt=" ${categories[index].category_name}"
                          class="lazyload" 
                          width="600"
                          height="600"
                        />
                      </picture>
                    </div>
                  </a>
                  <div class="card-body">
                    <a
                       class="card-title focus-section-link"
                      data-page-id="aYzhwaY4iiue56PX2F5dg"
                      data-page-type="category"
                    >
                    ${categories[index].category_name}
                    </a>
                  </div>
                </div>
              </div>`
   
              }
       
           }

            s()((t = (0, d.Z)(".prod-5-slider-wrapper"))).call(t, (e) => {
              const { opacity: t } = getComputedStyle(e);
              "1" !== t && ((e.style.opacity = 1), m(e, 5, 20));
            }),
            (0, h.Z)((0, d.Z)(".keen-prod-list .card-body"));
        
        
            const n = (0, f.Z)(".keen-prod-list .card-body");
          if (n) {
            const e = (0, f.Z)(".keen-prod-list .image-container"),
              t = (0, v.Z)(n),
              r = (0, p.Z)(getComputedStyle(n).marginBottom),
              i = ((0, p.Z)(getComputedStyle(e).marginBottom) + t + r) / 2,
              o = (0, d.Z)(".product-section");
            s()(o).call(o, (e) => {
              const t = (0, d.Z)(".keen-slider-arrow", e);
              s()(t).call(t, (e) => {
                e.style.marginTop = "-".concat(i, "px");
              });
            });
          }








        },
        y = (e, t) => {
          if (a()(t).call(t, e) > -1) return;
          const n = (0, f.Z)("#infinite-scroll-mount"),
            r = (0, f.Z)(".loader-container");
          r.classList.remove("d-none");
          const o = e + 1;
          t.push(e),
            (async (e, t) => {
              var n, r;
              const { pageId: o } = window,
                a = i()(
                  (n = i()(
                    (r = "/view/load-content/?entry_id=".concat(o, "&offset="))
                  ).call(r, e, "&limit="))
                ).call(n, t),
                c = await axios.get(a);
              return null == c ? void 0 : c.data;
            })(o, 1).then((e) => {
              r.classList.add("d-none"),
                null !== n &&
                  e &&
                  (n.insertAdjacentHTML("beforeend", e), g(), y(o, t));
            });
        },
        w = () => {
          window.addEventListener("load", async () => {
            g();
          });
          const e = [];
          document.addEventListener("scroll", () => {
            const t = (0, d.Z)(".content-block"),
              n = window.pageYOffset;
            s()(t).call(t, (t, r) => {
              const i = ((e, t) =>
                t + window.innerHeight >= e.getBoundingClientRect().top + t)(
                t,
                n
              );
              i && y(r, e);
            });
          });
        };
    },
    55435: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(94473),
        i = n.n(r);
      const o = (e, t) => {
        var n;
        const r = document.getElementById(t).__vue__,
          o = null == r ? void 0 : r.$children;
        return null === (n = i()(o).call(o, (t) => e in t)) || void 0 === n
          ? void 0
          : n[e];
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
    61464: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(78914),
        i = n.n(r);
      const o = (e, t, n) => {
        const r = document.querySelectorAll(t);
        i()(r).call(r, (t) => {
          t.addEventListener(e, (e) => {
            n(e, t);
          });
        });
      };
    },
    42514: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      n(15306);
      var r = n(31238),
        i = n.n(r);
      const o = (e) =>
        e ? i()(getComputedStyle(e, null).height.replace("px", "")) : 0;
    },
    68583: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      const r = () => {
        const e = document.documentElement,
          { clientWidth: t, clientHeight: n } = e;
        return { width: t, height: n };
      };
    },
    3960: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var r = n(78914),
        i = n.n(r),
        o = n(42514);
      function a(e) {
        let t = 0;
        i()(e).call(e, (e) => {
          const n = (0, o.Z)(e);
          n > t && (t = n);
        }),
          t > 0 &&
            i()(e).call(e, (e) => {
              e.style.height = "".concat(t, "px");
            });
      }
    },
    89350: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(94198),
        i = n.n(r);
      const o = (e) => i()(e, 10);
    },
    17671: (e, t, n) => {
      n(80833);
      var r = n(35703);
      e.exports = r("Array").find;
    },
    32236: (e, t, n) => {
      var r = n(17671),
        i = Array.prototype;
      e.exports = function (e) {
        var t = e.find;
        return e === i || (e instanceof Array && t === i.find) ? r : t;
      };
    },
    80833: (e, t, n) => {
      "use strict";
      var r = n(76887),
        i = n(3610).find,
        o = n(18479),
        a = n(65486),
        c = "find",
        s = !0,
        l = a(c);
      c in [] &&
        Array(1).find(function () {
          s = !1;
        }),
        r(
          { target: "Array", proto: !0, forced: s || !l },
          {
            find: function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        o(c);
    },
    61577: (e, t, n) => {
      var r = n(32236);
      e.exports = r;
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
      function s(e) {
        return Array.prototype.slice.call(e);
      }
      function l(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : document;
        return "function" == typeof e
          ? s(e())
          : "string" == typeof e
          ? s(t.querySelectorAll(e))
          : e instanceof HTMLElement != 0
          ? [e]
          : e instanceof NodeList != 0
          ? e
          : [];
      }
      function u(e, t, n) {
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
          s,
          d,
          f,
          v,
          p,
          h,
          m,
          g,
          y,
          w,
          b,
          M,
          S,
          k,
          Z,
          x,
          A,
          O,
          E,
          j,
          P,
          C,
          L,
          T,
          _,
          q,
          D,
          I,
          V,
          H =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Y = "data-keen-slider-moves",
          B = "data-keen-slider-v",
          X = [],
          z = null,
          F = !1,
          W = !1,
          G = 0,
          R = [];
        function $(e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          e.addEventListener(t, n, r), X.push([e, t, n, r]);
        }
        function N(e) {
          if (S && k === Q(e) && le()) {
            var n = te(e).x;
            if (!re(e) && E) return J(e);
            E && (Fe(), (Z = n), (E = !1)), e.cancelable && e.preventDefault();
            var r = Z - n;
            (j += Math.abs(r)),
              !P && j > 5 && ((P = !0), t.setAttribute(Y, !0)),
              De(O(r, Ue) * (de() ? -1 : 1), e.timeStamp),
              (Z = n);
          }
        }
        function U(e) {
          S ||
            !le() ||
            ne(e.target) ||
            ((S = !0),
            (E = !0),
            (k = Q(e)),
            (P = !1),
            (j = 0),
            re(e),
            he(),
            (M = p),
            (Z = te(e).x),
            De(0, e.timeStamp),
            ce("dragStart"));
        }
        function J(e) {
          S &&
            k === Q(e, !0) &&
            le() &&
            (t.removeAttribute(Y), (S = !1), ye(), ce("dragEnd"));
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
          return e.hasAttribute(b.preventEvent);
        }
        function re(e) {
          var t = ee(e);
          if (!t) return !0;
          var n = t[0],
            r = ve() ? n.clientY : n.clientX,
            i = ve() ? n.clientX : n.clientY,
            o =
              void 0 !== x &&
              void 0 !== A &&
              Math.abs(A - i) <= Math.abs(x - r);
          return (x = r), (A = i), o;
        }
        function ie(e) {
          le() && S && e.preventDefault();
        }
        function oe() {
          $(window, "orientationchange", Ce),
            $(window, "resize", function () {
              return Pe();
            }),
            $(t, "dragstart", function (e) {
              le() && e.preventDefault();
            }),
            $(t, "mousedown", U),
            $(b.cancelOnLeave ? t : window, "mousemove", N),
            b.cancelOnLeave && $(t, "mouseleave", J),
            $(window, "mouseup", J),
            $(t, "touchstart", U, { passive: !0 }),
            $(t, "touchmove", N, { passive: !1 }),
            $(t, "touchend", J, { passive: !0 }),
            $(t, "touchcancel", J, { passive: !0 }),
            $(window, "wheel", ie, { passive: !1 });
        }
        function ae() {
          X.forEach(function (e) {
            e[0].removeEventListener(e[1], e[2], e[3]);
          }),
            (X = []);
        }
        function ce(e) {
          b[e] && b[e](Ue);
        }
        function se() {
          return b.centered;
        }
        function le() {
          return void 0 !== n ? n : b.controls;
        }
        function ue() {
          return b.loop && r > 1;
        }
        function de() {
          return b.rtl;
        }
        function fe() {
          return !b.loop && b.rubberband;
        }
        function ve() {
          return !!b.vertical;
        }
        function pe() {
          C = window.requestAnimationFrame(me);
        }
        function he() {
          C && (window.cancelAnimationFrame(C), (C = null)), (L = null);
        }
        function me(e) {
          L || (L = e);
          var t = e - L,
            n = ge(t);
          if (t >= _) return De(T - D, !1), V ? V() : void ce("afterChange");
          var r = Ie(n);
          if (0 === r || ue() || fe() || I) {
            if (0 !== r && fe() && !I) return ke();
            (D += n), De(n, !1), pe();
          } else De(n - r, !1);
        }
        function ge(e) {
          return T * q(e / _) - D;
        }
        function ye() {
          switch ((ce("beforeChange"), b.mode)) {
            case "free":
              Me();
              break;
            case "free-snap":
              Se();
              break;
            default:
              we();
          }
        }
        function we() {
          be((1 === d && 0 !== h ? M : p) + Math.sign(h));
        }
        function be(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : b.duration,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = function (e) {
              return 1 + --e * e * e * e * e;
            };
          Ze(Be((e = Ye(e, r, i))), n, o, t);
        }
        function Me() {
          if (0 === g) return !(!Ie(0) || ue()) && be(p);
          var e = b.friction / Math.pow(Math.abs(g), -0.5);
          Ze(
            (Math.pow(g, 2) / e) * Math.sign(g),
            6 * Math.abs(g / e),
            function (e) {
              return 1 - Math.pow(1 - e, 5);
            }
          );
        }
        function Se() {
          if (0 === g) return be(p);
          var e = b.friction / Math.pow(Math.abs(g), -0.5),
            t = (Math.pow(g, 2) / e) * Math.sign(g),
            n = 6 * Math.abs(g / e),
            r = (G + t) / (s / d);
          Ze(
            (-1 === h ? Math.floor(r) : Math.ceil(r)) * (s / d) - G,
            n,
            function (e) {
              return 1 - Math.pow(1 - e, 5);
            }
          );
        }
        function ke() {
          if ((he(), 0 === g)) return be(p, !0);
          var e = 0.04 / Math.pow(Math.abs(g), -0.5),
            t = (Math.pow(g, 2) / e) * Math.sign(g),
            n = function (e) {
              return --e * e * e + 1;
            },
            r = g;
          Ze(t, 3 * Math.abs(r / e), n, !0, function () {
            Ze(Be(Ye(p)), 500, n, !0);
          });
        }
        function Ze(e, t, n, r, i) {
          he(),
            (T = e),
            (D = 0),
            (_ = t),
            (q = n),
            (I = r),
            (V = i),
            (L = null),
            pe();
        }
        function xe(n) {
          var r = l(e);
          r.length && ((t = r[0]), Pe(n), oe(), ce("mounted"));
        }
        function Ae() {
          var e,
            t = H.breakpoints || [];
          for (var n in t) window.matchMedia(n).matches && (e = n);
          if (e === z) return !0;
          var r = (z = e) ? t[z] : H;
          r.breakpoints && z && delete r.breakpoints,
            (b = o(o(o({}, Ne), H), r)),
            (F = !0),
            (v = null),
            ce("optionsChanged"),
            je();
        }
        function Oe(e) {
          if ("function" == typeof e) return e();
          var t = b.autoAdjustSlidesPerView;
          t || (r = Math.max(e, r));
          var n = ue() && t ? r - 1 : r;
          return u(e, 1, Math.max(n, 1));
        }
        function Ee() {
          Ae(), (W = !0), ce("created");
        }
        function je(e, t) {
          e && (H = e), t && (z = null), Le(), xe(t);
        }
        function Pe(e) {
          var n = window.innerWidth;
          if (Ae() && (n !== v || e)) {
            v = n;
            var o = b.slides;
            "number" == typeof o
              ? ((c = null), (r = o))
              : ((c = l(o, t)), (r = c ? c.length : 0));
            var a = b.dragSpeed;
            (O =
              "function" == typeof a
                ? a
                : function (e) {
                    return e * a;
                  }),
              (s = ve() ? t.offsetHeight : t.offsetWidth),
              (d = Oe(b.slidesPerView)),
              (f = u(b.spacing, 0, s / (d - 1) - 1)),
              (s += f),
              (i = se() ? (s / 2 - s / d / 2) / s : 0),
              _e();
            var h = !W || (F && b.resetSlide) ? b.initial : p;
            $e(ue() ? h : Ve(h)), ve() && t.setAttribute(B, !0), (F = !1);
          }
        }
        function Ce(e) {
          Pe(), setTimeout(Pe, 500), setTimeout(Pe, 2e3);
        }
        function Le() {
          ae(),
            qe(),
            t && t.hasAttribute(B) && t.removeAttribute(B),
            ce("destroyed");
        }
        function Te() {
          c &&
            c.forEach(function (e, t) {
              var n =
                  y[t].distance * s - t * (s / d - f / d - (f / d) * (d - 1)),
                r = ve() ? 0 : n,
                i = ve() ? n : 0,
                o = "translate3d(".concat(r, "px, ").concat(i, "px, 0)");
              (e.style.transform = o), (e.style["-webkit-transform"] = o);
            });
        }
        function _e() {
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
        function qe() {
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
          ze(e, n), t && (e = Ge(e)), (G += e), We();
        }
        function Ie(e) {
          var t = (s * (r - 1 * (se() ? 1 : d))) / d,
            n = G + e;
          return n > t ? n - t : n < 0 ? n : 0;
        }
        function Ve(e) {
          return u(e, 0, r - 1 - (se() ? 0 : d - 1));
        }
        function He() {
          var e = Math.abs(w),
            t = G < 0 ? 1 - e : e;
          return {
            direction: h,
            progressTrack: t,
            progressSlides: (t * r) / (r - 1),
            positions: y,
            position: G,
            speed: g,
            relativeSlide: ((p % r) + r) % r,
            absoluteSlide: p,
            size: r,
            slidesPerView: d,
            widthOrHeight: s,
          };
        }
        function Ye(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return ue() ? (t ? Xe(e, n) : e) : Ve(e);
        }
        function Be(e) {
          return -((-s / d) * e + G);
        }
        function Xe(e, t) {
          var n = ((p % r) + r) % r,
            i = n < (e = ((e % r) + r) % r) ? -n - r + e : -(n - e),
            o = n > e ? r - n + e : e - n,
            a = t ? (Math.abs(i) <= o ? i : o) : e < n ? i : o;
          return p + a;
        }
        function ze(e, t) {
          clearTimeout(m);
          var n = Math.sign(e);
          if (
            (n !== h && Fe(),
            (h = n),
            R.push({ distance: e, time: t }),
            (m = setTimeout(function () {
              (R = []), (g = 0);
            }, 50)),
            (R = R.slice(-6)).length <= 1 || 0 === h)
          )
            return (g = 0);
          var r = R.slice(0, -1).reduce(function (e, t) {
              return e + t.distance;
            }, 0),
            i = R[R.length - 1].time,
            o = R[0].time;
          g = u(r / (i - o), -10, 10);
        }
        function Fe() {
          R = [];
        }
        function We() {
          (w = ue() ? (G % ((s * r) / d)) / ((s * r) / d) : G / ((s * r) / d)),
            Re();
          for (var e = [], t = 0; t < r; t++) {
            var n = (((1 / r) * t - (w < 0 && ue() ? w + 1 : w)) * r) / d + i;
            ue() &&
              (n += n > (r - 1) / d ? -r / d : n < -r / d + 1 ? r / d : 0);
            var o = 1 / d,
              a = n + o,
              c = a < o ? a / o : a > 1 ? 1 - ((a - 1) * d) / 1 : 1;
            e.push({
              portion: c < 0 || c > 1 ? 0 : c,
              distance: de() ? -1 * n + 1 - o : n,
            });
          }
          (y = e), Te(), ce("move");
        }
        function Ge(e) {
          if (ue()) return e;
          var t,
            n = Ie(e);
          return fe()
            ? 0 === n
              ? e
              : e * ((t = n / s), (1 - Math.abs(t)) * (1 - Math.abs(t)))
            : e - n;
        }
        function Re() {
          var e = Math.round(G / (s / d));
          e !== p &&
            ((!ue() && (e < 0 || e > r - 1)) || ((p = e), ce("slideChanged")));
        }
        function $e(e) {
          ce("beforeChange"), De(Be(e), !1), ce("afterChange");
        }
        var Ne = {
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
          Ue = {
            controls: function (e) {
              n = e;
            },
            destroy: Le,
            refresh: function (e) {
              je(e, !0);
            },
            next: function () {
              be(p + 1, !0);
            },
            prev: function () {
              be(p - 1, !0);
            },
            moveToSlide: function (e, t) {
              be(e, !0, t);
            },
            moveToSlideRelative: function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0;
              be(e, !0, n, !0, t);
            },
            resize: function () {
              Pe(!0);
            },
            details: function () {
              return He();
            },
            options: function () {
              var e = o({}, b);
              return delete e.breakpoints, e;
            },
          };
        return Ee(), Ue;
      };
    },
  },
]);
