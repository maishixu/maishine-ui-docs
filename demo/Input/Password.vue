<template>
  <Input v-model="test" placeholder="密码文本框，可以切换状态" showPassword />
</template>
<script setup>
import { ref } from "vue";
import { Input } from "maishine-ui";
const test = ref("");
</script>
