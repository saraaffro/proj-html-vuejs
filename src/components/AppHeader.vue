<!-- sara -->
<script>
export default{
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container-xl container-fluid-lg d-flex justify-content-between align-items-center">
            <h1>LOGO</h1>
            <nav>
                <router-link class="nav-item" :to="{name: 'home'}">Home</router-link>
                <router-link class="nav-item" :to="{name: 'starthere'}">Start Here</router-link>
                <router-link class="nav-item" :to="{name: 'course'}">Courses</router-link>
                <i class="fas fa-user-circle nav-item"></i>
            </nav>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partial/variables' as *;

header{
    height: 100px;
    position: fixed;
    left: 0;
    right: 0;
    padding: 20px 0;
}
.nav-item{
    margin: 0 10px;
    color: black;
    font-weight: 200;

    &:hover{
        color: $verde-acqua;
        text-decoration: underline;
    }
}
</style>