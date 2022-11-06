<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>
  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <q-item class="q-ml-sm" style="font-weight: 600; font-size: 20px">
        Lịch ngày
      </q-item>
      <div class="vector"></div>
      <q-item class="q-mr-sm">
        <q-btn flat class="bg-blue-8 text-white">Sửa</q-btn>
      </q-item>
    </q-label>

    <q-list>
      <q-item class="row flex flex-center">
        <q-item-section class="col q-ml-md">
          <p>Ngày dương</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md q-mr-sm"
            v-model="text"
            placeholder="10/03/2022"
          />
        </q-item-section>
        <q-item-section class="col q-mr-sm">
          <p>Ngày âm</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
            placeholder="10/03/2022"
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="q-pa-md q-ml-md">
      <q-btn-toggle
        flat
        v-model="slide"
        :options="[
          { label: 'Thông tin ngày', value: 'dayInfo' },
          { label: 'Chi tiết giờ', value: 'hourDetails' },
          { label: 'Thần sát', value: 'godOf' },
          { label: 'Việc tốt xấu', value: 'goodBadJob' },
        ]"
      >
      </q-btn-toggle>
    </q-list>

    <q-list>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        control-color="primary"
      >
        <q-carousel-slide name="dayInfo">
          <dayInfo />
        </q-carousel-slide>
        <q-carousel-slide name="hourDetails">
          <hourDetails />
        </q-carousel-slide>
        <q-carousel-slide name="godOf">
          <godOf />
        </q-carousel-slide>
        <q-carousel-slide name="goodBadJob">
          <goodBadJob />
        </q-carousel-slide>
      </q-carousel>
    </q-list>
  </q-container>
</template>
<script>
import { defineComponent, ref } from "vue";
import { usePagesStore } from "src/stores/pages";
import dayInfo from "src/components/dayCalendar/dayInfo.vue";
import hourDetails from "src/components/dayCalendar/hourDetails.vue";
import godOf from "src/components/dayCalendar/godOf.vue";
import goodBadJob from "src/components/dayCalendar/goodBadJob.vue";

const PageStore = usePagesStore();
export default defineComponent({
  name: "DayEvent",
  data() {
    return {
      slide: ref("dayInfo"),
    };
  },
  components: {
    dayInfo,
    hourDetails,
    godOf,
    goodBadJob,
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
