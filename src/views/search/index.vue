<template>
  <div class="search">
    <!-- 搜索组件一级路由   $router.back()返回上一个页面-->
    <van-nav-bar
      left-arrow
      title="搜索中心"
      @click-left="$router.back()"
    />

    <!-- https://youzan.github.io/vant/#/zh-CN/search -->
    <van-search
      v-model.trim="keyword"
      show-action
      placeholder="请输入搜索关键词"
      shape="round"
      @input="search"
    >
      <template #action>
        <div @click="clickSearch">搜索</div>
      </template>
    </van-search>

    <!-- 联想建议 -->
    <van-cell-group v-if="suggestions.length > 0">
      <van-cell v-for="(item,index) in newSuggestions" :key="item" icon="search" @click="toSearch(index)">
        <div v-html="item" />
      </van-cell>
    </van-cell-group>
    <!-- /联想建议 -->

    <!-- 搜索历史记录 -->
    <van-cell-group v-else>
      <van-cell title="历史记录" />
      <van-cell v-for="(item,index) in history" :key="item" :title="item" @click="addHistory(item)">
        <van-icon name="close" @click="delHistory(index)" />
      </van-cell>

    </van-cell-group>
    <!-- /搜索历史记录 -->
  </div>
</template>

<script>
import { reqSuggestions } from '@/api/search'
import { setHistory, getHistory } from '@/utils/storage'
export default {
  name: 'Search',
  data() {
    return {
      keyword: '', // 搜索关键字
      suggestions: [],
      history: getHistory(),
      timerId: null
    }
  },
  computed: {
    newSuggestions() {
      const regExp = new RegExp(this.keyword, 'ig')
      const arr = this.suggestions.map(item => {
        const newArr = item.replace(regExp, (match) => {
          return `<span style="color:red;">${match}</span>`
        })
        return newArr
      })
      return arr
    }
  },
  methods: {
    search() {
      clearTimeout(this.timerId)
      this.timerId = setTimeout(async() => {
        if (this.keyword.trim() === '') {
          this.suggestions = []
          return
        }
        const { data: { options }} = await reqSuggestions(this.keyword)
        this.suggestions = options
      }, 300)
    },
    clickSearch() {
      if (this.keyword.trim() === '') return
      this.addHistory(this.keyword)
    },
    toSearch(index) {
      this.keyword = this.suggestions[index]
      this.addHistory(this.suggestions[index])
    },
    addHistory(str) {
      const index = this.history.findIndex(item => item === str)
      if (index !== -1) {
        this.history.splice(index, 1)
      }
      this.history.unshift(str)
      setHistory(this.history)
      this.$router.push({
        path: '/result',
        query: {
          keyword: str
        }
      })
    },
    delHistory(index) {
      this.history.splice(index, 1)
      setHistory(this.history)
    }
  }
}
</script>

<style lang="" scoped>

</style>
