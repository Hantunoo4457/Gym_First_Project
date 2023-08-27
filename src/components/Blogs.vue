<template>
    <div class="w-full">
        <h1 sm:data-aos="fade-right" sm:data-aos-duration="1000"  class="text-xl sm:text-2xl sm:mb-2 text-center font-semibold">STRENGTHEN YOUR GYMS KNOWLADGE</h1>
        <div class="sm:flex justify-center  sm:p-6 p-4 sm:m-6" v-for="blog in blogs" :key="blog.id">
            <img class="sm:w-1/3 " sm:data-aos="fade-right" sm:data-aos-duration="1000" :src="blog.image" alt="">
            <div class="sm:w-1/3" sm:data-aos-duration="1000" sm:data-aos="fade-left">
                <h1 class="text-2xl font-bold sm:m-4">{{ blog.title }}</h1>
                <p class="sm:ml-4 paragraph mb-2">{{ blog.body }}</p>
                <router-link class="sm:ml-4 bg-gray-500 text-white p-2 sm:m-3  rounded-sm" :to="{name : 'BlogView' , params : {id: blog.id}}">Read More</router-link>
            </div>
        </div>
    </div>      
</template>

<script>
import axios from 'axios';

    export default {
        data () {
            return {
                blogs : []
            }
        },
        mounted () {
            axios.get('http://localhost:3000/blogs').then((res) => {
                this.blogs = res.data.slice(0,4);
            }).catch((err) => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
.paragraph {
        overflow: hidden;
        -webkit-line-clamp: 4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
</style>