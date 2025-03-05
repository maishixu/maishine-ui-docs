<template>
  <div class="basic block">
    <Button @click="open"> 可关闭消息 </Button>
  </div>
</template>
<script setup>
import { createMessage } from "maishine-ui";
import { Button } from "maishine-ui";
const open = () => {
  createMessage({ message: "hello world", showClose: true, duration: 0 });
};
</script>
