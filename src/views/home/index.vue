<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab v-for="item in channels" :key="item.id" :title="item.name">内容 1</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reqChannels } from '@/api/channels'
export default {
  name: 'Home',
  data() {
    return {
      active: 2,
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
    ::v-deep {
      .van-tabs__line{
        background-color: #3196fa;
      }
    }
  }
</style>
