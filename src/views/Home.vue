<template>
  <div class="container">
    <div class="level"
         style="background-color:#333; height: 100px;"></div>
    <user-info />
  </div>
</template>

<script>
import UserInfo from '@/views/Layout/UserInfo'
export default {
  name: 'Home',
  components: {
    UserInfo
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
