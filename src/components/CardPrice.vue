<!-- andrea -->
<script>
export default {
name: "CardPrice",

props:{
    card: Object
},

}
</script>

<template>
    <div class="card">
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
    }
    
    p{
        font-size: 20px;
    }
}

</style>