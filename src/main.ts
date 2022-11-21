import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
import "normalize.css/normalize.css"
import "@/styles/index.scss"
import initSvgIcon from "@/icons/index"
import "virtual:svg-icons-register"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// 注册element-plus
import installElementPlus from "./plugins/element"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
// 安装element-plus插件
app.use(installElementPlus)
app.use(router)
app.use(initSvgIcon)
app.mount("#app")
