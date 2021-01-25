import Vue from 'vue';
import Dev from './serve.vue';

import FatMax from '@/entry';
import '@/assets/fat-max.css';

Vue.config.productionTip = false;
Vue.use(FatMax);

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
