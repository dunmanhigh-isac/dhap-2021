<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 mx-18">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">Historical United Nations Security Council</div>
                    <div class="vstack space-14 align-start">
                        <div class="text-20 weight-400 w-full text-justify" style="line-height: 1.2;">The United Nations Security Council, founded in 1945, is one of the six principal organs of the United Nations. It seeks to maintain international peace and security, as well as facilitate cooperation among nations in solving international
                            problems and disputes. Here, delegates take on the role of diplomats from the 15 member states of the council, working together to respond to longstanding threats to global security as well as crises that would disrupt the peace.
                            Additionally, they will be taken back to 2014 to seek a peaceful resolution to one of the most contentious issues of the year.</div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="vstack space-36 my-48 md:mx-128">
                        <div class="weight-500 text-36 text-center">The Question of the Russian Invasion of the Crimean Peninsula</div>
                        <div class="text-20 text-justify" style="line-height: 1.2;">On 18 March 2014, the Treaty on Accession of the Republic of Crimea to Russia was signed between the representatives of the Republic of Crimea and the Russian Federation. This formed a contentious conclusion to a tumultuous five months
                            in Ukraine with issues like President Viktor Yanukovych’s reign, the self-declared independence of the Republic of Crimea, and the deployment of Russian troops within Ukrainian territory. As such, this topic shines the spotlight
                            on the concerns of sovereignty and territorial integrity. Given how Russia has already vetoed a previous council draft resolution seeking to void a referendum declaring the Republic of Crimea’s independence, the council will now
                            have to tactically manoeuvre towards a resolution. With both Ukraine and Russia maintaining a military presence around the contentious region, delegates must work together to de-escalate tensions and do their utmost for a peaceful
                            solution.
                        </div>
                    </div>
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128">
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/HUNSC/Benjamin.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Yeo Hong Teck Benjamin</div>
                                <div class="text-18" style="line-height: 1.2;">Benjamin is a literature student with a tendency to crack puns after an unfortunate childhood incident. Like every good stereotypical literature student, Benjamin enjoys writing poetry and maybe study guides. Benjamin hopes to put the fun in MUN and  make DHAP the happiest event of the year.</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/HUNSC/Cheryl.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Chen Miao Jing Cheryl</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Cheryl is known for having numerous interests that range across a huge spectrum (which conveniently does not include studying). Despite being an Econs student, she finds joy in reading and learning about history. A master at procrastination, social media and reading sessions along with moments of respite fill the gaps in between deadlines before her phone blows up with work. She hopes that all the delegates will have a fulfilling time at DHAP.</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/HUNSC/Cheryl.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
                        </div>

                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
                            <img style="object-fit: cover" src="../static/HUNSC/Nicole.webp" class="rounded-6 w-full lg:w-320 bg-gray-400 h-full mb-16">
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-18 mt-16 w-full lg:pl-64">
                                <div class="text-36 weight-500 m-0 p-0">Ang Kah Ling Nicole</div>
                                <div class="text-18" style="line-height: 1.2;">Nicole is a PCMELL JC1 student that has useless hobbies like watching dramas on and off, being a full time NCTzen who’s too broke to buy any merch etc. Psychology is one of the more respectable subjects that fascinates her. Being a real bookworm, she likes to think that she reads intellectual books but in actuality that is a lie. She hopes that delegates will have a fun and fulfilling time while also safely interacting and learning from each other.</div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18 scroll-card">
    
                            <img style="object-fit: cover" src="../static/HUNSC/Kaiyi.webp" class="rounded-6 unhidden lg:hidden w-full lg:w-320 bg-gray-400 h-full mb-16">
    
                            <div class="vstack align-start lg:align-end space-18 lg:mt-16 w-full lg:pr-64">
                                <div class="text-36 weight-500 m-0 p-0">Kho Kai Yi</div>
                                <div class="text-18 text-left lg:text-right" style="line-height: 1.2;">Kai Yi is a JC1 student who is deputy chair of the HUNSC. He is an avid chess player and enjoys learning about philosophy. He envisions a council where delegates are able to freely express their opinions and give quality input during discussions.</div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <img style="object-fit: cover" src="../static/HUNSC/Kaiyi.webp" class="rounded-6 hidden lg:unhidden w-full lg:w-320 bg-gray-400 h-full mb-16"/>
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
