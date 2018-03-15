import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VideoPlay from '@/components/video/VideoPlay'
import PrintInvoice from '@/components/video/PrintInvoice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/play',
      name: 'VideoPlay',
      component: VideoPlay
    },
    {
      path: '/invoice',
      name: 'PrintInvoice',
      component: PrintInvoice
    }
  ]
})
