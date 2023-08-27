import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from '../views/auth/Login.vue'
import RegisterForm from '../views/auth/Register.vue'
import HomeView from '../views/users/Home.vue'
import WorkoutsByCategory from '../views/users/WorkoutsByCategory.vue'

import BlogView from '../views/users/BlogView.vue'
import BlogsView from '../views/users/BlogsView.vue'
import WorkoutsView from '../views/users/WorkoutsView.vue'
import AboutUs from '../views/users/AboutUs.vue'
import ContactUs from '../views/users/ContactUs.vue'
import CategoriesView from '../views/users/CategoriesView.vue'

import UserForm from '../views/admin/userFrom/index.vue'
import DeleteUser from '../views/admin/userFrom/index.vue'

import Categories from "../views/admin/categories/Index.vue"
import Layout from '../views/admin/Layout.vue'

import indexView from '../views/users/Index.vue'
import CreateCategory from '../views/admin/categories/Create.vue'
import EditCategory from '../views/admin/categories/Edit.vue'

import workouts from '../views/admin/workouts/Index.vue'
import createWorkouts from '../views/admin/workouts/Create.vue'
import EditWorkout from '../views/admin/workouts/Edit.vue'

import Blogs from '../views/admin/Blogs/Index.vue'
import CreateBlogs from '../views/admin/Blogs/Create.vue'
import EditBlogs from '../views/admin/Blogs/Edit.vue'
import ShowBlogs from '../views/admin/Blogs/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'indexView',
      component : indexView,
      children : [
        {
          path : '',
          name : 'HomeView',
          component : HomeView
        },
        {
          path : 'categroy/:id',
          name : 'WorkoutsByCategory',
          component : WorkoutsByCategory
        },
        {
          path : 'blogs',
          name : 'BlogsView',
          component : BlogsView
        },
        {
          path : 'blogs/:id',
          name : 'BlogView',
          component : BlogView
        },
        {
          path : 'workouts',
          name : 'WorkoutsView',
          component : WorkoutsView
        },
        {
          path : 'aboutUs',
          name : 'AboutUs',
          component : AboutUs
        },
        {
          path : 'contactUs',
          name : 'ContactUs',
          component : ContactUs
        },
        {
          path : 'categroies',
          name : 'CategoriesView',
          component : CategoriesView
        }
      ]
    },
    {
      path : '/login',
      name : 'LoginForm',
      component : LoginForm,
    },  
    {
      path : '/register',
      name : 'RegisterForm',
      component : RegisterForm,
    },
    {
      path : '/admin',
      name : 'Layout',
      component : Layout,
      meta : {
        middleware : "admin"
      },
      children : [
        {
          path : 'user',
          name : 'UserForm',
          component : UserForm
        },
        {
          path : 'user/:id',
          name : 'DeleteUser',
          component : DeleteUser
        },
        {
          path : 'categories',
          name : 'Categories',
          component : Categories
        },
        {
          path : 'categories/create',
          name : 'CreateCategory',
          component : CreateCategory
        },
        {
          path : 'categories/:id',
          name : 'EditCategory',
          component : EditCategory
        },
        {
          path : 'workouts',
          name : 'workouts',
          component : workouts
        },
        {
          path : 'workouts/createWorkouts',
          name : 'createWorkouts',
          component : createWorkouts
        },
        {
          path : 'workouts/:id',
          name : 'EditWorkout',
          component : EditWorkout
        },
        {
          path : 'blogs',
          name : 'Blogs',
          component : Blogs
        },
        {
          path : 'blogs/create',
          name : 'CreateBlogs',
          component : CreateBlogs
        },
        {
          path : 'blogs/edit/:id',
          name : 'EditBlogs',
          component : EditBlogs
        },
        {
          path : 'blogs/show/:id',
          name : 'ShowBlogs',
          component : ShowBlogs
        }
      ]
    }
  ]
})

router.beforeEach((to , from , next ) => {
  if (to.meta.middleware == "admin") {
     let email = localStorage.getItem('email')
     if (email) {      
        next();
     }else {
        window.location.assign('/login')
     }
  }else {
    next()
  }
})


export default router