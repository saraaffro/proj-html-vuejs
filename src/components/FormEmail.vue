<!-- andrea -->
<script>
    export default{
        name: "FormEmail",

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


<!-- EMAIL INPUT + TITOLO -->
<template>
 <div class="container-fluid space">
    <div class="container reveal">
        <div class="title text-center py-4">
            <strong class="subscribe">Subscribe</strong><span class="newsletter"> Newsletters</span>
        </div>
        <p class="text-center">Enter your email address to register to our newsletter subscription
        delivered on a regular basis!</p>
        <div class="mail text-center">
            <input type="email" placeholder="Enter your email">
            <button>Subscribe</button>
        </div>
    </div>
 </div>
</template>

<style lang="scss" scoped>
@import '../styles/partial/variables';

    .space{
        padding: 60px 0 100px 0;
    }

    .subscribe{
        font-size: 34px;
        line-height: 1.42em;
        color: #3F3A64;
        font-weight: 600;
    }

    .newsletter{
            color: $verde-acqua;
            font-size: 34px;
            font-weight: 200;
        }

    p{
        color: $grigio;
        font-weight: 300;
        font-size: 20px;
        width: 50%;
        margin: 0 auto;
    }

    input{
        border-radius: 5px 0 0 5px;
        border: none;
        background-color: #f5f5f5;
        padding: 10px 20px;
        margin-left: 15px;
        color: #b4b4b4;
        font-weight: 200;
        width: 400px;
        height: 50px;
        outline: none;

        // non cambia colore al focus
        &:focus{
            border: 1px solid $verde-acqua;
            background-color: $bianco;
        }
    }

    button{ 
        border: none;
        background-color: $verde-acqua;
        padding: 14px;
        border-radius: 0 5px 5px 0; 
        color: $bianco;
        width: 100px;
        transition: 0.5s ease-in-out;
        font-size: 13px;
        height: 50px;
        font-weight: 500;

        &:hover{
            background-color: $blu-scuro;
            color: $bianco;
        }
    }

    .mail{
        padding-top: 50px;
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

    @media all and (max-width: 568px) {
    
        input{
            width: 200px;
        }
   
    }


</style>