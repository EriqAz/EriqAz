<template>
  <div class="search-result">
    <!-- 导航栏 -->
    <van-nav-bar
      :title="$route.query.keyword + '的搜索结果'"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <!-- 文章列表 -->
    <van-list
      v-model="loading"
      class="article-list"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item,index) in list"
        :key="index"
        :title="item.title"
        @click="$router.push(`/detail/${item.art_id}`)"
      />
    </van-list>
    <!-- /文章列表 -->
  </div>
</template>

<script>
import { reqResult } from '@/api/result'
export default {
  name: 'SearchResult',
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  methods: {
    async onLoad() {
      const { data: { results }} = await reqResult(this.$route.query.keyword)
      this.list.push(...results)
      // console.log(results)
      this.loading = false
      if (results.length < 10) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result {
  .article-list {
    margin-top: 39px;
  }
}
</style>
