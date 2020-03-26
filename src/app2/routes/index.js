import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/v',
      name: 'v',
      component: () => import('@app2/pages/Welcome'),
    },
  ],
});

export default router;
