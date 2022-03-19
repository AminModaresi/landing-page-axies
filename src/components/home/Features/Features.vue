<template>
  <section class="features pt-20 pb-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-5">
        <FeaturesItem v-for="(item , index) in featuresItem" :key="index" :icon="item.icon" :title="item.title" :bg-icon="item.bgIcon"/>
      </div>
    </div>
  </section>
</template>
<script>
import FeaturesItem from "./FeaturesItem.vue"
export default {
  components: {
    FeaturesItem
  },
  setup() {
    let featuresItem = [
      {icon : "wallet" , title : "Set Up Your Wallet" , bgIcon : "bg-purple-600"},
      {icon : "wallet" , title : "Set Up Your Wallet" , bgIcon : "bg-green-500"},
      {icon : "image" , title : "Add Your NFTs" , bgIcon : "bg-blue-600"},
      {icon : "bookmark" , title : "List Them For Sale" , bgIcon : "bg-red-600"},
    ]
    return{ 
      featuresItem
    }
  },
}
</script>
<style lang="scss" scoped>
    @import "../../../assets/styles/features.scss";
</style>