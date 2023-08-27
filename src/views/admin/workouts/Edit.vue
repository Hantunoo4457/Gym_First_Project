<template>
     <div class="flex justify-center w-full">
        <form @submit.prevent="update" class="mt-6 p-6 shadow-lg w-2/3 bg-gray-200 ">
            <router-link :to="{name : 'workouts'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Update Workout</h1>
            <div>
                <label for="workoutname">workoutname</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text" v-model="Workout.name">
            </div>
            <div>
                <label for="reps">Reps</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="number" v-model="Workout.reps">
            </div>
            <div>
                <label for="sets">Sets</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="number" v-model="Workout.sets">
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
                Workout : {}
            }
        },
        mounted () {
            axios.get(`http://localhost:3000/workouts/${this.id}`).then((res) => {
                this.Workout = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        methods : {
            update () {
                axios.put(`http://localhost:3000/workouts/${this.id}` , this.Workout).then((res) => {
                    this.$router.push({name : 'Workouts'})
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>