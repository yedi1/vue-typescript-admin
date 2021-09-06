import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const demandRoutes: RouteConfig = {
  path: '/demand',
  component: Layout,
  redirect: '/demand/index',
  name: 'Demand',
  meta: {
    title: '需求池',
    icon: 'table',
    alwaysShow: true
  },
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "demand-index" */ '@/views/demand/index.vue'),
      name: 'DemandIndex',
      meta: { title: '需求池列表' }
    },
    {
      path: 'detail',
      component: () => import(/* webpackChunkName: "demand-detail" */ '@/views/demand/detail.vue'),
      name: 'DemandDetail',
      meta: { title: '需求详情', hidden: true }
    }
  ]
}

export default demandRoutes
