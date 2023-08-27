<template>
    <div>
        <vue-good-table class="p-4" :columns="columns" :rows="Workouts"  :search-options="{enabled: true }"  :pagination-options="{enabled: true,perPageDropdown: [2,4,6,8,10 ]}">
            <template #table-actions>
                <router-link class="text-gray-200 bg-gray-500 p-2 rounded-lg ml-10 m-2 hover:border hover:text-gray-800 hover:border-gray-500 hover:bg-transparent" :to="{name : 'createWorkouts'}">Create</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'category'">
                    {{ props.row.category.name }}
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-32" :src="props.row.image" alt="">
                </span>
                <span v-else>
                    {{props.formattedRow[props.column.field]}}
                </span>
                <span v-if="props.column.field == 'edit'">
                    <router-link class="text-gray-200 bg-gray-500 p-2 w-10 rounded-lg" :to="{name : 'EditWorkout', params:{id:props.row.id}}">
                        edit
                    </router-link>
                    <button @click="deleteWorkout(props.row.id)" class="text-gray-200 bg-red-500 p-1.5 ml-4 rounded-lg">
                        delete
                    </button>
                </span>
            </template>        
        </vue-good-table>
    </div>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
import axios from 'axios';
    export default {
        components : {
            VueGoodTable,
        },
        data () {
            return {
                Workouts : [],
                columns : [
                    {
                        label : 'Id',
                        field : 'id'
                    },
                    {
                        label : 'Image',
                        field : 'image'
                    },
                    {
                        label : 'Name',
                        field : 'name'
                    }, 
                    {
                        label : 'Categroy',
                        field : 'category'
                    }, 
                    {
                        label : 'Reps',
                        field : 'reps'
                    }, 
                    {
                        label : 'Sets',
                        field : 'sets'
                    },
                    {
                        label : 'Edit',
                        field : 'edit'
                    },
                ]
            }
        },
        mounted () {
            axios.get('http://localhost:3000/workouts?_expand=category').then((res) => {
                this.Workouts = res.data;
            }).catch((res) => {
                console.log(res);
            })
        },
        methods : {
            deleteWorkout(id) {
                axios.delete(`http://localhost:3000/workouts/${id}`).then((res) => {
                    window.location.reload();
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>