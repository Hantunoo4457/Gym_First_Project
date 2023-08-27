<template>
       <div class="flex justify-center w-full">
        <form @submit.prevent="create" class="mt-6 p-6 shadow-lg w-2/3 bg-gray-200 ">
            <router-link :to="{name : 'workouts'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Create Workout</h1>
            <div>
                <label for="name">Name</label>
                <input v-model="workouts.name" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text">
            </div>
            <div>
                <label for="categoryId">Category</label>
                <select v-model="workouts.categoryId" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent">
                    <option disabled selected>Chosse a category</option>
                    <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div>
                <label for="reps">Reps</label>
                <input v-model="workouts.reps" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="number">
            </div>
            <div>
                <label for="sets">Sets</label>
                <input v-model="workouts.sets" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="number" >
            </div>
            <div>
                <label for="image">Image</label>
                <input @change="saveImage" class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent file:bg-transparent file:border-0" type="file" >
            </div>
            <div class="flex justify-end">
                <button class="text-gray-200 hover:text-gray-800 bg-gray-500 p-2 rounded-lg mt-4 hover:border hover:border-gray-500 hover:bg-transparent">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data () {
            return {
              categories : [],
              workouts : {
                name : '',
                reps : null,
                sets : null,
                categoryId : null,
                image : null,
              }
            }
        },
        mounted () {
            axios.get('http://localhost:3000/categories').then((res) => {
                this.categories = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        methods : {
            saveImage(e){
                let file = e.target.files[0]
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", () => {
                    this.workouts.image = reader.result
                });
            },
            create () {
                axios.post('http://localhost:3000/workouts?_expand=category' , this.workouts).then((res) => {
                    this.$router.push({name : 'workouts'});
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>