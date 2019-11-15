<template>
  <Container>
    <form v-on:submit.prevent="onSubmit">

      <h1>Acesse a lista de <strong>funcionários</strong></h1>

      <InputGroup>
        <label for="login">
          Login
        </label>
        <input id="login" v-model="login" type="text"/>
      </InputGroup>

      <InputGroup>
            <label for="senha">
        Senha
      </label>
        <input id="senha" v-model="password" type="password"/>
      </InputGroup>

      
      <Button>
        Entrar
      </Button>

      <router-link to="/register">
        <p class="anchor-register">Cadastre-se <span style="text-decoration: underline;">aqui</span>!</p>
      </router-link>
    </form>
    
  </Container>
  
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Container from '../layouts/Container.vue';
import showToast from '../mixins/Toast.js';
import Redirect from '../mixins/Redirect.js';
import InputGroup from '../components/InputGroup.vue';
import Button from '../components/Button.vue';

export default {
    name: "Login",
    mixins: [Redirect, showToast],
    components: {
      Container, InputGroup, Button
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
      onSubmit(){
        if(this.login && this.password){
          // eslint-disable-next-line no-console
          console.log(this.users)
          if(this.findUser()){
            this.authUser(this.findUser()) && this.Redirect('/users', 1000)
          }else{
            this.showToast('Não encontrado!', 'info')
        }
        }else{
          this.showToast('Preencha todos os seus dados!', 'info')
        }
      },
    },
    created(){
      this.getUsers();
    }
}
</script>

<style>
  form{
    width: 40%;
  }
  h1{
    margin-bottom: 30px;
    color: #003646;
    font-size: 42px;
    width: 300px;
    line-height: 120%;
    font-weight: 400;
  }
  .anchor-register{
    display: inline-block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #9BA0A3;
    transition: all .3s ease-in;
  }
  .anchor-register:hover{
    color: #002733;
  }
</style>