<template>
    <ContainerInside>
        <transition appear mode="out-in">
            <ul>
                <li v-for="user in users" :key="user.id">
                    <h2>Nome: {{user.name}}</h2>
                </li>
            </ul>
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

</style>