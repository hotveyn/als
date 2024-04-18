import { useSSRContext, defineComponent, toRefs, mergeProps, unref, ref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderTeleport, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
import { useWindowSize } from '@vueuse/core';
import { u as useFetch } from './fetch-CZK-Gnbc.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "button-second" }, _attrs))} data-v-9b7d9bd9>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button/ButtonSecond.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9b7d9bd9"]]);
const _imports_0 = publicAssetsURL("/images/baselogo.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "burgerMenuBase",
  __ssrInlineRender: true,
  props: {
    clickFunction: { type: Function },
    isActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { isActive } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "burger" }, _attrs))} data-v-69b5a65c><span class="${ssrRenderClass([{ "burger__line-active": unref(isActive) }, "burger__line"])}" data-v-69b5a65c></span><span class="${ssrRenderClass([{ "burger__line-active": unref(isActive) }, "burger__line"])}" data-v-69b5a65c></span><span class="${ssrRenderClass([{ "burger__line-active": unref(isActive) }, "burger__line"])}" data-v-69b5a65c></span></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/burgerMenuBase.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BurgerMenuBase = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-69b5a65c"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderOne",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const burgerButton = () => {
      isActive.value = !isActive.value;
      (void 0).body.style.overflowY = isActive.value ? "hidden" : "auto";
    };
    const userView = useWindowSize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonSecond = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-360b3809><div class="header__content container" data-v-360b3809><div class="${ssrRenderClass([{ hidden__logo: unref(isActive) }, "logo"])}" data-v-360b3809><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-360b3809></div><div class="header__desktop" data-v-360b3809><nav class="header__nav nav" data-v-360b3809><ul class="nav__list" data-v-360b3809><li class="nav__el" data-v-360b3809><a class="nav__link" href="#hero" data-v-360b3809>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#hero" data-v-360b3809>\u0410\u043A\u0446\u0438\u0438</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#brands" data-v-360b3809>\u0411\u0440\u0435\u043D\u0434\u044B</a></li><li class="nav__el" data-v-360b3809><a class="nav__link"${ssrRenderAttr("href", unref(userView).width.value > 700 ? "#catalog" : "#hero")} data-v-360b3809>\u0422\u043E\u0432\u0430\u0440\u044B</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#why-we-are" data-v-360b3809>\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</a></li></ul></nav>`);
      _push(ssrRenderComponent(_component_ButtonSecond, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
          } else {
            return [
              createTextVNode("\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "header__mobile-one-active": unref(isActive) }, "header__mobile"])}" data-v-360b3809><div class="${ssrRenderClass([{ "active-one": unref(isActive) }, "header__mobile-one"])}" data-v-360b3809>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isActive)) {
          _push2(`<div class="header__mobile-one__content" data-v-360b3809><nav class="header__nav nav" data-v-360b3809><ul class="nav__list" data-v-360b3809><li class="nav__el" data-v-360b3809><a class="nav__link" href="#hero" data-v-360b3809>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#hero" data-v-360b3809>\u0410\u043A\u0446\u0438\u0438</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#brands" data-v-360b3809>\u0411\u0440\u0435\u043D\u0434\u044B</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#catalog" data-v-360b3809>\u0422\u043E\u0432\u0430\u0440\u044B</a></li><li class="nav__el" data-v-360b3809><a class="nav__link" href="#why-we-are" data-v-360b3809>\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</a></li></ul></nav>`);
          _push2(ssrRenderComponent(_component_ButtonSecond, { class: "header__mobile-button" }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
              } else {
                return [
                  createTextVNode("\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(BurgerMenuBase, {
        "click-function": burgerButton,
        class: "burger-menu",
        "is-active": unref(isActive)
      }, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/HeaderOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-360b3809"]]);
const _imports_1 = publicAssetsURL("/icons/social/vk.svg");
const _imports_2 = publicAssetsURL("/icons/social/telegram.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterOne",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: euro } = useFetch("/api/euro/", "$3vZQxADjns");
    console.log(euro.value);
    const { data: socials } = useFetch("/api/socials", "$qLshpJKSXE");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6093d19c><div class="container footer__content" data-v-6093d19c><div class="footer__first" data-v-6093d19c><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-6093d19c><p class="footer__curse" data-v-6093d19c> 1\u20AC = ${ssrInterpolate(new Intl.NumberFormat("ru-Ru").format(
        Number(unref(euro) && unref(euro).value) || 0
      ))}\u20BD </p><p class="footer__license" data-v-6093d19c>2024@ALS</p></div><div class="footer__second" data-v-6093d19c><p class="footer__menu" data-v-6093d19c>\u041C\u0435\u043D\u044E</p><nav class="footer__nav ft-nav" data-v-6093d19c><ul class="ft-nav__list" data-v-6093d19c><li class="ft-nav__el" data-v-6093d19c><a href="#" class="ft-nav__link" data-v-6093d19c>\u0411\u0440\u0435\u043D\u0434\u044B</a></li><li class="ft-nav__el" data-v-6093d19c><a href="#" class="ft-nav__link" data-v-6093d19c>\u0410\u043A\u0446\u0438\u0438</a></li><li class="ft-nav__el" data-v-6093d19c><a href="#" class="ft-nav__link" data-v-6093d19c>\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 </a></li><li class="ft-nav__el" data-v-6093d19c><a href="#" class="ft-nav__link" data-v-6093d19c>\u0422\u043E\u0432\u0430\u0440\u044B</a></li></ul></nav></div><div class="footer__second" data-v-6093d19c><p class="footer__menu" data-v-6093d19c>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p><nav class="footer__nav ft-nav" data-v-6093d19c><ul class="ft-nav__list" data-v-6093d19c><li class="ft-nav__el" data-v-6093d19c><a${ssrRenderAttr("href", `mail:${unref(socials) && unref(socials).email && unref(socials).email.value || ""}`)} class="ft-nav__link" data-v-6093d19c>\u041F\u043E\u0447\u0442\u0430: ${ssrInterpolate(unref(socials) && unref(socials).email && unref(socials).email.value)}</a></li><li class="ft-nav__el" data-v-6093d19c><a${ssrRenderAttr("href", `tel:${unref(socials) && unref(socials).phone && unref(socials).phone.value}`)} class="ft-nav__link" data-v-6093d19c>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ${ssrInterpolate(unref(socials) && unref(socials).phone && unref(socials).phone.value)}</a></li><li class="ft-nav__el" data-v-6093d19c><div class="footer__socials" data-v-6093d19c><a${ssrRenderAttr("href", unref(socials) && unref(socials).vk && unref(socials).vk.value || "")} data-v-6093d19c><img${ssrRenderAttr("src", _imports_1)} alt="vk" data-v-6093d19c></a><a${ssrRenderAttr(
        "href",
        unref(socials) && unref(socials).telegram && unref(socials).telegram.value || ""
      )} data-v-6093d19c><img${ssrRenderAttr("src", _imports_2)} alt="telegran" data-v-6093d19c></a></div></li></ul></nav></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/FooterOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6093d19c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderOne = __nuxt_component_0;
  const _component_FooterOne = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-default" }, _attrs))} data-v-cf9e618e>`);
  _push(ssrRenderComponent(_component_HeaderOne, null, null, _parent));
  _push(`<main class="content" data-v-cf9e618e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_FooterOne, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf9e618e"]]);

export { _default as default };
//# sourceMappingURL=default-DSkHpMDp.mjs.map
