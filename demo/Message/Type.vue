<template>
  <div class="basic block">
    <Button @click="open('success')"> Success </Button>
    <Button @click="open('info')"> Info </Button>
    <Button @click="open('warning')"> warning </Button>
    <Button @click="open('danger')"> Danger </Button>
  </div>
</template>
<script setup>
import { createMessage } from "maishine-ui";
import { Button } from "maishine-ui";
const open = (type) => {
  createMessage({ message: "hello world", type });
};
</script>
