<template>
  <div class="has-register-conatiner">
    <user-base>
      <div class="wrapper">
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
.has-register-conatiner {
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    background: url(../../assets/images/hasBg.png) no-repeat;
    background-size: 100% 100%;
  }
  .pos {
    position: absolute;
    left: 50%;
    bottom: 1.32rem;
    transform: translateX(-50%);
  }
  .strenght {
    color: #8bc67a;
  }
}

</style>
