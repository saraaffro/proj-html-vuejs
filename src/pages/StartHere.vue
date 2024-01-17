<!-- sara -->
<script>
import SliderStartHere from '../components/SliderStartHere.vue';
import StepToSuccess from '../components/StepToSuccess.vue';
import TeamMembers from '../components/TeamMembers.vue';
import FAQ from '../components/FAQ.vue';


export default {
    name: "StartHere",
    components:{
        SliderStartHere,
        StepToSuccess,
        TeamMembers,
        FAQ
    }
}
</script>

<template>
    <div class="container-fluid p-0">
        <SliderStartHere/>
        <StepToSuccess/>
        <TeamMembers/>
        <FAQ/>
    </div>
</template>

<style lang="scss" scoped>
</style>