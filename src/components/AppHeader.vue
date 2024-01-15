<script>
export default{
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container-xl container-fluid-lg">
            bvsfbdcbhjs
            Header
            <!-- nav provvisorio -->
            <router-link class="nav-item" :to="{name: 'home'}">Home</router-link>
            <router-link class="nav-item" :to="{name: 'starthere'}">Start Here</router-link>
            <router-link class="nav-item" :to="{name: 'course'}">Courses</router-link>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.nav-item{
    margin: 0 10px;
}
</style>