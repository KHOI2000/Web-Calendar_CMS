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
        <q-breadcrumbs-el label="Sự kiện tết" />
        <q-breadcrumbs-el label="Vận hạn" />
      </q-breadcrumbs>
    </div>
    <div class="Save-btn">
      <q-btn
        label="Sửa"
        no-caps
        size="17px"
        color="primary"
        to="/user/tet_holiday_event/tu-vi-van-han/edit"
      ></q-btn>
    </div>
    <div class="separator"></div>
  </div>
  <div class="PageBody">
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Ngày/tháng/năm sinh</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          popup-content-class="text-h6"
          disable
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Giới tính</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="drt"
          popup-content-class="text-h6"
          disable
        />
      </div>
    </div>
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Công danh</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          popup-content-class="text-h6"
          disable
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Tiền bạc</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="drt"
          popup-content-class="text-h6"
          disable
        />
      </div>
    </div>
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Gia đạo</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          popup-content-class="text-h6"
          disable
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Tình cảm</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="drt"
          popup-content-class="text-h6"
          disable
        />
      </div>
    </div>
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Sực khoẻ</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          popup-content-class="text-h6"
          disable
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Xuất hành</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="drt"
          popup-content-class="text-h6"
          disable
        />
      </div>
    </div>
    <div class="q-my-xl">
      <div class="">
        <div class="text-h6">Tóm lại</div>
        <q-input
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          popup-content-class="text-h6"
          disable
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();

export default defineComponent({
  name: "TuViVanHanPage",
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
.PageBody {
  margin: 57px;
}
.Save-btn {
  position: absolute;
  top: 92px;
  right: 30px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.separator {
  border-bottom: 3px solid #e9eaec;
}
.q-input {
  background-color: #e9eaec;
}
</style>
