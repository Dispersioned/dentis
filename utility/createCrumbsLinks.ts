import { ROUTES } from '../routes';

function fluttenRoutes(routes: typeof ROUTES) {
  const flatRoutes = new Map();

  for (const route of routes) {
    flatRoutes.set(route.to, route.text);
    if (!route.subroutes) continue;
    for (const subroute of route.subroutes) {
      flatRoutes.set(subroute.to, subroute.text);
    }
  }

  return flatRoutes;
}

export type CrumbLink = {
  text: string;
  to: string;
};

export function createCrumbsLinks(crumbs: string[]): CrumbLink[] {
  const flatRoutes = fluttenRoutes(ROUTES);
  const links: CrumbLink[] = [];
  let path = '';

  for (const crumb of crumbs) {
    path += crumb;
    links.push({
      text: flatRoutes.get(crumb),
      to: path,
    });
    path += '/';
  }

  return links;
}
