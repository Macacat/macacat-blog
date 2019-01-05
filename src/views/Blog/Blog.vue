<template>
  <div class="content"
       :class="{'is-loading': isloading}"
       style="width: 100%">
    <div class="card blog-item"
         v-for="blog in blogs"
         :key="blog.id">
      <router-link :to="{path: 'details/' + blog.number}">
        <div class="card-head">{{blog.title}}</div>
      </router-link>
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
            <a class="tag button is-rounded is-outlined"
              :style="{'color': '#' + label.color, 'border-color': '#'+label.color}"
              v-for="label in blog.labels"
              :key="label.id"
              href="javascript:void(0)">
              <!-- <b-tag class="is-outlined"
                    :style="{'color': '#' + label.color}"
                    rounded>{{label.name}} </b-tag> -->
              {{label.name}}
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
        console.log('blogs:', response.data)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .blog-item{
    margin: 10px 0px;
    padding: 10px 0px;
  }
  .tag {
    padding: 0.5rem;
  }
</style>
