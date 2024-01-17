<script>
export default {
    name: "SliderStartHere",
    data(){
        return{
            slider:[
                {
                    image: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-hero-slide-01-bg.jpg',
                    focus: 'Awaken your gifts now',
                    id: 1,
                    title: 'Inspiring Curriculum',
                    text:'Learning with MaxCoach might a turning point in your life when you get communication with a great awakening of born talents.',
                    isActive: true
                },
                {
                    image: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-hero-slide-02-bg.jpg',
                    focus: 'Open up a bright sky',
                    id: 2,
                    title: 'Life Consultancy',
                    text:'Ever feel drained of ideas and inspiratioin in life? Lost in no where and have no place to go? Find help and advice from MaxCoach specialists.',
                    isActive: false,
                },
                {
                    image: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-hero-slide-03-bg.jpg',
                    focus: 'Write your own life book',
                    id: 3,
                    title: 'Skill Advancement',
                    text:"Not only your skills are advanced, your inner self can get a new identity as well. You're the one who take the full control of your life book.",
                    isActive: false,
                },
            ],
            activeElement: 0,
        }
    },
    methods:{
        addClass(classname) {
            this.slider[this.activeElement].isActive = true;
        },
        removeClass(classname) {
            this.slider[this.activeElement].isActive = false;
        },
        nextSlide() {
            // Rimuovo la classe "active" dalla slide attualmente attiva
            this.slider[this.activeElement].isActive = false;

            // Incremento l'indice per passare alla slide successiva
            this.activeElement = (this.activeElement + 1) % this.slider.length;

            // Aggiungo la classe "active" alla nuova slide attiva
            this.slider[this.activeElement].isActive = true;
        },
        prevSlide(){
            // Rimuovo la classe "active" dalla slide attualmente attiva
            this.slider[this.activeElement].isActive = false;

            // Decremento l'indice per passare alla slide successiva (% per assicurarsi che non vada al di fuori della lunghezza dell'array)
            this.activeElement = (this.activeElement - 1 + this.slider.length) % this.slider.length;

            // Aggiungo la classe "active" alla nuova slide attiva
            this.slider[this.activeElement].isActive = true;
        },
        startTimer() {
            setInterval(() => {
                if (this.activeElement < this.slider.length - 1) {
                    this.removeClass("active");
                    this.activeElement++;
                    this.addClass("active");
                } else {
                    this.removeClass("active");
                    this.activeElement = 0;
                    this.addClass("active");
                }
            }, 4000);
        }
    },
    mounted(){
        this.startTimer();
    }
}
</script>

<template>
        <div class="slider-show ">
            <div class="thumb" :class="{'active' : slide.isActive}" v-for="(slide, index) in slider" :key="index">
                <img :src="slide.image" alt="slide">

                <div class="slide-info d-lg-flex align-items-center">
                    <div class="slide-focus">
                        {{ slide.focus }}
                    </div>

                    <div class="slide-description">
                        <span class="slide-id">0{{ slide.id }}</span>
                        <span class="line"></span>
                        <span class="slide-title">{{ slide.title }}</span>
                        <div class="slide-text">{{ slide.text }}</div>
                    </div>
                    
                </div>
                <div class="next-button" @click="nextSlide"><i class="fas fa-chevron-right"></i></div>
                <div class="prev-button" @click="prevSlide"><i class="fas fa-chevron-left"></i></div>
            </div>
        </div>
    <!-- <div class="container-xl container-fluid-lg">
        
    </div> -->
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partial/variables' as *;

.thumb{
    width: 100%;
    height: calc(100vh - 80px);
    position: relative;
    margin-bottom: 50px;
    display: none;
    overflow: hidden;

    img{
        height: 100%;
    }

    .slide-focus{
        text-transform: uppercase;
        font-size: 40px;
        font-weight: bold;
        width: 40%;
        margin-right: 30px;

        @media all and (max-width: 768px){
            font-size: 30px;
        }

        @media all and (max-width: 576px){
            font-size: 20px;
        }
    }

    .slide-info{
        position: absolute;
        bottom: 50px;
        left: 100px;
        color: $bianco;
        margin-right: 40px;

        .slide-id{
            font-size: 30px;
            margin-right: 10px;
            font-weight: bold;

            @media all and (max-width: 768px){
                font-size: 20px;
            }

            @media all and (max-width: 576px){
                font-size: 15px;
            }
        }

        .line{
            display: inline-block;
            width: 40px;
            background-color: $bianco;
            height: 1px;
            margin: 5px 10px;
        }

        .slide-title{
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;

            @media all and (max-width: 768px){
                font-size: 15px;
            }

            @media all and (max-width: 576px){
                font-size: 10px;
            }
        }

        .slide-text{
            font-size: 22px;
            margin-top: 30px;
            line-height: 35px;

            @media all and (max-width: 768px){
                font-size: 18px;
            }

            @media all and (max-width: 576px){
                font-size: 13px;
                line-height: 25px;
                margin-top: 20px;
            }
        }
    }


    .next-button, .prev-button{
        background-color: $grigio;
        opacity: 0.4;
        color: $bianco;
        padding: 10px;
        width: 40px;
        text-align: center;
        display: inline-block;
        border-radius: 50%;
    }

    .next-button{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, 0);
    }

    .prev-button{
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translate(-50%, 0);
    }
}

.active{
    display: block;
}




</style>