<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">
        <ArticleList :id="item.id" @showMore="showMore" />
      </van-tab>
    </van-tabs>
    <van-popup v-model="show" :style="{ width: '80%' }">
      <MoreAction ref="moreAction" @disLike="disLike" @report="report" />
    </van-popup>

    <div class="bar-btn" @click="showChannelEdit = true">
      <van-icon name="wap-nav" />
    </div>

    <van-action-sheet v-model="showChannelEdit" title="频道编辑">

      <ChannelEdit :active="active" @currentChannel="currentChannel" @currentActive="currentActive" />

    </van-action-sheet>

  </div>
</template>

<script>
import { reqDisLike, reqReport } from '@/api/articles'
import { mapActions, mapState } from 'vuex'
import ArticleList from './components/articleList.vue'
import MoreAction from './components/moreAction.vue'
import ChannelEdit from './components/channelEdit.vue'
export default {
  name: 'Home',
  components: {
    ArticleList,
    MoreAction,
    ChannelEdit
  },
  data() {
    return {
      active: 0,
      show: false,
      articleId: '',
      showChannelEdit: false
    }
  },
  computed: {
    ...mapState('channels', ['channels'])
  },
  created() {
    this.getChannels()
  },

  methods: {
    ...mapActions('channels', ['getChannels']),
    showMore(articleId) {
      this.show = true
      this.articleId = articleId
      this.$nextTick(() => { this.$refs.moreAction.isReport = false })
    },
    async disLike() {
      // 发送请求
      await reqDisLike(this.articleId)
      // 关闭弹层
      this.show = false
      // 删除数据
      const obj = {
        articleId: this.articleId,
        channelsId: this.channels[this.active].id
      }
      this.$eventBus.$emit('disLike', obj)
    },
    async report(value) {
      await reqReport(this.articleId, value)
      this.show = false
      const obj = {
        articleId: this.articleId,
        channelsId: this.channels[this.active].id
      }
      this.$eventBus.$emit('disLike', obj)
    },
    currentChannel(index) {
      this.showChannelEdit = false
      this.active = index
    },
    currentActive(value) {
      this.active = value
    }
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
      right:30px;
      top: 46px;
    }
    .van-tabs {
    height: 100%;
    // 内容部分
      .van-tabs__content {
        height: 100%;
        // 每个面板的容器
        .van-tab__pane {
          height: 100%;

        }
      }
    }
  }
  .bar-btn {
    position: fixed;
    right: 5px;
    top: 57px;
    display: flex;
    align-items: center;
    background-color: #fff;
    opacity: 0.8;
    z-index:1;
    .van-icon-wap-nav{
      font-size: 20px;
    }
  }
}
</style>
