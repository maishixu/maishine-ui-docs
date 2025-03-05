<template>
  <Input v-model="test" disabled />
</template>
<script setup>
import { ref } from "vue";
import { Input } from "maishine-ui";
const test = ref("Disable input text");
</script>
