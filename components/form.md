---
title: Form | V-Element
description: Form 组件的文档
---

# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。
使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。

在每一个 form 组件中，你需要一个 form-item 字段作为输入项的容器，用于获取值与验证值。

<preview path="../demo/Form/Basic.vue" title="典型表单" description="Form 典型表单"></preview>

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 async-validator。

<preview path="../demo/Form/Validate.vue" title="表单校验" description="Form 表单校验"></preview>

## 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

<preview path="../demo/Form/Custom.vue" title="自定义校验规则" description="Form 自定义校验规则"></preview>

## Form API

### 属性

| 属性名 | 说明         | 类型                  | 默认值 |
| ------ | ------------ | --------------------- | ------ |
| model  | 表单数据对象 | `Record<string, any>` | ——     |
| rules  | 表单验证规则 | `FormRules`           | ——     |

> [!NOTE] FormRules 类型说明
>
> `FormRules : Record<string, FormItemRule[]>`\
> `FormItemRule : { trigger?:string, required?: boolean, ...}`\
> 具体的请查看类型文件，`maishine-ui/dist/components` 目录下为每个文件都提供了类型说明文件

### 插槽

| 插槽名  | 说明           | 子标签     |
| ------- | -------------- | ---------- |
| default | 自定义默认内容 | `FormItem` |

### Exposed

| 名称          | 说明                       | 类型       |
| ------------- | -------------------------- | ---------- |
| validate      | 对整个表单的内容进行验证   | `Function` |
| clearValidate | 清理表单的验证信息         | `Function` |
| resetFields   | 重置表单项，并清空验证信息 | `Function` |

## FormItem API

### 属性

| 属性名 | 说明                                   | 类型     |
| ------ | -------------------------------------- | -------- |
| prop   | `model` 的键值 使用验证/重置功能时必填 | `string` |
| label  | 标签文本                               | `string` |

### 插槽

| 插槽名  | 说明               | 类型     |
| ------- | ------------------ | -------- |
| default | 表单的内容         | `Object` |
| label   | 标签位置显示的内容 | `Object` |

### Exposed

| 名称          | 说明                     | 类型                       |
| ------------- | ------------------------ | -------------------------- |
| validate      | 验证某个表单项的规则     | `Function(trigger:string)` |
| clearValidate | 清空表单项的验证信息     | `Function`                 |
| resetFields   | 重置某个表单项并清空验证 | `Function`                 |
| validateState | 表单项当前的验证状态     | `Object`                   |
