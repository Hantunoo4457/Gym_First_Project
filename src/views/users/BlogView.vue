<template>
    <div>
        <router-link :to="{name : 'BlogsView'}"><i class="mx-2 fa-solid fa-arrow-left fa-lg"></i></router-link>
        <img class="w-2/3 mx-auto my-6" :src="blog.image" alt="">
        <h1 class="m-4 text-2xl font-bold">{{ blog.title }}</h1>
        <p class="m-4 ">{{ blog.body }}</p>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data () {
            return {
                id : this.$route.params.id,
                blog : {}
            }
        },
        mounted (){
            axios.get(`http://localhost:3000/blogs/${this.id}`).then((res) => {
                this.blog = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>