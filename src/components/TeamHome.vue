<!-- andrea -->
<script>
export default {
  name: "TeamHome",
  data() {
    return {
      slides: [
        {
          content: "The MaxCoach team works really hard to ensure high quality",
          text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.",
          img: "/public/testimonial-avata-01.jpg",
          name: "LUVIC DUBBLE",
          job: "/ Private Tutor",
        },
        {
          content: "High level of efficiency and scientific teaching methods",
          text: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          img: "/public/testimonial-avata-02.jpg",
          name: "MINA HOLLACE",
          job: "/ Freelancer",
        },
        {
          content: "It's a choice of quality for people with special needs",
          text: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          img: "/public/testimonial-avata-03.jpg",
          name: "LUVIC DUBBLE",
          job: "/ Private Tutor",
        },
        {
          content: "Professional team of specialists and passionate mentors at reach",
          text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          img: "/public/testimonial-avata-04.jpg",
          name: "LUVIC DUBBLE",
          job: "/ Private Tutor",
        },
      ],
    };
  },
};
</script>

<template>
    <div class="container-lg d-flex">

        <!-- image slider start -->
        <div class="slider">

            <div class="slides">

                <!-- radio button start -->
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">
                <!-- radio buttons end -->

                <!-- sliude image start -->
                <div v-for="(slide, index) in slides" :key="index" :class="{ 'slide': true, 'first': index === 0 }">
                    <h4>{{ slide.content }}</h4>
                    <p>{{ slide.text }}</p>
                    <div class="d-flex align-items-center mt-5">
                        <img :src="slide.img" :alt="'avatar' + (index + 1)">
                    <div class="avatar mx-4">
                        <h6>{{ slide.name }}</h6>
                        <span class="job">{{ slide.job }}</span>
                    </div>
                </div>
                
            </div>
                <!-- slide image end -->
            </div>

            <!-- manual navigation start -->
            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
            <!-- manual navigation end -->

        </div>
        <!-- image slider end -->
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partial/variables';
.container-lg {
    display: flex;
}

.slider {
    width: 600px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin: 150px auto;
    

    .slides {
        width: 500%;
        height: 100%;
        display: flex;

        input {
            display: none;
        }
    }

    .slide {
        width: 20%;
        transition: 2s;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover; 
            border-radius: 50%;
        }

        h4{
            color: #3F3A64;
        }

        p{
            font-size: 18px;
            font-weight: 500;
            line-height: 35px;
            color: #696969;
        }

        .job{
            margin: 11px 0 0;
        }    
    }

    .navigation-manual {
        position: absolute;
        width: 100%;
        bottom: 10px;
        display: flex;
        justify-content: center;
    }

    .manual-btn {
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s;

        &:not(:last-child) {
            margin-right: 10px;
        }

        &:hover {
            background-color: $blu-scuro;
        }
    }
}

#radio1:checked ~ .first{
    margin-left: 0;
}

#radio2:checked ~ .first{
    margin-left: -20%;
}
#radio3:checked ~ .first{
    margin-left: -40%;
}
#radio4:checked ~ .first{
    margin-left: -60%;
}


</style>