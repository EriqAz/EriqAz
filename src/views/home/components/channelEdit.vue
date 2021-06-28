<template>
  <div class="channelEdit">
    <div class="channel">
      <van-cell title="我的频道" :border="false">
        <van-button
          plain
          size="mini"
          type="danger"
          @click="isShow = !isShow"
        >{{ isShow ? "取消" : "编辑" }}</van-button>
      </van-cell>
      <van-grid>
        <van-grid-item v-for="(item,index) in channels" :key="item.id" @click="delChannel(index)">
          <span
            :class="{current:index === active}"
            @click="currentChannel(index)"
          >{{ item.name }}</span>
          <van-icon v-if="isShow && index!== 0" name="cross" class="btn" />
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 当前登陆用户没有订阅的频道 -->
    <div class="channel">
      <van-cell title="可选频道" :border="false" />
      <van-grid>
        <van-grid-item
          v-for="channel in optionalChannels"
          :key="channel.id"
          @click="addChannelsFn(channel)"
        >
          <span>{{ channel.name }}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { reqNewChannels } from '@/api/channels'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'ChannelEdit',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState('channels', ['channels']),
    ...mapGetters('channels', ['optionalChannels'])
  },
  created() {
    this.getAllChannels()
  },
  methods: {
    ...mapActions('channels', ['getAllChannels']),
    ...mapMutations('channels', ['addChannels']),
    async addChannelsFn(channel) {
      this.addChannels(channel)
      const channelList = this.channels.map((item, index) => ({
        id: item.id,
        seq: index
      })
      )
      await reqNewChannels(channelList)
    },
    async delChannel(index) {
      if (this.isShow === false) return
      if (index === this.active) {
        this.$emit('currentActive', 0)
      }
      if (index < this.active) {
        this.$emit('currentActive', this.active - 1)
      }
      this.channels.splice(index, 1)
      const channelList = this.channels.map((item, index) => ({
        id: item.id,
        seq: index
      })
      )
      await reqNewChannels(channelList)
    },
    currentChannel(index) {
      if (this.isShow === true) {
        return
      }
      this.$emit('currentChannel', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.channel{
  padding:15px;
  font-size:14px;
  ::v-deep .van-button--mini {
    height: 22px;
    min-width: 50px;
  }
  .btn {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 14px;
  }
  .current {
  color: #e5615b;
  font-weight: bold;
}
}
</style>
