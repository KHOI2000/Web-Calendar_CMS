<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton
        label="Thêm sự kiện"
        to="month_calendar/add_month_calendar"
      ></AddButton>
      <SearchBox
        style="margin-right: 15%; margin-left: 45px"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <div class="q-ma-xl">
    <div class="breadscrum">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Sự kiện" />toggle button
        <q-breadcrumbs-el label="Danh sách sự kiện" />
      </q-breadcrumbs>
    </div>
    <div class="separator"></div>
  </div>
  <MonthCalendarTable />
</template>
<script>
import { defineComponent, onBeforeMount } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import { usePagesStore } from "src/stores/pages";
import MonthCalendarTable from "components/MonthCalendarTable.vue";
const PageStore = usePagesStore();
export default defineComponent({
  name: "MonthCalendar",
  components: {
    AddButton,
    SearchBox,
    MonthCalendarTable,
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    const Path = window.location.hash;
    for (var i of PageStore.pagesList) {
      if (Path.indexOf(i.direct) != -1) {
        i.active = true;
      } else i.active = false;
    }
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
});
</script>
<style scoped>
.breadscrum {
  position: absolute;
  font-size: 17px;
  top: 100px;
  left: 268px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.separator {
  border-bottom: 3px solid #e9eaec;
}
</style>
