<template>
  <section class="live-auctions py-10">
    <div class="container mx-auto">
      <header
        class="live-auction-header flex items-center justify-between mb-7"
      >
        <p class="text-[1.7rem] text-bold">Live Auctions</p>
        <a href="" class="text-gray-100 border-b border-purple-900 hover:border-b-2 text-[0.8rem]">EXPLORE MORE</a>
      </header>
        <LiveAuctionsSlider/>
    </div>
  </section>
</template>
<script>
import LiveAuctionsSlider from "./LiveAuctionsSlider.vue"
export default {
  components : {
    LiveAuctionsSlider
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/live-auction.scss";
</style>