<!-- andrea -->
<script>
import Jambo from '../components/Jambo.vue'
import Price from '../components/Price.vue'
import Benefits from '../components/Benefits.vue'
import EnjoyCompanionship from '../components/EnjoyCompanionship.vue'
import TeamHome from '../components/TeamHome.vue'
import Count from '../components/Count.vue'

export default {
name: "Home",

components:{
    Jambo,
    Price,
    Benefits,
    EnjoyCompanionship,
    TeamHome,
    Count,
}
}
</script>

<template>
    <div class="container-fluid">
        <Jambo/>
        <Price/>
        <Benefits/>
        <EnjoyCompanionship/>
        <TeamHome/>
        <Count/>
    </div>
</template>

<style lang="scss" scoped>
</style>