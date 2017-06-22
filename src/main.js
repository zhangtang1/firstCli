// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.directive('active', {
  inserted(el) {
    el.addEventListener('touchstart', function () {  
      el.style.opacity = '.7';
    }, false);
    el.addEventListener('touchend', function () {  
      el.style.opacity = '1';
    }, false);
  },
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
