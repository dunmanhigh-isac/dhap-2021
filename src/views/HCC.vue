<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 mx-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Historical Crisis Council</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">Unlike other councils, the Historical Crisis Council moves forward in time as the session progresses, and will be influenced by delegates’ decisions and backroom updates in real time. Taking the formation of a joint council this year,
                            this committee is created specifically for Model UNs, and seeks to simulate the complexity and thrill of past crises while encouraging delegates to create their own storyline to explore alternative historical courses.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">Outbreak of War in Iraq</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">This year’s rendition of HCC will see delegates going back in time to the outbreak of the Iraq War in 2003 - a pivotal event that would shape the relations between the West and Middle East for years to come. In this council, delegates
                            will plunge headfirst into the vicious combat of advancing their national interests, while considering the legality of the actions taken by all parties. Skills like critical thinking and adaptability will be tested as delegates
                            navigate their way through this controversial and convoluted war, and ultimately try to restore world peace.
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
