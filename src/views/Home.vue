<template>
  <div class="container is-loading">
    <div class="level"
         style="background-color:#333; height: 100px;"></div>

    <!-- 这个是内容部分  -->
    <div class="level">
      <div class="level-left is-flex"
           style="width:30%">
        <user-info />
      </div>
      <div class=" level-right is-paddingless"
           style="width: 69%;">
        <blog />
      </div>
    </div>

    <!-- 这个是底部 -->
    <div class="column"> </div>
  </div>
</template>

<script>
import UserInfo from '@/views/Layout/UserInfo'
import Blog from '@/views/Blog/Index'
export default {
  name: 'Home',
  components: {
    UserInfo,
    Blog
  },
  data () {
    return {
      hello: this.$route.meta.title,
      count: this.$store.state.count
    }
  },
  methods: {
    addCount () {
      this.$store.commit('addCountByOne')
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 30%;
}
</style>
