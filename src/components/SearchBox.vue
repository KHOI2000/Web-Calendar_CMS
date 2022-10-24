<template>
  <div class="search-box bg-accent flex items-center" style="height: 50px">
    <q-input
      dark
      bg-color="accent"
      borderless
      input-class="text-black"
      dense
      class="text-h6 full-width"
      :placeholder="placeholder"
    >
      <template v-slot:prepend>
        <q-icon class="q-mx-md" name="search" color="gray" />
      </template>
    </q-input>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBox",
  props: {
    placeholder: {
      type: String,
      default: "Tim kiem bai viet...",
    },
  },
});
</script>

<style>
.search-box {
  width: 70%;
  height: 40px;
}
.text-gray {
  color: #6d767e;
}
.bg-input {
  background-color: #f4f5f5;
}
</style>
