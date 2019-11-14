<template>
    <div class="container-inside">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ContainerInside'
}
</script>

<style lang="scss">
    .container-inside{
        max-width: 1200px;
        margin: 0 auto;
        width: 95%;
    }
</style>