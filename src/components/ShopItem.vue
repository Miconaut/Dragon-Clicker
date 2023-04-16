<script>
export default {
    data() {
        return {
            values: [
                {
                    amount: 5,
                    price: 200,
                    img: 'Pile_of_Food.png'
                },
                {
                    amount: 50,
                    price: 400,
                    img: 'Big_Pile_of_Food.png'
                },
                {
                    amount: 100,
                    price: 750,
                    img: 'Sack_of_Food.png'
                },
                {
                    amount: 500,
                    price: 3500,
                    img: 'Bucket_of_Food.png'
                },
                {
                    amount: 1000,
                    price: 6900,
                    img: 'Chest_of_Food.png'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="item" v-for="val in values" :key="index">
        <div class="food">
            <!-- food amount -->
            <div><p>{{ val.amount }}</p></div>
            <!-- food image -->
            <img :src="'/src/images/food/' + val.img" alt="food">
        </div>
        <div class="price">
            <p>{{ val.price }}</p>
            <img src="../images/gold/Pile_of_Gold.png" alt="money">
        </div>
    </div>
</template>