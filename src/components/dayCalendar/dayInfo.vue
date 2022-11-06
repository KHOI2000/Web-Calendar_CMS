<template>
  <div class="col">
    <q-list class="col">
      <q-item class="row q-ml-md flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm">Thông tin ngày</q-item-label>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Ngày âm/ dương</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Can chi giờ</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Can chi ngày</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 ">
          <p>Can chi tháng</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md "
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Can chi năm</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Tiết khí</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Hoàng/ Hắc đạo</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 q-mr-md">
          <p>Trực sao</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Mặt trời mọc</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Mặt trời lặn</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 q-mr-md">
          <p>Lên đỉnh</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="col">
      <q-item class="row q-ml-md flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm">Đánh giá</q-item-label>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Xuất hành, chuyển chỗ, nhận việc</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Xây dựng, động thổ, sửa chữa</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 q-mr-md">
          <p>Hôn thú cưới hỏi</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Giao dịch, khai trương, ký kết</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Mai táng, sửa mộ, chuyển mộ</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 q-mr-md">
          <p>Tế tự, cầu phúc, tranh chấp</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="col">
      <q-item class="row q-ml-md flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm"
          >Giờ tốt, hướng xuất hành, tuổi xung</q-item-label
        >
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Giờ tốt</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Tuổi xung</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>

      <q-item class="q-ml-md">
        <q-item-section class="col-3 q-mr-md">
          <p>Hướng xuất hành/ Hỷ thần</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-3 q-mr-md">
          <p>Hướng xuất hành/ Tài thần</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
        <q-item-section class="col-2 q-mr-md">
          <p>Hướng xuất hành/ Hạc thần</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  data(){
    return{
      text: ref('Abcd')
    }
  }

}
</script>
<style scoped>
.line {
  width: 4px;
  height: 34px;
  background-color: #1d4c90;
}
</style>
