<!-- andrea -->
<script>
export default {
name: "CardPrice",

props:{
    card: Object
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

<!-- CARD GENERATE TRAMITE V-FOR E PROPS (I DATA SONO NEL COMPONENTE PRICE) -->
<template>
    <div class="card reveal">
        <div class="row">
            <div class="col-5">
                <div class="image">
                    <img :src="card.img" alt="Course Image" />
                </div>
            </div>

            <div class="col-7">
                <div class="text">
                    <h4 class="price"><strong>{{ card.price }}</strong></h4>
                    <p><strong>{{ card.type }}</strong></p>
                    <div class="max-stud-less">
                        <span class="lessons"><i class="fa-regular fa-newspaper mx-2"></i>{{ card.lessons }}</span>
                        <span class="student mx-3"><i class="fa-regular fa-user mx-2"></i>{{ card.students }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;


// ALL'HOVER DELLA CARD
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    margin: 10px 0;
    width: 600px;
    background-color: transparent;
    border: none;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    margin-top: 50px;

    &:hover{
        background-color: white;
        color: $verde-acqua;
    }

    img{
        width: 170px;
        height: 170px;
        border-radius: 50%;
        object-fit: cover;  
        margin-left: 20px;
    }

    .text{
        margin-top: 20px;
    }

    .price{
        color: $verde-acqua;
    }

    .max-stud-less{
        color: $grigio;
        font-weight: 200;
        font-size: 14px;
    }
    
    p{
        font-size: 20px;
        color: $blu-scuro;
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