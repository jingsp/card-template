<template>
  <div class="data-page-container">
    <user-base>
       <div class="top-wrapper">
         <div class="logo"></div>
         <div class="name">
           会员: {{tel}}
         </div>
       </div>
       <div class="card-container">
         <img src="../../assets/images/card.png" alt="">
       </div>
       <div class="score-wrapper">
         <p class="text">当前{{text}}</p>
         <p class="num">{{num}}</p>
       </div>
    </user-base>
  </div>
</template>
<script>
import UserBase from '@/components/userBase'
export default {
  data () {
    return {
    }
  },
  props: [
    'text',
    'num',
    'tel'
  ],
  components: {
    UserBase
  },
  created () {

  }
}
</script>
<style lang="scss" scoped>
.data-page-container {
  .top-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.8rem;
  }
  .logo {
    width: 2.3rem;
    height: 0.5rem;
    background: url(../../assets/images/logo.png) no-repeat;
    background-size: 100% 100%;
  }
  .card-container {
    margin-top: 0.46rem;
    text-align: center;
    img {
      width: 6rem;
    }
  }
  .score-wrapper {
    margin-top: 0.78rem;
    .text {
      text-align: center;
      font-size: 0.32rem;
      color: #878787;
    }
    .num {
      margin-top: 0.52rem;
      text-align: center;
      font-size: 0.6rem;
      color: #878787;
    }
  }
}
</style>
