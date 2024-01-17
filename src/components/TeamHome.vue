<!-- andrea -->
<script>
import TeamHomeSlider from './TeamHomeSlider.vue'

export default {
name: "TeamHome",

components:{
    TeamHomeSlider,
}
}
</script>

<template>
    <div class="container-fluid bg mt-5">
        <div class="title text-center">
            <h6 class="little-title ">GREAT WORDS ABOUT MAXCOACH</h6>
            <h2 class="big-title">Our <span class="top">top learners'</span> verbatim</h2>
        </div>
    
        <TeamHomeSlider/>

        <div class="sub-title text-center">
            <h3 class="big-title">Start today for getting <span class="top">Online Certification</span> </h3>
            <h2>You can be your own guiding star with our help!</h2>
        </div>

        <div class="text-center">
            <button class="btn">Get started now</button>
        </div>
    
    </div>
       
</template>

<style lang="scss" scoped>
@import '../styles/partial/variables';

.bg{
    background-color: #f5f7fa;
}

.title{
    padding-top: 100px;
}
.little-title{
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 2px;
    color: #8C89A2;
}

h2{
    font-size: 34px;
    line-height: 1.17em;
    color: #3F3A64;
}

.top{
        color: $verde-acqua;
        font-weight: 400;
    }

.big-title{
    font-size: 24px;
    color: #3F3A64;
}

.sub-title{
    padding-bottom: 50px;
    h2{
        font-size: 34px;
        color: #3F3A64; 
    }
}

.btn{
    background-color: $verde-acqua;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    color: white;
    margin: 20px 0;
    transition: background-color 0.5s ease-in-out;

    &:hover {
        background-color: $blu-scuro; 
        color: white;
    }
}
</style>