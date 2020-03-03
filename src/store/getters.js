const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,

  openPage: state => state.tagsView.openPage,
  cachedPage: state => state.tagsView.cachePage,
  tagsLength: state => state.tagsView.openPage.length

}
export default getters
