import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const settingRoutes: RouteConfig = {
  path: '/setting',
  component: Layout,
  redirect: '/setting/index',
  name: 'Setting',
  meta: {
    title: '公司设置',
    icon: 'setting'
  },
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "person-setting" */ '@/views/setting/index.vue'),
      name: 'PersonSetting',
      meta: { title: '人员设置' }
    },
    {
      path: 'auth-setting',
      component: () => import(/* webpackChunkName: "auth-setting" */ '@/views/setting/auth-setting.vue'),
      name: 'AutheSetting',
      meta: { title: '权限设置' }
    },
    {
      path: 'business-setting',
      component: () => import(/* webpackChunkName: "business-setting" */ '@/views/setting/business-setting.vue'),
      name: 'BusinessSetting',
      meta: { title: '业务线设置' }
    }
  ]
}

export default settingRoutes
