/* eslint-disable react-refresh/only-export-components */
export const RouteKey = {
  Home: "Home",
};

export const routeMap = new Map(
  [
    {
      id: RouteKey.Home,
      name: "home",
      path: "/home",
    },
  ].map((route) => [route.id, route])
);

export const rc = (routeKey) => {
  return routeMap.get(routeKey);
};

export const rcByPath = (routePath) => {
  return Array.from(routeMap.values()).find(
    (route) => route.path === routePath
  );
};

export const isRoute = (routePath, routeKey) => {
  return routeMap.get(routeKey).path === routePath;
};

export const getRouteNameBySubpath = (subpath) => {
  const routeArray = Array.from(routeMap.values());
  return routeArray.find((route) =>
    route.subPath ? route.subPath === subpath : route.path === subpath
  );
};
