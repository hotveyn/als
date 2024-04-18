import __nuxt_component_0$8 from './Icon-X4_dg_M2.mjs';
import { d as useAppConfig, m as mergeConfig, e as appConfig, f as useState, _ as _export_sfc, g as useNuxtApp, l as looseToNumber } from './server.mjs';
import { defineComponent, computed, useSSRContext, toRef, ref, watch, onUnmounted, provide, createElementBlock, onMounted, h as h$1, Fragment, watchEffect, unref, inject, getCurrentInstance, Teleport, reactive, nextTick, normalizeClass, useAttrs, toValue, toRaw, cloneVNode, mergeProps, withCtx, createVNode, createTextVNode, isRef, withAsyncContext, resolveDynamicComponent, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, shallowRef, createSlots, renderList, resolveComponent, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderTeleport, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { _ as __nuxt_component_0$7 } from './nuxt-link-D35ckuRb.mjs';
import { I as upperFirst, C as defu, J as isEqual } from '../runtime.mjs';
import { useVModel, useEventBus, useResizeObserver, useDebounceFn } from '@vueuse/core';
import { objectAsync, string, minLength, maxLength, number, minValue, maxValue, nullish as nullish$1 } from 'valibot';
import { u as useFetch } from './fetch-CZK-Gnbc.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-e886EPiO.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@prisma/client';
import 'node:fs';
import 'node:url';

function omit(object, keysToOmit) {
  const result = { ...object };
  for (const key of keysToOmit) {
    delete result[key];
  }
  return result;
}
function get(object, path, defaultValue) {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }
  let result = object;
  for (const key of path) {
    if (result === void 0 || result === null) {
      return defaultValue;
    }
    result = result[key];
  }
  return result !== void 0 ? result : defaultValue;
}
const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$A = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    dynamic: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const appConfig2 = useAppConfig();
    const dynamic = computed(() => {
      var _a, _b;
      return props.dynamic || ((_b = (_a = appConfig2.ui) == null ? void 0 : _a.icons) == null ? void 0 : _b.dynamic);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      dynamic
    };
  }
});
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$8;
  if (_ctx.dynamic) {
    _push(ssrRenderComponent(_component_Icon, mergeProps({ name: _ctx.name }, _attrs), null, _parent));
  } else {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.name }, _attrs))}></span>`);
  }
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __nuxt_component_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$k]]);
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const table = {
  wrapper: "relative overflow-x-auto",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm"
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-500 dark:text-gray-400",
    font: "",
    size: "text-sm"
  },
  checkbox: {
    padding: "ps-4"
  },
  loadingState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"
  },
  emptyState: {
    wrapper: "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0"
  },
  default: {
    sortAscIcon: "i-heroicons-bars-arrow-up-20-solid",
    sortDescIcon: "i-heroicons-bars-arrow-down-20-solid",
    sortButton: {
      icon: "i-heroicons-arrows-up-down-20-solid",
      trailing: true,
      square: true,
      color: "gray",
      variant: "ghost",
      class: "-m-1.5"
    },
    checkbox: {
      color: "primary"
    },
    progress: {
      color: "primary",
      animation: "carousel"
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading..."
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items."
    }
  }
};
const avatar = {
  wrapper: "relative inline-flex items-center justify-center flex-shrink-0",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-full",
  text: "font-medium leading-none text-gray-900 dark:text-white truncate",
  placeholder: "font-medium leading-none text-gray-500 dark:text-gray-400 truncate",
  size: {
    "3xs": "h-4 w-4 text-[8px]",
    "2xs": "h-5 w-5 text-[10px]",
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-14 w-14 text-xl",
    "2xl": "h-16 w-16 text-2xl",
    "3xl": "h-20 w-20 text-3xl"
  },
  chip: {
    base: "absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",
    background: "bg-{color}-500 dark:bg-{color}-400",
    position: {
      "top-right": "top-0 right-0",
      "bottom-right": "bottom-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-left": "bottom-0 left-0"
    },
    size: {
      "3xs": "h-[4px] min-w-[4px] text-[4px] p-px",
      "2xs": "h-[5px] min-w-[5px] text-[5px] p-px",
      xs: "h-1.5 min-w-[0.375rem] text-[6px] p-px",
      sm: "h-2 min-w-[0.5rem] text-[7px] p-0.5",
      md: "h-2.5 min-w-[0.625rem] text-[8px] p-0.5",
      lg: "h-3 min-w-[0.75rem] text-[10px] p-0.5",
      xl: "h-3.5 min-w-[0.875rem] text-[11px] p-1",
      "2xl": "h-4 min-w-[1rem] text-[12px] p-1",
      "3xl": "h-5 min-w-[1.25rem] text-[14px] p-1"
    }
  },
  icon: {
    base: "text-gray-500 dark:text-gray-400 flex-shrink-0",
    size: {
      "3xs": "h-2 w-2",
      "2xs": "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-7 w-7",
      "2xl": "h-8 w-8",
      "3xl": "h-10 w-10"
    }
  },
  default: {
    size: "sm",
    icon: null,
    chipColor: null,
    chipPosition: "top-right"
  }
};
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    xs: "p-1.5",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
    xl: "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const arrow$1 = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  // eslint-disable-next-line quotes
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const dropdown = {
  wrapper: "relative inline-flex text-left rtl:text-right",
  container: "z-20 group",
  trigger: "inline-flex w-full",
  width: "w-48",
  height: "",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  divide: "divide-y divide-gray-200 dark:divide-gray-700",
  padding: "p-1",
  item: {
    base: "group flex items-center gap-1.5 w-full",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    active: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",
    inactive: "text-gray-700 dark:text-gray-200",
    disabled: "cursor-not-allowed opacity-50",
    icon: {
      base: "flex-shrink-0 w-5 h-5",
      active: "text-gray-500 dark:text-gray-400",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    label: "truncate",
    shortcuts: "hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transition duration-100 ease-out",
    enterFromClass: "transform scale-95 opacity-0",
    enterToClass: "transform scale-100 opacity-100",
    leaveActiveClass: "transition duration-75 ease-in",
    leaveFromClass: "transform scale-100 opacity-100",
    leaveToClass: "transform scale-95 opacity-0"
  },
  popper: {
    placement: "bottom-end",
    strategy: "fixed"
  },
  default: {
    openDelay: 0,
    closeDelay: 0
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const kbd = {
  base: "inline-flex items-center justify-center text-gray-900 dark:text-white",
  padding: "px-1",
  size: {
    xs: "h-4 min-w-[16px] text-[10px]",
    sm: "h-5 min-w-[20px] text-[11px]",
    md: "h-6 min-w-[24px] text-[12px]"
  },
  rounded: "rounded",
  font: "font-medium font-sans",
  background: "bg-gray-100 dark:bg-gray-800",
  ring: "ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",
  default: {
    size: "sm"
  }
};
const progress = {
  wrapper: "w-full flex flex-col gap-2",
  indicator: {
    container: {
      base: "flex flex-row justify-end",
      width: "min-w-fit",
      transition: "transition-all"
    },
    align: "text-end",
    width: "w-fit",
    color: "text-gray-400 dark:text-gray-500",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  progress: {
    base: "block appearance-none border-none overflow-hidden",
    width: "w-full [&::-webkit-progress-bar]:w-full",
    size: {
      "2xs": "h-px",
      xs: "h-0.5",
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
      xl: "h-4",
      "2xl": "h-5"
    },
    rounded: "rounded-full [&::-webkit-progress-bar]:rounded-full",
    track: "[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",
    bar: "[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",
    color: "text-{color}-500 dark:text-{color}-400",
    background: "[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",
    indeterminate: {
      base: "indeterminate:relative",
      rounded: "indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"
    }
  },
  steps: {
    base: "grid grid-cols-1",
    color: "text-{color}-500 dark:text-{color}-400",
    size: {
      "2xs": "text-xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-sm",
      xl: "text-base",
      "2xl": "text-base"
    }
  },
  step: {
    base: "transition-all opacity-0 truncate row-start-1 col-start-1",
    align: "text-end",
    active: "opacity-100",
    first: "text-gray-500 dark:text-gray-400"
  },
  animation: {
    carousel: "bar-animation-carousel",
    "carousel-inverse": "bar-animation-carousel-inverse",
    swing: "bar-animation-swing",
    elastic: "bar-animation-elastic"
  },
  default: {
    color: "primary",
    size: "md",
    animation: "carousel"
  }
};
const input = {
  wrapper: "relative",
  base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  form: "form-input",
  rounded: "rounded-md",
  placeholder: "placeholder-gray-400 dark:placeholder-gray-500",
  file: {
    base: "file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50",
    padding: {
      "2xs": "ps-[85px]",
      xs: "ps-[87px]",
      sm: "ps-[96px]",
      md: "ps-[98px]",
      lg: "ps-[100px]",
      xl: "ps-[109px]"
    }
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    xs: "gap-x-1.5",
    sm: "gap-x-1.5",
    md: "gap-x-2",
    lg: "gap-x-2.5",
    xl: "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    xs: "px-2.5 py-1.5",
    sm: "px-2.5 py-1.5",
    md: "px-3 py-2",
    lg: "px-3.5 py-2.5",
    xl: "px-3.5 py-2.5"
  },
  leading: {
    padding: {
      "2xs": "ps-7",
      xs: "ps-8",
      sm: "ps-9",
      md: "ps-10",
      lg: "ps-11",
      xl: "ps-12"
    }
  },
  trailing: {
    padding: {
      "2xs": "pe-7",
      xs: "pe-8",
      sm: "pe-9",
      md: "pe-10",
      lg: "pe-11",
      xl: "pe-12"
    }
  },
  color: {
    white: {
      outline: "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    gray: {
      outline: "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  variant: {
    outline: "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    none: "bg-transparent focus:ring-0 focus:shadow-none"
  },
  icon: {
    base: "flex-shrink-0 text-gray-400 dark:text-gray-500",
    color: "text-{color}-500 dark:text-{color}-400",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      md: "h-5 w-5",
      lg: "h-5 w-5",
      xl: "h-6 w-6"
    },
    leading: {
      wrapper: "absolute inset-y-0 start-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    },
    trailing: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      pointer: "pointer-events-none",
      padding: {
        "2xs": "px-2",
        xs: "px-2.5",
        sm: "px-2.5",
        md: "px-3",
        lg: "px-3.5",
        xl: "px-3.5"
      }
    }
  },
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const textarea = {
  ...input,
  form: "form-textarea",
  default: {
    size: "sm",
    color: "white",
    variant: "outline"
  }
};
const select = {
  ...input,
  form: "form-select",
  placeholder: "text-gray-400 dark:text-gray-500",
  default: {
    size: "sm",
    color: "white",
    variant: "outline",
    loadingIcon: "i-heroicons-arrow-path-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty"
  },
  arrow: {
    ...arrow$1,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const checkbox = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-checkbox",
  rounded: "rounded",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary"
  }
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs"
  }
};
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const tabs = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-10",
    width: "w-full",
    marker: {
      wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm"
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-8",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: ""
    }
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
const notifications = {
  wrapper: "fixed flex flex-col justify-end z-[55]",
  position: "bottom-0 end-0",
  width: "w-full sm:w-96",
  container: "px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"
};
const config$h = mergeConfig(appConfig.ui.strategy, appConfig.ui.avatar, avatar);
const _sfc_main$z = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6
  },
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: "img"
    },
    src: {
      type: [String, Boolean],
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$h.default.icon
    },
    size: {
      type: String,
      default: () => config$h.default.size,
      validator(value) {
        return Object.keys(config$h.size).includes(value);
      }
    },
    chipColor: {
      type: String,
      default: () => config$h.default.chipColor,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    chipPosition: {
      type: String,
      default: () => config$h.default.chipPosition,
      validator(value) {
        return Object.keys(config$h.chip.position).includes(value);
      }
    },
    chipText: {
      type: [String, Number],
      default: null
    },
    imgClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("avatar", toRef(props, "ui"), config$h);
    const url = computed(() => {
      if (typeof props.src === "boolean") {
        return null;
      }
      return props.src;
    });
    const placeholder = computed(() => {
      return (props.alt || "").split(" ").map((word) => word.charAt(0)).join("").substring(0, 2);
    });
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        (error.value || !url.value) && ui.value.background,
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.class);
    });
    const imgClass = computed(() => {
      return twMerge(twJoin(
        ui.value.rounded,
        ui.value.size[props.size]
      ), props.imgClass);
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[props.size]
      );
    });
    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll("{color}", props.chipColor)
      );
    });
    const error = ref(false);
    watch(() => props.src, () => {
      if (error.value) {
        error.value = false;
      }
    });
    function onError() {
      error.value = true;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError
    };
  }
});
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$6;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}>`);
  if (_ctx.url && !_ctx.error) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      class: _ctx.imgClass,
      alt: _ctx.alt,
      src: _ctx.url
    }, _ctx.attrs, { onError: _ctx.onError }), null), _parent);
  } else if (_ctx.text) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.text)}">${ssrInterpolate(_ctx.text)}</span>`);
  } else if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else if (_ctx.placeholder) {
    _push(`<span class="${ssrRenderClass(_ctx.ui.placeholder)}">${ssrInterpolate(_ctx.placeholder)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.chipColor) {
    _push(`<span class="${ssrRenderClass(_ctx.chipClass)}">${ssrInterpolate(_ctx.chipText)}</span>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Avatar.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __nuxt_component_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$y = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$7;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive })
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              onClick: (e2) => !isExternal && !_ctx.disabled && navigate(e2)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$i]]);
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  onUnmounted(() => {
    groupContext == null ? void 0 : groupContext.value.unregister(instance);
  });
  return {
    size: computed(() => (groupContext == null ? void 0 : groupContext.value.size) || props.size),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1)
        return ui.value.rounded;
      if (groupContext.value.children.length === 1)
        return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0)
        return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1)
        return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$g = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$x = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6,
    ULink: __nuxt_component_0$5
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$g.default.size,
      validator(value) {
        return Object.keys(config$g.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$g.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$g.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$g.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$g.variant),
          ...Object.values(config$g.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$g.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$g);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$5;
  const _component_UIcon = __nuxt_component_0$6;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __nuxt_component_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$h]]);
const config$f = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main$w = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6,
    UAvatar: __nuxt_component_2$4,
    UButton: __nuxt_component_3$3
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config$f.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config$f.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config$f.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config$f.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config$f);
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      var _a;
      return twMerge(twJoin(
        ui.value.wrapper,
        (_a = ui.value.background) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow
      ), props.class);
    });
    const progressClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.progress.base,
        (_a = ui.value.progress.background) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.icon.base,
        (_a = ui.value.icon.color) == null ? void 0 : _a.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
    }
    function onMouseleave() {
    }
    function onClose() {
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    onUnmounted(() => {
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$6;
  const _component_UAvatar = __nuxt_component_2$4;
  const _component_UButton = __nuxt_component_3$3;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !(_ctx.title && _ctx.$slots.title) && "mt-0 leading-5"))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$g]]);
function useToast() {
  const notifications2 = useState("notifications", () => []);
  function add(notification2) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification2
    };
    const index = notifications2.value.findIndex((n2) => n2.id === body.id);
    if (index === -1) {
      notifications2.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications2.value = notifications2.value.filter((n2) => n2.id !== id);
  }
  return {
    add,
    remove
  };
}
const config$e = mergeConfig(appConfig.ui.strategy, appConfig.ui.notifications, notifications);
const _sfc_main$v = defineComponent({
  components: {
    UNotification: __nuxt_component_0$4
  },
  inheritAttrs: false,
  props: {
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("notifications", toRef(props, "ui"), config$e);
    const toast = useToast();
    const notifications2 = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toast,
      notifications: notifications2,
      wrapperClass
    };
  }
});
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0$4;
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div${ssrRenderAttrs(mergeProps({
      class: _ctx.wrapperClass,
      role: "region"
    }, _ctx.attrs))}>`);
    if (_ctx.notifications.length) {
      _push2(`<div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
      ssrRenderList(_ctx.notifications, (notification2) => {
        _push2(`<div>`);
        _push2(ssrRenderComponent(_component_UNotification, mergeProps(notification2, {
          class: notification2.click && "cursor-pointer",
          onClick: ($event) => notification2.click && notification2.click(notification2),
          onClose: ($event) => _ctx.toast.remove(notification2.id)
        }), createSlots({ _: 2 }, [
          renderList(_ctx.$slots, (_2, name) => {
            return {
              name,
              fn: withCtx((slotData, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, name, slotData, null, _push3, _parent2, _scopeId);
                } else {
                  return [
                    renderSlot(_ctx.$slots, name, slotData)
                  ];
                }
              })
            };
          })
        ]), _parent));
        _push2(`</div>`);
      });
      _push2(`<!--]--></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div>`);
  }, "body", false, _parent);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$f]]);
const config$d = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$u = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6,
    UAvatar: __nuxt_component_2$4
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config$d.default.size,
      validator(value) {
        return Object.keys(config$d.border.size.horizontal).includes(value) || Object.keys(config$d.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config$d);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$6;
  const _component_UAvatar = __nuxt_component_2$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$e]]);
const useFormGroup = (inputProps, config2) => {
  const formBus = inject("form-events", void 0);
  const formGroup2 = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup2) {
    if (inputProps == null ? void 0 : inputProps.id) {
      formGroup2.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup2.name.value] = formGroup2.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup2 == null ? void 0 : formGroup2.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup2 == null ? void 0 : formGroup2.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup2 == null ? void 0 : formGroup2.eagerValidation.value)) {
      emitFormEvent("input", formGroup2 == null ? void 0 : formGroup2.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup2 == null ? void 0 : formGroup2.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup2 == null ? void 0 : formGroup2.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup2 == null ? void 0 : formGroup2.size.value] ? formGroup2 == null ? void 0 : formGroup2.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2 == null ? void 0 : config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup2 == null ? void 0 : formGroup2.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_2, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const ATTR_KEY = "data-n-ids";
const SEPARATOR = "-";
function useId(key) {
  var _a;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [useId] key must be a string.");
  }
  key = `n${key.slice(1)}`;
  const nuxtApp = useNuxtApp();
  const instance = getCurrentInstance();
  if (!instance) {
    throw new TypeError("[nuxt] `useId` must be called within a component setup function.");
  }
  nuxtApp._id || (nuxtApp._id = 0);
  instance._nuxtIdIndex || (instance._nuxtIdIndex = {});
  (_a = instance._nuxtIdIndex)[key] || (_a[key] = 0);
  const instanceIndex = key + SEPARATOR + instance._nuxtIdIndex[key]++;
  {
    const ids = JSON.parse(instance.attrs[ATTR_KEY] || "{}");
    ids[instanceIndex] = key + SEPARATOR + nuxtApp._id++;
    instance.attrs[ATTR_KEY] = JSON.stringify(ids);
    return ids[instanceIndex];
  }
}
const config$c = mergeConfig(appConfig.ui.strategy, appConfig.ui.checkbox, checkbox);
const _sfc_main$t = defineComponent({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => null
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null
    },
    modelValue: {
      type: [Boolean, Array],
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: void 0
    },
    help: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: () => config$c.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: ""
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    var _a;
    const { ui, attrs } = useUI("checkbox", toRef(props, "ui"), config$c, toRef(props, "class"));
    const { emitFormChange, color, name, inputId: _inputId } = useFormGroup(props);
    const inputId = (_a = _inputId.value) != null ? _a : useId("$YWrWuPJ69t");
    const toggle = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const onChange = (event) => {
      emit("change", event.target.checked);
      emitFormChange();
    };
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.background,
        ui.value.border,
        color.value && ui.value.ring.replaceAll("{color}", color.value),
        color.value && ui.value.color.replaceAll("{color}", color.value)
      ), props.inputClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      toggle,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      onChange
    };
  }
});
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper,
    "data-n-ids": _ctx.attrs["data-n-ids"]
  }, _attrs))}><div class="${ssrRenderClass(_ctx.ui.container)}"><input${ssrRenderAttrs((_temp0 = mergeProps({
    id: _ctx.inputId,
    checked: Array.isArray(_ctx.toggle) ? ssrLooseContain(_ctx.toggle, _ctx.value) : _ctx.toggle,
    name: _ctx.name,
    required: _ctx.required,
    value: _ctx.value,
    disabled: _ctx.disabled,
    indeterminate: _ctx.indeterminate,
    type: "checkbox",
    class: _ctx.inputClass
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.toggle))))}></div>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass(_ctx.ui.label)}">`);
    ssrRenderSlot(_ctx.$slots, "label", {}, () => {
      _push(`${ssrInterpolate(_ctx.label)}`);
    }, _push, _parent);
    if (_ctx.required) {
      _push(`<span class="${ssrRenderClass(_ctx.ui.required)}">*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</label>`);
    if (_ctx.help) {
      _push(`<p class="${ssrRenderClass(_ctx.ui.help)}">${ssrInterpolate(_ctx.help)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Checkbox.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$d]]);
const config$b = mergeConfig(appConfig.ui.strategy, appConfig.ui.progress, progress);
const _sfc_main$s = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: null
    },
    max: {
      type: [Number, Array],
      default: 100
    },
    indicator: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: () => config$b.default.animation,
      validator(value) {
        return Object.keys(config$b.animation).includes(value);
      }
    },
    size: {
      type: String,
      default: () => config$b.default.size,
      validator(value) {
        return Object.keys(config$b.progress.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$b.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("progress", toRef(props, "ui"), config$b, toRef(props, "class"));
    const indicatorContainerClass = computed(() => {
      return twJoin(
        ui.value.indicator.container.base,
        ui.value.indicator.container.width,
        ui.value.indicator.container.transition
      );
    });
    const indicatorClass = computed(() => {
      return twJoin(
        ui.value.indicator.align,
        ui.value.indicator.width,
        ui.value.indicator.color,
        ui.value.indicator.size[props.size]
      );
    });
    const progressClass = computed(() => {
      var _a;
      const classes = [
        ui.value.progress.base,
        ui.value.progress.width,
        ui.value.progress.size[props.size],
        ui.value.progress.rounded,
        ui.value.progress.track,
        ui.value.progress.bar,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        (_a = ui.value.progress.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.progress.background,
        ui.value.progress.indeterminate.base,
        ui.value.progress.indeterminate.rounded
      ];
      if (isIndeterminate.value) {
        classes.push(ui.value.animation[props.animation]);
      }
      return twJoin(...classes);
    });
    const stepsClass = computed(() => {
      var _a;
      return twJoin(
        ui.value.steps.base,
        (_a = ui.value.steps.color) == null ? void 0 : _a.replaceAll("{color}", props.color),
        ui.value.steps.size[props.size]
      );
    });
    const stepClass = computed(() => {
      return twJoin(
        ui.value.step.base,
        ui.value.step.align
      );
    });
    const stepActiveClass = computed(() => {
      return twJoin(
        ui.value.step.active
      );
    });
    const stepFirstClass = computed(() => {
      return twJoin(
        ui.value.step.first
      );
    });
    function isActive(index) {
      return index === Number(props.value);
    }
    function isFirst(index) {
      return index === 0;
    }
    function stepClasses(index) {
      index = Number(index);
      const classes = [stepClass.value];
      if (isFirst(index)) {
        classes.push(stepFirstClass.value);
      }
      if (isActive(index)) {
        classes.push(stepActiveClass.value);
      }
      return classes.join(" ");
    }
    const isIndeterminate = computed(() => props.value === void 0 || props.value === null);
    const isSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value) {
        return null;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case props.value < 0:
          return 0;
        case props.value > realMax.value:
          return 100;
        default:
          return props.value / realMax.value * 100;
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      indicatorContainerClass,
      indicatorClass,
      progressClass,
      stepsClass,
      stepClasses,
      isIndeterminate,
      isSteps,
      realMax,
      percent
    };
  }
});
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))} data-v-1e545a26>`);
  if (_ctx.indicator || _ctx.$slots.indicator) {
    ssrRenderSlot(_ctx.$slots, "indicator", { percent: _ctx.percent }, () => {
      if (!_ctx.isSteps) {
        _push(`<div class="${ssrRenderClass(_ctx.indicatorContainerClass)}" style="${ssrRenderStyle({ width: `${_ctx.percent}%` })}" data-v-1e545a26><div class="${ssrRenderClass(_ctx.indicatorClass)}" data-v-1e545a26>${ssrInterpolate(Math.round(_ctx.percent))}% </div></div>`);
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`<progress${ssrRenderAttrs(mergeProps({ class: _ctx.progressClass }, { value: _ctx.value, max: _ctx.realMax }))} data-v-1e545a26>${ssrInterpolate(_ctx.percent !== void 0 ? `${Math.round(_ctx.percent)}%` : void 0)}</progress>`);
  if (_ctx.isSteps) {
    _push(`<div class="${ssrRenderClass(_ctx.stepsClass)}" data-v-1e545a26><!--[-->`);
    ssrRenderList(_ctx.max, (step, index) => {
      _push(`<div class="${ssrRenderClass(_ctx.stepClasses(index))}" data-v-1e545a26>`);
      ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
        _push(`${ssrInterpolate(step)}`);
      }, _push, _parent);
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Progress.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __nuxt_component_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-1e545a26"]]);
const config$a = mergeConfig(appConfig.ui.strategy, appConfig.ui.table, table);
function defaultComparator(a2, z2) {
  return a2 === z2;
}
function defaultSort(a2, b2, direction) {
  if (a2 === b2) {
    return 0;
  }
  if (direction === "asc") {
    return a2 < b2 ? -1 : 1;
  } else {
    return a2 > b2 ? -1 : 1;
  }
}
const _sfc_main$r = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6,
    UButton: __nuxt_component_3$3,
    UProgress: __nuxt_component_2$3,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortMode: {
      type: String,
      default: "auto"
    },
    sortButton: {
      type: Object,
      default: () => config$a.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => config$a.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => config$a.default.sortDescIcon
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => config$a.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => config$a.default.emptyState
    },
    progress: {
      type: Object,
      default: () => config$a.default.progress
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:sort"],
  setup(props, { emit, attrs: $attrs }) {
    const { ui, attrs } = useUI("table", toRef(props, "ui"), config$a, toRef(props, "class"));
    const columns = computed(() => {
      var _a, _b;
      return (_b = props.columns) != null ? _b : Object.keys((_a = props.rows[0]) != null ? _a : {}).map((key) => ({ key, label: upperFirst(key), sortable: false, class: void 0, sort: defaultSort }));
    });
    const sort = useVModel(props, "sort", emit, { passive: true, defaultValue: defu({}, props.sort, { column: null, direction: "asc" }) });
    const savedSort = { column: sort.value.column, direction: null };
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column) || props.sortMode === "manual") {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return props.rows.slice().sort((a2, b2) => {
        var _a3;
        var _a2;
        const aValue = get(a2, column);
        const bValue = get(b2, column);
        const sort2 = (_a3 = (_a2 = columns.value.find((col) => col.key === column)) == null ? void 0 : _a2.sort) != null ? _a3 : defaultSort;
        return sort2(aValue, bValue, direction);
      });
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const indeterminate = computed(() => selected.value && selected.value.length > 0 && selected.value.length < props.rows.length);
    const emptyState = computed(() => {
      if (props.emptyState === null)
        return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null)
        return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a2, z2) {
      if (typeof props.by === "string") {
        const property = props.by;
        return (a2 == null ? void 0 : a2[property]) === (z2 == null ? void 0 : z2[property]);
      }
      return props.by(a2, z2);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, savedSort, { column: null, direction: "asc" });
        } else {
          sort.value = { column: sort.value.column, direction: sort.value.direction === "asc" ? "desc" : "asc" };
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      if (!$attrs.onSelect) {
        return;
      }
      $attrs.onSelect(row);
    }
    function selectAllRows() {
      props.rows.forEach((row) => {
        if (isSelected(row)) {
          return;
        }
        selected.value.push(row);
      });
    }
    function onChange(checked) {
      if (checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
    }
    function getRowData(row, rowKey, defaultValue = "") {
      return get(row, rowKey, defaultValue);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isSelected,
      onSort,
      onSelect,
      onChange,
      getRowData
    };
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_3$3;
  const _component_UProgress = __nuxt_component_2$3;
  const _component_UIcon = __nuxt_component_0$6;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}"><thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.modelValue) {
    _push(`<th scope="col" class="${ssrRenderClass(_ctx.ui.checkbox.padding)}">`);
    _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
      "model-value": _ctx.indeterminate || _ctx.selected.length === _ctx.rows.length,
      indeterminate: _ctx.indeterminate
    }, _ctx.ui.default.checkbox, {
      "aria-label": "Select all",
      onChange: _ctx.onChange
    }), null, _parent));
    _push(`</th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.class])}">`);
    ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
      column,
      sort: _ctx.sort,
      onSort: _ctx.onSort
    }, () => {
      if (column.sortable) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.sortButton || {}, ..._ctx.sortButton }, {
          icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
          label: column[_ctx.columnAttribute],
          onClick: ($event) => _ctx.onSort(column)
        }), null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
      }
    }, _push, _parent);
    _push(`</th>`);
  });
  _push(`<!--]--></tr>`);
  if (_ctx.loading && _ctx.progress) {
    _push(`<tr><td${ssrRenderAttr("colspan", 0)} class="${ssrRenderClass(_ctx.ui.progress.wrapper)}">`);
    _push(ssrRenderComponent(_component_UProgress, mergeProps({ ..._ctx.ui.default.progress || {}, ..._ctx.progress }, { size: "2xs" }), null, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.$attrs.onSelect && _ctx.ui.tr.active, row == null ? void 0 : row.class])}">`);
      if (_ctx.modelValue) {
        _push(`<td class="${ssrRenderClass(_ctx.ui.checkbox.padding)}">`);
        _push(ssrRenderComponent(_component_UCheckbox, mergeProps({
          modelValue: _ctx.selected,
          "onUpdate:modelValue": ($event) => _ctx.selected = $event,
          value: row
        }, _ctx.ui.default.checkbox, {
          "aria-label": "Select row",
          onClick: () => {
          }
        }), null, _parent));
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        var _a;
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size, (_a = row[column.key]) == null ? void 0 : _a.class])}">`);
        ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
          column,
          row,
          index,
          getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
        }, () => {
          _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
        }, _push, _parent);
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$b]]);
const config$9 = mergeConfig(appConfig.ui.strategy, appConfig.ui.kbd, kbd);
const _sfc_main$q = defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => config$9.default.size,
      validator(value) {
        return Object.keys(config$9.size).includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("kbd", toRef(props, "ui"), config$9);
    const kbdClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.size[props.size],
        ui.value.padding,
        ui.value.rounded,
        ui.value.font,
        ui.value.background,
        ui.value.ring
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      kbdClass
    };
  }
});
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<kbd${ssrRenderAttrs(mergeProps({ class: _ctx.kbdClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.value)}`);
  }, _push, _parent);
  _push(`</kbd>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Kbd.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$a]]);
let t$5 = Symbol("headlessui.useid"), i$6 = 0;
function I$1() {
  return inject(t$5, () => `${++i$6}`)();
}
function l$3(e2) {
  provide(t$5, e2);
}
function o$3(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$6(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$6), t2;
}
var i$5 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$5(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$5 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$3 = new s$5();
function i$4(r2) {
  if (c$3.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$3(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$5 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$5 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$2(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$4(e2)) == null ? void 0 : t2.body) ? false : u$6(r2, { [0]() {
    return e2.matches(c$2);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$2))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function _$1(e2) {
  let r2 = i$4(e2);
  nextTick(() => {
    r2 && !w$4(r2.activeElement, 0) && S$1(e2);
  });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$1 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$1)) != null ? t2 : false;
}
function O$1(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v$1(e2, r2) {
  return P(E$2(), r2, { relativeTo: e2 });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O$1(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s3 = p2 + a2;
    if (r2 & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$4() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$3() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$4() || i$3();
}
function u$5(e2, t2, n2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$3(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$5("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$5("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$5("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$5("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$4(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$3(e2) && o$3(e2) instanceof HTMLButtonElement && !((u2 = o$3(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$4() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
function i$2({ container: e2, accept: t2, walk: d2, enabled: o2 }) {
  watchEffect(() => {
    let r2 = e2.value;
    if (!r2 || o2 !== void 0 && !o2.value)
      return;
    let l2 = i$4(e2);
    if (!l2)
      return;
    let c2 = Object.assign((f2) => t2(f2), { acceptNode: t2 }), n2 = l2.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c2, false);
    for (; n2.nextNode(); )
      d2(n2.currentNode);
  });
}
var N$4 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$4 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$4({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$6(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var s$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$3 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
  return () => {
    var t2;
    let { features: e2, ...r2 } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r2["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$4({ ourProps: n2, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$3(o2) {
  provide(n$1, o2);
}
var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
let t$2 = [];
function u$3(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n2.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$3(l2);
  }
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$1() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$1();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r2 of a2.splice(t2, 1))
          r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
function E$1(n2, e2, o2, r2) {
  c$3.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$3(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$3 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$4(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$3(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$6(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$5.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$5.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$3(o2) instanceof HTMLElement && T2.add(o$3(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$3(T2, d2) || (s3.value ? P(o$3(o2), u$6(f2.value, { [d$3.Forwards]: () => N$5.Next, [d$3.Backwards]: () => N$5.Previous }) | N$5.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$3.Focusable }), A$4({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: s$3.Focusable })]);
  };
} }), { features: A$3 });
function W$1(t2) {
  let n2 = ref(t$2.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$1(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$2.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value)
        return;
      let f2 = o$3(n2);
      f2 && t$1(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$3(r2), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$5.First | N$5.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value)
      return;
    let m2 = B(r2);
    o$3(n2) instanceof HTMLElement && m2.add(o$3(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$3(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$3(t2, n2) {
  for (let r2 of t2)
    if (r2.contains(n2))
      return true;
  return false;
}
function m$3(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$2(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$4() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function o2(a2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$1();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let a2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
            i2 && !o2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && o2(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (o2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        a2 !== t2 && (void 0).scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$2(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a$1 = a$2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$1(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$2(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$1.subscribe(() => {
  let e2 = a$1.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a$1.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$1.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a2, n2) {
  let i2 = m$3(a$1), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2)
      return;
    a$1.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a$1.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$3(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$2({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$4(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$3(t2)) || e2.contains((a2 = (f2 = o$3(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$1, { features: s$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$4({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${I$1()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$4({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(r2) {
  let e2 = i$4(r2);
  if (!e2) {
    if (r2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r2}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let t2 = e2.createElement("div");
  return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
}
let _ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r2, { slots: e2, attrs: u2 }) {
  let t2 = ref(null), i2 = computed(() => i$4(t2)), l2 = s$1(), n2 = inject(C$1, null), o2 = ref(l2 === true || n2 == null ? x(t2.value) : n2.resolveTarget()), d2 = ref(false);
  onMounted(() => {
    d2.value = true;
  }), watchEffect(() => {
    l2 || n2 != null && (o2.value = n2.resolveTarget());
  });
  let c2 = inject(m$1, null), v2 = false, H2 = getCurrentInstance();
  return watch(t2, () => {
    if (v2 || !c2)
      return;
    let a2 = o$3(t2);
    a2 && (onUnmounted(c2.register(a2), H2), v2 = true);
  }), onUnmounted(() => {
    var g2, P2;
    let a2 = (g2 = i2.value) == null ? void 0 : g2.getElementById("headlessui-portal-root");
    a2 && o2.value === a2 && o2.value.children.length <= 0 && ((P2 = o2.value.parentElement) == null || P2.removeChild(o2.value));
  }), () => {
    if (!d2.value || o2.value === null)
      return null;
    let a2 = { ref: t2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o2.value }, A$4({ ourProps: a2, theirProps: r2, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), m$1 = Symbol("PortalParentContext");
function A$2() {
  let r2 = inject(m$1, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), r2 && r2.register(l2), () => t2(l2);
  }
  function t2(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), r2 && r2.unregister(l2);
  }
  let i2 = { register: u2, unregister: t2, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(m$1, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let C$1 = Symbol("PortalGroupContext"), N$1 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r2, { attrs: e2, slots: u2 }) {
  let t2 = reactive({ resolveTarget() {
    return r2.target;
  } });
  return provide(C$1, t2), () => {
    let { target: i2, ...l2 } = r2;
    return A$4({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(e2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", We = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (e2) => true }, setup(e2, { emit: i2, attrs: l2, slots: d2, expose: s$12 }) {
  var _$12, q;
  let n2 = (_$12 = e2.id) != null ? _$12 : `headlessui-dialog-${I$1()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => e2.role === "dialog" || e2.role === "alertdialog" ? e2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => e2.open === A$1 && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : e2.open), m2 = ref(null), E$22 = computed(() => i$4(m2));
  if (s$12({ el: m2, $el: m2 }), !(e2.open !== A$1 || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : e2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = A$2(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z2 } = N$2({ portals: Q2, defaultContainers: [computed(() => {
    var t2;
    return (t2 = h2.panelRef.value) != null ? t2 : m2.value;
  })] }), ee2 = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te2 = computed(() => N2 || U2.value ? false : k$1.value), le2 = computed(() => {
    var t2, a2, p2;
    return (p2 = Array.from((a2 = (t2 = E$22.value) == null ? void 0 : t2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$3(K)) && f2 instanceof HTMLElement)) != null ? p2 : null;
  });
  E(le2, te2);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var t2, a2, p2;
    return (p2 = Array.from((a2 = (t2 = E$22.value) == null ? void 0 : t2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$3(K)) && f2 instanceof HTMLElement)) != null ? p2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (t2, a2) => {
    if (a2 === "Dialog")
      return u$6(t2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M = ref(null), h2 = { titleId: M, panelRef: ref(null), dialogState: c2, setTitleId(t2) {
    M.value !== t2 && (M.value = t2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (t2, a2) => {
    h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((q = E$22.value) == null ? void 0 : q.defaultView, "keydown", (t2) => {
    ie.value && (t2.defaultPrevented || t2.key === o$2.Escape && (t2.preventDefault(), t2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (t2) => {
    var a2;
    return { containers: [...(a2 = t2.containers) != null ? a2 : [], B2] };
  }), watchEffect((t2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$3(m2);
    if (!a2)
      return;
    let p2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    p2.observe(a2), t2(() => p2.disconnect());
  }), () => {
    let { open: t2, initialFocus: a2, ...p2 } = e2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1(_, () => h$1(N$1, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$6(ee2.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$4({ ourProps: f2, theirProps: { ...p2, ...l2 }, slot: L2, attrs: l2, slots: d2, visible: c2.value === 0, features: N$4.RenderStrategy | N$4.Static, name: "Dialog" })))))), h$1(Z2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2 }) {
  var u2;
  let d2 = (u2 = e2.id) != null ? u2 : `headlessui-dialog-overlay-${I$1()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = e2;
    return A$4({ ourProps: { id: d2, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(e2, { attrs: i2, slots: l2, expose: d2 }) {
  var r2;
  let s3 = (r2 = e2.id) != null ? r2 : `headlessui-dialog-backdrop-${I$1()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return d2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = e2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1(_, () => A$4({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2, expose: d2 }) {
  var r2;
  let s3 = (r2 = e2.id) != null ? r2 : `headlessui-dialog-panel-${I$1()}`, n2 = T("DialogPanel");
  d2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = e2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$4({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(e2, { attrs: i2, slots: l2 }) {
  var n2;
  let d2 = (n2 = e2.id) != null ? n2 : `headlessui-dialog-title-${I$1()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(d2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = e2;
    return A$4({ ourProps: { id: d2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g$2(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$3(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g$2(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
var Z = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))(Z || {}), ee = ((o2) => (o2[o2.Pointer = 0] = "Pointer", o2[o2.Other = 1] = "Other", o2))(ee || {});
function te$1(i2) {
  requestAnimationFrame(() => requestAnimationFrame(i2));
}
let A = Symbol("MenuContext");
function O(i2) {
  let b2 = inject(A, null);
  if (b2 === null) {
    let o2 = new Error(`<${i2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return b2;
}
let ge$1 = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(i2, { slots: b2, attrs: o2 }) {
  let I2 = ref(1), p2 = ref(null), e2 = ref(null), r2 = ref([]), f$12 = ref(""), d2 = ref(null), g2 = ref(1);
  function M(t2 = (a2) => a2) {
    let a2 = d2.value !== null ? r2.value[d2.value] : null, n2 = O$1(t2(r2.value.slice()), (v2) => o$3(v2.dataRef.domRef)), s3 = a2 ? n2.indexOf(a2) : null;
    return s3 === -1 && (s3 = null), { items: n2, activeItemIndex: s3 };
  }
  let l2 = { menuState: I2, buttonRef: p2, itemsRef: e2, items: r2, searchQuery: f$12, activeItemIndex: d2, activationTrigger: g2, closeMenu: () => {
    I2.value = 1, d2.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t2, a2, n2) {
    let s3 = M(), v2 = f(t2 === c$1.Specific ? { focus: c$1.Specific, id: a2 } : { focus: t2 }, { resolveItems: () => s3.items, resolveActiveIndex: () => s3.activeItemIndex, resolveId: (u2) => u2.id, resolveDisabled: (u2) => u2.dataRef.disabled });
    f$12.value = "", d2.value = v2, g2.value = n2 != null ? n2 : 1, r2.value = s3.items;
  }, search(t2) {
    let n2 = f$12.value !== "" ? 0 : 1;
    f$12.value += t2.toLowerCase();
    let v2 = (d2.value !== null ? r2.value.slice(d2.value + n2).concat(r2.value.slice(0, d2.value + n2)) : r2.value).find((h2) => h2.dataRef.textValue.startsWith(f$12.value) && !h2.dataRef.disabled), u2 = v2 ? r2.value.indexOf(v2) : -1;
    u2 === -1 || u2 === d2.value || (d2.value = u2, g2.value = 1);
  }, clearSearch() {
    f$12.value = "";
  }, registerItem(t2, a2) {
    let n2 = M((s3) => [...s3, { id: t2, dataRef: a2 }]);
    r2.value = n2.items, d2.value = n2.activeItemIndex, g2.value = 1;
  }, unregisterItem(t2) {
    let a2 = M((n2) => {
      let s3 = n2.findIndex((v2) => v2.id === t2);
      return s3 !== -1 && n2.splice(s3, 1), n2;
    });
    r2.value = a2.items, d2.value = a2.activeItemIndex, g2.value = 1;
  } };
  return w$2([p2, e2], (t2, a2) => {
    var n2;
    l2.closeMenu(), w$4(a2, h.Loose) || (t2.preventDefault(), (n2 = o$3(p2)) == null || n2.focus());
  }, computed(() => I2.value === 0)), provide(A, l2), t$3(computed(() => u$6(I2.value, { [0]: i$1.Open, [1]: i$1.Closed }))), () => {
    let t2 = { open: I2.value === 0, close: l2.closeMenu };
    return A$4({ ourProps: {}, theirProps: i2, slot: t2, slots: b2, attrs: o2, name: "Menu" });
  };
} }), Se$1 = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(i2, { attrs: b2, slots: o2, expose: I2 }) {
  var M;
  let p2 = (M = i2.id) != null ? M : `headlessui-menu-button-${I$1()}`, e2 = O("MenuButton");
  I2({ el: e2.buttonRef, $el: e2.buttonRef });
  function r2(l2) {
    switch (l2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$3(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.First);
        });
        break;
      case o$2.ArrowUp:
        l2.preventDefault(), l2.stopPropagation(), e2.openMenu(), nextTick(() => {
          var t2;
          (t2 = o$3(e2.itemsRef)) == null || t2.focus({ preventScroll: true }), e2.goToItem(c$1.Last);
        });
        break;
    }
  }
  function f2(l2) {
    switch (l2.key) {
      case o$2.Space:
        l2.preventDefault();
        break;
    }
  }
  function d2(l2) {
    i2.disabled || (e2.menuState.value === 0 ? (e2.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o$3(e2.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (l2.preventDefault(), e2.openMenu(), te$1(() => {
      var t2;
      return (t2 = o$3(e2.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let g2 = s$4(computed(() => ({ as: i2.as, type: b2.type })), e2.buttonRef);
  return () => {
    var n2;
    let l2 = { open: e2.menuState.value === 0 }, { ...t2 } = i2, a2 = { ref: e2.buttonRef, id: p2, type: g2.value, "aria-haspopup": "menu", "aria-controls": (n2 = o$3(e2.itemsRef)) == null ? void 0 : n2.id, "aria-expanded": e2.menuState.value === 0, onKeydown: r2, onKeyup: f2, onClick: d2 };
    return A$4({ ourProps: a2, theirProps: t2, slot: l2, attrs: b2, slots: o2, name: "MenuButton" });
  };
} }), be = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(i2, { attrs: b2, slots: o2, expose: I2 }) {
  var l2;
  let p2 = (l2 = i2.id) != null ? l2 : `headlessui-menu-items-${I$1()}`, e2 = O("MenuItems"), r2 = ref(null);
  I2({ el: e2.itemsRef, $el: e2.itemsRef }), i$2({ container: computed(() => o$3(e2.itemsRef)), enabled: computed(() => e2.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function f2(t2) {
    var a2;
    switch (r2.value && clearTimeout(r2.value), t2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e2.search(t2.key);
      case o$2.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e2.activeItemIndex.value !== null) {
          let s3 = e2.items.value[e2.activeItemIndex.value];
          (a2 = o$3(s3.dataRef.domRef)) == null || a2.click();
        }
        e2.closeMenu(), _$1(o$3(e2.buttonRef));
        break;
      case o$2.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Next);
      case o$2.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.First);
      case o$2.End:
      case o$2.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e2.goToItem(c$1.Last);
      case o$2.Escape:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => {
          var n2;
          return (n2 = o$3(e2.buttonRef)) == null ? void 0 : n2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        t2.preventDefault(), t2.stopPropagation(), e2.closeMenu(), nextTick(() => v$1(o$3(e2.buttonRef), t2.shiftKey ? N$5.Previous : N$5.Next));
        break;
      default:
        t2.key.length === 1 && (e2.search(t2.key), r2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  function d2(t2) {
    switch (t2.key) {
      case o$2.Space:
        t2.preventDefault();
        break;
    }
  }
  let g2 = l$2(), M = computed(() => g2 !== null ? (g2.value & i$1.Open) === i$1.Open : e2.menuState.value === 0);
  return () => {
    var s3, v2;
    let t2 = { open: e2.menuState.value === 0 }, { ...a2 } = i2, n2 = { "aria-activedescendant": e2.activeItemIndex.value === null || (s3 = e2.items.value[e2.activeItemIndex.value]) == null ? void 0 : s3.id, "aria-labelledby": (v2 = o$3(e2.buttonRef)) == null ? void 0 : v2.id, id: p2, onKeydown: f2, onKeyup: d2, role: "menu", tabIndex: 0, ref: e2.itemsRef };
    return A$4({ ourProps: n2, theirProps: a2, slot: t2, attrs: b2, slots: o2, features: N$4.RenderStrategy | N$4.Static, visible: M.value, name: "MenuItems" });
  };
} }), Me = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(i2, { slots: b2, attrs: o2, expose: I2 }) {
  var v2;
  let p$1 = (v2 = i2.id) != null ? v2 : `headlessui-menu-item-${I$1()}`, e2 = O("MenuItem"), r2 = ref(null);
  I2({ el: r2, $el: r2 });
  let f2 = computed(() => e2.activeItemIndex.value !== null ? e2.items.value[e2.activeItemIndex.value].id === p$1 : false), d2 = p(r2), g2 = computed(() => ({ disabled: i2.disabled, get textValue() {
    return d2();
  }, domRef: r2 }));
  onMounted(() => e2.registerItem(p$1, g2)), onUnmounted(() => e2.unregisterItem(p$1)), watchEffect(() => {
    e2.menuState.value === 0 && f2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var u2, h2;
      return (h2 = (u2 = o$3(r2)) == null ? void 0 : u2.scrollIntoView) == null ? void 0 : h2.call(u2, { block: "nearest" });
    });
  });
  function M(u2) {
    if (i2.disabled)
      return u2.preventDefault();
    e2.closeMenu(), _$1(o$3(e2.buttonRef));
  }
  function l2() {
    if (i2.disabled)
      return e2.goToItem(c$1.Nothing);
    e2.goToItem(c$1.Specific, p$1);
  }
  let t2 = u$4();
  function a2(u2) {
    t2.update(u2);
  }
  function n2(u2) {
    t2.wasMoved(u2) && (i2.disabled || f2.value || e2.goToItem(c$1.Specific, p$1, 0));
  }
  function s3(u2) {
    t2.wasMoved(u2) && (i2.disabled || f2.value && e2.goToItem(c$1.Nothing));
  }
  return () => {
    let { disabled: u2 } = i2, h2 = { active: f2.value, disabled: u2, close: e2.closeMenu }, { ...C2 } = i2;
    return A$4({ ourProps: { id: p$1, ref: r2, role: "menuitem", tabIndex: u2 === true ? void 0 : -1, "aria-disabled": u2 === true ? true : void 0, disabled: void 0, onClick: M, onFocus: l2, onPointerenter: a2, onMouseenter: a2, onPointermove: n2, onMousemove: n2, onPointerleave: s3, onMouseleave: s3 }, theirProps: { ...o2, ...C2 }, slot: h2, attrs: o2, slots: b2, name: "MenuItem" });
  };
} });
let d$1 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n2 = ref(true);
  return () => n2.value ? h$1(f$1, { as: "button", type: "button", features: s$3.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e2, a2 = 50;
    function r2() {
      var u2;
      if (a2-- <= 0) {
        e2 && cancelAnimationFrame(e2);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n2.value = false, cancelAnimationFrame(e2);
        return;
      }
      e2 = requestAnimationFrame(r2);
    }
    e2 = requestAnimationFrame(r2);
  } }) : null;
} });
var te = ((s3) => (s3[s3.Forwards = 0] = "Forwards", s3[s3.Backwards = 1] = "Backwards", s3))(te || {}), le = ((o2) => (o2[o2.Less = -1] = "Less", o2[o2.Equal = 0] = "Equal", o2[o2.Greater = 1] = "Greater", o2))(le || {});
let U = Symbol("TabsContext");
function C(a2) {
  let b2 = inject(U, null);
  if (b2 === null) {
    let s3 = new Error(`<${a2} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, C), s3;
  }
  return b2;
}
let G = Symbol("TabsSSRContext"), pe$1 = defineComponent({ name: "TabGroup", emits: { change: (a2) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a2, { slots: b2, attrs: s3, emit: o2 }) {
  var w2;
  let i2 = ref((w2 = a2.selectedIndex) != null ? w2 : a2.defaultIndex), l2 = ref([]), r2 = ref([]), x2 = computed(() => a2.selectedIndex !== null), P2 = computed(() => x2.value ? a2.selectedIndex : i2.value);
  function y2(t2) {
    var c2;
    let n2 = O$1(u2.tabs.value, o$3), d2 = O$1(u2.panels.value, o$3), e2 = n2.filter((I2) => {
      var p2;
      return !((p2 = o$3(I2)) != null && p2.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > n2.length - 1) {
      let I2 = u$6(i2.value === null ? 0 : Math.sign(t2 - i2.value), { [-1]: () => 1, [0]: () => u$6(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), p2 = u$6(I2, { [0]: () => n2.indexOf(e2[0]), [1]: () => n2.indexOf(e2[e2.length - 1]) });
      p2 !== -1 && (i2.value = p2), u2.tabs.value = n2, u2.panels.value = d2;
    } else {
      let I2 = n2.slice(0, t2), D = [...n2.slice(t2), ...I2].find((W2) => e2.includes(W2));
      if (!D)
        return;
      let O2 = (c2 = n2.indexOf(D)) != null ? c2 : u2.selectedIndex.value;
      O2 === -1 && (O2 = u2.selectedIndex.value), i2.value = O2, u2.tabs.value = n2, u2.panels.value = d2;
    }
  }
  let u2 = { selectedIndex: computed(() => {
    var t2, n2;
    return (n2 = (t2 = i2.value) != null ? t2 : a2.defaultIndex) != null ? n2 : null;
  }), orientation: computed(() => a2.vertical ? "vertical" : "horizontal"), activation: computed(() => a2.manual ? "manual" : "auto"), tabs: l2, panels: r2, setSelectedIndex(t2) {
    P2.value !== t2 && o2("change", t2), x2.value || y2(t2);
  }, registerTab(t2) {
    var e2;
    if (l2.value.includes(t2))
      return;
    let n2 = l2.value[i2.value];
    l2.value.push(t2), l2.value = O$1(l2.value, o$3);
    let d2 = (e2 = l2.value.indexOf(n2)) != null ? e2 : i2.value;
    d2 !== -1 && (i2.value = d2);
  }, unregisterTab(t2) {
    let n2 = l2.value.indexOf(t2);
    n2 !== -1 && l2.value.splice(n2, 1);
  }, registerPanel(t2) {
    r2.value.includes(t2) || (r2.value.push(t2), r2.value = O$1(r2.value, o$3));
  }, unregisterPanel(t2) {
    let n2 = r2.value.indexOf(t2);
    n2 !== -1 && r2.value.splice(n2, 1);
  } };
  provide(U, u2);
  let T2 = ref({ tabs: [], panels: [] }), m2 = ref(false);
  onMounted(() => {
    m2.value = true;
  }), provide(G, computed(() => m2.value ? null : T2.value));
  let R2 = computed(() => a2.selectedIndex);
  return onMounted(() => {
    watch([R2], () => {
      var t2;
      return y2((t2 = a2.selectedIndex) != null ? t2 : a2.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!x2.value || P2.value == null || u2.tabs.value.length <= 0)
      return;
    let t2 = O$1(u2.tabs.value, o$3);
    t2.some((d2, e2) => o$3(u2.tabs.value[e2]) !== o$3(d2)) && u2.setSelectedIndex(t2.findIndex((d2) => o$3(d2) === o$3(u2.tabs.value[P2.value])));
  }), () => {
    let t2 = { selectedIndex: i2.value };
    return h$1(Fragment, [l2.value.length <= 0 && h$1(d$1, { onFocus: () => {
      for (let n2 of l2.value) {
        let d2 = o$3(n2);
        if ((d2 == null ? void 0 : d2.tabIndex) === 0)
          return d2.focus(), true;
      }
      return false;
    } }), A$4({ theirProps: { ...s3, ...T$1(a2, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: b2, attrs: s3, name: "TabGroup" })]);
  };
} }), me$1 = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: b2, slots: s3 }) {
  let o2 = C("TabList");
  return () => {
    let i2 = { selectedIndex: o2.selectedIndex.value }, l2 = { role: "tablist", "aria-orientation": o2.orientation.value };
    return A$4({ ourProps: l2, theirProps: a2, slot: i2, attrs: b2, slots: s3, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a2, { attrs: b2, slots: s3, expose: o2 }) {
  var d2;
  let i2 = (d2 = a2.id) != null ? d2 : `headlessui-tabs-tab-${I$1()}`, l2 = C("Tab"), r2 = ref(null);
  o2({ el: r2, $el: r2 }), onMounted(() => l2.registerTab(r2)), onUnmounted(() => l2.unregisterTab(r2));
  let x2 = inject(G), P$1 = computed(() => {
    if (x2.value) {
      let e2 = x2.value.tabs.indexOf(i2);
      return e2 === -1 ? x2.value.tabs.push(i2) - 1 : e2;
    }
    return -1;
  }), y2 = computed(() => {
    let e2 = l2.tabs.value.indexOf(r2);
    return e2 === -1 ? P$1.value : e2;
  }), u2 = computed(() => y2.value === l2.selectedIndex.value);
  function T2(e2) {
    var I2;
    let c2 = e2();
    if (c2 === T$2.Success && l2.activation.value === "auto") {
      let p2 = (I2 = i$4(r2)) == null ? void 0 : I2.activeElement, D = l2.tabs.value.findIndex((O2) => o$3(O2) === p2);
      D !== -1 && l2.setSelectedIndex(D);
    }
    return c2;
  }
  function m2(e2) {
    let c2 = l2.tabs.value.map((p2) => o$3(p2)).filter(Boolean);
    if (e2.key === o$2.Space || e2.key === o$2.Enter) {
      e2.preventDefault(), e2.stopPropagation(), l2.setSelectedIndex(y2.value);
      return;
    }
    switch (e2.key) {
      case o$2.Home:
      case o$2.PageUp:
        return e2.preventDefault(), e2.stopPropagation(), T2(() => P(c2, N$5.First));
      case o$2.End:
      case o$2.PageDown:
        return e2.preventDefault(), e2.stopPropagation(), T2(() => P(c2, N$5.Last));
    }
    if (T2(() => u$6(l2.orientation.value, { vertical() {
      return e2.key === o$2.ArrowUp ? P(c2, N$5.Previous | N$5.WrapAround) : e2.key === o$2.ArrowDown ? P(c2, N$5.Next | N$5.WrapAround) : T$2.Error;
    }, horizontal() {
      return e2.key === o$2.ArrowLeft ? P(c2, N$5.Previous | N$5.WrapAround) : e2.key === o$2.ArrowRight ? P(c2, N$5.Next | N$5.WrapAround) : T$2.Error;
    } })) === T$2.Success)
      return e2.preventDefault();
  }
  let R2 = ref(false);
  function w2() {
    var e2;
    R2.value || (R2.value = true, !a2.disabled && ((e2 = o$3(r2)) == null || e2.focus({ preventScroll: true }), l2.setSelectedIndex(y2.value), t$1(() => {
      R2.value = false;
    })));
  }
  function t2(e2) {
    e2.preventDefault();
  }
  let n2 = s$4(computed(() => ({ as: a2.as, type: b2.type })), r2);
  return () => {
    var p2;
    let e2 = { selected: u2.value }, { ...c2 } = a2, I2 = { ref: r2, onKeydown: m2, onMousedown: t2, onClick: w2, id: i2, role: "tab", type: n2.value, "aria-controls": (p2 = o$3(l2.panels.value[y2.value])) == null ? void 0 : p2.id, "aria-selected": u2.value, tabIndex: u2.value ? 0 : -1, disabled: a2.disabled ? true : void 0 };
    return A$4({ ourProps: I2, theirProps: c2, slot: e2, attrs: b2, slots: s3, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { slots: b2, attrs: s3 }) {
  let o2 = C("TabPanels");
  return () => {
    let i2 = { selectedIndex: o2.selectedIndex.value };
    return A$4({ theirProps: a2, ourProps: {}, slot: i2, attrs: s3, slots: b2, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a2, { attrs: b2, slots: s3, expose: o2 }) {
  var T2;
  let i2 = (T2 = a2.id) != null ? T2 : `headlessui-tabs-panel-${I$1()}`, l2 = C("TabPanel"), r2 = ref(null);
  o2({ el: r2, $el: r2 }), onMounted(() => l2.registerPanel(r2)), onUnmounted(() => l2.unregisterPanel(r2));
  let x2 = inject(G), P2 = computed(() => {
    if (x2.value) {
      let m2 = x2.value.panels.indexOf(i2);
      return m2 === -1 ? x2.value.panels.push(i2) - 1 : m2;
    }
    return -1;
  }), y2 = computed(() => {
    let m2 = l2.panels.value.indexOf(r2);
    return m2 === -1 ? P2.value : m2;
  }), u2 = computed(() => y2.value === l2.selectedIndex.value);
  return () => {
    var n2;
    let m2 = { selected: u2.value }, { tabIndex: R2, ...w2 } = a2, t2 = { ref: r2, id: i2, role: "tabpanel", "aria-labelledby": (n2 = o$3(l2.tabs.value[y2.value])) == null ? void 0 : n2.id, tabIndex: u2.value ? R2 : -1 };
    return !u2.value && a2.unmount && !a2.static ? h$1(f$1, { as: "span", "aria-hidden": true, ...t2 }) : A$4({ ourProps: t2, theirProps: w2, slot: m2, attrs: b2, slots: s3, features: N$4.Static | N$4.RenderStrategy, visible: u2.value, name: "TabPanel" });
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$1();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$1(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$6(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$4.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = I$1(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$6(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z2 = g(e2.leaveFrom), ee2 = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$3(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te2(o2) {
    let E2 = I2.value && !A2.value, p2 = o$3(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M, X, _2, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z2, ee2, _2, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te2(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$3(computed(() => u$6(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye2, leave: be2, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$3.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M]) } : {} };
    return A$4({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$4({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
function getWindow(node) {
  if (node == null) {
    return void 0;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || void 0 : void 0;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = (void 0).userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return (void 0).userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : void 0, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || (void 0).document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$2(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$2,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = void 0;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$1,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrowModifier = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
popperGenerator({
  defaultModifiers: [...defaultModifiers, offset$1, flip$1, preventOverflow$1, computeStyles$1, eventListeners, arrowModifier]
});
function usePopper({
  locked = false,
  overflowPadding = 8,
  offsetDistance = 8,
  offsetSkid = 0,
  gpuAcceleration = true,
  adaptive = true,
  scroll = true,
  resize = true,
  arrow: arrow2 = false,
  placement,
  strategy
}, virtualReference) {
  const reference2 = ref(null);
  const popper2 = ref(null);
  const instance = ref(null);
  return [reference2, popper2, instance];
}
const config$8 = mergeConfig(appConfig.ui.strategy, appConfig.ui.dropdown, dropdown);
const _sfc_main$p = defineComponent({
  components: {
    HMenu: ge$1,
    HMenuButton: Se$1,
    HMenuItems: be,
    HMenuItem: Me,
    UIcon: __nuxt_component_0$6,
    UAvatar: __nuxt_component_2$4,
    UKbd: __nuxt_component_3$2
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    open: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: () => config$8.default.openDelay
    },
    closeDelay: {
      type: Number,
      default: () => config$8.default.closeDelay
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:open"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("dropdown", toRef(props, "ui"), config$8, toRef(props, "class"));
    const popper2 = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper2.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b, _c;
      if (props.mode !== "hover") {
        return {};
      }
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      const placement = (_c = popper2.value.placement) == null ? void 0 : _c.split("-")[0];
      const padding = `${offsetDistance}px`;
      if (placement === "top" || placement === "bottom") {
        return {
          paddingTop: padding,
          paddingBottom: padding
        };
      } else if (placement === "left" || placement === "right") {
        return {
          paddingLeft: padding,
          paddingRight: padding
        };
      } else {
        return {
          paddingTop: padding,
          paddingBottom: padding,
          paddingLeft: padding,
          paddingRight: padding
        };
      }
    });
    function onTouchStart(event) {
      if (!event.cancelable || !menuApi.value) {
        return;
      }
      if (menuApi.value.menuState === 0) {
        menuApi.value.closeMenu();
      } else {
        menuApi.value.openMenu();
      }
    }
    function onMouseEnter() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        menuApi.value.openMenu && menuApi.value.openMenu();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        menuApi.value.closeMenu && menuApi.value.closeMenu();
        closeTimeout = null;
      }, props.closeDelay);
    }
    function onClick(e2, item, { href, navigate, close, isExternal }) {
      if (item.click) {
        item.click(e2);
      }
      if (href && !isExternal) {
        navigate(e2);
        close();
      }
    }
    watch(() => props.open, (newValue, oldValue) => {
      if (!menuApi.value)
        return;
      if (oldValue === void 0 || newValue === oldValue)
        return;
      if (newValue) {
        menuApi.value.openMenu();
      } else {
        menuApi.value.closeMenu();
      }
    });
    watch(() => {
      var _a;
      return (_a = menuApi.value) == null ? void 0 : _a.menuState;
    }, (newValue, oldValue) => {
      if (oldValue === void 0 || newValue === oldValue)
        return;
      emit("update:open", newValue === 0);
    });
    const NuxtLink = __nuxt_component_0$7;
    l$3(() => useId("$ctlRmIk4j0"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      popper: popper2,
      trigger,
      container,
      containerStyle,
      onTouchStart,
      onMouseEnter,
      onMouseLeave,
      onClick,
      getNuxtLinkProps,
      twMerge,
      twJoin,
      NuxtLink
    };
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HMenu = resolveComponent("HMenu");
  const _component_HMenuButton = resolveComponent("HMenuButton");
  const _component_HMenuItems = resolveComponent("HMenuItems");
  const _component_NuxtLink = __nuxt_component_0$7;
  const _component_HMenuItem = resolveComponent("HMenuItem");
  const _component_UIcon = __nuxt_component_0$6;
  const _component_UAvatar = __nuxt_component_2$4;
  const _component_UKbd = __nuxt_component_3$2;
  _push(ssrRenderComponent(_component_HMenu, mergeProps({
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HMenuButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: _ctx.ui.trigger,
          role: "button",
          onMouseenter: _ctx.onMouseEnter,
          onTouchstart: _ctx.onTouchStart
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open && _ctx.items.length) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}><template><div${_scopeId}>`);
          if (_ctx.popper.arrow) {
            _push2(`<div data-popper-arrow class="${ssrRenderClass(Object.values(_ctx.ui.arrow))}"${_scopeId}></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_HMenuItems, {
            class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (subItems, index) => {
                  _push3(`<div class="${ssrRenderClass(_ctx.ui.padding)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(subItems, (item, subIndex) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                      default: withCtx(({ href, target, rel, navigate, isExternal, isActive }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_HMenuItem, {
                            disabled: item.disabled
                          }, {
                            default: withCtx(({ active, disabled: itemDisabled, close }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      ssrRenderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        if (item.icon) {
                                          _push6(ssrRenderComponent(_component_UIcon, {
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, _parent6, _scopeId5));
                                        } else if (item.avatar) {
                                          _push6(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.item.label, item.labelClass))}"${_scopeId5}>${ssrInterpolate(item.label)}</span>`);
                                        if ((_a = item.shortcuts) == null ? void 0 : _a.length) {
                                          _push6(`<span class="${ssrRenderClass(_ctx.ui.item.shortcuts)}"${_scopeId5}><!--[-->`);
                                          ssrRenderList(item.shortcuts, (shortcut) => {
                                            _push6(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                                              default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(`${ssrInterpolate(shortcut)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]--></span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      }, _push6, _parent6, _scopeId5);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                    href: !itemDisabled ? href : void 0,
                                    rel,
                                    target,
                                    class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                    onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                        var _a;
                                        return [
                                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                            key: 0,
                                            name: item.icon,
                                            class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                          }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                            class: _ctx.ui.item.avatar.base
                                          }), null, 16, ["class"])) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                          }, toDisplayString(item.label), 3),
                                          ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: _ctx.ui.item.shortcuts
                                          }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                              return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(shortcut), 1)
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ], 2)) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: _ctx.ui.padding
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                        return openBlock(), createBlock(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                          default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                            createVNode(_component_HMenuItem, {
                              disabled: item.disabled
                            }, {
                              default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                  href: !itemDisabled ? href : void 0,
                                  rel,
                                  target,
                                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                  onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                      var _a;
                                      return [
                                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                        }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                          class: _ctx.ui.item.avatar.base
                                        }), null, 16, ["class"])) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                        }, toDisplayString(item.label), 3),
                                        ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: _ctx.ui.item.shortcuts
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                            return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(shortcut), 1)
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ], 2)) : createCommentVNode("", true)
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["href", "rel", "target", "class", "onClick"]))
                              ]),
                              _: 2
                            }, 1032, ["disabled"])
                          ]),
                          _: 2
                        }, 1040);
                      }), 128))
                    ], 2);
                  }), 128))
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></template></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HMenuButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: _ctx.ui.trigger,
            role: "button",
            onMouseenter: _ctx.onMouseEnter,
            onTouchstartPassive: _ctx.onTouchStart
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "class", "onMouseenter", "onTouchstartPassive"]),
          open && _ctx.items.length ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseenter: _ctx.onMouseEnter
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode("div", null, [
                  _ctx.popper.arrow ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-popper-arrow": "",
                    class: Object.values(_ctx.ui.arrow)
                  }, null, 2)) : createCommentVNode("", true),
                  createVNode(_component_HMenuItems, {
                    class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: _ctx.ui.padding
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                            return openBlock(), createBlock(_component_NuxtLink, mergeProps({ key: subIndex }, _ctx.getNuxtLinkProps(item), { custom: "" }), {
                              default: withCtx(({ href, target, rel, navigate, isExternal, isActive }) => [
                                createVNode(_component_HMenuItem, {
                                  disabled: item.disabled
                                }, {
                                  default: withCtx(({ active, disabled: itemDisabled, close }) => [
                                    (openBlock(), createBlock(resolveDynamicComponent(!!href ? "a" : "button"), {
                                      href: !itemDisabled ? href : void 0,
                                      rel,
                                      target,
                                      class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active || isActive ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled), item.class),
                                      onClick: ($event) => _ctx.onClick($event, item, { href, navigate, close, isExternal })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                          var _a;
                                          return [
                                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                              key: 0,
                                              name: item.icon,
                                              class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.item.icon.base, active || isActive ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive), item.iconClass)
                                            }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                              class: _ctx.ui.item.avatar.base
                                            }), null, 16, ["class"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: _ctx.twMerge(_ctx.ui.item.label, item.labelClass)
                                            }, toDisplayString(item.label), 3),
                                            ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: _ctx.ui.item.shortcuts
                                            }, [
                                              (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                                return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(shortcut), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ], 2)) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["href", "rel", "target", "class", "onClick"]))
                                  ]),
                                  _: 2
                                }, 1032, ["disabled"])
                              ]),
                              _: 2
                            }, 1040);
                          }), 128))
                        ], 2);
                      }), 128))
                    ]),
                    _: 3
                  }, 8, ["class"])
                ])
              ]),
              _: 3
            }, 16)
          ], 46, ["onMouseenter"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Dropdown.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$9]]);
const config$7 = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$o = defineComponent({
  components: {
    UButton: __nuxt_component_3$3
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config$7.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    activeButton: {
      type: Object,
      default: () => config$7.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config$7.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config$7.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config$7.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config$7.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config$7.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config$7, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_2, i2) => i2 + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r2 = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r2;
      const r22 = current + r2;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r22 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i2 = 1; i2 <= totalPages; i2++) {
          items.push(i2);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped)
        items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r2 + 2 - totalPages;
        for (let i2 = current - r2 - addedItems; i2 <= current - r2 - 1; i2++) {
          items.push(i2);
        }
      }
      for (let i2 = Math.max(2, r1); i2 <= Math.min(totalPages, r22); i2++) {
        items.push(i2);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r2 - 2);
        for (let i2 = current + r2 + 1; i2 <= current + r2 + addedItems; i2++) {
          items.push(i2);
        }
      }
      if (afterWrapped)
        items.push(props.divider);
      if (r22 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_3$3;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", { onClick: _ctx.onClickFirst }, () => {
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", { onClick: _ctx.onClickLast }, () => {
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$8]]);
const config$6 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$n = defineComponent({
  components: {
    HDialog: We,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$6, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition,
        enterFrom: props.side === "left" ? ui.value.translate.left : ui.value.translate.right,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo: props.side === "left" ? ui.value.translate.left : ui.value.translate.right
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    l$3(() => useId("$zSEivjycv8"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen,
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$7]]);
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$m = defineComponent({
  props: {
    schema: {
      type: Object,
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId("$Z55GngiEgp");
    const bus = useEventBus(`form-${formId}`);
    onUnmounted(() => {
      bus.reset();
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent)
          return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        const submitEvent = {
          ...event,
          data: props.state
        };
        emit("submit", submitEvent);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        errors.value = errs;
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return schema._parse !== void 0;
}
async function getValibotError(state, schema) {
  const result = await schema._parse(state);
  if (result.issues) {
    return result.issues.map((issue) => {
      var _a;
      return {
        path: ((_a = issue.path) == null ? void 0 : _a.map((p2) => p2.key).join(".")) || "",
        message: issue.message
      };
    });
  }
  return [];
}
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$6]]);
const config$5 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$l = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$5.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$5, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config$5.default.size];
    });
    const inputId = ref(useId("$K7dDJpdOWE"));
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error || _ctx.$slots.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$5]]);
const config$4 = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$k = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$4.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$4.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$4.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$4.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$4.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$4.variant),
          ...Object.values(config$4.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config$4, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config$4);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && [ui.value.file.base, ui.value.file.padding[size.value]],
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$6;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "FormImageCreate",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ])
    });
    const file = ref();
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const state = reactive({
      name: ""
    });
    async function onSubmit(event) {
      try {
        const formData = new FormData();
        formData.append("file", file.value);
        loading.value = true;
        await $fetch(`/api/images/${event.data.name}`, {
          method: "post",
          body: formData
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    function handleFileUpload(event) {
      if (event && event.target && event.target.files && event.target.files[0]) {
        file.value = event.target.files[0];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { label: "\u0424\u0430\u0439\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input type="file"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", {
                      type: "file",
                      onChange: handleFileUpload
                    }, null, 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, { label: "\u0424\u0430\u0439\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F" }, {
                default: withCtx(() => [
                  createVNode("input", {
                    type: "file",
                    onChange: handleFileUpload
                  }, null, 32)
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormImageCreate.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$i = defineComponent({
  components: {
    HDialog: We,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$3, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    l$3(() => useId("$HAJMhYDoe7"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$3]]);
const pageCount$4 = 10;
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminAlbum",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "name",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u043E\u0442\u043E"
      },
      {
        key: "actions",
        label: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
      }
    ];
    const { data: images, refresh } = useFetch("/api/images/", "$VDj56SOyJF");
    const page = ref(1);
    const toast = useToast();
    const isOpen = ref(false);
    const isModal = ref(false);
    const imageToSee = ref();
    const rows = computed(() => {
      return images.value.slice(
        (page.value - 1) * pageCount$4,
        page.value * pageCount$4
      );
    });
    function items(row) {
      return [
        [
          {
            label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            icon: "i-heroicons-trash-20-solid",
            click: () => deleteOne(row.name)
          }
        ],
        [
          {
            label: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
            icon: "i-heroicons-arrows-pointing-out",
            click: () => seeImage(row.name)
          }
        ]
      ];
    }
    async function deleteOne(id) {
      try {
        await $fetch(`/api/images/${id}`, { method: "DELETE" });
        toast.add({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E" });
        await refresh();
      } catch (e2) {
        toast.add({ title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430", color: "red" });
      }
    }
    async function created() {
      isOpen.value = false;
      await refresh();
    }
    function seeImage(name) {
      var _a;
      const img = (_a = images.value) == null ? void 0 : _a.find((image) => image.name === name);
      if (img) {
        isModal.value = true;
        imageToSee.value = img;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UTable = __nuxt_component_1$3;
      const _component_UDropdown = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_3$3;
      const _component_UPagination = __nuxt_component_4$2;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_FormImageCreate = _sfc_main$j;
      const _component_UModal = __nuxt_component_7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "admin-actions",
        class: "admin-actions"
      }, _attrs))} data-v-5959bd40><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-5959bd40>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u0424\u041E\u0422\u041E\u0410\u041B\u042C\u0411\u041E\u041C" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        rows: unref(rows),
        columns,
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "No items."
        }
      }, {
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items(row)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table__tools" data-v-5959bd40>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        "page-count": pageCount$4,
        total: unref(images) && unref(images).length
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "socials__save",
        onClick: () => {
          isOpen.value = true;
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormImageCreate, {
              onDone: ($event) => created()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormImageCreate, {
                onDone: ($event) => created()
              }, null, 8, ["onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(isModal),
        "onUpdate:modelValue": ($event) => isRef(isModal) ? isModal.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="img-wrapper" data-v-5959bd40${_scopeId}><img${ssrRenderAttr("src", `/uploads/${(_a = unref(imageToSee)) == null ? void 0 : _a.name}`)} alt="asd" class="img-to-see" data-v-5959bd40${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "img-wrapper" }, [
                createVNode("img", {
                  src: `/uploads/${(_b = unref(imageToSee)) == null ? void 0 : _b.name}`,
                  alt: "asd",
                  class: "img-to-see"
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminAlbum.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-5959bd40"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminSocials",
  __ssrInlineRender: true,
  setup(__props) {
    const vk = ref("");
    const telegram = ref("");
    const email = ref("");
    const euro = ref("");
    const toast = useToast();
    async function saveVk() {
      try {
        const res = await $fetch("/api/socials/vk", {
          method: "patch",
          body: {
            value: vk.value
          }
        });
        toast.add({ title: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E" });
      } catch (e2) {
        console.error(e2);
        toast.add({
          title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
          color: "red",
          icon: "i-material-symbols-error"
        });
      }
    }
    async function saveTelegram() {
      try {
        await $fetch("/api/socials/telegram", {
          method: "patch",
          body: {
            value: telegram.value
          }
        });
        toast.add({ title: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E" });
      } catch (e2) {
        console.error(e2);
        toast.add({
          title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
          color: "red",
          icon: "i-material-symbols-error"
        });
      }
    }
    async function saveEmail() {
      try {
        await $fetch("/api/socials/email", {
          method: "patch",
          body: {
            value: email.value
          }
        });
        toast.add({ title: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E" });
      } catch (e2) {
        console.error(e2);
        toast.add({
          title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
          color: "red",
          icon: "i-material-symbols-error"
        });
      }
    }
    async function saveEuro() {
      try {
        await $fetch("/api/socials/euro", {
          method: "patch",
          body: {
            value: String(euro.value)
          }
        });
        toast.add({ title: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E" });
      } catch (e2) {
        console.error(e2);
        toast.add({
          title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430",
          color: "red",
          icon: "i-material-symbols-error"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "admin-socials",
        class: "admin-socials"
      }, _attrs))} data-v-0f84c456><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-0f84c456>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u0421\u041E\u0426. \u0421\u0415\u0422\u0418 \u0418 \u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0418" }, null, _parent));
      _push(`</div><div class="socials__socials" data-v-0f84c456><div class="vk socials__social" data-v-0f84c456>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(vk),
        "onUpdate:modelValue": ($event) => isRef(vk) ? vk.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        class: "socials__save",
        onClick: saveVk
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="telegram socials__social" data-v-0f84c456>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(telegram),
        "onUpdate:modelValue": ($event) => isRef(telegram) ? telegram.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        class: "socials__save",
        onClick: saveTelegram
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="email socials__social" data-v-0f84c456>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        class: "socials__save",
        onClick: saveEmail
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="euro socials__social" data-v-0f84c456>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(euro),
        "onUpdate:modelValue": ($event) => isRef(euro) ? euro.value = $event : null,
        type: "number"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        block: "",
        class: "socials__save",
        onClick: saveEuro
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminSocials.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-0f84c456"]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
const _sfc_main$f = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    maxrows: {
      type: Number,
      default: 0
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$2.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$2.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$2.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$2.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$2.variant),
          ...Object.values(config$2.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config$2, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config$2);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const textarea2 = ref(null);
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const styles = (void 0).getComputedStyle(textarea2.value);
        const paddingTop = parseInt(styles.paddingTop);
        const paddingBottom = parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
      }
    };
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number) {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      autoResize();
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      emit("change", value);
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const textareaClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: _ctx.textareaClass
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "FormActionCreate",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      title: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      description: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(555, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 555 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      priority: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      time: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      imageName: nullish$1(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      conditions: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(1e3, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 1000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ])
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const state = reactive({
      name: "",
      title: "",
      description: "",
      imageName: "",
      priority: 0,
      time: "",
      conditions: ""
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch("/api/action/", {
          method: "post",
          body: {
            ...event.data,
            conditions: event.data.conditions.split("/")
          }
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u0410\u043A\u0446\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0430"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u0438</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "title"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).title,
                    "onUpdate:modelValue": ($event) => unref(state).title = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).title,
                      "onUpdate:modelValue": ($event) => unref(state).title = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              name: "description"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).description,
                      "onUpdate:modelValue": ($event) => unref(state).description = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
              name: "priority"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).priority,
                      "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
              name: "time"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).time,
                    "onUpdate:modelValue": ($event) => unref(state).time = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).time,
                      "onUpdate:modelValue": ($event) => unref(state).time = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
              name: "conditions"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).conditions,
                    "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                    autoresize: "",
                    placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).conditions,
                      "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                      autoresize: "",
                      placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                name: "title"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).title,
                    "onUpdate:modelValue": ($event) => unref(state).title = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                name: "description"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
                name: "priority"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
                name: "time"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).time,
                    "onUpdate:modelValue": ($event) => unref(state).time = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
                name: "conditions"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).conditions,
                    "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                    autoresize: "",
                    placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormActionCreate.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FormActionUpdate",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["done"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      title: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      imageName: nullish$1(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      description: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(555, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 555 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      priority: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      time: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      conditions: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(1e3, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 1000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ])
    });
    const props = __props;
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const { data: action } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/action/${props.id}`, "$BEceiClJ3C")), __temp = await __temp, __restore(), __temp);
    console.log(action.value);
    const state = reactive({
      name: action.value.name,
      title: action.value.title,
      description: action.value.description,
      imageName: action.value.imageName,
      priority: action.value.priority,
      time: action.value.time,
      conditions: action.value.conditions.map((condition) => condition.text).join("/")
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch(`/api/action/${props.id}`, {
          method: "PATCH",
          body: {
            ...event.data,
            conditions: event.data.conditions.split("/")
          }
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u0410\u043A\u0446\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0430"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u0438</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "title"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).title,
                    "onUpdate:modelValue": ($event) => unref(state).title = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).title,
                      "onUpdate:modelValue": ($event) => unref(state).title = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              name: "description"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).description,
                      "onUpdate:modelValue": ($event) => unref(state).description = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
              name: "priority"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).priority,
                      "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
              name: "time"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).time,
                    "onUpdate:modelValue": ($event) => unref(state).time = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).time,
                      "onUpdate:modelValue": ($event) => unref(state).time = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
              name: "conditions"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).conditions,
                    "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                    autoresize: "",
                    placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).conditions,
                      "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                      autoresize: "",
                      placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                name: "title"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).title,
                    "onUpdate:modelValue": ($event) => unref(state).title = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                name: "description"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
                name: "priority"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
                name: "time"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).time,
                    "onUpdate:modelValue": ($event) => unref(state).time = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F \u0430\u043A\u0446\u0438\u044F",
                name: "conditions"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).conditions,
                    "onUpdate:modelValue": ($event) => unref(state).conditions = $event,
                    autoresize: "",
                    placeholder: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0447\u0435\u0440\u0435\u0437 \u0437\u043D\u0430\u043A '/'"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormActionUpdate.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const pageCount$3 = 10;
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminActions",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "name",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
      },
      {
        key: "title",
        label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
      },
      {
        key: "imageName",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0444\u043E\u0442\u043E"
      },
      {
        key: "priority",
        label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"
      },
      {
        key: "time",
        label: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0449\u0451 \u0434\u043B\u0438\u0442\u0441\u044F"
      },
      {
        key: "actions"
      }
    ];
    const { data: lastOrders, refresh } = useFetch("/api/action/", "$8pBzPXZ1NW");
    const page = ref(1);
    const toast = useToast();
    const chosenToChnage = ref(NaN);
    const isOpen = ref(false);
    const isOpenChange = ref(false);
    const rows = computed(() => {
      return lastOrders.value.slice(
        (page.value - 1) * pageCount$3,
        page.value * pageCount$3
      );
    });
    function items(row) {
      return [
        [
          {
            label: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
            icon: "i-heroicons-pencil-square-20-solid",
            click: () => change(row.id)
          },
          {
            label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            icon: "i-heroicons-trash-20-solid",
            click: () => deleteOne(row.id)
          }
        ]
      ];
    }
    async function deleteOne(id) {
      try {
        await $fetch(`/api/action/${id}`, { method: "DELETE" });
        toast.add({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E" });
        await refresh();
      } catch (e2) {
        toast.add({ title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430", color: "red" });
      }
    }
    async function change(id) {
      isOpenChange.value = true;
      chosenToChnage.value = id;
    }
    async function created() {
      isOpen.value = false;
      await refresh();
    }
    async function changed() {
      isOpenChange.value = false;
      await refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UTable = __nuxt_component_1$3;
      const _component_UDropdown = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_3$3;
      const _component_UPagination = __nuxt_component_4$2;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_FormActionCreate = _sfc_main$e;
      const _component_FormActionUpdate = _sfc_main$d;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "admin-actions",
        class: "admin-actions"
      }, _attrs))} data-v-5a0d93b4><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-5a0d93b4>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u0410\u041A\u0426\u0418\u0418" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        rows: unref(rows),
        columns,
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "No items."
        }
      }, {
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items(row)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table__tools" data-v-5a0d93b4>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        "page-count": pageCount$3,
        total: unref(lastOrders) && unref(lastOrders).length
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "socials__save",
        onClick: () => {
          isOpen.value = true;
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormActionCreate, {
              onDone: ($event) => created()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormActionCreate, {
                onDone: ($event) => created()
              }, null, 8, ["onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpenChange),
        "onUpdate:modelValue": ($event) => isRef(isOpenChange) ? isOpenChange.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormActionUpdate, {
              id: unref(chosenToChnage),
              onDone: ($event) => changed()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormActionUpdate, {
                id: unref(chosenToChnage),
                onDone: ($event) => changed()
              }, null, 8, ["id", "onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminActions.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-5a0d93b4"]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tabs, tabs);
const _sfc_main$b = defineComponent({
  components: {
    HTabGroup: pe$1,
    HTabList: me$1,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    unmount: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("tabs", toRef(props, "ui"), config$1, toRef(props, "class"));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      if (!markerRef.value) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", selectedIndex.value);
      }
      calcMarkerSize(selectedIndex.value);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(selectedIndex.value);
    });
    l$3(() => useId("$39Q85lIXra"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      onChange
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                          ])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HTabPanels, {
          class: _ctx.ui.container
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  unmount: _ctx.unmount
                }, {
                  default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => {
                        _push4(`${ssrInterpolate(item.content)}`);
                      }, _push4, _parent4, _scopeId3);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base,
                    unmount: _ctx.unmount
                  }, {
                    default: withCtx(({ selected }) => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "unmount"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                      ])
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          createVNode(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  unmount: _ctx.unmount
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "unmount"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.select, select);
const _sfc_main$a = defineComponent({
  components: {
    UIcon: __nuxt_component_0$6
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: () => config.default.trailingIcon
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    selectClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("select", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormChange, inputId, color, size: sizeFormGroup, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const onChange = (event) => {
      emit("change", event.target.value);
      emitFormChange();
    };
    const guessOptionValue = (option) => {
      return get(option, props.valueAttribute, get(option, props.optionAttribute));
    };
    const guessOptionText = (option) => {
      return get(option, props.optionAttribute, get(option, props.valueAttribute));
    };
    const normalizeOption = (option) => {
      if (["string", "number", "boolean"].includes(typeof option)) {
        return {
          [props.valueAttribute]: option,
          [props.optionAttribute]: option
        };
      }
      return {
        ...option,
        [props.valueAttribute]: guessOptionValue(option),
        [props.optionAttribute]: guessOptionText(option)
      };
    };
    const normalizedOptions = computed(() => {
      return props.options.map((option) => normalizeOption(option));
    });
    const normalizedOptionsWithPlaceholder = computed(() => {
      if (!props.placeholder) {
        return normalizedOptions.value;
      }
      return [
        {
          [props.valueAttribute]: "",
          [props.optionAttribute]: props.placeholder,
          disabled: true
        },
        ...normalizedOptions.value
      ];
    });
    const normalizedValue = computed(() => {
      const normalizeModelValue = normalizeOption(props.modelValue);
      const foundOption = normalizedOptionsWithPlaceholder.value.find((option) => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute]);
      if (!foundOption) {
        return "";
      }
      return foundOption[props.valueAttribute];
    });
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.placeholder && !props.modelValue && ui.value.placeholder, props.selectClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      normalizedOptionsWithPlaceholder,
      normalizedValue,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$6;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))} data-v-931b50ef><select${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    name: _ctx.name,
    value: _ctx.modelValue,
    required: _ctx.required,
    disabled: _ctx.disabled,
    class: _ctx.selectClass
  }, _ctx.attrs))} data-v-931b50ef><!--[-->`);
  ssrRenderList(_ctx.normalizedOptionsWithPlaceholder, (option, index) => {
    _push(`<!--[-->`);
    if (option.children) {
      _push(`<optgroup${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrRenderAttr("label", option[_ctx.optionAttribute])} data-v-931b50ef><!--[-->`);
      ssrRenderList(option.children, (childOption, index2) => {
        _push(`<option${ssrRenderAttr("value", childOption[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(childOption[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(childOption.disabled) ? " disabled" : ""} data-v-931b50ef>${ssrInterpolate(childOption[_ctx.optionAttribute])}</option>`);
      });
      _push(`<!--]--></optgroup>`);
    } else {
      _push(`<option${ssrRenderAttr("value", option[_ctx.valueAttribute])}${ssrIncludeBooleanAttr(option[_ctx.valueAttribute] === _ctx.normalizedValue) ? " selected" : ""}${ssrIncludeBooleanAttr(option.disabled) ? " disabled" : ""} data-v-931b50ef>${ssrInterpolate(option[_ctx.optionAttribute])}</option>`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></select>`);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}" data-v-931b50ef>`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}" data-v-931b50ef>`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Select.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-931b50ef"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "FormProductCreate",
  __ssrInlineRender: true,
  emits: ["done"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      vkLink: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      sale: number([
        minValue(-999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      imageName: nullish$1(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      salePrice: number([
        minValue(-999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      price: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      groupId: string()
    });
    const { data: groups } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/group/", "$Jgzoay7jHl")), __temp = await __temp, __restore(), __temp);
    const selectData = computed(() => {
      var _a;
      return (_a = groups.value) == null ? void 0 : _a.map((group) => ({
        label: group.name,
        value: Number(group.id)
      }));
    });
    const firstSelect = computed(() => {
      return selectData.value && selectData.value[0].value;
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const state = reactive({
      name: "",
      imageName: "",
      vkLink: "",
      sale: 0,
      salePrice: 0,
      groupId: firstSelect.value || NaN,
      price: 0
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch("/api/product/", {
          method: "post",
          body: { ...event.data, groupId: Number(event.data.groupId) }
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u0422\u043E\u0432\u0430\u0440 \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_USelect = __nuxt_component_4$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
              name: "vkLink"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).vkLink,
                      "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u0438\u0434\u043A\u0430",
              name: "sale"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).sale,
                    "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).sale,
                      "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439",
              name: "salePrice"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).salePrice,
                    "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).salePrice,
                      "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430",
              name: "price"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).price,
                      "onUpdate:modelValue": ($event) => unref(state).price = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
              name: "groupId"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(state).groupId,
                    "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                    options: unref(selectData)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(state).groupId,
                      "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                      options: unref(selectData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
                name: "vkLink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u0438\u0434\u043A\u0430",
                name: "sale"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).sale,
                    "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439",
                name: "salePrice"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).salePrice,
                    "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430",
                name: "price"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
                name: "groupId"
              }, {
                default: withCtx(() => [
                  createVNode(_component_USelect, {
                    modelValue: unref(state).groupId,
                    "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                    options: unref(selectData)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormProductCreate.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FormProductUpdate",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["done"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      vkLink: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      imageName: nullish$1(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      sale: number([
        minValue(-999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      salePrice: number([
        minValue(-999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      price: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(999999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      groupId: string()
    });
    const props = __props;
    const { data: groups } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/group/", "$Wkwa4pZAvd")), __temp = await __temp, __restore(), __temp);
    const selectData = computed(() => {
      var _a;
      return (_a = groups.value) == null ? void 0 : _a.map((group) => ({
        label: group.name,
        value: Number(group.id)
      }));
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/product/${props.id}`, "$Mz1jas4orM")), __temp = await __temp, __restore(), __temp);
    const state = reactive({
      name: product.value.name,
      vkLink: product.value.vkLink,
      sale: product.value.sale,
      imageName: product.value.imageName,
      salePrice: product.value.salePrice,
      price: product.value.price,
      groupId: product.value.groupId
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch(`/api/product/${props.id}`, {
          method: "patch",
          body: { ...event.data, groupId: Number(event.data.groupId) }
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043A\u0430\u0437 \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_USelect = __nuxt_component_4$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0418\u0437\u043C\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
              name: "vkLink"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).vkLink,
                      "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u043A\u0438\u0434\u043A\u0430",
              name: "sale"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).sale,
                    "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).sale,
                      "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439",
              name: "salePrice"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).salePrice,
                    "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).salePrice,
                      "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430",
              name: "price"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).price,
                      "onUpdate:modelValue": ($event) => unref(state).price = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
              name: "groupId"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: unref(state).groupId,
                    "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                    options: unref(selectData)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: unref(state).groupId,
                      "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                      options: unref(selectData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
                name: "vkLink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u043A\u0438\u0434\u043A\u0430",
                name: "sale"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).sale,
                    "onUpdate:modelValue": ($event) => unref(state).sale = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439",
                name: "salePrice"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).salePrice,
                    "onUpdate:modelValue": ($event) => unref(state).salePrice = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430",
                name: "price"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
                name: "groupId"
              }, {
                default: withCtx(() => [
                  createVNode(_component_USelect, {
                    modelValue: unref(state).groupId,
                    "onUpdate:modelValue": ($event) => unref(state).groupId = $event,
                    options: unref(selectData)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormProductUpdate.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const pageCount$2 = 10;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminProducts",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data: groups } = useFetch("/api/group/", "$2aKC1M1SP6");
    const tabs2 = (_a = groups.value) == null ? void 0 : _a.map((group) => {
      return {
        key: group.id,
        label: group.name
      };
    });
    const columns = [
      {
        key: "name",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        sortable: true
      },
      {
        key: "price",
        label: "\u0426\u0435\u043D\u0430",
        sortable: true
      },
      {
        key: "sale",
        label: "\u0421\u043A\u0438\u0434\u043A\u0430",
        sortable: true
      },
      {
        key: "salePrice",
        label: "\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439",
        sortable: true
      },
      {
        key: "imageName",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"
      },
      {
        key: "actions",
        label: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
      }
    ];
    const products = ref(null);
    const loading = ref(true);
    if (groups.value && groups.value[0]) {
      [__temp, __restore] = withAsyncContext(() => getProducts(groups.value[0].id)), await __temp, __restore();
    }
    async function getProducts(groupId) {
      console.log(groupId);
      const data = await $fetch(`/api/product/group/${groupId}`);
      loading.value = false;
      products.value = data;
    }
    const page = ref(1);
    const toast = useToast();
    const chosenToChnage = ref(NaN);
    const isOpen = ref(false);
    const isOpenChange = ref(false);
    let tabIndex = 0;
    const rows = computed(() => {
      if (!products.value)
        return [];
      if (!products.value.length)
        return [];
      return products.value.slice(
        (page.value - 1) * pageCount$2,
        page.value * pageCount$2
      );
    });
    function items(row) {
      return [
        [
          {
            label: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
            icon: "i-heroicons-pencil-square-20-solid",
            click: () => change(row.id)
          },
          {
            label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            icon: "i-heroicons-trash-20-solid",
            click: () => deleteOne(row.id)
          }
        ]
      ];
    }
    async function onChange(index) {
      tabIndex = index;
      page.value = 1;
      await getProducts(tabs2[tabIndex].key);
    }
    async function deleteOne(id) {
      try {
        await $fetch(`/api/product/${id}`, { method: "DELETE" });
        toast.add({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E" });
        await getProducts(tabs2[tabIndex].key);
      } catch (e2) {
        toast.add({ title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430", color: "red" });
      }
    }
    async function change(id) {
      isOpenChange.value = true;
      chosenToChnage.value = id;
    }
    async function created() {
      isOpen.value = false;
      await getProducts(tabs2[tabIndex].key);
    }
    async function changed() {
      isOpenChange.value = false;
      await getProducts(tabs2[tabIndex].key);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UTabs = __nuxt_component_1;
      const _component_UTable = __nuxt_component_1$3;
      const _component_UDropdown = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_3$3;
      const _component_UPagination = __nuxt_component_4$2;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_FormProductCreate = _sfc_main$9;
      const _component_FormProductUpdate = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "admin-products",
        class: "admin-products"
      }, _attrs))} data-v-d46f1b08><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-d46f1b08>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u0422\u043E\u0432\u0430\u0440\u044B" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTabs, {
        items: unref(tabs2),
        class: "w-full",
        onChange
      }, null, _parent));
      _push(ssrRenderComponent(_component_UTable, {
        rows: unref(rows),
        loading: unref(loading),
        columns,
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "No items."
        }
      }, {
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items(row)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table__tools" data-v-d46f1b08>`);
      if (!unref(loading)) {
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          "page-count": pageCount$2,
          total: unref(products) ? unref(products).length : 0
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UButton, {
        class: "socials__save",
        onClick: () => {
          isOpen.value = true;
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormProductCreate, {
              onDone: ($event) => created()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormProductCreate, {
                onDone: ($event) => created()
              }, null, 8, ["onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpenChange),
        "onUpdate:modelValue": ($event) => isRef(isOpenChange) ? isOpenChange.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormProductUpdate, {
              id: unref(chosenToChnage),
              onDone: ($event) => changed()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormProductUpdate, {
                id: unref(chosenToChnage),
                onDone: ($event) => changed()
              }, null, 8, ["id", "onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminProducts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d46f1b08"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FormLastOrderCreate",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      vkLink: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      imageName: nullish(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      priority: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      price: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ])
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const state = reactive({
      name: "",
      vkLink: "",
      imageName: "",
      priority: 0,
      price: 0
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch("/api/last-orders/", {
          method: "post",
          body: event.data
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043A\u0430\u0437 \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
              name: "vkLink"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).vkLink,
                      "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
              name: "priority"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).priority,
                      "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430",
              name: "price"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).price,
                      "onUpdate:modelValue": ($event) => unref(state).price = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
                name: "vkLink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
                name: "priority"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430",
                name: "price"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormLastOrderCreate.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FormLastOrderUpdate",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["done"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      vkLink: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ]),
      imageName: nullish$1(
        string([
          minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
          maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
        ])
      ),
      priority: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ]),
      price: number([
        minValue(-99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E"),
        maxValue(99999999, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E")
      ])
    });
    const props = __props;
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const { data: lastOrder } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/last-orders/${props.id}`, "$UVBBkyGdun")), __temp = await __temp, __restore(), __temp);
    const state = reactive({
      name: lastOrder.value.name,
      vkLink: lastOrder.value.vkLink,
      imageName: lastOrder.value.imageName,
      priority: lastOrder.value.priority,
      price: lastOrder.value.price
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch(`/api/last-orders/${props.id}`, {
          method: "patch",
          body: event.data
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043A\u0430\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_3$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
              name: "imageName"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).imageName,
                      "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
              name: "vkLink"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: unref(state).vkLink,
                      "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
              name: "priority"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).priority,
                      "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u0426\u0435\u043D\u0430",
              name: "price"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).price,
                      "onUpdate:modelValue": ($event) => unref(state).price = $event,
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                name: "imageName"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).imageName,
                    "onUpdate:modelValue": ($event) => unref(state).imageName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440",
                name: "vkLink"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    modelValue: unref(state).vkLink,
                    "onUpdate:modelValue": ($event) => unref(state).vkLink = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442",
                name: "priority"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).priority,
                    "onUpdate:modelValue": ($event) => unref(state).priority = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "\u0426\u0435\u043D\u0430",
                name: "price"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).price,
                    "onUpdate:modelValue": ($event) => unref(state).price = $event,
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormLastOrderUpdate.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const pageCount$1 = 10;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminLastOrders",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "name",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        sortable: true
      },
      {
        key: "imageName",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        sortable: true
      },
      {
        key: "vkLink",
        label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440 \u0432 VK",
        sortable: true
      },
      {
        key: "price",
        label: "\u0426\u0435\u043D\u0430",
        sortable: true
      },
      {
        key: "actions",
        label: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
      }
    ];
    const { data: lastOrders, refresh } = useFetch("/api/last-orders/", "$69QO1mDr0p");
    const page = ref(1);
    const toast = useToast();
    const chosenToChnage = ref(NaN);
    const isOpen = ref(false);
    const isOpenChange = ref(false);
    const rows = computed(() => {
      return lastOrders.value.slice(
        (page.value - 1) * pageCount$1,
        page.value * pageCount$1
      );
    });
    function items(row) {
      return [
        [
          {
            label: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
            icon: "i-heroicons-pencil-square-20-solid",
            click: () => change(row.id)
          },
          {
            label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            icon: "i-heroicons-trash-20-solid",
            click: () => deleteOne(row.id)
          }
        ]
      ];
    }
    async function deleteOne(id) {
      try {
        await $fetch(`/api/action/${id}`, { method: "DELETE" });
        toast.add({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E" });
        await refresh();
      } catch (e2) {
        toast.add({ title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430", color: "red" });
      }
    }
    async function change(id) {
      isOpenChange.value = true;
      chosenToChnage.value = id;
    }
    async function created() {
      isOpen.value = false;
      await refresh();
    }
    async function changed() {
      isOpenChange.value = false;
      await refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UTable = __nuxt_component_1$3;
      const _component_UDropdown = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_3$3;
      const _component_UPagination = __nuxt_component_4$2;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_FormLastOrderCreate = _sfc_main$6;
      const _component_FormLastOrderUpdate = _sfc_main$5;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "admin-last-orders",
        class: "admin-last-orders"
      }, _attrs))} data-v-2119d66a><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-2119d66a>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u041F\u041E\u0421\u041B\u0415\u0414\u041D\u0418\u0418 \u0417\u0410\u041A\u0410\u0417\u042B" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        rows: unref(rows),
        columns,
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "No items."
        }
      }, {
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items(row)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table__tools" data-v-2119d66a>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        "page-count": pageCount$1,
        total: unref(lastOrders) && unref(lastOrders).length
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "socials__save",
        onClick: () => {
          isOpen.value = true;
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormLastOrderCreate, {
              onDone: ($event) => created()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormLastOrderCreate, {
                onDone: ($event) => created()
              }, null, 8, ["onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpenChange),
        "onUpdate:modelValue": ($event) => isRef(isOpenChange) ? isOpenChange.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormLastOrderUpdate, {
              id: unref(chosenToChnage),
              onDone: ($event) => changed()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormLastOrderUpdate, {
                id: unref(chosenToChnage),
                onDone: ($event) => changed()
              }, null, 8, ["id", "onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminLastOrders.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2119d66a"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormGroupCreate",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ])
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const state = reactive({
      name: ""
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch("/api/group/", {
          method: "post",
          body: event.data
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0430"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormGroupCreate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormGroupUpdate",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["done"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const schema = objectAsync({
      name: string([
        minLength(3, "\u0414\u043B\u0438\u043D\u0430 \u0445\u043E\u0442\u044F \u0431\u044B 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"),
        maxLength(255, "\u0414\u043B\u0438\u043D\u0430 \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 255 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")
      ])
    });
    const toast = useToast();
    const loading = ref(false);
    const emit = __emit;
    const props = __props;
    const { data: group } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/group/${props.id}`, "$fpiD46bUrx")), __temp = await __temp, __restore(), __temp);
    const state = reactive({
      name: group.value.name
    });
    async function onSubmit(event) {
      try {
        loading.value = true;
        await $fetch(`/api/group/${props.id}`, {
          method: "patch",
          body: event.data
        });
        loading.value = false;
        emit("done");
        toast.add({
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430"
        });
      } catch (e2) {
        toast.add({
          title: "\u0427\u0442\u043E \u0442\u043E \u0441\u043B\u043E\u043C\u0430\u043B\u043E\u0441\u044C",
          color: "red"
        });
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_0;
      const _component_UFormGroup = __nuxt_component_1$2;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-action-create" }, _attrs))}><h3 class="h3 form-action-create__title">\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</h3>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
              name: "name"
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: unref(loading),
              type: "submit",
              block: ""
            }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                } else {
                  return [
                    createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: unref(loading),
                type: "submit",
                block: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/FormGroupUpdate.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const pageCount = 10;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionAdminGroups",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = [
      {
        key: "name",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
        sortable: true
      },
      {
        key: "actions",
        label: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
      }
    ];
    const { data: lastOrders, refresh } = useFetch("/api/group/", "$tgwj0JxoI5");
    const page = ref(1);
    const toast = useToast();
    const chosenToChnage = ref(NaN);
    const isOpen = ref(false);
    const isOpenChange = ref(false);
    const rows = computed(() => {
      return lastOrders.value.slice(
        (page.value - 1) * pageCount,
        page.value * pageCount
      );
    });
    function items(row) {
      return [
        [
          {
            label: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
            icon: "i-heroicons-pencil-square-20-solid",
            click: () => change(row.id)
          },
          {
            label: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            icon: "i-heroicons-trash-20-solid",
            click: () => deleteOne(row.id)
          }
        ]
      ];
    }
    async function deleteOne(id) {
      try {
        await $fetch(`/api/group/${id}`, { method: "DELETE" });
        toast.add({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E" });
        await refresh();
      } catch (e2) {
        toast.add({ title: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430", color: "red" });
      }
    }
    async function change(id) {
      isOpenChange.value = true;
      chosenToChnage.value = id;
    }
    async function created() {
      isOpen.value = false;
      await refresh();
    }
    async function changed() {
      isOpenChange.value = false;
      await refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_0$2;
      const _component_UTable = __nuxt_component_1$3;
      const _component_UDropdown = __nuxt_component_2$2;
      const _component_UButton = __nuxt_component_3$3;
      const _component_UPagination = __nuxt_component_4$2;
      const _component_USlideover = __nuxt_component_5$1;
      const _component_FormGroupCreate = _sfc_main$3;
      const _component_FormGroupUpdate = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "admin-groups",
        class: "admin-groups"
      }, _attrs))} data-v-3c2d7867><div style="${ssrRenderStyle({ "margin": "50px 0" })}" data-v-3c2d7867>`);
      _push(ssrRenderComponent(_component_UDivider, { label: "\u041A\u0410\u0422\u0415\u0413\u041E\u0420\u0418\u0418" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UTable, {
        rows: unref(rows),
        columns,
        "empty-state": {
          icon: "i-heroicons-circle-stack-20-solid",
          label: "No items."
        }
      }, {
        "actions-data": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UDropdown, {
              items: items(row)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-ellipsis-horizontal-20-solid"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UDropdown, {
                items: items(row)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-ellipsis-horizontal-20-solid"
                  })
                ]),
                _: 2
              }, 1032, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="table__tools" data-v-3c2d7867>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        "page-count": pageCount,
        total: unref(lastOrders) && unref(lastOrders).length
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        class: "socials__save",
        onClick: () => {
          isOpen.value = true;
        }
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormGroupCreate, {
              onDone: ($event) => created()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormGroupCreate, {
                onDone: ($event) => created()
              }, null, 8, ["onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpenChange),
        "onUpdate:modelValue": ($event) => isRef(isOpenChange) ? isOpenChange.value = $event : null
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormGroupUpdate, {
              id: unref(chosenToChnage),
              onDone: ($event) => changed()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormGroupUpdate, {
                id: unref(chosenToChnage),
                onDone: ($event) => changed()
              }, null, 8, ["id", "onDone"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/admin/SectionAdminGroups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3c2d7867"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNotifications = __nuxt_component_0$3;
      const _component_SectionAdminAlbum = __nuxt_component_1$1;
      const _component_SectionAdminSocials = __nuxt_component_2;
      const _component_SectionAdminActions = __nuxt_component_3;
      const _component_SectionAdminProducts = __nuxt_component_4;
      const _component_SectionAdminLastOrders = __nuxt_component_5;
      const _component_SectionAdminGroups = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin" }, _attrs))} data-v-feb62de4>`);
      _push(ssrRenderComponent(_component_UNotifications, null, null, _parent));
      _push(`<div class="admin__layout" data-v-feb62de4>`);
      _push(ssrRenderComponent(_component_SectionAdminAlbum, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdminSocials, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdminActions, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdminProducts, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdminLastOrders, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionAdminGroups, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-feb62de4"]]);

export { admin as default };
//# sourceMappingURL=admin-BpkIhXbi.mjs.map
