import Vue from './instance/index'
//初始化全局API
import { initGlobalAPI } from './global-api/index'
//
import { isServerRendering } from 'core/util/env'

//执行初始化全局变量
initGlobalAPI(Vue)

//为vue原型定义$isServer
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Vue.version = '__VERSION__'

export default Vue
