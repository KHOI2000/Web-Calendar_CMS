<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <!-- <div
        class="q-ml-sm"
        style="
          font-weight: 400;
          font-size: 18px;
          font-family: 'Roboto';
          color: #6d767e;
        "
      >
        Hướng nhà
      </div> -->
      <div class="breadscrum q-ml-xl">
        <q-breadcrumbs>
          <q-breadcrumbs-el label=".../Xông đất" />
          <q-breadcrumbs-el label="Sửa" />
        </q-breadcrumbs>
      </div>
      <div class="vector"></div>

      <div>
        <q-btn no-caps class="bg-negative text-white q-mr-md">Lưu</q-btn>
      </div>
    </q-label>

    <div class="col q-mr-xl q-mt-md q-ml-xl">
      <div class="row q-col-gutter-x-sm " style="font-size: 18px;">
        <div class="col-6">
          <p>Chủ nhà</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            placeholder="Ất sửu"
            disable
          ></q-input>
        </div>
        <div class="col-6">
          <p>Khách</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            placeholder="Giáp tý"
            disable=""
          ></q-input>
        </div>
      </div>
      <p class="row text-h6">So sánh với Thái Tuế</p>
      <div class="row q-col-gutter-x-sm q-ml-md">
        <div class="col-3"></div>
        <div class="col-3">
          <p>Ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Điểm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Đánh giá</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
      </div>
      <p class="row text-h6">So sánh với Mệnh Chủ</p>
      <p class="row q-col-gutter-x-sm q-ml-xl">Địa chỉ</p>
      <div class="row q-col-gutter-x-sm q-ml-xl">
        <div class="col-3 q-pl-xl">Qúy nhân</div>
        <div class="col-3">
          <p>Ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Điểm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Đánh giá</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3 q-pl-xl">Lộc</div>
        <div class="col-3">
          <p>Ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Điểm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Đánh giá</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3 q-pl-xl">Mã</div>
        <div class="col-3">
          <p>Ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Điểm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3">
          <p>Đánh giá</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>

        <div class="col-3 q-px-xs q-mt-xl ">Thiên can</div>
        <div class="col-3 q-mt-xl">
          <p>Ý nghĩa</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3 q-mt-xl">
          <p>Điểm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
        <div class="col-3 q-mt-xl">
          <p>Đánh giá</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </div>
      </div>
    </div>
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
