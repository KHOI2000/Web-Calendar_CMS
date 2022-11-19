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
        <q-breadcrumbs-el label="Phong thuỷ" />
      </q-breadcrumbs>
    </div>
    <div class="Save-btn">
      <q-btn
        label="Sửa"
        no-caps
        size="17px"
        color="primary"
        to="/user/tet_holiday_event/phong_thuy/edit"
      ></q-btn>
    </div>
    <div class="separator"></div>
  </div>
  <div class="PageBody">
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Năm sinh</div>
        <q-select
          behavior="menu"
          outlined
          class="text-h6"
          v-model="yob"
          :options="yobOptions"
          popup-content-class="text-h6"
        />
      </div>
      <div class="col-6 q-pl-md">
        <div class="text-h6">Hướng</div>
        <q-select
          behavior="menu"
          outlined
          class="text-h6"
          v-model="drt"
          :options="drtOption"
          popup-content-class="text-h6"
        />
      </div>
    </div>
    <div class="row q-my-xl">
      <div class="col-6 q-pr-md">
        <div class="text-h6">Bát bạch</div>
        <q-input
          placeholder="Nhập tiêu đề "
          class="text-h6"
          full-width
          outlined
          v-model="batBach"
        />
      </div>
    </div>
    <div>
      <div class="text-h6">Luận giải</div>
      <q-card flat bordered style="background-color: #e9eaec; height: 500px">
        <q-card-section style="font-size: 18px">
          {{ contain }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();

export default defineComponent({
  setup() {
    const yobOptions = ["1999", "2000", "2001"];
    const drtOption = ["Chính", "Phụ"];

    return {
      yob: ref(""),
      drt: ref(""),
      batBach: ref(""),
      yobOptions,
      drtOption,
      qeditor: ref(""),
      contain: "Sao Tứ Lục màu xanh, ở vị trí cung Tốn (Đông Nam) trong Hậu thiên bát quái, thuộc hành Mộc kèm Thủy khí. Là phong trong mộc, là chỗ ở của sao Văn Khúc nên còn gọi là Văn Khúc tinh. Lúc đương vượng thì thăng quan tiến chức, thi cử đỗ đạt. Nếu bị khắc sát thì cẩn thận việc sinh đẻ, dâm bôn, vì ăn chơi sa ngã mà dẫn đến mang bệnh tật, phá bại. Mỗi năm phá tài nhiều nhất vào những tháng 1, tháng 2, tháng 10 và 11. Năm nay Tứ Lục - Văn Khúc Tinh đến phương trung cung, hành Mộc của sao tương khắc với hành thổ ở trung cung và Bát bạch của vận tám vậy nên suy mà khắc nên hung nhiều hơn cát. Gia đình bất lợi về công danh sự nghiệp, khó thăng quan tiến chức, Các bệnh dễ gặp phải như phong thấp, bệnh da liễu, …. Xét tổng thể Tứ Lục vừa có tính cát, vừa có tính hung, nên tuỳ thuộc và từng hướng toạ cụ thể của công trình mà tính chất tốt xấu cũng sẽ tương đối khác khác nhau.. Gợi ý hóa giải: Năm nay Tinh - Cung tương khắc (Mộc -Thổ). Có thể bày ở vị trí này các đồ vật phong thủy thuộc hành hoả và tĩnh để hoá giải như: Đèn lồng đỏ, thảm đỏ, cầu, trụ thạnh anh đỏ, tím, v.v… khiến cho hành Mộc của sao Tứ Lục không tương khắc với hành thổ trung cung mà sinh cho hoả, mà hoả lại sinh cho ngũ hành thổ ở trung cung từ đó mà bớt đi tác hoạ. Khu vực này năm nay ưa tĩnh không ưa động, không phù hợp với thuỷ, nên lưu ý các đồ dùng, vật dụng chứa đựng nhiều nước không sắp xếp ở khu vực này."

    };
  },
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
</style>
