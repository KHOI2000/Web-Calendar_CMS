<template>
  <q-header elevated class="bg-white flex items-center" style="height: 64px">
    <q-toolbar class="flex row reverse">
      <q-icon class="text-black" name="account_circle" size="30px" />
      <span class="text-black q-mx-md">Admin</span>
    </q-toolbar>
  </q-header>

  <q-container>
    <q-label class="row flex flex-center q-mt-md justify-between">
      <q-item
        class="q-ml-sm"
        style="font-weight: 500; font-size: 18px; font-family: 'Roboto'"
      >
        Lịch ngày
      </q-item>
      <div class="vector"></div>
      <q-item class="q-mr-sm">
        <q-btn to="/user/day_event" no-caps flat class="bg-negative text-white">Lưu</q-btn>
      </q-item>
    </q-label>

    <q-list>
      <q-item class="row flex flex-center q-col-gutter-x-sm">
        <q-item-section
          class="col-6 q-ml-md q-pl-md"
          style="padding-left: 24px"
        >
          <p>Ngày dương</p>
          <q-input outlined v-model="date" class="q-mb-md">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-item-section>

        <q-item-section class="col-4">
          <p>Ngày âm</p>
          <q-input outlined="" v-model="date1" class="q-mb-md">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date1" mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-item-section>
        <q-item-section class="col-2">
          <q-btn
            no-caps
            class="bg-primary text-white q-py-md"
            style="margin-top: 19px"
            label="Lọc kết quả"
          >
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list class="q-pa-md q-ml-md">
      <q-btn-toggle
        no-caps
        flat
        v-model="slide"
        :options="[
          { label: 'Thông tin ngày', value: 'fixDayInfo' },
          { label: 'Chi tiết giờ', value: 'fixHourDetails' },
          { label: 'Thần sát', value: 'fixGodOf' },
          { label: 'Việc tốt xấu', value: 'fixGoodBadJob' },
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
        <q-carousel-slide name="fixDayInfo">
          <fixDayInfo />
        </q-carousel-slide>
        <q-carousel-slide name="fixHourDetails">
          <fixHourDetails />
        </q-carousel-slide>
        <q-carousel-slide name="fixGodOf">
          <fixGodOf />
        </q-carousel-slide>
        <q-carousel-slide name="fixGoodBadJob">
          <fixGoodBadJob />
        </q-carousel-slide>
      </q-carousel>
    </q-list>
  </q-container>
</template>
<script>
import { defineComponent, ref } from "vue";
import { usePagesStore } from "src/stores/pages";
import fixDayInfo from "src/components/dayCalendar/fixDayInfo.vue";
import fixHourDetails from "src/components/dayCalendar/fixHourDetails.vue";
import fixGodOf from "src/components/dayCalendar/fixGodOf.vue";
import fixGoodBadJob from "src/components/dayCalendar/fixGoodBadJob.vue";

const PageStore = usePagesStore();
export default defineComponent({
  name: "DayEvent",
  data() {
    return {
      slide: ref("fixDayInfo"),
      date: ref(""),
      date1: ref(""),
    };
  },
  components: {
    fixDayInfo,
    fixHourDetails,
    fixGodOf,
    fixGoodBadJob,
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
.vector {
  height: 1px;
  width: 80%;
  background-color: rgb(223, 215, 215);
}
</style>
