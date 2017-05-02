import Index from '@/pages/index.vue'
const routes = [{
    name: 'index',
    path: '/Index',
    component: Index
  },
  {
    path: '*',
    component: Index
  }
]
export default routes
