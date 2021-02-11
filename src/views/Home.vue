<template>
<div>
 <div id="carousel" class="vstack w-full image-carousel-1 image-carousel-2" style="height: calc(100vh - 140px)">
       <div class="vstack space-28 text-stuff mx-28">
        <div class="vstack space-16">
            <div class="top" style="font-weight: 300; color: #d9e2ec;">from unity, strength</div>
        </div>
        <div class="hstack space-16">
            <div class="text-64 title" style="font-weight: 300; color: #d9e2ec;">DHAP 2021</div>
        </div>
        <div class="vstack md:hstack space-32 w-full">
            <router-link to="/welcome" class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-gray-300">
                <div class="text-16 lg:font-24 hero-text" style="font-weight: 200;">Opening Address</div>
            </router-link>
            <router-link to="/" class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-gray-300">
                <div class="text-16 lg:font-24 hero-text" style="font-weight: 200;">Sign Up</div>
            </router-link>
        </div>
      </div>
    </div>
    <!--hr-->
    <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer'
// import $ from 'jquery'
export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
    /* .image-carousel-1 {
        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('image.webp');
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
    } */
    /*
    .image-carousel-2 {
        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/IMG_8288.webp');
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
    } */

    /* #carousel {
        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/IMG_8288.webp');
        transition: all 0.3s ease-in;
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
    } */
</style>
