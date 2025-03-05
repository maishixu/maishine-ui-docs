<template>
  <div class="basic block">
    <Dropdown placement="bottom" :menu-options="options">
      <Button type="primary"> Hover Me </Button>
    </Dropdown>
  </div>
</template>
<script setup>
import { Dropdown } from "maishine-ui";
import { Button } from "maishine-ui";

const options = [
  { key: 1, label: "item1" },
  { key: 2, label: "item2" },
  { key: 3, label: "item3" },
  { key: 4, label: "item4", disabled: true },
];
</script>

<style>
.vp-doc .vitepress-demo-preview-preview ul,
.vp-doc .vitepress-demo-preview-preview ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
