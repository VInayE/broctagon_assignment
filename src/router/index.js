import Vue from 'vue'
import Router from 'vue-router'
import GotBooks from '@/views/gotBooks'
import BookDetails from '@/views/bookDetails'
import {BASE_URL} from '../util/constants.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'GotBooks',
      component: GotBooks
    },
    {
      path: `/details`,
      name: 'BookDetails',
      component: BookDetails
    },{
        path:'/',
        redirect:'/list'
    },
      {
          path:'*',
          redirect:'/'
      }
  ]
})
