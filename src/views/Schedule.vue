<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 300;">Schedule</div>
                    <div class="vstack space-14 align-start">
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <div class="vstack mx-18 space-64 ">

                        <!--put stuff here-->

                        <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 md:grid-cols-2 lg:grid-cols-3 gap-18 sm:p-8 my-18 align-start">

                                <div class="container-timeline">
                                <div class="wrapper">
                                    <div class="weight-900 text-24">02 Jun 2021</div>
                                    <ul class="sessions">
                                        <li>
                                            <div class="time">0945 - 1000</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Technical Check</div>
                                        </li>
                                        <li>
                                            <div class="time">1000 - 1115</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Opening Ceremony</div>
                                        </li>
                                        <li>
                                            <div class="time">1130 - 1300</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 1</div>
                                        </li>
                                        <li>
                                            <div class="time">1300 - 1430</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Lunch</div>
                                        </li>
                                        <li>
                                            <div class="time">1430 - 1600</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 2</div>
                                        </li>
                                        <li>
                                            <div class="time">1600 - 1630</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Tea Break</div>
                                        </li>
                                        <li>
                                            <div class="time">1630 - 1800</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 3</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="container-timeline">
                                <div class="wrapper">
                                    <div class="weight-900 text-24">03 Jun 2021</div>
                                    <ul class="sessions">
                                        <li>
                                            <div class="time">0915 – 0930</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Technical Check</div>
                                        </li>
                                        <li>
                                            <div class="time">0930 - 1100</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 4</div>
                                        </li>
                                        <li>
                                            <div class="time">1100 - 1300</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Lunch</div>
                                        </li>
                                        <li>
                                            <div class="time">1300 - 1430</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 5</div>
                                        </li>
                                        <li>
                                            <div class="time">1430 – 1500 </div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Tea Break</div>
                                        </li>
                                        <li>
                                            <div class="time">1500 - 1630</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 6</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="container-timeline">
                                <div class="wrapper">
                                    <div class="weight-900 text-24">04 Jun 2021</div>
                                    <ul class="sessions">
                                        <li>
                                            <div class="time weight-900 text-24">0915 – 0930</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Technical Check</div>
                                        </li>
                                        <li>
                                            <div class="time">0930 - 1100</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 7</div>
                                        </li>
                                        <li>
                                            <div class="time">1100 - 1230</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Lunch</div>
                                        </li>
                                        <li>
                                            <div class="time">1230 - 1400</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Council Session 8</div>
                                        </li>
                                        <li>
                                            <div class="time">1400 - 1600</div>
                                            <div style="line-height: 1.5; margin-top: 0.4rem;">Closing Ceremony</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>

                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-card {
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

ul,
li {
    list-style: none;
    padding: 0;
}

.container-timeline {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper {
    padding: 2rem;
    border-radius: 15px;
}

h1 {
    font-size: 1.1rem;
    font-family: sans-serif;
}

.sessions {
    margin-top: 2rem;
    border-radius: 12px;
    position: relative;
}

li {
    padding-bottom: 1.5rem;
    border-left: 1px solid var(--text-color);
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
}

li:last-child {
    border: 0px;
    padding-bottom: 0;
}

li:before {
    content: "";
    width: 15px;
    height: 15px;
    background: var(--text-color);
    border-radius: 50%;
    position: absolute;
    left: -7px;
    top: 0px;
}

.time {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
}

@media screen and (min-width: 601px) {
    .time {
        font-size: 20px;
    }
}

@media screen and (max-width: 600px) {
    .time {
        margin-bottom: 0.3rem;
    }
}

p {
    color: #4f4f4f;
    font-family: sans-serif;
    line-height: 1.5;
    margin-top: 0.4rem;
}

@media screen and (max-width: 600px) {
    p {
        font-size: 0.9rem;
    }
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
