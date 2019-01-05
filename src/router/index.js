import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Content from '@/views/Layout/Content'
import Blog from '@/views/Blog/Blog'
import Details from '@/views/Blog/Details'

Vue.use(Router)

const constRouteMap = [
  {
    path: '',
    redirect: 'main'
  },
  {
    path: '/main',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Content',
        component: Content,
        redirect: 'posts',
        children: [
          {
            path: 'posts',
            name: 'Blog',
            component: Blog
          },
          {
            path: 'details/:id',
            name: 'Details',
            component: Details
          }
        ]
      }
    ]
  }
]
const router = new Router({
  routes: constRouteMap
})
export default router
