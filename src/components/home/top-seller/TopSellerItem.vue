<template>
  <div class="w-full basis-4/12 sm:basis-3/12 lg:basis-1/5 px-2 mb-7">
    <article class="flex flex-col lg:flex-row text-center lg:text-left items-center">
      <div class="relative mb-4 lg:mb-0">
        <FontAwesomeIcon
          class="
            text-gray-100
            absolute
            bottom-[-0.5rem]
            right-0
            text-purple-400
          "
          icon="check-circle"
        />
        <img class="w-[6rem] rounded-3xl" :src="Avatar" alt="" />
      </div>
      <div class="lg:ml-3">
        <p class="text-[1rem] text-gray-200">{{ name }}</p>
        <p class="text-[0.9rem] text-gray-400">{{ money }}</p>
      </div>
    </article>
  </div>
</template>
<script>
import { ref , watchEffect } from "vue"
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    money: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    let Avatar = ref("")
    watchEffect(async () => {
      Avatar.value = (await import(`../../../assets/images/04_Top Seller/${props.avatar}.jpg`)).default;
    });
    return {
      Avatar
    };
  },
};
</script>