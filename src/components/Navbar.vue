<template>
    <nav class="hstack sticky z-10 t-0 lg:p-32 h-80 w-full my-14"> <!-- shadow shadow-md -->
        <!--div class="w-48 h-48 mx-28 border border-2 border-gray-300 rounded-full"></div-->
        <router-link to="/">
            <img src="../static/DHAP2021_Logo_Light.svg" class="w-48 h-48 mx-28 dark--hidden">
            <img src="../static/DHAP2021_Logo_Dark.svg" class="w-48 h-48 mx-28 light--hidden">
        </router-link>
        <div class="spacer"></div>
        <div class="hidden lg:unhidden">
            <div class="hstack space-28">
                <div class="spacer"></div>
                <div class="zstack group">
                    <router-link to="/about" class="group mb-5"><i class="fas fa-angle-down"></i> About</router-link>
                    <div class="hidden group-hover:unhidden bottom-0 transform translate-y-100 w-160">
                        <div class="vstack align-start w-full py-16 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Nested drop down item -->
                            <router-link to="/welcome" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Welcome Address</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/about" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">About DHAP</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/secretariat" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">The Secretariat</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/guest-of-honour" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Guest-of-Honour</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="zstack group">
                    <router-link to="/academics" class="group mb-5"><i class="fas fa-angle-down"></i> Academics</router-link>
                    <div class="hidden group-hover:unhidden bottom-0 transform translate-y-100">
                        <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Nested drop down item -->
                            <router-link to="/matm" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">M-ATM</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/ammtc" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">AMMTC</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/aia" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">AIA</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/unsc" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">UNSC</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/hcc" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">HCC</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="zstack group">
                    <router-link to="/admin" class="group mb-5"><i class="fas fa-angle-down"></i> Administration</router-link>
                    <div class="hidden group-hover:unhidden bottom-0 transform translate-y-100">
                        <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Nested drop down item -->
                            <router-link to="/publicity" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Publicity</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/communications" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Communications</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/projectplanning" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Project Planning</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/design" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Design</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/ost" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">OST</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/schedule" class="mb-5 text-underline">Schedule</router-link>
                <!-- <router-link to="/studyguides" class="mb-5 text-underline">Resources</router-link> -->
                <div class="zstack group">
                    <router-link to="/studyguides" class="group mb-5"><i class="fas fa-angle-down"></i> Resources</router-link>
                    <div class="hidden group-hover:unhidden bottom-0 transform translate-y-100 w-160">
                        <div class="vstack align-start w-full py-16 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Nested drop down item -->
                            <router-link to="/rop" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Rules of Procedure</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/studyguides" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Study Guides</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/submission" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="nested">Position Paper Submission</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/register" class="mb-5 text-underline">Registration</router-link>
                <router-link to="/faq" class="mb-5 text-underline">FAQ</router-link>
                <router-link to="/contact" class="mb-5 text-underline">Contact Us</router-link>
                <button class="color-mode__btn light--hidden">
                    <svg class="w-28 h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </button>
                <button class="color-mode__btn dark--hidden">
                    <svg class="w-28 h-28" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                </button>
            </div>
        </div>
        <div class="unhidden lg:hidden">
            <div class="hstack px-24 py-16">
                <div class="spacer"></div>
                <div class="group zstack">
                    <div id="hamburger" class="group vstack space-5 mb-5 hover-cursor">
                        <div id="hamburger" class="h-2 w-28 bg-black rounded-full sandwich"></div>
                        <div id="hamburger" class="h-2 w-28 bg-black rounded-full sandwich"></div>
                        <div id="hamburger" class="h-2 w-28 bg-black rounded-full sandwich"></div>
                    </div>
                    <div id="myLinks" class="hidden bottom-right-0 bottom-0 transform translate-y-100">
                        <!-- Drop down -->
                        <div class="vstack py-16 w-half sm:w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <router-link to="/about" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="dropdown ">
                                        <i class="fas fa-angle-left"></i> About
                                    </div>
                                </router-link>
                                <div class="hidden group-hover:unhidden ml-8 top-left-0 transform -translate-x-100">
                                    <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dimiss">
                                            <router-link to="/welcome" class="w-full vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Welcome Address</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dimiss">
                                            <router-link to="/about" class="w-full vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">About DHAP</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dimiss">
                                            <router-link to="/secretariat" class="w-full vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">The Secretariat</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dimiss">
                                            <router-link to="/guest-of-honour" class="w-full vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Guest-of-Honour</div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <router-link to="/academics" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="dropdown">
                                        <i class="fas fa-angle-left"></i> Academics
                                    </div>
                                </router-link>
                                <div class="hidden group-hover:unhidden ml-8 top-left-0 transform -translate-x-100">
                                    <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/matm" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full" >
                                                <div class="xs-nested">M-ATM</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/ammtc" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">AMMTC</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/aia" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">AIA</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/unsc" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">UNSC</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/hcc" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">HCC</div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <router-link to="/admin" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">
                                        <i class="fas fa-angle-left"></i> Administration
                                    </div>
                                </router-link>
                                <div class="hidden group-hover:unhidden ml-8 top-left-0 transform -translate-x-100">
                                    <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/publicity" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Publicity</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/communications" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Communications</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/projectplanning" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Project Planning</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/design" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Design</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/ost" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">OST</div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Drop down item -->
                            <router-link to="/schedule" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">Schedule</div>
                                </div>
                            </router-link>
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <router-link to="/academics" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="dropdown">
                                        <i class="fas fa-angle-left"></i> Resources
                                    </div>
                                </router-link>
                                <div class="hidden group-hover:unhidden ml-8 top-left-0 transform -translate-x-100">
                                    <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/rop" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full" >
                                                <div class="xs-nested">Rules of Procedure</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/studyguides" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Study Guides</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack" @click="dismiss">
                                            <router-link to="/submission" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">Position Paper Submission</div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Drop down item -->
                            <router-link to="/register" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">Registration</div>
                                </div>
                            </router-link>
                            <!-- Drop down item -->
                            <router-link to="/contact" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">Contact Us</div>
                                </div>
                            </router-link>
                            <!-- Drop down item -->
                            <router-link to="/faq" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">FAQ</div>
                                </div>
                            </router-link>
                            <div class="vstack align-start p-16">
                            <button class="hstack color-mode__btn light--hidden w-full bg-my-gray-hover">
                                <svg class="w-24 h-24 pr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                <div class="">Light Mode</div>
                                <div class="spacer"></div>
                            </button>
                            <button class="hstack color-mode__btn dark--hidden w-full border-gray-300 bg-my-gray-hover">
                                <svg class="w-24 h-24 pr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                <div class="">Dark Mode</div>
                                <div class="spacer"></div>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
:root[color-mode="light"] .light--hidden {
    display: none;
}

:root[color-mode="dark"] .dark--hidden {
    display: none;
}

.w-half {
    width: 40vw;
}
</style>

<script>
import $ from 'jquery'
export default {
  methods: {
    /* hamburger: function () {
      var x = document.getElementById('myLinks')
      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    }, */
    dismiss: function () {
      var x = document.getElementById('myLinks')
      x.style.display = 'none'
    }
  },
  mounted () {
    if (window.CSS && CSS.supports('color', 'var(--primary)')) {
      var toggleColorMode = function toggleColorMode (e) {
        // Switch to Light Mode
        if (e.currentTarget.classList.contains('light--hidden')) {
          // Sets the custom html attribute
          document.documentElement.setAttribute('color-mode', 'light') // Sets the user's preference in local storage

          localStorage.setItem('color-mode', 'light')
          return
        }
        /* Switch to Dark Mode
    Sets the custom html attribute */
        document.documentElement.setAttribute('color-mode', 'dark') // Sets the user's preference in local storage

        localStorage.setItem('color-mode', 'dark')
      } // Get the buttons in the DOM

      var toggleColorButtons = document.querySelectorAll('.color-mode__btn') // Set up event listeners

      toggleColorButtons.forEach(function (btn) {
        btn.addEventListener('click', toggleColorMode)
      })
    } else {
      // If the feature isn't supported, then we hide the toggle buttons
      var btnContainer = document.querySelector('.color-mode__header')
      btnContainer.style.display = 'none'
    }

    $(document).click(function (e) {
      // check that your clicked
      // element has no id=info
      if (e.target.id !== 'hamburger') {
        $('#myLinks').hide()
      }
    })

    $('#hamburger').click(function () {
      console.log('clicked')
      $('#myLinks').show()
    })
  }
}
</script>
