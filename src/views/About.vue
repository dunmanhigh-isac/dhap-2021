<template>
  <div>
    <div class="mt-0 md:my-36 lg:my-48 mx-0 md:mx-64 lg:mx-128">
      <div class="glass-card vstack align-start space-48 w-full p-36 md:p-48 rounded-10 md:shadow md:shadow-2xl">
        <div class="text-48 title md:text-64" style="font-weight: 500;">About DHAP</div>
        <div class="text-20 weight-400 text-justify" style="line-height: 1.2;">
          The Dunman High Model ASEAN Plus Summit (DHAP) is the flagship event of Dunman High School’s International and Strategic Affairs Council (ISAC) with a trademark on ASEAN. The summit brings together young people from the Southeast Asian region and beyond. Delegates engage in intellectually stimulating debates on pertinent regional and global issues that revolve around the United Nations and ASEAN. Through a series of debates, the international and regional councils will come up with realistic solutions to resolve issues faced by the world.
        </div>
        <div class="text-20 weight-400 text-justify" style="line-height: 1.2;">
          Organised by ISAC members annually, DHAP has been, and continues to be a key platform for ISAC members to develop their leadership potential, enrich their global perspective, and forge meaningful friendships with like-minded youth outside of Dunman High School.
        </div>
        <div class=" grid grid-cols-2 my-48 gap-18 sm:p-8 " style="justify-items: center;">
          <img src="../static/DHAP2021_Logo.svg" class="w-128 h-128">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-128 h-128 svg-fill" width="920.1" height="1067.09" viewBox="0 0 920.1 1067.09"><path d="M1,481c.63-6.25,1.35-12.5,1.88-18.77A450.59,450.59,0,0,1,48.83,298.51a459.32,459.32,0,0,1,117-148.45c.63-.53,1.24-1.09,2.35-2.07C139.46,105,110.8,62,81.86,18.57l25.3-16.95,85.05,127.52c99-69.28,208.35-97.46,328-82.51,96.1,12,180.16,51.57,251.46,117.06,139,127.68,162.7,296.36,143.74,408.61l-30.35-3.57c4.5-34.67,6.67-69,3-103.71H474.17V931.4c96-3.62,181.19-35.48,256.72-95.21l19.23,25.44-57.48,39.65q35.18,57.81,71.14,116.93l-25.92,15.84c-24.21-39.74-48.24-79.21-72.49-119a461.46,461.46,0,0,1-176.06,46.91v46H592.58v60.79H324.38v-60.5H427.73V961.83c-8.07-.92-16.16-1.77-24.22-2.75-54.54-6.65-106.33-22.47-154.77-48.32Q86.21,824.06,25.17,650A425.75,425.75,0,0,1,2.88,543.3C2.38,537.19,1.63,531.1,1,525ZM442.87,931.17V74.52c-1.1-.06-1.9-.18-2.7-.14a427.91,427.91,0,0,0-127.56,26c-5.07,1.87-10.62,3.73-14.57,7.18A311,311,0,0,0,248,163.1c-37.32,53.09-56.94,111.37-51,176.9,3.15,34.94,13.71,67.61,34.21,96.19,17.55,24.47,36.48,48,55.25,71.54C308.07,535,330,562,346.24,593c12.51,23.82,21.11,48.8,22.72,75.86,2.08,35-7.41,67.15-24.56,97.31-18.38,32.34-42.85,59.71-69.84,85-8.48,7.94-17.24,15.6-26.36,23.83C308.7,909.38,373.29,927.92,442.87,931.17ZM220.3,148c-.7.43-1.29.75-1.83,1.12C168.88,183.41,127.9,226,96.35,277.35c-52.21,85-72.25,177.34-61.1,276.32A413.42,413.42,0,0,0,77.67,694.78c33,65.38,79.78,118.83,139.72,160.86,2.7,1.9,4.42,1.73,6.79-.4,6.68-6,13.68-11.68,20.36-17.7,26.59-23.93,51.09-49.69,69.93-80.39,25.69-41.84,32.63-85.55,13.35-131.94-11.55-27.79-28.62-52.16-47-75.65-21.88-27.91-44.42-55.31-66-83.45-33.94-44.22-49.84-94.74-49.45-150.26.3-44.48,11.09-86.62,31.33-126.2C203.89,175.52,212.31,162,220.3,148ZM884,433.85C852.89,226.45,667.21,76.58,474.12,74.56V433.85Z" transform="translate(-1 -1.62)"/></svg>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.glass-card {
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur( 1.5px);
    -webkit-backdrop-filter: blur( 1.0px);
    border: 1px solid rgba( 255, 255, 255, 0.18);
}

@media only screen and (max-width: 768px) {
  .glass-card {
    background: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border: none;
  }
}

.svg-fill {
    fill: var(--text-color);
}

@media (prefers-color-scheme: dark) {
    .svg-fill {
        fill: var(--text-color);
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
