---
title: Alert
description: Alert 组件的文档
---

# Alert 提示

用于页面中展示重要的提示信息。

> [!TIP] 何时使用
>
> 需要向用户显示重要的提示、警告、错误或成功信息。帮助用户了解当前系统的状态或操作结果。

## 基础用法

Alert 组件提供四种类型，由 `type` 属性指定，为 `success`| `warning` | `danger` | `info` , 默认值为 info。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 主题样式

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

通过设置 `effect` 属性来改变主题，默认为 light。

<preview path="../demo/Alert/Theme.vue" title="主题" description="Alert 组件的主题用法"></preview>

## 不可关闭

可以设置 Alert 组件是否为可关闭状态， `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。

<preview path="../demo/Alert/Close.vue" title="不可关闭" description="Alert 组件的不可关闭用法"></preview>

## Alert 属性

| Name     | Description  | Type                                                  | Default |
| -------- | ------------ | ----------------------------------------------------- | ------- |
| title    | Alert 标题   | `string`                                              | —       |
| type     | Alert 类型   | `enum` - `'success'\|'warning' \| 'danger' \| 'info'` | —       |
| effect   | 主题样式     | `enum` - `'light'\| 'dark'`                           | `light` |
| closable | 是否可以关闭 | `boolean`                                             | `true`  |
