import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '../layout/index.vue'

import Page404 from '../pages/common/404.vue'

// const requireRoutes = require.context('./routes', true, /\.js$/)

const routes = []

// requireRoutes.keys().forEach(item => {
//   routes.push(require(`./routes/${item.slice(2)}`).default)
// })

const rootCommon = {
  path: '/',
  name: 'mainIndex',
  meta: {
    label: '欢迎页',
    role: ''
  },
  component: () => import('../pages/welcome/index.vue')
}

routes.push(rootCommon)

export const rootRouter = {
  path: '/main',
  component: Layout,
  meta: {
    label: 'Layout'
  },
  children: routes
}

const commonRoutes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/404',
    component: Page404,
    name: 'Page404'
  },
  // {
  //   path: '/403',
  //   component: () => import('../pages/common/403.vue')
  // }
]


export default createRouter({
  history: createWebHashHistory(),
  routes: commonRoutes.concat(rootRouter)
})
