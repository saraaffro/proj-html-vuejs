<!-- leandro -->
<script>
import CardCourses from '../components/CardCourses.vue'

export default {
    name: "Courses",

    components:{
        CardCourses
    }
}
</script>

<template>
    <div id="bg" class="container-xl container-fluid-lg">
        <a href="/">Home</a>
        <span id="slash">/</span>
        <a href="/course">Courses</a>

        <div>
            <h1>Customer-centric Info-Tech Strategies</h1>
        </div>

        <div id="relatedcourses">
            <h3>Related Courses</h3>
            <div id="visualcards">
                <CardCourses/>
            </div>
        </div>


    </div>


</template>

<style lang="scss" scoped>
    @use '../styles/partial/variables' as *;

    #bg{
        background-color: rgb(249, 249, 249);
        padding: 15px;
    }

    #slash{
        margin: 0 10px;
    }
    
    a{
        color: $grigio;
        

        &:hover{
            text-decoration: underline;
        }
    }

    h1,h3{
        text-align: center;
        margin: 5% 0;
    }

    #visualcards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

</style>