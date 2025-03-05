<template>
  <div class="basic block">
    <Tooltip content="hello tooltip" placement="top-start">
      <Button> top-start </Button>
    </Tooltip>

    <Tooltip content="hello tooltip" placement="bottom-start">
      <Button> bottom-start </Button>
    </Tooltip>

    <Tooltip content="hello tooltip" placement="left-start">
      <Button> left-start </Button>
    </Tooltip>

    <Tooltip content="hello tooltip" placement="right-start">
      <Button> right-start </Button>
    </Tooltip>
  </div>
</template>
<script setup>
import { Tooltip } from "maishine-ui";
import { Button } from "maishine-ui";
</script>
<style scoped>
.mx-button {
  margin-right: 35px;
}
</style>
