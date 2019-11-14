<template>
  <Container>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="login" type="text"/>
      <input v-model="password" type="password"/>
      <button type="submit">
        Login
      </button>
    </form>
    
  </Container>
  
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Container from '../layouts/Container.vue';

export default {
    name: "Login",
    components: {
      Container
    },
        data(){
        return{
            login: '',
            password: ''
        }
    },
    computed: {
      ...mapState(["users", "user"])
    },
    methods:{
      ...mapActions(["authUser", "getUsers"]),
      findUser(){
        return this.users.find((user) =>{
          if(user.login == this.login && user.password == this.password){
            return user
          }
        })
      },
      redirectUser(tempo){
        this.user && setTimeout(() =>{
            this.$router.push('users')
        }, tempo)
      },
      onSubmit(){
        this.findUser() && this.authUser(this.findUser()) && this.redirectUser(1000)
        /* eslint-disable no-console */
      }
    },
    created(){
      this.getUsers();
      this.redirectUser(0)
    }
}
</script>

<style>

</style>