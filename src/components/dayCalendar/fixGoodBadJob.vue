<template>
  <div class="col">
    <q-item class="row q-col-gutter-x-sm">
      <q-item-section class="col">
        <p>Tình cảm</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập..." />
      </q-item-section>
      <q-item-section class="col">
        <p>Công</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập..." />
      </q-item-section>
    </q-item>

    <q-item class="row q-col-gutter-x-sm">
      <q-item-section class="col">
        <p>Tài lộc</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
      <q-item-section class="col">
        <p>Sức khỏe</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.."></q-input>
      </q-item-section>
    </q-item>

    <q-item class="row q-mr-md">
      <q-item-section class="col-6">
        <p>Lời khuyên</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
export default {
  name: "fixHourDetails",
  data() {
    return {};
  },
};
</script>
<style></style>
