<template>
  <q-card style="margin: 0 57px 0 57px">
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
            <q-btn icon="edit" size="sm" flat dense />
            <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense />
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

const data = [
  {
    name: "Giỗ tổ Hùng Vương",
    Crated_Date: "10/3/2022",
  },
  {
    name: "Giỗ tổ Hùng Vương",
    Crated_Date: "10/3/2022",
  },
  {
    name: "Giỗ tổ Hùng Vương",
    Crated_Date: "10/3/2022",
  },
];

const columns = [
  {
    name: "index",
    label: "STT",
    field: "index",
    sortable: false,
    align: "left",
    headerStyle: "font-size: 15px",
    style: "width: 120px",
  },
  {
    name: "Name",
    label: "Tên sự kiện",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
    align: "left",
    headerStyle: "font-size: 15px",
    style: "width: 30%px",
  },
  {
    name: "Crated Date",
    label: "Ngày",
    field: "Crated_Date",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 15px",
  },
  {
    name: "Action",
    label: "Thao tác",
    field: "Action",
    sortable: false,
    align: "center",
    headerStyle: "font-size: 15px",
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
