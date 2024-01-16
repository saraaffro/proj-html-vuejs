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
        }
    }
}
</script>

<template>
    <div id="card" v-for="(card,i) in cards" :key="i">
        <img :src="card.src" alt="card">
        <div>
            <h4>{{ card.price }}</h4>
            <h5><a href="#">{{ card.typename }}</a></h5>
            <span>{{ card.lessons }}</span>
            <span>{{ card.students }}</span>
        </div>
        

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partial/variables' as *;

    #card{
        width: calc((100% / 3) - 20px);

        &:hover{
            background-color: white;
        }
    }

    #card div{
        width: 95%;
        padding: 25px;
    }

    img{
        width: 100%;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
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

</style>