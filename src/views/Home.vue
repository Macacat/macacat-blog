<template>
  <div>
    <div class="picture level has-background-primary is-marginless">
    </div>
    <!-- 这个是内容部分  -->
    <div class="container">
      <div class="level nav">
        <m-nav />
      </div>
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
    </div>
    <!-- 这个是底部 -->
    <div class="level"> </div>
  </div>
</template>

<script>
import UserInfo from '@/views/Layout/UserInfo'
import Blog from '@/views/Blog/Blog'
import MNav from '@/views/Layout/MNav'
export default {
  name: 'Home',
  components: {
    UserInfo,
    Blog,
    MNav
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
.picture {
  height: 20rem;
}
.nav {
  height: 5rem;
}
</style>
