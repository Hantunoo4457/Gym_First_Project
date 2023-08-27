<template>
    <div>
        <vue-good-table class="p-4" :columns="columns" :rows="userForm"  :search-options="{enabled: true }"  :pagination-options="{enabled: true,perPageDropdown: [4,6,8,10 ]}">
            <template #table-row="props">
                <span class="" v-if="props.column.field == 'delete'">
                    <button class="bg-red-500 p-1.5 px-2 m-2 text-white rounded-sm" @click="DeleteUser(props.row.id)">delete</button>
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
                userForm : [],
                columns : [
                    {
                        label : "Id",
                        field : "id"
                    },
                    {
                        label : "Name",
                        field : "name"
                    },
                    {
                        label : "Email",
                        field : "email"
                    },
                    {
                        label : "Password",
                        field : "password"
                    },
                    {
                        label : "Delete",
                        field : "delete"
                    },
                ]
            }
        },
        mounted () {
            axios.get('http://localhost:3000/users').then((res) => {
                this.userForm = res.data
            }).catch((err) => {
                alert("Error!");
                console.log(err);
            })
        },
        methods : {
            DeleteUser (id) {
                axios.delete(`http://localhost:3000/users/${id}` , this.userForm).then((res) => {
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