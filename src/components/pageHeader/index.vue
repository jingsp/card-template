<template>
  <div class="page-header-container">
    <h3 class="title">{{name}}</h3>
  </div>
</template>
<script>
export default {
  props: [
    'name'
  ],
  created () {
    console.log('wwwww')
  }
}
</script>
<style lang="scss" scoped>
.page-header-container {
  display: flex;
  align-items: center;
  padding-left: 0.66rem;
  height: 1rem;
  background-color: #efeff4;
  border-top-left-radius: 0.08rem;
  border-top-right-radius: 0.08rem;
  .title {
    position: relative;
    font-size: 0.32rem;
    &:before {
      position: absolute;
      left: -0.3rem;
      top: 0.07rem;
      display: inline-block;
      content: '';
      width: 0.08rem;
      height: 0.32rem;
      background-color: #da3732;
    }
  }
}
</style>
