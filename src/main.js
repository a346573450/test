// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../src/css/style.css';
import domain from './domain.js'
global.domain = domain;
import iView from 'iview';
Vue.use(iView);
// import 'iview/dist/styles/iview.css';
Vue.use(ElementUI)
Vue.use(VueAxios, axios);
// qs
import qs from 'qs'

Vue.prototype.$qs = qs;

Vue.config.productionTip = false

// 写在vue实例化之前，否则router加载不到
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {   //如果需要跳转 ，往下走（1）
    if (window.sessionStorage.getItem("islogin")) {   //判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
      // 如果需要  这里可以在加一个判断token过期的方法
      if (to.path === '/desk') { //判断下一个路由是否为要验证的路由（3）
        next();   // 如果是直接跳到首页，
      } else {    //如果该路由不需要验证，那么直接往后走
        next();
      }
    } else {
      console.log('没有');  //如果没有登陆过，或者token 过期， 那么跳转到登录页
      next('/');
    }
  } else {
    // 不需要跳转，直接往下走
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



