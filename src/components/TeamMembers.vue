<script>
export default {
    name: "TeamMembers",
}
</script>

<template>
    <section>
        <h4>GET YOURSELF A <strong>MAXCOACH</strong> ID?</h4>
        <h2>Take your interest and register an online class today to enjoy life fully</h2>

        <button class="download d-flex justify-content-center ">Get started for free</button>

        <div class="row row-gap-2 justify-content-between">
            <div class="col-12 col-xxl-5 p-0">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-01.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Lonnie Marks</div>
                        <div class="role">Tutor</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xxl-7">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-02.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Britney Salker</div>
                        <div class="role">Educator</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 p-0">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-03.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Bronnies Wallz</div>
                        <div class="role">Alumnis</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-04.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Mia Paulo</div>
                        <div class="role">Writer</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-5">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-05.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Lina Esthers</div>
                        <div class="role">Author</div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 p-0">
                <div class="member">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-06.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Lorean McPhils</div>
                        <div class="role">Designer</div>
                    </div>
                </div>
            </div>
            <div class="col-10 col-lg-5 col-xl-4 p-0">
                <div class="member small">
                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/02/start-here-gallery-image-07.jpg" alt="img member">
                    <div class="member-info">
                        <div class="name">Anna Muray</div>
                        <div class="role">Writer</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

section{
    padding-top: 60px;
    max-width: 100%;
    overflow-x: hidden;

    h4{
        color: $blu-scuro;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 40px;
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
            width: 100%;
            line-height: 40px;
        }
    }

    .download{
        background-color: $verde-acqua;
        border: none;
        padding: 15px 30px;
        border-radius: 5px;
        color: white;
        transition: background-color 0.3s ease-in-out;
        width: 300px;
        font-size: 13px;
        font-weight: 500;
        margin: 40px auto;

        &:hover {
            background-color: $blu-scuro; 
        }
    }

    .member{
        width: 100%;
        position: relative;

        &:hover .member-info{    
            opacity: 1;
        }

        img{
            width: 100%;
            height: 500px;
            object-fit: cover;
        }

        .member-info{
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.518);
            width: 100%;
            height: 100%;
            color: $bianco;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease-in-out;  
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .name{
                font-size: 35px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .role{
                font-size: 15px;
                font-weight: 200;
            }
        }

       
    }

    .member.small{
        width: 80%;

        @media all and (min-width: 992px){
            width: 100%;
        }
    }
}
</style>