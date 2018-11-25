<template>
  <div class="content"
       :class="{'is-loading': isloading}"
       style="width: 100%">
    <div class="card"
         v-for="blog in blogs"
         :key="blog.id">
      <div class="card-head">{{blog.title}}</div>
      <!-- <mavon-editor v-html="blog.body"
                    :defaultOpen="defaultData" /> -->
      <div>
        <!-- <span class="tag is-primary"
              v-for="(label, index) in blog.labels"
              :key="index">
          <a href="javascript:void(0);">{{label.name}}</a>
        </span> -->
        <b-taglist>
          <time>{{blog.created_at}}</time>
          <a v-for="label in blog.labels"
             :key="label.id"
             href="javascript:void(0)">
            <b-tag :style="{'backgroundColor': '#' + label.color}"
                   rounded>{{label.name}} </b-tag>
          </a>
        </b-taglist>
      </div>
    </div>
  </div>
</template>

<script>
import IssueApi from '@/api/issue'
export default {
  name: 'Blog',
  data () {
    return {
      isloading: true,
      defaultData: 'preview',
      blogs: []
    }
  },
  mounted () {
    this.getBlogs()
    this.isloading = false
  },
  methods: {
    getBlogs () {
      IssueApi.getIssues().then(response => {
        this.blogs = response.data
        console.log(response)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
