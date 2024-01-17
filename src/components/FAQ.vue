<script>
export default {
    name: "FAQ",
}
</script>

<template>
    <section>
        <h4>SUCCEED WITH <strong>MAXCOACH</strong></h4>
        <h2>Frequently asked questions</h2>

        <!-- faq bootstrap -->
        <div class="container-fluid container-xl">
            <div class="accordion row" id="accordionExample">
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to register online?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Enrolling in an online class is easy. At MaxCoach, we serve several categories of online learners. Select the student category that you identify with to get started.
                        </div>
                    </div>
                </div>
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I customize my account?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            In order to customize your account’s information, just log in with the provided passcode and change the info.
                        </div>
                    </div>
                </div>
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I process my information?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Your data will be kept private and secure on our database. No illegal use without prior notice.
                        </div>
                    </div>
                </div>
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I contact support?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            You can contact our help center or any contact method (phone call, email or appear at our office) to get help. 
                        </div>
                    </div>
                </div>
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I cancel my membership?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            You just need to submit a membership termination request, we’ll proceed within 24 hours.
                        </div>
                    </div>
                </div>
                <div class="accordion-item col-12 col-md-6">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How can I get a discount?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Learners can get a discount by coupon or voucher. If you have one, fill in the code box before making any payment.
                        </div>
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

    h4{
        color: $blu-scuro;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 25px;
        letter-spacing: 1px;
    }

    h2{
        font-size: 35px;
        text-align: center;
        line-height: 50px;
        font-weight: 700;
        width: 80%;
        margin: 0 auto 30px;
        
        @media all and (max-width: 768px){
            font-size: 26px;
        }
    }

    .accordion-item{
        margin-bottom: 20px;
    }
}


</style>