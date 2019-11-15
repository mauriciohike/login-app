<template>
    <ContainerInside>
        <transition appear mode="out-in">
            <div>
                <h2>Lista de <strong>funcionários</strong></h2>
                <ul class="user-list">
                    <li class="user" v-for="user in users" :key="user.id">
                        <div class="dado">
                            <h3>Nome:</h3> 
                            <p>{{user.name}}</p>
                            <p>{{user.lastname}}</p>
                        </div>
                        <div class="dado">
                            <h3>E-mail:</h3> 
                            <p>{{user.email}}</p>
                        </div>
                        <div class="dado">
                            <h3>Login:</h3> 
                            <p>{{user.login}}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </transition>
    </ContainerInside>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import ContainerInside from '../layouts/ContainerInside.vue';


export default {
    name: "Users",
    components:{
        ContainerInside
    },
    computed: {
      ...mapState(["users", "user"])
    },
    methods:{
        ...mapActions(["getUsers"]),
        redirectUser(tempo){
            !this.user && setTimeout(() =>{
                this.$router.push('/')
            }, tempo)
        },
    },
    created(){
      this.getUsers();
      this.redirectUser(0)
    }
}
</script>

<style>
    h2{
        max-width: 600px;
        width: 95%;
        margin: 0 auto;
        padding-top: 100px;

        color: #00AB8E;
        font-size: 42px;
        line-height: 120%;
        font-weight: 400;
    }
    .user-list{
        padding: 40px 0;
    }
    .user{
        max-width: 600px;
        margin: 0 auto 30px auto;
        width: 95%;
        border: 2px solid #C2C9CC;
        border-radius: 8px;
        padding: 8px 16px;
        background: #F4F6F7;
        color: #003646;
        }
    .dado{
        display: flex;
        align-items: center;
        margin: 5px 0;
        color: 
    }
    .dado h3{
        font-size: 18px;
        font-weight: bold;
        width: 65px;
    }
    .dado p{
        display: inline-block;
        margin: 0 2.5px;
        font-weight: 400;
    }
</style>