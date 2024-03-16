<template>
    <div class="login">
      <form @submit.prevent="submit">
        <input type="text" placeholder="Введите логин" v-model="form.login">
        <input type="text" placeholder="Введите пароль" v-model="form.password">
        <button class="login-btn" type="submit">Войти</button>
      </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      form: {
        login: '',
        password:'',
      },
      authenticated: false,
    };
  },
  computed: mapGetters(['isAuthenticated']),
  methods: {
    ...mapActions(['login']),
    async submit() {
      await this.login(this.form);
    },
  }
}
</script>

<style>
.login-btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
</style>
