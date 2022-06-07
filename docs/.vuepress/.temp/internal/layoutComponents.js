import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/open-source/git/ui-vuepress2.0/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/open-source/git/ui-vuepress2.0/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
