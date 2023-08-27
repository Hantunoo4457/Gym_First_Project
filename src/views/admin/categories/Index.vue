<template>
    <div>
            <vue-good-table class="p-4" :columns="columns" :rows="categories"  :search-options="{enabled: true }"  :pagination-options="{enabled: true,perPageDropdown: [2,4,6,8,10 ]}">
            <template class="mt-10" #table-actions>
                <router-link class="bg-gray-500 p-2 rounded-lg" :to="{name : 'CreateCategory'}">Create</router-link>
            </template>
            <template #table-row="props">
                <span v-if="props.column.field == 'category'">
                    {{ props.row.category.name }}
                </span>
                <span v-else-if="props.column.field == 'image'">
                    <img class="w-32 " :src="props.row.image" alt="">
                </span>
                <span v-else>
                    {{props.formattedRow[props.column.field]}}
                </span>
                <span class="" v-if="props.column.field == 'edit'">
                    <router-link class="bg-violet-500 px-4 py-2 m-2 text-white rounded-sm" :to="{name : 'EditCategory', params:{id:props.row.id}}">edit</router-link>
                    <button class="bg-red-500 p-1.5 px-2 m-2 text-white rounded-sm" @click="deleteCategory(props.row.id)">delete</button>
                </span>

            </template>
        </vue-good-table>
    </div>  
</template>
<script>
import axios from 'axios'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';
    export default {
        components : {
    VueGoodTable,
},
        data () {
            return {
                categories : [],
                columns : [
                    {
                        label : "Id",
                        field : 'id'
                    },
                    {
                        label : "Image",
                        field : "image"
                    },
                    {
                        label : "Name",
                        field : "name"
                    },
                    {
                        label: "Edit",
                        field : "edit"
                    },
                ]
            }
        },
        mounted () {
          axios.get('http://localhost:3000/categories').then((res) => {
            this.categories = res.data;
          }).catch((res) => {
            console.log(res);
          })  
        },
        methods : {
            deleteCategory(id) {
                axios.delete(`http://localhost:3000/categories/${id}`).then((res) => {
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