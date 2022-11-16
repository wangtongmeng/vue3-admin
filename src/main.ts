import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import ElementPlus from "element-plus" // 这里我们直接全量引入
import "element-plus/dist/index.css"
const app = createApp(App)

app.use(ElementPlus).use(router).use(createPinia()).mount("#app")
