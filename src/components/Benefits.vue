<!-- andrea -->
<script>
    export default{
        name: "Benefits",


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


<!-- colonne Benefit -->
<template>
    <div class="benefit container-xl reveal">
      <div class="title mt-4">
        <span class="maxcoach">MAXCOACH AVAILABLE COURSES</span>
        <h2 class="mt-4">Access <span class="color-smart">Smart Tutoring</span> Program For Benefits.</h2>
      </div>

      <!-- COL  1-->
      <div class="container-benefit">
        <div class="row">
        <div class="col-12 col-md-4">
          <div class="course-card">
            <img src="/public/home-2-image-box-01.png" alt="image box 1">
            <h4 class="mt-4">Customize Preferences</h4>
            <p class="mt-3">Learners are given the right to arrange and customize their study schedule and timetable based on preferences.</p>
            <a href="#">Start here <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
  
      <!-- COL 2 -->
        <div class="col-12 col-md-4">
          <div class="course-card">
            <img src="/public/about-us-02-image-box-02.png" alt="image box 2">
            <h4 class="mt-4">Cloud Storage</h4>
            <p class="mt-3">You can store online lessons via online cloud or download to your device and revise lessons on the way.</p>
            <a href="#">Get Free Quote <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
  
        <!-- COL 3 -->
        <div class="col-12 col-md-4">
          <div class="course-card">
            <img src="/public/home-2-image-box-03.png" alt="image box 3">
            <h4 class="mt-4">Multimedia Channels</h4>
            <p class="mt-3">We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.</p>
            <a href="#">Start now <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  </template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

.benefit{
  margin-top: 100px;
}
.container-benefit {
  margin: 100px 0;

  // ANIMAZIONE CARD
  .course-card {
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out; 

    &:hover {
      transform: scale(1.05); 
      
      a {
        color: $verde-acqua;
        
        &:before {
          transform: scaleX(1);
        }
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    h4 {
      margin-top: 1.5rem;
    }

    p {
      margin-top: 1rem;
    }


    // ANIMAZIONE UNDERLINE
    a {
      color: $grigio;
      position: relative;
      text-decoration: none;
      display: inline-block;
      font-weight: 600;
      transition: color 0.3s ease-in-out;

      &:before {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0.5px;
        background-color: rgb(216, 206, 206);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
      }
    }
  }
}

.title {
  text-align: center;
}

.color-smart {
  color: $verde-acqua;
  font-weight: 200;
}

.maxcoach{
  color: #c6c4d1;
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
