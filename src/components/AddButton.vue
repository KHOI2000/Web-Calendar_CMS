<template>
  <q-btn no-caps class="bg-primary" style="width: 190px; height: 50px" :to="to">
    <div class="q-gutter-x-sm " >
      <q-icon name="add" style="margin-bottom: 2px;" />
      <span style="font-size: 15px">{{ label }}</span>
    </div>
  </q-btn>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddButton",
  props: {
    label: {
      type: String,
      default: "Thêm bài viết ",
    },
    to: {
      type: String,
    },
  },
});
</script>
