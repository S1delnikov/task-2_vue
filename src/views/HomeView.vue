<template>
  <div class="home">
    <p v-if="isAuthenticated == false">Для просмотра постов нужно <router-link to="/login">авторизоваться</router-link>.</p>
    <section v-else>
      <h2>Записки {{ getUsername }}</h2>
      <section class="posts">
        <input type="button" class="open-form-btn" value="Создать пост" id="btn-show-form" @click="openCreatePostForm">
        <form @submit.prevent="createPost" id="add-post-form" class="add-post">
          <input type="text" v-model="new_post.title">
          <textarea name=""  cols="30" rows="10" v-model="new_post.text"></textarea>
          <input type="submit" value="Создать пост" class="create-post-btn"></input>
        </form>
        <div v-if="AllPosts.length">
          <section v-for="post in AllPosts" :key="post"  class="post">
            <div class="post-header">
              <label for="{{post.id}}">Тема:</label>
              <input name="{{post.id}}" type="text" value="post.title" v-model="post.title" class="post-header__content"></input>
            </div>
            <textarea class="post-text" v-model="post.text">{{ post.text }}</textarea>
            <p>{{ post.date_added.toString() }}</p> 
            <div class="post-control-panel">
              <button class="btn btn-success rounded-pill px-3" @click="changeOnePost(post)">Изменить</button>
              <button class="btn btn-danger rounded-pill px-3" @click="deleteOnePost(post)">Удалить</button>
          </div>
          </section>
        </div>
        <p v-else>Пока никаких постов нет</p>
        </section>
  </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      new_post: {
        title: '',
        text: '',
      },
    };
  },
  name: 'HomeView',
  computed: {
    ...mapGetters(['AllPosts', 'getUsername', 'isAuthenticated']), 
  },
  methods: {
    ...mapActions(['fetchAllPosts', 'createNewPost', 'deletePost', 'changePost']),

    async formatDateAdded(date_added) {
      // date_added = new Date(date_added);
      date_added = (new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(new Date(date_added))).toString() + ' ' + 
                    (new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(new Date(date_added))).toString() 
      return date_added.toString();
    },

    async deleteOnePost(post) {
      this.deletePost(post);
    },

    async changeOnePost(post) {
      this.changePost(post);
    },

    async createPost() {
      this.createNewPost(this.new_post);
    },

    async openCreatePostForm(){
      let btn = document.getElementById('btn-show-form');
      let form = document.getElementById('add-post-form');
      if (form.style.display == 'block'){
        form.style.display = 'none';
        btn.value = 'Создать пост';
      } else {
        form.style.display = 'block';
        btn.value = 'Закрыть';
      }
      
    }
  },
  async mounted() {
    this.fetchAllPosts();
  }
}
</script>

<style>

.post-control-panel {
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
}

.open-form-btn {
  background-color: #ffd970;
  border:none;
  padding: 8px;
  border-radius: 4px;
}

.create-post-btn {
  background-color: #3ed8ff;
  border:none;
  padding: 8px;
  border-radius: 4px;
}

.posts {
  margin: 20px auto;
  width: 500px;
}

.post {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 15px;
}

.post-header {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-left: 25px;
}

.post-header__content {
  border: none;
  background-color: rgba(0, 0, 0, 0.068);
  text-align: center;
  font-size: 14pt;
  font-weight: 500;
};

.post-text {
  max-width: 500px;
}

textarea {
  margin: 10px auto;
    width: 90%; /* Ширина поля в процентах */
    height: 200px; /* Высота поля в пикселях */
    resize: vertical; /* Запрещаем изменять размер */
    font-size: 12pt;
    border: 1px solid rgba(0, 0, 0, 0.096);
   } 

.add-post {
  display: none;
}



</style>
