<script setup>
  import Earned from './Earned.vue'
  import Dragon from './Dragon.vue'
  import Shop from './Shop.vue'
</script>

<template>
    <!-- page body -->
    <main class="w-full max-w-[1346px] h-fit p-5 flex flex-col justify-start items-center gap-9 w-br:gap-x-9 w-br:gap-y-3 h-min:h-fit">
        <!-- earned money & food -->
        <div class="w-full h-fit flex justify-center w-br:w-full w-br:justify-end">
          <Earned />
        </div>
        <div class="flex flex-col justify-center items-end gap-9 w-br:gap-x-9 w-br:gap-y-3 w-br:flex-row">
          <!-- dragon -->
          <Dragon />
          <!-- shop -->
          <Shop />
        </div>
    </main>
</template>