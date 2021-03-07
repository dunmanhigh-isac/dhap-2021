<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 500;">Academics Board</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Academics Board oversees the various committees and topics that will be discussed during the conference. Each committee will discuss one or two topics. The five DHAP councils comprise both beginner and advanced councils. Delegates
                            will be allocated to councils of varying difficulties to provide a conducive and guided debating environment. M-ATM, AMMTC are beginner-friendly councils: Delegates will be provided more guidance from the chairs during council
                            debate to ensure a meaningful experience MUN-ning. On the other hand, AIA and UNSC are advanced-level councils, where more experienced delegates can push themselves out of their comfort zones by discussing more complex issues.
                            Finally, the HCC is pitched for highly-experienced delegates who seek fast-paced debates and engaging simulations of political gridlocks.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="align-self-stretch grid grid-cols-1 my-48 gap-18 sm:p-8 md:grid-cols-2 my-18">
    
                        <router-link to="/matm" class="card-hover asean-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow" href="#">
                            <div class="weight-500 text-36 color-white px-28 text-center">Asean Tourism Ministers’ Meeting</div>
                        </router-link>
    
                        <router-link to="/ammtc" class="card-hover ammtc-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 color-white px-28 text-center">ASEAN Ministerial Meeting on Transnational Crime</div>
                        </router-link>
    
                        <router-link to="/aia" class="card-hover aia-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 color-white px-28 text-center">ASEAN Investment Area Council</div>
                        </router-link>
    
                        <router-link to="/unsc" class="card-hover unsc-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 color-white px-28 text-center">Historical United Nations Security Council</div>
                        </router-link>
    
                        <router-link to="/hcc" class="card-hover hcc-img card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                            <div class="weight-500 text-36 color-white px-28 text-center">Historical Crisis Council</div>
                        </router-link>
                    </div>
                </div>
    
                <hr>
    
                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped>
.asean-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/AIA.webp');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}

.ammtc-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/AMMTC.webp');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}

.aia-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/AIA.webp');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}

.unsc-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/HUNSC.webp');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}

.hcc-img {
    background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('../static/HCC.webp');
    background-repeat: no-repeat;
    background-size: auto;
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
