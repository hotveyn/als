export default defineNuxtRouteMiddleware(async () => {
  const { data: checkResult } = await useFetch("/api/auth/check");
  console.log("checkResult", checkResult.value);
  if (!checkResult.value) return navigateTo("login");
});
