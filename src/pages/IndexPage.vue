<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>
  <q-page class="flex flex-center bg-accent">
    <h1>Home page</h1>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();
export default defineComponent({
  name: "IndexPage",
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
