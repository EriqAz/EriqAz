<template>
  <div class="article-comments">
    <!-- 评论列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item,index) in list"
        :key="index"
      >
        <van-image
          slot="icon"
          round
          width="30"
          height="30"
          style="margin-right: 10px;"
          :src="item.aut_photo"
        />
        <span slot="title" style="color: #466b9d;">{{ item.aut_name }}</span>
        <div slot="label">
          <p style="color: #363636;">{{ item.content }}</p>
          <p>
            <span style="margin-right: 10px;">{{ item.pubdate | formateTime }}</span>
            <van-button size="mini" type="default" @click="showReply(item)">回复</van-button>
          </p>
        </div>
        <van-icon
          slot="right-icon"
          :color="item.is_liking ? 'red' : ''"
          :name="item.is_liking ? 'like' : 'like-o'"
          @click="addIsLike(item.com_id)"
        />
      </van-cell>
    </van-list>
    <!-- 评论列表 -->

    <!-- 发布评论 -->
    <van-cell-group class="publish-wrap">
      <van-field
        v-model="content"
        clearable
        placeholder="请输入评论内容"
      >
        <van-button
          slot="button"
          size="mini"
          type="info"
          @click="addComment"
        >发布</van-button>
      </van-field>
    </van-cell-group>
    <!-- /发布评论 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '85%' }">
      <CommentReply
        v-if="show"
        :comment="currentComment"
        :article-id="articleId"
        @closeReply="closeReply"
      />
    </van-popup>
  </div>
</template>

<script>
import { getComment, reqAddComment, addIsLike, cancelLike } from '@/api/articles'
import CommentReply from '@/views/search/components/commentReply.vue'
export default {
  name: 'ArticleComment',
  components: {
    CommentReply
  },
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      list: [], // 评论列表
      loading: false, // 上拉加载更多的 loading
      finished: false, // 是否加载结束
      lastId: null,
      content: '',
      show: false,
      currentComment: ''
    }
  },

  methods: {
    async onLoad() {
      const { data } = await getComment(this.articleId, this.lastId)
      this.list.push(...data.results)
      this.lastId = data.last_id
      this.loading = false
      if (data.results.length < 10) {
        this.finished = true
      }
    },
    async addComment() {
      if (this.content.trim() === '') {
        return
      }
      const { data } = await reqAddComment(this.articleId, this.content)
      this.list.unshift(data.new_obj)
      this.content = ''
    },
    showReply(item) {
      this.show = true
      this.currentComment = item
    },
    closeReply() {
      this.show = false
    },
    async addIsLike(id) {
      const com = this.list.filter(item => item.com_id === id)
      if (com[0].is_liking) {
        await cancelLike(id)
        com[0].is_liking = false
      } else {
        await addIsLike(id)
        com[0].is_liking = true
      }
    }
  }
}
</script>

<style scoped lang='scss'>
// 发表评论的区域是固定在下端的
.publish-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
// 给发表评论区空出地方
.van-list {
  margin-bottom: 45px;
}
</style>

