(self.webpackChunk = self.webpackChunk || []).push([
  [2143],
  {
    59425: (e, n, t) => {
      "use strict";
      t(33948);
      var i = t(94435),
        a = t.n(i),
        r = (t(85255), t(91317)),
        o = t.n(r),
        s = t(69461),
        l = t(25533),
        c = (t(77090), t(48383)),
        d = t(85835),
        p = t(93476),
        u = t.n(p),
        m = t(65566),
        g = t(21306),
        y = t.n(g),
        v = t(20116),
        w = t.n(v),
        f = t(26295),
        h = t.n(f),
        j = t(3271),
        _ = t(87926);
      var b = t(31955),
        C = t(78208),
        Z = t(19017);
      const D = () => {
          (0, C.Z)(
            () => {
              var e, n;
              return (
                "undefined" != typeof tC &&
                "function" ==
                  typeof (null === (e = tC) ||
                  void 0 === e ||
                  null === (n = e.event) ||
                  void 0 === n
                    ? void 0
                    : n.dataLayerVariablesLoaded)
              );
            },
            () => {
              tC.event.dataLayerVariablesLoaded(),
                console.log("data layer loaded"),
                (0, C.Z)(
                  () => "undefined" != typeof gtag,
                  () => {
                    window.tcReadyForGaTags = !0;
                    const e = new Event("tcReadyForGaTagsEvent");
                    document.body.dispatchEvent(e),
                      Z.Z.log("GA events ready to fire");
                  }
                );
            }
          );
        },
        L = async () =>
          new (u())((e, n) => {
            const t = b.Z.get("enableLocalEnvTC"),
              { tcContainerSrc: i, devEnv: a } = window,
              r = !a || "1" === t;
            if (i && r)
              try {
                const n = (0, m.Z)(i),
                  t = (async () =>
                    new (u())((e, n) => {
                      (async () => {
                        try {
                          var t;
                          let n;
                          if (
                            window.syncDataLayerVars &&
                            !(0, j.Z)(window.syncDataLayerVars)
                          )
                            n = window.syncDataLayerVars;
                          else {
                        
                          }
                        ;
                          e({
                            dataLayerVariables: n,
                            definedDataLayerVariables: o,
                          });
                        } catch (e) {
                          n(e);
                        }
                      })();
                    }))();
                u()
                  .all([n, t])
                  .then((n) => {
                    let [, t] = n;
                    const {
                      dataLayerVariables: i,
                      definedDataLayerVariables: a,
                    } = t;
                    (window.dl_vars = i),
                      (window.tc_vars = { ...window.tc_vars, ...a }),
                      window.skipPageEventTrackingLoad || D(),
                      e();
                  });
              } catch (e) {
                n(e);
              }
            else r ? n(Error("Tag Commander src not loaded")) : e();
          });
      var k = t(82131);
      const V = (e) => {
        let { name: n, delta: t, id: i } = e;
        (0, C.Z)(
          () => "function" == typeof gtag,
          () => {
            gtag("event", n, {
              event_category: "Web Vitals",
              event_label: i,
              value: Math.round("CLS" === n ? 1e3 * t : t),
              non_interaction: !0,
            });
          }
        );
      };
      var x = t(92762),
        P = t.n(x);
      function T() {
        try {
          var e,
            n,
            t = ga.getAll();
          for (e = 0, n = t.length; e < n; e += 1)
            if (t[e].get("trackingId") === tC.internalvars.ga_UA)
              return t[e].get("clientId");
        } catch (e) {}
        return "false";
      }
      var E = t(77766),
        S = t.n(E);
      function I() {
        var e;
        const n = new Date().getTime().toString(),
          t = Math.random().toString(36).substring(5).toString();
        return S()((e = "".concat(n, "."))).call(e, t);
      }
      function O() {
        const e = new Date(),
          n = -e.getTimezoneOffset(),
          t = n >= 0 ? "+" : "-";
        function i(e) {
          const n = Math.abs(Math.floor(e));
          return (n < 10 ? "0" : "") + n;
        }
        return (
          e.getFullYear() +
          "-" +
          i(e.getMonth() + 1) +
          "-" +
          i(e.getDate()) +
          "T" +
          i(e.getHours()) +
          ":" +
          i(e.getMinutes()) +
          ":" +
          i(e.getSeconds()) +
          "." +
          i(e.getMilliseconds()) +
          t +
          i(n / 60) +
          ":" +
          i(n % 60)
        );
      }
      var A = t(81643),
        F = t.n(A),
        z = t(3649),
        M = t.n(z);
      function R(e) {
        var n, t, i, a;
        function r(e) {
          return (document.cookie.match("(^|; )" + e + "=([^;]*)") || 0)[2];
        }
        function o(e, n, t) {
          var i = new Date();
          i.setTime(i.getTime() + 864e5 * t);
          var a = void 0 !== t ? ";expires=" + i.toGMTString() : "";
          document.cookie =
            e + "=" + n + a + ";domain=" + l[0].setDomain + ";path=/";
        }
        function s(e) {
          var n;
          return -1 != F()((n = document.location.search)).call(n, e)
            ? ("" + document.location.search.split(e + "=")[1]).split("&")[0]
            : "not-set";
        }
        w()(Array.prototype) ||
          (Array.prototype.filter = function (e) {
            if (null == this) throw new TypeError();
            var n = Object(this),
              t = n.length >>> 0;
            if ("function" != typeof e) throw new TypeError();
            for (
              var i = [],
                a = 2 <= arguments.length ? arguments[1] : void 0,
                r = 0;
              r < t;
              r++
            )
              if (r in n) {
                var o = n[r];
                e.call(a, o, r, n) && i.push(o);
              }
            return i;
          });
        var l = [];
        l = w()(e).call(e, function (e) {
          if (e.setDomain) return e;
        });
        0 === l.length && (l[0] = { setDomain: document.location.hostname });
        var c = void 0 !== r("__sreff") ? r("__sreff") : "",
          d = void 0 !== r("__reff") ? r("__reff") : "",
          p = [],
          u = [],
          m = "",
          g = "",
          y = "",
          v = "";
        return (
          (y =
            -1 != F()((n = document.location.search)).call(n, "utm_campaign") ||
            -1 != F()((t = document.location.search)).call(t, "utm_medium") ||
            -1 != F()((i = document.location.search)).call(i, "utm_source")
              ? "//campaign::c:[" +
                s("utm_campaign") +
                "]m:[" +
                s("utm_medium") +
                "]s:[" +
                s("utm_source") +
                "]"
              : document.referrer),
          (y =
            void 0 ===
              (y =
                -1 != F()((a = document.location.search)).call(a, "gclid")
                  ? "//campaign::[adwords]"
                  : y) ||
            "" == y ||
            -1 != F()(y).call(y, l[0].setDomain)
              ? "(direct)"
              : y.split("/")[2]),
          c
            ? (((p = c.split("."))[1] = new Date().getTime()),
              p[2]++,
              (c = p.join(".")))
            : ((p[0] = p[1] = new Date().getTime()),
              (p[2] = 1),
              (c = p.join(".")),
              (v = 1)),
          o("__sreff", c),
          1 == v
            ? o("__reff", (g = "" != d ? d + "|" : "") + y + "&" + c, 730)
            : ((m =
                "" != (m = (u = d.split("|"))[u.length - 1]).split("&")[0]
                  ? m.split("&")[0]
                  : y),
              (g = 1 == u.length ? "" : M()(u).call(u, 0, -1).join("|") + "|"),
              "(direct)" == y || -1 != F()(y).call(y, m.split("&")[0])
                ? o("__reff", g + m + "&" + c, 730)
                : o("__reff", d + "|" + y + "&" + c, 730)),
          r("__reff")
        );
      }
      var U = t(48930);
      const B = () => {
        const e = (0, U.Z)(".notify-airship");
        var n;
        null !== e &&
          ((n = e),
          (0, C.Z)(
            () => "undefined" != typeof UA,
            () => {
              UA.then((e) => {
                var t;
                "denied" === e.permission ||
                  (null !== e.channel &&
                    !1 !==
                      (null == e || null === (t = e.channel) || void 0 === t
                        ? void 0
                        : t.opt_in)) ||
                  (n.classList.remove("d-none"),
                  (0, U.Z)("#refuse-notif").addEventListener("click", () => {
                    n.classList.add("d-none"),
                      b.Z.set("prompt_html_refused", "1", {
                        path: "/",
                        expires: 15,
                      });
                  }),
                  (0, U.Z)("#accept-notif").addEventListener("click", () => {
                    e.register(), n.classList.add("d-none");
                  }),
                  b.Z.get("prompt_html_refused") && n.classList.add("d-none")),
                  null !== e.channel &&
                    "" !== tc_vars.user_sk &&
                    e.channel.attributes
                      .set({ subscriber_key: tc_vars.user_sk })
                      .then(() => {
                        Z.Z.log("Subscriber Key updated");
                      })
                      .catch((e) => {
                        Z.Z.error(
                          "An error occured while setting attributes: %s",
                          e
                        );
                      }),
                  e.localeOverride.setLanguage(domainLang),
                  e.localeOverride.setCountry(countryCode);
              });
            }
          ));
      };
      var N = t(32366),
        G = t.n(N),
        H = t(10062),
        W = t.n(H),
        q = t(78914),
        X = t.n(q),
        K = t(77149),
        Y = t.n(K),
        J = t(47811),
        Q = t.n(J),
        $ = t(33032),
        ee = t.n($);
      function ne(e, n) {
        var t;
        if (null == e) return;
        const i =
          null !==
            (t =
              null == n
                ? void 0
                : G()(n).call(
                    n,
                    (e, n) => {
                      const t = null !== n ? n.offsetHeight : 0;
                      return Math.max(e, t);
                    },
                    0
                  )) && void 0 !== t
            ? t
            : 0;
        e.style.bottom = "".concat(i + 10, "px");
      }
      const te = () => {
        var e;
        const { envTemplate: n } = window,
          t = W()(
            (e = [
              "basket",
              "funnel",
              "funnel-confirmation",
              "landing",
              "area-personale",
            ])
          ).call(e, (e) => e !== n),
          i = (0, U.Z)(".zendesk-button"),
          a = (0, U.Z)("#tc-privacy-wrapper");
        if (!t || null === i) return;
        const r = new MutationObserver((e, n) => {
          null !== a
            ? null == e ||
              X()(e).call(e, (e) => {
                var t;
                i &&
                  Y()((t = Q()(...e.removedNodes))).call(t, (e) => e === a) &&
                  (ne(i, [(0, U.Z)(".recap-mobile")]), n.disconnect());
              })
            : n.disconnect();
        });
        r.observe(document.body, { childList: !0 });
        const o = (e) => {
            (0, C.Z)(
              () => {
                var e, n;
                return (
                  "undefined" != typeof tC &&
                  void 0 !==
                    (null === (e = tC) ||
                    void 0 === e ||
                    null === (n = e.event) ||
                    void 0 === n
                      ? void 0
                      : n.loadZendesk)
                );
              },
              () => {
                tC.event.loadZendesk("Zendesk tag"), e && e();
              }
            );
          },
          s = () => {
            (0, C.Z)(
              () => "undefined" != typeof zE,
              () => {
                zE("webWidget", "open"),
                  (0, C.Z)(
                    () => {
                      const e = (0, U.Z)("#launcher"),
                        n = (0, U.Z)("#webWidget");
                      return (
                        null !== e && null !== n && "1" === n.style.opacity
                      );
                    },
                    () => {
                      i.classList.remove("visible"),
                        b.Z.set("pp_zd_hasOpened", 1, {
                          path: "/",
                          expires: 30,
                        });
                    }
                  );
              }
            );
          };
        b.Z.get("pp_zd_hasOpened")
          ? o()
          : ee()(() => {
              ne(i, [
                (0, U.Z)("#footer_tc_privacy"),
                (0, U.Z)(".recap-mobile"),
              ]),
                i.classList.add("visible");
            }, 1e3),
          i.addEventListener("click", () => {
            (i.querySelector(".text").innerHTML = "Loading"), o(s);
          });
      };
      var ie, ae;
      const re =
        -1 !==
          F()((ie = navigator.userAgent.toUpperCase())).call(ie, "TRIDENT/") ||
        -1 !== F()((ae = navigator.userAgent.toUpperCase())).call(ae, "MSIE");
      var oe = t(17283),
        se = t(44985);
      const le = () => {
          (0, k.kz)((e) => {
            V(e);
          }),
            (0, k.Tx)((e) => {
              V(e);
            }),
            (0, k.Tb)((e) => {
              V(e);
            });
          const e = null !== (0, U.Z)(".keen-slider.banner"),
            n = null !== (0, U.Z)(".main-footer");
          re && Promise.all([t.e(7061), t.e(4464)]).then(t.bind(t, 44464)),
            n &&
              (Promise.all([t.e(6573), t.e(3180)]).then(t.bind(t, 43180)),
              t
                .e(9348)
                .then(t.bind(t, 87438))
                .then((e) => {
                  e.default();
                })),
            e &&
              t
                .e(4649)
                .then(t.bind(t, 89877))
                .then((e) => {
                  e.default();
                }),
            (0, oe.Z)(async () => {
              try {
                await L(),
                  (0, C.Z)(
                    () => window.analytics && "" !== window.serverAnalyticsId,
                    () => {
                      window.analytics.setAnonymousId(window.serverAnalyticsId);
                    }
                  ),
                  (0, C.Z)(
                    () => {
                      var e;
                      return (
                        "undefined" != typeof tC &&
                        void 0 !==
                          (null === (e = tC) || void 0 === e
                            ? void 0
                            : e.internalvars) &&
                        "undefined" != typeof ga
                      );
                    },
                    () => {
                      window.dataLayer = window.dataLayer || [];
                      let e = document.location.hostname.split(".");
                      var n, t;
                      e.length > 1
                        ? (P()(e).call(e, 0, 1), (e = ".".concat(e.join("."))))
                        : (e = ".".concat(e, ".")),
                        dataLayer.push({ getSetReff: "v1.0", setDomain: e }),
                        (window.customDimensionsData = {
                          userID: "",
                          clientID: T(),
                          sessionID: I(),
                          hitTimeStamp: O(),
                          megaCookie: R(dataLayer),
                          customerID: "",
                        }),
                        "undefined" != typeof tc_vars &&
                          (null !== (n = tc_vars) &&
                            void 0 !== n &&
                            n.user_sk &&
                            (window.customDimensionsData.userID =
                              tc_vars.user_sk),
                          null !== (t = tc_vars) &&
                            void 0 !== t &&
                            t.user_id &&
                            (window.customDimensionsData.customerID =
                              tc_vars.user_id)),
                        (0, c.Z)(
                          "Set Custom Dimensions",
                          "custom_dimensions_data_set",
                          { custom_data: window.customDimensionsData }
                        );
                    }
                  ),
                  B(),
                  te();
              } catch (e) {
                Z.Z.warn(e);
              }
            }),
            (0, se.Z)("click", "#footer_tc_privacy_button", () => {
              (0, c.Z)("Footer Privacy Accept", "ga_event", {
                type: "Box Privacy Bottom",
                action: "Clicked Cookie Area",
                label: "Accept",
              });
            }),
            (0, se.Z)(
              "click",
              "#footer_tc_privacy_text a[onclick^='tC.privacyCenter']",
              () => {
                (0, c.Z)("Footer Privacy Change", "ga_event", {
                  type: "Box Privacy Bottom",
                  action: "Clicked Cookie Area",
                  label: "Change configuration",
                });
              }
            );
        },
        ce = {
          "landing.loss-leader": ["loss-leader"],
          "landing.black-friday": ["black-friday"],
          "landing.pixmas": ["pixmas"],
          "landing.winter-promo": ["winter-promo"],
          "landing.spring-promo": ["spring-promo"],
          "landing.summer-promo": ["summer-promo"],
          "landing.printing-deals": ["printing-deals"],
          "landing.french-days": ["french-days"],
          "landing.birthday": ["birthday"],
          "landing.happy-hour": ["happy-hour"],
          "landing.pixartpro_printers": ["pixartpro-landing"],
          "landing.pixartpro_creatives": ["pixartpro-landing"],
          "landing.print_with_pixartprinting": ["print-with-pixartpro-landing"],
          "landing.starway": ["starway"],
          "catalogue.home": ["home", "home-category-product"],
          "layouts.catalogue": [
            "catalogue",
            "home-category-product",
            "reevoo-reviews",
            "product-recommender-standalone",
          ],
          "layouts.product": [
            "product",
            "home-category-product",
            "product-recommender-standalone",
          ],
          "layouts.landing-seo": ["landing-seo"],
          "layouts.company": ["company-general"],
          "product.product-preview": [
            "product-preview",
            "product-recommender-standalone",
          ],
          "company.company-profile": ["company-profile"],
          "company.glossary": ["glossary"],
          "company.help-center": ["help-center"],
          "company.password-reset": ["reset-password"],
          "company.registration": ["registration"],
          "company.search": [
            "company-search",
            "product-recommender-standalone",
          ],
          "company.services": ["services"],
          "company.site-map": ["site-map"],
          "company.unsubscribe": ["unsubscribe"],
          "purchase-funnel.cart": ["cart"],
          "purchase-funnel.recap": ["recap"],
          "purchase-funnel.thank-you": [
            "purchase-failure",
            "payment",
            "purchase-recap",
            "payment-common-style",
          ],
          "purchase-funnel.payment": ["payment", "payment-common-style"],
          "purchase-funnel.payment-result": ["payment-common-style"],
          "layouts.upload": ["upload-area"],
          "personal-area.personal-area": ["personal-area"],
          "personal-area.starway-user": ["starway-user"],
          "personal-area.addresses": ["addresses"],
          "personal-area.profile": ["profile"],
          "personal-area.pixartpro": ["pixartpro"],
          "personal-area.order": ["order"],
          "personal-area.orders": ["orders"],
          "personal-area.orders-with-legacy": ["orders-with-legacy"],
          "personal-area.legacy-orders": ["legacy-orders"],
          "personal-area.legacy-order": ["legacy-order-details"],
          "personal-area.cards": ["cards"],
          "personal-area.employee-discount": ["employee-discount"],
          "design-experience.dex-product": ["design-experience-product"],
          "design-experience.dex-upload": ["design-experience-upload"],
          "design-service.creation-upload": ["design-service"],
          "design-service.revision-upload": ["design-service"],
          "design-service.creation-standalone": ["design-service"],
          "design-service.revision-standalone": ["design-service"],
          "landing.design-services": ["design-services"],
          "errors.404": ["errors", "product-recommender-standalone"],
          "errors.404-exception": ["errors"],
          "design-template-gallery.design-template-gallery-product": [
            "design-template-gallery-product",
          ],
          "design-template-gallery.design-template-gallery-upload": [
            "design-template-gallery-upload",
          ],
        },
        de = () => {
          (window.tcTrackEvent = c.Z), (window.EventBus = d.Z);
          (lazySizes.cfg.init = !1),
            window.addEventListener("load", lazySizes.init),
            (o().config.devtools = !window.mstPrd),
            (o().config.ignoredElements = ["reevoo-embedded-product-reviews"]),
            o().component("b-button", s.T),
            o().use(l.k),
            document.getElementById("main-header") &&
              Promise.all([
                t.e(811),
                t.e(418),
                t.e(4674),
                t.e(7374),
                t.e(226),
                t.e(8162),
                t.e(3193),
                t.e(9233),
                t.e(2070),
              ])
                .then(t.bind(t, 91482))
                .then((e) => {
                  e.default();
                }),
            le(),
            (() => {
              var e;
              window.mstPrd ||
                Promise.all([
                  t.e(811),
                  t.e(9192),
                  t.e(7374),
                  t.e(3193),
                  t.e(2785),
                ])
                  .then(t.bind(t, 35666))
                  .then(() => {}),
                window.layoutTemplate in ce &&
                  X()((e = ce[window.layoutTemplate])).call(e, (e) => {
                    t(63632)("./".concat(e, ".js")).then(() => {});
                  });
            })();
        };
      if (
        Element.prototype.matches &&
        Element.prototype.closest &&
        window.ResizeObserver &&
        window.Intl &&
        window.Intl.DisplayNames &&
        window.Intl.DateTimeFormat &&
        window.Intl.DateTimeFormat.prototype.formatToParts &&
        window.Intl.Locale &&
        window.Intl.NumberFormat &&
        window.Intl.getCanonicalLocales &&
        a() &&
        window.fetch
      )
        de();
      else {
        const { domainLang: e } = window,
          n =
            "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.matches%2CURLSearchParams%2CElement.prototype.closest%2CResizeObserver%2C" +
            "Intl.~locale.".concat(
              e,
              "%2CIntl.DateTimeFormat%2CIntl.DateTimeFormat.prototype.formatToParts%2C"
            ) +
            "Intl.DisplayNames.~locale.".concat(
              e,
              "%2CIntl.Locale%2CIntl.NumberFormat%2CIntl.getCanonicalLocales%2Cfetch"
            );
        (0, m.Z)(n).then(() => {
          de();
        });
      }
    },
    85255: (e, n, t) => {
    
    },
    19017: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => o });
      var i, a;
      t(33948);
      const r =
          "test" !==
            ("undefined" != typeof process &&
              (null === (i = process) ||
              void 0 === i ||
              null === (a = i.env) ||
              void 0 === a
                ? void 0
                : "production")) && !window.mstPrd,
        o = {
          log() {
            r && console.log(...arguments);
          },
          info() {
            r && console.info(...arguments);
          },
          error() {
            r && console.error(...arguments);
          },
          warn() {
            r && console.warn(...arguments);
          },
        };
    },
    48930: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => i });
      const i = function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : document;
        return n.querySelector(e);
      };
    },
    44985: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => i });
      const i = (e, n, t) => {
        document.addEventListener(
          e,
          (e) => {
            const i = e.target.closest(n);
            i && t(e, i);
          },
          !1
        );
      };
    },
    65566: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => r });
      var i = t(93476),
        a = t.n(i);
      const r = (e) =>
        new (a())((n, t) => {
          const i = document.createElement("script");
          (i.src = e),
            (i.async = !0),
            (i.onerror = t),
            (i.onload = i.onreadystatechange =
              function () {
                const e = this.readyState;
                (e && "loaded" !== e && "complete" !== e) ||
                  ((i.onload = i.onreadystatechange = null), n());
              }),
            document.head.appendChild(i);
        });
    },
    17283: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => i });
      const i = (e) => {
        "loading" !== document.readyState
          ? e()
          : document.addEventListener("DOMContentLoaded", e);
      };
    },
    85835: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => a });
      var i = t(91317);
      const a = new (t.n(i)())();
    },
    48383: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => r });
      var i = t(94198),
        a = t.n(i);
      function r(e, n, t) {
  
        try {
         
        } catch (e) {
         
        }
      }
    },
    3271: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => s });
      var i = t(78580),
        a = t.n(i),
        r = t(26295),
        o = t.n(r);
      const s = (e) => {
        var n, t;
        return (
          a()((n = [Object, Array])).call(
            n,
            null === (t = e || {}) || void 0 === t ? void 0 : t.constructor
          ) && !o()(e || {}).length
        );
      };
    },
    87926: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => i });
      const i = (e) => null === e;
    },
    78208: (e, n, t) => {
      "use strict";
      t.d(n, { Z: () => r });
      var i = t(33032),
        a = t.n(i);
      const r = function (e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 250,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 5e3,
          r = 0;
        const o = () => {
          !0 === e() ? n() : r <= i && ((r += t), a()(o, t));
        };
        o();
      };
    },
    63632: (e, n, t) => {
      var i = {
        "./addresses.js": [
          39770, 2412, 811, 4079, 5030, 9305, 3621, 7034, 7374, 1655, 3193, 251,
          9736, 6031,
        ],
        "./birthday.js": [38133, 2412, 7858, 3870, 3547],
        "./black-friday.js": [57013, 2412, 7858, 6654, 2405],
        "./cards.js": [
          23615, 2412, 811, 4079, 3644, 7374, 6408, 3770, 3193, 1822,
        ],
        "./cart.js": [
          98369, 2412, 811, 6929, 8034, 7139, 6847, 5288, 7374, 3193, 677, 1954,
        ],
        "./catalogue.js": [26221, 2412, 5289, 2454, 2055, 6557, 8278],
        "./company-general.js": [75245, 2412, 819, 7374, 3193, 5743],
        "./company-profile.js": [29022, 2412, 5289, 819, 2454, 2246, 8329],
        "./company-search.js": [29447, 2412, 819, 9572, 2567],
        "./design-experience-product.js": [
          51810, 2412, 309, 27, 6062, 8610, 2164, 9784, 6446, 7374, 226, 2177,
          7844, 3193, 1707, 7609, 5387,
        ],
        "./design-experience-upload.js": [
          9294, 2412, 309, 27, 6062, 2164, 9784, 3683, 7374, 226, 7844, 3193,
          1707, 4776,
        ],
        "./design-service.js": [
          15569, 2412, 811, 5289, 7858, 7766, 1548, 9859, 7374, 7441, 6775,
          3193, 7286, 973,
        ],
        "./design-services.js": [
          21823, 2412, 5289, 309, 7858, 1313, 6230, 9859, 7374, 3193, 8952,
        ],
        "./design-template-gallery-product.js": [
          564, 2412, 811, 309, 27, 6062, 1751, 9784, 7374, 226, 2177, 7844, 755,
          3193, 8260, 1707, 5902, 8202,
        ],
        "./design-template-gallery-upload.js": [
          64354, 2412, 811, 5289, 309, 27, 6062, 3153, 1751, 6569, 7374, 226,
          7844, 3193, 1707, 5456, 1355,
        ],
        "./employee-discount.js": [
          71682, 2412, 811, 4079, 2217, 7374, 7844, 3193, 5115,
        ],
        "./errors.js": [40485, 2412, 7899, 9981],
        "./french-days.js": [27236, 2412, 7858, 128, 3697],
        "./glossary.js": [15739, 2412, 819, 5788, 6180],
        "./happy-hour.js": [79473, 2412, 7858, 6229, 6090],
        "./help-center.js": [21416, 2412, 819, 7926, 2427],
        "./home-category-product.js": [44496, 6122],
        "./home.js": [49316, 2412, 5289, 2055, 2561, 5662],
        "./init/initAddressesView.js": [
          19181, 811, 5030, 9305, 3621, 7374, 1655, 3193, 251, 9736,
        ],
        "./init/initBannerSlideshow.js": [89877, 4649],
        "./init/initBirthdayView.js": [
          53653, 3127, 1950, 5549, 8216, 7374, 3193, 8765, 6991,
        ],
        "./init/initBlackFridayView.js": [
          69642, 3127, 7744, 7374, 3193, 8765, 6168,
        ],
        "./init/initCardsView.js": [
          71950, 811, 3644, 7374, 6408, 3770, 3193, 1020,
        ],
        "./init/initCartView.js": [
          71130, 811, 6929, 8034, 6847, 7374, 3193, 677,
        ],
        "./init/initCategoryView.js": [98126, 2454, 7667],
        "./init/initChangeDomain.js": [40812, 811, 9192, 7374, 3193, 3410],
        "./init/initCompanyGeneralView.js": [99498, 7374, 3193, 2152],
        "./init/initCompanyProfileView.js": [13707, 2454, 1070],
        "./init/initCompanyView.js": [48684, 811, 5030, 2365, 7374, 3193, 3395],
        "./init/initDesignExperienceProduct.js": [
          21569, 309, 27, 6062, 8610, 2164, 6446, 7374, 226, 2177, 7844, 3193,
          1707, 7609,
        ],
        "./init/initDesignExperienceUpload.js": [
          78374, 309, 27, 6062, 2164, 3683, 7374, 226, 7844, 3193, 1707, 663,
        ],
        "./init/initDesignServiceView.js": [
          89692, 811, 5289, 7766, 1548, 7374, 7441, 6775, 3193, 7286,
        ],
        "./init/initDesignServicesView.js": [
          41251, 5289, 309, 1313, 6230, 7374, 3193, 5922,
        ],
        "./init/initDesignTemplateGalleryProduct.js": [
          45244, 811, 309, 27, 6062, 1751, 7374, 226, 2177, 7844, 755, 3193,
          8260, 1707, 5902,
        ],
        "./init/initDesignTemplateGalleryUpload.js": [
          97196, 811, 5289, 309, 27, 6062, 3153, 1751, 6569, 7374, 226, 7844,
          3193, 1707, 5456, 3662,
        ],
        "./init/initEmployeeDiscountView.js": [
          52754, 811, 2217, 7374, 7844, 3193, 4111,
        ],
        "./init/initFrenchDaysView.js": [
          80533, 3127, 1950, 5549, 1222, 7374, 3193, 8765, 6994,
        ],
        "./init/initHappyHourView.js": [
          18214, 3127, 8418, 7374, 3193, 8765, 7243,
        ],
        "./init/initHomeView.js": [58151, 7570],
        "./init/initInfiniteScroll.js": [19828, 7531],
        "./init/initLegacyOrderDetailsView.js": [
          66641, 811, 9484, 7374, 1655, 3193, 797,
        ],
        "./init/initLegacyOrdersView.js": [
          35910, 811, 1825, 7374, 226, 3193, 4134, 6380,
        ],
        "./init/initLossLeaderView.js": [
          80223, 811, 7766, 5120, 9229, 7374, 2177, 3193, 8260, 8615,
        ],
        "./init/initMainAppView.js": [
          62068, 811, 418, 4674, 7374, 226, 8162, 3193, 9233,
        ],
        "./init/initMainHeader.js": [
          91482, 811, 418, 4674, 7374, 226, 8162, 3193, 9233, 2070,
        ],
        "./init/initOrderView.js": [
          17435, 811, 5289, 9189, 9136, 7374, 3193, 6328, 4877,
        ],
        "./init/initOrdersView.js": [82249, 9175, 7374, 3193, 7262],
        "./init/initOrdersWithLegacyView.js": [
          96237, 811, 1825, 9175, 6959, 7374, 226, 1655, 3193, 4134, 3500,
        ],
        "./init/initPaymentGatewayView.js": [
          6363, 2037, 7374, 1655, 6368, 3193, 465,
        ],
        "./init/initPixartProLanding.js": [65656, 5176, 7374, 7441, 3193, 1628],
        "./init/initPixartproView.js": [58018, 4659, 7374, 3193, 9343],
        "./init/initPixmasView.js": [
          95595, 3127, 3286, 7374, 7441, 3193, 8765, 2725,
        ],
        "./init/initPrintingDealsView.js": [
          20427, 3127, 1950, 5549, 906, 7374, 3193, 8765, 5392,
        ],
        "./init/initProductPanoramicView.js": [
          10009, 811, 5289, 309, 27, 1313, 3499, 5120, 6230, 5504, 1562, 5168,
          7374, 2177, 7441, 5502, 4839, 3193, 8260, 5994, 1966, 9431,
        ],
        "./init/initProductView.js": [
          80125, 811, 5289, 309, 27, 6929, 1313, 3499, 5120, 2454, 6230, 5504,
          6121, 1562, 7463, 1167, 8613, 7374, 2177, 7441, 5502, 4839, 8300,
          3193, 8260, 5994, 1966, 2838, 3834,
        ],
        "./init/initProfileView.js": [71961, 811, 6228, 7374, 7844, 3193, 5617],
        "./init/initPurchaseFailureView.js": [
          43170, 309, 6929, 8047, 7374, 3193, 6187,
        ],
        "./init/initPurchaseRecapView.js": [71101, 6929, 7374, 3193, 3879],
        "./init/initRecapAddressesView.js": [
          45450, 811, 309, 5030, 6929, 8034, 9305, 9309, 7374, 2177, 5502, 8947,
          3193, 251, 2533,
        ],
        "./init/initReevooReviews.js": [65905, 4952],
        "./init/initSpringPromoView.js": [
          33940, 3127, 1950, 5549, 2620, 7374, 3193, 8765, 9543,
        ],
        "./init/initStarwayLanding.js": [20152, 8297],
        "./init/initStarwayUserView.js": [56487, 7742, 7374, 3193, 6842],
        "./init/initSummerPromoView.js": [
          27724, 3127, 1950, 899, 7374, 3193, 8765, 7144,
        ],
        "./init/initUnsubscribeView.js": [25560, 811, 6522, 7374, 3193, 4999],
        "./init/initUploader.js": [
          8829, 5289, 309, 3499, 6121, 8610, 9189, 7463, 4626, 494, 7374, 3193,
          6328, 2838, 6684,
        ],
        "./init/initWebSockets.js": [81456, 8751, 7442],
        "./init/initWinterPromoView.js": [
          66295, 3127, 1950, 5549, 4746, 7374, 3193, 8765, 1696,
        ],
        "./landing-seo.js": [21818, 2412, 8141, 5149],
        "./legacy-order-details.js": [
          14007, 2412, 811, 5289, 4079, 5906, 9484, 7374, 1655, 3193, 8719,
        ],
        "./legacy-orders.js": [
          41194, 2412, 811, 4079, 1825, 1163, 7374, 226, 3193, 4134, 2594,
        ],
        "./loss-leader.js": [
          59384, 2412, 811, 7858, 7766, 5120, 9229, 6370, 7374, 2177, 3193,
          8260, 8615, 9067,
        ],
        "./order.js": [
          68152, 2412, 811, 5289, 4079, 9189, 5906, 9136, 7374, 3193, 6328,
          8273,
        ],
        "./orders-with-legacy.js": [
          1500, 2412, 811, 4079, 1825, 9175, 1163, 6959, 7374, 226, 1655, 3193,
          4134, 2178,
        ],
        "./orders.js": [96583, 2412, 4079, 9175, 1163, 7374, 3193, 7301],
        "./payment-common-style.js": [86615, 2412, 7139, 7833, 6757],
        "./payment.js": [57717, 575],
        "./personal-area.js": [
          65876, 2412, 4079, 7742, 4598, 5027, 7374, 3193, 7515,
        ],
        "./pixartpro-landing.js": [
          69824, 2412, 5289, 7858, 5176, 8442, 7374, 7441, 3193, 1628, 2532,
        ],
        "./pixartpro.js": [67521, 2412, 4079, 4659, 6634, 7374, 3193, 5727],
        "./pixmas.js": [28103, 2412, 7858, 2240, 1678],
        "./print-with-pixartpro-landing.js": [
          43687, 2412, 5289, 7858, 5176, 8442, 9481, 7374, 7441, 3193, 1628,
          1807,
        ],
        "./printing-deals.js": [37063, 2412, 7858, 8923, 7780],
        "./product-preview.js": [
          47706, 2412, 811, 5289, 309, 27, 1313, 3499, 5120, 6230, 5504, 1562,
          5168, 8800, 7374, 2177, 7441, 5502, 4839, 3193, 8260, 5994, 1966,
          9431, 8519,
        ],
        "./product-recommender-standalone.js": [
          66652, 5289, 6578, 7374, 2177, 3193, 7035,
        ],
        "./product.js": [
          98968, 2412, 811, 5289, 309, 27, 6929, 1313, 3499, 5120, 2454, 6230,
          5504, 6121, 1562, 7463, 1167, 8613, 8800, 7374, 2177, 7441, 5502,
          4839, 8300, 3193, 8260, 5994, 1966, 2838, 3834, 6454,
        ],
        "./profile.js": [
          13282, 2412, 811, 4079, 6228, 7034, 2168, 7374, 7844, 3193, 5617, 312,
        ],
        "./purchase-failure.js": [25500, 1716],
        "./purchase-recap.js": [99798, 6929, 7374, 3193, 3673],
        "./recap.js": [
          66694, 2412, 811, 309, 5030, 6929, 8034, 9305, 7139, 9309, 4706, 7374,
          2177, 5502, 8947, 3193, 251, 2533, 6919,
        ],
        "./reevoo-reviews.js": [29029, 4178],
        "./registration.js": [
          18300, 2412, 811, 5030, 819, 2365, 4780, 7374, 3193, 3395, 5056,
        ],
        "./reset-password.js": [
          25947, 2412, 811, 819, 6228, 4639, 7374, 7844, 3193, 5617, 3857,
        ],
        "./services.js": [84809, 2412, 819, 9827, 6744],
        "./site-map.js": [6121, 2412, 819, 5788, 3022],
        "./spring-promo.js": [73574, 2412, 7858, 5412, 466],
        "./staff.js": [35666, 811, 9192, 7374, 3193, 2785],
        "./starway-user.js": [30187, 2412, 4079, 7742, 4598, 7374, 3193, 7038],
        "./starway.js": [59993, 2412, 5289, 7858, 8724, 3922],
        "./summer-promo.js": [
          12310, 2412, 7858, 3127, 1950, 899, 782, 7374, 3193, 8765, 281,
        ],
        "./unsubscribe.js": [
          74571, 2412, 811, 819, 6522, 7926, 7374, 3193, 3695,
        ],
        "./upload-area.js": [49552, 2412, 5289, 4197, 1894, 343],
        "./winter-promo.js": [75698, 2412, 7858, 5680, 886],
      };
      function a(e) {
        if (!t.o(i, e))
          return Promise.resolve().then(() => {
            var n = new Error("Cannot find module '" + e + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          });
        var n = i[e],
          a = n[0];
        return Promise.all(n.slice(1).map(t.e)).then(() => t(a));
      }
      (a.keys = () => Object.keys(i)), (a.id = 63632), (e.exports = a);
    },
  },
  (e) => {
    e.O(
      0,
      [2143],
      () => {
        [811, 418, 4674, 7374, 226, 8162, 3193, 9233, 2070, 9348, 4649].map(
          e.E
        );
      },
      5
    );
    e.O(0, [7741, 4810], () => {
      return (n = 59425), e((e.s = n));
      var n;
    });
    e.O();
  },
]);
