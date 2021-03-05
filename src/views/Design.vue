<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container md:px-36">
            <div class="vstack space-48 px-18">
                <div class="text-48 title md:text-64 text-center" style="font-weight: 500;">Design</div>
                <div class="vstack space-14 align-start">
                    <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Design sub-committee has had a hand in every step of the way. Taking into account every possible artistic direction, be it minimalist or contemporary. However, beyond designing page layouts, the merchandise and logos plastered across the former were designed thoughtfully to fit this year's theme. Playing on this year's theme, the design team frequently cooperates with other sub committees to ensure the cohesiveness of their designs, exemplifying ‘From Unity, Strength’. With designs that are aimed to be eye-catching, aesthetically pleasing and focused, Design hopes that delegates can comfortably read their study guides and appreciate the keen touches added!
</div>
                </div>
            </div>
        </div>
    </div>

    <div class="">
        <div class="container">
            <div class="vstack mb-48 mx-18">

                <div class="vstack mt-128 mx-18 space-64 md:px-128 scroll-card">

                    <div class="vstack lg:hstack w-full mx-18">
                        <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div class="vstack lg:hstack w-full mx-18 scroll-card">

                        <div class="unhidden lg:hidden w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>

                        <div class="vstack align-start lg:align-end space-48 lg:mt-16 w-full lg:pr-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="hidden lg:unhidden w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                    </div>

                    <div class="vstack lg:hstack w-full mx-18 scroll-card">
                        <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
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

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
