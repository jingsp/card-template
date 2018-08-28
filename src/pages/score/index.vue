<template>
  <div class="score-container">
   <data-page :tel="tel" :num="num" text="积分"></data-page>
  </div>
</template>
<script>
import DataPage from '@/components/dataPage'
import {getUserInfo, getUserScore} from '@/api'
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
    getUserScore(openid, cardId).then(res => {
      this.num = res.totalScores || 0
    })
  }
}
</script>
