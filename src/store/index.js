import { createStore } from 'vuex'
import posts from './modules/posts.js'
import users from './modules/users.js'

export default createStore({
  modules: {
    posts,
    users,
  }
})
