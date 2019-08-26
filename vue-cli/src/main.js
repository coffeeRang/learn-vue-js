import Vue from 'vue'
import App from './App.vue' // 컴포넌트 파일

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

// render : 뷰 내부적으로 사용되는 함수, 사용자(개발자)도 사용가능한 함수, 템플릿을 선언했을때 내부적으로 render 함수가 실행된다.
new Vue({
  render: h => h(App),
}).$mount('#app')


// 위와 아래는 동일하다.
// new Vue({
//   el: '#app',
//   components: {
//     'app': App
//   }
// })
