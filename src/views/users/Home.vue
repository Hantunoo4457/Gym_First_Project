<template>
    <div>
        <Swiper class="sm:h-[92vh] z-50"/>
        <h1 class="absolute top-[10%] sm:top-1/3 z-10  sm:text-6xl text-center left-[15%] text-white w-[80%] sm:w-2/3 font-bold">RESEARCH CONFIRMS GROUP FITNESS HELPS ATTRACT & RETAIN MEMBERS</h1>
        <router-link class="absolute sm:top-[65%] top-[23%] left-[40%] sm:left-[50%] bg-green-500 rounded-sm py-1 px-4  sm:py-2 sm:px-8 z-10" :to="{name : 'RegisterForm'}">Register</router-link>

        <!-- Marketing -->
        <Marketing />

        <!-- Categroies -->
        <Categories />

        <!-- Blogs -->
        <Blogs />
    </div>
</template>

<script>
import Categories from '../../components/Categories.vue'
import Swiper from '../../components/Swiper.vue'
import Marketing from '../../components/Marketing.vue'
import Blogs from '../../components/Blogs.vue'

    export default {
        components : {
            Swiper,Marketing, Categories ,Blogs
        }
    }
</script>

<style scoped>

</style>