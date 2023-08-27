<template>
    <div class="p-8 sm:p-12">
        <h1 data-aos="fade-right" data-aos-duration="1000" class="text-xl sm:text-2xl mb-2  text-center font-semibold">STRENGTHEN YOUR GYMS KNOWLADGE</h1>
            <div class="sm:flex flex-warp justify-between">
                <div v-for="category in categories" :key="category.id" class=" sm:w-1/4 w- m-4">
                    <router-link class="" :to="{name : 'WorkoutsByCategory' , params : {id : category.id}}">
                        <img class="w-full h-[100%] hover:scale-105" :src="category.image" alt="">  
                        <h1 class="text-xl font-bold text-center m-2">{{ category.name   }}</h1>   
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
    export default {
        data () {
            return {
                categories : []
            }
        },
        mounted () {
            axios.get('http://localhost:3000/categories').then((res) => {
                this.categories = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>