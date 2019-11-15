<template>
  <Container>
    <form v-on:submit.prevent="onSubmit">

      <h1>Faça seu <strong>cadastro!</strong></h1>

      <InputGroup>
        <label for="name">
          Nome
        </label>
        <input id="name" v-model="name" type="text"/>
      </InputGroup>

      <InputGroup>
        <label for="lastname">
          Sobrenome
        </label>
        <input id="lastname" v-model="lastname" type="text"/>
      </InputGroup>

      <InputGroup>
        <label for="lastname">
          E-mail
        </label>
        <input id="email" v-model="email" type="email"/>
      </InputGroup>

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
        Cadastrar
      </Button>
    </form>
  </Container>

</template>

<script>

import { mapActions } from 'vuex';
import Container from '../layouts/Container.vue';
import showToast from '../mixins/Toast.js';
import Redirect from '../mixins/Redirect.js';
import InputGroup from '../components/InputGroup.vue';
import Button from '../components/Button.vue';

export default {
    name: "Register",
    mixins: [showToast, Redirect],
    components:{
        Container, InputGroup, Button
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

              this.showToast('Cadastrado com sucesso!', 'success');
              this.Redirect('/', 1000);

            }).catch(() => {

              this.showToast('Algo deu errado...', 'error');

            });
        }else{

            this.showToast('Preencha todos os dados!', 'info');

        }
      }
    }
}
</script>

<style scoped>
  h1{
    font-size: 32px;
  }
</style>