<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container">
                <div class="vstack align-start space-48 mx-18">
                    <div class="text-48 title md:text-64" style="font-weight: 300;">Schedule</div>
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
                    <div class="vstack mx-18 space-64 ">

                        <!--put stuff here-->

                        <div class="align-self-stretch grid grid-cols-1 mx-18 my-48 md:grid-cols-2 lg:grid-cols-3 gap-18 sm:p-8 my-18">
                            <div class="item">
                                <div id="timeline">
                                    <div>
                                        <section class="year">
                                            <h3>2007</h3>
                                            <section>
                                                <ul>
                                                    <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
                                                </ul>
                                            </section>
                                        </section>
                                        <section class="year">
                                            <h3>2008</h3>
                                            <section>
                                                <h4>August</h4>
                                                <ul>
                                                    <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                                                    <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>October</h4>
                                                <ul>
                                                    <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>November</h4>
                                                <ul>
                                                    <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
                                                </ul>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div id="timeline">
                                    <div>
                                        <section class="year">
                                            <h3>2007</h3>
                                            <section>
                                                <ul>
                                                    <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
                                                </ul>
                                            </section>
                                        </section>
                                        <section class="year">
                                            <h3>2008</h3>
                                            <section>
                                                <h4>August</h4>
                                                <ul>
                                                    <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                                                    <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>October</h4>
                                                <ul>
                                                    <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>November</h4>
                                                <ul>
                                                    <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
                                                </ul>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div id="timeline">
                                    <div>
                                        <section class="year">
                                            <h3>2007</h3>
                                            <section>
                                                <ul>
                                                    <li>Satoshi Nakamoto began working on the Bitcoin concept.</li>
                                                </ul>
                                            </section>
                                        </section>
                                        <section class="year">
                                            <h3>2008</h3>
                                            <section>
                                                <h4>August</h4>
                                                <ul>
                                                    <li>Neal Kin, Vladimir Oksman, and Charles Bry file an application for an encryption patent application.</li>
                                                    <li>Bitcoin.org was registered at <a href="https://anonymousspeech.com/">anonymousspeech.com</a>.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>October</h4>
                                                <ul>
                                                    <li>Nakamoto describes the Bitcoin currency and solves the problem of double spending.</li>
                                                </ul>
                                            </section>
                                            <section>
                                                <h4>November</h4>
                                                <ul>
                                                    <li>The Bitcoin project is registered on <a href="https://sourceforge.net/">SourceForge.net</a>.</li>
                                                </ul>
                                            </section>
                                        </section>
                                    </div>
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
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

a {
    color: #50585f;
    text-decoration: none;
}

a:hover {
    color: #383e44;
}

div.container {
    display: flex;
    flex: auto;
    flex-direction: column;
    max-height: 100%;
}

div.header {
    height: auto;
    text-align: center;
    background: slategrey;
    color: ghostwhite;
    padding: 2.3rem 1rem 2.3rem 1rem;
    position: relative;
}

div.header:after {
    content: "";
    position: absolute;
    bottom: -5rem;
    left: 0rem;
    height: 5.1rem;
    display: block;
    width: 100%;
    z-index: 300;
    background: -moz-linear-gradient(top, white 20%, rgba(255, 255, 255, 0) 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, white 20%, rgba(255, 255, 255, 0) 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#00ffffff", GradientType=0);
    /* IE6-9 */
}

div.header h1 {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    font-weight: 200;
    font-size: 1.6em;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}

@media (min-width: 62em) {
    div.header h1 {
        font-size: 1.9em;
        letter-spacing: 0.2rem;
    }
}

div.header h2 {
    font-size: 1.1em;
    font-weight: 400;
    color: #cfd7de;
    max-width: 30rem;
    margin: auto;
}

div.item {
    display: flex;
    flex: auto;
    padding: 0rem 1rem 0rem 1rem;
}

#timeline {
    position: relative;
    display: table;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
}

#timeline div:after {
    content: "";
    width: 2px;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 60px;
    z-index: 1;
    background: #C5C5C5;
}

#timeline h3 {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    color: #888;
    margin: 0;
    font-size: 1em;
    font-weight: 400;
}

@media (min-width: 62em) {
    #timeline h3 {
        font-size: 1.1em;
    }
}

#timeline section.year {
    position: relative;
}

#timeline section.year:first-child section {
    margin-top: -1.3em;
    padding-bottom: 0px;
}

#timeline section.year section {
    position: relative;
    padding-bottom: 1.25em;
    margin-bottom: 2.2em;
}

#timeline section.year section h4 {
    position: absolute;
    bottom: 0;
    font-size: 0.9em;
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
    padding: 0 0 0 89px;
    color: #C5C5C5;
}

@media (min-width: 62em) {
    #timeline section.year section h4 {
        font-size: 1em;
    }
}

#timeline section.year section ul {
    list-style-type: none;
    padding: 0 0 0 75px;
    margin: -1.35rem 0 1em;
    max-width: 32rem;
    font-size: 1em;
}

@media (min-width: 62em) {
    #timeline section.year section ul {
        font-size: 1.1em;
        padding: 0 0 0 81px;
    }
}

#timeline section.year section ul:last-child {
    margin-bottom: 0;
}

#timeline section.year section ul:first-of-type:after {
    content: "";
    width: 10px;
    height: 10px;
    background: #C5C5C5;
    border: 2px solid #FFFFFF;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    left: 54px;
    top: 3px;
    z-index: 2;
}

#timeline section.year section ul li {
    margin-left: 0.5rem;
}

#timeline section.year section ul li:before {
    content: "·";
    margin-left: -0.5rem;
    padding-right: 0.3rem;
}

#timeline section.year section ul li:not(:first-child) {
    margin-top: 0.5rem;
}

#timeline section.year section ul li span.price {
    color: mediumturquoise;
    font-weight: 500;
}

#price {
    display: inline;
}

svg {
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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
