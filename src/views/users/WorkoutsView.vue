<template>
      <div class="bg-gray-900 h-[100vh] sm:h-full">
        <div class="sm:p-6 py-6 flex sm:justify-center text-white" v-for="workout in workouts" :key="workout.id">
            <img class="sm:w-[25%] w-1/2" :src="workout.image" alt="">
                <div class="ml-4  p-2">
                    <h1 class="sm:text-2xl text-lg">Name - {{ workout.name }}</h1>
                    <p>Reps - {{ workout.reps }}</p>
                    <p>Sets - {{ workout.sets }}</p>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data () {
            return {
                workouts : []
            }
        },
        mounted () {
            axios.get('http://localhost:3000/workouts').then((res) => {
                this.workouts = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style  scoped>

</style>