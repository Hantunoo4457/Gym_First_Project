<template>
    <div >
        <nav class="sm:flex hidden sticky top-0 z-50 justify-around py-3 bg-gray-900">
            <h1 class="text-2xl text-blue-800 font-bold italic">Gymove Ftiness</h1>
            <ul class="flex justify-around">
                <li class="mx-4 hover:text-blue-800 text-white my-auto" v-for="items in navItems" :key="items.name">
                    <router-link :to="{name : items.path}">{{ items.name }}</router-link>
                </li>
            </ul>
            <div class="my-auto">
                <router-link :to="{name : 'LoginForm'}" class="py-2 px-4 rounded-sm m-2 bg-green-400">Login</router-link>
            </div>
        </nav>
        <nav class="flex sm:hidden sticky top-0 z-50 justify-between px-2 py-3 bg-gray-900">
            <h1 class="text-2xl text-blue-800 font-bold italic">Gymove Ftiness</h1>
            <div class="my-auto text-white">
                <button @click="sideBar = !sideBar"><i class="fa-solid fa-bars fa-lg"></i></button>
            </div>
        </nav>
        <Transition name="sideBar">
            <div v-if="sideBar" class="fixed px-12 right-0 p-4 h-screen bg-gray-500 shadow-xl z-50">
                <i @click="sideBar = !sideBar" class="fa-solid fa-arrow-left fa-lg"></i>
                <ul @click="sideBar = !sideBar" class="py-4">
                <li class="p-3 hover:text-blue-800 text-white my-auto hover:out" v-for="items in navItems" :key="items.name">
                    <router-link :to="{name : items.path}"><i :class="items.icon"></i> - {{ items.name }}</router-link>
                </li>
                <li class="p-3 hover:text-blue-800 text-white my-auto hover:out" >
                    <router-link :to="{name : 'LoginForm'}" class="py-2 px-4 rounded-sm  bg-gray-800">Login</router-link>
                </li>
            </ul>
        </div>
        </Transition>
        <router-view class="z-10"></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                sideBar : false,
                navItems : [
                    {
                        name : 'Home',
                        path : 'HomeView',
                        icon : 'fa-solid fa-house fa-lg'
                    },
                    {
                        name : 'Categories',
                        path : 'CategoriesView',
                        icon : 'fa-solid fa-bars fa-lg'
                    },
                    {
                        name : 'Workouts',
                        path : 'WorkoutsView',
                        icon: "fa-solid fa-dumbbell"
                    },
                    {
                        name : 'Blogs',
                        path : 'BlogsView',
                        icon: "fa-solid fa-blog"
                    },
                    {
                        name : 'About Us',
                        path : 'AboutUs',
                        icon : 'fa-solid fa-address-card'
                    },
                    {
                        name : 'ContactUs',
                        path : 'ContactUs',
                        icon : 'fa-solid fa-address-book'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.sideBar-enter-from , .sideBar-leave-to{
        opacity: 0.5;
    }
.sideBar-enter-active , .sideBar-leave-active {
        transition: all 0.5s ease;
    }
</style>