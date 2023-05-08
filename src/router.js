export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
  }
  loadRoute(...urlSegments) {
    const matchedRoute = this.matchUrlToRoute(urlSegments);

    const url = `/${urlSegments.join("/")}`;
    history.pushState({}, "", url);

    const rootElement = document.querySelector("[data-router-container]");
    rootElement.innerHTML = matchedRoute.template;
  }
  matchUrlToRoute(urlSegments) {
    return this.routes.find((route) => {
      const routePathSegments = route.path.split("/").slice(1);
      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }
      return routePathSegments.every(
        (routePathSegment, i) => routePathSegment === urlSegments[i]
      );
    });
  }
  loadInitialRoute() {
    const pathNameSplitted = window.location.pathname.split("/");
    const pathSegments =
      pathNameSplitted.length > 1 ? pathNameSplitted.slice(1) : "";
    this.loadRoute(...pathSegments);
  }
}
