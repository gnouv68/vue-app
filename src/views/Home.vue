<template>
  <NavBar/>
  <Header/>
  <Services/>
  <Details />
  <Basic2 />
  <Features/>
  <CardsVue/>
  <Slider/>
  <Basic3/>
  <Contact/>
  <Footer/>
  <Copyright/>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import Basic2 from "@/components/Basic2.vue"
import Features from "@/components/Features.vue"
import CardsVue from "@/components/Cards.vue"
import Slider from "@/components/Slider.vue"
import Basic3 from "@/components/Basic3.vue"
import Contact from "@/components/Contact.vue"
import Footer from "@/components/Footer.vue"
import Copyright from "@/components/Copyright.vue"

import Details from '@/components/Details.vue'
import Services from '@/components/Services.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Header,
    Basic2,
    Features,
    CardsVue,
    Slider,
    Basic3,
    Contact,
    Footer,
    Copyright,
    Details,
    Services,
    
}
}
</script>
