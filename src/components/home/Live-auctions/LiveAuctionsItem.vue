<template>
  <article class="live-auction-item p-5 rounded-3xl">
    <div class="live-auction-item__img mb-4 relative">
      <figure>
        <img :src="images" alt="" class="w-full rounded-3xl" />
      </figure>
      <div
        class="
          live-auction-item__img--badge
          bottom-0
          top-0
          bg-gray-100
          text-gray-600
          py-2
          px-5
          w-[125px]
          h-[40px]
          opacity-0
        "
      >
        <FontAwesomeIcon
          class="text-[0.9rem] text-indigo-600"
          icon="bag-shopping"
        />
        <span class="ml-1 text-gray-800 font-medium text-[0.9rem]">
          Place Bid
        </span>
      </div>
      <div
        class="
          live-auction-item__img--badge
          bottom-2
          inline-table
          bg-gray-800
          w-[135px]
          h-[30px]
          px-4
        "
      >
        <FontAwesomeIcon class="text-indigo-700" icon="fire" />
        <span class="ml-2 text-[0.7rem]"> 1 : 10 : 25 : 30 </span>
      </div>
    </div>
    <div class="live-auction-item__content">
      <p class="live-auction-item__content--text mb-2 text-[0.9rem]">
        “Hamlet Contemplates Yorick’s...
      </p>
      <div class="personal-data flex justify-between items-center">
        <div class="personal-data-left flex items-center">
          <img class="w-[2.5rem] rounded-xl" :src="Avatar" alt="" />
          <div class="ml-2">
            <p class="text-[0.6rem] text-gray-400">Creator</p>
            <p class="text-[0.8rem] text-gray-200">SalvadorDali</p>
          </div>
        </div>
        <div class="personal-data-right">
          <span class="bg-indigo-600 text-[0.7rem] py-1 px-3 rounded-full"
            >BSC</span
          >
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="live-aution-item__footer flex items-center justify-between">
      <div class="live-aution-item__footer--right">
        <p class="text-[0.6rem] text-gray-400">Creator</p>
        <p class="text-[0.9rem] text-gray-200">
          4.89 ETH
          <span class="text-[0.6rem] text-gray-400">~ $12.56</span>
        </p>
      </div>
      <div class="live-aution-item__footer--right">
        <span class="bg-[#14141F] py-1 px-3 text-[0.6rem] rounded-full">
          <FontAwesomeIcon class="text-gray-100" icon="heart" />
          100
        </span>
      </div>
    </div>
  </article>
</template>
<script>
import { computed , ref, watchEffect} from "@vue/runtime-core";
export default {
  props: ["image", "avatar"],
  setup(props) {
    let images = ref("")
    let Avatar = ref("")
    watchEffect(async () => {
      images.value = (await import(`../../../assets/images/03_Live Auctions/${props.image}`)).default;
      Avatar.value = (await import(`../../../assets/images/04_Top Seller/${props.avatar}`)).default;
    });
    return {
      images,
      Avatar
    };
  },
};
</script>
<style lang="scss" scoped>
    @import "../../../assets/styles/live-auction.scss";
</style>