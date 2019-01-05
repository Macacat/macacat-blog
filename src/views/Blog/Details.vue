<template>
  <div>
    <mavon-editor
      :value="blog.body"
      codeStyle="tomorrow-night-blue"
      :subfield="false"
      defaultOpen="preview"
      :toolbarsFlag="false"
      :boxShadow="true"
      :scrollStyle="true"
      :navigation="false" />
  </div>
</template>

<script>
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
import IssueApi from '@/api/issue'
export default {
  name: 'Details',
  // components: {
  //   'mavon-editor': mavonEditor.mavonEditor
  // },
  data () {
    return {
      blog: {
        body: '### hello World!'
      }
    }
  },
  mounted () {
    this.getBlogDetails()
  },
  methods: {
    getBlogDetails () {
      let number = this.$route.params.id
      IssueApi.getSingleIssue(number).then(reponse => {
        this.blog = reponse.data
        console.log(reponse)
      })
    }
  }
}
</script>
