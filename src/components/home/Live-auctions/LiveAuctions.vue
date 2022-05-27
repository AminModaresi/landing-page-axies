<template>
  <section class="live-auctions py-10">
    <div class="container mx-auto">
        <BaseHeader title="Live Auctions" :exploer="true"/>
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