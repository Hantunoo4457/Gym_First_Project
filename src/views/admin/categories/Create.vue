<template>
     <div class="flex justify-center w-full">
        <form @submit.prevent="create" class="mt-6 p-6 shadow-lg w-1/2 bg-gray-200 ">
            <router-link :to="{name : 'Categories'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Create Category</h1>
            <div>
                <label for="name">Name</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text" v-model="CategoryFrom.name">
            </div>
            <div class="flex flex-wrap">
                <label for="image">Image</label>
                <input @change="saveImage" class="outline-none border-b border-gray-500 p-2 m-2 bg-transparent file:bg-transparent file:border-0" type="file" >
            </div>
            <div class="flex justify-between">
                <button class="text-gray-200 hover:text-gray-800 bg-gray-500 p-2 rounded-lg m-6 hover:border hover:border-gray-500 hover:bg-transparent">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
    data() {
        return {
            CategoryFrom: {
                name: "",
                image : ""
            }
        };
    },
    methods: {
        saveImage(e){
                let file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", () => {
                    this.CategoryFrom.image = reader.result
                });
            },
        create () {
            axios.post('http://localhost:3000/categories', this.CategoryFrom).then((res) => {
                this.$router.push({name : 'Categories'})
            }).catch((err) => {
                console.log(err);
            });
        },
    },
} 
</script>

<style scoped>

</style>