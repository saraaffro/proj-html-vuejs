<script>
export default {
    name: "StepToSuccess",
}
</script>

<template>
    <section class="container-xl container-fluid-lg">
        <h4>FOUR MAJOR STEPS TO SUCCESS</h4>
        <h2>Best chances for expanding your success to the max</h2>

        <div class="line-center"></div>
        <i class="fa-regular fa-circle-dot one"></i>
        <h3>BROADENING</h3>
        <div class="step d-md-flex align-items-center">
            <div class="img-container">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-01.jpg" alt="broadening img">
            </div>
            <div class="step-info">
                <h5>#1 Careeer advancement and hobbies</h5>
                <p class="step-text">Studying online gives you more flexibility. You can work and fit your work schedule around your coursework more easily; even more so if you are taking an asynchronous class: an online class where you can study and interact with your instructor and fellow classmates at your own pace.</p>
            </div>
        </div>

        <i class="fa-regular fa-circle-dot two"></i>
        <h3 class="reverse">SCHEDULING</h3>
        <div class="step reverse d-md-flex flex-md-row-reverse align-items-center">
            <div class="img-container reverse">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-02.jpg" alt="scheduling img">
            </div>
            <div class="step-info reverse">
                <h5>#2 Flexible schedule & environment</h5>
                <p class="step-text">Taking an online course also means that you don’t have to commute to class, which means less time spent on the bus and more study time sitting on your couch, the sound of a crackling fireplace in the background. You no longer have to worry about missing an important class!</p>
            </div>
        </div>

        <i class="fa-regular fa-circle-dot three"></i>
        <h3 id="discipline">SELF-DISCIPLINE</h3>
        <div class="step d-md-flex align-items-center">
            <div class="img-container">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-03.jpg" alt="self-discipline img">
            </div>
            <div class="step-info">
                <h5>#3 Self-discipline & responsibility</h5>
                <p class="step-text">Who says that having to be more self-disciplined is a disadvantage? It is true that studying online requires more time-management skills, because you will spend a lot of time on your own without someone physically close to keep you focused on deadlines.</p>
            </div>
        </div>

        <i class="fa-regular fa-circle-dot four"></i>
        <h3 class="reverse">INVESTMENT</h3>
        <div class="step reverse d-md-flex flex-md-row-reverse align-items-center">
            <div class="img-container reverse">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-04.jpg" alt="investment img">
            </div>
            <div class="step-info reverse">
                <h5>#4 Smart investment into future</h5>
                <p class="step-text">Studying online means that you pay the tuition fee, possibly book supplies, an online application fee, and few other items. You don’t, however, incur the costs of housing (which can range up to $12,000 per year) and transportation, which translates to lower debts and more savings.</p>
            </div>
        </div>
       
    </section>
   
    
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

section{
    padding-top: 30px;
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;

    .line-center{
        width: 2px;
        background-color: #e2e2e8;
        height: 100%;
        position: absolute;
        left: 30px;
        top: 150px;

        @media all and (min-width: 768px){
            position: absolute;
            left: 49%;
            top: 170px;
            transform: translate(-49%, 0);
        }

        @media all and (min-width: 992px){
            position: absolute;
            left: 45%;
            top: 220px;
            transform: translate(-45%, 0);
        }

        @media all and (min-width: 1200px){
            position: absolute;
            left: 44%;
            top: 230px;
            transform: translate(-44%, 0);
        }

        @media all and (min-width: 1400px){
            position: absolute;
            left: 48%;
            top: 230px;
            transform: translate(-48%, 0);
        }
    }

    .fa-circle-dot.one{
        font-size: 30px;
        color: $verde-acqua;
        position: absolute;
        top: 218px;
        left: 16px;

        @media all and (min-width: 500px){
            top: 183px;
        }

        @media all and (min-width: 768px){
            position: absolute;
            left: 49%;
            top: 185px;
            transform: translate(-49%, 0);
        }

        @media all and (min-width: 992px){
            position: absolute;
            left: 45%;
            top: 250px;
            transform: translate(-45%, 0);
        }

        @media all and (min-width: 1200px){
            position: absolute;
            left: 44%;
            top: 250px;
            transform: translate(-44%, 0);
        }

        @media all and (min-width: 1400px){
            position: absolute;
            left: 48%;
            top: 250px;
            transform: translate(-48%, 0);
        }
    }

    .fa-circle-dot.two{
        font-size: 30px;
        color: $verde-acqua;
        position: absolute;
        top: 730px;
        left: 16px;

        @media all and (min-width: 500px){
            top: 940px;
        }

        @media all and (min-width: 768px){
            position: absolute;
            left: 49%;
            top: 615px;
            transform: translate(-49%, 0);
        }

        @media all and (min-width: 992px){
            position: absolute;
            left: 45%;
            top: 680px;
            transform: translate(-45%, 0);
        }

        @media all and (min-width: 1200px){
            position: absolute;
            left: 44%;
            top: 680px;
            transform: translate(-44%, 0);
        }

        @media all and (min-width: 1400px){
            position: absolute;
            left: 48%;
            top: 780px;
            transform: translate(-48%, 0);
        }
    }

    .fa-circle-dot.three{
        font-size: 30px;
        color: $verde-acqua;
        position: absolute;
        top: 1030px;
        left: 16px;

        @media all and (min-width: 500px){
            top: 1660px;
        }

        @media all and (min-width: 768px){
            position: absolute;
            left: 49%;
            top: 1220px;
            transform: translate(-49%, 0);
        }

        @media all and (min-width: 992px){
            position: absolute;
            left: 45%;
            top: 1145px;
            transform: translate(-45%, 0);
        }

        @media all and (min-width: 1200px){
            position: absolute;
            left: 44%;
            top: 1185px;
            transform: translate(-44%, 0);
        }

        @media all and (min-width: 1400px){
            position: absolute;
            left: 48%;
            top: 1355px;
            transform: translate(-48%, 0);
        }
    }

    .fa-circle-dot.four{
        font-size: 30px;
        color: $verde-acqua;
        position: absolute;
        top: 2380px;
        left: 16px;

        @media all and (min-width: 500px){
            top: 2380px;
        }

        @media all and (min-width: 768px){
            position: absolute;
            left: 49%;
            top: 1645px;
            transform: translate(-49%, 0);
        }

        @media all and (min-width: 992px){
            position: absolute;
            left: 45%;
            top: 1580px;
            transform: translate(-45%, 0);
        }

        @media all and (min-width: 1200px){
            position: absolute;
            left: 44%;
            top: 1615px;
            transform: translate(-44%, 0);
        }

        @media all and (min-width: 1400px){
            position: absolute;
            left: 48%;
            top: 1885px;
            transform: translate(-48%, 0);
        }
    }

    h4{
        color: $blu-scuro;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    h2{
        font-size: 35px;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
        width: 60%;
        margin: 0 auto 80px;

        @media all and (max-width: 992px){
            font-size: 30px;
            line-height: 35px;
            width: 100%;
        }
        
        @media all and (max-width: 768px){
            font-size: 25px;
        }
    }

    h3{
        color: $verde-acqua;
        font-size: 25px;
        letter-spacing: 3px;
        font-weight: 600;
        margin-top: 40px;
        margin-bottom: 60px;
        margin-left: 50px;

        @media all and (min-width: 769px){
            position: relative;
            left: 180px;
        }

        @media all and (min-width: 992px){
            position: relative;
            left: 200px;
        }

        @media all and (min-width: 1400px){
            position: relative;
            left: 330px;
        }
    }

    h3.reverse{
        @media all and (min-width: 769px){
            position: relative;
            left: 460px;
            margin-bottom: 30px;
        }

        @media all and (min-width: 992px){
            position: relative;
            left: 510px;
            margin-bottom: 30px;
        }

        @media all and (min-width: 1400px){
            position: relative;
            left: 650px;
            margin-bottom: 60px;
        }
    }

    #discipline{

        @media all and (min-width: 769px){
            left: 120px;
        }

        @media all and (min-width: 992px){
            left: 150px;
        }

        @media all and (min-width: 1400px){
            position: relative;
            left: 280px;
        }
    }

    .step{
        margin-left: 50px;
        .img-container{
        width: 450px;

            @media all and (min-width: 769px){
                width: 400px;
            }

            @media all and (min-width: 1400px){
                width: 600px;
            }

            img{
                border-radius: 5px;
                margin-bottom: 30px;
                width: 100%;
            }
        }

        .step-info{
            @media all and (min-width: 769px){
                padding-left: 90px;
                flex-basis: 65%;
            }
            
            h5{
                font-size: 25px;
                margin-bottom: 30px;
                font-weight: 600;
            }

            .step-text{
                font-weight: 200;
                opacity: 0.7;
                width: 450px;
                font-size: 18px;
                line-height: 37px;

                @media all and (min-width: 769px){
                    width: 100%;
                }
            }
        }

        .step-info.reverse{

            @media all and (min-width: 769px){
                padding: 0;
                flex-basis: 35%;
                margin-right: 130px;
                text-align: end;
            }
        }
    
    }

    .step.reverse{
        @media all and (min-width: 679px){
            margin-right: 20px;
        }

        @media all and (min-width: 769px){
            margin-right: 20px;
        }

        @media all and (min-width: 992px){
            margin-right: 100px;
        }

        @media all and (min-width: 1200px){
            margin-right: 160px;
        }

        @media all and (min-width: 1400px){
            margin-right: 0;
        }
    }

    
}


</style>