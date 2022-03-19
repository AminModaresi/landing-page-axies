<template>
    <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <div class="feature-item">
            <div class="feature-item__icon mb-4" :class="bgIcon">
                <FontAwesomeIcon :icon="icon" />
            </div>
            <p class="feature-item__title text-[1.1rem] mb-2">{{ title }}</p>
            <p class="feature-item__text text-gray-400 text-[0.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              posuere in vestibulum volutpat. Ut pharetra morbi sit.
            </p>
          </div>
    </div>
</template>

<script>
export default {
    props : ["icon" , "title" , "bgIcon"],
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
    @import "../../../assets/styles/features.scss";
</style>