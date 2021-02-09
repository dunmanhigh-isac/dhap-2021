<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  background-color: var(--bg-color);
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #000000 0.5px, rgba(0, 0, 0, 0) 1px);
}
</style>
