<template>
  <div class="w-full sm:basis-6/12 lg:basis-4/12 px-2 mb-5">
    <article class="bg-[#343444] rounded-2xl p-5">
      <div class="mb-5">
        <div class="flex mb-3">
          <div class="basis-1/2 px-1">
            <img
              class="w-full h-[9rem] rounded-2xl object-cover"
              :src="image1Src"
              alt=""
            />
          </div>
          <div class="basis-1/2 px-1">
            <img
              class="w-full h-[9rem] rounded-2xl object-cover"
              :src="image2Src"
              alt=""
            />
          </div>
        </div>
        <div class="flex">
          <div class="basis-1/3 px-1">
            <img
              class="w-full h-[6.5rem] rounded-2xl object-cover"
              :src="image3Src"
              alt=""
            />
          </div>
          <div class="basis-1/3 px-1">
            <img
              class="w-full h-[6.5rem] rounded-2xl object-cover"
              :src="image4Src"
              alt=""
            />
          </div>
          <div class="basis-1/3 px-1">
            <img
              class="w-full h-[6.5rem] rounded-2xl object-cover"
              :src="image5Src"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="flex w-full justify-between items-center">
        <div class="px-1 flex items-center">
          <div class="relative">
            <FontAwesomeIcon class="text-gray-100 absolute bottom-[-0.5rem] right-0 text-purple-400" icon="check-circle" />
            <img class="w-[3.5rem] rounded-xl" :src="avatarSrc" alt="" />
          </div>
          <div class="ml-3">
            <p class="text-[1rem] text-gray-200">Creator Art Collection</p>
            <p class="text-[0.9rem] text-gray-200">
              <span class="text-[0.7rem] text-gray-400">Create By : </span>
              SalvadorDali
            </p>
          </div>
        </div>
        <span class="bg-[#14141F] py-1 px-3 text-[0.8rem] rounded-full">
          <FontAwesomeIcon class="text-gray-100" icon="heart" />
          100
        </span>
      </div>
    </article>
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
export default {
  props: {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    image5: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    box: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    let image1Src = ref("");
    let image2Src = ref("");
    let image3Src = ref("");
    let image4Src = ref("");
    let image5Src = ref("");
    let avatarSrc = ref("");
    watchEffect(async () => {
      image1Src.value = (
        await import(
          `../../../assets/images/06_Popular Collection/box${props.box}/${props.image1}`
        )
      ).default;
      image2Src.value = (
        await import(
          `../../../assets/images/06_Popular Collection/box${props.box}/${props.image2}`
        )
      ).default;
      image3Src.value = (
        await import(
          `../../../assets/images/06_Popular Collection/box${props.box}/${props.image3}`
        )
      ).default;
      image4Src.value = (
        await import(
          `../../../assets/images/06_Popular Collection/box${props.box}/${props.image4}`
        )
      ).default;
      image5Src.value = (
        await import(
          `../../../assets/images/06_Popular Collection/box${props.box}/${props.image5}`
        )
      ).default;
      avatarSrc.value = (
        await import(`../../../assets/images/04_Top Seller/${props.avatar}`)
      ).default;
    });
    return {
      image1Src,
      image2Src,
      image3Src,
      image4Src,
      image5Src,
      avatarSrc,
    };
  },
};
</script>