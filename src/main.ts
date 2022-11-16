import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import ElementPlus from "element-plus" // 这里我们直接全量引入
import "element-plus/dist/index.css"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
// 全局css
import "@/styles/index.scss"

const app = createApp(App)

app.use(ElementPlus).use(router).use(createPinia()).mount("#app")
