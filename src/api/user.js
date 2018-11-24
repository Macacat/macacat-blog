import request from '@/utils/request'
import store from '@/store'

export default {
  getUserInfo () {
    let gitHubUserName = store.state.configuration.gitHubUserName
    return request({
      url: '/users/' + gitHubUserName
    })
  }
}

/**
 *

 */
