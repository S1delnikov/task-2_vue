<template>
    <div class="registration">
        <hr>
        <form @submit.prevent="submit" class="reg-form">
            <label for="login">Логин</label>
            <input name="login" type="text" placeholder="Введите логин" v-model="form.username" required>

            <label for="password">Пароль</label>
            <input name="password" type="text" placeholder="Введите пароль" v-model="form.password" required>
            
            <button class="registerbtn" type="submit">Зарегистрироваться</button>
        </form>
        <hr>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                date_of_registration: Date.now(),
            }
        }
    },
    methods: {
        ...mapActions(['registration']),
        async submit() {
            this.registration(this.form);
        }
    }
}
</script>

<style>
* {box-sizing: border-box}

.reg-form {
    width: 500px;
}

.container {
  padding: 16px;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}

a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>