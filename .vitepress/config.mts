import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fig 格式说明书",
  description: "对 fig 文件的详尽分析讲解",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '简介',
        link: '/introduction',
      },
      {
        text: '基本图形',
        items: [
          { text: '图形基本属性', link: '/graphics/basic' },
          { text: '矩形', link: '/graphics/rectangle' },
          { text: '椭圆', link: '/graphics/ellipse' },
          { text: '多边形', link: '/graphics/polygon' },
          { text: '星形', link: '/graphics/star' },
          { text: '矢量网格', link: '/graphics/vector' },
          { text: '文本', link: '/graphics/text' },
          { text: '箭头', link: '/graphics/arrow' },
          { text: '图片', link: '/graphics/image' },
        ]
      },
      {
        text: '容器类图形',
        items: [
          { text: '文档', link: '/graphics/document' },
          { text: '画布', link: '/graphics/canvas' },
        ]
      }
      // {
      //   text: '其他',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/F-star" }],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    footer: {
      message:
        '<a target="_blank" title="粤ICP备19093693号" href="https://beian.miit.gov.cn/">粤ICP备19093693号</a>',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 前端西瓜哥`,
    },
  }
})
