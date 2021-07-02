<template>
  <div class="container">
    <!-- 固定导航 -->
    <van-nav-bar fixed left-arrow title="小智同学" @click-left="$router.back()" />

    <!-- 聊天主体区域 -->
    <div ref="refList" class="chat-list">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="chat-item"
        :class="item.name === 'xz' ? 'left' : 'right'"
      >
        <!-- 左侧是机器人小智 -->
        <template v-if="item.name === 'xz'">
          <van-image fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="chat-pao">{{ item.msg }}</div>
        </template>
        <!-- 右侧是当前用户 -->
        <template v-else>
          <div class="chat-pao">{{ item.msg }}</div>
          <van-image fit="cover" round :src="user.photo" />
        </template>
      </div>
    </div>

    <!-- 对话区域 -->
    <div class="reply-container van-hairline--top">
      <van-field v-model.trim="word" placeholder="说点什么...">
        <span slot="button" style="font-size:12px;color:#999" @click="send">提交</span>
      </van-field>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { reqUserInfo } from '@/api/user'
export default {
  name: 'UserChat',
  data() {
    return {
      word: '',
      list: [],
      user: {},
      socket: null
    }
  },
  created() {
    this.initSocket()
    this.getUserInfo()
  },
  destroyed() {
    this.socket.close()
  },
  methods: {
    async getUserInfo() {
      const res = await reqUserInfo()
      this.user = res.data
    },
    initSocket() {
      this.socket = io('http://192.168.134.31:8001', {
        query: {
          token: this.$store.state.user.tokenInfo.token
        },
        transports: ['websocket']
      })

      this.socket.on('connect', () => {
        this.list.push({
          name: 'xz',
          msg: '你好，我是小智！',
          timestamp: +new Date()
        })
      })

      this.socket.on('message', (obj) => {
        const { msg, timestamp } = obj
        this.list.push({
          name: 'xz',
          msg,
          timestamp
        })
        this.$nextTick(() => {
          this.$refs.refList.scrollTop = this.$refs.refList.scrollHeight
        })
      })
    },
    send() {
      if (this.word === '') return
      this.socket.emit('message', {
        msg: this.word,
        timestamp: Date.now()
      })
      this.list.push({
        name: 'me',
        msg: this.word,
        timestamp: +new Date()
      })
      this.word = ''
      this.$nextTick(() => {
        this.$refs.refList.scrollTop = this.$refs.refList.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background:#fafafa;
  padding: 46px 0 50px 0;
  .chat-list {
    height: 100%;
    overflow-y: scroll;
    .chat-item{
      padding: 10px;
      .van-image{
        vertical-align: top;
        width: 40px;
        height: 40px;
      }
      .chat-pao{
        vertical-align: top;
        display: inline-block;
        min-width: 40px;
        max-width: 70%;
        min-height: 40px;
        line-height: 38px;
        border: 0.5px solid #c2d9ea;
        border-radius: 4px;
        position: relative;
        padding: 0 10px;
        background-color: #e0effb;
        word-break: break-all;
        font-size: 14px;
        color: #333;
        &::before{
          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          top: 12px;
          border-top:0.5px solid #c2d9ea;
          border-right:0.5px solid #c2d9ea;
          background: #e0effb;
        }
      }
    }
  }
}
.chat-item.right{
  text-align: right;
  .chat-pao{
    margin-left: 0;
    margin-right: 15px;
    &::before{
      right: -6px;
      transform: rotate(45deg);
    }
  }
}
.chat-item.left{
  text-align: left;
  .chat-pao{
    margin-left: 15px;
    margin-right: 0;
    &::before{
      left: -5px;
      transform: rotate(-135deg);
    }
  }
}
.reply-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 44px;
  width: 100%;
  background: #f5f5f5;
  z-index: 9999;
}
</style>

