import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        users: [],
    },
    mutations:{
        SET_USER(state, payload){
            state.user = payload;
        },
        SET_USERS(state, payload){
            state.users = payload
        }
    },
    actions:{
        createUser(context, payload){
            axios.post('http://localhost:3000/users/', payload)
              .then(response =>{
                /* eslint-disable no-console */
                console.log(response);
              })
              .catch(error =>{
                /* eslint-disable no-console */
                console.log(error);
              });
        },
        getUsers(context){
            axios.get('http://localhost:3000/users/')
            .then(response =>{
                context.commit('SET_USERS', response.data)
            })
            .catch(error =>{
                /* eslint-disable no-console */
                console.log(error);
            })
        },
        authUser(context, payload){
            context.commit('SET_USER', payload)
            /* eslint-disable no-console */
            console.log('deu boa')
        }
    }
});