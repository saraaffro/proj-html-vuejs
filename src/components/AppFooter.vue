<!-- leandro -->
<script>
export default{
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div id="bg" class="container-xl container-fluid-lg">
            <div class="flex">
                <div id="lista1">
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

                
                <div id="lista2">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="../pages/StartHere.vue">Start here</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>

                <div id="lista3">
                    <ul>
                        <li><a href="#">Success story</a></li>
                        <li><a href="../pages/Courses.vue">Courses</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>

                <div id="lista4">
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
    </footer>
   
</template>

<style lang="scss" scoped>

    #bg{
        background-color: rgb(240, 240, 240);
        padding: 4% 10% 4% 1.5%;
        display: flex;
        flex-direction: column;
    }
    .flex{
        display: flex;
        justify-content: space-between;
    }

    h4{
        margin-bottom: 15px;
    }

    ul{
        list-style-type: none;
        margin-left: -31px;
    }

    li{
        margin-bottom: 10px;
        color: #696969;
    }

    a{
        color: #696969;

        &:hover{
            color: #20AD96;
        }
    }

    .fa-brands{
        font-size: 25px;
        margin-right: 10%;
        margin-top: 20px;
        color: rgb(165, 165, 165);
        
        &:hover{
            color: #20AD96;
        }
    }

    #lista3{
        margin: 44px -10% 0 -10%;
    }

    span{
        color: #696969;  
    }

    #center{
        margin: 50px auto 0;
    }
</style>