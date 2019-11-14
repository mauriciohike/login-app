<template>
  <Container>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="name" type="text"/>
      <input v-model="lastname" type="text"/>
      <input v-model="email" type="email"/>
      <input v-model="login" type="text"/>
      <input v-model="password" type="password"/>
      <button type="submit">
        Cadastrar
      </button>
    </form>
  </Container>

</template>

<script>

import { mapActions } from 'vuex';
import Container from '../layouts/Container.vue';

export default {
    name: "Register",
    components:{
        Container
    },
    data(){
      return{
          name: '',
          lastname: '',
          email: '',
          login: '',
          password: ''
      }
    },
    methods:{
      ...mapActions(["createUser"]),
      onSubmit(){
        if(this.name && this.lastname && this.email && this.login && this.password){
          this.createUser({
            name: this.name, lastname: this.lastname, email: this.email, login: this.login, password: this.password
            }).then(() => {
              this.$toasted.success('Cadastrado com sucesso!',{
                  duration: 1000,
                  className: ['toast', 'success'],
                  keepOnHover: true
              });
                setTimeout(() =>{
                  this.$router.push('/')
                }, 1000)
            }).catch(() => {
              this.$toasted.error('Algo deu errado!',{
                  duration: 1000,
                  className: ['toast', 'error'],
                  keepOnHover: true
              });
            });
        }else{
            this.$toasted.info('Preencha todas as informações!',{
              duration: 1000,
              className: ['toast', 'warning'],
              keepOnHover: true
          });
        }
      }
    }
}
</script>

<style>

</style>