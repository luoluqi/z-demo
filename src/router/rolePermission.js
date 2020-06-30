import router from './index'
import whiteList from './whiteList'
import store from '../store'
import {decryptStr, isLogin} from '@/util/tool'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})
// 路由权限控制
var permissionList = []
function initRoute (routerParams) {
  return new Promise((resolve) => {
    store.dispatch('user/GetPermissionList').then((res) => {
      permissionList = res
      res.forEach(function (v) {
        let routeItem = routerParams.match(v.href)
        if (routeItem) {
          routeItem.meta.permission = v.permission ? v.permission : []
          routeItem.meta.label = v.label
        }
      })
      resolve()
    })
  })
}
// 路由生命周期
router.beforeEach((to, from, next) => {
  // console.log(to)
  NProgress.start()
  if (store.getters.token) {
    if (to.path == '/login') {
      next({path: '/index/home', replace: true})
    } else if (to.path.indexOf('error') >= 0) {
      next()
    } else {
      // console.log(1111)
      initRoute(router).then(res => {
        let isPermission = false
        let flag = true
        
        permissionList.forEach((v) => {
          if (v.href == to.path) {
            isPermission = true
          }
        })
       
        if (!isPermission) {
          if (to.query.p != undefined) {
            var arr = to.path.split('/')
            var len = arr.length
            var pathStr = decryptStr(to.query.p)
            var pathLast = arr[len - 1]
            if (pathStr == pathLast) {
              next()
            } else {
              flag = false
              next({ path: '/error/403', replace: true })
            }
          } else {
            flag = false
            next({path: '/error/403', replace: true})
          }    
        } else {
          next()
        }
        if (flag) {
          var params = {
            label: to.name,
            value: to.path,
            query: to.query
          }
          // 页面标签配置
          store.commit('common/ADD_TAG', params)
          // 页面缓存配置
          store.commit('common/KEEP_ALIVE', store.getters.keepAlivePage)
        }
      })
    }
  } else {
    if (whiteList.indexOf(to.path) >= 0) {
      next()
    } else {
      NProgress.done()
      next({
        path: '/login',
        replace: true
      })
    }  
  }
})
// 路由生命周期
router.afterEach((to, from) => {
  NProgress.done()
})
