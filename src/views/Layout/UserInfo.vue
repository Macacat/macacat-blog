<template>
  <div :class="{'is-loading': isloading}">
    <m-img :href="user.html_url"
           class="img-center"
           target="_blank"
           :src="user.avatar_url"
           wdClass="is-128x128"
           rounded="true" />
    <h1>
      <span class="m-center nick-name">{{user.login}}</span>
      <span class="m-center name">{{user.name}}</span>
    </h1>
    <div>
      {{user.bio}}
    </div>
  </div>
</template>
<script>
import UserApi from '@/api/user'
import MImg from '@/components/MImg'
export default {
  name: 'UserInfo',
  components: {
    MImg
  },
  data () {
    return {
      isloading: true,
      user: {}
    }
  },
  mounted () {
    this.getUserInfo()
    this.isloading = false
  },
  methods: {
    getUserInfo () {
      UserApi.getUserInfo().then(response => {
        console.log(response)
        this.user = response.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 20rem;
}
.nick-name {
  font: 1rem;
  font-weight: 800;
}
.m-center {
  display: block;
  text-align: center;
}
</style>
