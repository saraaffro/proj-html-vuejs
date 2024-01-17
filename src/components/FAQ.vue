<script>
export default {
    name: "FAQ",
    data() {
        return{
            faqList: [
                { 
                question: 'How to register online?', 
                answer: 'Enrolling in an online class is easy. At MaxCoach, we serve several categories of online learners. Select the student category that you identify with to get started.', 
                expanded: false 
                },
                { 
                question: 'How do I customize my account?', 
                answer: 'In order to customize your account’s information, just log in with the provided passcode and change the info.', 
                expanded: false 
                },
                {
                question: 'How do you process my information?', 
                answer: 'Your data will be kept private and secure on our database. No illegal use without prior notice.', 
                expanded: false 
                },
                {
                question: 'How do I contact support?', 
                answer: 'You can contact our help center or any contact method (phone call, email or appear at our office) to get help.', 
                expanded: false 
                },
                {
                question: 'How to cancel my membership?', 
                answer: 'You just need to submit a membership termination request, we’ll proceed within 24 hours.', 
                expanded: false 
                },
                {
                question: 'How do I get a discount?', 
                answer: 'Learners can get a discount by coupon or voucher. If you have one, fill in the code box before making any payment.', 
                expanded: false 
                },
            ]
        }
    },
    methods: {
        showAnswer(index) {
            this.faqList[index].expanded = !this.faqList[index].expanded;
        }
    }
}
</script>

<template>
    <section>
        <h4>SUCCEED WITH <strong>MAXCOACH</strong></h4>
        <h2>Frequently asked questions</h2>

       <div class="container-xl container-fluid-lg row ms-1">
            <div v-for="(faq, index) in faqList" :key="index" class="faq-item col-12 col-md-6">
                <div class="question" :class="faq.expanded ? 'active' : ''" @click="showAnswer(index)">
                    {{ faq.question }}
                    <i class="fa-solid" :class="faq.expanded ? 'fa-circle-minus' : 'fa-circle-plus'"></i>
                </div>
                <div v-if="faq.expanded" class="answer">
                    {{ faq.answer }}
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partial/variables' as *;

section{
    padding: 60px 0;

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
        margin: 0 auto 60px;
        
        @media all and (max-width: 768px){
            font-size: 26px;
        }
    }

    .faq-item{
        margin-bottom: 15px;
    }
    .question{
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 15px;
        margin: 0 5px;
        color: $grigio;
        font-size: 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color 0.5s ease-in;

        &:hover{
            background-color: $verde-acqua;
            color: white;
            border: none;
        }

        &:hover .fa-solid{
            color: white;
        }

        .fa-solid{
            font-size: 20px;
        }
    }

    .answer{
        border-radius: 0 0 5px 5px;
        padding: 25px;
        color: $grigio;
        font-size: 15px;
        font-weight: 100;
        line-height: 25px;
        width: 98%;
        margin: 0 auto;
        background-color: $bianco;
        box-shadow: 0 18px 40px rgba(51, 51, 51, 0.1);
    }

    .active{
        background-color: $verde-acqua;
        color: white;
        border: none;
        border-radius: 5px 5px 0 0;
        
    }
}


</style>