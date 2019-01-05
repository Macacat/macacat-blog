<template>
  <div style="width: 100%; padding: 5px;">
      <m-nav/>
      <router-view/>
  </div>
</template>

<script>
import MNav from '@/views/Layout/MNav'
export default {
  name: 'Content',
  components: {
    MNav
  }
}
</script>
