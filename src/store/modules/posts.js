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

            ctx.commit('updatePosts', posts);
            } catch { 
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
                await ctx.dispatch('fetchAllPosts');
                } catch { 
                    localStorage.setItem('isAuthenticated', false)
    
                }
        },
        async deletePost(ctx, post) {
            try{
                await axios.post(`/delete_post/${post.id}/`, post.id,{
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                await ctx.dispatch('fetchAllPosts');
            }catch{
                localStorage.setItem('isAuthenticated', false);
            }
        },

        async changePost(ctx, post) {
            try{
                await axios.post(`/update_post/${post.id}/`, post,{
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                });
                await ctx.dispatch('fetchAllPosts');
            }catch{
                localStorage.setItem('isAuthenticated', false);
            }
        }
    },
    modules: {
    }
  }