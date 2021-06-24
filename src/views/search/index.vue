<template>
  <div class="search">
    <van-nav-bar
      title="搜索中心"
      left-arrow
      @click-left="$router.back()"
    />
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  }

}
</script>

<style>

</style>
