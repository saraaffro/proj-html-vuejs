<script>
export default {
    name: "FAQ",
}
</script>

<template>
    <section>
        <h4>SUCCEED WITH <strong>MAXCOACH</strong></h4>
        <h2>Frequently asked questions</h2>
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
        margin-bottom: 25px;
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
        }
    }
}


</style>