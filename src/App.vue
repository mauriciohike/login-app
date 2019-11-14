<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
  }
  #app{
      font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #eaeced;
  }
  h1{
      font-weight: 700;
  }
  .v-enter-active,
  .v-leave-active {
      transition: opacity 1s;
  }
  .v-enter,
  .v-leave-to {
      opacity: 0;
  }
  .toast{
      font-family: 'Roboto', sans-serif;
      font-weight: 700 !important;
      padding: 15px 30px !important;
  }
  .success{
      background: #00D4B0 !important;
  }
  .error{
      background: #FF4C4C !important;
  }
  .warning{
      background: #FFAA40 !important;
  }
</style>
