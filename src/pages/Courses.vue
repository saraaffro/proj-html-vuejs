<!-- leandro -->
<script>
import CardCourses from '../components/CardCourses.vue'

export default {
    name: "Courses",

    components:{
        CardCourses
    },

    data() {
        return {
            items: ["Overview", "Curriculum", "Instructor", "Review"],
            activeIndex: 0
        };
    },

    methods: {
        activateItem(index) {
        // Attiva la classe 'active' sull'elemento cliccato
        this.activeIndex = index;
        }
    }
}

</script>

<template>
    <div id="bg" class="container-xl container-fluid-lg g-0">
        <a href="/">Home</a>
        <span id="slash">/</span>
        <a href="/course">Courses</a>

        <div>
            <h1>Customer-centric Info-Tech Strategies</h1>
        </div>

        <div id="container_list">
            <ul>
                <!-- visualizzazione item in li con applicazione classe active all'elemento cliccato-->
                <li v-for="(item, index) in items" :key="index" @click="activateItem(index)" :class="{ active: activeIndex === index }">
                    {{ item }}
                </li>
            </ul> 
        </div>

        <!-- visualizzazione testo correlato all'elemento tramite condizione: Overview-->
        <div class="container_page" v-if="activeIndex === 0">

            <h2>Course Description</h2>
            <p>Now more than ever, corporations are investing heavily in IT. The quality of these investments affects the daily work of millions.</p>
            <p>Yet it&apos;s not uncommon to see industry surveys where the failure rates for IT projects is over 50%. It&apos;s possible to do better and it&apos;s possible to do so consistently. Use the Business Model Canvas to focus your company strategy and facilitate buy-in from stakeholders.</p>

            <div id="container_artist">
                <img id="artist" src="https://i.ytimg.com/vi_webp/m-X1ExlQ9uE/maxresdefault.webp" alt="img">
                <img id="icon_play" src="/icon-youtube-play.png" alt="icon">
            </div>

            <p>In this two-week course, we&apos;ll step through major challenges within corporate IT and how to address them with the disciplined use of design thinking, Lean Startup, and agile as a team framework.</p>
            <p>Translate your work on the Canvas to specific charters in IT. Rapidly prototype strategically-aligned processes for implementation within your IT infrastructure. How do you define a customer-centric strategy you can actually execute? To do strategic IT, you&apos;ve got to have a strategy! Ideally, you need one that&apos;s easy to understand and use as a clear basis for action. </p>
            <p>That&apos;s what you&apos;ll learn in this course.</p>

            <h2>A Short Description</h2>
            <p>A customer-centric way of doing business is a way that provides a positive customer experience before and after the sale in order to drive repeat business, enhance customer loyalty and improve business growth.</p>
            <p>But, a customer-centric company is more than a company that offers good service. Both Amazon and Zappos are prime examples of brands that are customer-centric and have spent years creating a culture around the customer and their needs. Their commitment to delivering customer value is genuine – In fact, Zappos is happy to fire employees if they do not fit within their customer-centric culture!</p>
            <p>But, how important is being customer-centric? The good news is that&apos;s becoming very important! Econsultancy recently asked what the most important characteristic is in order to establish a truly “digital-native” culture. The answer to that question and leading the responses with 58% was to be customer-centric. </p>
            <p>Enroll in this course to find out.</p>
        </div>

        <!-- visualizzazione testo correlato all'elemento tramite condizione : Curriculum -->
        <div class="container_page" v-if="activeIndex === 1">
            <!-- tabella 1 -->
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td colspan="4"><h4>Change simplification</h4>
                        <span class="title" >General introduction to customer-centric strategies</span></td>
                    </tr>    
        
                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 01: Simple, attinable goals
                        </a></td>
                        <td><div class="minutes">30 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                        <td><div>
                            <a href="#"><i class="fa-solid fa-video"></i></a>
                        </div></td>
                    </tr>

                    <tr>
                        <td colspan="3"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Live meeting about Infotech Strategies
                        </a></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>
                    
                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 1: Yes or No?
                        </a></td>
                        <td><div class="questions">3 questions</div></td>
                        <td><div class="minutes">15 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 2: A simple simulation game
                        </a></td>
                        <td><div class="questions">0 question</div></td>
                        <td><div class="minutes">50 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 02: A/B Testing
                        </a></td>
                        <td><div class="minutes">2 hours</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 3: Role-play game</a></td>
                        <td><div class="questions">1 question</div></td>
                        <td><div class="minutes">1 hour</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 4: Short Interview
                        </a></td>
                        <td><div class="questions">9 questions</div></td>
                        <td><div class="minutes">30 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 03: Wrap up about A/B testing
                        </a></td>
                        <td><div class="minutes">30 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 5: 15 mins of Yes/No questions
                        </a></td>
                        <td><div class="questions">3 questions</div></td>
                        <td><div class="minutes">10 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Quiz 6: Quick answers
                        </a></td>
                        <td><div class="questions">0 question</div></td>
                        <td><div class="minutes">10 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>
                </tbody>
            </table>

                <!-- tabella 2 -->
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td colspan="4"><h4>Customer Advisory Board</h4>
                        <span class="title">Learn about the basics of Customer Advisory Board</span></td>
                    </tr>    
        
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 04: Customer Advisory Board
                        </a></td>
                        <td><div class="minutes">30 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 05: The role of Customer Advisory Board
                        </a></td>
                        <td ><div class="minutes">45 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>
                    
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Lesson 06: Customer Advisory Board Institutions
                        </a></td>
                        <td><div class="minutes">50 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Mid-term test: 60-min writing test
                        </a></td>
                        <td><div class="questions">5 questions</div></td>
                        <td><div class="minutes">1 hour</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>             
                </tbody>
            </table>

            <!-- tabella 3 -->
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td colspan="4"><h4>Feedback survey</h4>
                        <span>The major things about conducting a survey and manage feedback</span></td>
                    </tr>    
        
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 07: The importance of customer feedback
                        </a></td>
                        <td><div class="minutes">35 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 08: Customers&apos; roles
                        </a></td>
                        <td><div class="minutes">45 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>
                    
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Lesson 09: How to conduct the survey
                        </a></td>
                        <td><div class="minutes">60 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>

                    <tr>
                        <td><a href="#">
                            <i class="fa-regular fa-clock"></i>
                            Discussion: How to write good survey and poll questions?
                        </a></td>
                        <td><div class="questions">0 questions</div></td>
                        <td><div class="minutes">60 minutes</div></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>             
                </tbody>
            </table>

            <!-- tabella 4 -->
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td colspan="4"><h4>Customer Behavior Case Studies</h4>
                        <span class="title">In this section, learners will have a chance to discuss thoroughly the role of customer behaviors in business.</span></td>
                    </tr>    
        
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 1: The emergence of a new venture
                        </a></td>
                        <td><div class="minutes">60 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 2: The beginning of a new era in marketing
                        </a></td>
                        <td><div class="minutes">35 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>
                    
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 3: The epic crisis
                        </a></td>
                        <td><div class="minutes">60 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>

                    <tr>
                        <td colspan="3"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 4: The success of a small business
                        </a></td>
                        <td><div>
                            <a href="#">
                            <i class="fa-solid fa-lock"></i>
                            </a>
                        </div></td>
                    </tr>  
                    
                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 5: Start small but smart
                        </a></td>
                        <td><div class="minutes">60 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>

                    <tr>
                        <td colspan="2"><a href="#">
                            <i class="fa-regular fa-file-lines"></i>
                            Case study 6: How to deal with difficult customers?
                        </a></td>
                        <td><div class="minutes">50 minutes</div></td>
                        <td><div class="preview">Preview</div></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- visualizzazione testo correlato all'elemento tramite condizione : Instructor -->
        <div class="container_page" v-if="activeIndex === 2">
            <div id="container_instructor" class="flex">
               
                <img src="https://secure.gravatar.com/avatar/d0d504142acfde820eef2f11feea6253?s=400&d=mm&r=g" alt="img">
                
                
                <div>
                    <h3>Maggie Strickland</h3>
                    <span class="advanced">/Advanced Educator</span>
                    <p>Maggie is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others.</p>

                    <span>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </span>
                </div>
            </div>
        </div>

        <!-- visualizzazione testo correlato all'elemento tramite condizione : reviews -->
        <div class="container_page" v-if="activeIndex === 3">

            <h3>Reviews</h3>
            <!-- container_ratings -->
            <div id="container_ratings" class="flex">
                <div id="av_rating">
                    <span>Average Rating</span>
                    <!-- container white -->
                    <div id="bg_white">
                        <h1>4.50</h1>
                        <div class="container_stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span>(2 ratings)</span>
                    </div>
                </div>

                <!-- container table ratings -->
                <div id="dt_rating">
                    <span>Detailed Rating</span>

                    <table>
                        <tr>
                            <td>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </td>
                            <td><div class="line line_green"></div></td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </td>
                            <td><div class="line line_green"></div></td>
                            <td>1</td>
                        </tr>

                        <tr>
                            <td>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </td>
                            <td><div class="line"></div></td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </td>
                            <td><div class="line"></div></td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </td>
                            <td><div class="line"></div></td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- container reviews -->
            <div class="flex container_reviews">
                <div class="img-container-reviews">
                    <img src="/ednawatsonimg.jpeg" alt="img">
                </div>
                
                
                <div>
                    <div class="flex">
                        <h5>EDNAWATSON</h5>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <h6>Cover all my needs</h6>
                    <p>The course identify things we want to change and then figure out the things that need to be done to create the desired outcome. The course helped me in clearly define problems and generate a wider variety of quality solutions. Support more structures analysis of options leading to better decisions.</p>
                </div>
            </div>

            <hr>

            <div class="flex container_reviews">
                
                <div class="img-container-reviews">
                    <img class="img-review" src="/owenchristimg.jpg" alt="img">
                </div>
               
                <div>
                    <div class="flex second-review">
                        <h5>OWEN CHRIST</h5>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <h6>Engaging & Fun</h6>
                    <p>This is the third course I attend from you, and I absolutely loved all of them. Especially this one on leadership. Your method of explaining the concepts, fun, engaging and with real-world examples, is excellent. This course will help me a lot in my job, my career, and life in general, and I thank you for that. Thank you for improving the lives of many people with engaging and in-depth courses.</p>
                </div>
            </div>
        </div>
        
        <div id="relatedcourses">
            <h3>Related Courses</h3> 
            <CardCourses/> 
        </div>


    </div>


</template>

<style lang="scss" scoped>
    @use '../styles/partial/variables' as *;

    #bg{
        background-color: rgb(249, 249, 249);
        padding: 15px;
    }

    .advanced{
        font-size: 14px;
        color: #7e7e7e;
        margin: 10px 0 0;
    }

    .title{
        font-size: 14px;
        font-style: italic;
    }

    #slash{
        margin: 0 10px;
    }
    
    a{
        color: $grigio;
        font-weight: 200;

        &:hover{
            text-decoration: underline;
        }
    }

    h1{
        text-align: center;
        margin: 70px 0;
        font-size: 50px;
        font-weight: 600;
    }

    #relatedcourses{
        h3{
            text-align: center;
            margin: 5% 0;
        }
    }

    #container_list{
        width: 100%;
    }

    ul{
        margin-left: -25px;
        
    
        li{
            display: inline-block;
            font-size: 20px;
            cursor: pointer;
            color: #c6c6c6;
            font-weight: bold;
            border-bottom: 2px solid #eeeeee;
           

            &:not(:last-of-type){
                padding: 0 30px;
            }

            &:hover{
                color: black;
            }
        }
    }
    .active{
        color: black;
        border-bottom: 2px solid $verde-acqua;
    }

    .container_page{
        width: 75%;

        h2{
            margin: 50px 0 20px 0;
            font-weight: 600;
        }

        p{
            font-weight: 200;
            color: $grigio;
            font-size: 15px;
        }

        #container_artist{
            width: 80%;
            position: relative;
            cursor: pointer;
            margin: 50px 0;
        }

        #artist{
            width: 100%;
            border-radius: 5px;
        }

        #icon_play{
            position: absolute;
            width: 80px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    table{
        border: 1px solid rgb(194, 194, 194);
        margin: 50px 0;

        td{
            border:none;
            padding: 15px 15px 15px 40px;
            font-size: 15px;
            vertical-align: 10px;
        }

        td a:hover{
            text-decoration: none;
            color: $verde-acqua;
        }

        td div{
            width: 110%;
            border-radius: 5px;
            padding: 5px;
            line-height: 20px;
            text-align: center;

            &:hover{
                cursor: pointer;
            }
        }

        .minutes{
            color: rgb(206, 125, 20);
            background-color: #f4ebe7;   
        }
        .preview{
            color: white;
            background-color: $verde-acqua;  
            text-align: center;  
        }

        .questions{
            color: rgb(32, 179, 179);
            background-color: rgb(203, 236, 236);
        }
        
    }

    .flex{
        display: flex;
    }

    #container_instructor{
        margin-top: 50px;
        margin-bottom: 250px;

        img{
            width: 25%;
            height: 25%;
            margin-right: 15%;
        }

        h3{
            margin-bottom: 3%;
        }

        p{
            margin-top: 5%;
        }

        .fa-brands{
            font-size: 20px;
            margin-right: 6%;
            margin-top: 20px;
            color:rgb(184, 184, 184);
            
            &:hover{
                color: $verde-acqua;
            }
        }
    }

    h3{
        margin: 40px 0;
        font-size: 25px;
        font-weight: 600;
    }

    .fa-star{
        color: rgb(255, 200, 0);
    }

    #container_ratings{
        flex-wrap: wrap;
        margin-bottom: 50px;

        #av_rating{
            margin-right: 60px;

            span{
                font-weight: 200;
                font-size: 15px;
            }

            #bg_white{
                background-color: white;
                padding: 30px 40px;
                margin-top: 20px;
                text-align: center;

                h1{
                    font-size: 70px;
                    color: $verde-acqua;
                }

            }
        }

        #dt_rating{

            span{
                font-weight: 200;
                font-size: 15px;
            }

            table{
                border: none;
                color: rgb(172, 172, 172);
                
                td{
                    padding: 2px 20px 2px 0;

                    &:last-child{
                        padding-left: 30px;
                    }
                }
                .fa-star{
                    font-size: 90%;
                }

                .line {
                    border: 1px solid rgb(222, 222, 222);
                    padding: 3px 150px;
                    border-radius: 3px;
                    background-color: rgb(222, 222, 222);
                    position: relative;
                }

                .line_green{
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0%;
                        left: 0;
                        width: 50%;
                        height: 6px;
                        background-color: $verde-acqua;
                        border-top-left-radius: 3px;
                        border-bottom-left-radius: 3px;
                    }
                }

            }
       }
    }

    .container_reviews{ 
        width: 90%;

        .img-container-reviews{
            width: 250px;
            margin-left: 20px;

            .img-review{
                width: 130%;
            }
            
            img{
                width: 100%;
                border-radius: 50%;   
            }
        }

            .flex{
                justify-content: space-between;
            }

            h6{
                margin: 10px 50px;
                font-size: 15px;
                font-weight: 600;
            }

            h5{
                margin-left: 50px;
                font-size: 20px;
            }

            p{
                margin-left: 50px;
            } 
    }

       #container_reviews{
            .flex{
                .fa-star:last-child{
                    color: rgb(222, 222, 222);
                }
            }
       }

       hr{
        margin-bottom: 40px;
        color: #c6c6c6;
       }

</style>