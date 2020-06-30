const getters = {
    token: state => state.user.token,
    role: state => state.user.role,
    userInfo: state => state.user.userInfo,
    menu: state => state.user.menu,
    isCollapse: state => state.common.isCollapse,
    tagCurrent: state => state.common.tag,
    tagList: state => state.common.tagList,
    isFullScreen: state => state.common.isFullScreen,
    keepAlive: state => state.common.keepAlive,
    keepAlivePage: state => state.common.keepAlivePage,
    keepAlivePath: state => state.common.keepAlivePath,
    cookieStart: state => state.common.cookieStart,
    cookiesObj: state => state.common.cookiesObj,
    realName (state) {
      var name = state.common.cookiesObj.realName
      try {
        name = decodeURI(name)
      } catch (error) {
        name = unescape(name)
      }
      return name
    }
}
export default getters
