<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建一条通知 </Button>
    <Button @click="open2"> 创建支持 VNode 的通知 </Button>
  </div>
</template>
<script setup>
import { h } from "vue";
import { createNotification } from "maishine-ui";
import { Button } from "maishine-ui";
const open = () => {
  createNotification({ title: "this is the title", message: "hello world" });
};
const open2 = () => {
  createNotification({
    title: "this is the title",
    message: h("b", "this is bold"),
  });
};
</script>
