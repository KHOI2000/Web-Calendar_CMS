<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm sự kiện"></AddButton>
      <SearchBox
        style="margin-right: 10%"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <h3>This is MonthCalendar Page</h3>
</template>
<script>
import { defineComponent } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";

export default defineComponent({
  name: "MonthCalendar",
  components: {
    AddButton,
    SearchBox,
  },
});
</script>
