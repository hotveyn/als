export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!(await useFetch("/api/auth/check")).data.value)
    return navigateTo("login");
});
