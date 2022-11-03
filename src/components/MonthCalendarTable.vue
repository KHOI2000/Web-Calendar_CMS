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
    name: "Ngày rằm",
    Start_Date: "10/10/2022",
    Day_In_Week: "-",
    Time_Period: "Cả ngày",
  },
  {
    name: "Ngày mùng 1",
    Start_Date: "25/10/2022",
    Day_In_Week: "-",
    Time_Period: "Cả ngày",
  },
  {
    name: "Ngày rằm",
    Start_Date: "08/11/2022",
    Day_In_Week: "-",
    Time_Period: "Cả ngày",
  },
];

const columns = [
  {
    name: "Start Date",
    label: "Ngày",
    field: "Start_Date",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Name",
    label: "Tên sự kiện",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Day In Week",
    label: "Thứ",
    field: "Day_In_Week",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Time Period",
    label: "Thời gian",
    field: "Time_Period",
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
  name: "MonthCalendarTable",
  setup() {
    return {
      rows,
      columns,
    };
  },
});
</script>

<style scoped></style>
