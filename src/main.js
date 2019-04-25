import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import store from './store'
import tpheader from './pages/tpheader/TpHeader.vue'
import tpfooter from './pages/tpfooter/TpFooter.vue'


Vue.config.productionTip = false

Vue.prototype.loginRemind=false;

Vue.component('tpheader',tpheader);
Vue.component('tpfooter',tpfooter);

// Vue.prototype.baseUrl='http://mcvbbi.natappfree.cc/public/';
// Vue.prototype.baseUrl='http://192.168.31.228/education_shop/public/';
Vue.prototype.baseUrl='http://education.bayou-tech.cn/';
// Vue.prototype.baseUrl='';
Vue.prototype.imgUrl='http://education.bayou-tech.cn/img/';

Vue.prototype.$get=function(api,data){  
  if (data === undefined) {
      data = {};
  }
  var ox = axios.get(this.baseUrl+api,{params:data});
	return ox;
}

Vue.prototype.$post=function(api,data){
  data = Qs.stringify(data);
  var ox = axios.post(this.baseUrl+api,data);
  return ox;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
