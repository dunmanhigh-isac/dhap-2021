<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 px-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Design</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Design sub-committee has had a hand in every step of the way. Taking into account every possible artistic direction, be it minimalist or contemporary. However, beyond designing page layouts, the merchandise and logos plastered
                            across the former were designed thoughtfully to fit this year's theme. Playing on this year's theme, the design team frequently cooperates with other sub committees to ensure the cohesiveness of their designs, exemplifying ‘From
                            Unity, Strength’. With designs that are aimed to be eye-catching, aesthetically pleasing and focused, Design hopes that delegates can comfortably read their study guides and appreciate the keen touches added!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128 scroll-card">
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/Design/Zizhao.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Wang Zizhao</div>
                                <div class="text-18" style="line-height: 1.2;">Zizhao is a bubbly guy who has an affinity with pandas! A minimalist who relates very well to Japanese and Scandinavian design, he strongly believes that good design is invisible, and acts as a medium of precise communication! He hopes that delegates will enjoy DHAP 2021, and learn much too!</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/Design/Don.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Chia Qi En Don</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Don is a JC2 student that enjoys programming and photography. He can often be found behind his laptop screen, toiling hard and working on his various projects. Don wishes all delegates a fruitful and one of kind experience in DHAP 2021.</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/Design/Don.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/Design/Xinyi.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Chen Xinyi</div>
                                <div class="text-18" style="line-height: 1.2;">Ironically, Xinyi is a procrastinator with a violent fear of failure. She enjoys falling down Wikipedia rabbit holes and writing unnecessary commentaries on unconventional subjects outside of her (nonexistent) fields of expertise. She hopes that all delegates will have fun at DHAP!</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/Design/Lurlene.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Soh Ying Zi Lurlene</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Lurlene is a cheerful person with big hopes and aspirations. As a big supporter of positive thinking, she believes that difficult roads often lead to beautiful destinations. She hopes that all delegates would have a fulfilling time in DHAP 2021.</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/Design/Lurlene.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
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
