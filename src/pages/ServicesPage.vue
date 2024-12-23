<template>
  <q-page>
    <div class="container">
      <h3 class="text-primary">
        {{ t('pages.services.title') }}
      </h3>

      <p class="q-pa-sm text-h4">
        {{ t('pages.services.text') }}
      </p>
      <div class="row q-pt-md q-pb-lg">
        <div
          class="q-pa-sm col-xs-12 col-sm-6 col-md-4"
          v-for="(service, index) in services.list"
          :key="index"
        >
          <ServiceImg :service="service"></ServiceImg>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ServiceImg from 'src/components/ServiceImg.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// import { IService } from 'src/types/types';

const services = computed(() => {
  return {
    list: [
      {
        imgLink: '/imgs/services/clinic_01.jpg',
        title: t('pages.services.specializedCare'),
      },

      {
        imgLink: '/imgs/services/clinic_03.jpg',
        title: t('pages.services.pharmacy'),
      },

      {
        imgLink: '/imgs/services/clinic_04.jpg',
        title: t('pages.services.lapTesting'),
      },
      {
        imgLink: '/imgs/services/clinic_02.jpg',
        title: t('pages.services.surgery'),
      },
    ],
  };
});

// const servicesList: IService[] = [
//   {
//     imgLink: '/imgs/services/clinic_01.jpg',
//     title: 'Home',
//   },
//   {
//     imgLink: '/imgs/services/clinic_02.jpg',
//     title: 'Home',
//   },
//   {
//     imgLink: '/imgs/services/clinic_03.jpg',
//     title: 'Home',
//   },

//   {
//     imgLink: '/imgs/services/clinic_04.jpg',
//     title: 'Home',
//   },
// ];
</script>
