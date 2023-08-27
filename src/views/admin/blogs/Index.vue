<template>
    <div>
        <vue-good-table class="p-4" :columns="columns" :rows="categories"  :search-options="{enabled: true }"  :pagination-options="{enabled: true,perPageDropdown: [2,4,6,8,10 ]}">
            <template #table-actions>
                <router-link class="text-gray-200 bg-gray-500 p-2 rounded-lg ml-10 m-2 hover:border hover:text-gray-800 hover:border-gray-500 hover:bg-transparent" :to="{name : 'CreateBlogs'}">Create</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'catagories'">
                    {{ props.row.catagory.name }}
                </span>
                <span v-else-if="props.column.field == 'edit'">
                    <router-link class="text-gray-200 bg-gray-500 p-2 w-10 m-4 rounded-lg" :to="{name : 'EditBlogs', params:{id: props.row.id}}">edit</router-link>
                    <router-link class="text-gray-200 bg-green-500 p-2 w-10 rounded-lg" :to="{name : 'ShowBlogs', params:{id: props.row.id}}">show</router-link>             
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-32" :src="props.row.image" alt="">
                </span>
                <span v-else>
                    {{props.formattedRow[props.column.field]}}
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
            VueGoodTable
        },
        data () {
            return {
                categories : [],
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
                        label : 'Title',
                        field : 'title'
                    },
                    {
                        label : 'Edit',
                        field : 'edit'
                    },
                ]
            }
        },
        mounted () {
            axios.get('http://localhost:3000/blogs').then((res) => {
                this.categories = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>