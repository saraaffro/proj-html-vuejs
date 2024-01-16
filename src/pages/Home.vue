<!-- andrea -->
<script>
import Jambo from '../components/Jambo.vue'
import Price from '../components/Price.vue'

export default {
name: "Home",

components:{
    Jambo,
    Price,
}
}
</script>

<template>
    <div class="container-xl container-fluid-lg">
        <Jambo/>
        <Price/>
    </div>
</template>

<style lang="scss" scoped>
</style>