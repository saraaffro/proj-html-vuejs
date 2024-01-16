<script>
export default {
    name: "StepToSuccess",
}
</script>

<template>
    <section class="container-xl container-fluid-lg">
        <h4>FOUR MAJOR STEPS TO SUCCESS</h4>
        <h2>Best chances for expanding your success to the max</h2>

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

        <h3>SCHEDULING</h3>
        <div class="step d-md-flex align-items-center">
            <div class="img-container">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-02.jpg" alt="scheduling img">
            </div>
            <div class="step-info">
                <h5>#2 Flexible schedule & environment</h5>
                <p class="step-text">Taking an online course also means that you don’t have to commute to class, which means less time spent on the bus and more study time sitting on your couch, the sound of a crackling fireplace in the background. You no longer have to worry about missing an important class!</p>
            </div>
        </div>

        <h3>SELF-DISCIPLINE</h3>
        <div class="step d-md-flex align-items-center">
            <div class="img-container">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-03.jpg" alt="self-discipline img">
            </div>
            <div class="step-info">
                <h5>#3 Self-discipline & responsibility</h5>
                <p class="step-text">Who says that having to be more self-disciplined is a disadvantage? It is true that studying online requires more time-management skills, because you will spend a lot of time on your own without someone physically close to keep you focused on deadlines.</p>
            </div>
        </div>

        <h3>INVESTMENT</h3>
        <div class="step d-md-flex align-items-center">
            <div class="img-container">
                <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-timeline-photo-04.jpg" alt="investment img">
            </div>
            <div class="step-info">
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
        margin: 0 auto;

        @media all and (max-width: 992px){
            font-size: 27px;
            line-height: 35px;
            width: 65%;
        }
        
        @media all and (max-width: 768px){
            font-size: 22px;
            width: 80%;
        }
    }

    h3{
        color: $verde-acqua;
        font-size: 25px;
        letter-spacing: 3px;
        font-weight: 600;
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .img-container{
        width: 450px;

        @media all and (min-width: 769px){
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

    
}


</style>