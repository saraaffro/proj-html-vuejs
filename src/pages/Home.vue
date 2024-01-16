<!-- andrea -->
<script>
import Jambo from '../components/Jambo.vue'
import Price from '../components/Price.vue'
import Benefits from '../components/Benefits.vue'

export default {
name: "Home",

components:{
    Jambo,
    Price,
    Benefits,
}
}
</script>

<template>
    <div class="container-xl container-fluid-lg">
        <Jambo/>
        <Price/>
        <Benefits/>
    </div>
</template>

<style lang="scss" scoped>
</style>