<!-- image 组件 -->
<template>
  <div style="">
    <a :href="href"
       :target="target">
      <figure class="image"
              :class="wdClass">
        <img :class="{'is-rounded':'rounded'}"
             :src="src" />
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MImg',
  props: {
    href: {
      type: String,
      default: 'javascript:void(0);'
    },
    target: {},
    src: {},
    wdClass: {},
    rounded: {}
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
