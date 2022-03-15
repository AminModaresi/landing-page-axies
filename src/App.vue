<template>
  <Navbar />
  <Baner />
  <Features />
</template>
<script>
import Navbar from "./components/layout/Navbar.vue"
import Baner from "./components/home/Baner.vue"
import Features from "./components/home/Features.vue"
export default {
  components :{
    Navbar,
    Baner,
    Features
  }
}
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
