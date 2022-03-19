<template>
      <swiper :slides-per-view="4" :space-between="50">
        <swiper-slide v-for="(item , index) in item" :key="index">
              <LiveAuctionItem :image="item.image" :avatar="item.avatar"/>
        </swiper-slide>        
      </swiper>
</template>
<script>
import LiveAuctionItem from "./LiveAuctionsItem.vue"
export default {
  components : {
    LiveAuctionItem
  },
  setup() {
    const item = [
      {image : "card-item8.jpg" , avatar : "avt-1.jpg"},
      {image : "image-box-10.jpg" , avatar : "avt-2.jpg"},
      {image : "image-box-11.jpg" , avatar : "avt-3.jpg"},
      {image : "image-box-21.jpg" , avatar : "avt-4.jpg"},
      {image : "card-item8.jpg" , avatar : "avt-5.jpg"},
      {image : "image-box-10.jpg" , avatar : "avt-6.jpg"},
    ]
    return {
      item
    }
  }
}
</script>
