<template>
  <q-card class="q-pa-none q-mt-md" style="width: 96%;margin-left: 29px">
    <q-table
      :rows="rows"
      :columns="columns"
      table-header-class="bg-primary text-white "
      row-key="index"
      :rows-per-page-options="[12]"
    >
      <template v-slot:body-cell-Action="props">
        <q-td :props="props">
          <q-btn icon="edit" size="sm" flat dense />
          <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense />
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>
<script>
const columns = [
  {
    name: "name",
    required: true,
    align: "left",
    field: (row) => row.name,
  },
  { name: "Giờ", align: "left", label: "Giờ", field: "Giờ" },
  { name: "Hoàng/ hắc đạo",align:"left", label: "Hoàng/ hắc đạo", field: "Hoàng/ hắc đạo" },
  { name: "Lục nhân",align:"left", label: "Lục nhân", field: "Lục nhân" },
  { name: "Qúy nhân",align:"left", label: "Qúy nhân", field: "Qúy nhân" },
  { name: "Sát chủ",align:"left", label: "Sát chủ", field: "Sát chủ" },
  { name: "Thụ tứ",align:"left", label: "Thụ tứ", field: "Thụ tứ" },
  { name: "Phi tinh giờ",align:"left", label: "Phi tinh giờ", field: "Phi tinh giờ" },
  { name: "Nguyệt tiên",align:"left", label: "Nguyệt tiên", field: "Nguyệt tiên" },
  { name: "Action",align:"center", label: "Thao tác", field: "Action" },
];

const data = [
  {
    name: "Tý",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Sửu",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Dần",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Mão",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Thìn",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Tỵ",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Ngọ",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Mùi",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Thân",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Dậu",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Tuất",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
  {
    name: "Hợi",
    Giờ: "Giờ",
    "Hoàng/ hắc đạo": "Hoàng đạo",
    "Lục nhân": "Qúy nhân",
    "Qúy nhân": "lục nhân",
    "Sát chủ": "Mã",
    "Thụ tứ": "Thiên can",
    "Phi tinh giờ": "Thiên can",
    "Nguyệt tiên": "Kết quả",
  },
];
let rows = [];
for (let i = 0; i < data.length; i++) {
  rows = data;
}
rows.forEach((row, index) => {
  row.index = index + 1;
});

export default {
  data() {
    return {
      columns,
      rows,
    };
  },
};
</script>
<style></style>




