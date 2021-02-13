<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 300;">Register</div>
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

                    <!--put stuff here-->
                    <div class="align-self-stretch grid grid-cols-1 lg:mx-128 md:grid-cols-2 gap-18 sm:p-8" style="justify-content: center;
  align-items: center;">
                        <div class="glass-card card vstack w-full h-auto card-bg rounded-3 shadow shadow-md card-shadow p-28 align-start space-28">
                            <div class="weight-800 text-36">
                                Local Delegates
                            </div>
                            <div style="line-height: 1.2;">
                                Lucas ipsum dolor sit amet moff yavin skywalker wookiee palpatine gonk moff k-3po mon solo. Skywalker hutt darth fett jabba wedge. Palpatine mon qui-gon skywalker solo solo. Greedo calrissian chewbacca darth dooku antilles boba. Hutt antilles yavin organa darth. Ahsoka calamari watto palpatine antilles. Ponda tatooine obi-wan organa darth kashyyyk. Jade ackbar twi'lek darth lars. Kashyyyk bothan ackbar skywalker sidious mandalore wedge vader. Kenobi moff maul jawa moff darth solo fett skywalker.
                            </div>
                            <div class="vstack px-36 py-12 shadow shadow-2xl rounded-8 bg-color button-hover button-click">
                                Register
                            </div>
                        </div>

                        <div class="glass-card card vstack w-full h-auto card-bg rounded-3 shadow shadow-md card-shadow p-28 align-start space-28">
                            <div class="weight-800 text-36">
                                International Delegates
                            </div>
                            <div style="line-height: 1.2;">
                                Lucas ipsum dolor sit amet moff yavin skywalker wookiee palpatine gonk moff k-3po mon solo. Skywalker hutt darth fett jabba wedge. Palpatine mon qui-gon skywalker solo solo. Greedo calrissian chewbacca darth dooku antilles boba. Hutt antilles yavin organa darth. Ahsoka calamari watto palpatine antilles. Ponda tatooine obi-wan organa darth kashyyyk. Jade ackbar twi'lek darth lars. Kashyyyk bothan ackbar skywalker sidious mandalore wedge vader. Kenobi moff maul jawa moff darth solo fett skywalker.
                            </div>
                            <div class="vstack px-36 py-12 shadow shadow-2xl rounded-8 bg-color button-hover button-click">
                                Register
                            </div>
                        </div>
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
.glass-card {
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( 1.5px );
        -webkit-backdrop-filter: blur( 1.0px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

.button-hover:hover {
    cursor: pointer;
}

.button-click:active {
    box-shadow: 0 0 0 0;
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
