import request from '@/utils/request'
import store from '@/store'

export default {
  getIssues () {
    let gitHubUserName = store.state.configuration.gitHubUserName
    let repository = store.state.configuration.repository
    return request({
      url: '/repos/' + gitHubUserName + '/' + repository + '/issues'
    })
  }
}
