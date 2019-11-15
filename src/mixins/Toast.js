export default {
    methods: {
      showToast(mensagem, tipo) {
        switch(tipo){
            case 'success':
                this.$toasted.success(mensagem,{
                    duration: 1000,
                    className: ['toast', 'success'],
                    keepOnHover: true
                });
            break;
            case 'error':
                this.$toasted.error(mensagem,{
                    duration: 1000,
                    className: ['toast', 'error'],
                    keepOnHover: true
                });
            break;
            case 'info':
                this.$toasted.info(mensagem,{
                    duration: 1000,
                    className: ['toast', 'info'],
                    keepOnHover: true
                });
            break;
            default:
                this.$toasted.success('Sucesso!',{
                    duration: 1000,
                    className: ['toast', 'success'],
                    keepOnHover: true
                });
        }
      }
    }
  }