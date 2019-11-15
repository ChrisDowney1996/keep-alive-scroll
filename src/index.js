import KeepAliveScroll from '../packages/keep-alive-scroll/index.js'

const install = function(Vue, opts = {}) {
  Vue.component(KeepAliveScroll.name, KeepAliveScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  KeepAliveScroll
}
