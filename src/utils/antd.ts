import type { App } from 'vue'
import { Button, Layout } from 'ant-design-vue'

const ant = {
  install (Vue: App) {
    // eslint-disable-next-line no-unused-expressions
    // 不能用component，没什么效果
    // Vue.component(Button.NAME, Button)
    // Vue.component(Layout.NAME, Layout)
    // Vue.component(Layout.Header.name, Layout.Header)
    // Vue.component(Layout.Sider.name, Layout.Sider)
    // Vue.component(Layout.Content.name, Layout.Content)
    // Vue.component(Layout.Footer.name, Layout.Footer)
    // 需要使用use
    // 使用了`use`后，无需给layout的附属重新注册
    // Automatically register components under Button, such as Button.Group
    Vue.use(Button)
    Vue.use(Layout)
  }
}

export default ant
