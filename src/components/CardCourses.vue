<script>
export default {
    name: "CardCourses",

    data(){
        return{
            cards:[
                {
                    src: "course-02-480x298.jpg",
                    price: "$40.00",
                    typename: "Learning to Write as a Professional Author",
                    lessons: "20 Lessons",
                    students: "77 Students",
                },
                {
                    src: "stock-full-hd-04-480x298.jpg",
                    price: "$19.00",
                    typename: "Open Programming Courses for Everyone: Python",
                    lessons:"17 Lessons",
                    students: "66 Students",
                },
                {
                    src:"stock-full-hd-06-480x298.jpg",
                    price:"$26.00",
                    typename:"Academic Listening and Note-taking",
                    lessons:"14 Lessons",
                    students:"68 Students",
                },
                {
                    src: "course-featured-image-01-480x298.jpg",
                    price:"$39.00",
                    typename: "Master jQuery in a Short Period of Time",
                    lessons:"6 Lessons",
                    students:"51 Students",
                },
                {
                    src: "stock-full-hd-05-480x298.jpg",
                    price:"$59.00",
                    typename: "Introduction to Javascript for Beginners",
                    lessons:"14 Lessons",
                    students:"81 Students",
                },
            ],
            circles: [
                { active: true },
                { active: false }
            ],
            currentActiveIndex: 0
        }
    },

    computed: {
        // ritorna le prime 3 cards
        firstThree() {
            return this.cards.slice(0, 3);
        },
        // ritorna le ultime 3 cards
        lastThree() {
            return this.cards.slice(-3);
        }
    },

    methods:{
        // aggiornamento stato cerchio attivo
        toggleCircle(index) {
            if(this.currentActiveIndex !== index){
                this.circles[this.currentActiveIndex].active = false
                this.currentActiveIndex = index;
                this.circles[index].active = true
            }
        }
    }
}
</script>

<template>
    
    <div class="container_cards">
        <div id="card" v-if="circles[0].active" v-for="(card,i) in firstThree" :key="i" >
            <img :src="card.src" alt="card">
            <div>
                <h4>{{ card.price }}</h4>
                <h5><a href="#">{{ card.typename }}</a></h5>
                <span>{{ card.lessons }}</span>
                <span>{{ card.students }}</span>
            </div>
        </div>
    </div>
      
    <div class="container_cards">
        <div id="card" v-if="circles[1].active" v-for="(card,i) in lastThree" :key="i">
            <img :src="card.src" alt="card">
            <div>
                <h4>{{ card.price }}</h4>
                <h5><a href="#">{{ card.typename }}</a></h5>
                <span>{{ card.lessons }}</span>
                <span>{{ card.students }}</span>
            </div>
        </div>
    </div>
    
    <div id="container_button">
        <div
        v-for="(circle, index) in circles"
        :key="index"
        :class="{ 'circle': true, 'circle_active': circle.active}"
        @click="toggleCircle(index)"
        ></div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partial/variables' as *;

    .container_cards{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    #card{
        width: calc((100% / 3) - 20px);
        overflow: hidden;

        &:hover{
            background-color: white;
            cursor: pointer;

            img{
                transform: scale(1.05); 
            }
        }
    }

    #card div{
        width: 95%;
        padding: 25px;
    }

    img{
        max-width: 100%;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        transition: transform 0.25s linear;
    }

    h4{
        color: $verde-acqua;
        font-weight: bold;
        margin-bottom: 15px;
    }

    h5{
        margin-bottom: 30px;
    }

    a{
        color: black;

        &:hover{
            color: $verde-acqua;
        }
    }

    span:first-of-type{
        margin-right: 30px;
    }

    .active{
        display: block;
    }

    .circle{
        display: inline-block;
        width: 13px;
        height: 13px;
        border: 1px solid black;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
        transition: 0.3s;

        &:hover{  
            background-color: black;
            width: 17px;
            height: 17px;    
        }

    }

    #container_button{
        text-align: center;
        margin: 20px 0;
    }

    .circle_active{
        background-color: black;
        width: 17px;
        height: 17px;
    }

</style>