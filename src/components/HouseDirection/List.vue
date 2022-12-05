<template>
  <div>
    <q-card style="margin: 0 64px 0 46px">
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
              <q-btn
                icon="edit_note"
                size="18px"
                flat
                dense
                style="margin-left: 12px"
                to="/user/house_direction/edit"
              />
              <q-btn
                icon="delete_outline"
                size="18px"
                class="q-ml-sm"
                flat
                dense
              />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const data = [
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
  {
    name: "Chính Tây Bắc",
    dosolaban: "292.5-307.4",
    phuongvi: "Càn",
    ynghia: "Hơi tốt",
  },
];

const columns = [
  {
    name: "index",
    label: "STT",
    field: "index",
    sortable: false,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px; width: 120px",
  },
  {
    name: "Name",
    label: "Hướng nhà",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "width: 30%px; font-size:17px;",
  },
  {
    name: "phuongvi",
    label: "Phương vị",
    field: "phuongvi",
    sortable: true,
    align: "left",

    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "dosolaban",
    label: "Độ số la bàn",
    field: "dosolaban",
    sortable: true,
    align: "left",

    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "ynghia",
    label: "ý nghĩa",
    field: "ynghia",
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
rows.forEach((row, index) => {
  row.index = index + 1;
});

export default defineComponent({
  name: "TableActions",
  setup() {
    return {
      rows,
      columns,
    };
  },
});
</script>

<style scoped></style>
