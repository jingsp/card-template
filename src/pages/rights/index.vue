<template>
  <div class="rights-container">
    <ul class="content">
      <li class="text">每人限领1张， 限本人使用；</li>
      <li class="text">优惠券每次消费只能核销1张；</li>
      <li class="text">优惠券领取之后，到店消费使用微信支付即可核销，自动抵扣优惠券；</li>
      <li class="text">会员到店消费，使用微信支付可获得积分；会员日积分累积翻倍，实际消费1元可得2个积分；</li>
      <li class="text">会员到店消费，购买烟酒、蔬果生鲜、便民服务等商品均不赠送积分；</li>
      <li class="text">会员积分当年有效，每年12月31日24时清零；</li>
      <li class="text">本公司在法律允许范围享有对本卡的最终使用解释权。</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.rights-container {
  position: relative;
  height: 100vh;
  background: url('../../assets/images/rightsBg.png') no-repeat;
  background-size: 100% 100%;
  .content {
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 0.32rem 0 0.56rem;
    width: 7.2rem;
    .text {
      position: relative;
      margin-top: 0.2rem;
      line-height: 0.44rem;
      font-size: 0.26rem;
      color: #884f04;
      &:before {
        position: absolute;
        top: 0.12rem;
        left: -0.3rem;
        display: inline-block;
        content: '';
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 0.08rem;
        background-color: #db570f;
      }
    }

  }
}
</style>
