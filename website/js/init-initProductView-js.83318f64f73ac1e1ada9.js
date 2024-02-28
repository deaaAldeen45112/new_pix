"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [3834],
  {
    5178: (t, e, i) => {
      i.r(e), i.d(e, { default: () => Wt });
      i(33948);
      var a = i(91317),
        s = i.n(a),
        n = i(32639),
        r = i(40664),
        o = i(55857),
        c = i(4747),
        l = i(77766),
        d = i.n(l),
        u = i(41511),
        p = i.n(u),
        v = i(20116),
        h = i.n(v),
        m = i(20629),
        g = i(17370),
        _ = i(61581),
        y = i(24247),
        f = i(3297),
        b = i(42294),
        C = i(36726);
      const V = {
        name: "ProductRecapButtons",
        props: {
          isMobile: { type: Boolean },
          recapEnabled: { type: Boolean },
          isAdding: { type: Boolean },
          isPriceLimitExceed: { type: Boolean },
          isEditView: { type: Boolean },
          buttonActiveId: { type: String, required: !1 },
          isDesignerExperienceEnabled: { type: Boolean, required: !1 },
          changingProductConfig: { type: Boolean, required: !1 },
        },
        components: { BSpinner: n.X },
        computed: {
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          ...(0, m.Se)("templates", ["hasTemplateDesign"]),
        },
        methods: {
          recapAction() {
            this.isEditView &&
            "design-stack" === this.buttonActiveId &&
            this.changingProductConfig
              ? (this.$root.$emit("bv::show::modal", "modal-edit-item-alert"),
                this.$store.dispatch("product/setOpenDexClicked", !1))
              : this.isEditView
              ? this.$emit("updateJobClick")
              : this.$emit("addToCartClick");
          },
          goToCart() {
            this.$emit("goToCartClick");
          },
          buttonDesignAction() {
            this.$emit("buttonDesignAction", "design-stack");
          },
        },
      };
      var w = i(51900);
      const S = (0, w.Z)(
        V,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { class: { mobile: t.isMobile } }, [
            t._v("\n    " + t._s() + "\n    "),
            i(
              "button",
              {
                staticClass: "btn green-btn send-to-cart d-lg-flex d-none",
                class: {
                  "loading-content": !t.recapEnabled,
                  "update-job": t.isEditView,
                },
                attrs: { disabled: !t.recapEnabled || t.isAdding },
                on: {
                  click: function (e) {
                    return (
                      e.stopPropagation(), t.recapAction.apply(null, arguments)
                    );
                  },
                },
              },
              [
                t.isPriceLimitExceed
                  ? [
                      t.isAdding
                        ? i("b-spinner", { attrs: { small: "" } })
                        : i("i", {
                            staticClass:
                              "pixicon icon-newsletter d-none d-sm-block",
                          }),
                      t._v(
                        "\n            " +
                          t._s(
                            t.getDictionaryVoice("common", "contact_pixart")
                          ) +
                          "\n        "
                      ),
                    ]
                  : [
                      t.isAdding
                        ? i("b-spinner", { attrs: { small: "" } })
                        : i("i", { staticClass: "pixicon icon-cart" }),
                      t._v(" "),
                      t.isEditView
                        ? [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.getDictionaryVoice("product", "update_job")
                                ) +
                                "\n            "
                            ),
                          ]
                        : [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.getDictionaryVoice(
                                    "product",
                                    "aggiungi_carrello"
                                  )
                                ) +
                                "\n            "
                            ),
                          ],
                    ],
              ],
              2
            ),
            t._v("\n    " + t._s() + "\n    "),
            t.isEditView
              ? i(
                  "button",
                  {
                    staticClass: "btn cancel-modify red-empty-btn",
                    class: [t.isMobile ? "" : "bigger-btn"],
                    attrs: { disabled: !t.recapEnabled },
                    on: {
                      click: function (e) {
                        return (
                          e.stopPropagation(), t.goToCart.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    t._v(
                      "\n        " +
                        t._s(t.getDictionaryVoice("common", "cancel")) +
                        "\n    "
                    ),
                  ]
                )
              : t._e(),
            t._v("\n    " + t._s() + "\n    "),
            i(
              "button",
              {
                staticClass: "btn green-btn send-to-cart d-block d-lg-none",
                class: {
                  "loading-content": !t.recapEnabled,
                  "update-job": t.isEditView,
                },
                attrs: { disabled: !t.recapEnabled || t.isAdding },
                on: {
                  click: function (e) {
                    return (
                      e.stopPropagation(), t.recapAction.apply(null, arguments)
                    );
                  },
                },
              },
              [
                t.isPriceLimitExceed
                  ? [
                      t.isAdding
                        ? i("b-spinner", { attrs: { small: "" } })
                        : i("i", {
                            staticClass:
                              "pixicon icon-newsletter d-none d-sm-block",
                          }),
                      t._v(
                        "\n            " +
                          t._s(
                            t.getDictionaryVoice("common", "contact_pixart")
                          ) +
                          "\n        "
                      ),
                    ]
                  : [
                      t.isEditView
                        ? [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.getDictionaryVoice("product", "update_job")
                                ) +
                                "\n            "
                            ),
                          ]
                        : [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.getDictionaryVoice(
                                    "product",
                                    "aggiungi_carrello"
                                  )
                                ) +
                                "\n            "
                            ),
                          ],
                    ],
              ],
              2
            ),
          ]);
        },
        [],
        !1,
        null,
        "77c2ae87",
        null
      ).exports;
      var k = i(5437),
        x = i(19059),
        D = i(69505),
        P = i(66024),
        E = i(93628),
        I = i(98271);
      const q = {
        name: "ProductRecapStandard",
        extends: C.Z,
        props: {
          discountedPriceExists: { type: Boolean, required: !0 },
          vatPrice: { type: Object, required: !0 },
          productPriceAllTaxIncluded: { type: Object, required: !0 },
          fileCheck: { type: Boolean, required: !1 },
          validCart: { type: Boolean, required: !1 },
          isAdding: { type: Boolean, required: !1 },
          customConfigResponse: { type: [String, Object], required: !1 },
          isStaff: { type: Boolean, required: !1 },
          isPriceLimitExceed: { type: Boolean, required: !1 },
          designService: { type: [String, Object], required: !1 },
          activeOptionService: { type: String, required: !1 },
          buttonActiveId: { type: String, required: !1 },
          isDesignerExperienceEnabled: { type: Boolean, required: !1 },
          changingProductConfig: { type: Boolean, required: !1 },
          showEmptyShippingPrice: { type: Boolean, required: !1, default: !1 },
        },
        components: {
          BInputGroup: g.w,
          BInputGroupAppend: _.B,
          TransitionExpand: f.Z,
          StickyRecap: b.Z,
          ProductRecapButtons: S,
          ConditionalDisplay: y.Z,
          CustomUrlGenerator: () =>
            Promise.all([i.e(5768), i.e(5514)]).then(i.bind(i, 55479)),
        },
        computed: {
          ...(0, m.Se)("cart", ["currency"]),
          ...(0, m.Se)("product", [
            "options",
            "merchantProductId",
            "designServiceValue",
            "isUnitPriceEnabled",
          ]),
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          ...(0, m.Se)("templates", ["hasTemplateDesign"]),
        },
        data: () => ({ isJobRecapOpen: !1, isOrderRecapOpen: !1 }),
        methods: {
          formatPrice: k.Z,
          formatDate: x.Z,
          isHidden: D.Z,
          getFeatureLabel: P.Z,
          getOptionLabel: E.Z,
          getValueFromOption: I.Z,
          getSelectedDate(t) {
            var e;
            if (null !== (e = this.dates) && void 0 !== e && e[t]) {
              var i;
              const e = this.formatDate(this.dates[t]);
              return d()((i = "".concat(e.day, "/"))).call(i, e.month);
            }
            return "- - -";
          },
          recapValue(t) {
            let e;
            const i = this.getValueFromOption(t);
            var a;
            if ("" !== i)
              if (
                null != t &&
                null !== (a = t.value) &&
                void 0 !== a &&
                a.value &&
                p()(t.value.value)
              ) {
                var s;
                const a = h()((s = t.value.value)).call(s, (t) => t.key === i);
                a[0] && (e = this.getOptionLabel(a[0]));
              } else e = i;
            else e = "Not set";
            return e;
          },
          displayLabel(t) {
            return this.getFeatureLabel(t);
          },
          toggleOrderRecap() {
            this.isOrderRecapOpen = !this.isOrderRecapOpen;
          },
          closeOrderRecap() {
            this.isOrderRecapOpen = !1;
          },
          openOrderRecap() {
            this.isOrderRecapOpen = !0;
          },
          toggleJobRecap() {
            this.isJobRecapOpen = !this.isJobRecapOpen;
          },
          closeJobRecap() {
            this.isJobRecapOpen = !1;
          },
          onButtonDesignAction(t) {
            this.$emit("buttonDesignAction", t);
          },
        },
      };
      const Z = (0, w.Z)(
        q,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.isMobileScreen
            ? i(
                "div",
                {
                  staticClass: "recap recap-mobile d-block d-lg-none",
                  class: { "stacked-top": t.isOrderRecapOpen },
                  on: { click: t.toggleOrderRecap },
                },
                [
                  i("transition-expand", [
                    t.isOrderRecapOpen
                      ? i("div", [
                          i(
                            "div",
                            {
                              staticClass:
                                "order-recap order-recap-mobile container",
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass: "recap-title recap-title-mobile",
                                },
                                [
                                  t._v(
                                    "\n                    " +
                                      t._s(
                                        t.getDictionaryVoice(
                                          "product",
                                          "job_quotation"
                                        )
                                      ) +
                                      "\n                "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              i(
                                "div",
                                { staticClass: "recap-body recap-body-mobile" },
                                [
                                  i(
                                    "div",
                                    { staticClass: "recap-body-upper" },
                                    [
                                      i("div", { staticClass: "line" }, [
                                        i("div", { staticClass: "label" }, [
                                          t._v(
                                            "\n                                " +
                                              t._s(
                                                t.getDictionaryVoice(
                                                  "common",
                                                  "data_consegna"
                                                )
                                              ) +
                                              "\n                            "
                                          ),
                                        ]),
                                        t._v(" "),
                                        i(
                                          "div",
                                          { staticClass: "value" },
                                          [
                                            i(
                                              "conditional-display",
                                              {
                                                attrs: {
                                                  condition:
                                                    !t.datesRequestPending,
                                                  "spinner-variant": "dark",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                    " +
                                                    t._s(
                                                      t.getSelectedDate(
                                                        t.selectedDeliveryDate
                                                      )
                                                    ) +
                                                    "\n                                "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      i("div", { staticClass: "line" }, [
                                        i("div", { staticClass: "label" }, [
                                          t._v(
                                            "\n                                " +
                                              t._s(
                                                t.getDictionaryVoice(
                                                  "common",
                                                  "area_personale_netto"
                                                )
                                              ) +
                                              "\n                            "
                                          ),
                                        ]),
                                        t._v(" "),
                                        i(
                                          "div",
                                          { staticClass: "value" },
                                          [
                                            i(
                                              "conditional-display",
                                              {
                                                attrs: {
                                                  condition:
                                                    !t.priceRequestPending,
                                                  "spinner-variant": "dark",
                                                },
                                              },
                                              [
                                                t.discountedPriceExists
                                                  ? [
                                                      i("del", [
                                                        t._v(
                                                          "\n                                            " +
                                                            t._s(
                                                              t.formatPriceObjectWithCurrency(
                                                                t.selectedPrice
                                                              )
                                                            ) +
                                                            "\n                                        "
                                                        ),
                                                      ]),
                                                    ]
                                                  : [
                                                      t._v(
                                                        "\n                                        " +
                                                          t._s(
                                                            t.formatPriceObjectWithCurrency(
                                                              t.selectedPrice
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      ),
                                                    ],
                                              ],
                                              2
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      t.discountedPriceExists
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "common",
                                                      "discounted_price"
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.formatPriceObjectWithCurrency(
                                                      t.selectedDiscountedPrice
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      t.isUnitPriceEnabled
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }),
                                            t._v(" "),
                                            i(
                                              "div",
                                              { staticClass: "value" },
                                              [
                                                i(
                                                  "conditional-display",
                                                  {
                                                    attrs: {
                                                      condition:
                                                        !t.priceRequestPending,
                                                      "spinner-variant": "dark",
                                                    },
                                                  },
                                                  [
                                                    i(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "unit-price",
                                                        attrs: {
                                                          "data-test":
                                                            "selected-unit-price",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                                        " +
                                                            t._s(
                                                              t.formatPriceWithCurrency(
                                                                t.selectedUnitPrice
                                                              ) +
                                                                "/" +
                                                                t.getDictionaryVoice(
                                                                  "product",
                                                                  "unit_price_label"
                                                                )
                                                            ) +
                                                            "\n                                    "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      t.fileCheck
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "common",
                                                      "titolo_box_verifica_file"
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(
                                                      t.fileCheckValue
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      t.showEmptyShippingPrice
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "cart",
                                                      "cart_shipping_cost_text_title"
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(0)
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      "" !== t.designService &&
                                      "" !== t.activeOptionService
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "designer",
                                                      "service_type_label"
                                                    )
                                                  ) +
                                                  "\n                                " +
                                                  t._s(
                                                    "edit" ===
                                                      t.activeOptionService
                                                      ? t.getDictionaryVoice(
                                                          "designer",
                                                          "title_box1"
                                                        )
                                                      : t.getDictionaryVoice(
                                                          "designer",
                                                          "title_box2"
                                                        )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                                " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(
                                                      t.designServiceValue
                                                    )
                                                  ) +
                                                  "\n                            "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      i("div", { staticClass: "line" }, [
                                        i("div", { staticClass: "label" }, [
                                          t._v(
                                            "\n                                " +
                                              t._s(
                                                t.getDictionaryVoice(
                                                  "common",
                                                  "iva"
                                                )
                                              ) +
                                              "\n                                " +
                                              t._s(
                                                !1 === t.priceRequestPending
                                                  ? t.vatAmountLabel
                                                  : ""
                                              ) +
                                              "\n                            "
                                          ),
                                        ]),
                                        t._v(" "),
                                        i(
                                          "div",
                                          { staticClass: "value" },
                                          [
                                            i(
                                              "conditional-display",
                                              {
                                                attrs: {
                                                  condition:
                                                    !t.priceRequestPending,
                                                  "spinner-variant": "dark",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                    " +
                                                    t._s(
                                                      t.formatPriceObjectWithCurrency(
                                                        t.vatPrice
                                                      )
                                                    ) +
                                                    "\n                                "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ])
                      : t._e(),
                  ]),
                  t._v(" "),
                  i("div", { staticClass: "lower-recap container" }, [
                    i(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        i(
                          "span",
                          {
                            staticClass: "label total-label",
                            class: t.isOrderRecapOpen ? "green" : "",
                          },
                          [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.getDictionaryVoice(
                                    "product",
                                    "preventivo_right"
                                  )
                                ) +
                                "\n            "
                            ),
                          ]
                        ),
                        t._v(" "),
                        i(
                          "div",
                          {
                            staticClass: "preview-price",
                            class: t.isOrderRecapOpen ? "green" : "",
                          },
                          [
                            t._v(
                              "\n                " +
                                t._s(
                                  t.formatPriceObjectWithCurrency(
                                    t.productPriceAllTaxIncluded
                                  )
                                ) +
                                "\n                "
                            ),
                            i("span", { staticClass: "preview-arrow" }, [
                              t.isOrderRecapOpen
                                ? i("i", { staticClass: "fal fa-arrow-down" })
                                : i("i", { staticClass: "fal fa-arrow-up" }),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    i(
                      "div",
                      {
                        staticClass: "recap-btn d-flex justify-content-center",
                      },
                      [
                        i("product-recap-buttons", {
                          attrs: {
                            "recap-enabled": t.recapEnabled,
                            "is-adding": t.isAdding,
                            "is-price-limit-exceed": t.isPriceLimitExceed,
                            "button-active-id": t.buttonActiveId,
                            "is-edit-view": t.isEditView,
                            "is-mobile": !0,
                            "is-designer-experience-enabled":
                              t.isDesignerExperienceEnabled,
                            "changing-product-config": t.changingProductConfig,
                          },
                          on: {
                            updateJobClick: t.updateJob,
                            addToCartClick: t.addToCart,
                            goToCartClick: t.goToCart,
                            buttonDesignAction: t.onButtonDesignAction,
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              )
            : i(
                "div",
                { staticClass: "recap d-none d-lg-block" },
                [
                  i("sticky-recap", {
                    attrs: { "is-open": t.isJobRecapOpen },
                    on: { closeUpperRecap: t.closeJobRecap },
                    scopedSlots: t._u(
                      [
                        {
                          key: "details",
                          fn: function () {
                            return [
                              i(
                                "div",
                                {
                                  staticClass: "title order-recap-title",
                                  on: { click: t.toggleJobRecap },
                                },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(
                                        t.getDictionaryVoice(
                                          "product",
                                          "job_recap"
                                        )
                                      ) +
                                      "\n                "
                                  ),
                                  i(
                                    "span",
                                    { staticClass: "fa-stack toggle-recap" },
                                    [
                                      i("i", {
                                        staticClass:
                                          "fal fa-circle fa-stack-2x",
                                      }),
                                      t._v(" "),
                                      i("i", {
                                        staticClass: "fal fa-stack-1x",
                                        class: t.isJobRecapOpen
                                          ? "fa-minus"
                                          : "fa-plus",
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              i("transition-expand", [
                                t.isJobRecapOpen
                                  ? i("div", [
                                      i(
                                        "div",
                                        { staticClass: "order-recap-body" },
                                        t._l(t.options, function (e, a) {
                                          return t.isHidden(e)
                                            ? t._e()
                                            : i(
                                                "div",
                                                {
                                                  key: a,
                                                  staticClass:
                                                    "order-recap-row",
                                                },
                                                [
                                                  i(
                                                    "div",
                                                    { staticClass: "label" },
                                                    [
                                                      t._v(
                                                        "\n                                " +
                                                          t._s(
                                                            t.displayLabel(e)
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  ),
                                                  t._v(" "),
                                                  i(
                                                    "div",
                                                    { staticClass: "value" },
                                                    [
                                                      t._v(
                                                        "\n                                " +
                                                          t._s(
                                                            t.recapValue(e)
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              );
                                        }),
                                        0
                                      ),
                                    ])
                                  : t._e(),
                              ]),
                            ];
                          },
                          proxy: !0,
                        },
                        {
                          key: "main",
                          fn: function () {
                            return [
                              i(
                                "div",
                                { staticClass: "title job-quotation-title" },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(
                                        t.getDictionaryVoice(
                                          "product",
                                          "job_quotation"
                                        )
                                      ) +
                                      "\n            "
                                  ),
                                ]
                              ),
                              t._v(" "),
                              i(
                                "div",
                                { staticClass: "recap-body" },
                                [
                                  i(
                                    "div",
                                    { staticClass: "recap-body-upper" },
                                    [
                                      i("div", { staticClass: "line" }, [
                                        i("div", { staticClass: "label" }, [
                                          t._v(
                                            "\n                            " +
                                              t._s(
                                                t.getDictionaryVoice(
                                                  "common",
                                                  "data_consegna"
                                                )
                                              ) +
                                              "\n                        "
                                          ),
                                        ]),
                                        t._v(" "),
                                        i(
                                          "div",
                                          { staticClass: "value" },
                                          [
                                            i(
                                              "conditional-display",
                                              {
                                                attrs: {
                                                  condition:
                                                    !t.datesRequestPending,
                                                  "spinner-variant": "dark",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                " +
                                                    t._s(
                                                      t.getSelectedDate(
                                                        t.selectedDeliveryDate
                                                      )
                                                    ) +
                                                    "\n                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          staticClass: "line",
                                          class: {
                                            "line-small-margin":
                                              t.isUnitPriceEnabled &&
                                              !t.discountedPriceExists,
                                          },
                                        },
                                        [
                                          i("div", { staticClass: "label" }, [
                                            t._v(
                                              "\n                            " +
                                                t._s(
                                                  t.getDictionaryVoice(
                                                    "common",
                                                    "area_personale_netto"
                                                  )
                                                ) +
                                                "\n                        "
                                            ),
                                          ]),
                                          t._v(" "),
                                          i(
                                            "div",
                                            { staticClass: "value" },
                                            [
                                              i(
                                                "conditional-display",
                                                {
                                                  attrs: {
                                                    condition:
                                                      !t.priceRequestPending,
                                                    "spinner-variant": "dark",
                                                  },
                                                },
                                                [
                                                  t.discountedPriceExists
                                                    ? [
                                                        i("del", [
                                                          t._v(
                                                            "\n                                        " +
                                                              t._s(
                                                                t.formatPriceObjectWithCurrency(
                                                                  t.selectedPrice
                                                                )
                                                              ) +
                                                              "\n                                    "
                                                          ),
                                                        ]),
                                                      ]
                                                    : i(
                                                        "span",
                                                        {
                                                          attrs: {
                                                            "data-test":
                                                              "selected-price",
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                                    " +
                                                              t._s(
                                                                t.formatPriceObjectWithCurrency(
                                                                  t.selectedPrice
                                                                )
                                                              ) +
                                                              "\n                                "
                                                          ),
                                                        ]
                                                      ),
                                                ],
                                                2
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.discountedPriceExists
                                        ? i(
                                            "div",
                                            {
                                              staticClass: "line",
                                              class: {
                                                "line-small-margin":
                                                  t.isUnitPriceEnabled,
                                              },
                                            },
                                            [
                                              i(
                                                "div",
                                                { staticClass: "label" },
                                                [
                                                  t._v(
                                                    "\n                            " +
                                                      t._s(
                                                        t.getDictionaryVoice(
                                                          "common",
                                                          "discounted_price"
                                                        )
                                                      ) +
                                                      "\n                        "
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              i(
                                                "div",
                                                { staticClass: "value" },
                                                [
                                                  i(
                                                    "span",
                                                    {
                                                      attrs: {
                                                        "data-test":
                                                          "selected-price",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                                " +
                                                          t._s(
                                                            t.formatPriceObjectWithCurrency(
                                                              t.selectedDiscountedPrice
                                                            )
                                                          ) +
                                                          "\n                            "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      t.isUnitPriceEnabled
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }),
                                            t._v(" "),
                                            i(
                                              "div",
                                              { staticClass: "value" },
                                              [
                                                i(
                                                  "conditional-display",
                                                  {
                                                    attrs: {
                                                      condition:
                                                        !t.priceRequestPending,
                                                      "spinner-variant": "dark",
                                                    },
                                                  },
                                                  [
                                                    i(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "unit-price",
                                                        attrs: {
                                                          "data-test":
                                                            "selected-unit-price",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "\n                                    " +
                                                            t._s(
                                                              t.formatPriceWithCurrency(
                                                                t.selectedUnitPrice
                                                              ) +
                                                                "/" +
                                                                t.getDictionaryVoice(
                                                                  "product",
                                                                  "unit_price_label"
                                                                )
                                                            ) +
                                                            "\n                                "
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      t.fileCheck
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "common",
                                                      "titolo_box_verifica_file"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(
                                                      t.fileCheckValue
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      t.showEmptyShippingPrice
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "cart",
                                                      "cart_shipping_cost_text_title"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(0)
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      "" !== t.designService &&
                                      "" !== t.activeOptionService
                                        ? i("div", { staticClass: "line" }, [
                                            i("div", { staticClass: "label" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.getDictionaryVoice(
                                                      "designer",
                                                      "service_type_label"
                                                    )
                                                  ) +
                                                  "\n                            " +
                                                  t._s(
                                                    "edit" ===
                                                      t.activeOptionService
                                                      ? t.getDictionaryVoice(
                                                          "designer",
                                                          "title_box1"
                                                        )
                                                      : t.getDictionaryVoice(
                                                          "designer",
                                                          "title_box2"
                                                        )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                            t._v(" "),
                                            i("div", { staticClass: "value" }, [
                                              t._v(
                                                "\n                            " +
                                                  t._s(
                                                    t.formatPriceWithCurrency(
                                                      t.designServiceValue
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                            ]),
                                          ])
                                        : t._e(),
                                      t._v(" "),
                                      i("div", { staticClass: "line" }, [
                                        i("div", { staticClass: "label" }, [
                                          t._v(
                                            "\n                            " +
                                              t._s(
                                                t.getDictionaryVoice(
                                                  "common",
                                                  "iva"
                                                )
                                              ) +
                                              "\n                            " +
                                              t._s(
                                                !1 === t.priceRequestPending
                                                  ? t.vatAmountLabel
                                                  : ""
                                              ) +
                                              "\n                        "
                                          ),
                                        ]),
                                        t._v(" "),
                                        i(
                                          "div",
                                          { staticClass: "value" },
                                          [
                                            i(
                                              "conditional-display",
                                              {
                                                attrs: {
                                                  condition:
                                                    !t.priceRequestPending,
                                                  "spinner-variant": "dark",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                                " +
                                                    t._s(
                                                      t.formatPriceObjectWithCurrency(
                                                        t.vatPrice
                                                      )
                                                    ) +
                                                    "\n                            "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  i("div", { staticClass: "line" }, [
                                    i(
                                      "span",
                                      { staticClass: "label total-label" },
                                      [
                                        t._v(
                                          "\n                        " +
                                            t._s(
                                              t.getDictionaryVoice(
                                                "product",
                                                "preventivo_right"
                                              )
                                            ) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    i(
                                      "span",
                                      { staticClass: "value total-price" },
                                      [
                                        i(
                                          "conditional-display",
                                          {
                                            attrs: {
                                              condition: !t.priceRequestPending,
                                              "spinner-variant": "green",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                            " +
                                                t._s(
                                                  t.formatPriceObjectWithCurrency(
                                                    t.productPriceAllTaxIncluded
                                                  )
                                                ) +
                                                "\n                        "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                  t._v(" "),
                                  i("product-recap-buttons", {
                                    attrs: {
                                      "recap-enabled": t.recapEnabled,
                                      "is-adding": t.isAdding,
                                      "is-price-limit-exceed":
                                        t.isPriceLimitExceed,
                                      "button-active-id": t.buttonActiveId,
                                      "is-edit-view": t.isEditView,
                                      "is-mobile": !1,
                                      "is-designer-experience-enabled":
                                        t.isDesignerExperienceEnabled,
                                      "changing-product-config":
                                        t.changingProductConfig,
                                    },
                                    on: {
                                      updateJobClick: t.updateJob,
                                      addToCartClick: t.addToCart,
                                      goToCartClick: t.goToCart,
                                      buttonDesignAction:
                                        t.onButtonDesignAction,
                                    },
                                  }),
                                  t._v(" "),
                                  t.isStaff
                                    ? i("custom-url-generator", {
                                        attrs: {
                                          "recap-enabled": t.recapEnabled,
                                          "custom-config-response":
                                            t.customConfigResponse,
                                        },
                                        on: {
                                          getCustomConfigUrlClick:
                                            t.onGetCustomConfigUrlClick,
                                        },
                                      })
                                    : t._e(),
                                ],
                                1
                              ),
                            ];
                          },
                          proxy: !0,
                        },
                      ],
                      null,
                      !1,
                      1946662408
                    ),
                  }),
                ],
                1
              );
        },
        [],
        !1,
        null,
        "55e97f0e",
        null
      ).exports;
      var A = i(69120),
        M = i(74351),
        R = i(10954),
        O = i(83886),
        L = i(89350),
        Q = i(68766),
        T = i(16396),
        $ = i(15994);
      const F = {
        name: "PriceGridStandard",
        extends: M.Z,
        component: { PriceCellContent: R.Z },
        props: { gridRows: { type: Number, required: !1 } },
        components: {
          PriceCellContent: R.Z,
          TransitionExpand: f.Z,
          InfoBox: $.Z,
          BButtonGroup: A.a,
          BSpinner: n.X,
        },
        data: () => ({
          quantityLabelStyle: {},
          quantityButtonsStyle: {},
          showingMoreQuantities: !1,
          scrollRange: 0,
          scrolledAmount: 0,
          cellWidth: 0,
          isInfoOpen: !1,
        }),
        computed: {
          isQuantityToggleVisible() {
            return this.quantities.length > this.gridRows;
          },
          canScrollLeft() {
            return this.scrolledAmount > this.cellWidth - 10;
          },
          canScrollRight() {
            return this.scrolledAmount < this.scrollRange - 10;
          },
          shouldShowInfo() {
            return this.contentExistsForFields(this.optionInfo, [
              "description",
              "gallery",
              "videos",
            ]);
          },
          infoBoxContent() {
            return {
              description: this.getDictionaryVoice(
                "product",
                "price-grid-message"
              ),
            };
          },
          ...(0, m.Se)("prices", ["quantities"]),
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          ...(0, m.Se)("screen", ["screenIs"]),
        },
        methods: {
          formatDate: x.Z,
          isConfigAvailable: T.Z,
          safeParseInt: L.Z,
          dateToHtml(t) {
            var e, i;
            const a = this.formatDate(t);
            return d()(
              (e = d()(
                (i = "<span class='day'>".concat(
                  a.weekday,
                  "</span><span class='dayMonth'>"
                ))
              ).call(i, a.day, "/"))
            ).call(e, a.month, "</span>");
          },
          onQuantityChanged(t) {
            this.updateSelectedConfig(t, this.selectedDeliveryDate);
          },
          columnCount(t) {
            const e = {
              1: "col-md-12",
              2: "col-6 col-md-6",
              3: "col-6 col-md-4",
              4: "col-6 col-md-3",
              5: "col-6 col-md-1-5th",
              6: "col-6 col-md-2",
              default: "col-md-3 col-3",
            };
            return e[t.length] || e.default;
          },
          isQuantitySelected(t) {
            return (
              this.safeParseInt(this.selectedQuantity) === this.safeParseInt(t)
            );
          },
          isConfigSelected(t, e) {
            return this.isDateSelected(t) && this.isQuantitySelected(e);
          },
          isQuantityVisible(t) {
            return !!this.showingMoreQuantities || t + 1 <= this.gridRows;
          },
          isPriceVisible(t, e) {
            const i = this.isQuantityVisible(t),
              a = Boolean(this.prices && this.prices[e]);
            return i && a;
          },
          toggleVisibleQuantities() {
            this.showingMoreQuantities = !this.showingMoreQuantities;
          },
          scrollGrid(t) {
            const e = this.$refs["grid-overflow"];
            "left" === t
              ? (0, O.Z)(e, 0, 300)
              : "right" === t && (0, O.Z)(e, this.scrollRange, 300);
          },
          handleScroll(t) {
            this.scrolledAmount = t.target.scrollLeft;
          },
          updateLayoutValues() {
            var t, e, i, a;
            const s =
                null === (t = this.$refs["date-cell"]) ||
                void 0 === t ||
                null === (e = t[0]) ||
                void 0 === e
                  ? void 0
                  : e.offsetHeight,
              n =
                null === (i = this.$refs["price-cell"]) ||
                void 0 === i ||
                null === (a = i[0]) ||
                void 0 === a
                  ? void 0
                  : a.offsetHeight;
            if (
              ((this.quantityLabelStyle = { height: "".concat(s, "px") }),
              (this.quantityButtonsStyle = { height: "".concat(n, "px") }),
              this.screenIs("mobile"))
            ) {
              var r, o;
              const t =
                null === (r = this.$refs["grid-overflow"]) || void 0 === r
                  ? void 0
                  : r.offsetWidth;
              this.cellWidth =
                null === (o = this.$refs["price-cell"][0]) || void 0 === o
                  ? void 0
                  : o.offsetWidth;
              const e = this.cellWidth * this.deliveryDateKeys.length;
              this.scrollRange = this.safeParseInt(e - t);
            }
          },
          handleResize() {
            this.updateLayoutValues();
          },
          onInfoCloseClick() {
            this.isInfoOpen = !1;
          },
          onInfoOpenClick() {
            this.isInfoOpen = !this.isInfoOpen;
          },
        },
        watch: {
          dataLoaded(t) {
            !0 === t &&
              this.$nextTick(() => {
                this.updateLayoutValues();
              });
          },
        },
        created() {
          window.addEventListener(
            "resize",
            (0, Q.Z)(() => {
              this.handleResize();
            }, 50)
          );
        },
      };
      const N = (0, w.Z)(
        F,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.isLoading
            ? i(
                "div",
                {
                  staticClass: "price-grid text-center loader-xl",
                  class: t.$attrs.class,
                },
                [
                  i("b-spinner", {
                    staticClass: "spinner",
                    attrs: { variant: "primary", label: "Spinning" },
                  }),
                  t._v(" "),
                  i("span", { staticClass: "label" }, [
                    t._v(t._s(t.getDictionaryVoice("common", "loading"))),
                  ]),
                ],
                1
              )
            : t.hasFetchError
            ? i(
                "div",
                {
                  staticClass: "price-grid alert alert-danger",
                  class: t.$attrs.class,
                  attrs: { role: "alert" },
                },
                [
                  t._t("fallback"),
                  t._v(
                    "\n    " +
                      t._s(t.getDictionaryVoice("product", "not_load_prices")) +
                      "\n    "
                  ),
                  t.mstPrd
                    ? t._e()
                    : i("div", [
                        t.debugInfo.length > 0
                          ? i("button", { on: { click: t.toggleDebug } }, [
                              t._v("Toggle debug"),
                            ])
                          : t._e(),
                        t._v(" "),
                        t.showDebug
                          ? i(
                              "div",
                              t._l(t.debugInfo, function (e) {
                                return i("div", [
                                  i("hr"),
                                  t._v(" "),
                                  i("b", [t._v(t._s(e.description))]),
                                  t._v(" "),
                                  i("pre", [t._v(t._s(e.info.message))]),
                                ]);
                              }),
                              0
                            )
                          : t._e(),
                      ]),
                ],
                2
              )
            : t.dataLoaded
            ? i(
                "div",
                {
                  staticClass: "price-grid price_grid_container container",
                  class: t.$attrs.class,
                },
                [
                  t._t("fallback"),
                  t._v(" "),
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 0 !== t.taxRate,
                          expression: "taxRate !== 0",
                        },
                      ],
                      staticClass: "taxes-switch",
                    },
                    [
                      i("label", [
                        t._v(
                          t._s(t.getDictionaryVoice("product", "mostra_prezzi"))
                        ),
                      ]),
                      t._v(" "),
                      i(
                        "b-button-group",
                        [
                          i(
                            "b-button",
                            {
                              class: { active: !1 === t.showingTaxedPrices },
                              attrs: { variant: "primary" },
                              on: {
                                click: function (e) {
                                  return t.setTaxesDisplay(!1);
                                },
                              },
                            },
                            [
                              t._v(
                                t._s(
                                  t.getDictionaryVoice("product", "senza_iva")
                                )
                              ),
                            ]
                          ),
                          t._v(" "),
                          i(
                            "b-button",
                            {
                              class: { active: !0 === t.showingTaxedPrices },
                              attrs: { variant: "primary" },
                              on: {
                                click: function (e) {
                                  return t.setTaxesDisplay(!0);
                                },
                              },
                            },
                            [
                              t._v(
                                t._s(t.getDictionaryVoice("product", "con_iva"))
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t._v(" "),
                  i("div", { staticClass: "row first-row" }, [
                    i("div", { staticClass: "col-3 d-md-none" }),
                    t._v(" "),
                    i("div", { staticClass: "col-9 d-md-none" }, [
                      i(
                        "div",
                        {
                          staticClass:
                            "row heading-base-height mobile-grid-header",
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "col-6 grid_btn_container",
                              on: {
                                click: function (e) {
                                  return t.scrollGrid("left");
                                },
                              },
                            },
                            [
                              t.canScrollLeft
                                ? i("transition", { attrs: { name: "fade" } }, [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "grid_qty_label label-heading",
                                      },
                                      [
                                        i("i", {
                                          staticClass:
                                            "pixicon icon-arrow_left",
                                        }),
                                        t._v(
                                          "\n                            " +
                                            t._s(
                                              t.getDictionaryVoice(
                                                "product",
                                                "griglia_altre_date"
                                              )
                                            ) +
                                            "\n                        "
                                        ),
                                      ]
                                    ),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                          t._v(" "),
                          i(
                            "div",
                            {
                              staticClass:
                                "col-6 grid_btn_container justify-content-end",
                              on: {
                                click: function (e) {
                                  return t.scrollGrid("right");
                                },
                              },
                            },
                            [
                              t.canScrollRight
                                ? i("transition", { attrs: { name: "fade" } }, [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "grid_qty_label label-heading",
                                      },
                                      [
                                        t._v(
                                          "\n                            " +
                                            t._s(
                                              t.getDictionaryVoice(
                                                "product",
                                                "griglia_altre_date"
                                              )
                                            ) +
                                            "\n                            "
                                        ),
                                        i("i", {
                                          staticClass:
                                            "pixicon icon-arrow_right",
                                        }),
                                      ]
                                    ),
                                  ])
                                : t._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    i(
                      "div",
                      { staticClass: "col-3 col-md-1-5th quantities-column" },
                      [
                        i("div", { staticClass: "row heading-base-height" }),
                        t._v(" "),
                        i("div", { staticClass: "row" }, [
                          i(
                            "div",
                            {
                              staticClass:
                                "col-12 grid_btn_container label-container",
                              style: t.quantityLabelStyle,
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass: "grid_qty_label align-items-end",
                                },
                                [
                                  t._v(
                                    "\n                        " +
                                      t._s(
                                        t.getDictionaryVoice(
                                          "product",
                                          "qta_title"
                                        )
                                      ) +
                                      "\n                    "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        t._l(t.quantities, function (e, a) {
                          return t.isQuantityVisible(a)
                            ? i(
                                "div",
                                {
                                  on: {
                                    click: function (i) {
                                      return t.onQuantityChanged(e);
                                    },
                                  },
                                },
                                [
                                  i("div", { staticClass: "row" }, [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "col-12 grid_btn_container quantity-container",
                                        class: [
                                          t.isQuantitySelected(e)
                                            ? "selected"
                                            : "",
                                        ],
                                        style: t.quantityButtonsStyle,
                                      },
                                      [
                                        i(
                                          "div",
                                          { staticClass: "grid_btn qty_btn" },
                                          [
                                            t._v(
                                              "\n                            " +
                                                t._s(e) +
                                                "\n                        "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              )
                            : t._e();
                        }),
                      ],
                      2
                    ),
                    t._v(" "),
                    i(
                      "div",
                      {
                        ref: "grid-overflow",
                        staticClass: "col-9 col-md-4-5th grid-overflow",
                        on: {
                          "&scroll": function (e) {
                            return t.handleScroll.apply(null, arguments);
                          },
                        },
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass:
                              "row heading-base-height d-none d-md-flex",
                          },
                          [
                            i(
                              "div",
                              {
                                staticClass:
                                  "col-12 grid_btn_container label-container",
                              },
                              [
                                i(
                                  "div",
                                  {
                                    staticClass: "grid_qty_label label-heading",
                                  },
                                  [
                                    t._v(
                                      "\n                        " +
                                        t._s(
                                          t.getDictionaryVoice(
                                            "product",
                                            "griglia_altre_date"
                                          )
                                        ) +
                                        "\n                    "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "row row-overflow dates-row" },
                          t._l(t.deliveryDateKeys, function (e) {
                            return i(
                              "div",
                              {
                                ref: "date-cell",
                                refInFor: !0,
                                staticClass:
                                  "grid_btn_container date-container",
                                class: [
                                  t.isDateSelected(e) ? "selected" : "",
                                  t.columnCount(t.deliveryDateKeys),
                                ],
                                on: {
                                  click: function (i) {
                                    return t.onDateChanged(e);
                                  },
                                },
                              },
                              [
                                i(
                                  "div",
                                  { staticClass: "grid_btn date_btn" },
                                  [
                                    t.datesRequestPending
                                      ? i("b-spinner", {
                                          staticClass: "spinner",
                                          attrs: {
                                            variant: "primary",
                                            label: "Spinning",
                                          },
                                        })
                                      : i("span", {
                                          domProps: {
                                            innerHTML: t._s(
                                              t.dateToHtml(t.dates[e])
                                            ),
                                          },
                                        }),
                                  ],
                                  1
                                ),
                              ]
                            );
                          }),
                          0
                        ),
                        t._v(" "),
                        t._l(t.quantities, function (e, a) {
                          return t.isPriceVisible(a, e)
                            ? i(
                                "div",
                                { staticClass: "row row-overflow cells-row" },
                                t._l(t.deliveryDateKeys, function (a) {
                                  return i(
                                    "div",
                                    {
                                      ref: "price-cell",
                                      refInFor: !0,
                                      staticClass:
                                        "grid_btn_container cell-container",
                                      class: [
                                        t.isConfigAvailable(a, t.getPrice(e, a))
                                          ? ""
                                          : "disabled",
                                        t.isConfigSelected(a, e)
                                          ? "selected"
                                          : "",
                                        t.columnCount(t.deliveryDateKeys),
                                      ],
                                      on: {
                                        click: function (i) {
                                          return t.updateSelectedConfig(e, a);
                                        },
                                      },
                                    },
                                    [
                                      i(
                                        "div",
                                        {
                                          staticClass: "grid_btn price_btn",
                                          class: {
                                            "font-italic": t.showingTaxedPrices,
                                            "price-promo":
                                              t.discountedPriceExists(e, a),
                                          },
                                        },
                                        [
                                          i("price-cell-content", {
                                            attrs: {
                                              date: a,
                                              quantity: t.safeParseInt(e),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  );
                                }),
                                0
                              )
                            : t._e();
                        }),
                      ],
                      2
                    ),
                  ]),
                  t._v(" "),
                  t.isQuantityToggleVisible
                    ? i("div", { staticClass: "row" }, [
                        i(
                          "div",
                          { staticClass: "col grid_btn_container text-left" },
                          [
                            i(
                              "button",
                              {
                                staticClass: "btn btn-dark w-100",
                                attrs: { type: "button" },
                                on: { click: t.toggleVisibleQuantities },
                              },
                              [
                                t.showingMoreQuantities
                                  ? [
                                      t._v(
                                        "\n                    " +
                                          t._s(
                                            t.getDictionaryVoice(
                                              "product",
                                              "nascondi_quantita"
                                            )
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  : [
                                      t._v(
                                        "\n                    " +
                                          t._s(
                                            t.getDictionaryVoice(
                                              "product",
                                              "mostra_quantita"
                                            )
                                          ) +
                                          "\n                "
                                      ),
                                    ],
                              ],
                              2
                            ),
                          ]
                        ),
                      ])
                    : t._e(),
                  t._v(" "),
                  i(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between mt-2 mb-2",
                    },
                    [
                      i("div", { staticClass: "d-flex align-items-center" }, [
                        i("i", { staticClass: "pixicon icon-hand-up" }),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "text-left ml-3 font-italic" },
                          [
                            i("p", { staticClass: "m-0" }, [
                              t._v(
                                t._s(
                                  t.getDictionaryVoice(
                                    "product",
                                    "price_grid_title_message"
                                  )
                                )
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      i("span", { staticClass: "more-options-container" }, [
                        i("span", {
                          staticClass: "more-options",
                          on: { click: t.onInfoOpenClick },
                        }),
                      ]),
                    ]
                  ),
                  t._v(" "),
                  i("transition-expand", [
                    t.isInfoOpen
                      ? i(
                          "div",
                          [
                            i("info-box", {
                              staticClass: "text-left",
                              attrs: {
                                content: t.infoBoxContent,
                                "margin-type": "input",
                              },
                              on: { infoCloseClick: t.onInfoCloseClick },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ]),
                ],
                2
              )
            : t._e();
        },
        [],
        !1,
        null,
        "71a39246",
        null
      ).exports;
      var B = i(21609),
        U = i(81729),
        W = i(55634),
        z = i(33032),
        j = i.n(z),
        H = i(21777),
        J = i(11429),
        G = i(97058),
        Y = i(48383);
      const K = {
        name: "ZipCodeInput",
        props: ["sessionZipCode"],
        components: {
          BFormInput: H.e,
          BInputGroup: g.w,
          BInputGroupAppend: _.B,
          SpinningLoader: J.Z,
          FeatureHeader: G.Z,
        },
        data: () => ({
          zipCodeModel: "",
          validZipCode: "",
          isLoading: !1,
          validationResult: { hasError: !1, text: "" },
        }),
        computed: {
          hasError() {
            return !0 === this.validationResult.hasError;
          },
          zipCodeInputValid() {
            return (
              this.validZipCode === this.zipCodeModel &&
              "" !== this.validZipCode
            );
          },
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          ...(0, m.Se)("product", ["merchantProductName"]),
        },
        methods: {
          handleError(t) {
            throw new Error(t);
          },
          updateZipCode() {
            this.zipCodeInputValid ? this.disableZipCode() : this.setZipcode();
          },
          async setZipcode() {
            (0, Y.Z)("postal_code_verification_click", "ga_event", {
              type: "Verifica CAP",
              action: "click Verifica CAP",
              label: this.merchantProductName,
            }),
              (this.isLoading = !0);
            try {
              const t = await axios.post("/set-zipcode/", {
                zipcode: this.zipCodeModel,
                switchoff: !1,
              });
              if (200 === t.status && "success" === t.data.status)
                (this.validZipCode = this.zipCodeModel),
                  (this.validationResult = { hasError: !1, text: "" }),
                  j()(() => {
                    this.$emit("pricesRefresh");
                  }, 1e3);
              else if ("failure" === t.data.status) {
                this.validZipCode = "";
                const { data: e } = t.data;
                this.validationResult = { hasError: !0, text: e.message || "" };
              } else this.handleError("Request error");
            } catch (t) {
              (this.validZipCode = ""),
                (this.validationResult = { hasError: !0, text: "" });
            }
            this.isLoading = !1;
          },
          async disableZipCode() {
            this.isLoading = !0;
            try {
              const t = await axios.post("/set-zipcode/", {
                zipcode: this.zipCodeModel,
                switchoff: !0,
              });
              200 === t.status && "success" === t.data.status
                ? ((this.validZipCode = ""),
                  (this.zipCodeModel = ""),
                  j()(() => {
                    this.$emit("pricesRefresh");
                  }, 1e3))
                : this.handleError("Request error");
            } catch (t) {
              console.log(t);
            }
            this.isLoading = !1;
          },
        },
        mounted() {
          (this.zipCodeModel = this.sessionZipCode),
            (this.validZipCode = this.sessionZipCode);
        },
      };
      const X = (0, w.Z)(
        K,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticClass: "form-group form-group-spaced-mobile",
              class: { "form-group-error": t.hasError },
            },
            [
              i("feature-header", {
                attrs: {
                  "title-label": t.getDictionaryVoice("product", "label_cap"),
                },
              }),
              t._v(" "),
              i(
                "b-input-group",
                [
                  i("b-form-input", {
                    attrs: {
                      placeholder: t.getDictionaryVoice(
                        "product",
                        "inserisci_il_cap"
                      ),
                    },
                    model: {
                      value: t.zipCodeModel,
                      callback: function (e) {
                        t.zipCodeModel = e;
                      },
                      expression: "zipCodeModel",
                    },
                  }),
                  t._v(" "),
                  i(
                    "b-input-group-append",
                    [
                      i(
                        "b-button",
                        {
                          attrs: {
                            text: t.getDictionaryVoice("product", "btn_cap"),
                            variant: t.hasError ? "danger" : "primary",
                          },
                          on: { click: t.updateZipCode },
                        },
                        [
                          i("spinning-loader", {
                            attrs: { "is-loading": t.isLoading },
                          }),
                          t._v(
                            "\n                " +
                              t._s(
                                t.zipCodeInputValid
                                  ? t.getDictionaryVoice("product", "disable")
                                  : t.getDictionaryVoice("product", "btn_cap")
                              ) +
                              "\n            "
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              t.hasError
                ? i("small", { staticClass: "text-danger form-text" }, [
                    t._v(" " + t._s(t.validationResult.text) + " "),
                  ])
                : t._e(),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "5b19ddf7",
        null
      ).exports;
      var tt = i(72838),
        et = i(49532),
        it = i(74048);
      const at = {
        name: "OpenQuantityInput",
        props: [
          "hasOpenInputError",
          "openInputError",
          "value",
          "disabled",
          "titleLabel",
          "subtitleLabel",
        ],
        components: { FeatureHeader: G.Z },
        computed: { ...(0, m.Se)("dictionary", ["getDictionaryVoice"]) },
        methods: {
          updateValue(t) {
            this.$emit("input", t.target.value);
          },
        },
      };
      const st = (0, w.Z)(
        at,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "col-12 custom-quantity-container" }, [
            i("div", { staticClass: "form-group form-group-spaced-mobile" }, [
              i("div", { staticClass: "row" }, [
                i(
                  "div",
                  { staticClass: "col-12" },
                  [
                    i("feature-header", {
                      attrs: {
                        "title-label": t.titleLabel,
                        "has-error": t.hasOpenInputError,
                      },
                    }),
                    t._v(" "),
                    t.subtitleLabel
                      ? i("p", [t._v(t._s(t.subtitleLabel))])
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                i("div", { staticClass: "col-lg-6" }, [
                  i("div", { staticClass: "inner" }, [
                    i("input", {
                      staticClass: "form-control",
                      class: { "is-invalid": t.hasOpenInputError },
                      attrs: {
                        type: "text",
                        "data-test": "custom-quantity-item",
                        disabled: t.disabled,
                      },
                      domProps: { value: t.value },
                      on: {
                        input: function (e) {
                          return t.updateValue(e);
                        },
                      },
                    }),
                  ]),
                  t._v(" "),
                  t.hasOpenInputError
                    ? i("small", { staticClass: "form-text text-danger" }, [
                        t._v(
                          "\n                    " +
                            t._s(t.openInputError.errorMessage) +
                            "\n                "
                        ),
                      ])
                    : t._e(),
                ]),
              ]),
            ]),
          ]);
        },
        [],
        !1,
        null,
        "6a034886",
        null
      ).exports;
      var nt = i(94987);
      const rt = {
        name: "CustomNameInput",
        props: { value: { type: String } },
        data: () => ({ inputValue: "" }),
        components: { BFormInput: H.e, FeatureHeader: G.Z },
        computed: { ...(0, m.Se)("dictionary", ["getDictionaryVoice"]) },
        watch: {
          inputValue(t) {
            this.$emit("input", t);
          },
          value(t) {
            this.inputValue = t;
          },
        },
        created() {
          this.inputValue = this.value;
        },
      };
      const ot = (0, w.Z)(
        rt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "form-group" }, [
            i("div", { staticClass: "row" }, [
              i(
                "div",
                { staticClass: "col-12 col-lg-6" },
                [
                  i("feature-header", {
                    attrs: {
                      "title-label": t.getDictionaryVoice(
                        "product",
                        "nome_file_riepilogo"
                      ),
                    },
                  }),
                  t._v(" "),
                  i("b-form-input", {
                    attrs: {
                      placeholder: t.getDictionaryVoice(
                        "product",
                        "nome_lavorazione"
                      ),
                    },
                    model: {
                      value: t.inputValue,
                      callback: function (e) {
                        t.inputValue = e;
                      },
                      expression: "inputValue",
                    },
                  }),
                ],
                1
              ),
            ]),
          ]);
        },
        [],
        !1,
        null,
        "d9f6ee78",
        null
      ).exports;
      var ct = i(62185),
        lt = i(76644);
      const dt = {
        name: "FscSection",
        computed: { ...(0, m.Se)("dictionary", ["getDictionaryVoice"]) },
        props: { fscImage: { type: String, required: !1 } },
      };
      const ut = (0, w.Z)(
        dt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "fsc" }, [
            i("div", { staticClass: "row" }, [
              i("div", { staticClass: "col-12 col-lg-3 text-center" }, [
                i("img", { attrs: { src: t.fscImage, alt: "fsc icon" } }),
              ]),
              t._v(" "),
              i("div", { staticClass: "col-12 col-lg-9" }, [
                i("div", {
                  staticClass: "title",
                  domProps: {
                    innerHTML: t._s(
                      t.getDictionaryVoice("product", "title_fsc")
                    ),
                  },
                }),
                t._v(" "),
                i("div", {
                  domProps: {
                    innerHTML: t._s(
                      t.getDictionaryVoice("product", "subtitle_fsc")
                    ),
                  },
                }),
              ]),
            ]),
          ]);
        },
        [],
        !1,
        null,
        "7eb6453f",
        null
      ).exports;
      var pt = i(39969),
        vt = i.n(pt),
        ht = i(28578),
        mt = i(19017);
      var gt = i(18478),
        _t = i(4529);
      const yt = {
        name: "SustainabilityLabelSection",
        data: () => ({
          sustainabilityLabelKey: "Sustainability_Label",
          sustainabilityFeature: null,
          selectedValue: "",
          selectedOption: {},
          description: "",
          subtitle: "",
          imgSrc: "",
          imgAlt: "",
        }),
        computed: {
          shouldShowComponent() {
            return "" !== this.selectedValue && "None" !== this.selectedValue;
          },
          ...(0, m.Se)("dictionary", [
            "getDictionaryVoice",
            "dictionaryVoiceExists",
          ]),
          ...(0, m.Se)("product", ["options", "completeSelection"]),
        },
        watch: {
          completeSelection() {
            this.sustainabilityFeature =
              this.options[this.sustainabilityLabelKey];
            if (!(void 0 !== this.sustainabilityFeature)) return;
            const { selectedValue: t, selectedOption: e } =
              this.getCurrentValuesFromFeature(this.sustainabilityFeature);
            (this.selectedValue = t),
              (this.selectedOption = e),
              this.shouldShowComponent
                ? (this.manageComponentValues(this.selectedOption),
                  this.showLabelInHeader())
                : this.hideLabelInHeader();
          },
        },
        methods: {
          createCustomEvent: gt.Z,
          getCurrentValuesFromFeature: _t.Z,
          resourceDownload: (t, e) => {
            fetch(t, {
              headers: new Headers({ Origin: window.location.origin }),
              mode: "cors",
            })
              .then((t) => t.blob())
              .then((t) => {
                ((t, e) => {
                  const i = document.createElement("a");
                  (i.download = (0, ht.Z)(e)
                    ? e
                    : t.split("\\").pop().split("/").pop()),
                    (i.href = t),
                    document.body.appendChild(i),
                    i.click(),
                    i.remove();
                })(vt().createObjectURL(t), e);
              })
              .catch((t) => mt.Z.error(t));
          },
          manageComponentValues(t) {
            this.$nextTick(() => {
              var e;
              if (
                null != t &&
                null !== (e = t.customSelections) &&
                void 0 !== e &&
                e.dictionaryTranslations
              ) {
                var i, a, s, n, r, o;
                const { info: e } =
                    null == t ||
                    null === (i = t.customSelections) ||
                    void 0 === i
                      ? void 0
                      : i.dictionaryTranslations,
                  c =
                    null == e || null === (a = e.icons) || void 0 === a
                      ? void 0
                      : a[0];
                (this.subtitle =
                  null !== (s = null == e ? void 0 : e.title) && void 0 !== s
                    ? s
                    : ""),
                  (this.description =
                    null !== (n = null == e ? void 0 : e.description) &&
                    void 0 !== n
                      ? n
                      : ""),
                  (this.imgSrc =
                    null !== (r = null == c ? void 0 : c.url) && void 0 !== r
                      ? r
                      : ""),
                  (this.imgAlt =
                    null !== (o = null == c ? void 0 : c.title) && void 0 !== o
                      ? o
                      : "");
              }
            });
          },
          emitEvent(t) {
            const e = this.createCustomEvent(t);
            document.body.dispatchEvent(e);
          },
          showLabelInHeader() {
            this.emitEvent("showSustainabilityLabel");
          },
          hideLabelInHeader() {
            this.emitEvent("hideSustainabilityLabel");
          },
          downloadAsset() {
            this.resourceDownload(this.imgSrc, this.imgAlt);
          },
        },
      };
      const ft = (0, w.Z)(
        yt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.shouldShowComponent
            ? i("div", { attrs: { id: "sustainability-label-section" } }, [
                i("div", { staticClass: "icon-description-block" }, [
                  "" !== t.imgSrc
                    ? i("div", { staticClass: "icon-container" }, [
                        i("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: t.imgSrc,
                            alt: t.imgAlt,
                            title: t.imgAlt,
                          },
                        }),
                      ])
                    : t._e(),
                  t._v(" "),
                  i("div", { staticClass: "description-container" }, [
                    t.dictionaryVoiceExists(
                      "sustainability_label",
                      "section_title"
                    )
                      ? i("h6", [
                          t._v(
                            "\n                " +
                              t._s(
                                t.getDictionaryVoice(
                                  "sustainability_label",
                                  "section_title"
                                )
                              ) +
                              "\n            "
                          ),
                        ])
                      : t._e(),
                    t._v(" "),
                    "" !== t.subtitle
                      ? i("span", {
                          staticClass: "subtitle",
                          domProps: { innerHTML: t._s(t.subtitle) },
                        })
                      : t._e(),
                    t._v(" "),
                    "" !== t.description
                      ? i("p", { domProps: { innerHTML: t._s(t.description) } })
                      : t._e(),
                  ]),
                ]),
                t._v(" "),
                i(
                  "div",
                  { staticClass: "download-button-container" },
                  [
                    "" !== t.imgSrc
                      ? i(
                          "b-button",
                          {
                            staticClass: "download-btn blue-btn",
                            attrs: { variant: "primary" },
                            on: { click: t.downloadAsset },
                          },
                          [
                            i("i", { staticClass: "pixicon icon-download" }),
                            t._v(
                              " " +
                                t._s(
                                  t.getDictionaryVoice(
                                    "sustainability_label",
                                    "download"
                                  )
                                ) +
                                "\n        "
                            ),
                          ]
                        )
                      : t._e(),
                  ],
                  1
                ),
              ])
            : t._e();
        },
        [],
        !1,
        null,
        "93d58d64",
        null
      ).exports;
      const bt = {
        name: "ModalEditItemAlert",
        props: {
          hasTemplate: { type: Object, required: !1 },
          fromUpload: { type: Boolean, required: !1 },
          dexClicked: { type: Boolean, required: !1 },
          isAdding: { type: Boolean, required: !1 },
        },
        data: () => ({ isVisible: !1 }),
        computed: {
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          ...(0, m.Se)("links", ["cartLink"]),
          ...(0, m.Se)("product", ["openDexClicked"]),
        },
        methods: {
          updateJob() {
            this.openDexClicked
              ? this.$emit("openDex")
              : this.$emit("updateJobClick", this.cartLink);
          },
          cancel() {
            window.location.reload();
          },
        },
      };
      const Ct = (0, w.Z)(
        bt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "b-modal",
            {
              attrs: {
                id: "modal-edit-item-alert",
                size: "lg",
                centered: "",
                "no-close-on-esc": "",
                "no-close-on-backdrop": "",
              },
            },
            [
              i("template", { slot: "modal-header-close" }, [
                i("i", { staticClass: "fal fa-times-circle" }),
              ]),
              t._v(" "),
              i(
                "template",
                { staticClass: "text-center", slot: "modal-title" },
                [
                  t._v(
                    "\n        " +
                      t._s(
                        t.getDictionaryVoice("modals", "title_modal_back_link")
                      ) +
                      "\n    "
                  ),
                ]
              ),
              t._v(" "),
              i("template", { staticClass: "text-center", slot: "default" }, [
                i("div", {
                  domProps: {
                    innerHTML: t._s(
                      t.getDictionaryVoice("modals", "update_job_alert")
                    ),
                  },
                }),
              ]),
              t._v(" "),
              i(
                "template",
                { staticClass: "w-100", slot: "modal-footer" },
                [
                  i(
                    "b-button",
                    {
                      staticClass: "blue-empty-btn col-sm-12 col-md-6",
                      attrs: { variant: "primary", "data-test": "btn-cancel" },
                      on: {
                        click: function (e) {
                          return (
                            e.stopPropagation(), t.cancel.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      t._v(
                        "\n            " +
                          t._s(
                            t.getDictionaryVoice("modals", "cancel_change")
                          ) +
                          "\n        "
                      ),
                    ]
                  ),
                  t._v(" "),
                  i(
                    "b-button",
                    {
                      staticClass: "blue-btn col-sm-12 col-md-6",
                      attrs: {
                        variant: "primary",
                        "data-test": "btn-update-job",
                        disabled: t.isAdding,
                      },
                      on: {
                        click: function (e) {
                          return (
                            e.stopPropagation(),
                            t.updateJob.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      t._v(
                        "\n            " +
                          t._s(
                            t.getDictionaryVoice("modals", "confirm_update_job")
                          ) +
                          "\n        "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            2
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
      i(15306);
      var Vt = i(32366),
        wt = i.n(Vt),
        St = i(78914),
        kt = i.n(St),
        xt = i(62462),
        Dt = i.n(xt),
        Pt = i(98926),
        Et = i.n(Pt),
        It = i(90891);
      const qt = {
        emits: ["change", "error", "user-changed-qty"],
        props: {
          id: Number,
          qtyValidationFunc: { type: Function, required: !0 },
          maxChar: { type: Number, required: !1, default: 80 },
          minChar: { type: Number, required: !1, default: 1 },
          variationPlaceholderName: { type: String, required: !1, default: "" },
          userSelectionNameInputValue: { required: !1, default: void 0 },
          userSelectionQtyInputValue: { required: !1, default: void 0 },
          forceValidation: { type: Boolean, required: !1, default: !1 },
        },
        data() {
          var t, e;
          return {
            name:
              null !== (t = this.userSelectionNameInputValue) && void 0 !== t
                ? t
                : this.variationPlaceholderName,
            qty:
              null !== (e = this.userSelectionQtyInputValue) && void 0 !== e
                ? e
                : 0,
            invalidQtyMessage: "",
            invalidNameMessage: "",
            userInteractedWithQty: !1,
            userChangedQtyAtLeastOnce: !1,
          };
        },
        computed: {
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
          placeholderName() {
            return (0, ht.Z)(this.variationPlaceholderName)
              ? this.variationPlaceholderName
              : this.getDictionaryVoice("product", "nome_lavorazione");
          },
          didUserInteractWithQuantity() {
            return !0 === this.userInteractedWithQty;
          },
        },
        methods: {
          safeParseInt: L.Z,
          debounce: It.Z,
          isStringFilled: ht.Z,
          isNameValid(t) {
            return t && t.length >= this.minChar && t.length <= this.maxChar;
          },
          qtyOnChange(t) {
            (this.userChangedQtyAtLeastOnce = !0),
              (this.userInteractedWithQty = !0),
              (this.qty = t.target.value);
          },
          nameOnChange(t) {
            this.name = t.target.value;
          },
          onInvalidName(t) {
            let { name: e } = t;
            (this.invalidNameMessage = this.getDictionaryVoice(
              "multi-artworks",
              "error_name_input"
            ).replace("#MAX#", "".concat(this.maxChar))),
              this.$emit("error", { value: e, type: "name-error" });
          },
          onInvalidQty(t) {
            let { qty: e, msg: i } = t;
            (this.invalidQtyMessage = i),
              this.$emit("error", { value: e, type: "qty-error" });
          },
          clearErrorMessages() {
            (this.invalidQtyMessage = ""), (this.invalidNameMessage = "");
          },
          onUserInteractedWithQty() {
            this.userInteractedWithQty = !0;
          },
          validateAll() {
            this.clearErrorMessages(),
              this.isNameValid(this.name) ||
                this.onInvalidName({ name: this.name });
            const { hasError: t, errorMessage: e } = this.qtyValidationFunc(
              this.qty
            );
            t && this.onInvalidQty({ qty: this.qty, msg: e });
          },
          onNameChange(t) {
            const e = t;
            (this.invalidNameMessage = ""),
              this.isNameValid(e) || this.onInvalidName({ name: e }),
              this.$emit("change", { id: this.id, qty: this.qty, name: e });
          },
          onQtyChange(t) {
            const e = (0, L.Z)(t);
            this.invalidQtyMessage = "";
            const { hasError: i, errorMessage: a } = this.qtyValidationFunc(t);
            this.$emit("change", { id: this.id, qty: e, name: this.name }),
              !1 === i
                ? this.didUserInteractWithQuantity &&
                  this.userChangedQtyAtLeastOnce &&
                  this.$emit("user-changed-qty")
                : this.onInvalidQty({ qty: t, msg: a });
          },
        },
        watch: {
          name(t) {
            this.onNameChange(t);
          },
          qty(t) {
            this.onQtyChange(t);
          },
          userSelectionQtyInputValue(t) {
            this.qty = t;
          },
          forceValidation(t) {
            t && this.validateAll();
          },
        },
      };
      const Zt = {
        components: {
          MultiArtworkVariation: (0, w.Z)(
            qt,
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e;
              return i("div", { staticClass: "d-flex flex-column variant" }, [
                i("div", { staticClass: "d-flex gap-1" }, [
                  i("div", { staticClass: "form-group flex-3" }, [
                    i("input", {
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: t.placeholderName },
                      domProps: { value: t.name },
                      on: { change: t.nameOnChange },
                    }),
                  ]),
                  t._v(" "),
                  i("div", { staticClass: "form-group flex-1" }, [
                    i("input", {
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: t.qty },
                      on: {
                        change: t.qtyOnChange,
                        focusout: t.onUserInteractedWithQty,
                      },
                    }),
                  ]),
                ]),
                t._v(" "),
                i("div", { staticClass: "d-flex flex-column" }, [
                  t.invalidNameMessage
                    ? i(
                        "small",
                        { staticClass: "d-flex form-text text-danger" },
                        [
                          i("span", { staticClass: "pixicon icon-alert" }),
                          t._v(t._s(t.invalidNameMessage) + "\n        "),
                        ]
                      )
                    : t._e(),
                  t._v(" "),
                  t.invalidQtyMessage
                    ? i(
                        "small",
                        { staticClass: "d-flex form-text text-danger" },
                        [
                          i("span", { staticClass: "pixicon icon-alert" }),
                          t._v(t._s(t.invalidQtyMessage) + "\n        "),
                        ]
                      )
                    : t._e(),
                ]),
              ]);
            },
            [],
            !1,
            null,
            "162551c2",
            null
          ).exports,
        },
        emits: [
          "variants-update",
          "deactivate",
          "is-active",
          "validation-failure",
          "validation-success",
        ],
        props: {
          quantityValidationFunc: { type: Function, required: !0 },
          sets: { required: !0 },
          selectedQuantity: { required: !0 },
          lineItemVariants: { type: Array, required: !1, default: () => [] },
          dependenciesReadyState: {
            type: Array,
            required: !1,
            default: () => [],
          },
          forceValidation: { type: Boolean, required: !1, default: !1 },
          merchantProductId: { type: String, required: !0 },
        },
        data: () => ({
          hasError: !0,
          previousValue: 0,
          variants: [],
          errorMessage: "",
          userInteractedWithVariantQuantity: !1,
        }),
        computed: {
          minimumNumberOfSets: () => 2,
          hasVariants() {
            return this.variantsSize > 0;
          },
          variantsSize() {
            return this.variants.length;
          },
          variantsSumQuantity() {
            var t;
            return wt()((t = this.variants)).call(
              t,
              (t, e) => t + (0, L.Z)(e.qty),
              0
            );
          },
          allVariantsAreValid() {
            var t;
            return wt()((t = this.variants)).call(
              t,
              (t, e) => {
                const { hasError: i } = this.quantityValidationFunc(e.qty);
                return t && this.isVariantFilled(e) && !i;
              },
              !this.hasError
            );
          },
          didUserInteractWithVariantQuantity() {
            return !0 === this.userInteractedWithVariantQuantity;
          },
          allDependenciesAreReady() {
            var t;
            return wt()((t = this.dependenciesReadyState)).call(
              t,
              (t, e) => t && e,
              !0
            );
          },
          isInterestedInUpdates() {
            return this.hasVariants || this.sets >= this.minimumNumberOfSets;
          },
          ...(0, m.Se)("dictionary", ["getDictionaryVoice"]),
        },
        methods: {
          safeParseInt: L.Z,
          debounce: It.Z,
          isStringFilled: ht.Z,
          deactivate() {
            this.forgetVariants(),
              this.clearErrorMessages(),
              (this.userInteractedWithVariantQuantity = !1),
              this.$emit("deactivate");
          },
          onUserInteractedWithVariantQuantity() {
            this.userInteractedWithVariantQuantity = !0;
          },
          forgetVariants() {
            var t;
            kt()((t = this.variants)).call(t, (t, e) => {
              this.$delete(this.variants, e);
            }),
              (this.variants = []);
          },
          addNVariants(t) {
            const e = this.variants.length + 1;
            for (let i = e; i < e + t; i += 1)
              this.variants.push({ id: i, name: "", qty: 0 });
          },
          removeLastVariant() {
            if (this.hasVariants) {
              const t = this.variantsSize - 1;
              this.$delete(this.variants, t);
            }
          },
          removeLastNVariants(t) {
            for (let e = 0; e < t; e += 1) this.removeLastVariant();
          },
          hasVariantId(t) {
            var e;
            return (
              h()((e = this.variants)).call(e, (e) => t === e.id).length > 0
            );
          },
          getVariantIdxById(t) {
            var e;
            return Dt()((e = this.variants)).call(e, (e) => t === e.id);
          },
          updateVariant(t) {
            let { id: e, name: i, qty: a } = t;
            const s = this.getVariantIdxById(e);
            s > -1 &&
              (void 0 !== i && (this.variants[s].name = i),
              void 0 !== a && (this.variants[s].qty = a)),
              this.validateVariants(this.variants);
          },
          isVariantFilled(t) {
            let { name: e, qty: i } = t;
            return (0, ht.Z)(e) && this.isNumber(i);
          },
          isNumber: (t) => !Et()((0, L.Z)(t)),
          clearErrorMessages() {
            this.errorMessage = "";
          },
          onVariantsErrors() {
            this.onValidationFailure();
          },
          onValidationFailure(t) {
            mt.Z.log("validateVariants", "failure"),
              (this.hasError = !0),
              t && (this.errorMessage = t),
              this.$emit("validation-failure");
          },
          distributeQuantity(t) {
            this.distributionStrategy_RemainderGoesToVariant1(t, this.sets);
          },
          distributeQuantityIfUserDidNotInteractYet(t) {
            this.didUserInteractWithVariantQuantity
              ? this.validateVariants(this.variants)
              : this.distributeQuantity(t);
          },
          distributionStrategy_RemainderGoesToVariant1(t, e) {
            var i;
            const a = t % e,
              s = Math.floor(t / e);
            kt()((i = this.variants)).call(i, (t, e) => {
              0 === e
                ? this.updateVariant({ id: t.id, qty: s + a })
                : this.updateVariant({ id: t.id, qty: s });
            });
          },
          onVariantsChange(t) {
            this.validateVariants(t);
          },
          validateVariants(t) {
            this.hasError = !1;
            const e = this.variantsSumQuantity,
              i = this.allVariantsAreValid,
              a = (0, L.Z)(this.selectedQuantity);
            if (
              (this.clearErrorMessages(),
              mt.Z.log("validateVariants", e, i, a),
              i && e === a)
            )
              mt.Z.log("validateVariants", "success"),
                this.$store.dispatch("product/setMultiArtworkDetails", {
                  variants: t,
                  totalVariants: this.sets,
                  totalQty: this.variantsSumQuantity,
                }),
                this.$emit("validation-success");
            else if (e !== a) {
              let t = "error_qty_higher";
              e < a && (t = "error_qty_lower");
              const i = this.getDictionaryVoice("multi-artworks", t).replace(
                "#VALUE#",
                Math.abs(e - a)
              );
              this.onValidationFailure(i);
            } else this.onValidationFailure();
          },
          onSetsChange(t) {
            if (t < this.minimumNumberOfSets) this.deactivate();
            else {
              const e = this.variantsSize;
              t > e
                ? this.addNVariants(t - e)
                : t < e && this.removeLastNVariants(e - t),
                this.allDependenciesAreReady &&
                  this.distributeQuantityIfUserDidNotInteractYet(
                    this.selectedQuantity
                  ),
                this.$emit("is-active", !0);
            }
          },
          fireAnalyticsEvents(t, e, i) {
            (0, Y.Z)("product page – multiartwork selection", "ga4_event", {
              action: "product_page_multiartwork",
              additional_params: [
                { multiartwork_parameter: ["sets", t, e].join(" - ") },
              ],
            }),
              (0, Y.Z)("product page – multiartwork selection", "ga_event", {
                type: "product page multiartwork",
                action: ["sets", t].join(" - "),
                label: e,
              });
            const a = wt()(i)
              .call(
                i,
                (t, e) => {
                  var i;
                  return [
                    ...t,
                    d()((i = "".concat(e.name, "-"))).call(i, e.qty),
                  ];
                },
                ["custom_quantity"]
              )
              .join(" - ");
            (0, Y.Z)("product page – multiartwork selection", "ga4_event", {
              action: "product_page_multiartwork",
              additional_params: [{ multiartwork_parameter: a }],
            }),
              (0, Y.Z)("product page – multiartwork selection", "ga_event", {
                type: "product page multiartwork",
                action: a,
                label: e,
              });
          },
        },
        watch: {
          sets: {
            handler(t) {
              this.onSetsChange(t);
            },
          },
          selectedQuantity: {
            handler(t, e) {
              this.isInterestedInUpdates &&
                t !== e &&
                this.distributeQuantityIfUserDidNotInteractYet(t);
            },
            immediate: !0,
          },
          variants: {
            handler(t) {
              this.isInterestedInUpdates && this.onVariantsChange(t);
            },
            deep: !0,
          },
          dependenciesReadyState: {
            handler() {
              this.allDependenciesAreReady &&
                this.isInterestedInUpdates &&
                this.distributeQuantityIfUserDidNotInteractYet(
                  this.selectedQuantity
                );
            },
          },
          forceValidation(t) {
            t && this.validateVariants(this.variants);
          },
        },
        beforeMount() {
          if (this.isInterestedInUpdates) {
            var t;
            if (
              (this.addNVariants(this.sets),
              this.lineItemVariants && this.lineItemVariants.length > 0)
            )
              (this.userInteractedWithVariantQuantity = !0),
                kt()((t = this.lineItemVariants)).call(t, (t) => {
                  this.updateVariant({
                    id: t.id,
                    name: t.name,
                    qty: t.quantity,
                  });
                });
            else this.distributeQuantity(this.selectedQuantity);
            this.sets >= this.minimumNumberOfSets &&
              this.$emit("is-active", !0);
          }
        },
        created() {
          this.unsubscribe = this.$store.subscribeAction(
            (0, It.Z)((t) => {
              "product/setMultiArtworkDetails" === t.type &&
                this.fireAnalyticsEvents(
                  this.sets,
                  this.merchantProductId,
                  t.payload.variants
                );
            }, 75)
          );
        },
        beforeDestroy() {
          this.unsubscribe();
        },
      };
      const At = (0, w.Z)(
          Zt,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return t.isInterestedInUpdates
              ? i(
                  "div",
                  { staticClass: "multi-artwork d-flex flex-column gap-1" },
                  [
                    i("p", { staticClass: "title" }, [
                      t._v(
                        t._s(
                          t.getDictionaryVoice(
                            "multi-artworks",
                            "variants-title"
                          )
                        )
                      ),
                    ]),
                    t._v(" "),
                    i("span", { staticClass: "text" }, [
                      t._v(
                        "\n        " +
                          t._s(
                            t.getDictionaryVoice(
                              "multi-artworks",
                              "variants-disclaimer-1"
                            )
                          ) +
                          "\n        " +
                          t._s(
                            t.getDictionaryVoice(
                              "multi-artworks",
                              "variants-disclaimer-2"
                            )
                          ) +
                          "\n    "
                      ),
                    ]),
                    t._v(" "),
                    i(
                      "div",
                      {
                        staticClass:
                          "variants-container d-flex justify-content-between flex-column flex-md-row gap-1 flex-wrap",
                      },
                      t._l(t.variants, function (e) {
                        var a = e.id,
                          s = e.name,
                          n = e.qty;
                        return i("MultiArtworkVariation", {
                          key: a,
                          attrs: {
                            id: a,
                            "qty-validation-func": t.quantityValidationFunc,
                            "user-selection-name-input-value": s,
                            "user-selection-qty-input-value": n,
                            "force-validation": t.forceValidation,
                          },
                          on: {
                            change: t.updateVariant,
                            error: t.onVariantsErrors,
                            "user-changed-qty":
                              t.onUserInteractedWithVariantQuantity,
                          },
                        });
                      }),
                      1
                    ),
                    t._v(" "),
                    t.errorMessage
                      ? i("small", { staticClass: "form-text text-danger" }, [
                          i("span", { staticClass: "pixicon icon-alert" }),
                          t._v(t._s(t.errorMessage) + "\n    "),
                        ])
                      : t._e(),
                  ]
                )
              : t._e();
          },
          [],
          !1,
          null,
          "3bcd896c",
          null
        ).exports,
        Mt = {
          name: "ProductLayoutStandard",
          extends: c.Z,
          components: {
            BSpinner: n.X,
            FscSection: ut,
            ModalDesignService: lt.Z,
            ModalDesignInfo: ct.Z,
            ProductRecapStandard: Z,
            PriceGridStandard: N,
            ProductStep: B.Z,
            ProductTreeValidation: U.Z,
            PromoCodeInput: W.Z,
            DownloadSection: tt.Z,
            ZipCodeInput: X,
            ModalCartLimit: et.Z,
            ModalCartLimitExceed: it.Z,
            OpenQuantityInput: st,
            FeaturesList: nt.Z,
            CustomNameInput: ot,
            SustainabilityLabelSection: ft,
            ModalEditItemAlert: Ct,
            BFormCheckbox: r.l,
            MultiArtworks: At,
            ModalAddToCartWithUpsell: () =>
              Promise.all([i.e(7766), i.e(8957)]).then(i.bind(i, 51328)),
            CustomQuotes: () =>
              Promise.all([i.e(5030), i.e(418), i.e(7891), i.e(332)]).then(
                i.bind(i, 70443)
              ),
            FileCheckInput: () =>
              Promise.all([
                i.e(5030),
                i.e(1313),
                i.e(5504),
                i.e(5239),
                i.e(7441),
                i.e(5994),
                i.e(2570),
              ]).then(i.bind(i, 84377)),
            ArtworkSelectionStandard: () =>
              Promise.all([i.e(4626), i.e(4233), i.e(2108)]).then(
                i.bind(i, 94407)
              ),
          },
          methods: {
            scrollToDiv: o.Z,
            onButtonDesignAction(t) {
              var e;
              ("design-stack" !== t && "design-gallery" !== t) ||
                (this.isEditView &&
                null !==
                  (null === (e = this.customProductConfiguration) ||
                  void 0 === e
                    ? void 0
                    : e.mcpDocsSource)
                  ? (this.$store.dispatch("product/setOpenDexClicked", !0),
                    this.$bvModal.show("modal-edit-item-alert"))
                  : this.openPrintDex(t));
            },
            onContinueShoppingClick() {
              var t;
              null === (t = this.$refs["promo-code"]) ||
                void 0 === t ||
                t.updatePromocodeStatus();
            },
            checkMultiArtwork() {
              return (
                (this.forceMultiArtworkValidation = !0),
                this.hasMultiArtworkInputError
                  ? (this.scrollToDiv(this.$refs.multiArtworks.$el), !1)
                  : ((this.forceMultiArtworkValidation = !1), !0)
              );
            },
          },
        };
      const Rt = (0, w.Z)(
        Mt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "row" },
            [
              t.validationDefinition
                ? i(
                    "div",
                    { staticClass: "col-12 col-lg-8 product-configuration" },
                    [
                      t.voicesLoaded
                        ? [
                            t.dictionaryVoiceExists(
                              "product",
                              "prod_step1_title"
                            )
                              ? i("product-step", {
                                  attrs: {
                                    "step-title": t.getDictionaryVoice(
                                      "product",
                                      "prod_step1_title"
                                    ),
                                    "step-content": t.getDictionaryVoice(
                                      "product",
                                      "prod_step1_text"
                                    ),
                                  },
                                })
                              : t._e(),
                            t._v(" "),
                            i(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.firstValidationLoading,
                                    expression: "firstValidationLoading",
                                  },
                                ],
                                staticClass: "text-center loader-xl",
                              },
                              [
                                i("b-spinner", {
                                  staticClass: "spinner",
                                  attrs: {
                                    variant: "primary",
                                    label: "Spinning",
                                  },
                                }),
                                t._v(" "),
                                i("span", { staticClass: "label" }, [
                                  t._v(
                                    t._s(
                                      t.getDictionaryVoice("common", "loading")
                                    )
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ]
                        : t._e(),
                      t._v(" "),
                      i(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.shouldShowProductFeatures,
                              expression: "shouldShowProductFeatures",
                            },
                          ],
                          staticClass: "product-configuration-main",
                        },
                        [
                          i(
                            "transition",
                            { attrs: { name: "fade" } },
                            [
                              i("product-tree-validation", {
                                attrs: {
                                  definition: t.validationDefinition,
                                  "sorted-features-merchant-keys":
                                    t.sortedFeaturesMerchantKeys,
                                },
                                on: {
                                  changeValidationStatus:
                                    t.onValidationStatusChanged,
                                  changeValidOptions: t.onValidOptionsChanged,
                                },
                                scopedSlots: t._u(
                                  [
                                    {
                                      key: "features",
                                      fn: function () {
                                        return [
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                "configuration_container",
                                              class: {
                                                "no-border":
                                                  t.isMultiartworkActive,
                                              },
                                            },
                                            [
                                              i("features-list", {
                                                ref: "features-list",
                                                attrs: {
                                                  "sorted-features-merchant-keys":
                                                    t.sortedFeaturesMerchantKeys,
                                                  "valid-options":
                                                    t.validOptionsByMerchantFeature,
                                                  "has-templates":
                                                    t.hasTemplates,
                                                  validating: t.validating,
                                                  "edit-view-template-data":
                                                    t.editViewTemplateData,
                                                  "custom-style":
                                                    "layout-standard",
                                                },
                                                on: {
                                                  featureChanged:
                                                    t.onProductFeatureChange,
                                                  updateInputError:
                                                    t.onUpdateInputError,
                                                  fetchingTemplates:
                                                    t.onFetchingTemplates,
                                                },
                                              }),
                                              t._v(" "),
                                              t.isMultiartworkActive
                                                ? t._e()
                                                : i("custom-name-input", {
                                                    model: {
                                                      value: t.customName,
                                                      callback: function (e) {
                                                        t.customName = e;
                                                      },
                                                      expression: "customName",
                                                    },
                                                  }),
                                            ],
                                            1
                                          ),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !1,
                                  3241168859
                                ),
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          !t.isMultiartworkActive &&
                          t.dictionaryVoiceExists("product", "prod_step2_title")
                            ? i("product-step", {
                                attrs: {
                                  "step-title": t.getDictionaryVoice(
                                    "product",
                                    "prod_step2_title"
                                  ),
                                  "step-content": t.getDictionaryVoice(
                                    "product",
                                    "prod_step2_text"
                                  ),
                                },
                              })
                            : t._e(),
                          t._v(" "),
                          i("transition", { attrs: { name: "fade" } }, [
                            i(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.validationDefinition,
                                    expression: "validationDefinition",
                                  },
                                ],
                                staticClass: "configuration_container",
                                class: {
                                  "no-border":
                                    t.hasTemplates || t.isMultiartworkActive,
                                },
                              },
                              [
                                t.hasOpenInput
                                  ? i(
                                      "div",
                                      { staticClass: "row" },
                                      [
                                        i("open-quantity-input", {
                                          class: {
                                            "unified-bg":
                                              t.isMultiartworkActive,
                                          },
                                          attrs: {
                                            "title-label":
                                              t.isMultiartworkActive
                                                ? t.getDictionaryVoice(
                                                    "multi-artworks",
                                                    "title-qty-free-input"
                                                  )
                                                : t.getDictionaryVoice(
                                                    "product",
                                                    "custom_quantity"
                                                  ),
                                            "subtitle-label":
                                              t.isMultiartworkActive
                                                ? t.getDictionaryVoice(
                                                    "multi-artworks",
                                                    "subtitle-qty-free-input"
                                                  )
                                                : t.getDictionaryVoice(
                                                    "product",
                                                    "custom_quantity"
                                                  ),
                                            "has-open-input-error":
                                              t.hasOpenInputError,
                                            "open-input-error":
                                              t.openInputError,
                                            disabled:
                                              t.validating ||
                                              t.priceRequestPending ||
                                              t.datesRequestPending,
                                          },
                                          model: {
                                            value: t.customQuantity,
                                            callback: function (e) {
                                              t.customQuantity = e;
                                            },
                                            expression: "customQuantity",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t._v(" "),
                                i("price-grid-standard", {
                                  class: {
                                    "unified-bg": t.isMultiartworkActive,
                                  },
                                  attrs: {
                                    "grid-rows":
                                      t.productData.quantities.gridRows,
                                  },
                                  on: { gridClicked: t.onGridClicked },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "fallback",
                                        fn: function () {
                                          return [
                                            t.isStaff
                                              ? i(
                                                  "b-form-checkbox",
                                                  {
                                                    model: {
                                                      value:
                                                        t.forceFallbackMethodUsageForDeliveryDate,
                                                      callback: function (e) {
                                                        t.forceFallbackMethodUsageForDeliveryDate =
                                                          e;
                                                      },
                                                      expression:
                                                        "forceFallbackMethodUsageForDeliveryDate",
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "Use the fallback method to calculate delivery date"
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    4165775086
                                  ),
                                }),
                                t._v(" "),
                                t.gridDataLoaded
                                  ? [
                                      "Sets" in t.userSelection
                                        ? i("multi-artworks", {
                                            ref: "multiArtworks",
                                            attrs: {
                                              sets: t.userSelection.Sets,
                                              "selected-quantity":
                                                t.selectedQuantity,
                                              "quantity-validation-func":
                                                t.validateQuantityOpenInput,
                                              "line-item-variants":
                                                t.multiArtworkDetails,
                                              "dependencies-ready-state": [
                                                !t.datesRequestPending,
                                                !t.priceRequestPending,
                                              ],
                                              "force-validation":
                                                t.forceMultiArtworkValidation,
                                              "merchant-product-id":
                                                t.merchantProductId,
                                            },
                                            on: {
                                              "validation-failure":
                                                function () {
                                                  return t.onMultiArtworkInputError(
                                                    !0
                                                  );
                                                },
                                              "validation-success":
                                                function () {
                                                  return t.onMultiArtworkInputError(
                                                    !1
                                                  );
                                                },
                                              deactivate:
                                                t.onMultiArtworkDeactivate,
                                              "is-active": function () {
                                                return (t.isMultiartworkActive =
                                                  !0);
                                              },
                                            },
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      i(
                                        "div",
                                        {
                                          staticClass:
                                            "form-group form-group-spaced-desktop",
                                        },
                                        [
                                          i("div", { staticClass: "row" }, [
                                            i(
                                              "div",
                                              {
                                                staticClass: "col-12 col-lg-6",
                                              },
                                              [
                                                i("promo-code-input", {
                                                  ref: "promo-code",
                                                  attrs: {
                                                    "edit-item":
                                                      t.customProductConfiguration,
                                                  },
                                                  on: {
                                                    pricesRefresh: function (
                                                      e
                                                    ) {
                                                      return t.loadPrices(
                                                        "promocode"
                                                      );
                                                    },
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            t._v(" "),
                                            t.isLogged
                                              ? t._e()
                                              : i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "col-12 col-lg-6",
                                                  },
                                                  [
                                                    i("zip-code-input", {
                                                      attrs: {
                                                        "session-zip-code":
                                                          t.sessionZipCode,
                                                      },
                                                      on: {
                                                        pricesRefresh:
                                                          function (e) {
                                                            return t.loadPrices(
                                                              "zipCode"
                                                            );
                                                          },
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                          ]),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.checkDesignTemplatesDone
                                        ? t.enabledArtworkOptions.length > 1
                                          ? i(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                i(
                                                  "div",
                                                  { staticClass: "title_file" },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.getDictionaryVoice(
                                                          "product",
                                                          "file_method"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                i(
                                                  "artwork-selection-standard",
                                                  {
                                                    attrs: {
                                                      "enabled-button-ids":
                                                        t.enabledArtworkOptions,
                                                      "design-service":
                                                        t.designService,
                                                      "selected-design-service":
                                                        t.designServiceSelected,
                                                      "button-active-id":
                                                        t.buttonActiveId,
                                                      "has-template-design":
                                                        t.hasTemplateDesign,
                                                      "is-edit-view":
                                                        t.isEditView,
                                                    },
                                                    on: {
                                                      selectArtworkOption:
                                                        t.onArtworkOptionSelected,
                                                      buttonDesignAction:
                                                        t.onButtonDesignAction,
                                                      selectDesignService:
                                                        t.onSelectDesignService,
                                                      clearDesignServiceSelection:
                                                        t.onClearDesignServiceSelection,
                                                    },
                                                  }
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e()
                                        : i(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center loader-xl",
                                            },
                                            [
                                              i("b-spinner", {
                                                staticClass: "spinner",
                                                attrs: {
                                                  variant: "primary",
                                                  label: "Spinning",
                                                },
                                              }),
                                              t._v(" "),
                                              i(
                                                "span",
                                                { staticClass: "label" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.getDictionaryVoice(
                                                        "common",
                                                        "loading"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                      t._v(" "),
                                      t.canDisplayProFileCheck
                                        ? i(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              i("file-check-input", {
                                                attrs: {
                                                  "file-check": t.fileCheck,
                                                },
                                                on: {
                                                  fileCheckUpdate:
                                                    t.onFileCheckUpdate,
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ]
                                  : t._e(),
                              ],
                              2
                            ),
                          ]),
                          t._v(" "),
                          t.showDownloadSection
                            ? [
                                t.dictionaryVoiceExists(
                                  "product",
                                  "prod_step3_title"
                                )
                                  ? i("product-step", {
                                      attrs: {
                                        "step-title": t.getDictionaryVoice(
                                          "product",
                                          "prod_step3_title"
                                        ),
                                        "step-content": t.getDictionaryVoice(
                                          "product",
                                          "prod_step3_text"
                                        ),
                                      },
                                    })
                                  : t._e(),
                                t._v(" "),
                                i(
                                  "div",
                                  {
                                    staticClass: "configuration_container",
                                    class: {
                                      "no-border": t.isMultiartworkActive,
                                    },
                                  },
                                  [
                                    i("download-section", {
                                      attrs: {
                                        "instruction-file": t.instructionFile,
                                        "template-enabled": t.templateEnabled,
                                        "has-instructions": t.hasInstructions,
                                        "custom-quantity": t.customQuantity,
                                        "selection-is-valid":
                                          t.selectionIsValid,
                                        "product-name": t.merchantProductName,
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]
                            : t._e(),
                          t._v(" "),
                          i("sustainability-label-section"),
                          t._v(" "),
                          i("custom-quotes", {
                            attrs: { "user-info": t.userInfo },
                          }),
                          t._v(" "),
                          t.productData.fscCertified
                            ? i("fsc-section", {
                                attrs: { "fsc-image": t.fscImage },
                              })
                            : t._e(),
                          t._v(" "),
                          i("transition", { attrs: { name: "fade" } }, [
                            i("div", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.shouldShowValidationOverlay,
                                  expression: "shouldShowValidationOverlay",
                                },
                              ],
                              staticClass: "validation-overlay",
                              attrs: { "data-test": "validation-in-progress" },
                            }),
                          ]),
                        ],
                        2
                      ),
                    ],
                    2
                  )
                : t._e(),
              t._v(" "),
              i(
                "div",
                { staticClass: "col-12 col-lg-4 recap-container" },
                [
                  i("product-recap-standard", {
                    attrs: {
                      "is-staff": t.isStaff,
                      "discounted-price-exists": t.discountedPriceExists,
                      "vat-price": t.vatPrice,
                      "product-price-all-tax-included":
                        t.productPriceAllTaxIncluded,
                      "file-check": t.fileCheck,
                      "valid-cart": t.selectionIsValid,
                      "is-adding": t.isAddingToCart,
                      "custom-config-response": t.customConfigResponse,
                      "is-price-limit-exceed": t.isPriceLimitExceed,
                      "is-designer-experience-enabled":
                        t.isDesignExperienceEnabled,
                      "design-service": t.designServiceSelected
                        ? t.designService
                        : "",
                      "active-option-service": t.designServiceSelected,
                      "button-active-id": t.buttonActiveId,
                      "changing-product-config": t.changingProductConfig,
                      "show-empty-shipping-price": t.showEmptyShippingPrice,
                    },
                    on: {
                      addToCartClick: t.onAddToCartClick,
                      getCustomConfigUrlClick: t.onGetCustomConfigUrlClick,
                      updateJobClick: t.onUpdateJobClick,
                      buttonDesignAction: t.onButtonDesignAction,
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              t.firstAddToCart
                ? i("modal-add-to-cart-with-upsell", {
                    attrs: {
                      "file-check":
                        "" === t.selectedDesignService && t.fileCheck,
                      "file-check-value": t.fileCheckValue,
                      "merchant-product-name": t.merchantProductName,
                      "merchant-product-id": t.merchantProductId,
                      "has-file-check":
                        "" === t.selectedDesignService && t.hasFileCheck,
                      upsell: t.currentUpSellProductRecommendation,
                    },
                    on: {
                      fileCheckUpdate: t.onFileCheckUpdate,
                      updateJobClick: t.onUpdateJobClick,
                      continueShoppingClick: t.onContinueShoppingClick,
                      addOrSubtractUpSellQuantity:
                        t.onAddOrSubtractUpSellQuantity,
                    },
                  })
                : t._e(),
              t._v(" "),
              i("modal-cart-limit"),
              t._v(" "),
              i("modal-cart-limit-exceed"),
              t._v(" "),
              i("modal-design-info"),
              t._v(" "),
              i("modal-design-service", {
                attrs: { "design-service": t.designService },
              }),
              t._v(" "),
              i("modal-edit-item-alert", {
                attrs: { "is-adding": t.isAddingToCart },
                on: {
                  updateJobClick: t.onUpdateJobClick,
                  openDex: t.openPrintDex,
                },
              }),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "7274ab3c",
        null
      ).exports;
      var Ot = i(10997),
        Lt = i(74227),
        Qt = i(78580),
        Tt = i.n(Qt);
      const $t = {
        name: "AbTestExperiment",
        props: {
          experimentName: { type: String, required: !0 },
          allowedVariations: { type: Array, required: !1 },
        },
        data: () => ({ activeVariation: "default" }),
        watch: {
          experimentData() {
            this.updateActiveVariation();
          },
        },
        methods: {
          updateActiveVariation() {
            var t;
            (this.activeVariation =
              null !== (t = this.getVariation(this.experimentName)) &&
              void 0 !== t
                ? t
                : "default"),
              mt.Z.log("A/B Test activeVariation: ", this.activeVariation);
          },
        },
        computed: {
          ...(0, m.Se)("experience", ["getVariation", "experimentData"]),
          shouldBeSeen() {
            var t;
            return (
              !this.allowedVariations ||
              Tt()((t = this.allowedVariations)).call(t, this.activeVariation)
            );
          },
        },
        mounted() {
          this.updateActiveVariation();
        },
      };
      (0, w.Z)(
        $t,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.shouldBeSeen
            ? i(
                "div",
                [t._t("default", null, { activeVariation: t.activeVariation })],
                2
              )
            : t._e();
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
      const Ft = {
        name: "AbTestVariation",
        props: {
          variationName: { type: String, required: !0 },
          activeVariation: { type: String, required: !0 },
          isDefaultVariation: { type: Boolean, required: !1, default: !1 },
        },
        computed: {
          showDefaultVariation() {
            return (
              this.isDefaultVariation && "default" === this.activeVariation
            );
          },
          isActiveVariation() {
            return this.variationName === this.activeVariation;
          },
          shouldBeSeen() {
            return this.isActiveVariation || this.showDefaultVariation;
          },
        },
      };
      (0, w.Z)(
        Ft,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.shouldBeSeen ? i("div", [t._t("default")], 2) : t._e();
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
      const Nt = {
        name: "TextEllipsis",
        data: () => ({ ellipsed: !0 }),
        methods: {
          toggle() {
            this.ellipsed = !this.ellipsed;
          },
        },
        computed: { ...(0, m.Se)("dictionary", ["getDictionaryVoice"]) },
      };
      const Bt = (0, w.Z)(
        Nt,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "ellipsed-content" }, [
            i("div", { class: { ellipsis: t.ellipsed } }, [t._t("default")], 2),
            t._v(" "),
            i(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.ellipsed,
                    expression: "ellipsed",
                  },
                ],
                staticClass: "read-more safari-only",
              },
              [
                i(
                  "span",
                  { staticClass: "read-more-button", on: { click: t.toggle } },
                  [t._v(t._s(t.getDictionaryVoice("common", "approfondisci")))]
                ),
              ]
            ),
          ]);
        },
        [],
        !1,
        null,
        "920b6830",
        null
      ).exports;
      var Ut = i(83193);
      const Wt = () => {
        new (s())({
          el: "#product-standard-container",
          store: Ut.Z,
          components: { ProductLayoutStandard: Rt, ModalZoomImage: Ot.Z },
        }),
          new (s())({
            el: "#product-modals-container",
            components: {
              ModalZoomMainSlider: Lt.Z,
              ModalSlideshowDisclaimer: () =>
                Promise.all([i.e(5202), i.e(5577)]).then(i.bind(i, 37884)),
            },
          }),
          new (s())({
            el: "#product-description",
            store: Ut.Z,
            components: { TextEllipsis: Bt },
          });
      };
    },
    18478: (t, e, i) => {
      i.d(e, { Z: () => a });
      const a = (t, e) =>
        e
          ? new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: e })
          : new Event(t, { bubbles: !0, cancelable: !0 });
    },
    18839: (t, e, i) => {
      i.d(e, { Z: () => a });
      const a = (t) => {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      };
    },
    83886: (t, e, i) => {
      i.d(e, { Z: () => s });
      var a = i(10395);
      const s = (t, e, i) => {
        (0, a.Z)(t, e, "scrollLeft", i);
      };
    },
    10395: (t, e, i) => {
      i.d(e, { Z: () => a });
      const a = (t, e, i, a) => {
        const s = t[i],
          n = e - s,
          r = +new Date(),
          o = () => {
            const e = +new Date() - r;
            (t[i] = ((t, e, i, a) => {
              let s = t;
              return (s /= a / 2) < 1
                ? (i / 2) * s * s + e
                : (-i / 2) * (--s * (s - 2) - 1) + e;
            })(e, s, n, a)),
              e < a && requestAnimationFrame(o);
          };
        o();
      };
    },
    55857: (t, e, i) => {
      i.d(e, { Z: () => c });
      var a = i(48930),
        s = i(18839),
        n = i(10395);
      const r = (t, e) => {
        const i = document.scrollingElement || document.documentElement;
        (0, n.Z)(i, t, "scrollTop", e);
      };
      var o = i(19017);
      const c = function (t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
        try {
          const i = (0, a.Z)(".main-header").offsetHeight,
            { top: n } = (0, s.Z)(t);
          r(n - i - e, 400);
        } catch (t) {
          o.Z.error(t);
        }
      };
    },
    68766: (t, e, i) => {
      i.d(e, { Z: () => a });
      i(33948);
      const a = (t, e) => {
        let i = 0;
        return function () {
          const a = new Date();
          a - i >= e && (t(...arguments), (i = a));
        };
      };
    },
    74227: (t, e, i) => {
      i.d(e, { Z: () => l });
      i(33948);
      var a = i(78914),
        s = i.n(a),
        n = i(66419),
        r = i.n(n),
        o = i(18478);
      const c = {
        name: "ModalZoomMainSlider",
        props: { banners: { type: Array, required: !0 } },
        computed: {
          slides() {
            var t;
            let e = [];
            return (
              s()((t = this.banners)).call(t, (t) => {
                var i;
                const { bannerListCollection: a } = t;
                s()((i = r()(a))).call(i, (t) => {
                  var i;
                  null != t &&
                    t.imageSet &&
                    null != t &&
                    null !== (i = t.imageSet) &&
                    void 0 !== i &&
                    i.desktop &&
                    (e = [...e, t]);
                });
              }),
              e
            );
          },
        },
        methods: {
          initModal() {
            const t = (0, o.Z)("zoomModal.shown");
            document.body.dispatchEvent(t);
          },
          leaveModal() {
            const t = (0, o.Z)("zoomModal.hidden");
            document.body.dispatchEvent(t);
          },
        },
      };
      const l = (0, i(51900).Z)(
        c,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("b-modal", {
            attrs: {
              id: "modal-slideshow-zoom-image",
              size: "xl",
              "body-class": "p-0",
              "hide-footer": "",
            },
            on: { shown: t.initModal, hide: t.leaveModal },
            scopedSlots: t._u([
              {
                key: "modal-header-close",
                fn: function () {
                  return [i("i", { staticClass: "fal fa-times-circle" })];
                },
                proxy: !0,
              },
              {
                key: "default",
                fn: function () {
                  return [
                    i(
                      "div",
                      {
                        staticClass:
                          "keen-slider-container zoom-slider-container",
                      },
                      [
                        i("div", { staticClass: "keen-slider-arrow prev" }, [
                          i("i", { staticClass: "fal fa-chevron-double-left" }),
                        ]),
                        t._v(" "),
                        i("div", { staticClass: "keen-slider-arrow next" }, [
                          i("i", {
                            staticClass: "fal fa-chevron-double-right",
                          }),
                        ]),
                        t._v(" "),
                        i(
                          "div",
                          { staticClass: "keen-slider zoom-slider" },
                          t._l(t.slides, function (e) {
                            return i("div", { staticClass: "fader-slide" }, [
                              i("picture", [
                                i("source", {
                                  attrs: {
                                    "data-srcset":
                                      e.imageSet.desktop.url + "?fm=webp",
                                    type: "image/webp",
                                  },
                                }),
                                t._v(" "),
                                i("source", {
                                  attrs: {
                                    "data-srcset":
                                      e.imageSet.desktop.url + "?fm=jpg",
                                    type: "image/jpeg",
                                  },
                                }),
                                t._v(" "),
                                i("img", {
                                  staticClass: "lazyload",
                                  attrs: {
                                    src: "/images/placeholder_home_slide.png",
                                    "data-src": e.imageSet.desktop.url,
                                    alt: e.imageSet.desktop.description,
                                  },
                                }),
                              ]),
                            ]);
                          }),
                          0
                        ),
                      ]
                    ),
                  ];
                },
                proxy: !0,
              },
            ]),
          });
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
    },
    42294: (t, e, i) => {
      i.d(e, { Z: () => l });
      var a = i(20629),
        s = i(99741),
        n = i(68766),
        r = i(48930),
        o = i(18839);
      const c = {
        name: "StickyRecap",
        props: { isOpen: { type: Boolean, required: !1 } },
        data: () => ({
          mainHeaderEl: (0, r.Z)("#main-header"),
          headerHeight: 0,
          scrollY: 0,
          marginTop: 20,
          stickyRecapTop: 0,
          innerRecapTop: 0,
          innerRecapStyle: {},
          stickyRecapStyle: {},
        }),
        computed: {
          hasUpperRecap() {
            return !(0, s.Z)(this.$slots.details);
          },
          hasMainSlot() {
            return !(0, s.Z)(this.$slots.main);
          },
          ...(0, a.Se)("screen", ["isMobileScreen"]),
        },
        watch: {
          scrollY(t, e) {
            this.updatePosition(t, e);
          },
          screenWidth() {
            this.updatePosition(this.scrollY);
          },
          headerHeight(t) {
            const e = t + this.marginTop;
            (this.stickyRecapTop = this.isMobileScreen
              ? 0
              : "".concat(e, "px")),
              (this.stickyRecapStyle = { top: this.stickyRecapTop });
          },
        },
        methods: {
          updatePosition(t, e) {
            if (this.isOpen) {
              (this.stickyRecapStyle = { position: "relative", top: 0 }),
                (this.innerRecapStyle = {
                  position: "absolute",
                  top: "".concat(this.innerRecapTop, "px"),
                });
              const i = e && t < e;
              ((0, o.Z)(this.$refs.main).top - t < this.headerHeight || i) &&
                this.$emit("closeUpperRecap");
            } else {
              (this.stickyRecapStyle = {
                position: "sticky",
                top: this.stickyRecapTop,
              }),
                (this.innerRecapStyle = { position: "static", top: 0 });
              const t = (0, r.Z)(".recap-container");
              if (t) {
                const { recap: e } = this.$refs;
                this.innerRecapTop = (0, o.Z)(e).top - (0, o.Z)(t).top;
              }
            }
          },
        },
        created() {
          const t = this.mainHeaderEl;
          if (t) {
            new ResizeObserver(() => {
              this.headerHeight = t.offsetHeight;
            }).observe(t);
          }
        },
        mounted() {
          window.addEventListener(
            "scroll",
            (0, n.Z)(() => {
              this.scrollY = Math.round(window.scrollY);
            }, 20)
          );
        },
      };
      const l = (0, i(51900).Z)(
        c,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              ref: "recap",
              staticClass: "sticky-recap",
              style: t.stickyRecapStyle,
            },
            [
              i(
                "div",
                {
                  ref: "inner",
                  staticClass: "inner",
                  style: t.innerRecapStyle,
                },
                [
                  t.hasUpperRecap
                    ? i(
                        "div",
                        { staticClass: "upper-recap" },
                        [t._t("details")],
                        2
                      )
                    : t._e(),
                  t._v(" "),
                  t.hasMainSlot
                    ? i(
                        "div",
                        { ref: "main", staticClass: "main-recap" },
                        [t._t("main")],
                        2
                      )
                    : t._e(),
                ]
              ),
            ]
          );
        },
        [],
        !1,
        null,
        "21aa4281",
        null
      ).exports;
    },
    21609: (t, e, i) => {
      i.d(e, { Z: () => s });
      const a = { name: "ProductStepStandard", extends: i(81194).Z };
      const s = (0, i(51900).Z)(
        a,
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            { staticClass: "step", class: t.$attrs.class },
            [
              i("div", { staticClass: "step-top" }, [
                i("span", { domProps: { innerHTML: t._s(t.stepTitle) } }),
                t._v(" "),
                t.stepContent
                  ? i(
                      "span",
                      {
                        staticClass: "more-options-step",
                        on: { click: t.toggleInfo },
                      },
                      [i("span", { staticClass: "more-options" })]
                    )
                  : t._e(),
              ]),
              t._v(" "),
              i("transition-expand", { attrs: { name: "faster-expand" } }, [
                t.isContentOpen
                  ? i("div", [
                      i("div", {
                        staticClass: "step-content",
                        domProps: { innerHTML: t._s(t.stepContent) },
                      }),
                    ])
                  : t._e(),
              ]),
            ],
            1
          );
        },
        [],
        !1,
        null,
        "15ee5c3d",
        null
      ).exports;
    },
  },
]);
