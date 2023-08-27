<template>
    <div class="flex justify-center w-full">
        <form @submit.prevent="update" class="mt-6 p-6 shadow-lg w-1/3 bg-gray-200 ">
            <router-link :to="{name : 'Blogs'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Update Blogs</h1>
            <div>
                <label for="title">Title</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text" v-model="Blog.title">
            </div>
            <div>
                <label for="image">Image</label>
                <input @change="saveImage" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent file:bg-transparent file:border-0" type="file" >
            </div>
            <div>
                <label for="body">Body</label>
                <textarea class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="number" v-model="Blog.body"></textarea>
            </div>
            <div class="flex justify-between">
                <button class="text-gray-200 hover:text-gray-800 bg-gray-500 p-2 rounded-lg m-6 hover:border hover:border-gray-500 hover:bg-transparent">Update</button>
            </div>
        </form>
    </div>
</template>

<script> 
import axios from 'axios'
    export default {
        data () {
            return {
                id : this.$route.params.id,
                Blog : {} ,
                categories : []
            }
        },
        mounted () {
            axios.get(`http://localhost:3000/blogs/${this.id}`).then((res) => {
                this.Blog = res.data;
            }).catch((err) => {
                alert(err);
            })
            axios.get('http://localhost:3000/categories').then((res) => {
                this.categories = res.data
            }).catch((err) => {
                alert(err);
            })
        },
        methods : {
            update () {
                axios.put(`http://localhost:3000/blogs/${this.id}` , this.Blog).then((res) => {
                    this.$router.push({name : 'Blogs'})
                }).catch((err) => {
                    alert(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>