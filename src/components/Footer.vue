<template>
    <footer class="vstack space-28 py-48">
        <!-- <img src="../static/ISAC_Logo.svg" class="w-48 h-48 mx-28" style="color: white;"> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-48 h-48 mx-28 svg-fill" width="920.1" height="1067.09" viewBox="0 0 920.1 1067.09"><path d="M1,481c.63-6.25,1.35-12.5,1.88-18.77A450.59,450.59,0,0,1,48.83,298.51a459.32,459.32,0,0,1,117-148.45c.63-.53,1.24-1.09,2.35-2.07C139.46,105,110.8,62,81.86,18.57l25.3-16.95,85.05,127.52c99-69.28,208.35-97.46,328-82.51,96.1,12,180.16,51.57,251.46,117.06,139,127.68,162.7,296.36,143.74,408.61l-30.35-3.57c4.5-34.67,6.67-69,3-103.71H474.17V931.4c96-3.62,181.19-35.48,256.72-95.21l19.23,25.44-57.48,39.65q35.18,57.81,71.14,116.93l-25.92,15.84c-24.21-39.74-48.24-79.21-72.49-119a461.46,461.46,0,0,1-176.06,46.91v46H592.58v60.79H324.38v-60.5H427.73V961.83c-8.07-.92-16.16-1.77-24.22-2.75-54.54-6.65-106.33-22.47-154.77-48.32Q86.21,824.06,25.17,650A425.75,425.75,0,0,1,2.88,543.3C2.38,537.19,1.63,531.1,1,525ZM442.87,931.17V74.52c-1.1-.06-1.9-.18-2.7-.14a427.91,427.91,0,0,0-127.56,26c-5.07,1.87-10.62,3.73-14.57,7.18A311,311,0,0,0,248,163.1c-37.32,53.09-56.94,111.37-51,176.9,3.15,34.94,13.71,67.61,34.21,96.19,17.55,24.47,36.48,48,55.25,71.54C308.07,535,330,562,346.24,593c12.51,23.82,21.11,48.8,22.72,75.86,2.08,35-7.41,67.15-24.56,97.31-18.38,32.34-42.85,59.71-69.84,85-8.48,7.94-17.24,15.6-26.36,23.83C308.7,909.38,373.29,927.92,442.87,931.17ZM220.3,148c-.7.43-1.29.75-1.83,1.12C168.88,183.41,127.9,226,96.35,277.35c-52.21,85-72.25,177.34-61.1,276.32A413.42,413.42,0,0,0,77.67,694.78c33,65.38,79.78,118.83,139.72,160.86,2.7,1.9,4.42,1.73,6.79-.4,6.68-6,13.68-11.68,20.36-17.7,26.59-23.93,51.09-49.69,69.93-80.39,25.69-41.84,32.63-85.55,13.35-131.94-11.55-27.79-28.62-52.16-47-75.65-21.88-27.91-44.42-55.31-66-83.45-33.94-44.22-49.84-94.74-49.45-150.26.3-44.48,11.09-86.62,31.33-126.2C203.89,175.52,212.31,162,220.3,148ZM884,433.85C852.89,226.45,667.21,76.58,474.12,74.56V433.85Z" transform="translate(-1 -1.62)"/></svg>
        <div class="hstack space-28">
            <a href="https://www.instagram.com/dhaseanplus/">
                <div class="vstack w-36 h-36 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                    <i class="fab fa-instagram logo"></i>
                </div>
            </a>
            <div class="vstack w-36 h-36 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                <i class="fab fa-facebook-f logo"></i>
            </div>
            <div class="vstack w-36 h-36 rounded-2 border border-gray-300 border-2 bg-my-gray-hover diamond hover-cursor">
                <i class="far fa-envelope logo"></i>
            </div>
        </div>
        <div class="spacer"></div>
        <div class="vstack space-14">
            <div class="">© Copyright 2021</div>
            <div class="">Dunman High School ISAC</div>
        </div>
    </footer>
</template>

<style scoped>
.diamond {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.logo {
    -webkit-transform: rotate(45deg);
    transform: rotate(-45deg);
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
