<template>
  <div class="basic block">
    <Dropdown placement="bottom" :menu-options="options">
      <Button type="primary"> Custom </Button>
    </Dropdown>
  </div>
</template>
<script setup>
import { Dropdown } from "maishine-ui";
import { Button } from "maishine-ui";
import { h } from "vue";

const options = [
  { key: 1, label: h("b", "this is bold item") },
  { key: 2, label: "item2" },
  { key: 3, label: "item3", divided: true },
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
