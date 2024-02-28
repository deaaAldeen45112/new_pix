(function () {
    var currentScript = document.currentScript
    var nonce = currentScript.nonce
    var url = new URL(currentScript.src)
    var domain = url.host
    var protocol = url.protocol.replace(':', '')

    function initFeefoLoader() {
      var feefoLoader = new ReevooLoader({
        assets: {
          reevooBadge: {
            url: "/register-feefo/badge-ui/feefo_adaptive_badges.js",
            id: 'reevoo_badges',
            type: 'JS'
          },
          widgetsStyles: {
            url: "/register-feefo/feefo-widgets-app/css/feefo_loader.css",
            id: 'REEVOO_STYLE_ID',
            type: 'STYLE'
          }
        },
        apis: {
          settings: {
            url: '/merchants/widgetintegration/all',
            host: 'api'
          },
          badgeTemplates: {
            url: '/feefo-widgets-data/api/badge',
            host: 'reevooApi',
            params: ['name', 'locale']
          },
          badgeVariants: {
            url: '/feefo-widgets-data/api/badge-variant',
            host: 'reevooApi',
            params: {
              trkref: 'trkref',
              name: 'variant',
              type: 'type',
              nocache: 'nocache',
              locale: 'locale'
            }
          },
          translations: {
            url: '/translations/---locale---/FeefoWidget',
            params: [
              'merchant_identifier', 'locale'
            ],
            host: 'api'
          },
          serviceReviewsSummary: {
            url: '/10/reviews/summary/service',
            host: 'api',
            params: {
              'origin': 'origin', 'merchant_identifier': 'merchant_identifier',
              'since_period': 'service_since_period', 'sort': 'sort', 'feefo_parameters': 'feefo_parameters',
              'media': 'media', 'selected_feature': 'selected_feature', 'tags': 'service_tags',
              'translate_attributes': 'translate_attributes'
            }
          },
          serviceReviews: {
            url: '/10/reviews/service',
            host: 'api',
            params: {
              'origin': 'origin', 'merchant_identifier': 'merchant_identifier',
              'since_period': 'service_since_period', 'page': 'page', 'page_size': 'page_size',
              'full_thread': 'full_thread', 'unanswered_feedback': 'unanswered_feedback',
              'sort': 'sort', 'feefo_parameters': 'feefo_parameters', 'media': 'media',
              'selected_feature': 'selected_feature', 'tags': 'service_tags',
              'translate_attributes': 'translate_attributes'
            }
          },
          productReviewsSummary: {
            url: '/10/reviews/summary/product',
            host: 'api',
            params: {
              'locale': 'restricted_to_locales',
              'product_sku': 'product_sku', 'parent_product_sku': 'parent_product_sku', 'tags': 'product_tags',
              'origin': 'origin', 'merchant_identifier': 'merchant_identifier', 'since_period': 'product_since_period',
              'sort': 'sort', 'feefo_parameters': 'feefo_parameters', 'media': 'media',
              'selected_feature': 'selected_feature',
              'translate_attributes': 'translate_attributes'
            }
          },
          productReviews: {
            url: '/10/reviews/product',
            params: {
              'locale': 'restricted_to_locales',
              'product_sku': 'product_sku', 'parent_product_sku': 'parent_product_sku', 'tags': 'product_tags',
              'origin': 'origin', 'merchant_identifier': 'merchant_identifier', 'since_period': 'product_since_period',
              'full_thread': 'full_thread', 'unanswered_feedback': 'unanswered_feedback', 'page': 'page', 'page_size': 'page_size',
              'sort': 'sort', 'feefo_parameters': 'feefo_parameters', 'media': 'media', 'selected_feature': 'selected_feature',
              'demographics': 'demographics', 'demographics_option': 'demographics_option',
              'translate_attributes': 'translate_attributes'
            },
            host: 'api'
          },
          helpfulnessVoting: {
            url: '/rate-helpful',
            host: 'api',
            cache: 'no-cache',
            credentials: 'include'
          },
          smartThemeProductTopics: {
            url: '/feature/widget/product-on-page-widget',
            host: 'api',
            params: [
              'merchant_identifier', 'product-sku', 'parent-product-sku', 'tags'
            ]
          },
          smartThemeServiceTopics: {
            url: '/feature/widget/service-on-page-widget',
            host: 'api',
            params: [
              'merchant_identifier'
            ]
          },
          smartThemeProductSnippets: {
            url: '/snippet/product-on-page-widget',
            host: 'api',
            params: [
              'merchant_identifier', 'product_sku', 'parent-product-sku',
              'selected_feature', 'tags'
            ]
          },
          smartThemeServiceSnippets: {
            url: '/snippet/service-on-page-widget',
            host: 'api',
            params: [
              'merchant_identifier', 'selected_feature'
            ]
          },
          snippetVoting: {
            url: '/flagbenefit/snippet/---feedbackId---/---feedbackAnswer---',
            host: 'api',
            cache: 'no-cache',
            method: 'POST',
            params: [
              'feedback_id', 'feedback_answer'
            ]
          },
          translate: {
            url: '/translation-service/translations/v1/FEEFO/---translatableType---/---saleId---',
            host: 'translations'
          },
          productAggregationTranslations: {
            url: '/translations/---locale---/productAttributes/---merchant_identifier---',
            params: [
              'locale', 'merchant_identifier'
            ],
            host: 'api'
          },
          serviceAggregationTranslations: {
            url: '/translations/---locale---/serviceAttributes/---merchant_identifier---',
            params: [
              'locale', 'merchant_identifier'
            ],
            host: 'api'
          },
          feefoTracker: {
            url: '/interaction/widget',
            host: 'collector',
            cache: 'no-cache',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            usePromiseStore: false,
            params: [
              'body'
            ]
          }
        },
        settings: {
            trkref: 'PIX-EN',
            merchant_slug: 'pixartprinting-group',
            merchant_campaign: '',
            merchant_name: 'Pixartprinting Group',
            merchant_id: '633c2b63e4b0ffb48225d89f',
            dev: false,
            hosts: {
                default: domain,
                reevooApi: domain,
                feefoAssets: domain + '/register-feefo/feefo-widget-v2/js/loader',
                feefoFlags: domain + '/public-feefo/widgets/flags',
                widget: domain + '/',
                api: domain + '/api-feefo/api',
                collector: domain + '/collect-feefo/api',
                translations: "translation.reevoo.com"
            },
            protocol: protocol,
            locale: 'en_GB',
            language: 'en',
            restricted_worldwide_locales: [],
            widget_preferences: {
                product_reviews_enabled: true,
                brand_reviews_enabled: false,
                flags_enabled: false,
                tracking_enabled: false,
                translations_enabled: false,
                service_time_frame: 'ALL',
                product_time_frame: 'ALL',
                service_read_all_url: 'https://www.feefo.com/en-GB/reviews/pixartprinting-group',
                service_award_level: 'NONE',
                service_on_page: {
                    topics_enabled: false,
                    snippets_enabled: false
                },
                product_on_page: {
                    topics_enabled: false,
                    snippets_enabled: false
            },
               series_as_tag: false
        }
    },
    theme_styles: {
        theme_color: '#FFDD00',
        attributes_color: '#494545',
        stars_color: '#F8D246',
        feefo_logo_color_1: '#494545',
        feefo_logo_color_2: '#fddc47',
        plus_icon_color: '#494545',
        minus_icon_color: '#D0D0D0',
        highlight_review_color: '#EFDF9D',
        aao_question_border_color: '#494545',
        logo_text_color: '#494545'
    },
    theme_class: '',
    feefo_badges_overrides: {
        styles: {
        'background-color': 'white',
        'score-color': '#494545',
        'stars-color': '#fddc47',
        'percentage-color': '#494545',
        'out-of-ten-color': '#494545',
        'text-light-color': '#494545',
        'out-of-ten-color': '#494545',
        'cls-1-color': '#494545',
        'cls-2-color': '#fddc47'
        }
    }
    })

  feefoLoader.loadDependencies().then(function () {
    feefoLoader.registerCustomElements()
  })
    }

  (function () {
    if (document.getElementById('reevoo-loader-lib')) return

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'reevoo-loader-lib'
    script.src = protocol + '://' + domain + "/register-feefo/feefo-widgets-app/feefo_loader.js"
    script.onload = initFeefoLoader
    if (nonce) {
      script.nonce = nonce
    }
    document.head.appendChild(script)
  })()
  }) ();