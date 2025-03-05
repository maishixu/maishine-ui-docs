<template>
  <Input v-model="test" placeholder="请输入..." type="textarea"> </Input>
</template>
<script setup>
import { ref } from "vue";
import { Input } from "maishine-ui";
const test = ref("");
</script>