<!-- andrea -->
<script>
import TeamHomeSlider from './TeamHomeSlider.vue'

export default {
name: "TeamHome",

components:{
    TeamHomeSlider,
},

methods:{
    reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {

        // La linea di codice let windowHeight = window.innerHeight; serve a ottenere l'altezza della finestra di visualizzazione del browser, ovvero la quantità di spazio verticale disponibile sulla pagina web visibile allo spettatore
        let windowHeight = window.innerHeight;

        // getBoundingClientRect().top restituisce la distanza tra il bordo superiore dell'elemento e il bordo superiore della finestra di visualizzazione. 
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }

},
    
},

// window.addEventListener(event, callback): Registra un gestore per un determinato evento sulla finestra, ad esempio "scroll".
mounted(){
    window.addEventListener("scroll", this.reveal);
},
}
</script>

<template>
    <div class="container-fluid bg ">
        <div class="container reveal">
            <div class="title text-center">
            <h6 class="little-title ">GREAT WORDS ABOUT MAXCOACH</h6>
            <h2 class="big-title">Our <span class="top">top learners'</span> verbatim</h2>
        </div>
    
        <!-- SLIDER CREATO IN TeamHomeSlider -->
        <TeamHomeSlider/>

        <div class="sub-title text-center">
            <h3 class="sub-title sm">Start today for getting <span class="top">Online Certification</span> </h3>
            <h2>You can be your own guiding star with our help!</h2>
        </div>

        <div class="text-center py-4">
            <button class="btn">Get started now</button>
        </div>
        </div>

    
    </div>
       
</template>

<style lang="scss" scoped>
@import '../styles/partial/variables';

.bg{
    background-color: #f8f8f8;
}

.title{
    padding-top: 100px;
}
.little-title{
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 2px;
    color: #8C89A2;
}

h2{
    font-size: 34px;
    line-height: 1.17em;
    color: #3F3A64;
}

.top{
    color: $verde-acqua;
    font-weight: 200;
    }

.big-title{
    font-size: 35px;
    color: #3F3A64;
    font-weight: 600;
    letter-spacing: 1px;
}

.sub-title.sm{
    font-size: 25px;
    color: $blu-scuro;
    padding-bottom: 0px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.sub-title h2{
    font-size: 35px;
    font-weight: 600;
}

.btn{
    background-color: $verde-acqua;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    color: white;
    margin-bottom: 70px;
    transition: background-color 0.5s ease-in-out;
    width: 250px;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        background-color: $blu-scuro; 
        color: white;
    }
}

.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;

}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
    
</style>