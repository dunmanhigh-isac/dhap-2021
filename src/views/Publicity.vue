<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 px-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Publicity</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Publicity sub-committee seeks to generate interest about DHAP on our social media platform both locally and internally. They also keep delegates up to date with the latest news and updates about DHAP. Behind the aesthetic posts
                            is a team of four that is hard at work editing! This year, they are also collaborating with Project Planning to bring you a special video production! Other than ensuring DHAP’s social media account is glam for the gram, their posts
                            also make sure that delegates are well-informed and prepared!</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128 scroll-card">
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/Publicity/Mana.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Manasarow Gunasekaran</div>
                                <div class="text-18" style="line-height: 1.2;">Mana is a typical Y6 student who is struggling to survive each passing day. When she is not rushing to finish her tutorial a day before submission, you can find her binge watching K-dramas and surfing through the internet (even though she knows that she has no time to slack). Lastly, Mana hopes that all delegates will have a fun and fruitful time during DHAP this year :)</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/Publicity/LingYing.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Kew Ling Ying</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Ling Ying is a Y6 student studying Physics, Chemistry, Mathematics and Economics. In her free time, she can be found binge watching Netflix shows and watching mukbangs on YouTube. Above all, she hopes that delegates will have a fulfilling time at DHAP 2021!</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/Publicity/LingYing.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/Publicity/Cheryl.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Tan Kai Ting, Cheryl</div>
                                <div class="text-18" style="line-height: 1.2;">When she's not staring at Kpop boys, Cheryl can be found engaging in riveting conversations with her limited selection of 5 friends! 💔💔 In spite of her organised nature making her the target of many "future OL" jokes, Cheryl wields it to her advantage and completes each task to the best of her ability. Cheryl's limited but enriching exposure in the MUN circuit has spurred her to make DHAP as amazing as possible and she hopes all delegates enjoy themselves in these 3 days :D</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/Publicity/Shelia.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Teo Zi Hui, Shelia</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Shelia is your typical JC1 student who takes PCME and spends most of her energy staying awake during lessons. She started her MUN journey in 2019 after being encouraged to join by her friends. Shelia is a diligent student who strives towards balancing her workload between studies and extracurricular activities, as well as relationships with those around her. In her free time, she binge watches k-dramas, c-dramas, netflix originals, and really, the list never does end!</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/Publicity/Shelia.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
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
