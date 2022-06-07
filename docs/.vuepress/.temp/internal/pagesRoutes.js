import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"Hello Components"},["/components/index.html","/components/README.md"]],
  ["v-b959d088","/components/pages/Button.html",{"title":""},["/components/pages/Button","/components/pages/Button.md"]],
  ["v-5d612751","/components/pages/InputNumber.html",{"title":"Input 输入"},["/components/pages/InputNumber","/components/pages/InputNumber.md"]],
  ["v-08bf7b6d","/components/pages/Slider.html",{"title":"Hello Slider"},["/components/pages/Slider","/components/pages/Slider.md"]],
  ["v-7d85779a","/document/introduction/",{"title":"Hello Introduction"},["/document/introduction/index.html","/document/introduction/README.md"]],
  ["v-5851f53c","/document/tips/",{"title":"Hello Tips"},["/document/tips/index.html","/document/tips/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
