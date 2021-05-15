<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 px-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Operations and Support Team (OST)</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">With the debut of the online iteration of DHAP, the five-member Operations and Support Team is formed to bring about a smooth user experience during the virtual conference, and to optimise delegates’ debate. Helmed by familiar faces
                            from the Administrative Board and the Secretariat, the team collaborates with the Academics Board to ensure that online council sessions proceed as smoothly as possible. Also the frontline for technical support, they hope to provide
                            delegates with a worry-free experience.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack my-64 mx-18">
                    <img src="../static/OST/OST.webp" class="rounded-6 w-full w-75vw bg-gray-400 h-full mb-16">
                </div>
    
                <hr>
    
                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 992px) {
    .w-75vw {
        width: 75vw;
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
