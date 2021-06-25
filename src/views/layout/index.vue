<template>
  <div class="layout">
    <van-nav-bar fixed>
      <template #left>
        <div class="logo" />
      </template>
      <template #right>
        <van-button
          class="search-btn"
          round
          type="info"
          size="small"
          icon="search"
          @click="$router.push('/search')"
        >
          搜索
        </van-button>
      </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss" scoped>
.layout {
  // logo区域
  .logo {
    background: url("~@/assets/logo.png") no-repeat;
    background-size: cover;
    width: 100px;
    height: 30px;
  }
  // 搜索按钮
  .search-btn {
    background-color: #5babfb;
    width: 100px;
    font-size: 14px;
    .van-icon {
      color: #fff;
    }
  }
}
</style>
