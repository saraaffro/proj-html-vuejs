<!-- sara -->
<script>
import SliderStartHere from '../components/SliderStartHere.vue';
import StepToSuccess from '../components/StepToSuccess.vue';

export default {
    name: "StartHere",
    components:{
        SliderStartHere,
        StepToSuccess
    }
}
</script>

<template>
    <div class="container-xl container-fluid-lg">
        <SliderStartHere/>
        <StepToSuccess/>
    </div>
</template>

<style lang="scss" scoped>
</style>