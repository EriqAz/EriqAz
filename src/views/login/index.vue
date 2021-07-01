<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field
        v-model="mobile"
        required
        label="手机号"
        placeholder="请输入用户名"
        :error-message="error_mobile"
        @input="validate"
      />
      <van-field
        v-model="code"
        required
        center
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
        :error-message="error_code"
        @input="validate"
      >
        <template #button>
          <van-button size="small" type="primary" @click="sendCode">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="btn-wrap">
      <van-button type="info" @click="Login">登录</van-button>
      <van-button type="primary" @click="getUser">获取个人信息</van-button>
    </div>
  </div>
</template>

<script>
import { reqSendCode, reqLogin, getUserIfno } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      mobile: '15138705203',
      code: '246810',
      error_mobile: '',
      error_code: ''
    }
  },
  methods: {
    async sendCode() {
      try {
        await reqSendCode(this.mobile)
        this.$toast.success('验证码发送成功')
      } catch (e) {
        this.$toast(e.response.data.message)
      }
    },
    async Login() {
      if (!this.validate()) return
      this.$toast.loading({
        duration: 0,
        Overlay: true,
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await reqLogin(this.mobile, this.code)
        this.$store.commit('user/setTokenInfo', res.data)
        this.$toast.success('登录成功')
        // this.$router.push('/')
        const backto = this.$route.query.backto || '/'
        this.$router.push(backto)
      } catch (e) {
        this.$toast.fail(e.response.data.message)
      }
    },
    validate() {
      if (!this.mobile === '') {
        this.error_mobile = '请输入手机号'
        return false
      }
      if (!/^1\d{10}$/.test(this.mobile)) {
        this.error_mobile = '手机号格式不正确'
        return false
      }
      this.error_mobile = ''
      if (!this.code === '') {
        this.error_code = '请输入验证码'
        return false
      }
      if (!/^\d{6}$/.test(this.code)) {
        this.error_code = '验证码格式错误'
        return false
      }
      this.error_code = ''
      return true
    },
    getUser() {
      const res = getUserIfno()
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .btn-wrap {
    padding: 20px;
    .van-button {
      width: 100%;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
