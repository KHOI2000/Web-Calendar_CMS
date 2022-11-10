<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <SearchBox
        style="margin-right: 15%; margin-left: 45px"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <q-item
        class="q-ml-sm"
        style="
          font-weight: 400;
          font-size: 18px;
          font-family: 'Roboto';
          color: #6d767e;
        "
      >
        Hướng nhà
      </q-item>
      <div class="vector"></div>
    </q-label>

    <q-list>
      <q-item class="row flex flex-center q-col-gutter-x-sm">
        <q-item-section
          class="col-5 q-ml-md q-pl-md"
          style="padding-left: 24px"
        >
          <p>Hướng nhà</p>
          <q-select outlined v-model="model" :options="options" />
        </q-item-section>

        <q-item-section class="col-4">
          <p>Phương chi</p>
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
    <HouseDirectionList class="q-mt-md" />
  </q-container>
  <qPagination class="q-mt-xl" />
</template>
<script>
import { defineComponent, ref } from "vue";
import SearchBox from "components/SearchBox.vue";
import { usePagesStore } from "src/stores/pages";
import HouseDirectionList from "src/components/HouseDirection/List.vue";
import qPagination from "src/components/qPagination.vue";

const PageStore = usePagesStore();
export default defineComponent({
  name: "HouseDirection",
  components: {
    SearchBox,
    HouseDirectionList,
    qPagination,
  },
  setup() {
    return {
      model1: ref("Càn"),
      options1: ref(["Càn", "abd"]),
      model: ref("Chính tây bắc"),
      options: ref(["Chính tây bắc", "abc"]),
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
