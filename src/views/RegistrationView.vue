<template>
    <div class="registration">
        <!-- <form @submit.prevent="submit" class="reg-form">
            <div class="reg-form__element">
                <label for="login">Логин*</label>
                <input name="login" type="text" placeholder="Введите логин" v-model="form.login">
            </div>
            <div class="reg-form__element">
                <label for="email">Эл.почта</label>
                <input name="email" type="text" placeholder="example@mail.ru" v-model="form.email">
            </div>
            <div class="reg-form__element">
                <label for="password">Пароль*</label>
                <input name="password" type="text" placeholder="Введите пароль" v-model="form.password">
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form> -->
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

/* Add padding to containers */
.container {
  padding: 16px;
}

/* Full-width input fields */
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

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
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

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>