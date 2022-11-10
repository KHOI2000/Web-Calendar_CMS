<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <!-- <q-item
        class="q-ml-sm"
        style="
          font-weight: 400;
          font-size: 18px;
          font-family: 'Roboto';
          color: #6d767e;
        "
      >
        Hướng nhà
      </q-item> -->
      <div class="breadscrum q-ml-xl">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Hướng nhà" />
          <q-breadcrumbs-el label="Sửa" />
        </q-breadcrumbs>
      </div>
      <div class="vector"></div>

      <q-item>
        <q-btn no-caps class="bg-negative text-white q-mr-md">Lưu</q-btn>
      </q-item>
    </q-label>

    <q-list class="col">
      <q-item class="row q-col-gutter-x-sm q-ml-xl">
        <q-item-section class="col-5">
          <p>Hướng nhà</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            placeholder="Chính Tây Bắc"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-5">
          <p>Phương vị</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            placeholder="Càn"
          ></q-input>
        </q-item-section>
      </q-item>
      <q-item class="row q-col-gutter-x-sm q-ml-xl">
        <q-item-section class="col-5">
          <p>Độ số la bàn</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-5">
          <p>ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </q-container>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HuongNha",
});
</script>

<style scoped>
.breadscrum {
  font-size: 17px;
  top: 100px;
  background-color: white;
}
.vector {
  height: 1px;
  width: 72%;
  background-color: rgb(223, 215, 215);
}
</style>
