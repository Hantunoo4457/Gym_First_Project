<template>
    <div class="sm:flex justify-around flex-wrap">
        <div class="sm:w-[28%]  m-6" v-for="blog in blogs" :key="blog.id">
            <img class="w-full" :src="blog.image" alt="">
            <h1 class="my-3 text-xl font-bold">{{ blog.title }}</h1>
            <p class="line-clamp-5 my-4">{{ blog.body }}</p>
            <router-link class=" bg-gray-500 text-white p-2 rounded-sm" :to="{name : 'BlogView' , params : { id : blog.id} }">Show Details</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {
                blogs : []
            }
        },
        mounted (){
            axios.get('http://localhost:3000/blogs').then((res) => {
                this.blogs = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>