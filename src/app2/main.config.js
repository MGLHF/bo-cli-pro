import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './layout';
import router from './routes';
import singleSpaVue from 'single-spa-vue';
import * as singleSpa from 'single-spa';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(singleSpa);

/* eslint-disable no-new */
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions: {
    el: '#main',
    render: h => h(App),
    router,
  },
});

export const bootstrap = props => vueLifecycle.bootstrap(props);
export const mount = props => vueLifecycle.mount(props);
export const unmount = props => vueLifecycle.unmount(props);
