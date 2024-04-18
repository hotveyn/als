import { k as defineNuxtRouteMiddleware, o as executeAsync, c as navigateTo } from './server.mjs';
import { u as useFetch } from './fetch-CZK-Gnbc.mjs';
import 'vue';
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
import '@vueuse/core';
import 'tailwind-merge';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  if (!([__temp, __restore] = executeAsync(() => useFetch("/api/auth/check", "$vcG5kb1hEj")), __temp = await __temp, __restore(), __temp).data.value)
    return navigateTo("login");
});

export { auth as default };
//# sourceMappingURL=auth-CQu3Q8rh.mjs.map
