<template>
  <div class="article-comments">
    <!-- 导航栏 -->
    <van-nav-bar :title="comment.reply_count + '条回复'">
      <van-icon slot="left" name="cross" @click="closeReply" />
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 当前评论 -->
    <van-cell title="当前评论">
      <van-image
        slot="icon"
        round
        width="30"
        height="30"
        style="margin-right: 10px;"
        :src="comment.aut_photo"
      />
      <span slot="title" style="color: #466b9d;">{{ comment.aut_name }}</span>
      <div slot="label">
        <p style="color: #363636;">{{ comment.content }}</p>
        <p>
          <span style="margin-right: 10px;">{{ comment.pubdate | formateTime }}</span>
          <van-button
            size="mini"
            type="default"
          >回复{{ comment.reply_count }}</van-button>
        </p>
      </div>
      <van-icon slot="right-icon" />
    </van-cell>
    <!-- /当前评论 -->
    <van-divider>全部回复</van-divider>

    <!-- 对当前评论 回复列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, index) in list"
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
          </p>
        </div>
      </van-cell>
    </van-list>
    <!-- 回复列表 -->

    <!-- 发布回复 -->
    <van-cell-group class="publish-wrap">
      <van-field
        v-model="content"
        clearable
        placeholder="请输入回复内容"
      >
        <van-button
          slot="button"
          size="mini"
          type="info"
          @click="addReply"
        >发布</van-button>
      </van-field>
    </van-cell-group>
    <!-- /发布回复 -->
  </div>

</template>
<script>
import { reqCommentReply, addReply } from '@/api/articles'
export default {
  name: 'CommentReply',
  props: {
    comment: {
      type: Object,
      required: true
    },
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
      offset: null,
      content: ''
    }
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      const { data } = await reqCommentReply(this.comment.com_id, this.offset)
      this.list.push(...data.results)
      this.offset = data.last_id
      this.loading = false
      if (data.results.length < 10) {
        this.finished = true
      }
    },
    async addReply() {
      if (this.content.trim() === '') {
        return
      }
      const { data } = await addReply(this.comment.com_id, this.content, this.articleId)
      this.list.unshift(data.new_obj)
      this.comment.reply_count++
      this.content = ''
    },
    closeReply() {
      this.$emit('closeReply')
    }
  }
}
</script>
<style lang="scss" scoped>
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
