<template>
  <div class="user-info-container">
    <user-base class="content">
      <page-header name="会员信息"></page-header>
      <!-- <van-cell-group> -->
        <van-field
          v-model="username"
          clearable
          label="姓名"
          icon="arrow"
          placeholder="请输入您的姓名"
        />
        <van-field
          v-model="gender"
          clearable
          label="性别"
          icon="arrow"
          placeholder="请输入您的性别"
        />
        <van-field
          v-model="birthday"
          clearable
          label="生日"
          icon="arrow"
          placeholder="请输入您的生日"
        />
        <van-field
          v-model="phone"
          clearable
          label="联系电话"
          icon="arrow"
          placeholder="请输入您的手机号码"
        />
      <div class="btn">保存信息</div>
    </user-base>
  </div>
</template>
<script>
import UserBase from '@/components/userBase'
import PageHeader from '@/components/pageHeader'
import {getUserInfo} from '@/api'
// import {Toast} from 'vant'
export default {
  data () {
    return {
      username: '',
      gender: '',
      birthday: '',
      phone: ''
    }
  },
  components: {
    UserBase,
    PageHeader
  },
  created () {
    const openid = this.$route.query.openid
    const cardId = this.$route.query.card_id

    getUserInfo(openid, cardId).then(res => {
      console.log(2222, res)
      this.username = res.name
      this.gender = res.sex
      this.phone = res.phone
      this.birthday = res.birthday
    })
  }
}
</script>
<style lang="scss">
.user-info-container {
  height: 100%;
  .van-cell {
    color: #909090;
  }
  input::-webkit-input-placeholder {
    text-align: right;
  }
}
</style>

<style lang="scss" scoped>
.user-info-container {
  .btn {
    margin: 0.6rem auto 0.6rem;
    // margin-b
    width: 6.12rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 0.08rem;
    font-weight: 500;
    font-size: 0.3rem;
    color: #cdced2;
    &.active {
      background-color: #da3732;
      color: #fff;
    }
  }
}
</style>
