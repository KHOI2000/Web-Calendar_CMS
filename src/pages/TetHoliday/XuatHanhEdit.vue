<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <div class="breadscrum q-ml-xl">
        <q-breadcrumbs>
          <q-breadcrumbs-el label=".../Xuất hành" />
          <q-breadcrumbs-el label="Sửa" />
        </q-breadcrumbs>
      </div>
      <div class="vector"></div>
      <div>
        <q-btn no-caps class="bg-negative text-white q-mr-xl">Lưu</q-btn>
      </div>
    </q-label>

    <q-list class="q-px-xl q-mt-xl">
      <div class="row q-col-gutter-x-md">
        <div class="col-3">
          <div>Mùng</div>
          <q-select
            class="q-mt-sm"
            behavior="menu"
            outlined
            v-model="day"
            :options="dayOptions"
          />
        </div>
        <div class="col-3">
          <div>Đi lễ</div>
          <q-select
            class="q-mt-sm"
            behavior="menu"
            outlined
            v-model="dl"
            :options="dlOption"
          />
        </div>

        <div class="col-3">
          <div>Xuất hành</div>
          <q-select
            class="q-mt-sm"
            behavior="menu"
            outlined
            v-model="xuathanh"
            :options="xhOption"
          />
        </div>

        <div class="col-3">
          <div>Mở hàng</div>
          <q-select
            class="q-mt-sm"
            behavior="menu"
            outlined
            v-model="mh"
            :options="mhOption"
          />
        </div>
      </div>
    </q-list>

    <q-list class="q-mt-xl">
      <div class="q-ml-xl">Giờ tốt</div>

      <div>
        <q-item class="q-ml-xl">
          <q-item-section class="col-3">
            <q-checkbox v-model="ty" label="Tý (23h - 1h)"></q-checkbox>
            <q-checkbox v-model="suu" label="Sửu (1h - 3h)"></q-checkbox>
            <q-checkbox v-model="dan" label="Dần (3h - 5h)"></q-checkbox>
          </q-item-section>

          <q-item-section class="col-3">
            <q-checkbox v-model="mao" val="" label="Mão (5h - 7h)"></q-checkbox>
            <q-checkbox v-model="thin" label="thìn (7h - 9h)"></q-checkbox>
            <q-checkbox v-model="tyy" label="Tỵ (9h - 11h)"></q-checkbox>
          </q-item-section>

          <q-item-section class="col-3">
            <q-checkbox v-model="ngo" label="Ngọ (11h - 13h)"></q-checkbox>
            <q-checkbox v-model="mui" label="Mùi (13h - 15h)"></q-checkbox>
            <q-checkbox v-model="than" label="Thân (15h - 17h)"></q-checkbox>
          </q-item-section>

          <q-item-section class="col-3">
            <q-checkbox v-model="dau" label="Dậu (17h - 19h)"></q-checkbox>
            <q-checkbox v-model="tuat" label="Tuất (19h - 21h)"></q-checkbox>
            <q-checkbox v-model="hoi" label="Hợi (21h - 23h)"></q-checkbox>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-container>
</template>
<script>
import { ref } from 'vue';
export default {
  data(){
    const dayOptions = [1,2,3,4,5,6];
    const dlOption = ['Tốt', 'Xấu'];
    const xhOption = ['Xấu', 'Tốt'];
    const mhOption = ['Bình thường', 'Không bình thường']
    return {
      day: ref('1'),
      dl: ref('Tốt'),
      xuathanh: ref('Xấu'),
      mh: ref('Bình thường'),
      dayOptions,
      dlOption,
      xhOption,
      mhOption,
      ty: ref('')

    }
  }
};
</script>
<style scoped>
.breadscrum {
  font-size: 17px;
  top: 100px;
  background-color: white;
}
.vector {
  height: 1px;
  width: 68%;
  background-color: rgb(223, 215, 215);
}
</style>
