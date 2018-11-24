import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'

Vue.use(Router)

const constRouteMap = [{
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: 'Home Page'
  }
}]
const router = new Router({
  routes: constRouteMap
})
export default router
