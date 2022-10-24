<template>
  <q-btn no-caps class="bg-primary">
    <q-icon name="add" />
    <span>{{ label }}</span>
  </q-btn>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddButton",
  props: {
    label: {
      type: String,
      default: "Them bai viet",
    },
  },
});
</script>
