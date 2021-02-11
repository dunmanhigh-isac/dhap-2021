<template>
<div>
 <div id="carousel" class="vstack w-full image-carousel-1 image-carousel-2" style="height: calc(100vh - 110px)">
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
  },
  mounted () {
    // $(function () {
    //   var body = $('#carousel')
    //   var backgrounds = [
    //     'url("../static/image.webp")',
    //     'url("../static/image.webp")'
    //   ]
    //   var current = 0

    //   function nextBackground () {
    //     body.css(
    //       'background',
    //       backgrounds[current = ++current % backgrounds.length]
    //     )

    //     setTimeout(nextBackground, 10000)
    //   }
    //   setTimeout(nextBackground, 10000)
    //   body.css('background', backgrounds[0])
    // })

    // var images = ['https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/SxHIQni.jpg']
    // var index = 0
    // var $top = $('#carousel')

    // setInterval(function () {
    //   $top.animate({ opacity: 0 }, 500, function () {
    //     $top.css('background-image', 'url(' + images[++index] + ')')
    //     $top.animate({ opacity: 1 }, 500, function () {
    //       if (index === images.length) index = 0
    //     })
    //   })
    // }, 2000)

    // var images = ['https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg']

    // (function () {
    //   var i = 0
    //   function changeBg () {
    //     $('#carousel').css('background-image', 'url("' + images[i] + '")')
    //     i = (i + 1) % images.length
    //   }

    //   setInterval(changeBg, 1000)
    // })()

    // var backgroundImages = ['https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg']
    // var backgroundImageCounter = 0
    // var jumbotron = $('#carousel')

    // window.setInterval(function () {
    //   jumbotron.css('background-image', backgroundImages[backgroundImageCounter])

    //   backgroundImageCounter++
    //   if (backgroundImageCounter >= backgroundImages.length) {
    //     backgroundImageCounter = 0
    //   }
    // }, 2000)

    // var imgSrcs = ['https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg', 'https://i.imgur.com/VSqMs1V.jpg']

    // $('#carousel').delay(1000).fadeIn(1000, animateBackground())

    // function animateBackground () {
    //   window.setTimeout(function () {
    //     var url = imgSrcs[imgSrcs.push(imgSrcs.shift()) - 1]

    //     $('#carousel').delay(4000).fadeOut(1000, function () {
    //       $(this).css('background-image', 'url(' + url + ')')
    //     }).fadeIn(1000, animateBackground())
    //   })
    // }
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

    .bg1
        {
        background-image: url('../static/IMG_8288.webp');
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
        }

        .bg2
        {
        background-image: url('../static/IMG_8308.webp');
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
        }
</style>
