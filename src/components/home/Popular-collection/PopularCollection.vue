<template>
    <section class="live-auctions py-10">
        <div class="container mx-auto">
            <BaseHeader title="Popular Colloection" :exploer="true"/>
            <div class="flex flex-wrap justify-center">
                <PopularCollectionItem v-for="item in data" :key="item.box" :image1="item.image1" :image2="item.image2" :image3="item.image3" :image4="item.image4" :image5="item.image5" :avatar="item.avatar" :box="item.box"/>
            </div>
        </div>
  </section>
</template>

<script>
import PopularCollectionItem from './PopularCollectionItem.vue'
export default {
    components: {
        PopularCollectionItem,
    },
    setup() {
        let data = [
            {image1 : "collection-item-bottom-4.jpg" , image2 : "collection-item-2.jpg" , image3 : "collection-item-top-1.jpg" , image4 : "collection-item-2.jpg" , image5 : "collection-item-top-2.jpg" , avatar : 'avt-1.jpg' , box:1},
            {image1 : "img-collection11.jpg" , image2 : "img-collection23.jpg" , image3 : "img-collection24.jpg" , image4 : "img-collection10.jpg" , image5 : "img-collection11.jpg" , avatar : 'avt-2.jpg' , box:2 },
            {image1 : "img-collection17.jpg" , image2 : "img-collection17.jpg" , image3 : "img-collection18.jpg" , image4 : "img-collection25.jpg" , image5 : "img-collection12.jpg" , avatar : 'avt-3.jpg' , box:3 },
        ]
        return {
            data
        }
    },
}
</script>