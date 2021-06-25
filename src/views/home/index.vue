<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <ArticleList :id="item.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reqChannels } from '@/api/channels'
import ArticleList from '@/views/home/components/articleList.vue'
export default {
  name: 'Home',
  components: {
    ArticleList
  },
  data() {
    return {
      active: 0,
      channels: []
    }
  },
  async created() {
    const { data: { channels }} = await reqChannels()
    this.channels = channels
    // console.log(channels)
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    padding-top: 90px;
    padding-bottom: 50px;
    box-sizing: border-box;
    ::v-deep {
      .van-tabs__line{
        background-color: #3196fa;
      }
      .van-tabs__wrap{
        position: fixed;
        left: 0;
        top: 46px;
        width: 100%;
      }
      .van-tabs {
      height: 100%;
      // 内容部分
        .van-tabs__content {
          height: 100%;
          // 每个面板的容器
          .van-tab__pane {
            height: 100%;
            overflow: auto;
          }
        }
      }
    }
  }
</style>
