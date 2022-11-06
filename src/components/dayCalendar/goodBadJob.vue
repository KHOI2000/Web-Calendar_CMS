<template>
  <div>
    <q-list>
      <q-item class="row flex flex-center">
        <q-item-section class="col q-ml-md">
          <p>Tình cảm</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md q-mr-sm"
            v-model="text"
            placeholder="Nhập.."
          />
        </q-item-section>
        <q-item-section class="col q-mr-sm">
          <p>Công</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
            placeholder="Nhập.."
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list>
      <q-item class="row flex flex-center">
        <q-item-section class="col q-ml-md">
          <p>Tài lộc</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md q-mr-sm"
            v-model="text"
            placeholder="Nhập.."
          />
        </q-item-section>
        <q-item-section class="col q-mr-sm">
          <p>Sức khỏe</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md"
            v-model="text"
            placeholder="Nhập.."
          ></q-input>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list>
      <q-item class="row flex q-mx-md">
        <q-item-section class="col-6">
          <p>Lời khuyên</p>
          <q-input
            outlined
            class="bg-grey-4 q-mb-md q-mr-sm"
            v-model="text"
            placeholder="Nhập.."
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
