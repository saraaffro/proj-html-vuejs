<!-- andrea -->
<script>
    export default{
        name: "EnjoyCompanionship",
        
    }
</script>

<template>
    <div class="container-xl">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="image">
                    <div class="avatar-container">
                        <img class="avatar" src="/public/home-2-popup-video-poster.jpg" alt="video poster">
                        <img class="player" src="/public/icon-youtube-play.png" alt="youtube">
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="text">
                    <div class="title">
                        <span class="get_started">GET STARTED <span class="color-effortlessly">EFFORTLESSLY</span></span>
                    </div>
                    <div class="sub-title">
                        <h2 class="enjoy">ENJOY OUR</h2>
                        <h2 class="color-companionship">COMPANIONSHIP</h2>
                    </div>
                    <div>
                        <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden hints of early-bird rewards as well.</p>
                    </div>
                    <div class="link">
                        <a href="#"><strong>Download free guidebook <span><i class="fa-solid fa-arrow-right"></i></span></strong></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;
.image {
    position: relative;

    .avatar-container {
        overflow: hidden;

        &:hover .avatar {
            transform: scale(1.1); 
        }
    }

    .avatar {
        transition: transform 0.8s ease-in-out; 
        cursor: pointer;
    }

    .player {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    
    
}

    .text{

        padding: 50px;
        .title{
        .get_started{
            font-size: 15px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 2em;
            letter-spacing: 2px;
            color: #8C89A2;
        }

        .color-effortlessly{
            font-weight: 700;
            color: #3F3A64;
        }
    }


    .sub-title{

        margin-top: 10px;
        .enjoy{
            font-size: 48px;
            color: #3F3A64;
        }

        .color-companionship{
            font-weight: 400;
            font-size: 35px;
            color: $verde-acqua;
        }

    }

    p{
        margin-top: 20px;
    }
   
    .link{
        margin-top: 20px;
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
    
</style>