<template>
    <div class="bg-gray-200 h-[100vh] w-full pt-[15%]">
       <div class="w-[40%] mx-auto text-center p-12 bg-white">
            <img class="mx-auto" src="../../public/images/images.png" alt="">
            <h1 class="mt-6 mb-6" id="text">THE PAGE YOU REQUESTED CLOUD NOT BE FOUND</h1>
            <router-link :to="{name : 'HomeView'}" id="text" class=" bg-black text-white px-4 py-2">Go To Home -> </router-link>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#text {
    font-family: 'Space Grotesk', sans-serif;
}
</style>