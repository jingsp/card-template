<template>
  <div class="register-failed-conatiner">
    <user-base>
      <div class="wrapper">
        <div class="btn pos">
          重新注册
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
.register-failed-conatiner {
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../../assets/images/errBg.png) no-repeat;
    background-size: 100% 100%;
  }
  .pos {
    position: absolute;
    left: 50%;
    bottom: 1.06rem;
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
}

</style>
