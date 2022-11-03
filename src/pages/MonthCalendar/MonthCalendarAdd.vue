<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>
  <div class="q-ma-xl">
    <div class="breadscrum">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Lịch tháng" />toggle button
        <q-breadcrumbs-el label="Thêm sự kiện" />
      </q-breadcrumbs>
    </div>
    <div class="Save-btn">
      <q-btn
        label="Lưu"
        no-caps
        size="17px"
        color="negative"
        @click="Save"
      ></q-btn>
    </div>
    <div class="separator"></div>
  </div>
  <div class="PageBody">
    <div class="row q-my-md">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Ngày diễn ra</div>
        <q-input outlined="" v-model="date" class="text-h6">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Tên sự kiện</div>
        <q-input
          outlined
          class="text-h6"
          v-model="name"
          placeholder="Nhập tiêu đề..."
        />
      </div>
    </div>
    <div class="row q-my-md">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Thứ</div>
        <q-select
          behavior="menu"
          outlined
          class="text-h6"
          v-model="day_in_week"
          :options="day_options"
          popup-content-class="text-h6"
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">thời gian</div>
        <q-select
          behavior="menu"
          outlined
          class="text-h6"
          v-model="time_period"
          :options="time_options"
          popup-content-class="text-h6"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onBeforeMount, ref } from "vue";
const day_option = [
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
  "Chủ nhật",
];
const time_options = ["Cả ngày", "Nửa ngày", "Một tiếng", "Hai tiếng", "Khác"];

export default defineComponent({
  name: "MonthCalendar",
  setup() {
    return {
      date: ref(""),
      name: ref(""),
      day_in_week: ref(""),
      day_option,
      time_period: ref(""),
      time_options,
    };
  },
  methods: {
    Save() {},
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
.Save-btn {
  position: absolute;
  top: 92px;
  right: 30px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.PageBody {
  margin: 57px;
}
</style>
