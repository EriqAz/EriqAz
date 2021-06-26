<template>
  <div class="moreAction">
    <van-cell-group v-if="!isReport">
      <van-cell @click="disLike">不感兴趣</van-cell>
      <van-cell is-link @click="isReport=true">反馈垃圾内容</van-cell>
      <van-cell>拉黑作者</van-cell>
    </van-cell-group>
    <!-- 状态二 反馈-->
    <van-cell-group v-else>
      <van-cell icon="arrow-left" @click="isReport=false">返回</van-cell>
      <van-cell v-for="item in reportList" :key="item.value" @click="report(item.value)">{{ item.label }}</van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import reportList from '@/constants/report'
export default {
  name: 'MoreActione',
  data() {
    return {
      isReport: false,
      reportList
    }
  },
  methods: {
    disLike() {
      this.$emit('disLike')
    },
    report(value) {
      this.$emit('report', value)
    }
  }
}
</script>

<style>

</style>
