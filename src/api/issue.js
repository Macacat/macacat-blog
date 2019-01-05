import request from '@/utils/request'
import store from '@/store'

export default {
  gitHubUserName: store.state.configuration.gitHubUserName,
  repository: store.state.configuration.repository,
  getIssues () {
    return request({
      url: '/repos/' + this.gitHubUserName + '/' + this.repository + '/issues'
    })
  },
  getSingleIssue (number) {
    return request({
      url: '/repos/' + this.gitHubUserName + '/' + this.repository + '/issues' + '/' + number
    })
  }
}
