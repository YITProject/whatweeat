/* eslint-disable import/no-anonymous-default-export */
import { RouteView } from 'godown';
import Nav from './layout/nav';
import React from 'react';
import Pages from './pages';
import About from './pages/about';
import Data from './pages/data';
import { baseURL } from "./config";
type routeType = {
  path: string,
  component: any;
};
const routes: routeType[] = [
  {
    path: "/",
    component: <Pages />
  },
  {
    path: "/about",
    component: <About />
  },
  {
    path: "/data",
    component: <Data />
  }
];
for (const iterator of routes) {
  iterator.path = baseURL + iterator.path;
}
export default () => {
  const sorttedRoutes = RouteView.sortRoutesPaths(routes);
  const machedUrl = RouteView.useWhichRoute(sorttedRoutes, window.location.pathname);
  if (machedUrl == null || machedUrl === undefined) {
    return <>404 Not found.</>;
  }
  const machedRoute = routes.find(route => route.path === machedUrl) as routeType;
  return <Nav>{machedRoute.component}</Nav>
    ;
};