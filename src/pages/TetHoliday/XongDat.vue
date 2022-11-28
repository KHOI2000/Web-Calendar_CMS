<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm cảnh báo"></AddButton>
      <SearchBox
        style="margin-right: 20%; margin-left: 5px"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <div class="q-mt-xl" style="margin-left: 12px">
    <q-list>
      <q-item class="row flex flex-center q-col-gutter-x-sm">
        <q-item-section class="col-5 q-ml-md q-pl-lg">
          <p>Chủ nhà</p>
          <q-select outlined v-model="model" :options="options" />
        </q-item-section>

        <q-item-section class="col-4">
          <p>Khách</p>
          <q-select outlined v-model="model1" :options="options1" />
        </q-item-section>
        <q-item-section class="col">
          <q-btn
            no-caps
            class="bg-primary text-white q-py-md q-mx-xl"
            style="margin-top: 34px"
            label="Lọc kết quả"
          >
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>

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
              <q-btn icon="edit_note" size="18px" flat dense style="margin-left: 10px;" />
              <q-btn icon="delete_outline" size="18px" class="q-ml-sm" flat dense />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </div>
  <qPagination class="q-mt-xl" />
</template>
<script>
import { defineComponent, ref } from "vue";
import SearchBox from "components/SearchBox.vue";
import { usePagesStore } from "src/stores/pages";
import qPagination from "src/components/qPagination.vue";

const PageStore = usePagesStore();

const data = [
  {
    index: "Ý Nghĩa",
    thaitue: "Không xung..",
    address: "Không xung..",
    quynhan: "Dương quý..",
    loc: "-",
    ma: "-",
    thiencan: "Quan",
    result: "Bình thường",
  },
  {
    index: "Điểm",
    thaitue: "0",
    address: "0",
    quynhan: "1",
    loc: "0",
    ma: "0",
    thiencan: "2",
    result: "Bình thường",
  },
  {
    index: "Đánh giá",
    thaitue: "Có thể tạm..",
    address: "Có thể tạm..",
    quynhan: "-",
    loc: "-",
    ma: "-",
    thiencan: "Lợi cho công",
    result: "Bình thường",
  },
];

const columns = [
  {
    name: "Index",
    field: "index",
    sortable: false,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "thaitue",
    label: "Thái tuế",
    field: "thaitue",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "address",
    label: "Địa chỉ",
    field: "address",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "quynhan",
    label: "Qúy nhân",
    field: "quynhan",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "loc",
    label: "Lộc",
    field: "loc",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "ma",
    label: "Mã",
    field: "ma",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },

  {
    name: "thiencan",
    label: "Thiên can",
    field: "thiencan",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "result",
    label: "Kết quả",
    field: "result",
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
for (let i = 0; i < data.length; i++) {
  rows = data;
}
export default defineComponent({
  components: {
    SearchBox,
    qPagination,
  },
  setup() {
    return {
      model1: ref("Ất sửu"),
      options1: ref(["Ất sửu", "Giáp tý"]),
      model: ref("Giáp tý"),
      options: ref(["Giáp tý", "Ất sửu"]),
      rows,
      columns,
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
  left: 268px;
  background-color: white;
  padding: 0 30px 0 30px;
}
.vector {
  height: 1px;
  width: 88%;
  background-color: rgb(223, 215, 215);
  margin-right: 20px;
}

.separator {
  border-bottom: 3px solid #e9eaec;
}
</style>
