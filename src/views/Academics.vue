<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 300;">Academics Board</div>
                <div class="vstack space-14 align-start">
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen">
        <div class="container">
            <div class="vstack mb-48 mx-18">
                <div class="vstack space-36 my-128">
                    <div class="w-224 h-12 bg-gray-300 rounded-full"></div>
                    <div class="vstack space-6">
                        <div class="w-full lg:w-640 h-12 bg-gray-400 rounded-full"></div>
                        <div class="w-full lg:w-640 h-12 bg-gray-400 rounded-full"></div>
                        <div class="w-320 h-12 bg-gray-400 rounded-full"></div>
                    </div>
                </div>

                <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 sm:grid-cols-2 gap-18 sm:p-8 md:grid-cols-3 lg:grid-cols-4 my-18">
                    <div class="card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <!--image-->
                    </div>

                    <div class="card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <!--image-->
                    </div>

                    <div class="card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <!--image-->
                    </div>

                    <div class="card vstack w-full h-320 card-bg rounded-3 shadow shadow-md card-shadow">
                        <!--image-->
                    </div>
                </div>
            </div>

            <hr>

            <Footer />
        </div>
    </div>
</div>
</template>

<style scoped>
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
