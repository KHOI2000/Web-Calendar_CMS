<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
      <AddButton label="Thêm danh mục" @click="add = !add"></AddButton>
      <SearchBox
        style="margin-right: 15%; margin-left: 45px"
        placeholder="Tìm kiếm sự kiện"
      ></SearchBox>
    </q-toolbar>
  </q-header>
  <div class="q-ma-xl">
    <div class="breadscrum">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Sự kiện" />
        <q-breadcrumbs-el label="Danh mục sự kiện" />
      </q-breadcrumbs>
    </div>
    <div class="separator"></div>
  </div>
  <EventItemAddBox v-show="add"></EventItemAddBox>
  <EventItem v-for="item in eventList" :key="item" :="item" />
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import AddButton from "components/AddButton.vue";
import SearchBox from "components/SearchBox.vue";
import EventItem from "components/EventItem.vue";
import EventItemAddBox from "components/EventItemAddBox.vue";
import { useEventStore } from "stores/event.store";
import { usePagesStore } from "src/stores/pages";
const PageStore = usePagesStore();
export default defineComponent({
  name: "EventListPage",
  setup() {
    const store = useEventStore();
    store.update();
    const eventList = computed(() => store.Event);
    console.log(store.Event);
    return {
      add: ref(false),
      eventList,
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
  components: {
    AddButton,
    SearchBox,
    EventItem,
    EventItemAddBox,
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
</style>
