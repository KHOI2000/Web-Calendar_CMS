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
        <q-breadcrumbs-el label="Sửa" />
      </q-breadcrumbs>
    </div>
    <div class="Save-btn">
      <q-btn
        label="Lưu"
        no-caps
        size="17px"
        color="negative"
        to="/user/tet_holiday_event/phong_thuy"
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
      <div class="text-h6">Nội dung</div>
      <q-editor
        v-model="qeditor"
        height="429px"
        :dense="$q.screen.lt.md"
        :toolbar="[
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify'],
            },
          ],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['token', 'hr', 'link', 'custom_btn'],
          ['print', 'fullscreen'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
            },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7',
              ],
            },
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana',
              ],
            },
            'removeFormat',
          ],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

          ['undo', 'redo'],
          ['viewsource'],
        ]"
        :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana',
        }"
      />
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
