<template>
    <nav class="hstack sticky z-10 t-0 lg:p-32 h-80  bg-color">
        <!--div class="w-48 h-48 mx-28 border border-2 border-gray-300 rounded-full"></div-->
        <router-link to="/">
            <img src="../static/DHAP2021_Logo.svg" class="w-48 h-48 mx-28">
        </router-link>
        <div class="spacer"></div>
        <div class="hidden lg:unhidden">
            <div class="hstack space-28">
                <div class="spacer"></div>
                <div class="zstack group">
                    <router-link to="/" class="group mb-5"><i class="fas fa-angle-down"></i> About</router-link>
                    <div class="hidden group-hover:unhidden bottom-0 transform translate-y-100">
                        <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
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
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                            <!-- Nested drop down item -->
                            <router-link to="/writeups" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                    <div class="nested">Writeup</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link to="/schedule" class="mb-5">Schedule</router-link>
                <router-link to="/resources" class="mb-5">Resources</router-link>
                <a href="" class="mb-5">Register</a>
                <router-link to="/faq" class="mb-5">FAQ</router-link>
                <router-link to="/contact" class="mb-5">Contact Us</router-link>
            </div>
        </div>
        <div class="unhidden lg:hidden">
            <div class="hstack px-24 py-16">
                <div class="spacer"></div>
                <div class="group zstack">
                    <div class="group vstack space-5 mb-5">
                        <div class="h-2 w-28 bg-black rounded-full sandwich"></div>
                        <div class="h-2 w-28 bg-black rounded-full sandwich"></div>
                        <div class="h-2 w-28 bg-black rounded-full sandwich"></div>
                    </div>
                    <div class="hidden group-hover:unhidden bottom-right-0 bottom-0 transform translate-y-100">
                        <!-- Drop down -->
                        <div class="vstack py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <router-link to="/" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="dropdown ">
                                        <i class="fas fa-angle-left"></i> About
                                    </div>
                                </router-link>
                                <div class="hidden group-hover:unhidden ml-8 top-left-0 transform -translate-x-100">
                                    <div class="vstack align-start w-full py-16 w-224 card-bg rounded-12 shadow shadow-px shadow-lg">
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link href="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
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
                                        <div class="group zstack">
                                            <router-link to="/matm" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">M-ATM</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/ammtc" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">AMMTC</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/aia" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">AIA</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/unsc" class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                                <div class="xs-nested">UNSC</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
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
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
                                            </router-link>
                                        </div>
                                        <!-- Nested drop down item -->
                                        <div class="group zstack">
                                            <router-link to="/writeup" class="vstack align-start space-8 p-16 bg-my-gray-hover">
                                                <div class="xs-nested">Writeup</div>
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
                            <router-link to="/resources" class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">Resources</div>
                                </div>
                            </router-link>
                            <!-- Drop down item -->
                            <div class="group zstack">
                                <div class="vstack align-start space-8 p-16 bg-my-gray-hover w-full">
                                    <div class="">Register</div>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
