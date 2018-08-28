import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Balance = () => import('@/pages/balance')
const Rights = () => import('@/pages/rights')
const Score = () => import('@/pages/score')
const UserInfo = () => import('@/pages/userInfo')
const HasRegister = () => import('@/pages/result/hasRegister')
const RegisterSuccess = () => import('@/pages/result/registerSuccess')
const RegisterFailed = () => import('@/pages/result/registerFailed')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/rights',
      name: 'rights',
      component: Rights
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/hasreg',
      name: 'hasreg',
      component: HasRegister
    },
    {
      path: '/regfailed',
      name: 'regfailed',
      component: RegisterFailed
    },
    {
      path: '/regsuc',
      name: 'regsuc',
      component: RegisterSuccess
    }
  ]
})
