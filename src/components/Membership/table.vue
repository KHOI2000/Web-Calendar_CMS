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
            <q-btn icon="edit" size="sm" flat dense @click="_edit(props)" />
            <q-btn
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              dense
              @click="_delete(props)"
            />
            <q-btn
              icon="lock"
              size="sm"
              class="q-ml-sm"
              flat
              dense
              @click="_changePassword(props)"
            />
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>

  <!-- Popup Edit Dialog -->
  <q-dialog v-model="edit">
    <q-card class="text-white card">
      <q-card-section class="q-pa-sm card-header">
        Thông tin thành viên
      </q-card-section>
      <q-card-section class="popupBody">
        <div class="row flex items-center">
          <div class="col-4">Họ tên</div>
          <div class="col-8">
            <q-input outlined style="width: 100%" v-model="editName" />
          </div>
        </div>
        <div class="row flex items-center q-my-sm">
          <div class="col-4">Tên đăng nhập</div>
          <div class="col-8">
            <q-input outlined style="width: 100%" v-model="editLoginName" />
          </div>
        </div>
        <div class="row flex items-center">
          <div class="col-4">Chức danh</div>
          <div class="col-8">
            <q-select
              :options="position"
              outlined
              style="width: 100%"
              v-model="editPosition"
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
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat class="bg-accent" label="Huỷ" v-close-popup />
        <q-btn flat class="bg-negative" label="Lưu" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- Popup Change Pasword dialog -->
  <q-dialog v-model="channgPw">
    <q-card class="text-white card">
      <q-card-section class="q-pa-sm card-header">
        Thông tin thành viên
      </q-card-section>
      <q-card-section class="popupBody">
        <div class="row flex items-center">
          <div class="col-4">Họ tên</div>
          <div class="col-8">
            <q-input outlined style="width: 100%" v-model="editName" />
          </div>
        </div>
        <div class="row flex items-center q-my-sm">
          <div class="col-4">Tên đăng nhập</div>
          <div class="col-8">
            <q-input outlined style="width: 100%" v-model="editLoginName" />
          </div>
        </div>
        <div class="row flex items-center">
          <div class="col-4">Chức danh</div>
          <div class="col-8">
            <q-select
              :options="position"
              outlined
              style="width: 100%"
              v-model="editPosition"
            />
          </div>
        </div>
        <div class="text-h5 text-primary q-my-md">Thay đổi mật khẩu</div>
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
              v-model="editPassword"
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
  name: "MembershipTable",
  setup() {
    const position = ["Admin", "Member"];
    return {
      position,
      rows,
      columns,
      edit: ref(false),
      channgPw: ref(false),
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
      editName: ref(""),
      editLoginName: ref(""),
      editPosition: ref(""),
      editPassword: ref(""),
      confirmPassword: ref(""),
    };
  },
  methods: {
    _delete(props) {
      //console.log(props.row.Name);
    },
    _edit(props) {
      this.edit = true;
      this.editName = props.row.Name;
      this.editLoginName = props.row.Login_Name;
      this.editPosition = props.row.Position;
    },
    _changePassword(props) {
      this.channgPw = true;
      this.editName = props.row.Name;
      this.editLoginName = props.row.Login_Name;
      this.editPosition = props.row.Position;
    },
  },
});
</script>

<style scoped>
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
  height: 589px;
}
</style>
