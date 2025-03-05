<template>
  <div>
    <Tooltip>
      <Button> Custom Tip </Button>
      <template #content>
        <h2>This is Custom Tip</h2>
        <div>hello my tooltip</div>
      </template>
    </Tooltip>
  </div>
</template>
<script setup>
import { Tooltip } from "maishine-ui";
import { Button } from "maishine-ui";
</script>
