export function getQueryString (name) {
  // hisstory router
  // let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  // let r = window.location.search.substr(1).match(reg)
  // if (r != null) {
  //   return unescape(r[2])
  // }
  // return null

  // hash router  适用于微信重定向过得url
  let str = window.location.href.split('?')
  if (str[1]) {
    str = '?' + str[1].split('#')[0]
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = str.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
  }
  return null
};

// 判断运行环境是支付宝还是微信
export function isAlipayOrWechat () {
  var userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.match(/Alipay/i) === 'alipay') {
    alert('支付宝浏览器')
  } else if (userAgent.match(/MicroMessenger/i) === 'micromessenger') {
    alert('微信浏览器')
  } else {

  }
}
isAlipayOrWechat()
