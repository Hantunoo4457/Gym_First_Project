<template>
    <div>
        <form @submit.prevent="loginUser" class="w-full sm:ml-28 fixed">
            <div class="sm:w-2/3 sm:flex mx-auto sm:m-20">
                <div class="w-full bg-gray-200">
                    <router-link :to="{name : 'HomeView'}"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>  
                    <h1 class="text-2xl mt-6 ml-6">Login</h1>
                    <div class="h-0.5 w-8 bg-purple-500 ml-6 m-0.5"></div>
                    <div class="w-[80%] ml-10 m-4">
                        <input v-model="user.email" required class="outline-none w-full m-2 p-1 bg-transparent border-b-2 border-b-purple-500" type="email" placeholder="Enter your email!">
                    </div>
                    <div class="w-[80%] ml-10">
                        <input v-model="user.password" required class="outline-none w-full m-2 p-1 bg-transparent border-b-2 border-b-purple-500" type="password" placeholder="Enter your password!">
                    </div>
                    <a href="/" class="text-purple-600 ml-12 m-1">
                        Forgot password?
                    </a>
                  <div class="w-full">
                    <button class="w-[90%] m-6 mt-8 p-2 bg-purple-500 rounded-lg hover:bg-transparent hover:border-purple-500 border">
                        Login
                    </button>
                  </div>
                  <div class="w-full flex px-auto py-4">
                    <p class="sm:w-1/2 sm:ml-14 sm:mb-6 sm:mt-6 ml-10">Don't have an account?</p>
                    <a href="/register" class="text-purple-500 sm:w-1/3 sm:mr-[10%] sm:mb-6 border-blue-400 border-b sm:mt-6 mx-1 sm:mx-0">Create an account</a>
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
                    email : '',
                    password : ''
                }
            }
        },
        methods : {
            loginUser() {
                axios.get(`http://localhost:3000/users?email=${this.user.email}`).then((res) => {
                    if (res.data.length) {
                        if (res.data[0].password == this.user.password) {
                            localStorage.setItem('email' , res.data[0].email)
                            this.$router.push({name : 'Categories'})
                        } else {
                            alert('please try again')
                        }
                    } else {
                        alert('please try again')
                    }
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>