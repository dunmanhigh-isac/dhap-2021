<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container md:px-36">
            <div class="vstack space-48 px-18">
                <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Asean Tourism Ministers’ Meeting</div>
                <div class="vstack space-14 align-start">
                    <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">Since its first meeting in 1998, the ASEAN Tourism Ministers’ Meeting (M-ATM) has strived to facilitate cooperation within ASEAN to market the region as a collective tourist destination while promoting intra-ASEAN travel. Yet, the unexpected onslaught of COVID-19 has decimated the ASEAN tourism industry, with tourist arrivals having fallen from 70 million in the first semester of 2019 to 24.6 million in the first quarter of 2020. Delegates will thus be challenged to tackle the effects of the pandemic head-on, while working towards the realisation of pre-pandemic goals as a united entity.</div>
                </div>
            </div>
        </div>
    </div>

    <div class="">
        <div class="container">
            <div class="vstack mb-48 mx-18">

                <div class="vstack space-36 my-48 md:mx-128">
                    <div class="weight-500 text-36 text-center">The Question of Restoring The Tourism Industry</div>
                    <div class="text-20 text-justify" style="line-height: 1.2;">ASEAN - home to some of the most tourism-reliant nations in the world - is reeling from the decimating impact of COVID-19. However, despite the seemingly gloomy circumstances, the pandemic could prove to be a valuable opportunity to strengthen ASEAN’s position as a competitive, sustainable and more integrated tourism destination. As such, delegates will convene to come up with innovative solutions that not only the current decline in tourism, but also address previous M-ATM goals such as ensuring environmental sustainability with regards to the tourism sector.
</div>
                </div>

                <div class="vstack space-36 my-48 md:mx-128">
                    <div class="weight-500 text-36 text-center">The Difficulty in Regional Cooperation on Implementing Cultural Heritage Tourism</div>
                    <div class="text-20 text-justify" style="line-height: 1.2;">Culture, Culture, Culture! ASEAN Tourism prides itself on celebrating its diverse cultures and heritage in all its lands. How can ASEAN better project itself as a single tourist destination that showcases the rich heritage ASEAN possess? Delegates of M-ATM will need to address these various issues and be tasked to come up with innovative and sustainable ideas to overcome these challenges.
</div>
                </div>

                <div class="vstack mt-128 mx-18 space-64 md:px-128 scroll-card">

                    <div v-scroll-reveal class="vstack lg:hstack w-full mx-18">
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

                    <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">

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

                    <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
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
