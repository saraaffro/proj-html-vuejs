<script>
export default {
    name: "NotFound"
}
</script>

<template>
    <section>
        <div>
        <h1>4<i class="fa-regular fa-face-frown"></i>4</h1>
        <h2>Looks like you are lost.</h2>
        <p>It looks like nothing was found at this location. You can go to homepage </p>
        <button>
            <i class="fa-solid fa-house"></i>
            <router-link :to="{name: 'home'}">Homepage</router-link>
        </button>
    </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;
section{
    background-color: black;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: $bianco;
    text-align: center;

    h1{
        font-size: 180px;
        letter-spacing: 20px;
        font-weight: bold;

        .fa-regular{
            font-size: 150px;
        }
    }

    h2{
        font-size: 40px;
        margin-bottom: 40px;
        font-weight: bold;
    }

    p{
        width: 80%;
        margin: 0 auto;
        font-weight: 200;
    }

    button{
        background-color: $verde-acqua;
        border: none;
        padding: 15px 30px;
        border-radius: 5px;
        color: white;
        margin: 20px 0;
        transition: background-color 0.5s ease-in-out;

        a{
            color: $bianco;
        }

        &:hover {
        background-color: $blu-scuro; 
        }

        .fa-house{
            margin-right: 8px;
        }
    }


    
}
</style>