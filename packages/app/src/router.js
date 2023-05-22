class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }
  init() {
    window.addEventListener("load", async (event) => {
      event.preventDefault();
      await this.loadInitialRoute();
    });
    const links = document.querySelectorAll("[href]");
    links.forEach((link) => {
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        const pathnameSplitted = event.target.pathname.split("/");
        const pathSegments =
          pathnameSplitted.length > 1 ? pathnameSplitted.slice(1) : "";

        await this.loadRoute(...pathSegments);
      });
    });
  }
  async loadRoute(...urlSegments) {
    const matchedRoute = this.matchUrlToRoute(urlSegments);
    const url = `/${urlSegments.join("/")}`;

    history.pushState({}, "", url);

    const rootElement = document.querySelector("[data-router-container]");
    rootElement.innerHTML = matchedRoute.template;
    await this.loadView(matchedRoute.view);
  }
  async loadView(view) {
    const { render } = await import(`./views/${view}.js`);
    render();
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

  async loadInitialRoute() {
    const pathnameSplitted = window.location.pathname.split("/");
    const pathSegments =
      pathnameSplitted.length > 1 ? pathnameSplitted.slice(1) : "";

    await this.loadRoute(...pathSegments);
  }
}

export default Router;
