<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 500;">Study Guides</div>
                    <!-- <div class="vstack space-14 align-start">
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                            </div> -->
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
                    <div class="vstack mx-18 space-64">
                        <div class="vstack w-full">
                            <form class="hstack h-128 w-full">
                                <input class="spacer py-18 rounded-8 pl-12 mr-12 input-click card-bg title border" v-model="password_input" type="text" placeholder="Password" />
                                <button class="px-24 md:px-48 py-18 shadow shadow-2xl rounded-8 card-bg button-click border" type="submit" v-on:click="setPassword">Submit</button>
                                <!-- <a href="/files/file1.pdf" target="_blank">download</a> -->
                            </form>
                            <a v-bind:href="`${link}`" :class="{ allowed : allow }" v-on:click="checkSubmit" class="h-320 w-full card-bg vstack w-full rounded-8 not-allowed px-36 text-center border">
                                    <img :class="{ shake : shake, hide : allow }" class="h-48 w-48 dark--hidden" src="../static/Cross-light.png"/>
                                    <img :class="{ shake : shake, hide : allow }" class="h-48 w-48 light--hidden" src="../static/Cross-dark.png"/>
                                    <img :class="{ hide : !allow }" class="h-48 w-48 dark--hidden" src="../static/Download-light.png"/>
                                    <img :class="{ hide : !allow }" class="h-48 w-48 light--hidden" src="../static/Download-dark.png"/>
                                    <div class="mt-16">{{message}}</div>
                            </a>
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
.button-click:active {
    box-shadow: 0 0 0 0;
    outline: none;
}

.button-click {
    outline: none;
}

.not-allowed {
    cursor: not-allowed;
}

.allowed {
    cursor: pointer;
}

:root[color-mode="light"] .light--hidden {
    display: none;
}

:root[color-mode="dark"] .dark--hidden {
    display: none;
}

.shake {
    animation: shake 0.5s;
}

.hide {
    display: none;
}

:root[color-mode="dark"] .border {
    border: 1px solid rgb(170, 170, 170, 0.35);
    border-radius: 8px;
}

:root[color-mode="light"] .border {
    border: 1px solid rgba(116, 116, 116, 0.25);
    border-radius: 8px;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}
</style>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    },
    data() {
        return {
            password_input: '',
            password: '',
            link: '',
            allow: false,
            image_link: "Cross",
            message: 'Restricted access, please input password to download study guides.',
            shake: false
        }
    },
    methods: {
        setPassword(e) {
            e.preventDefault()
            this.password = this.password_input
            if (this.password == "fr0mun!tystreNgth") {
                function download(filename) {
                    var element = document.createElement('a');
                    element.setAttribute('href', filename);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                download("/files/zip.zip");
                this.link = '/files/zip.zip'
                this.allow = true
                this.image_link = 'Download'
                this.message = 'Password successfully inputted! If your files did not download, click on this button.'
            } else if (this.password == "dh@pgo3sonlinE") {
                function download(filename) {
                    var element = document.createElement('a');
                    element.setAttribute('href', filename);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                download("/files/zip.zip");
                this.link = '/files/zip.zip'
                this.allow = true
                this.image_link = 'Download'
                this.message = 'Password successfully inputted! If your files did not download, click on this button.'
            } else if (this.password == "dh4p_isFun") {
                function download(filename) {
                    var element = document.createElement('a');
                    element.setAttribute('href', filename);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                download("/files/zip.zip");
                this.link = '/files/zip.zip'
                this.allow = true
                this.image_link = 'Download'
                this.message = 'Password successfully inputted! If your files did not download, click on this button.'
            } else if (this.password == "dhapi5_c0ol") {
                function download(filename) {
                    var element = document.createElement('a');
                    element.setAttribute('href', filename);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                download("/files/zipp.zip");
                this.link = '/files/zip.zip'
                this.allow = true
                this.image_link = 'Download'
                this.message = 'Password successfully inputted! If your files did not download, click on this button.'
            } else if (this.password == "hysterical.hist0ricalcr!sis") {
                function download(filename) {
                    var element = document.createElement('a');
                    element.setAttribute('href', filename);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
                download("/files/zip.zip");
                this.link = '/files/zip.zip'
                this.allow = true
                this.image_link = 'Download'
                this.message = 'Password successfully inputted! If your files did not download, click on this button.'
            } else {
                this.link = ''
                this.allow = false
                this.image_link = 'Cross'
                this.message = 'Restricted access, please input password to download study guides.'
                this.shake = true
                setTimeout(() => {  this.shake = false; }, 500);
            }
        },
        checkSubmit(e) {  
            if (this.allow == false) {
                e.preventDefault()
                this.shake = true
                setTimeout(() => {  this.shake = false; }, 500);
            }
        }
    },
}
</script>
