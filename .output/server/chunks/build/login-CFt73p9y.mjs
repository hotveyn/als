import { _ as __nuxt_component_0 } from './ButtonBase-CDfRn8e-.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { _ as _export_sfc, a as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import '@vueuse/core';
import 'tailwind-merge';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const buttonMessage = ref("\u0412\u043E\u0439\u0442\u0438");
    const formValues = reactive({
      code: ""
    });
    async function goLogin() {
      if (!formValues.code) {
        changeButtonText("\u0417\u0430\u0431\u044B\u043B \u0432\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434");
        return;
      }
      try {
        await $fetch("/api/auth/login", {
          method: "post",
          body: formValues
        });
        await router.push({ path: "/admin" });
      } catch (e) {
        changeButtonText("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430");
      }
    }
    function changeButtonText(text) {
      buttonMessage.value = text;
      setTimeout(() => {
        buttonMessage.value = "\u0412\u043E\u0439\u0442\u0438";
      }, 3e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonBase = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))} data-v-65464320><h1 class="" data-v-65464320>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434</h1><form class="login__form" data-v-65464320><input${ssrRenderAttr("value", unref(formValues).code)} class="login__input" type="text" placeholder="\u041A\u043E\u0434" data-v-65464320>`);
      _push(ssrRenderComponent(_component_ButtonBase, {
        class: "button",
        onClick: goLogin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(buttonMessage))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(buttonMessage)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65464320"]]);

export { login as default };
//# sourceMappingURL=login-CFt73p9y.mjs.map
