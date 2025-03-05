<template>
  <div class="basic block">
    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Collapse Title A">
        <b>Collapse Content bold A</b>
        <div>Collapse Content A</div>
      </CollapseItem>
      <CollapseItem name="b" title="Collapse Title B">
        <span>Collapse Content B</span>
      </CollapseItem>
      <CollapseItem name="c" title="Collapse Title C" disabled>
        <span>Collapse Content C</span>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Collapse } from "maishine-ui";
import { CollapseItem } from "maishine-ui";
const openedValue = ref([""]);
</script>
