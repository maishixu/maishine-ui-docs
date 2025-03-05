<template>
  <div class="manual-tooltip">
    <Tooltip content="hello tooltip" placement="right" manual ref="tooltipRef">
      <Button>Manual Tip</Button>
    </Tooltip>
    <br />
    <Button @click="tooltipRef.show()"> 点击触发显示 </Button>
    <Button @click="tooltipRef.hide()"> 点击触发隐藏 </Button>
  </div>
</template>
<script setup>
import { Tooltip } from "maishine-ui";
import { Button } from "maishine-ui";
import { ref } from "vue";

const tooltipRef = ref();
</script>
<style>
.mx-tooltip {
  margin-bottom: 20px;
}
</style>
