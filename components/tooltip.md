# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 1. 基础用法

使用 `content` 属性来决定 `hover` 时的提示信息。默认插槽用于显示你的按钮。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 2. 不同位置

使用 `placement` 属性决定展示的位置。`placement` 属性值为：[方向]-[对齐位置]；四个方向：`top、left、right、bottom`，默认为`bottom`；三种对齐位置：`start, end`，默认为空。

<preview path="../demo/Tooltip/Placement.vue" title="不同方向" description="Tooltip 组件的不同方向"></preview>

## 3. 触发方式

使用 `trigger` 属性来决定触发方式。属性值为 `hover | click`，默认值为 `hover` 。

<preview path="../demo/Tooltip/Click.vue" title="不同触发方式" description="Tooltip 组件的不同触发方式"></preview>

## 4. 更多文字提示

使用 `content` 插槽来显示多行文本或更复杂内容，你可以自定义显示的 HTML 结构，替代 `content` 属性。

<preview path="../demo/Tooltip/Custom.vue" title="不同触发方式" description="Tooltip 组件的不同触发方式"></preview>

## 5. 手动触发

添加 `manual` 属性，然后使用组件实例暴露出来的方法 `show` `hide` 在特定时机调用显示和隐藏。

<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="Tooltip 组件的手动触发"></preview>
以下是整理后的 API 表格，并将描述部分翻译成中文：

## 6. Tooltip API

### 6.1 属性

| 属性名         | 描述                                             | 类型                                                                                                                                                                 | 默认值 |
| -------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| content        | 显示的内容，可以通过 `slot#content` 覆盖         | `string`                                                                                                                                                             | —      |
| placement      | Tooltip 的位置                                   | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | bottom |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` 参考 [popper.js](https://popper.js.org/docs/v2/) 文档                                                                                                       | —      |
| open-delay     | Tooltip 显示的延迟时间，单位为毫秒               | `number`                                                                                                                                                             | 0      |
| close-delay    | Tooltip 隐藏的延迟时间，单位为毫秒               | `number`                                                                                                                                                             | 200    |
| trigger        | Tooltip 显示的触发方式                           | `hover' \| 'click'`                                                                                                                                                  | hover  |
| manual         | 是否开启手动触发模式                             | `boolean`                                                                                                                                                            | false  |
| transition     | 动画过渡的名称                                   | `string`                                                                                                                                                             | —      |

### 6.2 事件

| 事件名           | 描述                          | 类型      |
| ---------------- | ----------------------------- | --------- |
| `visible-change` | 当 Tooltip 显示或隐藏时触发   | `boolean` |
| `click-outside`  | 当点击 Tooltip 外部区域时触发 | `boolean` |

### 6.3 插槽

| 名称      | 描述                     |
| --------- | ------------------------ |
| `default` | Tooltip 触发和引用的元素 |
| `content` | 自定义 Tooltip 内容      |

### 6.4 Exposes

| 名称   | 描述                | 类型                                              |
| ------ | ------------------- | ------------------------------------------------- |
| `show` | 显示 Tooltip 的函数 | `Function`:`(event?: Event \| undefined) => void` |
| `hide` | 隐藏 Tooltip 的函数 | `Function`:`(event?: Event \| undefined) => void` |

这个表格整理后应该更易于理解，并且翻译了描述部分的内容。如果有其他问题或需要进一步的调整，欢迎随时提问！
