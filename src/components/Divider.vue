<script>
    export default {
        props: {
            height: {
                type: String,
                default: '5px'
            },
            width: {
                type: String,
                default: '100%'
            },
            color: {
                type: String,
                default: '#007bff'
            },
        }
    };
</script>

<template>
    <div :style="{ height, width, backgroundColor: color, borderRadius: '10px' }" class="my-2"></div>
</template> 

<style>
    
</style>