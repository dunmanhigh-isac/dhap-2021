<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack align-start space-48 mx-18">
                <div class="text-48 title md:text-64" style="font-weight: 500;">Register</div>
                <!-- <div class="vstack space-14 align-start">
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                </div> -->
            </div>
        </div>
    </div>

    <div class="">
        <div class="container">
            <div class="vstack my-128 mx-18">

                    <!--put stuff here-->
                    <!-- <div class="align-self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 sm:p-8" style="justify-content: center;
  align-items: center;">
                        <div class="glass-card card vstack w-full h-auto card-bg rounded-3 shadow shadow-md card-shadow p-28 align-start space-28">
                            <div class="weight-600 text-36">
                                DHS Delegates
                            </div>
                            <div style="line-height: 1.4;">
                                Registration for local delegates is now open and will close on 31st March 23:59 (GMT +08:00). Applicant's level of schooling should be between Year 3 and Year 6, at the time of sign up.
                            </div>
                            <div class="spacer"></div>
                            <a href="https://forms.gle/KPXTV2hHDqMUNDhG7" class="vstack px-36 py-12 shadow shadow-2xl rounded-8 bg-color button-hover button-click">
                                Register
                            </a>
                        </div>

                        <div class="glass-card card vstack w-full h-auto card-bg rounded-3 shadow shadow-md card-shadow p-28 align-start space-28">
                            <div class="weight-600 text-36">
                                Local Delegates
                            </div>
                            <div style="line-height: 1.4;">
                                Registration for local delegates is now open and will close on 31st March 23:59 (GMT +08:00). Applicant's level of schooling should be between Secondary 3 and Junior College 2, or the equivalent, at the time of sign up.
                            </div>
                            <div class="spacer"></div>
                            <a href="https://docs.google.com/forms/d/1vb8MF33tXkDrgZM8e6oHwyYM5kf0lIKwZRxIK8jrBJs" class="vstack px-36 py-12 shadow shadow-2xl rounded-8 bg-color button-hover button-click">
                                Register
                            </a>
                        </div>

                        <div class="glass-card card vstack w-full h-auto card-bg rounded-3 shadow shadow-md card-shadow p-28 align-start space-28">
                            <div class="weight-600 text-36">
                                International Delegates
                            </div>
                            <div style="line-height: 1.4;">
                                Registration for international delegates is now open and will close on 31st March 23:59 (GMT +08:00). Delegates should be between the age of 14 and 18.
                            </div>
                            <div class="spacer"></div>
                            <a href="https://forms.gle/nK42QiyNAbQSSVgC8" class="vstack px-36 py-12 shadow shadow-2xl rounded-8 bg-color button-hover button-click">
                                Register
                            </a>
                        </div>
                    </div> -->
                    <div class="text-48">Registration has closed. See you at DHAP 2021!</div>
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
