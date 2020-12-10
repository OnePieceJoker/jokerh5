import type { App } from 'vue'
import { Button, Layout, Menu, Tooltip, Tabs } from 'ant-design-vue'

const ant = {
  install (Vue: App) {
    // eslint-disable-next-line no-unused-expressions
    Vue.component(Button.name, Button)
    Vue.component(Tooltip.name, Tooltip)
    // 使用了`use`后，无需给layout的附属重新注册
    // Automatically register components under Button, such as Button.Group
    Vue.use(Layout)
    Vue.use(Menu)
    Vue.use(Tabs)
  }
}

export default ant
