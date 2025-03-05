import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/maishine-ui-docs/",
  title: "Maishine-UI",
  description: "Maishine-UI组件库的说明文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "安装", link: "/get-start" },
      { text: "组件", link: "/components/alert" },
    ],

    sidebar: [
      {
        text: "组件列表",
        items: [
          { text: "Alert 警告", link: "/components/alert" },
          { text: "Button 按钮", link: "/components/button" },
          { text: "Collapse 折叠面板", link: "/components/collapse" },
          { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
          { text: "Form 表单", link: "/components/form" },
          { text: "Icon 图标", link: "/components/icon" },
          { text: "Input 输入框", link: "/components/input" },
          { text: "Message 消息", link: "/components/message" },
          { text: "Notification 提示", link: "/components/notification" },
          { text: "Select 选择器", link: "/components/select" },
          { text: "Switch 开关", link: "/components/switch" },
          { text: "Tooltip 提示", link: "/components/tooltip" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
