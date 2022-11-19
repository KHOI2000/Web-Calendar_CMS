<template>
  <div class="col">
    <q-list class="col q-gutte-xs">
      <q-item class="row flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm">Thông tin ngày</q-item-label>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Ngày âm/ dương</p>
          <!-- <q-input outlined class=" q-mb-md" v-model="text"></q-input> -->
          <q-input outlined="" v-model="date" class="q-mb-md">
            <template v-slot:append>
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
        </q-item-section>
        <q-item-section class="col-3">
          <p>Can chi giờ</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Can chi ngày</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Can chi tháng</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Can chi năm</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Tiết khí</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-3">
          <p>Hoàng/ Hắc đạo</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Trực sao</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Mặt trời mọc</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-3">
          <p>Mặt trời lặn</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Lên đỉnh</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="col">
      <q-item class="row q-ml-xs flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm">Đánh giá</q-item-label>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Xuất hành, chuyển chỗ, nhận việc</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
        <q-item-section class="col-3">
          <p>Xây dựng, động thổ, sửa chữa</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Hôn thú cưới hỏi</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Giao dịch, khai trương, ký kết</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
        <q-item-section class="col-3">
          <p>Mai táng, sửa mộ, chuyển mộ</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Tế tự, cầu phúc, tranh chấp</p>
          <q-input outlined class="q-mb-md" placeholder="-10"></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="col">
      <q-item class="row flex items-center">
        <div class="line"></div>
        <q-item-label class="q-ml-sm"
          >Giờ tốt, hướng xuất hành, tuổi xung</q-item-label
        >
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3">
          <p>Giờ tốt</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-3">
          <p>Tuổi xung</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>

      <q-item class="row q-col-gutter-x-sm">
        <q-item-section class="col-3 q-mb-md">
          <p>Hướng xuất hành/ Hạc thần</p>
          <q-select outlined v-model="model3" :options="options3" />
        </q-item-section>
        <q-item-section class="col-3">
          <p>Giờ tốt</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <p>Tuổi xung</p>
          <q-input outlined class="q-mb-md" placeholder="Nhập..."></q-input>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      text: ref("Abcd"),
      date: ref(""),
      model3: ref("Tây Nam"),
      options3: ["Tây Nam", "Đông Nam", "Tây Bắc"],
    };
  },
};
</script>
<style scoped>
.line {
  width: 4px;
  height: 34px;
  background-color: #1d4c90;
}
</style>
