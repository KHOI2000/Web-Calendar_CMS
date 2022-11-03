<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm cảnh báo"></AddButton>
      <SearchBox
        style="margin-right: 15%; margin-left: 45px"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <div class="q-ma-xl">
    <div class="breadscrum">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Sự kiện" />
        <q-breadcrumbs-el label="Danh sách  cảnh báo " />
      </q-breadcrumbs>
    </div>

    <div class="separator"></div>
  </div>
  <q-toggle
    label="Cả ngày"
    style="margin-left: 60px; font-size: 22px"
    size="50px"
    left-label
    v-model="isAllDay"
  />
  <div v-for="item in List" :key="item">
    <WarningItem :="item" v-if="item.allDay == this.isAllDay"></WarningItem>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import WarningItem from "src/components/WarningItem.vue";
import { useWarningStore } from "src/stores/warning.store";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();

export default defineComponent({
  name: "WarningListPage",
  setup() {
    const store = useWarningStore();
    store.update();
    const List = computed(() => store.warningList);
    return {
      isAllDay: ref(false),
      List,
    };
  },
  components: {
    AddButton,
    WarningItem,
    SearchBox,
  },
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
  position: absolute;
  font-size: 17px;
  top: 100px;
  left: 267px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.separator {
  border-bottom: 3px solid #e9eaec;
}
</style>
