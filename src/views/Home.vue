<template>
<div>
  <div class="vstack space-28 mx-28 text-stuff" style="height: calc(100vh - 200px)">
        <div class="vstack space-16">
            <div class="top" style="font-weight: 300;">from unity, strength</div>
        </div>
        <div class="hstack space-16">
            <div class="text-64 title" style="font-weight: 300;">DHAP 2021</div>
        </div>
        <div class="hstack space-32 ">
            <a href="#opening-address" class="hstack w-192 h-64 border-2 rounded-2 border-gray-300 light hover:bg-gray-900 button-hover ">
                <div class="light text-16 lg:font-24" style="font-weight: 200;">opening address</div>
            </a>
            <div class="hstack w-192 h-64 border-2 rounded-2 border-gray-300 light hover:bg-gray-900 button-hover ">
                <div class="light text-16 lg:font-24" style="font-weight: 200;">sign up</div>
            </div>
        </div>
    </div>

    <hr>

    <div class="h-screen">
        <div class="container">
            <div class="align-self-stretch grid grid-cols-2 mx-18 my-48 sm:grid-cols-3 gap-18 sm:p-8 md:grid-cols-4 my-18" style="grid-template-columns: repeat(auto-fill, minmax(224px, 1fr))">
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
                <div class="card vstack h-auto card-bg rounded-3 shadow shadow-md p-28">
                    <div class="w-112 h-112 bg-gray-200 rounded-5"></div>
                    <div class="vstack align-start mt-20 space-8 h-auto">
                        <div class="w-128 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="w-64 h-12 bg-gray-300 rounded-full"></div>
                        <div class="spacer"></div>
                    </div>
                </div>
            </div>

            <hr>

            <div id="opening-address" class=" my-48 mx-18">
                <div class="vstack align-start space-28">
                    <div class="text-36">Opening Address</div>
                    <div class="w-full h-12 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-12 bg-gray-300 rounded-full"></div>
                    <div class="w-full h-12 bg-gray-300 rounded-full"></div>
                    <div class="unhidden lg:hidden w-full h-12 bg-gray-300 rounded-full"></div>
                    <div class="unhidden lg:hidden w-full h-12 bg-gray-300 rounded-full"></div>
                    <div class="unhidden md:hidden w-full h-12 bg-gray-300 rounded-full"></div>
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
