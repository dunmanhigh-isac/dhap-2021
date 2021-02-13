<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 300;">Contact Us</div>
                <div class="vstack space-14 align-start">
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="">
        <div class="container">
            <div class="vstack mb-48 mx-18">
                <div class="vstack mt-128 mx-18 space-64">
                    <div class="w-224 h-12 bg-gray-300 rounded-full"></div>
                    <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 md:grid-cols-2 gap-18 sm:p-8 my-18">
                        <div class="hstack w-full my-28">
                            <a href="https://www.instagram.com/dhaseanplus/">
                                <div class="vstack w-36 h-36 mr-28 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                                    <i class="fab fa-instagram logo"></i>
                                </div>
                            </a>
                            <div class="vstack space-12 align-start">
                                <div class="weight-700">Instagram</div>
                                <a class="underline" href="https://www.instagram.com/dhaseanplus/">@dhaseanplus</a>
                            </div>
                            <div class="unhidden md:hidden spacer"></div>
                        </div>
                        <!-- <div class="hstack w-full my-28">
                            <div class="vstack w-36 h-36 mr-28 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                                <i class="fab fa-facebook-f logo"></i>
                            </div>
                            <div class="vstack space-28 align-start">
                                <div class="w-64 h-10 bg-gray-300 rounded-full"></div>
                                <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                            </div>
                            <div class="unhidden sm:hidden spacer"></div>
                        </div> -->
                        <div class="hstack w-full my-28">
                            <a href="mailto: aseanplus.communications@dhs.sg">
                                <div class="vstack w-36 h-36 mr-28 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                                    <i class="far fa-envelope logo"></i>
                                </div>
                            </a>
                            <div class="vstack space-12 align-start">
                                <div class="weight-700">Email</div>
                                <a class="underline" href="mailto: aseanplus.communications@dhs.sg">aseanplus.communications@dhs.sg</a>
                            </div>
                            <div class="unhidden md:hidden spacer"></div>
                        </div>
                    </div>

                </div>

                <div class="vstack lg:hstack space-14 mx-18 lg:mx-128 pb-48">
                    <div class="vstack space-14">
                        <input type="text" class="w-full h-36 px-16 border border-1 border-gray-200 rounded-2 bg-color" placeholder="name" />
                        <input type="text" class="w-full h-36 px-16 border border-1 border-gray-200 rounded-2 bg-color" placeholder="email" />
                        <div class="spacer"></div>
                    </div>
                    <textarea rows="4" cols="50" class="w-full lg:w-640 px-16 py-12 border border-1 border-gray-200 rounded-2 bg-color" placeholder="message"></textarea>
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

<style scoped>

.diamond {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.logo {
    -webkit-transform: rotate(45deg);
    transform: rotate(-45deg);
}

</style>
