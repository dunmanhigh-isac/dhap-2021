<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 500;">Academics Board</div>
                <div class="vstack space-14 align-start">
                    <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The Academics Board oversees the various committees and topics that will be discussed during the conference. Each committee will discuss one or two topics. The five DHAP councils comprise both beginner and advanced councils. Delegates will be allocated to councils of varying difficulties to provide a conducive and guided debating environment. M-ATM, AMMTC are beginner-friendly councils:  Delegates will be provided more guidance from the chairs during council debate to ensure a meaningful experience MUN-ning. On the other hand, AIA and UNSC are advanced-level councils, where more experienced delegates can push themselves out of their comfort zones by discussing more complex issues. Finally, the HCC is pitched for highly-experienced delegates who seek fast-paced debates and engaging simulations of political gridlocks.</div>
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

                <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 sm:grid-cols-2 gap-18 sm:p-8 md:grid-cols-3 lg:grid-cols-5 my-18">
                    <router-link to="/matm" class="glass-card card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <div>Work in progress</div>
                    </router-link>

                    <router-link to="/ammtc" class="glass-card card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <div>Work in progress</div>
                        <!--image-->
                    </router-link>

                    <router-link to="/aia" class="glass-card card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <div>Work in progress</div>
                        <!--image-->
                    </router-link>

                    <router-link to="/unsc" class="glass-card card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <div>Work in progress</div>
                        <!--image-->
                    </router-link>

                    <router-link to="/hcc" class="glass-card card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <div>Work in progress</div>
                        <!--image-->
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
    .glass-card {
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( 1.5px );
        -webkit-backdrop-filter: blur( 1.0px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
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
</style>

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
