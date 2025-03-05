<template>
  <div class="basic block">
    <Dropdown
      placement="bottom"
      :menu-options="options"
      trigger="click"
      manual
      ref="dropdownRef"
    >
      <Button> 菜单容器 </Button>
    </Dropdown>
    <br /><br />
    <Button type="primary" @click="open"> 点击触发显示 </Button>
    <Button type="danger" @click="close"> 点击触发隐藏 </Button>
  </div>
</template>
<script setup>
import { h, ref } from "vue";
import { Dropdown } from "maishine-ui";
import { Button } from "maishine-ui";
const options = [
  { key: 1, label: "irem1" },
  { key: 2, label: "item2" },
  { key: 3, label: "item3" },
  { key: 4, label: "item4" },
];
const dropdownRef = ref();
const open = () => {
  dropdownRef.value?.show();
};
const close = () => {
  dropdownRef.value?.hide();
};
</script>
