<template>
  <div class="col">
    <q-item class="q-ml-md">
      <q-item-section class="col-6">
        <p>Sao tốt</p>
        <q-input
          outlined
          class="bg-grey-4 q-mr-md"
          v-model="text"
          placeholder="Nhập.."
        ></q-input>
      </q-item-section>
      <q-item-section class="col-6">
        <p>Sao xấu</p>
        <q-input
          outlined
          class="bg-grey-4 q-mr-md"
          v-model="text"
          placeholder="Nhập.."
        ></q-input>
      </q-item-section>
    </q-item>

    <q-item class="q-ml-md q-mt-md ">
      <q-item-section class="col-6">
        <p>Chú thích </p>
        <q-input
          outlined
          class="bg-grey-4 q-mr-md"
          v-model="text"
          placeholder="Nhập.."
        ></q-input>
      </q-item-section>
      <q-item-section class="col-6">
        <p>Trực</p>
        <q-input
          outlined
          class="bg-grey-4 q-mr-md"
          v-model="text"
          placeholder="Nhập.."
        ></q-input>
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
