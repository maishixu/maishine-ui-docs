## 安装

```bash
npm i maishine-ui --save
```

## 开始使用

#### 全局使用

```js
// 引入所有组件
import MaishineUI from "maishine-ui";
// 引入样式
import "maishine-ui/dist/style.css";

import App from "./App.vue";
// 全局使用
createApp(App).use(MaishineUI).mount("#app");
```

```vue
<template>
  <mx-button>我是 Button</mx-button>
</template>
```

---

#### 单个导入（推荐）

**Maishine-UI** 提供了基于 ES Module 的开箱即用的 `Tree Shaking` 功能。你可以根据需要的组件按需导入，而不用全局安装所有组件，这样在项目打包的时候可以减轻资源文件的体积，提高性加载速度。

```vue
<template>
  <Button>我是 Button</Button>
</template>
<script>
import { Button } from "maishine-ui";
export default {
  components: { Button },
};
</script>
```
