 <template>
     <div class="flex justify-center w-full">
        <form @submit.prevent="update" class="mt-6 p-6 shadow-lg w-1/3 bg-gray-200 ">
            <router-link :to="{name : 'Categories'}" class="ml-[90%]"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
            <h1 class="text-2xl font-bold mb-2">Update Category</h1>
            <div>
                <label for="name">Name</label>
                <input class="outline-none border-b border-gray-500 w-full p-2 m-2 bg-transparent" type="text" v-model="Category.name">
            </div>
            <div>
                
            </div>
            <div class="flex justify-end">                   
                <button class="text-gray-200 hover:text-gray-800 bg-gray-500 p-2 rounded-lg m-6 border hover:border-gray-500 hover:bg-transparent">Update</button>
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
                Category : {}
            }
        },
        mounted () {
            axios.get(`http://localhost:3000/categories/${this.id}`).then((res) => {
                this.Category = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },
        methods : {
            update () {
                axios.put(`http://localhost:3000/categories/${this.id}` , this.Category).then((res) => {
                    this.$router.push({name : 'Categories'})
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style> 