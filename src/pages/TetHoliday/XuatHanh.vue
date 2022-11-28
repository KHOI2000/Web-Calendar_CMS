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
          <q-breadcrumbs-el label="Sự kiện tết" />
          <q-breadcrumbs-el label="Xuất hành" />
        </q-breadcrumbs>
      </div>
      <div class="vector"></div>

      <!-- <div>
        <q-btn no-caps class="bg-negative text-white q-mr-md">Lưu</q-btn>
      </div> -->
    </q-label>

    <q-card style="margin: 20px 66px 0 48px">
      <q-card-section class="q-pa-none">
        <q-table
          :rows="rows"
          :columns="columns"
          table-header-class="bg-primary text-white "
          row-key="index"
          :rows-per-page-options="[8]"
        >
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit_note" size="20px" flat dense to="xuat-hanh/edit_xuathanh" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

  </q-container>
</template>
<script>
import { defineComponent } from "vue";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();
const data = [
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    giotot: "Dần, Thìn, Thân, Tỵ",

  },
  {
    dile: "Tốt",
    xuathanh: "Xấu",
    mohang: "Bình thường",
    Giotot: "Dần, Thìn, Thân, Tỵ",

  },

];

const columns = [
  {
    name: "Index",
    field: "index",
    label: "Mùng",
    sortable: false,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "dile",
    label: "Đi lễ",
    field: "dile",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "xuathanh",
    label: "Xuất hành",
    field: "xuathanh",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "mohang",
    label: "Mở hàng",
    field: "mohang",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "giotot",
    label: "Giờ tốt",
    field: "giotot",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },

  {
    name: "Action",
    label: "Thao tác",
    field: "Action",
    sortable: false,
    align: "center",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
];

let rows = [];
for(let i = 0; i < data.length; i++) {
  rows = data;
}

rows.forEach((row, index) => {
  row.index = index
})


export default defineComponent({
  name: "XuatHanhPage",
  data(){
    return {
      rows,
      columns

    }
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
  font-size: 17px;
  top: 100px;
  background-color: white;
}
.vector {
  height: 1px;
  width: 74%;
  background-color: rgb(223, 215, 215);
  margin-right: 4%;
}
</style>
