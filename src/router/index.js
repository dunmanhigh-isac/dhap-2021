import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import FAQ from '../views/FAQ.vue'
import Resources from '../views/Resources.vue'
import Schedule from '../views/Schedule.vue'
import Academics from '../views/Academics.vue'
import Contact from '../views/Contact.vue'
import AIA from '../views/AIA.vue'
import AMMTC from '../views/AMMTC.vue'
import HCC from '../views/HCC.vue'
import MATM from '../views/M-ATM.vue'
import UNSC from '../views/UNSC.vue'
import About from '../views/About.vue'
import Secretariat from '../views/Secretariat.vue'
import Welcome from '../views/Welcome.vue'
import Register from '../views/Register.vue'
import Writeup from '../views/WriteupsPlaceholder'
import Publicity from '../views/Publicity'
import Communications from '../views/Communications'
import ProjectPlanning from '../views/ProjectPlanning'
import Design from '../views/Design'
import OST from '../views/OST'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/secretariat',
  name: 'Secretariat',
  component: Secretariat
},
{
  path: '/welcome',
  name: 'Welcome',
  component: Welcome
},
{
  path: '/about',
  name: 'About',
  component: About
},
{
  path: '/admin',
  name: 'Admin',
  component: Admin
},
{
  path: '/academics',
  name: 'Academics',
  component: Academics
},
{
  path: '/faq',
  name: 'FAQ',
  component: FAQ
},
{
  path: '/resources',
  name: 'Resources',
  component: Resources
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/schedule',
  name: 'Schedule',
  component: Schedule
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  path: '/aia',
  name: 'AIA',
  component: AIA
},
{
  path: '/ammtc',
  name: 'AMMTC',
  component: AMMTC
},
{
  path: '/hcc',
  name: 'HCC',
  component: HCC
},
{
  path: '/matm',
  name: 'MATM',
  component: MATM
},
{
  path: '/unsc',
  name: 'UNSC',
  component: UNSC
},
{
  path: '/writeups',
  name: 'writeup',
  component: Writeup
},
{
  path: '/publicity',
  name: 'publicity',
  component: Publicity
},
{
  path: '/communications',
  name: 'communications',
  component: Communications
},
{
  path: '/projectplanning',
  name: 'projectplanning',
  component: ProjectPlanning
},
{
  path: '/design',
  name: 'design',
  component: Design
},
{
  path: '/ost',
  name: 'ost',
  component: OST
}
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
      return { x: 0, y: 0 }
  },
  mode: 'history',
  hash: false,
})

export default router
