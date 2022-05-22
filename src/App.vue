<template>
  <Navbar />
  <Baner />
  <Features />
  <LiveAuctions />
  <PopularCollection />
</template>
<script>
import Navbar from "./components/layout/Navbar.vue"
import Baner from "./components/home/Baner.vue"
import Features from "./components/home/Features/Features.vue"
import LiveAuctions from "./components/home/Live-auctions/LiveAuctions.vue"
import PopularCollection from "./components/home/Popular-collection/PopularCollection.vue"
export default {
  components :{
    Navbar,
    Baner,
    Features,
    LiveAuctions,
    PopularCollection
  }
}
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
