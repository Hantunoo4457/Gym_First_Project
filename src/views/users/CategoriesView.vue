<template>
    <div class="sm:flex sm:w-full justify-around flex-wrap">
        <div class="sm:w-[28%]  m-6" v-for="category in categories" :key="category.id">
            <img class="w-full sm:h-[30vh]" :src="category.image" alt="">
            <h1 class="my-3 text-xl font-bold">{{ category.name }}</h1>
    </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data () {
            return {
                categories : [],
            }
        },
        mounted () {
            axios.get('http://localhost:3000/categories').then((res) => {
                this.categories = res.data
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>