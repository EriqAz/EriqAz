<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <van-nav-bar
      fixed
      left-arrow
      title="文章详情"
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <!-- 加载中 loading -->
    <van-loading v-if="loading" class="article-loading" />
    <!-- /加载中 loading -->

    <!-- 文章详情 -->
    <div class="detail">
      <h3 class="title">{{ article.title }}</h3>
      <div class="author">
        <van-image round width="1rem" height="1rem" fit="fill" :src="article.aut_photo" />
        <div class="text">
          <p class="name">{{ article.aut_name }}</p>
          <p class="time">{{ article.pubdata | formateTime }}</p>
        </div>
        <van-button
          round
          size="small"
          type="info"
          @click="clickFollow(article.aut_id)"
        >{{ article.is_followed ? '取 消' : '+ 关注' }}</van-button>
      </div>
      <div class="content">
        <div v-html="article.content" />
      </div>
      <van-divider>END</van-divider>
      <div class="zan">
        <van-button
          round
          size="small"
          hairline
          type="primary"
          plain
          :icon="article.attitude === 1 ? 'good-job' : 'good-job-o'"
          @click="clickAttitude(article.art_id)"
        >{{ article.attitude === 1? '取消点赞':'点赞' }}</van-button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <van-button
          round
          size="small"
          hairline
          type="danger"
          plain
          icon="delete"
          @click="clickLike(article.art_id)"
        >{{ article.attitude === 0 ? '取消不喜欢' : '不喜欢' }}</van-button>
      </div>
    </div>
    <!-- /文章详情 -->
    <ArticleComment :article-id="$route.params.id" />
  </div>
</template>

<script>
// push时传对象, params (写name传递) 就通过 this.$route.params获取
// push时传对象, query  (写path)     就通过 this.$route.query 获取
// 动态路由传参  /article/:id        this.$route.params 获取
import { reqDetaile } from '@/api/result'
import { getFollow, getUnFollow } from '@/api/user'
import { getUnAttitude, getAttitude, getLike, getDisLike } from '@/api/articles'
import ArticleComment from '@/views/search/components/comment.vue'
export default {
  name: 'ArticleIndex',
  components: {
    ArticleComment
  },
  data() {
    return {
      loading: true, // 控制加载中的 loading 状态
      article: { }
    }
  },
  created() {
    this.loadDeatil()
  },
  methods: {
    async loadDeatil() {
      const { data } = await reqDetaile(this.$route.params.id)
      this.article = data
      this.loading = false
      this.$nextTick(() => {
        const imgs = document.querySelectorAll('.content img')
        imgs.forEach((item) => {
          item.src = item.dataset.originalSrc || item.dataset.src || 'https://img1.baidu.com/it/u=3901311039,2934597827&fm=26&fmt=auto&gp=0.jpg'
        })
      })
    },
    async clickFollow(id) {
      if (this.article.is_followed === true) {
        await getUnFollow(id)
        this.article.is_followed = false
        this.$toast.success('取关成功')
      } else {
        await getFollow(id)
        this.article.is_followed = true
        this.$toast.success('关注成功')
      }
    },
    async clickAttitude(id) {
      if (this.article.attitude === 1) {
        this.article.attitude = -1
        await getUnAttitude(id)
      } else {
        this.article.attitude = 1
        await getAttitude(id)
      }
    },
    async clickLike(id) {
      if (this.article.attitude === 0) {
        this.article.attitude = -1
        await getLike(id)
      } else {
        this.article.attitude = 0
        await getDisLike(id)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.article-container{
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
.article-loading {
  padding-top: 100px;
  text-align: center;
}
.error{
  padding-top: 100px;
  text-align: center;
}
.detail {
  padding: 50px 10px;
  .title {
    font-size: 16px;
  }
  .zan{
    text-align: center;
  }
  .author {
    padding: 10px 0;
    display: flex;
    .text {
      flex: 1;
      padding-left: 10px;
      line-height: 1.3;
      .name {
        font-size: 14px;
        margin: 0;
      }
      .time {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .content {
    font-size:14px;
    overflow: hidden;
    white-space: pre-wrap;
    word-break: break-all;
    ::v-deep img{
      max-width:100%;
      background: #f9f9f9;
    }
  }
}
</style>

