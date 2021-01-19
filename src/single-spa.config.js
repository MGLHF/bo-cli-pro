import { registerApplication, start } from 'single-spa';

registerApplication(
  'main',
  () => import('./main/main.config.js'),
  location => true,
);
start();

const appConfig = [
  {
    name: 'app1',
    entryPath: () => import('./app1/main.config'),
    routerRule: location => location.pathname === '/' ||
    location.pathname.startsWith('/r'),
  },
  {
    name: 'app2',
    entryPath: () => import('./app2/main.config'),
    routerRule: location => location.pathname.startsWith('/v'),
  },
]

export default appConfig;