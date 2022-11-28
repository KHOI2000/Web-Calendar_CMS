<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm thành viên" @click="add = !add"></AddButton>
      <SearchBox
        style="margin-right: 5%; margin-left: 45px"
        placeholder="Tìm kiếm thành viên..."
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <div class="q-ma-xl">
    <div class="breadscrum">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Thành viên" />
      </q-breadcrumbs>
    </div>

    <div class="separator"></div>
  </div>
  <MembershipTable />
  <q-dialog v-model="add">
    <q-card class="text-white card">
      <q-card-section class="q-pa-sm card-header">
        Thêm thành viên 
      </q-card-section>
      <q-card-section class="popupBody">
        <div class="row flex items-center">
          <div class="col-4">
            Tên đăng nhập
            <span class="text-red">*</span>
          </div>

          <div class="col-8">
            <q-input
              placeholder="Nhập..."
              outlined
              style="width: 100%"
              v-model="newLoginName"
            />
          </div>
        </div>
        <div class="row flex items-center q-my-sm">
          <div class="col-4">Họ tên</div>
          <div class="col-8">
            <q-input
              placeholder="Nhập..."
              outlined
              style="width: 100%"
              v-model="newName"
            />
          </div>
        </div>

        <div class="row flex items-center">
          <div class="col-4">
            Chức danh
            <span class="text-red">*</span>
          </div>

          <div class="col-8">
            <q-select
              :options="position"
              outlined
              style="width: 100%"
              v-model="newPosition"
            />
          </div>
        </div>
        <div class="row flex items-top q-mt-md">
          <div class="col-4">Quyền hạn</div>
          <div class="col-8">
            <div class="row">
              <div class="col-6">
                <q-checkbox label="Sự kiện tết" v-model="permission.tet_read" />
                <div class="q-pl-lg">
                  <q-checkbox label="Đọc" v-model="permission.tet_read" />
                  <q-checkbox
                    label="Ghi(thêm, sửa, xoá)"
                    v-model="permission.tet_modify"
                  />
                </div>
              </div>
              <div class="col-6">
                <q-checkbox
                  label="Lịch tháng"
                  v-model="permission.calendar_read"
                />
                <div class="q-pl-lg">
                  <q-checkbox label="Đọc" v-model="permission.calendar_read" />
                  <q-checkbox
                    label="Ghi(thêm, sửa, xoá)"
                    v-model="permission.calendar_modify"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <q-checkbox
                  label="Bài viết"
                  v-model="permission.article_read"
                />
                <div class="q-pl-lg">
                  <q-checkbox label="Đọc" v-model="permission.article_read" />
                  <q-checkbox
                    label="Ghi(thêm, sửa, xoá)"
                    v-model="permission.article_modify"
                  />
                </div>
              </div>
              <div class="col-6">
                <q-checkbox label="Sự kiện" v-model="permission.event_read" />
                <div class="q-pl-lg">
                  <q-checkbox label="Đọc" v-model="permission.event_read" />
                  <q-checkbox
                    label="Ghi(thêm, sửa, xoá)"
                    v-model="permission.event_modify"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex items-center q-my-sm">
          <div class="col-4">
            Mật khẩu
            <span class="text-red">*</span>
          </div>
          <div class="col-8">
            <q-input
              placeholder="Nhập..."
              type="password"
              outlined
              style="width: 100%"
              v-model="newPassword"
            />
          </div>
        </div>
        <div class="row flex items-center q-my-sm">
          <div class="col-4">
            Xác nhận mật khẩu
            <span class="text-red">*</span>
          </div>
          <div class="col-8">
            <q-input
              placeholder="Nhập..."
              type="password"
              outlined
              style="width: 100%"
              v-model="confirmPassword"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat class="bg-accent" label="Huỷ" v-close-popup />
        <q-btn flat class="bg-negative" label="Lưu" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import { usePagesStore } from "src/stores/pages";
import MembershipTable from "components/Membership/table.vue";

const PageStore = usePagesStore();

const data = [
  {
    Login_Name: "ABC",
    Name: "Nguyễn Văn A",
    Position: "Admin",
  },
  {
    Login_Name: "ABC1",
    Name: "Nguyễn Văn B",
    Position: "Member",
  },
  {
    Login_Name: "ABC2",
    Name: "Nguyễn Văn C",
    Position: "Member",
  },
];

const columns = [
  {
    name: "Index",
    label: "STT",
    field: "index",
    sortable: false,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Login Name",
    label: "Tên đăng nhập",
    field: "Login_Name",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Name",
    label: "Họ tên",
    field: "Name",
    sortable: true,
    align: "left",
    headerStyle: "font-size: 17px",
    style: "font-size: 17px",
  },
  {
    name: "Position",
    label: "Chức vụ",
    field: "Position",
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
  name: "MembershipPage",
  setup() {
    const position = ["Admin", "Member"];
    return {
      position,
      add: ref(false),
      permission: ref({
        article_read: ref(false),
        tet_read: ref(false),
        event_read: ref(false),
        calendar_read: ref(false),
        article_modify: ref(false),
        tet_modify: ref(false),
        event_modify: ref(false),
        calendar_modify: ref(false),
      }),
      newName: ref(""),
      newLoginName: ref(""),
      newPosition: ref("Member"),
      newPassword: ref(""),
      confirmPassword: ref(""),
    };
  },
  components: {
    AddButton,
    SearchBox,
    MembershipTable,
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
.separator {
  border-bottom: 3px solid #e9eaec;
}
.card-header {
  background-color: rgba(164, 176, 207, 0.19);
  color: #a7adb2;
}
.popupBody {
  color: black;
  padding: 28px;
}
.card {
  width: 680px;
  height: 739px;
}
</style>
