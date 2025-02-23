---
title: Button
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="Button 组件的基础用法"></preview>

## Button 属性

| Name        | Description           | Type                                                             | Default |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------- |
| size        | 按钮尺寸              | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 按钮主题              | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 朴素类型              | `boolean`                                                        | false   |
| round       | 圆角按钮              | `boolean`                                                        | false   |
| circle      | 圆形按钮              | `boolean`                                                        | false   |
| loading     | 加载状态              | `boolean`                                                        | false   |
| disabled    | 禁用状态              | `boolean`                                                        | false   |
| icon        | 图标组件              | `string`                                                         | —       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                        | false   |
| native-type | 原生 `type` 属性      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |
