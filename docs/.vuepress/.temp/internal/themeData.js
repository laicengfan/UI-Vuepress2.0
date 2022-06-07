export const themeData = {
  "logo": "/img/logo.png",
  "navbar": [
    {
      "text": "组件",
      "link": "/components/"
    },
    {
      "text": "文档",
      "children": [
        {
          "text": "介绍",
          "link": "/document/introduction/"
        },
        {
          "text": "注意事项",
          "link": "/document/tips/"
        }
      ]
    },
    {
      "text": "工具箱",
      "children": [
        {
          "text": "在线编辑",
          "children": [
            {
              "text": "图片压缩",
              "link": "https://tinypng.com/"
            }
          ]
        },
        {
          "text": "在线服务",
          "children": [
            {
              "text": "阿里云",
              "link": "https://www.aliyun.com/"
            },
            {
              "text": "腾讯云",
              "link": "https://cloud.tencent.com/"
            }
          ]
        },
        {
          "text": "博客指南",
          "children": [
            {
              "text": "掘金",
              "link": "https://juejin.im/"
            },
            {
              "text": "CSDN",
              "link": "https://blog.csdn.net/"
            }
          ]
        }
      ]
    }
  ],
  "sidebar": {
    "/components/": [
      {
        "text": "通用",
        "collapsable": true,
        "children": [
          {
            "text": "Button 按钮",
            "link": "/components/pages/Button"
          }
        ]
      },
      {
        "text": "数据录入",
        "collapsable": true,
        "children": [
          {
            "text": "Slider 滑动组件",
            "link": "/components/pages/Slider"
          }
        ]
      },
      {
        "text": "数字输入框",
        "collapsable": true,
        "children": [
          {
            "text": "InputNumber 数字输入框",
            "link": "/components/pages/InputNumber"
          }
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
