<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建一条消息 </Button>
    <Button @click="open2"> 创建支持 VNode 的消息 </Button>
  </div>
</template>
<script setup>
import { h } from "vue";
import { createMessage } from "maishine-ui";
import { Button } from "maishine-ui";
const open = () => {
  createMessage({ message: "hello world" });
};
const open2 = () => {
  createMessage({ message: h("b", "this is bold") });
};
</script>
