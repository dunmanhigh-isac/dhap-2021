<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 500;">Submissions</div>
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
                    <div class="vstack mt-128 mb-64 mx-18 space-64">
                        <!-- change to mt-128 only -->
    
                        <!-- <div class="text-48">Coming Soon</div> -->
    
                        <!--put stuff here-->
                        <div class="vstack">
                            <div class="text-48 weight-600 mb-28">The deadline for Position Paper submission closes in</div>
                            <div class="text-36 mb-28" id="countdown"></div>
                            <div class="text-center" style="line-height: 1.4;">Check your email for more details, or click <a class="underline" href="/files/DHAP 2021 Position Paper Guidelines.pdf" target="_blank">here</a> to read the guidelines.
<br>
If you have any questions, please contact us at <a class="underline" href="mailto:aseanplus.communications@dhs.sg">aseanplus.communications@dhs.sg</a>, or reach out to your chairs via email.</div>
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
.button-click:active {
    box-shadow: 0 0 0 0;
    outline: none;
}

.button-click {
    outline: none;
}

.not-allowed {
    cursor: not-allowed;
}

.allowed {
    cursor: pointer;
}

:root[color-mode="light"] .light--hidden {
    display: none;
}

:root[color-mode="dark"] .dark--hidden {
    display: none;
}

.shake {
    animation: shake 0.5s;
}

.hide {
    display: none;
}

:root[color-mode="dark"] .border {
    border: 1px solid rgb(170, 170, 170, 0.35);
    border-radius: 8px;
}

:root[color-mode="light"] .border {
    border: 1px solid rgba(116, 116, 116, 0.25);
    border-radius: 8px;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}
</style>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    },
    mounted() {
        var countDownDate = new Date("May 26, 2021 23:59:59").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
                minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "The deadline for the submission of Position Papers has closed.";
            }
        }, 100);
    }
}
</script>
