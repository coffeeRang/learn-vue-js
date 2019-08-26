<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  // data란 속성을 원래 객체를 많이 썼지만 
  // 실제 컴포넌트 단위로 개발할때는 컴포넌트간 데이터가 공유되지 않도록(값의 참조가 일어남))
  // data에 function을 연결해 새 객체를 리턴하는 구문을 사용한다.
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }

      axios.post(url, data)
        .then(function(response) {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        })
      ;
    }
  }

}
</script>

<style>

</style>