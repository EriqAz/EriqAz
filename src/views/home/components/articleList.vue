<template>
  <div class="articleList">
    <van-cell-group>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item.art_id" :title="item.title">
            <template #label>
              <van-grid v-if="item.cover.images" :column-num="3">
                <van-grid-item v-for="(img,index) in item.cover.images" :key="index">
                  <van-image lazy-load :src="img" />
                </van-grid-item>
              </van-grid>
              <div class="meta">
                <span>{{ item.aut_name }}</span>
                <span>{{ item.comm_count }}评论</span>
                <span>{{ item.pubdate | formateTime }}</span>
                <div v-if="tokenInfo.token" class="edit" @click="showMore(item.art_id)">
                  <van-icon name="cross" />
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </van-cell-group>
  </div>
</template>

<script>
import { reqArticle } from '@/api/channels'
import { mapState } from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      refreshing: false
    }
  },
  computed: {
    ...mapState('user', ['tokenInfo'])
  },
  created() {
    this.$eventBus.$on('disLike', (obj) => {
      if (this.id === obj.channelsId) {
        this.list = this.list.filter(item => item.art_id !== obj.articleId)
      }
    })
  },
  methods: {
    async onLoad() {
      if (!this.timestamp) {
        this.timestamp = +new Date()
      }
      const res = await reqArticle(this.id, this.timestamp)
      this.timestamp = res.data.pre_timestamp
      this.list = [...this.list, ...res.data.results]
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成
      if (res.data.results.length === 0 || this.timestamp === null) {
        this.finished = true
      }
    },
    async onRefresh() {
      const res = await reqArticle(this.id, +new Date())
      this.timestamp = res.data.pre_timestamp
      this.list = res.data.results
      this.$toast.success('刷新成功')
      this.refreshing = false
    },
    showMore(art_id) {
      this.$emit('showMore', art_id)
    }
  }
}
</script>

<style lang="scss" scoped>
.articleList {
  .meta {
    span{
      margin-right: 10px;
    }
  }
  .doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
  }
  .edit {
    float: right;
    margin-top: 4px;
  }
}

</style>
