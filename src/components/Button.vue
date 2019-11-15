<template>
<div>

  <button>
      <slot></slot>
  </button>
      </div>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style scoped>
    button{
        display: block;
        width: 300px;
        background: #00D4B0;
        color: #F7F9FA;
        font-weight: bold;
        padding: 10px 0;
        border: 0;
        border-radius: 8px;
        font-size: 21px;
        transition: all .3s ease-in;
        cursor: pointer;
    }
    button:hover{
        background: #008C74;

    }
    div{
        margin-top: 20px;
    }
</style>