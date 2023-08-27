<template>
    <div class=" bg-gray-900 h-screen fixed">
       <div class="p-6 sm:flex text-white" v-for="workout in workouts" :key="workout.id">
        <img class="sm:w-33 sm:h-44" :src="workout.image" alt="">
            <div class="sm:ml-4  p-2">
                <h1 class="text-2xl ">Name - {{ workout.name }}</h1>
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
                id : this.$route.params.id,
                workouts : []
            }
        },
        mounted () {
            axios.get(`http://localhost:3000/workouts?categoryId=${this.id}`).then((res) => {
                this.workouts = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>