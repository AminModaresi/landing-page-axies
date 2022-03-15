<template>
  <Navbar />
  <Baner />
</template>
<script>
import Navbar from "./components/layout/Navbar.vue"
import Baner from "./components/home/Baner.vue"
export default {
  components :{
    Navbar,
    Baner
  }
}
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
