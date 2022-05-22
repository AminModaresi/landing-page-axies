<template>
  <swiper :breakpoints="breakpoints" :pagination="true" :modules="modules" :autoplay='autoplay'>
    <swiper-slide v-for="(item, index) in item" :key="index">
      <LiveAuctionItem :image="item.image" :avatar="item.avatar" />
    </swiper-slide>
  </swiper>
</template>
<script>
import LiveAuctionItem from "./LiveAuctionsItem.vue"
import { Autoplay, Pagination, Navigation } from 'swiper';
export default {
  components: {
    LiveAuctionItem
  },
  setup() {
    const autoplay = {
        delay: 4000,
        disableOnInteraction: true
    }
    const breakpoints = {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
    const item = [
      { image: "card-item8.jpg", avatar: "avt-1.jpg" },
      { image: "image-box-10.jpg", avatar: "avt-2.jpg" },
      { image: "image-box-11.jpg", avatar: "avt-3.jpg" },
      { image: "image-box-21.jpg", avatar: "avt-4.jpg" },
      { image: "card-item8.jpg", avatar: "avt-5.jpg" },
      { image: "image-box-10.jpg", avatar: "avt-6.jpg" },
    ]
    return {
      item,
      breakpoints,
      autoplay,
      modules: [Autoplay, Pagination, Navigation],
    }
  }
}
</script>
