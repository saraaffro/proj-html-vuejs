<!-- andrea -->
<script>
    export default{
        name: "FormEmail",
    }
</script>

<template>
 <div class="container-fluid space">
    <div class="container">
        <div class="title text-center py-4">
            <strong class="subscribe">Subscribe<span class="newsletter"> Newsletters</span></strong>
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
        padding: 100px 0;
    }

    .subscribe{
        font-size: 34px;
        line-height: 1.42em;
        color: #3F3A64;

        .newsletter{
            color: $verde-acqua;
        }

    }

    p{
        color: rgb(180, 168, 168);
        font-weight: 400;
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

        // non cambia colore al focus
        &:focus{
            border: 1px solid $verde-acqua;
            background-color: $bianco;
        }
    }

    button{ 
        border: none;
        background-color: $verde-acqua;
        padding: 10px;
        border-radius: 0 5px 5px 0; 
        color: $bianco;
        width: 90px;
        transition: 0.5s ease-in-out;

        &:hover{
            background-color: $blu-scuro;
            color: $bianco;
        }
    }

    .mail{
        padding-top: 50px;
    }

</style>