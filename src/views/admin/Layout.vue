<template>
    <div> 
        <div class="w-full bg-gray-200 px-6  shadow-lg sticky top-0">
            <h1 class="text-gray-800 text-2xl font-bold italic p-2">Gymove Filness</h1>   
        </div> 
         <div class="flex">
            <div class=" w-1/6 bg-gray-200 shadow-lg sticky top-0 m-2">
                <h1 class="text-gray-200 text-xl text-center p-2 font-bold italic bg-gray-500">Han Htun Oo</h1>
                <h1 class="text-gray-200 text-xl text-center p-2 my-2 font-bold italic bg-gray-500">DESHBOARD</h1>
                <div class="flex p-4">
                    <ul class="w-100%">
                        <li class="py-4 ml-4 text-md hover:text-gray-900 text-gray-500" v-for="Item in navItems" :key="Item.name">
                            <i :class="Item.icon"></i> <RouterLink :to="{name : Item.path}">{{Item.name }}</RouterLink>                 
                        </li>
                    </ul>
                </div>
                <button class="text-gray-200 hover:text-gray-800 ml-[60%] bg-gray-500 p-2 rounded-lg m-6 hover:border hover:border-gray-500 hover:bg-transparent">LogOut</button>
            </div> 
            <div class="w-5/6">
                <RouterView></RouterView>
            </div> 
        </div>
            
                             
    </div>
</template>

<script>
    export default {
    data() {
        return {
            navItems: [
                {
                    name: "Home",
                    path: "HomeView",
                    icon: "fa-solid fa-house"
                },
                {
                    name: "Categories",
                    path: "Categories",
                    icon: "fa-solid fa-bars"
                },
                {
                    name: "Workouts",
                    path: "workouts",
                    icon: "fa-solid fa-dumbbell"
                },
                {
                    name: "Blogs",
                    path: "Blogs",
                    icon: "fa-solid fa-blog"
                },
                {
                    name: "Users",
                    path: "UserForm",
                    icon: "fa-solid fa-user"
                },
                {
                    name: "Trainer",
                    path: "Categories",
                    icon: "fa-solid fa-registered"
                },
            ]
        };
    },
}
</script>

<style scoped>

</style> 