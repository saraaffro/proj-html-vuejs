<script>
export default {
    name: "TeamMembers",
}
</script>

<template>
    <section>
        <h4>GET YOURSELF A <strong>MAXCOACH</strong> ID?</h4>
        <h2>Take your interest and register an online class today to enjoy life fully</h2>

        <button class="download d-flex justify-content-center ">Get started for free</button>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

section{
    padding-top: 60px;

    h4{
        color: $blu-scuro;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 1px;
    }

    h2{
        font-size: 35px;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
        width: 80%;
        margin: 0 auto;
        
        @media all and (max-width: 768px){
            font-size: 26px;
            width: 100%;
            line-height: 40px;
        }
    }

    .download{
        background-color: $verde-acqua;
        border: none;
        padding: 15px 30px;
        border-radius: 5px;
        color: white;
        transition: background-color 0.3s ease-in-out;
        width: 300px;
        font-size: 13px;
        font-weight: 500;
        margin: 40px auto;

        &:hover {
            background-color: $blu-scuro; 
        }
    }
}


</style>