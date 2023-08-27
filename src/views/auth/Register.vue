<template>
     <div>
        <form @submit.prevent="loginUser" class="w-full sm:ml-28 fixed">
            <div class="sm:w-2/3 sm:flex mx-auto sm:m-20">
                <div class="w-full bg-gray-200">
                    <router-link :to="{name : 'HomeView'}"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>  

                    <h1 class="text-2xl mt-6 ml-6">Register</h1>
                    <div class="h-0.5 w-14 bg-purple-500 ml-6 m-0.5"></div>
                    <div class="w-[80%] ml-10 m-4">
                        <input v-model="user.name" required class="outline-none w-full m-2 p-1 bg-transparent border-b-2 border-b-purple-500" type="name" placeholder="Enter your name!">
                    </div>
                    <div class="w-[80%] ml-10 m-4">
                        <input v-model="user.email" required class="outline-none w-full m-2 p-1 bg-transparent border-b-2 border-b-purple-500" type="email" placeholder="Enter your email!">
                    </div>
                    <div class="w-[80%] ml-10">
                        <input v-model="user.password" required class="outline-none w-full m-2 p-1 bg-transparent border-b-2 border-b-purple-500" type="password" placeholder="Enter your password!">
                    </div>
                  <div class="w-full">
                    <button class="w-[90%] m-6 mt-8 p-2 bg-purple-500 rounded-lg hover:bg-transparent hover:border-purple-500 border">
                        Submit
                    </button>
                  </div>
                  <div>
                    <a href="facebook.com" class="fa fa-facebook ml-[35%] sm:mb-12 mb-4 bg-blue-900 text-white p-2 rounded-3xl"></a>
                    <a href="twitter.com" class="fa fa-twitter ml-2 sm:mb-12 mb-4 bg-blue-400 text-white p-2 rounded-3xl"></a>
                    <a href="youtube.com" class="fa fa-youtube ml-2 sm:mb-12 mb-4 bg-red-500 text-white p-2 rounded-3xl"></a>
                </div>
                </div>
                <img class="sm:w-[50%] h-[40vh] sm:h-[79vh]" :src="image" alt="">            
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return {
                image : './images/boy.jpg',
                user : {
                    name : "",
                    email : "",
                    password : "",
                    role : "admin"
                 }
            }
        },
        methods : {
            register() {
                axios.post('http://localhost:3000/users' , this.user).then((res) => {
                  localStorage.setItem('email' , res.data.email)
                  this.$router.push({name : 'UserForm'})
                }).catch((res) => {
                    alert("Error!");
                    console.log(res);
                })
            }
        }
    }
</script> 

<style scoped>

</style>