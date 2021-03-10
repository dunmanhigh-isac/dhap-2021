<template>
    <div>
        <div class="mt-0 md:my-36 lg:my-48 mx-0 md:mx-64 lg:mx-128">
            <div class="glass-card vstack align-start space-48 w-full p-36 md:p-48 rounded-10 md:shadow md:shadow-2xl">
                <div class="text-48 title md:text-64" style="font-weight: 500;">Mr Sng Chern Wei (孙振炜)</div>
                <div class=" grid grid-cols-1 lg:grid-cols-2 my-48 gap-18 sm:p-8 " style="justify-items: center;">
                    <img class="rounded-8 image-width" src="../static/GOH.webp" style="" />
                    <div class="vstack space-24">
                        <div class="text-20 weight-400 text-justify" style="line-height: 1.2;">
                            Mr Sng Chern Wei was appointed Deputy Director-General of Education (Curriculum) on 15 Dec 2016. He oversees the design, review and implementation of the total curriculum from primary to pre-university levels.
                        </div>
                        <div class="text-20 weight-400 text-justify" style="line-height: 1.2;">
                            Prior to this, he had served as the Divisional Director of Curriculum Planning and Development Division 1 (2014 – 2017), the Zonal Director for Schools (West) (2010 – 2013), and the Principal of Dunman High School (2005 – 2009).
                        </div>
                        <div class="text-20 weight-400 text-justify" style="line-height: 1.2;">
                            Mr Sng graduated with a BA Hons (1) in Engineering from Cambridge University in 1993, and a Master in Education from Harvard University in 2002.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <Footer />
    </div>
</template>

<style scoped>
.image-width {
    width: 80%;
}

@media only screen and (max-width: 992px) {
    .image-width {
        width: 70%; 
        height: auto;
    }
}

@media only screen and (max-width: 768px) {
    .image-width {
        width: 100%;
    }
}

.glass-card {
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

@media only screen and (max-width: 768px) {
    .glass-card {
        background: none;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        border: none;
    }
}

.svg-fill {
    fill: var(--text-color);
}

@media (prefers-color-scheme: dark) {
    .svg-fill {
        fill: var(--text-color);
    }
}

:root[color-mode="light"] .light--hidden {
    display: none;
}

:root[color-mode="dark"] .dark--hidden {
    display: none;
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
