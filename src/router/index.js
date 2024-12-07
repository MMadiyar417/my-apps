import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ToDoListView from '@/views/ToDoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project/1',
      name: 'project1',
      component: ToDoListView,
    },
    // {
    //   path: '/project/2',
    //   name: 'project2',
    //   component: Project2,
    // },
    // {
    //   path: '/project/3',
    //   name: 'project3',
    //   component: Project3,
    // },
    // {
    //   path: '/project/4',
    //   name: 'project4',
    //   component: Project4,
    // },
  ],
})

export default router
