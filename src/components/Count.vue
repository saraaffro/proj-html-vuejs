<!-- andrea -->
<script>
    export default{
        name: "Count"
    }
</script>

<template>
    <div class="container">
        <div class="row  text-center">
            <div class="col-12 col-lg-3">

                <!-- COUNT 1 -->
                <div class="count first">
                    <strong class="whatis">Successfully trained</strong>
                    <h1 class="number">1790</h1>
                    <h6 class="number-text">ENROLLED LEARNERS</h6>
                </div>
            </div>

            <!-- COUNT 2 -->
            <div class="col-12 col-lg-3">
                <div class="count">
                    <strong class="whatis">Proudly Received</strong>
                    <h1 class="number">19</h1>
                    <h6 class="number-text">COUNTRYWIDE AWARDS</h6>
                </div>
            </div>

            <!-- COUNT 3 -->
            <div class="col-12 col-lg-3">
                <div class="count">
                    <strong class="whatis">Firmly Established</strong>
                    <h1 class="number">24</h1>
                    <h6 class="number-text">LOCAL BRANCHES</h6>
                </div>
            </div>

            <!-- COUNT 4 -->
            <div class="col-12 col-lg-3">
                <div class="count">
                    <strong class="whatis">Getting Featured on</strong>
                    <h1 class="number">1090</h1>
                    <h6 class="number-text">BLOG POSTS</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

    .count{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 400px;
        border-right:1px solid rgb(235, 227, 227);

        .number{
            font-weight: 800;
            font-size: 65px;
            color: $verde-acqua;
        }

        .whatis{
            font-size: 24px;
            line-height: 1.34em;
            color: #3F3A64;
            padding: 60px;
        }

        .number-text{
            color: #8C89A2;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 1.4em;
            letter-spacing: 2px;
            padding-top: 30px;
        }

    }

    // inserimento linea sinistra del primo count
    .first{
        border-left: 1px solid rgb(235, 227, 227);
    }

    @media (max-width: 966px) {
    
        .count {
            border-bottom: 1px solid rgb(235, 227, 227);
            margin-bottom: 20px; 
            margin: 50px 0;
            border-right: none;

        }

        .first{
            border-top: 1px solid rgb(235, 227, 227);

            // rimozione linea sinistra
            border-left: none;
        }
    }



    
</style>