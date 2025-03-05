<template>
  <div class="basic block">
    <Dropdown placement="bottom" :menu-options="options" trigger="click">
      <Button type="primary"> Click Me </Button>
    </Dropdown>
  </div>
</template>
<script setup>
import { h } from "vue";
import { Dropdown } from "maishine-ui";
import { Button } from "maishine-ui";
const options = [
  { key: 1, label: "item1" },
  { key: 2, label: "item2" },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4", disabled: true },
];
</script>
