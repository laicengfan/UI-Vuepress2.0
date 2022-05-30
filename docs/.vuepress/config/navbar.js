module.exports = [{
    text: '组件',
    link: '/components/'
  },
  {
    text: '文档',
    children: [{
        text: '介绍',
        link: '/document/introduction/'
      },
      {
        text: '注意事项',
        link: '/document/tips/'
      },
    ]
  },
  {
    text: '工具箱',
    children: [{
        text: '在线编辑',
        children: [{
          text: '图片压缩',
          link: 'https://tinypng.com/'
        }]
      },
      {
        text: '在线服务',
        children: [{
            text: '阿里云',
            link: 'https://www.aliyun.com/'
          },
          {
            text: '腾讯云',
            link: 'https://cloud.tencent.com/'
          }
        ]
      },
      {
        text: '博客指南',
        children: [{
            text: '掘金',
            link: 'https://juejin.im/'
          },
          {
            text: 'CSDN',
            link: 'https://blog.csdn.net/'
          }
        ]
      }
    ]
  }
]