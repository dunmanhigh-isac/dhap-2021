<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 mx-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">ASEAN Investment Area Council</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The December 1995 ASEAN Summit endorsed the concept of the ASEAN Investment Area Council (AIA), which works towards lowering barriers for regional investment. By aiming for the establishment of a single ASEAN market and sustaining
                            the inflow of investment and reinvestment, AIA seeks to promote the dynamic development of ASEAN economies. Delegates will be challenged to come up with measures to ensure continued economic cooperation between ASEAN member states
                            to facilitate a competitive investment environment in ASEAN.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">The Question of Economic Integration in ASEAN</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">In fulfilling the ASEAN Economic Community Blueprint, ASEAN aims to achieve a single market and production base, which is characterised by the free flow of goods, services, and investments, as well as freer flow of capital and skills.
                            Economic integration of this scale would require not only the reduction of tariffs between the nations but also harmonised standards and procedures within the region. Economic integration of ASEAN not only serves to facilitate
                            trade within the region but also allows for the ease of trade of ASEAN as a market with other countries. In tackling the question of economic integration, delegates will evaluate the feasibility of potential solutions that are
                            specific to the ASEAN context, namely, Global Value Chains (GVCs), digital ftrade and Cross-border Trade (CBI).
                        </div>
                    </div>
    
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">The Question of Blue Economies in ASEAN</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">With a majority of ASEAN member states being coastal countries, discussions about the sustainability of ocean resources in the pursuit of economic growth - also known as a blue economy - are pertinent in the region. Currently, ASEAN
                            conservation efforts of its coastal ecosystems remain lacking, as destructive practices like overfishing and marine pollution continue to plague the region. As such, ASEAN should direct its focus towards sustainable economic growth
                            to attract more “green investments” that will help further its blue economy agenda. However, such efforts may pose disruptions to the economies of ASEAN nations as it requires the revamping of large sectors of marine activity.
                            Therefore, delegates will have to evaluate and make sustainable improvements to current marine practices, as well as come up with innovative ideas to raise the attractiveness of “green investment” prospects in ASEAN.
                        </div>
                    </div>
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128">
    
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
