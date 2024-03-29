export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  // title: '桐庐垃圾分类',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 7,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
      // dev: 'http://localhost:54321/',
      //  pro: 'http://localhost:54321/',
    // dev: 'http://192.168.0.221:4401/',
    // pro: 'http://192.168.0.221:4401/',
    // dev: 'http://192.168.0.226:6030/',
    // pro: 'http://192.168.0.226:6030/',
    dev: 'https://ljfl.hztlcgj.com/',
     pro: 'https://ljfl.hztlcgj.com/',
    defaultPrefix:"api/v1/"
  },
  authUrl: {
      //  dev: 'http://localhost:54321/api/oauth/auth',
      // pro: 'http://localhost:54321/api/oauth/auth',
  //   dev: 'http://192.168.0.221:4401/api/oauth/auth',
  // pro: 'http://192.168.0.221:4401/api/oauth/auth',
  //   dev: 'http://192.168.0.226:6030/api/oauth/auth',
  // pro: 'http://192.168.0.226:6030/api/oauth/auth',
        dev: 'https://ljfl.hztlcgj.com/api/oauth/auth',
      pro: 'https://ljfl.hztlcgj.com/api/oauth/auth'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 需要加载的插件
   */
  plugin: {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
