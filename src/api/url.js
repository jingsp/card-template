import {isAlipayOrWechat} from '@/utils/util'
const WX = {
  GET_USERINFO: '/WechatMsg/vipcard/commonUserInfo', // 获取用户信息
  GET_USERSCORE: '/WechatMsg/vipcard/commonScore', // 获取用户积分
  GET_USERBALANCE: '/WechatMsg/vipcard/commonBalance', // 获取用户余额
  POST_USERREGISTER: '/WechatMsg/vipcard/activeInfo' // 用户注册
}
const ZFB = {}

let browser = isAlipayOrWechat()
let URL = ''
if (browser === '') {
  URL = WX
} else if (browser === '') {
  URL = ZFB
}

export default URL
