<template>
  <div class="profile">
    <!-- 导航条 -->
    <van-nav-bar left-arrow title="编辑资料" @click-left="$router.back()" />

    <!-- 编辑区 -->
    <input ref="iptFile" type="file" hidden @change="iptChange">
    <van-cell-group>
      <van-cell is-link title="头像" center @click="$refs.iptFile.click()">
        <van-image
          slot="default"
          width="1.5rem"
          height="1.5rem"
          fit="cover"
          round
          :src="user.photo"
        />
      </van-cell>

      <van-cell is-link title="名称" :value="user.name" @click="clickName" />
      <van-cell is-link title="性别" :value="user.gender === 1? '女':'男'" @click="showGender=true" />
      <van-cell is-link title="生日" :value="user.birthday" @click="clickBirthday" />
    </van-cell-group>

    <!-- 修改姓名 -->
    <van-dialog v-model="showName" title="标题" show-cancel-button @confirm="saveName">
      <van-field v-model.trim="newName" placeholder="请输入用户名" />
    </van-dialog>

    <!-- 修改性别 -->
    <van-popup v-model="showGender" position="bottom">
      <van-nav-bar title="修改性别" left-text="取消" @click-left="showGender=false" />
      <van-cell title="男" is-link @click="saveGender(0)" />
      <van-cell title="女" is-link @click="saveGender(1)" />
    </van-popup>

    <!-- 修改出生日期 -->
    <van-popup v-model="showBirthday" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="saveBirthday"
      />
    </van-popup>
  </div>
</template>

<script>
import { getUserIfno, updatePhoto, userinfo } from '@/api/user'
import dayjs from 'dayjs'
export default {
  name: 'UserProfile',
  data() {
    return {
      // 控制弹层
      showName: false,
      showGender: false,
      showBirthday: false,
      // 当前用户的信息
      user: {},
      newName: '',
      minDate: new Date(1990 - 1 - 1),
      maxDate: new Date(),
      currentDate: new Date()
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const { data } = await getUserIfno()
      this.user = data
    },
    clickName() {
      this.showName = true
      this.newName = this.user.name
    },
    async saveName() {
      if (this.newName === '') return
      await userinfo({ name: this.newName })
      this.user.name = this.newName
    },
    async saveGender(gender) {
      await userinfo({ gender })
      this.user.gender = gender
      this.showGender = false
    },
    clickBirthday() {
      this.showBirthday = true
      this.currentDate = new Date(this.user.birthday)
    },
    async saveBirthday() {
      const birthday = dayjs(this.currentDate).format('YYYY-MM-DD')
      await userinfo({ birthday })
      this.user.birthday = birthday
      this.showBirthday = false
    },
    async iptChange(e) {
      try {
        const img = e.target.files[0]
        if (!img) return
        this.$toast.loading({
          message: '文件上传中...',
          forbidClick: true,
          overlay: true
        })
        const fd = new FormData()
        fd.append('photo', img)
        const { data: { photo }} = await updatePhoto(fd)
        this.user.photo = photo
        this.$toast.success('更新成功')
      } catch {
        this.$toast.fail('更新失败')
      }
    }
  }
}
</script>

<style lang="scss">

</style>

