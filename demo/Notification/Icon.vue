<template>
  <div class="basic block">
    <Button type="primary" @click="open"> 创建一条带图标的通知 </Button>
  </div>
</template>
<script setup>
import { createNotification } from "maishine-ui";
import { Button } from "maishine-ui";
const open = () => {
  createNotification({
    title: "this is the title",
    message: "hello world",
    icon: "star",
  });
};
</script>
