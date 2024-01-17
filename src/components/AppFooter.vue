<!-- leandro -->
<script>
export default{
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div id="bg" class="container-fluid-lg">
            <div class="container-xl">
                <div class="flex row">
                    <div id="lista1" class="col-12 col-lg-6">
                        <h4>Address</h4>
                        <ul>
                            <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                            <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                            <li><a href="#">support@maxcoach.com</a></li>
                            <li>
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div id="lista2" class="col-6 col-md-4 col-lg-2">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="/start-here">Start here</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About us</a></li>
                        </ul>
                    </div>

                    <div id="lista3" class="col-6 col-md-4 col-lg-2">
                        <ul>
                            <li><a href="#">Success story</a></li>
                            <li><a href="/Course">Courses</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>

                    <div id="lista4" class="col-12 col-md-4 col-lg-2">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">Membership</a></li>
                            <li><a href="#">Purchase guide</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Terms of services</a></li>
                        </ul>
                    </div>
                </div>

                <div id="center">
                    <span>© 2020 Maxcoach. All Rights Reserved</span>
                </div>
            </div>
           
        </div>
    </footer>
   
</template>

<style lang="scss" scoped>
    @use '../styles/partial/variables' as *;

    #bg{
        background-color: #f8f8f8;
        padding: 4% 1.5% 4% 0;
    }
    // .flex{
    //     display: flex;
    //     justify-content: space-between;
    //     flex-wrap: wrap;
    // }

    h4{
        margin-bottom: 15px;
        font-size: 18px;
        margin-top: 50px;
    }

    ul{
        margin-left: -31px;
    }

    li{
        margin-bottom: 15px;
        color: $grigio;
        font-size: 13px;
    }

    a{
        color: $grigio;
        transition: color 0.3s ease-in-out;

        &:hover{
            color: $verde-acqua;
        }
    }

    .fa-brands{
        font-size: 25px;
        margin-right: 25px;
        margin-top: 20px;
        color: #b1b1b1;
        transition: color 0.3s ease-in-out;
        
        &:hover{
            color: $verde-acqua;
        }
    }

    #lista3{
        margin: 90px 0 0;
    }

    span{
        color: $grigio;  
    }

    #center{
        margin: 50px 0 0 0;
        text-align: center;
    }

    .row{
        width: 100%;
    }


</style>