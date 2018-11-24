<template>
  <div class="content"
       :class="{'is-loading': isloading}"
       style="width: 100%">
    <div class="card"
         v-for="blog in blogs"
         :key="blog.id">
      <div class="card-head">{{blog.title}}</div>
      <mavon-editor v-html="blog.body"
                    :ishljs='true'
                    :defaultOpen="defaultData" />
      <time>{{blog.created_at}}</time>
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
