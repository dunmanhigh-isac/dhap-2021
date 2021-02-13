<template>
    <div>
        <div class="zstack">
            <div class="vstack w-full glass-card" style="height: calc(100vh - 140px); z-index: 1;">
                <div class="vstack space-28 text-stuff mx-28">
                    <div class="vstack space-16">
                        <div class="top" style="font-weight: 300;">from unity, strength</div>
                    </div>
                    <div class="hstack space-16">
                        <div class="text-64 title" style="font-weight: 300;">DHAP 2021</div>
                    </div>
                    <div class="vstack md:hstack space-32 w-full">
                        <router-link to="/welcome" class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-color">
                            <div class="text-16 lg:font-24 " style="font-weight: 200;">Opening Address</div>
                        </router-link>
                        <router-link to="/" class="hstack w-full md:w-192 h-64 border-2 rounded-2 border-color">
                            <div class="text-16 lg:font-24 " style="font-weight: 200;">Sign Up</div>
                        </router-link>
                    </div>
                </div>
            </div>
            <object class="svg-container" style="z-index: 0;">
                <!-- <img class="light" src="var(--hero-svg)"/> -->
                <!-- <img class="dark" src="../static/DoveAnimatedDark.svg"/> -->
            </object>
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

.border-color {
    border-color: var(--text-color)
}

.glass-card {
    background: var(--glass-card-hero);
    backdrop-filter: blur( 3.0px );
    -webkit-backdrop-filter: blur( 3.0px );
}

.svg-container {
    width: 580px;
    height: 580px;
    background: var(--hero-svg) no-repeat;
    /* background-repeat: no-repeat; */
}

@media only screen and (max-width: 768px) {
    .svg-container {
        width: 480px;
        height: 480px;
    }
}

@media only screen and (max-width: 600px) {
    .svg-container {
        width: 320px;
        height: 320px;
    }
}
</style>
