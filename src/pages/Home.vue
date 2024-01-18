<!-- andrea -->
<script>
import Jambo from '../components/Jambo.vue'
import Price from '../components/Price.vue'
import Benefits from '../components/Benefits.vue'
import EnjoyCompanionship from '../components/EnjoyCompanionship.vue'
import TeamHome from '../components/TeamHome.vue'
import Count from '../components/Count.vue'
import MostViewed from '../components/MostViewed.vue'
import FormEmail from '../components/FormEmail.vue'

export default {
name: "Home",

components:{
    Jambo,
    Price,
    Benefits,
    EnjoyCompanionship,
    TeamHome,
    Count,
    MostViewed,
    FormEmail
}
}
</script>

<template>
    <div class="container-fluid gx-0">
        <Jambo/>
        <Price/>
        <Benefits/>
        <EnjoyCompanionship/>
        <TeamHome/>
        <Count/>
        <MostViewed/>
        <FormEmail/>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid{
    overflow: hidden;
}
</style>