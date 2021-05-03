<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 500;">Rules of Procedure</div>
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
                        <!-- change to mt-128 only -->

                        <div class="text-48">Coming Soon</div>

                        <!--put stuff here-->

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
    }
}
</script>
