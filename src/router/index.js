import Vue from 'vue'
import Router from 'vue-router'
import Manager from "../components/Manager";
import LiuBeiTing from "../components/LiuBeiTing";
import Home from "../components/Home";
import Content from "../components/Content";
import Login from "../components/Login";
import NoFound from "../components/NoFound/NoFound";
import List from "../components/List";
import TestDialog from "../components/Show/TestDialog";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager
    },
    {
      path: '/liubei',
      name: 'LiuBeiTing',
      component: LiuBeiTing
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/more',
      name: 'List',
      component: List
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/test',
      name: 'TestDialog',
      component: TestDialog
    }
  ]
})
