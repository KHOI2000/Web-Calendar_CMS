<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer class="bg-secondary" show-if-above bordered width="240">
      <q-list>
        <q-item-label header class="flex items-center">
          <q-btn round style="border: 2px solid black">
            <q-avatar size="34px">
              <img src="../assets/logo_main_layout.svg" />
            </q-avatar>
          </q-btn>
          <span class="text-h5 text-white q-ml-md">Sơn chu</span>
        </q-item-label>

        <EssentialLink
          v-for="(link, index) in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="handler(index)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { usePagesStore } from "stores/pages";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = usePagesStore();

    return {
      essentialLinks: computed(() => store.pagesList),

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    handler(index) {
      for (var i of this.essentialLinks) {
        i.active = false;
      }
      this.essentialLinks[index].active = true;
    },
  },
});
</script>
