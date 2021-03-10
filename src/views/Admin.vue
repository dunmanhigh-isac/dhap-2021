<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 500;">Admin Board</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Administrative Board is the backbone of the conference. We consist of four sub-committees, each unique and crucial in their own ways, yet stand united to ensure the smooth running of the conference, maximising your DHAP experience.
                            The Publicity and Communications sub-committees helm the corporate relations aspect of DHAP, while the Design sub-committee oversees the aesthetics of various aspects of the conference, and the Project Planning sub-committee ensures
                            that the programmes planned for you will become a reality.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <!-- <div class="vstack space-36 my-128">
                        <div class="w-224 h-12 bg-gray-300 rounded-full"></div>
                        <div class="vstack space-6">
                            <div class="w-full lg:w-640 h-12 bg-gray-400 rounded-full"></div>
                            <div class="w-full lg:w-640 h-12 bg-gray-400 rounded-full"></div>
                            <div class="w-320 h-12 bg-gray-400 rounded-full"></div>
                        </div>
                    </div> -->
    
                    <div class="align-self-stretch grid grid-cols-1 my-48 gap-18 sm:p-8 lg:grid-cols-2 my-18">
                        <router-link v-scroll-reveal to="/publicity" class="card-hover publicity-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow" href="#">
                            <div class="weight-500 text-36 white px-28 text-center">Publicity</div>
                        </router-link>
    
                        <router-link v-scroll-reveal to="/communications" class="card-hover communications-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 white px-28 text-center">Communications</div>
                        </router-link>
    
                        <router-link v-scroll-reveal to="/projectplanning" class="card-hover projectplanning-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 white px-28 text-center">Project Planning</div>
                        </router-link>
    
                        <router-link v-scroll-reveal to="/design" class="card-hover design-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 white px-28 text-center">Design</div>
                        </router-link>
    
                        <router-link v-scroll-reveal to="/ost" class="card-hover ost-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 white px-28 text-center">OST</div>
                        </router-link>
                    </div>
                </div>
    
                <hr>
    
                <Footer/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.white {
    color: white !important;
}

.publicity-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/publicity.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.communications-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/communications.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.projectplanning-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/projectplanning.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.design-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/design.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.ost-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/ost.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.glass-card {
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

.card-shadow:hover {
    box-shadow: var(--shadow-xl);
    cursor: pointer;
}

@media (prefers-color-scheme: dark) {
    .card-shadow:hover {
        box-shadow: var(--shadow-2xl);
    }
}

.card-hover {
    position: relative;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
}

.card-hover:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.5s ease-in;
}

.card-hover:hover:before {
    transform: scale(100);
    background: rgba( 255, 255, 255, 0.2);
    border: 1px solid rgba( 255, 255, 255, 0.18);
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
