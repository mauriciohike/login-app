import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Users from './views/Users.vue';

export default new Router({
    mode: "history", 
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/", 
            name: "login", 
            component: Login
        },
        {
            path: "/register", 
            name: "register", 
            component: Register
        },
        {
            path: "/users", 
            name: "users", 
            component: Users
        }
    ]
});