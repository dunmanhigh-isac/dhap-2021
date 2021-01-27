<template>
<div>
    <div class="hstack w-full bg-hero-gray py-64">
        <div class="container">
            <div class="vstack space-48 mx-18">
                <div class="text-48 title md:text-64 text-center" style="font-weight: 300;">The Secretariat</div>
                <div class="vstack space-14 align-start">
                    <div class="text-20 weight-300 w-full text-justify" style="line-height: 1.2;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor vitae massa malesuada imperdiet. Curabitur sed pretium arcu. Aliquam ultricies, sapien lacinia placerat tincidunt, nisl tellus finibus dolor, et pretium purus quam sed lectus. Nullam laoreet, dui in tempor accumsan, metus nibh fermentum est, in venenatis magna urna eu lorem. Morbi eleifend turpis at mollis pretium. Suspendisse potenti. Suspendisse eu molestie leo, id sollicitudin sem. Mauris a dignissim ipsum. Ut dictum, orci quis elementum volutpat, nunc ex semper tortor, a mattis magna augue non magna. Donec cursus urna eu tortor iaculis, sed aliquet enim fringilla. Donec nec turpis nisi. Aliquam diam ante, tempor egestas ipsum sit amet, viverra eleifend neque. Donec iaculis diam sed urna rutrum posuere. Aenean at elit non ex fringilla elementum. Praesent in condimentum metus.</div>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen">
        <div class="container">
            <div class="vstack mb-48 mx-18">

                <div class="vstack mt-128 mx-18 space-64 md:px-128">

                    <div class="vstack lg:hstack w-full mx-18">
                        <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div class="vstack lg:hstack w-full mx-18">

                        <div class="unhidden lg:hidden w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>

                        <div class="vstack align-start lg:align-end space-48 lg:mt-16 w-full lg:pr-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="hidden lg:unhidden w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                    </div>

                    <div class="vstack lg:hstack w-full mx-18">
                        <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                        <div class="hidden lg:unhidden spacer"></div>
                        <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                            <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                            <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
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

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  }
}
</script>
