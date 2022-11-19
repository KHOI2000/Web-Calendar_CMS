<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <div class="breadscrum q-ml-xl">
        <q-breadcrumbs>
          <q-breadcrumbs-el label=".../Xông đất" />
          <q-breadcrumbs-el label="Sửa" />
        </q-breadcrumbs>
      </div>
      <div class="vector"></div>

      <div>
        <q-btn no-caps class="bg-negative text-white q-mr-md">Lưu</q-btn>
      </div>
    </q-label>

  </q-container>
</template>
<script>
import { defineComponent } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();

export default defineComponent({
  name: "XuatHanhPage",
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

<style scoped>
.breadscrum {
  font-size: 17px;
  top: 100px;
  background-color: white;
}
.vector {
  height: 1px;
  width: 72%;
  background-color: rgb(223, 215, 215);
}
</style>
