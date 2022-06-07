import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("InputNumber", defineAsyncComponent(() => import("E:/open-source/git/ui-vuepress2.0/docs/.vuepress/components/InputNumber.vue")))
}
