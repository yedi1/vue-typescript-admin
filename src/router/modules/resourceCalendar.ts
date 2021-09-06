import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const resourceCalendarRoutes: RouteConfig = {
  path: '/resourcecalendar',
  component: Layout,
  redirect: '/resourcecalendar/index',
  name: 'ResourceCalendar',
  meta: {
    title: '资源日历',
    icon: 'table',
    alwaysShow: true
  },
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "resourcecalendar-index" */ '@/views/resourcecalendar/index.vue'),
      name: 'ResourceCalendarIndex',
      meta: { title: '资源日历' }
    }
  ]
}

export default resourceCalendarRoutes
