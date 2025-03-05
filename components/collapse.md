---
title: Collapse
description: Collapse 组件的文档
---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 1. 基础用法

可同时展开多个面板，面板之间不影响。

你可以在组件中通过 `v-model `绑定一个展开面板值的数组，可以维护正在展开的面板。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 2. 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="Collapse 组件的手风琴效果用法"></preview>

## 3. 禁用面板

你可以通过给 `CollapseItem` 传入 `disabled` 来禁用某个面板

<preview path="../demo/Collapse/Disabled.vue" title="禁用面板" description="Collapse 组件的禁用面板用法"></preview>

## 4. 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标或改变字体等效果

<preview path="../demo/Collapse/Custom.vue" title="自定义面板" description="Collapse 组件的自定义标题用法"></preview>

## 5. Collapse API

### 5.1 Collapse 属性

| 属性名                | 说明         | 类型                                   | 默认值  |
| --------------------- | ------------ | -------------------------------------- | ------- |
| model-value / v-model | 当前活动面板 | `array` (默认) / `string` (手风琴模式) | —       |
| accordion             | 手风琴模式   | `boolean`                              | `false` |

### 5.2 Collapse 事件

| 事件名 | 说明                   | 参数                                       |
| ------ | ---------------------- | ------------------------------------------ |
| change | 切换当前活动面板时触发 | `activeNames`: `array` / `string` (手风琴) |

### 5.3 Collapse 插槽

| 插槽名  | 说明           | 子标签        |
| ------- | -------------- | ------------- |
| default | 自定义默认内容 | Collapse Item |

## 6. Collapse Item API

### 6.1 Collapse Item 属性

| 属性名   | 说明       | 类型                | 默认值  |
| -------- | ---------- | ------------------- | ------- |
| name     | 唯一标识符 | `string` / `number` | —       |
| title    | 面板标题   | `string`            | —       |
| disabled | 是否禁用   | boolean             | `false` |

### 5.2 Collapse Item 插槽

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | Collapse Item 的内容 |
| title   | Collapse Item 的标题 |
