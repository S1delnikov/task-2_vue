<template>
  <nav class="my-navbar">
    <router-link to="/">Главная</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/login">Войти</router-link> |
    <router-link to="/registration">Регистрация</router-link> |
    <button @click="logout">Выйти</button>
  </nav>
  <!-- <form v-if="isAuthenticated == false" @submit.prevent="submit">
    <input type="text" placeholder="Введите логин" v-model="form.login">
    <input type="text" placeholder="Введите пароль" v-model="form.password">
    <button type="submit">Войти</button>
  </form> -->
  <!-- <router-view v-else/> -->
  <router-view />
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    async logout() {
      localStorage.setItem('isAuthenticated', false);
      localStorage.setItem('token', 'invalid token');
      localStorage.setItem('username', '');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.my-navbar {
  background-color: #2c3e50;
}

.my-navbar button {
  background-color: #2c3e50;
  border: none;
  color: #f6faff;
  font-weight: bold;
}

.my-navbar button:hover {
  color: #0073ff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f6faff;
  text-decoration: none;
}


nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover{
  color: #0073ff;
}

form {
  display: flexbox;
  justify-content: center;
  margin: 40px auto;
  width: 400px;
}

input {
  display: block;
  margin: 10px auto;
}
</style>
