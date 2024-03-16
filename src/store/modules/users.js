import axios from 'axios'
import router from '@/router'
import { useAttrs } from 'vue'
import { routeLocationKey } from 'vue-router'

export default {
    state: {
        authenticated: false,
        username: '',
    },
    getters: {
        isAuthenticated(state) {
            return localStorage.getItem('isAuthenticated')
        },
        getUsername(state) {
            return localStorage.getItem('username')
        }
    },
    mutations: {
        setAuthenticated(state, value){
            state.authenticated = value
        },
        setUsername(state, username) {
            state.username = username
        },
    },
    actions: {
        async tryAutoLogin() {
            if (localStorage.getItem('isAuthenticated') == true) {
                console.log('I AM AUTHENTICATED')
            }
        },
        async registration(ctx, form){
            try{
                await axios.post('/registration', form);
                localStorage.setItem('username', form.username);
                router.push('/login');
            } catch{
                alert('Ошибка при регистрации')
            }
        },
        async login(ctx, form) {
            if (form.login != '' && form.password != ''){
                try{
                const User = new FormData();
                User.append('username', form.login);
                User.append('password', form.password);
                const token = await axios.post('login', User);
                localStorage.setItem("token", token.data.access_token);
                localStorage.setItem('username', form.login);
                localStorage.setItem('isAuthenticated', true);
                
                ctx.commit('setAuthenticated', true)
                ctx.commit('setUsername', form.login)

                router.push('/');
                } catch {
                  alert('Неправильный логин или пароль!');
                  ctx.commit('setAuthenticated', false)
                }
            }
            else {
                alert('Заполните все поля, чтобы продолжить')
              }
        },
    }
}