<template>
  <div class="score-container">
   <data-page :tel="tel" :num="num" text="余额"></data-page>
  </div>
</template>
<script>
// import UserBase from '@/components/userBase'
import DataPage from '@/components/dataPage'
import {getUserInfo, getUserBalance} from '@/api'
// import {Toast} from 'vant'
export default {
  data () {
    return {
      tel: '132****8909',
      num: '--'
    }
  },
  components: {
    DataPage
  },
  created () {
    // console.log(this.$route.query)
    const openid = this.$route.query.openid
    const cardId = this.$route.query.card_id

    getUserInfo(openid, cardId).then(res => {
      this.tel = res.phone
    })
    getUserBalance(openid, cardId).then(res => {
      this.num = res.useTotal || 0
    })
  }
}
</script>
