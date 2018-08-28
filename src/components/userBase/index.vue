<template>
  <div class="user-base-container">
    <div class="content">
      <slot ></slot>
    </div>
    <div class="fotter">
      <span>明珠商厦</span>
      <span class="divider">|</span>
      <span>ID-CARD</span>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(44444)
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.user-base-container {
  display: flex;
  flex-direction: column;
  padding: 0.32rem 0.32rem 0;
  height: 100vh;
  width: 100%;
  background-color: #545665;
  box-sizing: border-box;
  .content {
    flex: 1;
    background-color: #fff;
    border-radius: 0.08rem;
  }
  .fotter {
    flex: 0.94rem 0 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #989aa3;
    .divider {
      margin-left: 0.24rem;
      margin-right: 0.24rem;
    }
  }
}
</style>
