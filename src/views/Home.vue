<template>
<div>
  <div class="vstack w-full image-carousel" style="height: calc(100vh - 110px)">
      <div class="vstack space-28 text-stuff mx-28">
        <div class="vstack space-16">
            <div class="top" style="font-weight: 300; color: #d9e2ec;">from unity, strength</div>
        </div>
        <div class="hstack space-16">
            <div class="text-64 title" style="font-weight: 300; color: #d9e2ec;">DHAP 2021</div>
        </div>
        <div class="vstack md:hstack space-32 w-full">
            <a href="#opening-address" class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-gray-300">
                <div class="text-16 lg:font-24 hero-text" style="font-weight: 200;">opening address</div>
            </a>
            <div class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-gray-300">
                <div class="text-16 lg:font-24 hero-text" style="font-weight: 200;">sign up</div>
            </div>
        </div>
      </div>
    </div>

    <!--hr-->
    <Footer />
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
    .image-carousel {
        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/image.webp');
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center;
        z-index: 2;
    }

    .text-stuff {
        margin-top: 25px;
        font-size: 21px;
        text-align: center;
        animation: fadein 2s;
        -moz-animation: fadein 2s;
        /* Firefox */
        -webkit-animation: fadein 2s;
        /* Safari and Chrome */
        -o-animation: fadein 2s;
        /* Opera */
    }

    .button-hover:hover {
        background-color: var(--button-hover);
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-moz-keyframes fadein {
        /* Firefox */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadein {
        /* Safari and Chrome */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-o-keyframes fadein {
        /* Opera */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
