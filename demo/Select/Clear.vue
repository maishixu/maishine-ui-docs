<template>
  <Select
    v-model="test"
    placeholder="可清空选择器，请选择"
    :options="options"
    clearable
  ></Select>
</template>
<script setup>
import { ref } from "vue";
import { Select } from "maishine-ui";
const test = ref("1");
const options = [
  { label: "Option1", value: "1" },
  { label: "Option2", value: "2" },
  { label: "Option3", value: "3" },
  { label: "Option4", value: "4", disabled: true },
];
</script>
