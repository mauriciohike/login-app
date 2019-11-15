<template>
  <div class="input-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "InputGroup"
}
</script>

<style scoped>

    .input-group{
        margin: 10px 0;
    }
    .input-group input{
        display: block;
        padding: 8px;
        border-radius: 8px;
        border: 2px solid #C2C9CC;
        width: 300px;
    }
    .input-group input:focus{
        outline: 1px solid #00D4B0;
    }
    .input-group label{
        font-size: 21px;
        font-weight: bold;
        color: #484C4D;
        cursor: text;
    }
</style>