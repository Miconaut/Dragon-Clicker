<script scoped>
import { useStore } from '../stores/store.js'
import { storeToRefs } from 'pinia'


// const store = useStore()
// const { money, food } = storeToRefs(store)

export default({
    setup() {
        const store = useStore()

        let money = store.money
        let food = store.food

        return {
         money,
         food
        }
    },

    data() {
        return {
            values: [
                {
                    link: 'gold/Pile_of_Gold.png',
                    alt: 'money',
                    value: this.money
                },
                {
                    link: 'food/Pile_of_Food.png',
                    alt: 'food',
                    value: this.food
                }
            ]
        }
    }
})
</script>

<template>
    <div class="component !h-fit max-w-[300px] max-h-[75px] p-3 col-start-3 col-end-4 row-start-1 row-end-2 flex flex-row justify-center flex-wrap gap-5 w-br:col-start-1 w-br:col-end-2 w-br:row-start-1 w-br:row-end-2">
            <div class="values" v-for="val in values" :key="index">
                <img :src="'/src/images/' + val.link" :alt="val.alt">
                <p>{{ val.value }}</p>
            </div>
        </div>
</template>