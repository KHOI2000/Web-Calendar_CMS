<template>
  <div class="col">
    <q-item class="row flex q-col-gutter-x-sm">
      <q-item-section class="col q-mb-md">
        <p>Giờ</p>
        <q-select outlined v-model="model1" :options="options1" />
      </q-item-section>
      <q-item-section class="col q-mb-md">
        <p>Hoàng/ Hắc đạo</p>
        <q-select outlined v-model="model2" :options="options2" />
      </q-item-section>
      <q-item-section class="">
        <p>Lục nhân</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
      <q-item-section class="col">
        <p>Qúy nhân</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.."></q-input>
      </q-item-section>
    </q-item>

    <q-item class="row flex flex-center q-col-gutter-x-sm">
      <q-item-section class="col">
        <p>Sát chủ</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
      <q-item-section class="col">
        <p>Thụ tử</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.."></q-input>
      </q-item-section>
      <q-item-section class="col">
        <p>Phi tinh giờ</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
      <q-item-section class="col">
        <p>Nguyệt tiên</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.."></q-input>
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "fixHourDetails",
  data() {
    return {
      model1: ref("Tý"),
      options1: ["Tý", "Sửu", " Dần", "Mão", "Thìn", "Tỵ", "Ngọ"],

      model2: ref("Hoàng đạo"),
      options2: ["Hoàng đạo", "Hắc đạo"],
    };
  },
};
</script>
<style></style>
