<script setup>
    import ShopItem from './ShopItem.vue'
</script>

<template>
    <div class="component max-w-[680px] max-h-fit p-10 col-start-2 col-end-4 row-start-3 row-end-4 flex flex-col gap-5 w-br:col-start-1 w-br:col-end-2 w-br:row-start-3 w-br:row-end-4 sm:max-h-[494px]">
            <p class="text-2xl text-white">Shop:</p>
            <!-- shop items -->
            <div class="w-full h-full flex flex-row justify-center items-center flex-wrap gap-8">
                <ShopItem />
            </div>
        </div>
</template>

<style scoped>
    
</style>