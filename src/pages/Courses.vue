<!-- leandro -->
<script>
import CardCourses from '../components/CardCourses.vue'

export default {
    name: "Courses",

    components:{
        CardCourses
    },

    data() {
        return {
            items: ["Overview", "Curriculum", "Instuctor", "Review"],
            activeIndex: null
        };
    },

    methods: {
        activateItem(index) {
        // Attiva la classe 'active' sull'elemento cliccato
        this.activeIndex = index;
        }
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

        <div id="container_list">
            <ul>
                <!-- visualizzazione item in li con applicazione classe active all'elemento cliccato-->
                <li v-for="(item, index) in items" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }">
                    {{ item }}
                </li>
            </ul> 
        </div>

        <!-- visualizzazione testo correlato all'elemento tramite condizione -->
        <div class="container_page" v-if="activeIndex === 0">
            <p>Contenuto per {{ items[activeIndex] }}</p>

            <h2>Course Description</h2>
            <p>Now more than ever, corporations are investing heavily in IT. The quality of these investments affects the daily work of millions.</p>
            <p>Yet it&apos;s not uncommon to see industry surveys where the failure rates for IT projects is over 50%. It&apos;s possible to do better and it&apos;s possible to do so consistently. Use the Business Model Canvas to focus your company strategy and facilitate buy-in from stakeholders.</p>

            <div>
                <img id="artist" src="https://i.ytimg.com/vi_webp/m-X1ExlQ9uE/maxresdefault.webp" alt="img">
                <img id="icon_play" src="/icon-youtube-play.png" alt="icon">
            </div>
        </div>

        <div v-if="activeIndex === 1">
            <p>Contenuto per {{ items[activeIndex] }}</p>
        </div>

        <div v-if="activeIndex === 2">
            <p>Contenuto per {{ items[activeIndex] }}</p>
        </div>

        <div v-if="activeIndex === 3">
            <p>Contenuto per {{ items[activeIndex] }}</p>
        </div>
        

        <div id="relatedcourses">
            <h3>Related Courses</h3> 
            <CardCourses/> 
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

    #container_list{
        width: 45.5%;
    }

    ul{
        margin-left: -21px;
    
        li{
            display: inline-block;
            font-size: 23px;
            cursor: pointer;
            color: $grigio;
            font-weight: bold;

            &:not(:last-of-type){
                margin-right: 20px;
            }

            &:hover{
                color: black;
            }
        }
    }
    .active{
        color: black;
        border-bottom: 2px solid $verde-acqua;
    }

    .container_page{
        width: 75%;

        h2{
            margin-bottom: 20px;
        }

        #artist{
            width: 80%;
            border-radius: 5px;
            position: relative;
        }

        #icon_play{
            position: absolute;
            top: 67%;
            left: 26%;
        }
    }

</style>