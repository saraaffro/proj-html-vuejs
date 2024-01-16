<!-- sara -->
<script>
export default{
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <div class="container-xl container-fluid-lg d-flex justify-content-between align-items-center">
            <div class="logo-container">
                <img src="../../public/dark-logo.png" alt="logo">
            </div>
            <nav>
                <router-link class="nav-item" :to="{name: 'home'}">Home</router-link>
                <router-link class="nav-item" :to="{name: 'starthere'}">Start Here</router-link>
                <router-link class="nav-item" :to="{name: 'course'}">Courses</router-link>
                <i class="far fa-user-circle nav-icon"></i>
                <!-- searchbar -->
                    <input type="search" placeholder="Search...">
                    <button type="submit"><i class="fas fa-search"></i></button>
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

    .logo-container{
        width: 150px;

        img{
            width: 100%;
        }
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

    .nav-icon{
        color: black;
        margin-left: 10px;

        &:hover{
            color: $verde-acqua;
        }
    }

    input{
        border-radius: 5px 0 0 5px;
        border: none;
        background-color: #f5f5f5;
        padding: 10px;
        margin-left: 15px;
        color: #b4b4b4;
        font-weight: 200;
        width: 35%;

        // non cambia colore al focus
        &:focus{
            border: 1px solid $verde-acqua;
            background-color: $bianco;
        }
    }

    button{
        border: none;
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 0 5px 5px 0; 
        color: $verde-acqua;
        width: 8%;

        &:hover{
            background-color: $verde-acqua;
            color: $bianco;
        }
    }
}

</style>