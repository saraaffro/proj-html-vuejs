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
        <img :src="card.img" alt="Course Image" />
        <h4>{{ card.type }}</h4>
        <p>{{ card.price }}</p>
        <p>{{ card.lessons }}</p>
        <p>{{ card.students }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

</style>