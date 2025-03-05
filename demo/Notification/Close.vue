<template>
  <div class="basic block">
    <Button @click="open"> 可关闭通知 </Button>
  </div>
</template>
<script setup>
import { createNotification } from "maishine-ui";
import { Button } from "maishine-ui";
const open = () => {
  createNotification({
    title: "this is the title",
    content: "hello world",
    showClose: true,
    duration: 0,
  });
};
</script>
