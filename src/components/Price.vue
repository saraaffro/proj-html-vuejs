<!-- andrea -->
<script>

import CardPrice from './CardPrice.vue'

export default {
name: "Price",

components: {
    CardPrice,
},

data(){
    return{
        rates:[
            {
                img: "stock-full-hd-06-480x298.jpg",
                price: "Free",
                type: "Personal Finance: Financial Security Thinking & Principles",
                lessons: "2 Lessons",
                students: "295 Students",
            },
            {
                img: "course-02-480x298.jpg",
                price: "$40.00",
                type: "Learning to Write as a Professional Author",
                lessons: "20 Lessons",
                students: "77 Students",
            },
            {
                img: "stock-full-hd-03-480x298.jpg",
                price: "Free",
                type: "Customer-centric Info-Tech Strategies",
                lessons:"24 Lessons",
                students: "955 Students",
            },
            {
                img: "stock-full-hd-04-480x298.jpg",
                price: "$19.00",
                type: "Open Programming Courses for Everyone: Python",
                lessons:"17 Lessons",
                students: "66 Students"
            },
            {
                img: "stock-full-hd-06-480x298.jpg",
                price:"$26.00",
                type:"Academic Listening and Note-taking",
                lessons:"14 Lessons",
                students:"68 Students"
            },
            {
                img: "course-featured-image-01-480x298.jpg",
                price:"$39.00",
                type: "Master jQuery in a Short Period of Time",
                lessons:"6 Lessons",
                students:"51 Students",
            }
        ]
    }
}

}
</script>

<template>
    
        <div class="container-fluid-lg bg">
            <div class="row">
                <div class="col">
                    <div class="text">
                        <h6 class="title">STIMULATED TO LEARN?</h6>
                        <h2 class="sub"><strong>Featured Online Courses</strong></h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-6 d-flex justify-content-center" v-for="card in rates" :key="card">
                        <CardPrice :card="card"/>
                    </div>
                </div>
            </div>  
            
                <div class="d-flex justify-content-center mt-5">
                    <button>
                        View all courses
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
        </div>
         
    
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;
    .bg{
        background-color:  $bianco-sporco;
        margin-top: 50px;

        .text{
            text-align: center;
            margin-top: 100px;

            .title{
                color: rgb(163, 160, 160);
                font-weight: 300;
                letter-spacing: 1px;
            }

            .sub{
                color: $blu-scuro;
            }
        }

        button{
            background-color: $verde-acqua;
            border: none;
            padding: 15px 30px;
            border-radius: 5px;
            color: white;
            margin: 20px 0;
            transition: background-color 0.5s ease-in-out;
            width: 250px;
            margin-bottom: 100px;
            font-size: 14px;
            font-weight: 500;

            &:hover {
                background-color: $blu-scuro; 
            }
        }
    }
</style>