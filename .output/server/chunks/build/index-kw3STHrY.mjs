import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderTeleport, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderSlotInner } from 'vue/server-renderer';
import { useSSRContext, defineComponent, mergeProps, ref, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, computed, createTextVNode, Fragment, renderList, withAsyncContext, toDisplayString, watch } from 'vue';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
import { u as useFetch } from './fetch-CZK-Gnbc.mjs';
import { _ as __nuxt_component_0$5 } from './ButtonBase-CDfRn8e-.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import { useWindowSize } from '@vueuse/core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/transition/TransitionOpacity.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ModalBase",
  __ssrInlineRender: true,
  emits: ["hideModal"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-wrapper" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalBase.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _imports_0$8 = publicAssetsURL("/images/close.svg");
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ActionOne",
  __ssrInlineRender: true,
  props: {
    action: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    console.log(props.action);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "baner" }, _attrs))} data-v-4e4bf60e><div class="baner__picture" data-v-4e4bf60e><img class="baner__img"${ssrRenderAttr("src", `/uploads/${(_a = _ctx.action) == null ? void 0 : _a.imageName}.png`)} alt="asd" data-v-4e4bf60e></div>`);
      if (_ctx.action) {
        _push(`<div class="baner__info" data-v-4e4bf60e><h2 class="h2 baner__title" data-v-4e4bf60e>${ssrInterpolate(_ctx.action.title)}</h2><p class="baner__description" data-v-4e4bf60e>${ssrInterpolate(_ctx.action.description)}</p>`);
        if (_ctx.action.conditions) {
          _push(`<p class="baner__if" data-v-4e4bf60e>\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0438:</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="baner__ul" data-v-4e4bf60e><!--[-->`);
        ssrRenderList(_ctx.action.conditions, (condition) => {
          _push(`<li class="baner__li" data-v-4e4bf60e>${ssrInterpolate(condition.text)}</li>`);
        });
        _push(`<!--]--></ul><p class="baner__time" data-v-4e4bf60e> \u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0430\u043A\u0446\u0438\u0438: <span class="baner__time-number" data-v-4e4bf60e>${ssrInterpolate(_ctx.action.time)}</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img${ssrRenderAttr("src", _imports_0$8)} alt="close" class="baner__close" data-v-4e4bf60e></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/action/ActionOne.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-4e4bf60e"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SectionActions",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: actions } = useFetch("/api/action", "$IgT0XFwS7d");
    const isModalShow = ref(false);
    const chosenAction = ref();
    function hideModal() {
      isModalShow.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TransitionOpacity = __nuxt_component_0$4;
      const _component_ModalBase = _sfc_main$g;
      const _component_ActionOne = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "actions" }, _attrs))} data-v-65eed554><div class="actions__content" data-v-65eed554><div class="actions__actions" data-v-65eed554><!--[-->`);
      ssrRenderList(unref(actions), (action, index2) => {
        var _a;
        _push(`<div class="actions__action action" data-v-65eed554><span class="action__name" data-v-65eed554>${ssrInterpolate(action.name)}</span>`);
        if (index2 + 1 !== ((_a = unref(actions)) == null ? void 0 : _a.length)) {
          _push(`<span class="vertical__line" data-v-65eed554></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_TransitionOpacity, null, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              if (unref(isModalShow)) {
                _push3(ssrRenderComponent(_component_ModalBase, { onHideModal: hideModal }, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_ActionOne, {
                        action: unref(chosenAction),
                        onClose: hideModal
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ActionOne, {
                          action: unref(chosenAction),
                          onClose: hideModal
                        }, null, 8, ["action"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                unref(isModalShow) ? (openBlock(), createBlock(_component_ModalBase, {
                  key: 0,
                  onHideModal: hideModal
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ActionOne, {
                      action: unref(chosenAction),
                      onClose: hideModal
                    }, null, 8, ["action"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionActions.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-65eed554"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CardLastOrder",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-last-order" }, _attrs))} data-v-6c62d5cf><img${ssrRenderAttr("src", `/uploads/${_ctx.order.imageName}.png`)} alt="orderLink" class="card-last-order__img" data-v-6c62d5cf><p class="card-last-order__price" data-v-6c62d5cf>${ssrInterpolate(new Intl.NumberFormat("ru-RU").format(_ctx.order.price))}\u20BD </p></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CardLastOrder.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-6c62d5cf"]]);
const _imports_0$7 = publicAssetsURL("/images/alshero.png");
const _imports_0$6 = publicAssetsURL("/icons/hero/arr.svg");
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SectionHero",
  __ssrInlineRender: true,
  setup(__props) {
    const swiper = ref(void 0);
    const { data: lastOrders } = useFetch("/api/last-orders", "$Mn8v1gZUC4");
    function setSwiperInstance(swiperInstance) {
      swiper.value = swiperInstance;
    }
    const slideWidth = computed(() => {
      {
        return 97;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ButtonBase = __nuxt_component_0$5;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardLastOrder = __nuxt_component_3$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "opener"
      }, _attrs))} data-v-fad55975><div class="container opener__content" data-v-fad55975><div class="opener__left" data-v-fad55975><div class="opener_info" data-v-fad55975><h1 class="opener__title h1" data-v-fad55975> \u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B \u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u043D\u0430 \u0434\u043E\u043C </h1><p class="opener__description" data-v-fad55975> \u041F\u043E\u0440\u0430\u0434\u0443\u0439 \u0441\u0435\u0431\u044F \u0438 \u0431\u043B\u0438\u0437\u043A\u0438\u0445 \u043F\u043E\u0434\u0430\u0440\u043A\u0430\u043C\u0438 \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0415\u0432\u0440\u043E\u043F\u044B \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438. </p>`);
      _push(ssrRenderComponent(_component_ButtonBase, { class: "opener__button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A`);
          } else {
            return [
              createTextVNode("\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="opener__right" data-v-fad55975><img class="opener__img"${ssrRenderAttr("src", _imports_0$7)} alt="" data-v-fad55975></div><div class="opener__last last" data-v-fad55975><p class="last__h" data-v-fad55975>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0438 \u0417\u0430\u043A\u0430\u0437\u044B</p>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "last__orders",
        modules: ["SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        "slides-per-view": "auto",
        height: 250,
        "space-between": 24,
        onSwiper: setSwiperInstance
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(lastOrders), (lastOrder) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: lastOrder.id,
                style: { width: `${unref(slideWidth)}%` }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardLastOrder, {
                      order: lastOrder,
                      class: "last__card"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardLastOrder, {
                        order: lastOrder,
                        class: "last__card"
                      }, null, 8, ["order"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(lastOrders), (lastOrder) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: lastOrder.id,
                  style: { width: `${unref(slideWidth)}%` }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardLastOrder, {
                      order: lastOrder,
                      class: "last__card"
                    }, null, 8, ["order"])
                  ]),
                  _: 2
                }, 1032, ["style"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img style="${ssrRenderStyle(!((_a = unref(swiper)) == null ? void 0 : _a.isBeginning) ? null : { display: "none" })}" class="last__pagination-arrow last__pagination-arrow_left"${ssrRenderAttr("src", _imports_0$6)} alt="arrow" data-v-fad55975><img style="${ssrRenderStyle(!((_b = unref(swiper)) == null ? void 0 : _b.isEnd) ? null : { display: "none" })}" class="last__pagination-arrow last__pagination-arrow_right"${ssrRenderAttr("src", _imports_0$6)} alt="arrow" data-v-fad55975></div></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionHero.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-fad55975"]]);
const _imports_0$5 = publicAssetsURL("/images/brands/Adidas.png");
const _imports_1$5 = publicAssetsURL("/images/brands/amazon.png");
const _imports_2$2 = publicAssetsURL("/images/brands/Armani.png");
const _imports_3$2 = publicAssetsURL("/images/brands/Berska.png");
const _imports_4$2 = publicAssetsURL("/images/brands/Boss.png");
const _imports_5$2 = publicAssetsURL("/images/brands/Chanel.png");
const _imports_6$1 = publicAssetsURL("/images/brands/Clinique.png");
const _imports_7 = publicAssetsURL("/images/brands/DIOR.png");
const _imports_8 = publicAssetsURL("/images/brands/Foot locker.png");
const _imports_9 = publicAssetsURL("/images/brands/Guess.png");
const _imports_10 = publicAssetsURL("/images/brands/MAC.png");
const _imports_11 = publicAssetsURL("/images/brands/Michael Kors.png");
const _imports_12 = publicAssetsURL("/images/brands/Nike.png");
const _imports_13 = publicAssetsURL("/images/brands/TH.png");
const _imports_14 = publicAssetsURL("/images/brands/Victorias Secret.png");
const _imports_15 = publicAssetsURL("/images/brands/ZARA.png");
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "brands",
    class: "brands"
  }, _attrs))} data-v-cc81f689><div class="container brands__content" data-v-cc81f689><h2 class="brands__title brands__title_desktop h2" data-v-cc81f689> \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044E \u0442\u0430\u043A\u0438\u0445 \u0431\u0440\u0435\u043D\u0434\u043E\u0432 \u043A\u0430\u043A </h2><h2 class="brands__title brands__title_mobile h2" data-v-cc81f689>\u0431\u0440\u0435\u043D\u0434\u044B</h2><div class="brands__logos" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_0$5)} alt="Adidas" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_1$5)} alt="amazond" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_2$2)} alt="armani" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_3$2)} alt="Berska" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_4$2)} alt="Boss" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_5$2)} alt="Chanel" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_6$1)} alt="Clinque" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_7)} alt="DIOR" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_8)} alt="DIOR" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_9)} alt="Guess" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_10)} alt="MAC" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_11)} alt="Kors" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_12)} alt="Nike" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_13)} alt="TH" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_14)} alt="Secret" data-v-cc81f689><img class="brands__logo"${ssrRenderAttr("src", _imports_15)} alt="ZARA" data-v-cc81f689></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionBrands.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-cc81f689"]]);
const _imports_0$4 = publicAssetsURL("/images/how.png");
const _sfc_main$a = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "how",
    class: "how"
  }, _attrs))} data-v-0d61175b><div class="container how__content" data-v-0d61175b><div class="how__left" data-v-0d61175b><h2 class="h2 how__title" data-v-0d61175b>\u041A\u0430\u043A \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437</h2><div class="how__information" data-v-0d61175b><div class="how__part" data-v-0d61175b><h3 class="h3 how__sub-title" data-v-0d61175b>1. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440:</h3><p class="p how__text" data-v-0d61175b> \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 \u0432 \u0431\u043B\u043E\u043A\u0435 \u0431\u0440\u0435\u043D\u0434\u044B, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0442\u043E\u0432\u0430\u0440. \u041F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u0439 \u0432\u0430\u0441 \u0431\u0440\u0435\u043D\u0434 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0439 \u0442\u043E\u0432\u0430\u0440 \u0438\u0437 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0438\u0437 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432. </p></div><div class="how__part" data-v-0d61175b><h3 class="h3 how__sub-title" data-v-0d61175b>2. \u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441:</h3><p class="p how__text" data-v-0d61175b> \u041F\u043E\u0441\u043B\u0435 \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043D\u0430\u043C \u0437\u0430\u043F\u0440\u043E\u0441. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u0434\u043B\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432\u043E \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435. </p></div><div class="how__part" data-v-0d61175b><h3 class="h3 how__sub-title" data-v-0d61175b>3. \u041C\u044B \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F:</h3><p class="p how__text" data-v-0d61175b> \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435\u043C \u043F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0442 \u0432\u0430\u0441 \u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u043A\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0441\u044F \u0442\u043E\u0432\u0430\u0440\u0430, \u0435\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A, \u0446\u0435\u043D \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u0430\u043C \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440! </p></div><p class="how__comission" data-v-0d61175b> *\u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0437\u0430 \u0440\u0430\u0431\u043E\u0442\u0443 - 10% \u043D\u043E \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 15\u20AC </p></div></div><div class="how__right" data-v-0d61175b><img${ssrRenderAttr("src", _imports_0$4)} alt="bring a freind" class="how__img" data-v-0d61175b></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionHow.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0d61175b"]]);
const _imports_0$3 = publicAssetsURL("/images/whys/bxs_offer.svg");
const _imports_1$4 = publicAssetsURL("/images/whys/bxs_offer-1.svg");
const _imports_2$1 = publicAssetsURL("/images/whys/iconamoon_delivery-fast-fill.svg");
const _imports_3$1 = publicAssetsURL("/images/whys/material-symbols_contact-support-rounded.svg");
const _imports_4$1 = publicAssetsURL("/images/whys/solar_delivery-bold.svg");
const _imports_5$1 = publicAssetsURL("/images/whys/solar_document-add-bold.svg");
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "why-we-are",
    class: "why"
  }, _attrs))} data-v-7ab3b518><div class="container why__content" data-v-7ab3b518><h2 class="why__h2 h2" data-v-7ab3b518>\u041F\u043E\u0447\u0435\u043C\u0443 \u0438\u043C\u0435\u043D\u043D\u043E \u043C\u044B?</h2><div class="why__whys" data-v-7ab3b518><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_0$3)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u041F\u043E\u0438\u0441\u043A \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F</h3><p class="p card-why__p" data-v-7ab3b518> \u041C\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0442\u043E\u0432\u0430\u0440 \u043F\u043E \u043B\u0443\u0447\u0448\u0435\u0439 \u0446\u0435\u043D\u0435 \u0438 \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. </p></div><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_1$4)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430</h3><p class="p card-why__p" data-v-7ab3b518> \u041E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438 \u041C\u0438\u0440, Visa, Mastercard. </p></div><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_2$1)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043F\u043E \u0432\u0441\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438</h3><p class="p card-why__p" data-v-7ab3b518> \u0414\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u0442\u043E\u0432\u0430\u0440 \u0432 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0447\u0442\u044B \u0438\u043B\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C \u0434\u043E \u0434\u0432\u0435\u0440\u0438. </p></div><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_3$1)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</h3><p class="p card-why__p" data-v-7ab3b518> \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0432\u0441\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0449\u0438\u043C \u0432\u0430\u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C. </p></div><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_4$1)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u041D\u0430\u043B\u0430\u0436\u0435\u043D\u043D\u0430\u044F \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430</h3><p class="p card-why__p" data-v-7ab3b518> \u0423 \u043D\u0430\u0441 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043A\u043B\u0430\u0434\u043E\u0432 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0415\u0432\u0440\u043E\u043F\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043A\u043B\u0430\u0434\u044B \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430. </p></div><div class="why__why card-why" data-v-7ab3b518><img${ssrRenderAttr("src", _imports_5$1)} alt="1" class="card-why__img" data-v-7ab3b518><h3 class="h3 card-why__h3" data-v-7ab3b518>\u0422\u0430\u043C\u043E\u0436\u0435\u043D\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435</h3><p class="p card-why__p" data-v-7ab3b518> \u0411\u0435\u0437 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0438 \u0438 \u0441\u043A\u0430\u043D\u043E\u0432 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u043D\u0430 \u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043E 200 \u20AC. </p></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionWhy.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7ab3b518"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ButtonLittle",
  __ssrInlineRender: true,
  props: {
    selected: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["button-little", { "button-little_selected": _ctx.selected }]
      }, _attrs))} data-v-a1808646>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/ButtonLittle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a1808646"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CardCatalog",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-catalog" }, _attrs))} data-v-7f42021e>`);
      if (_ctx.product.sale) {
        _push(`<p class="card-catalog__sale" data-v-7f42021e> SALE ${ssrInterpolate(_ctx.product.sale)}% </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="card-catalog__img"${ssrRenderAttr("src", `/uploads/${_ctx.product.imageName}.png`)} alt="product" data-v-7f42021e><div class="card-catalog__text" data-v-7f42021e><p class="card-catalog__name" data-v-7f42021e>${ssrInterpolate(_ctx.product.name)}</p><div class="card-catalog__prices" data-v-7f42021e><p class="card-catalog__sale-price" data-v-7f42021e>${ssrInterpolate(new Intl.NumberFormat("ru-RU").format(_ctx.product.salePrice))}\u20BD </p><p class="card-catalog__price" data-v-7f42021e>${ssrInterpolate(new Intl.NumberFormat("ru-RU").format(_ctx.product.price))}\u20BD </p></div></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CardCatalog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7f42021e"]]);
const _imports_1$3 = "data:image/svg+xml,%3csvg%20width='11'%20height='12'%20viewBox='0%200%2011%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.84457%201.50012L10%201.5M10%201.5V9.53944M10%201.5L1%2010.5'%20stroke='%23323232'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SectionCatalog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    function setSwiperInstance(swiperInstance) {
      swiper.value = swiperInstance;
    }
    const selectedGroupId = ref(null);
    const { data: productGroups } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/group", "$BoLqtssGPR")), __temp = await __temp, __restore(), __temp);
    const products = ref();
    const loading = ref(true);
    const swiper = ref(void 0);
    if (productGroups.value && productGroups.value[0]) {
      selectedGroupId.value = productGroups.value[0].id;
      [__temp, __restore] = withAsyncContext(() => getProducts(productGroups.value[0].id)), await __temp, __restore();
    }
    async function selectGroup(id) {
      selectedGroupId.value = id;
      await getProducts(id);
    }
    async function getProducts(groupId) {
      const { data: responseProduct } = await useFetch(
        `/api/product/group/${groupId}`,
        "$lNfHOOmX5i"
      );
      loading.value = false;
      products.value = responseProduct.value;
    }
    const userView = useWindowSize();
    const sliderWidth = computed(() => {
      if (userView.width.value > 1670) {
        return "16.1";
      } else if (userView.width.value > 1450) {
        return "19.4";
      } else if (userView.width.value > 1e3) {
        return "24.5";
      } else if (userView.width.value > 800) {
        return "32.3";
      } else {
        return void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ButtonLittle = __nuxt_component_0$2;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardCatalog = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "catalog",
        class: "catalog"
      }, _attrs))} data-v-63e43ea6><div class="container catalog__content" data-v-63e43ea6><div class="catalog__header" data-v-63e43ea6><h2 class="catalog__title h2" data-v-63e43ea6>\u041A\u0410\u0422\u0410\u041B\u041E\u0413</h2><div class="catalog__tabs" data-v-63e43ea6><!--[-->`);
      ssrRenderList(unref(productGroups), (productGroup) => {
        _push(ssrRenderComponent(_component_ButtonLittle, {
          key: productGroup.id,
          class: "catalog__tab",
          selected: productGroup.id === unref(selectedGroupId),
          onClick: ($event) => selectGroup(productGroup.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(productGroup.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(productGroup.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (!unref(loading)) {
        _push(`<div class="catalog__products" data-v-63e43ea6>`);
        _push(ssrRenderComponent(_component_Swiper, {
          class: "catalog__swipers",
          modules: ["SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          "slides-per-view": "auto",
          height: 343,
          "space-between": 10,
          onSwiper: setSwiperInstance
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(products), (product) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: product.id,
                  style: { width: `${unref(sliderWidth)}%` }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardCatalog, {
                        product,
                        class: "catalog__swipers__slide"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardCatalog, {
                          product,
                          class: "catalog__swipers__slide"
                        }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: product.id,
                    style: { width: `${unref(sliderWidth)}%` }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardCatalog, {
                        product,
                        class: "catalog__swipers__slide"
                      }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1032, ["style"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<img style="${ssrRenderStyle(!((_a = unref(swiper)) == null ? void 0 : _a.isBeginning) ? null : { display: "none" })}" class="catalog__pagination-arrow catalog__pagination-arrow_left"${ssrRenderAttr("src", _imports_0$6)} alt="arrow" data-v-63e43ea6><img style="${ssrRenderStyle(!((_b = unref(swiper)) == null ? void 0 : _b.isEnd) ? null : { display: "none" })}" class="catalog__pagination-arrow catalog__pagination-arrow_right"${ssrRenderAttr("src", _imports_0$6)} alt="arrow" data-v-63e43ea6></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a href="#" class="catalog__link" data-v-63e43ea6> \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433 <img${ssrRenderAttr("src", _imports_1$3)} alt="red " data-v-63e43ea6></a></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionCatalog.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-63e43ea6"]]);
const _imports_0$2 = publicAssetsURL("/icons/plus.svg");
const _imports_1$2 = publicAssetsURL("/icons/minus.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ComputeMenu",
  __ssrInlineRender: true,
  props: {
    kind: {}
  },
  setup(__props) {
    const value = ref(1);
    watch(value, (old) => {
      if (old > 500) {
        value.value = 500;
      } else if (old < 0) {
        value.value = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "compute-menu" }, _attrs))} data-v-3e09c7c8><div class="compute-menu__wrap" data-v-3e09c7c8><div class="compute-menu__content" data-v-3e09c7c8><div class="compute-menu__info" data-v-3e09c7c8><p class="p" data-v-3e09c7c8>\u0412\u0435\u0441 \u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0432 \u043A\u0433.</p><p class="p compute-menu__kolvo" data-v-3e09c7c8>${ssrInterpolate(_ctx.kind.text)}: ${ssrInterpolate(unref(value))}</p></div><div class="compute-menu__input number-input" data-v-3e09c7c8><p disabled class="number-input__input" data-v-3e09c7c8>${ssrInterpolate(Math.round(unref(value) * _ctx.kind.mass))}</p><img class="number-input__icon"${ssrRenderAttr("src", _imports_0$2)} alt="plus" data-v-3e09c7c8><img class="number-input__icon"${ssrRenderAttr("src", _imports_1$2)} alt="plus" data-v-3e09c7c8></div></div><div class="compute-menu__delivery" data-v-3e09c7c8><p class="p" data-v-3e09c7c8>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</p><div class="compute-menu__delivery-price" data-v-3e09c7c8>${ssrInterpolate(Math.round(unref(value) * _ctx.kind.mass * _ctx.kind.oneKgEqual))}\u20BD </div></div></div><p class="p compute-menu__sup" data-v-3e09c7c8> \u0412\u0435\u0441 \u0442\u043E\u0432\u0430\u0440\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u044B\u0439 \u0438 \u0443\u043A\u0430\u0437\u0430\u043D \u0432 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0434\u043D\u043E\u0439 \u0432\u0435\u0449\u0438 </p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/compute/ComputeMenu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-3e09c7c8"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SectionCompute",
  __ssrInlineRender: true,
  setup(__props) {
    const kinds = ref([
      {
        id: 1,
        img: "bag.svg",
        text: "\u0421\u0443\u043C\u043A\u0430",
        mass: 2,
        oneKgEqual: 1e3
      },
      {
        id: 2,
        img: "cofta.svg",
        text: "\u041A\u043E\u0444\u0442\u0430",
        mass: 4,
        oneKgEqual: 1e3
      },
      {
        id: 3,
        img: "glasses.svg",
        text: "\u041E\u0447\u043A\u0438",
        mass: 1,
        oneKgEqual: 1e3
      },
      {
        id: 4,
        img: "kurtka.svg",
        text: "\u041A\u0443\u0440\u0442\u043A\u0430",
        mass: 1.1,
        oneKgEqual: 1e3
      },
      {
        id: 5,
        img: "pamada.svg",
        text: "\u041F\u043E\u043C\u0430\u0434\u0430",
        mass: 1.05,
        oneKgEqual: 1e3
      },
      {
        id: 6,
        img: "pants.svg",
        text: "\u0428\u0442\u0430\u043D\u044B",
        mass: 6,
        oneKgEqual: 1e3
      },
      {
        id: 7,
        img: "parfum.svg",
        text: "\u041F\u0430\u0440\u0444\u044E\u043C",
        mass: 0.01,
        oneKgEqual: 1e3
      },
      {
        id: 8,
        img: "shoes.svg",
        text: "\u041E\u0431\u0443\u0432\u044C",
        mass: 1.9,
        oneKgEqual: 1e3
      },
      {
        id: 9,
        img: "tonik.svg",
        text: "\u0422\u043E\u043D\u0438\u043A",
        mass: 0.3,
        oneKgEqual: 1e3
      },
      {
        id: 10,
        img: "tshirt.svg",
        text: "\u0424\u0443\u0442\u0431\u043E\u043B\u043A\u0430",
        mass: 1,
        oneKgEqual: 1e3
      },
      {
        id: 11,
        img: "watch.svg",
        text: "\u0427\u0430\u0441\u044B",
        mass: 1,
        oneKgEqual: 1e3
      },
      {
        id: 12,
        img: "wbag.svg",
        text: "\u0420\u044E\u043A\u0437\u0430\u043A",
        mass: 1,
        oneKgEqual: 1e3
      }
    ]);
    const selectedKind = ref(kinds.value[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ComputeMenu = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "compute" }, _attrs))} data-v-11637533><div class="compute__content container" data-v-11637533><h2 class="compute__h2 h2" data-v-11637533>\u0420\u0430\u0441\u0447\u0451\u0442 \u0446\u0435\u043D\u044B</h2>`);
      _push(ssrRenderComponent(_component_ComputeMenu, {
        kind: unref(selectedKind),
        class: "compute__compute-menu"
      }, null, _parent));
      _push(`<div class="compute__products" data-v-11637533><!--[-->`);
      ssrRenderList(unref(kinds), (kind) => {
        _push(`<div class="${ssrRenderClass([{ product_selected: kind.id === unref(selectedKind).id }, "compute__product product"])}" data-v-11637533><img${ssrRenderAttr("src", `/icons/${kind.img}`)} class="product__img" alt="product" data-v-11637533><p class="p product__info" data-v-11637533>${ssrInterpolate(kind.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionCompute.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-11637533"]]);
const _imports_0$1 = publicAssetsURL("/icons/works/1.svg");
const _imports_1$1 = publicAssetsURL("/icons/works/arr.svg");
const _imports_2 = publicAssetsURL("/icons/works/2.svg");
const _imports_3 = publicAssetsURL("/icons/works/3.svg");
const _imports_4 = publicAssetsURL("/icons/works/4.svg");
const _imports_5 = publicAssetsURL("/icons/works/5.svg");
const _imports_6 = publicAssetsURL("/icons/works/6.svg");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "works" }, _attrs))} data-v-6b5b6a5b><div class="works__content container" data-v-6b5b6a5b><h2 class="h2" data-v-6b5b6a5b>\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C</h2><div class="works__works" data-v-6b5b6a5b><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_0$1)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>1 \u041E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0437\u0430\u043A\u0430\u0437</p><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" class="work__arr" data-v-6b5b6a5b></div><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_2)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>2 \u041E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u043C \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u043C</p><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" class="work__arr" data-v-6b5b6a5b></div><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_3)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>3 \u0414\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043D\u0430 \u0441\u043A\u043B\u0430\u0434</p><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" class="work__arr" data-v-6b5b6a5b></div><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_4)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>4 \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C</p><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" class="work__arr" data-v-6b5b6a5b></div><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_5)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>5 \u041E\u0442\u043F\u0440\u0430\u043B\u044F\u0435\u043C \u0432 \u0420\u0424</p><img${ssrRenderAttr("src", _imports_1$1)} alt="arrow" class="work__arr" data-v-6b5b6a5b></div><div class="works__work work" data-v-6b5b6a5b><img class="work__ico"${ssrRenderAttr("src", _imports_6)} alt="work" data-v-6b5b6a5b><p class="work__text" data-v-6b5b6a5b>6 \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u0430\u043C\u0438</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionWorks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6b5b6a5b"]]);
const _imports_0 = publicAssetsURL("/icons/faq/up.svg");
const _imports_1 = publicAssetsURL("/icons/faq/down.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AccordionBase",
  __ssrInlineRender: true,
  props: {
    accordion: {}
  },
  setup(__props) {
    const isShowDescription = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["accordion", { active: unref(isShowDescription) }]
      }, _attrs))} data-v-683a77ab><div class="accordion__head" data-v-683a77ab><p class="accordion__title" data-v-683a77ab>${ssrInterpolate(_ctx.accordion.title)}</p><div class="accordion__arrow" data-v-683a77ab><img style="${ssrRenderStyle(unref(isShowDescription) ? null : { display: "none" })}"${ssrRenderAttr("src", _imports_0)} alt="up" data-v-683a77ab><img style="${ssrRenderStyle(!unref(isShowDescription) ? null : { display: "none" })}"${ssrRenderAttr("src", _imports_1)} alt="down" data-v-683a77ab></div></div><div class="accordion__description" data-v-683a77ab><p data-v-683a77ab>${ssrInterpolate(_ctx.accordion.text)}</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/accordion/AccordionBase.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-683a77ab"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionFAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        id: 1,
        title: "\u041A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      },
      {
        id: 2,
        title: "\u041A\u0430\u043A \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      },
      {
        id: 3,
        title: "\u041A\u0430\u043A\u0438\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      },
      {
        id: 4,
        title: "\u041A\u0430\u043A\u0438\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      },
      {
        id: 5,
        title: "\u041A\u0430\u043A\u0438\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      },
      {
        id: 6,
        title: "\u041A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C?",
        text: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u0441 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043E \u043D\u0435\u043F\u0440\u0438\u0433\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438\u043B\u0438 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C. \u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccordionBase = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-b3264b50><div class="faq__content container" data-v-b3264b50><h2 class="h2 faq__title" data-v-b3264b50>\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><div class="faq__questions" data-v-b3264b50><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(ssrRenderComponent(_component_AccordionBase, {
          key: faq.id,
          accordion: faq
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/SectionFAQ.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3264b50"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionActions = __nuxt_component_0$3;
  const _component_SectionHero = __nuxt_component_1;
  const _component_SectionBrands = __nuxt_component_2;
  const _component_SectionHow = __nuxt_component_3$1;
  const _component_SectionWhy = __nuxt_component_4;
  const _component_SectionCatalog = __nuxt_component_5;
  const _component_SectionCompute = __nuxt_component_6;
  const _component_SectionWorks = __nuxt_component_7;
  const _component_SectionFAQ = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "index" }, _attrs))} data-v-adc54333>`);
  _push(ssrRenderComponent(_component_SectionActions, null, null, _parent));
  _push(`<div class="index__sections" data-v-adc54333>`);
  _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionBrands, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionHow, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionWhy, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionCatalog, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionCompute, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionWorks, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionFAQ, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-adc54333"]]);

export { index as default };
//# sourceMappingURL=index-kw3STHrY.mjs.map
