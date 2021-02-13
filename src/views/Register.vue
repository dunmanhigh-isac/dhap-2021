<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 300;">Register</div>
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
                <div class="vstack mt-128 mx-18 space-64">

                    <!--put stuff here-->
                    <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 sm:grid-cols-2 gap-18 sm:p-8 my-18">
                        <div class="glass-card card vstack w-320 h-auto card-bg rounded-3 shadow shadow-md card-shadow " style="justify-items: center;
  align-items: center;">
                            <div class="">
                                Hello there
                            </div>
                            <div class="">
                                general kenobi
                            </div>
                        </div>

                        <div class="glass-card card vstack w-320 h-auto card-bg rounded-3 shadow shadow-md card-shadow" style="justify-items: center;
  align-items: center;">
                            <div class="">
                                Hello there
                            </div>
                            <div class="">
                                general kenobi
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
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( 1.5px );
        -webkit-backdrop-filter: blur( 1.0px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
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
