import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import basketCard from './components/Basket.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

Vue.component('basket-card', basketCard);
Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
