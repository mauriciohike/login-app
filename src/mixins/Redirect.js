export default {
    methods: {
      Redirect(local, tempo) {
        setTimeout(() =>{
            this.$router.push(local)
          }, tempo)
      }
    }
  }