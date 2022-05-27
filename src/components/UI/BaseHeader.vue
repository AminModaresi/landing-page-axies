<template>
    <header class="flex items-center justify-between mb-7">
        <p class="text-[2rem] text-bold">{{ title }}</p>
        <a href="#" v-if="exploer" class="text-gray-100 border-b border-purple-900 hover:border-b-2 text-[0.8rem]">EXPLORE MORE</a>
    </header>
</template>

<script>
export default {
    props : {
        title : {
            type : String,
            require : true,
        },
        exploer : {
            type : Boolean,
            require : false,
            default : false,
        }
    }
}
</script>