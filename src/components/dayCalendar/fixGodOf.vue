<template>
  <div class="col">
    <q-item class="row flex q-col-gutter-x-sm">
      <q-item-section class="col q-mb-md">
        <p>Sao tối</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập..." />
      </q-item-section>
      <q-item-section class="col q-mb-md">
        <p>Sao xấu</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập..." />
      </q-item-section>
    </q-item>

    <q-item class="row flex flex-center q-col-gutter-x-sm">
      <q-item-section class="col">
        <p>Chú thích</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.." />
      </q-item-section>
      <q-item-section class="col">
        <p>Trực</p>
        <q-input outlined class="q-mb-md" placeholder="Nhập.."></q-input>
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
