<template>
  <Input v-model="test1" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </Input>

  <Input v-model="test2" placeholder="prefix suffix">
    <template #prefix>
      <Icon icon="fa-user" />
    </template>
    <template #suffix>
      <Icon icon="fa-user" />
    </template>
  </Input>
</template>
<script setup>
import { ref } from "vue";
import { Input } from "maishine-ui";
import { Icon } from "maishine-ui";
const test1 = ref("");
const test2 = ref("");
</script>
