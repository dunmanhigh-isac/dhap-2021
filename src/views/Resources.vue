<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 500;">Resources</div>
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
                <div class="vstack my-128 mx-18 space-64"> <!-- change to mt-128 only -->

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

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
