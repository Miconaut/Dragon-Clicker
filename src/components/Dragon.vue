<script scoped>
import { useStore } from '../stores/store.js'

export default({
    setup() {
        const store = useStore()

        let money = store.money
        let food = store.food
        let currentLevel = store.currentLevel
        let level = store.level
        let clicks = store.clicks

        let click = () => {
            store.clicks++;
            store.money++;
        
            if (store.clicks == 10) {
                store.money+=10;
                store.clicks = 0;
            }
        }

        let feed = () => {
            food-=100;
            level+=10;
        }

        let evolve = () => {
            level = 0;
            currenLevel++;
        }

        return {
            money,
            food,
            currentLevel,
            level,
            clicks,

            click,
            feed,
            evolve
        }
    }
})
</script>

<template>
    <div class="component max-w-[714px] max-h-[673px] p-10 col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col justify-between items-center gap-5 w-br:col-start-1 w-br:col-end-2 w-br:row-start-2 w-br:row-end-3 xs:p-5">
            <div class="flex flex-row items-center gap-5">
                <p class="text-2xl text-white">Level <span>{{ currentLevel }}</span></p>
                <!-- progress bar -->
                <div class="w-[200px] h-5 bg-gray rounded-full">
                    <div id="progress" :style="{width: `${level}%`}" class="h-full bg-green rounded-full"></div>
                </div>
            </div>
            <!-- dragon -->
            <button class="dragon" @click="click">
                <img src="../images/adults/Reaper_Dragon.png" alt="dragon">
            </button>
            <!-- buttons -->
            <div class="flex flex-row gap-5">
                <button class="button enabled">feed me!</button>
                <button class="button disabled">evolve</button>
            </div>
        </div>
</template>