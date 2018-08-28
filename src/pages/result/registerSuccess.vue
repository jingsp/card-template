<template>
  <div class="register-suc-conatiner">
    <user-base>
      <div class="wrapper">
        <div class="card-container">
          <img src="../../assets/images/card.png" alt="">
        </div>
        <div class="pos">
          点击此处跳转
            <span class="strenght">「卡包」</span>
          查看
        </div>
      </div>
    </user-base>
  </div>
</template>
<script>
import UserBase from '@/components/userBase'
export default {
  components: {
    UserBase
  }
}
</script>
<style lang="scss" scoped>
.register-suc-conatiner {
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../../assets/images/sucBg.png) no-repeat;
    background-size: 100% 100%;
  }
   .card-container {
      position: absolute;
      left: 50%;
      top: 0.84rem;
      transform: translateX(-50%);
      img {
        width: 6rem;
      }
  }
  .pos {
    position: absolute;
    left: 50%;
    bottom: 1.32rem;
    transform: translateX(-50%);
  }
  .btn {
    margin: 0.6rem auto 0.6rem;
    width: 6.12rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    background-color: #da3732;
    border-radius: 0.08rem;
    font-weight: 500;
    font-size: 0.3rem;
    color: #fff;
  }
  .strenght {
    color: #8bc67a;
  }
}

</style>
