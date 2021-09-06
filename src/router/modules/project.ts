import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const projectRoutes: RouteConfig = {
  path: '/project',
  component: Layout,
  redirect: '/project/index',
  name: 'Project',
  meta: {
    title: '项目集市',
    icon: 'documentation'
  },
  children: [
    {
      path: 'index',
      component: () => import(/* webpackChunkName: "project-index" */ '@/views/project/index.vue'),
      name: 'ProjectIndex',
      meta: { title: '项目列表' }
    },
    {
      path: 'detail',
      component: () => import(/* webpackChunkName: "project-detail" */ '@/views/project/project-detail.vue'),
      name: 'ProjectDetail',
      meta: { title: '项目详情', hidden: true }
    },
    {
      path: 'task',
      component: () => import(/* webpackChunkName: "project-task" */ '@/views/project/project-task.vue'),
      name: 'InlineEditProject',
      meta: { title: '任务列表' }
    },
    {
      path: 'conflict',
      component: () => import(/* webpackChunkName: "project-conflict" */ '@/views/project/project-conflict.vue'),
      name: 'ProjectConflict',
      meta: { title: '工程冲突' }
    }
  ]
}

export default projectRoutes
