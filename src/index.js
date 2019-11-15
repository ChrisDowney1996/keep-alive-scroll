import {KeepAliveScroll} from '../packages/keep-alive-scroll/index.js';

const components = [
  KeepAliveScroll
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
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
