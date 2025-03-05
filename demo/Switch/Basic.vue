<template>
  <Switch v-model="test" />
</template>
<script setup>
import { ref } from "vue";
import { Switch } from "maishine-ui";
const test = ref(false);
</script>
