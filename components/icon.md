# Icon 图标

Maishine-UI 基于 FontAwesome 二次开发了一款图标组件，并扩展了图标的功能，如主题，自定图标颜色等。

> [!IMPORTANT] 小贴士
>
> Maishine-UI 已经在组件库中集成了 `svg-core` 和图标库，做到开箱即用，所以你不用再另外安装。\
> 图标名称请看 fontawesome 官网 [https://fontawesome.com/icons](https://fontawesome.com/icons)

## 1. 基本使用

<preview path="../demo/Icon/Basic.vue" title="Icon 基本使用" description="Icon 基本使用"></preview>

## 2. 扩展样式

FontaAwsome 天生能和 Vue 很好的配合，你可以通过给组件中传入一系列的属性来扩展图标的样式或状态。

更多的属性你可以参考 [https://docs.fontawesome.com/web/use-with/vue/style](https://docs.fontawesome.com/web/use-with/vue/style)

<preview path="../demo/Icon/Extend.vue" title="Icon 其他属性" description="Icon 其他属性"></preview>

## 3. 自定义颜色

如果主题颜色还不能满足你的需求，你还可以传入 `color` 属性，更加灵活的自定义你的样式。

<preview path="../demo/Icon/Custom.vue" title="Icon 自定义颜色" description="Icon 自定义颜色"></preview>

## 4. Icon 属性

| 属性名 | 说明     | 类型                                                     | 默认值 |
| ------ | -------- | -------------------------------------------------------- | ------ |
| type   | 主题     | `primary` \| `success` \| `waring` \| `danger` \| `info` | —      |
| color  | 图标颜色 | `string`                                                 | —      |
