export default defineNuxtRouteMiddleware(async () => {
  if (!(await useFetch("/api/auth/check")).data.value)
    return navigateTo("login");
});
