<template>
    <div class="flex justify-center w-full">
        <form @submit.prevent="createBlogs" class="mt-6 p-6 shadow-lg w-1/2 bg-gray-200">
            <router-link :to="{name : 'Blogs'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Create Blogs</h1>       
                <div>
                    <label for="title">Title</label>
                    <input v-model="blog.title" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text">
                </div>
                <div>
                    <label for="image">Image</label>
                    <input @change="saveImage" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent file:bg-transparent file:border-0" type="file" >
                </div>
                <div>
                    <label for="body">Body</label>
                    <textarea v-model="blog.body" class="outline-none border border-gray-500 w-full p-2 m-2 bg-transparent" cols="30" rows="3"></textarea>
                </div>
                <div class="flex justify-between">
                    <button class="text-gray-200 hover:text-gray-800 bg-gray-500 p-2 rounded-lg mt-4 border hover:border-gray-500 hover:bg-transparent">Create</button>
                </div>  
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data () {
            return {
                categories : [],
                blog : {
                    title : '',
                    body : '',
                    image : ''
                }
            }          
        },
        mounted () {
            axios.get('http://localhost:3000/blogs').then((res) => {
                this.blogs = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        methods : {
            createBlogs () {
                axios.post('http://localhost:3000/blogs' , this.blog).then((res) => {
                    this.$router.push({name : 'Blogs'})
                }).catch((err) => {
                    console.log(err);
                })
            },
            saveImage(e){
                    let file = e.target.files[0]
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener("load", () => {
                        this.blog.image = reader.result
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>