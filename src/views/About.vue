<template>
  <div>
    <div class="mt-0 md:my-36 lg:my-48 mx-0 md:mx-64 lg:mx-128">
      <div class="vstack align-start space-48 w-full p-36 md:p-48 rounded-3 md:shadow md:shadow-2xl">
        <div class="text-48 title md:text-64" style="font-weight: 300;">About DHAP</div>
        <div class="text-20 weight-300 text-justify" style="line-height: 1.2;">
          The Dunman High Model ASEAN Plus Summit (DHAP) is the flagship event of Dunman High School’s International and Strategic Affairs Council (ISAC) with a trademark on ASEAN. The summit brings together young people from the Southeast Asian region and beyond. Delegates engage in intellectually stimulating debates on pertinent regional and global issues that revolve around the United Nations and ASEAN. Through a series of debates, 5 councils ranging from regional to international committees will come up with realistic solutions to resolve issues faced by the world.
        </div>
        <div class="align-self-stretch grid grid-cols-1 my-48 gap-18 sm:p-8 md:grid-cols-2" style="justify-items: center;">
          <img src="../static/DHAP2021_Logo.svg" class="w-384 h-384">
          <img src="../static/ISAC_Logo.svg" class="w-384 h-384">
        </div>
        <div class="text-20 weight-300 text-justify" style="line-height: 1.2;">
          Organised by ISAC members annually, DHAP has been, and continues to be a key platform for ISAC members to develop their leadership potential, enrich their global perspective, and forge meaningful friendships with like-minded youth outside of Dunman High School.
        </div>
      </div>
    </div>

    <Footer />
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
