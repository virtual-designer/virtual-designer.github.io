<script>
    export default {
        data() {
            return {
                url: "https://en.gravatar.com/userimage/196295968/64a181620f5c4a8963b69de0a56726bd.jpg"
            };
        }
    };
</script>

<template>
    <img :src="url + '?size=500'" alt="Avatar" class="img-fluid">
</template>

<style scoped>
    img {
        border-radius: 50%;
        height: auto;
        width: 100%;
    }
</style>