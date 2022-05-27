<template>
  <section class="live-auctions py-10">
    <div class="container mx-auto">
      <BaseHeader title="Top Seller" />
      <div class="flex flex-wrap justify-center">
        <TopSellerItem v-for="(item , index) in data" :key="index" :name="item.Name" :money="item.money" :avatar="item.avatar"/>
      </div>
    </div>
  </section>
</template>

<script>
import TopSellerItem from './TopSellerItem.vue'
export default {
    components : {
        TopSellerItem
    },
    setup() {
        let data = [
            {Name : 'Crispin Berry' , money : "214.2 ETH" , avatar: "avt-1"},
            {Name : 'Windsor Lane' , money : "120.7 ETH" , avatar: "avt-2"},
            {Name : 'Blake Banks' , money : "68.2 ETH" , avatar: "avt-3"},
            {Name : 'Matt Ramos' , money : "38.4 ETH" , avatar: "avt-4"},
            {Name : 'Crispin Berry' , money : "214.2 ETH" , avatar: "avt-5"},
            {Name : 'Tommy Alvarez' , money : "170.3 ETH" , avatar: "avt-6"},
            {Name : 'Andy Hurlbutt' , money : "82.79 ETH" , avatar: "avt-7"},
            {Name : 'Monica Lucas' , money : "52.8 ETH" , avatar: "avt-8"},
            {Name : 'Harper Wilcher' , money : "29.2 ETH" , avatar: "avt-9"},
            {Name : 'Crispin Berry' , money : "170.3 ETH" , avatar: "avt-4"},
        ]
        return { 
            data
        }
    }
}
</script>