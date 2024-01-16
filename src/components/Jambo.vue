<script>
export default {
  name: "Jambo",
  data() {
    return {
      sponsors: [
        {
          img: "client-logo-01.png",
          url: "#",
        },
        {
          img: "client-logo-02.png",
          url: "#",
        },
        {
          img: "client-logo-03.png",
          url: "#",
        },
        {
          img: "client-logo-04.png",
          url: "#",
        },
        {
          img: "client-logo-05.png",
          url: "#",
        },
        {
          img: "client-logo-06.png",
          url: "#",
        },
      ],
    };
  },
};
</script>

<!-- DA INSERIRE BACKGROUND CHE SI MUOVE ALL'IMG -->
<template>
    <div class="container-jambo mt-4">

        <div class="row">

            <div class="col-12 col-lg-6">

                <!-- colonna testo -->
                <div class="text-jambo">
                    <div class="title">
                        <h1>Distant learning for further expansion</h1>
                    </div>
                    <div class="sub">
                        <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
                    </div>
                   
                    <button class="download">
                        <i class="fa-solid fa-download"></i>
                        Download free guide
                    </button>

                    <div class="question">
                        <p>Have a questions? <span class="color-free"><a href="#">Get free Sample <i class="fa-solid fa-arrow-right"></i></a></span></p>
                    </div>
                </div>
            </div>

            <!-- colonna img -->
            <div class="col-12 col-lg-6">

                <div class="img-jambo">
                    <img class="profile" src="/public/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="sponsor">
                    <ul>
                        <li v-for="(sponsor, index) in sponsors" :key="index" :class="{ 'd-none d-md-inline': index >= sponsors.length - 3 }">
                            <a :href="sponsor.url">
                                <img :src="sponsor.img" alt="sponsor">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       

    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

    .text-jambo{
        margin-top: 100px;
        padding: 20px;

        .title{
            margin-bottom: 20px;
        }

        .sub{
            line-height: 30px;
        }
    }

    .profile{
        border-radius: 50%;
    }

    // BOTTONE
    .download{
        background-color: $verde-acqua;
        border: none;
        padding: 15px 30px;
        border-radius: 5px;
        color: white;
        margin: 20px 0;
        transition: background-color 0.5s ease-in-out;

        &:hover {
        background-color: $blu-scuro; 
        }

        .fa-download{
            margin-right: 8px;
        }
    }

    // LINEA LINK
    .question {
    position: relative;

    .color-free {

        a {
            color: $verde-acqua;
            position: relative;
            text-decoration: none;
            display: inline-block;
            border-bottom: 1px solid rgb(199, 194, 194);
            transition: border-color 0.5s ease-in-out;

            &:before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: $verde-acqua;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.5s ease-in-out;
            }

            &:hover {
                border-color: transparent;
                &:before {
                    transform: scaleX(1);
                    transform-origin: left;
                }
            }
        }
    }
}


    .sponsor{
        text-align: center;
        margin-top: 60px;

        ul{
            display: flex;
            justify-content: space-around;
                
                li{
                list-style: none;
                display: inline;
                opacity: 0.5;
                transition: opacity 0.3s ease;

                &:hover{
                    opacity: 1;
                }
            }
        }
        
    }
   
  
</style>