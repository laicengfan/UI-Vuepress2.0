export const data = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "Hello Components",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1653884299000,
    "contributors": [
      {
        "name": "二农戏猪",
        "email": "395027535@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
