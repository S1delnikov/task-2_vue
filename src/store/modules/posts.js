import axios from 'axios';
import { mapMutations } from 'vuex'

export default {
    state: {
        posts: [],
        authenticated: false
    },
    getters: {
        AllPosts(state) {
            return state.posts;
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts.reverse();
        }
    },
    actions: {
        async fetchAllPosts(ctx) {
            try{
            const response =  await axios.get('/posts', {
                headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
            });
            const posts = await response.data;
            console.log('response\n' + posts);

            ctx.commit('updatePosts', posts);
            } catch { 
                console.log('exception!'); // изменить статус authenticated
                localStorage.setItem('isAuthenticated', false)

            }
        },
        async createNewPost(ctx, new_post){
            try{
                await axios.post('/create_post', new_post,{
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                console.log('Dobavil')
                // await this.fetchAllPosts(ctx);
                await ctx.dispatch('fetchAllPosts');
                } catch { 
                    console.log('exception!'); // изменить статус authenticated
                    localStorage.setItem('isAuthenticated', false)
    
                }
        },
        async deletePost(ctx, post) {
            try{
                console.log(post.id);
                await axios.post(`/delete_post/${post.id}/`, post.id,{
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                console.log('Udalil');
                await ctx.dispatch('fetchAllPosts');
            }catch{
                console.log('Something went wrong.');
                localStorage.setItem('isAuthenticated', false);
            }
        },

        async changePost(ctx, post) {
            try{
                console.log(post.id);
                await axios.post(`/update_post/${post.id}/`, post,{
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                console.log('Obnovil');
                await ctx.dispatch('fetchAllPosts');
            }catch{
                console.log('Something went wrong.');
                localStorage.setItem('isAuthenticated', false);
            }
        }
    },
    modules: {
    }
  }