import axios from '@/utils/http'
import md5 from 'js-md5'
import URL from './url'

const a = 'o5cwMwCQWhj9GzO9Pjr2U9Tl0W3Q'
const b = 'p5cwMwOtnsot5Eb4WXyzopfOZQ1A'
// const a = ''
// const b = ''

// 生成签名
function generateSign (params = {}) {
  let HR_KEY = '2a330818a0cc4823b78a968f55ba7504'
  let str = ''
  for (let k in params) {
    str += `${k}=${params[k]}&`
  }
  console.log(str)
  str += `key=${HR_KEY}`
  console.log(str)
  return md5(str).toUpperCase()
}

let test = generateSign(111111)
console.log(test)

// 获取会员信息
export function getUserInfo (openid = a, cardId = b) {
  return new Promise((resolve, reject) => {
    axios.get(URL.GET_USERINFO, {
      params: {
        openid,
        card_id: cardId
      }
    }).then(res => {
      console.log(res)
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取用户积分
export function getUserScore (openid = a, cardId = b) {
  return new Promise((resolve, reject) => {
    axios.get(URL.GET_USERSCORE, {
      params: {
        openid,
        card_id: cardId
      }
    }).then(res => {
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取用户余额
export function getUserBalance (openid = a, cardId = b) {
  return new Promise((resolve, reject) => {
    axios.get(URL.GET_USERBALANCE, {
      params: {
        openid,
        card_id: cardId
      }
    }).then(res => {
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

// 获取用户注册
export function userRegister (activateTicket, cardId) {
  return new Promise((resolve, reject) => {
    axios.get(URL.POST_USERREGISTER, {
      params: {
        activate_ticket: activateTicket,
        card_id: cardId
      }
    }).then(res => {
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
