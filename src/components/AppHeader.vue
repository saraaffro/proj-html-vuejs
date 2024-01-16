<!-- sara -->
<script>
export default{
    name: 'AppHeader',
}


</script>

<template>
    <header>
        <div class="container-xl container-fluid-lg d-flex justify-content-between align-items-center">
            <div class="logo-container">
                <img src="../../public/dark-logo.png" alt="logo">
            </div>
            <nav>
                <router-link class="nav-item d-none d-xl-inline" :to="{name: 'home'}">Home</router-link>
                <router-link class="nav-item d-none d-xl-inline" :to="{name: 'starthere'}">Start Here</router-link>
                <router-link class="nav-item d-none d-xl-inline" :to="{name: 'course'}">Courses</router-link>
                <i class="far fa-user-circle nav-icon d-none d-md-inline"></i>
                
                <!-- searchbar -->
                <input class="d-none d-md-inline" type="search" placeholder="Search...">
                <button class="search d-none d-md-inline" type="submit"><i class="fas fa-search"></i></button>
                
                <!-- off canvas hamburger menu -->
                <button class="hamb-menu d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fas fa-bars"></i></button>
                <div class="offcanvas offcanvas-end my_offcanvas" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <span class="offcanvas-title" id="offcanvasExampleLabel">
                            <img src="../../public/dark-logo.png" alt="logo">
                        </span>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="menu-int">
                            <router-link class="nav-int-item" :to="{name: 'home'}">Home</router-link>
                            <router-link class="nav-int-item" :to="{name: 'starthere'}">Start Here</router-link>
                            <router-link class="nav-int-item" :to="{name: 'course'}">Courses</router-link>
                        </div>
                        
                    </div>
                </div>

                <!-- dropdown searchbar -->
                <button class="hamb-menu d-md-none" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-ellipsis-h"></i></button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="my_dropdown">
                                <i class="far fa-user-circle nav-icon"></i>
                                    
                                <!-- searchbar -->
                                <input  type="search" placeholder="Search...">
                                <button class="search" type="submit"><i class="fas fa-search"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
    </header>
    


    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partial/variables' as *;

header{
    height: 80px;
    position: fixed;
    left: 0;
    right: 0;
    padding: 20px 0;
    background-color: $bianco;

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
        font-size: 18px;

        &:hover{
            color: $verde-acqua;
        }
    }

    input{
        border-radius: 5px 0 0 5px;
        border: none;
        background-color: #f5f5f5;
        padding: 10px 20px;
        margin-left: 15px;
        color: #b4b4b4;
        font-weight: 200;
        width: 170px;

        // non cambia colore al focus
        &:focus{
            border: 1px solid $verde-acqua;
            background-color: $bianco;
        }
    }

    .search{
        border: none;
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 0 5px 5px 0; 
        color: $verde-acqua;
        width: 40px;

        &:hover{
            background-color: $verde-acqua;
            color: $bianco;
        }
    }

    .hamb-menu{
       padding-left: 20px;
       font-size: 20px;
       background-color: $bianco;
       border: none;

       &:hover{
        color: $verde-acqua;
       }
    }

    .my_offcanvas{
        .offcanvas-header{
            height: 80px;
            

            .offcanvas-title{
            width: 150px;
            margin-left: 20px;

                img{
                    width: 100%;
                }
            }

            .btn-close{
                opacity: 1;
                font-size: 20px;
            }
        }

        .offcanvas-body{
            background-image: url('../../public/mobile-bg.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            padding: 0;

            .menu-int{
                background-color: #3f3a64;
                opacity: 0.9;
                width: 100%;
                height: 100%;
                padding: 20px 40px;
                .nav-int-item{
                    display: block;
                    color: $bianco;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.327);
                    padding: 20px 0;
                    font-weight: 300;
                }
            }
        }
    }
}

</style>