<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton
        label="Thêm sự kiện"
        to="/user/event/event-list/add"
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
    <div>
      <div class="calendarType">
        <q-btn-toggle
          v-model="model"
          no-caps
          size="17px"
          toggle-color="primary"
          :options="[
            { label: 'Sự kiện DL', value: 'DL' },
            { label: 'Sự kiện ÂL', value: 'AL' },
          ]"
        ></q-btn-toggle>
      </div>
    </div>
    <div class="separator"></div>
  </div>
  <EventListTableJuliusVue v-show="this.model == 'DL'" />
  <EventListTableLunarVue v-show="this.model == 'AL'" />
</template>
<script>
import { defineComponent, ref } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import EventListTableJuliusVue from "src/components/EventList/EventListTable.julius.vue";
import EventListTableLunarVue from "src/components/EventList/EventListTable.lunar.vue";
export default defineComponent({
  setup() {
    return {
      model: ref("DL"),
    };
  },
  components: {
    AddButton,
    SearchBox,
    EventListTableJuliusVue,
    EventListTableLunarVue,
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
.calendarType {
  position: absolute;
  top: 92px;
  right: 30px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.separator {
  border-bottom: 3px solid #e9eaec;
}
</style>
