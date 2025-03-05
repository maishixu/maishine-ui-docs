<template>
  <div class="icon-display">
    <Icon icon="edit" type="primary"></Icon>
    <Icon icon="fa-magnifying-glass"></Icon>
    <Icon icon="trash" type="danger"></Icon>
    <Icon icon="copy" type="info"></Icon>
  </div>
</template>

<script setup>
import { Icon } from "maishine-ui";
</script>

<style>
.icon-display * {
  margin: 0 5px;
}
</style>
