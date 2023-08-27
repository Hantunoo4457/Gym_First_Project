 <template>
    <div class="flex justify-center mt-10">
      <div class="mt-6 p-4 shadow-lg bg-gray-100 w-2/3">
        <router-link :to="{name : 'Blogs'}"><i class="fa-solid fa-circle-arrow-left fa-lg"></i></router-link>
          <img class=" w-2/3 shadow-xl"  :src="categories.images" alt="">
          <h1 class="text-xl italic font-semibold mt-2">Title : {{ categories.title }}</h1><br>
          <p class="text-xl font-serif "> Body : {{ categories.body }}</p><br>
          <div class="flex justify-between">
            <button @click="deleteBlog(id)" class="px-2 py-0.5 ml-2 rounded-sm bg-red-400 text-gray-500  hover:bg-red-500 hover:text-white">Delete</button>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
          id : this.$route.params.id,
          categories : {}
      }
    },
    mounted() {
      axios.get(`http://localhost:3000/blogs/${this.id}`).then((res) => {
          this.categories = res.data;
        }).catch((res) => {
          console.log(res);
        });
    },
    methods: {
      deleteBlog(id){
          axios.delete(`http://localhost:3000/blogs/${id}`).then((res)=>{
            this.$router.push({name : 'Blogs'})
          }).catch((res)=>{
              alert("Error")
          })
      }
    }
  };
  </script>
  
  <style  scoped>
  </style> 