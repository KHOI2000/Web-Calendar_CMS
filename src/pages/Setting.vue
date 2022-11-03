<template>
  <h3>This is Setting Page</h3>
</template>
<script>
import { defineComponent } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();
export default defineComponent({
  name: "SettingPage",
  created() {
    const Path = window.location.hash;
    for (var i of PageStore.pagesList) {
      if (Path.indexOf(i.direct) != -1) {
        i.active = true;
      } else i.active = false;
    }
  },
});
</script>
