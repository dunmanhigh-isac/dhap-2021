<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 300;">FAQ</div>
                    <div class="vstack space-14 align-start">
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                        <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mt-28 mx-18 ">
                    <ul>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>How will council sessions be conducted?</h2>
                            <p>The conference will be conducted on Discord, following Singapore’s timezone (GMT +08:00). Adjustments will be made to the Rules of Procedure (ROP) to ensure the smooth running of debate. Stay tuned for the release of the revised
                                ROP!
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>Who can participate in Dunman High Model ASEAN Plus Summit (DHAP)?</h2>
                            <p>Dunman High Model ASEAN Plus Summit (DHAP) is targeted at students from 15 to 19 years old. Should you fall outside this age group, we still encourage application, nevertheless, and will process them on a case-by-case basis. Registration
                                will be processed on a first come, first served basis and the organisers reserve the right to turn down registrations in the event of oversubscription.
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>Do I have a choice of council and country?</h2>
                            <p>Delegates will have the opportunity to indicate their council preferences when they register. However, the eventual allocation will be assigned by the Secretariat.
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>How can I register for DHAP 2021?</h2>
                            <p>Registration can be made as a school delegation or an independent delegate. Registration begins on 18 February 2019 and ends on 24 March 2019. To register, please fill up the form which will be found under the ‘Registration’ tab
                                of our website.
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>How many delegations can each school register?</h2>
                            <p>Each school can register one delegation. There is a minimum of five delegates per delegation.
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>Will awards be issued?</h2>
                            <p>In recognition of delegates’ performance, awards will still be issued for DHAP 2021.
                            </p>
                        </li>
                        <li>
                            <input type="checkbox" checked>
                            <i></i>
                            <h2>I am not familiar with Discord. Can I still participate?</h2>
                            <p>Yes
                            </p>
                        </li>
                    </ul>
    
                </div>
    
                <hr>
    
                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped>
.transition,
ul li i:before,
ul li i:after,
p {
    transition: all 0.1s ease-in-out;
}

.no-select,
h2 {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px !important;
}

h1 {
    text-transform: uppercase;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 3px;
    font-weight: 100;
}

h2 {
    font-size: 26px;
    line-height: 34px;
    font-weight: 300;
    letter-spacing: 1px;
    display: block;
    background-color: var(--hero-gray);
    margin: 0;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
}

p {
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
}

ul {
    list-style: none;
    perspective: 900;
    padding: 0;
    margin: 0;
}

ul li {
    position: relative;
    padding-left: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
}

ul li:last-of-type {
    padding-bottom: 0;
}

ul li i {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 22px;
    right: 0;
}

ul li i:before,
ul li i:after {
    content: "";
    position: absolute;
    background-color: var(--text-color);
    width: 3px;
    height: 9px;
    right: 20px;
}

ul li i:before {
    transform: translate(-2px, 0) rotate(45deg);
}

ul li i:after {
    transform: translate(2px, 0) rotate(-45deg);
}

ul li input[type=checkbox] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
}

ul li input[type=checkbox]:checked~p {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    transform: translate(0, 50%);
}

ul li input[type=checkbox]:checked~i:before {
    transform: translate(2px, 0) rotate(45deg);
}

ul li input[type=checkbox]:checked~i:after {
    transform: translate(-2px, 0) rotate(-45deg);
}

@keyframes flipdown {
    0% {
        opacity: 0;
        transform-origin: top center;
        transform: rotateX(-90deg);
    }
    5% {
        opacity: 1;
    }
    80% {
        transform: rotateX(8deg);
    }
    83% {
        transform: rotateX(6deg);
    }
    92% {
        transform: rotateX(-3deg);
    }
    100% {
        transform-origin: top center;
        transform: rotateX(0deg);
    }
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
