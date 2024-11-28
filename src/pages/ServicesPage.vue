<template>
  <q-page>
    <div class="container row q-pt-md">
      <div
        class="q-pa-md col-xs-12 col-sm-6 col-md-4"
        v-for="(service, index) in servicesList"
        :key="index"
      >
        <ServiceImg :service="service"></ServiceImg>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ServiceImg from 'src/components/ServiceImg.vue';

import { IService } from 'src/types/types';

const servicesList: IService[] = [
  {
    imgLink: '/imgs/services/clinic_01.jpg',
    title: 'Home',
  },
  {
    imgLink: '/imgs/services/clinic_02.jpg',
    title: 'Home',
  },
  {
    imgLink: '/imgs/services/clinic_02.jpg',
    title: 'Home',
  },

  {
    imgLink: '/imgs/services/clinic_02.jpg',
    title: 'Home',
  },
];
</script>
