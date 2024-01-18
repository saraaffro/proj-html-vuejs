<script>

export default{
    name: "MostViewed",
}

</script>

<template>
    <div class="container-fluid bg">
        <div class="container py-5">
            <div class="row">
            <div class="col-12 col-lg-4">
                <div class="most-viewd">
                    <h6>
                        ENJOYABLE INSIGHTS
                    </h6>
                    <h3>
                        Most Viewed <span class="best">Best Blogs</span>
                    </h3>
                    <div class="blogs">
                        <p><a href="#"></a><i class="fa-solid fa-arrow-right"> </i> Become a Better Blogger: Content Planning</p>
                        <p><a href="#"></a><i class="fa-solid fa-arrow-right"> </i> Promoting Your Online Business on Pinterest</p>
                        <p><a href="#"></a><i class="fa-solid fa-arrow-right"> </i> Gamification and Game-Based Learning</p>
                        <p><a href="#"></a><i class="fa-solid fa-arrow-right"> </i> Designing an Online Course from Expert's Perspective</p>
                        <p><a href="#"></a><i class="fa-solid fa-arrow-right"> </i> Why Online Courses Are the Future of Education</p>
                    </div>
                </div>
            </div>

            <!-- CARD 1 MOST VIEWED -->
            <div class="col-12 col-lg-4">
                <div class="card">
                    <div class="image-container">
                        <img class="card-image" src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-03-480x352.jpg" alt="img most viewed">
                    </div>
                    <div class="p-3">
                        <h6>BUSINESS</h6>
                        <span class="text-card">Ten Benefits Of Rentals That May Change Your Perspective</span>
                        <div class="pt-3">
                            <span><i class="fa-regular fa-calendar"></i><span>Dec 28, 2020</span></span>
                            <span><i class="fa-regular fa-eye"></i><span>3,012 views</span></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD 2 MOST VIEWED -->
            <div class="col-12 col-lg-4">
                <div class="card">
                    <div class="image-container">
                        <img class="card-image" src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-02-480x352.jpg" alt="img most viewed">
                    </div>
                   <div class="p-4">
                        <h6>BUSINESS</h6>
                        <span class="text-card">10 Things Successful Mompreneurs Do Different</span>
                        <div class="pt-3">
                            <span><i class="fa-regular fa-calendar"></i><span>Dec 28, 2020</span></span>
                            <span><i class="fa-regular fa-eye"></i><span>2,644 views</span></span>
                        </div> 
                   </div>
                  
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

    .bg{
        background-color: $beige;
    }

    h6{
        font-size: 15px;
        font-weight: 300;
        text-transform: uppercase;
        line-height: 2em;
        letter-spacing: 2px;
        color: #8C89A2;
        padding-top: 100px;
    }

    h3{
        font-size: 34px;
        line-height: 1.42em;
        color: #3F3A64;
        padding-bottom: 20px;
        font-weight: 600;

        .best{
            color: $verde-acqua;
            font-weight: 200;
        }
    }


    // ANIMAZIONE ARROW
    .blogs{
        color: #3F3A64;
        padding-bottom: 100px;

        p{
            transition: background-color 0.3s ease, color 0.3s ease;
            cursor: pointer;
            font-weight: 600;

            &:hover{
                color: $verde-acqua;
            }

            i{
                transition: transform 0.3s ease;
                padding-right: 10px;

                &:hover{
                    transform:translateX(5px);
                }

                &:hover:before {
                color: $verde-acqua;
            }
            }
        }
        
    }

    .blogs p:hover i {
        transform: translateX(5px);
    }

    // ALL' HOVER DELLA CARD
    .card {
    width: 350px;
    height: 450px;
    border: none;
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0px 18px 65px -42px;
    cursor: pointer;
    margin-top: 95px;

    h6{
        padding-top: 0;
    }

    .text-card {
        color: #3F3A64;
        font-weight: 700;
        transition: 1s ease-in-out;
        font-size: 20px;
    }

    span {
        padding-right: 10px;
        color: rgb(146, 140, 140);
        font-weight: 200;
        font-size: 13px;
    }

    i {
        padding-right: 5px;
    }

    &:hover {
        
        .text-card {
            color: $verde-acqua;
        }

        .card-image {
            transform: scale(1.1);
        }

    }

    .image-container {
        .card-image {
            width: 100%;
            transition: transform 0.8s ease-in-out;
        }
    }
}
</style>