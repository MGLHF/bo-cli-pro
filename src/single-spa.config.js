import { registerApplication, start } from 'single-spa';

const apps = () => {
  registerApplication(
    'main',
    () => import('./main/main.config.js'),
    location => true,
  );
  let timer = null;
  timer = setInterval(() => {
    const el = document.getElementById('main');
    if (el) {
      registerApplication(
        'app1',
        () => import('./app1/main.config'),
        location => location.pathname === '/' ||
        location.pathname.startsWith('/r'),
      );
      registerApplication(
        'app2',
        () => import('./app2/main.config'),
        location => location.pathname.startsWith('/v'),
      );
      clearInterval(timer);
    }
  }, 10);
}

apps();


start();