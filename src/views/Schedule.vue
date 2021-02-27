<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 300;">Schedule</div>
                    <!-- <div class="vstack space-14 align-start">
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    </div> -->
                </div>
            </div>
        </div>

        <div class="">
        <div class="container">
            <div class="vstack mb-48 mx-18">
                <div class="vstack my-128 mx-18 space-64">

                    <div class="text-48">Work in progress</div>

                    <!--put stuff here-->

                </div>
            </div>

            <hr>

            <Footer />
        </div>
    </div> <!-- remove this when timeline needs to be added -->
    
        <!-- <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <div class="vstack mx-18 space-64 ">

                        <section class="timeline w-full">
                            <div class="container w-full">
                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>0945 - 1000</h1>
                                        <p class="text-20">Technical Check</p>
                                    </div>
                                </div>
    

                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>1000 - 1115</h1>
                                        <p class="text-20">Opening Ceremony</p>
                                    </div>
                                </div>
    
                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>1115 - 1230</h1>
                                        <p class="text-20">Lunch</p>
                                    </div>
                                </div>
    
                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>1230 - 1400</h1>
                                        <p class="text-20">Council Session 1</p>
                                    </div>
                                </div>
    
                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>1400 - 1415</h1>
                                        <p class="text-20">Break</p>
                                    </div>
                                </div>

                                <div class="timeline-item">
                                    <div class="timeline-img"></div>
    
                                    <div class="timeline-content js--fadeInLeft">
                                        <h1>1415 - 1545</h1>
                                        <p class="text-20">Council Session 2</p>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                    </div>
                </div>
    
                <hr>
    
                <Footer />
            </div>
        </div> -->
    </div>
</template>

<style scoped>
section {
    padding: 100px 0;
}

html,
body {
    overflow-x: hidden;
}

body {
    font-family: "Roboto";
    font-size: 17px;
    font-weight: 400;
    background-color: red;
}

h1 {
    font-size: 200%;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
}

header p {
    color: rgba(255, 255, 255, 0.2);
    margin-bottom: 0;
    font-size: 60px;
    margin-top: -30px;
}

.timeline {
    position: relative;
}

.timeline::before {
    content: "";
    background: var(--hero-gray);
    width: 5px;
    height: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.timeline-item {
    width: 100%;
    margin-bottom: 70px;
}

.timeline-item:nth-child(even) .timeline-content {
    float: right;
    padding: 20px 30px 15px 30px;
}

.timeline-item:nth-child(even) .timeline-content .date {
    right: auto;
    left: 0;
}

.timeline-item:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent var(--card) transparent transparent;
}

.timeline-item::after {
    content: "";
    display: block;
    clear: both;
}

.timeline-content {
    position: relative;
    width: 45%;
    padding: 20px 30px 15px 30px;
    /*h ere */
    border-radius: 4px;
    background: var(--card);
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}

.timeline-content::after {
    content: "";
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    right: -15px;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent var(--card);
}

.timeline-img {
    width: 30px;
    height: 30px;
    background: var(--my-gray);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -15px;
}

a {
    background: #3F51B5;
    color: #FFFFFF;
    padding: 8px 20px;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 10px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.6);
}

a:hover,
a:active,
a:focus {
    background: #32408f;
    color: #FFFFFF;
    text-decoration: none;
}

.timeline-card {
    padding: 0 !important;
}

.timeline-card p {
    padding: 0 20px;
}

.timeline-card a {
    margin-left: 20px;
}

.timeline-item .timeline-img-header {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("https://picsum.photos/1000/800/?random") center center no-repeat;
    background-size: cover;
}

.timeline-img-header {
    height: 200px;
    position: relative;
    margin-bottom: 20px;
}

blockquote {
    margin-top: 30px;
    color: #757575;
    border-left-color: #3F51B5;
    padding: 0 20px;
}

.date {
    background: #FF4081;
    display: inline-block;
    color: #FFFFFF;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
}

@media screen and (max-width: 768px) {
    .timeline::before {
        left: 50px;
    }
    .timeline .timeline-img {
        left: 50px;
    }
    .timeline .timeline-content {
        max-width: 100%;
        width: auto;
        margin-left: 70px;
    }
    .timeline .timeline-item:nth-child(even) .timeline-content {
        float: none;
    }
    .timeline .timeline-item:nth-child(odd) .timeline-content::after {
        content: "";
        position: absolute;
        border-style: solid;
        width: 0;
        height: 0;
        top: 30px;
        left: -15px;
        border-width: 10px 15px 10px 0;
        border-color: transparent var(--card) transparent transparent;
    }
}

.glass-card {
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

p {
    line-height: 1.5;
    margin-top: 0.4rem;
}
</style>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    }
}
</script>
