<template v-slot="default">
  <q-layout
    view="hHh lpR lff"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    class="my-font"
  >
    <!-- :style="`font-size: ${fontSize}`" -->
    <NavBar></NavBar>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated dir="ltr">
      <div class="bg-white">
        <q-toolbar class="container text-primary">
          <q-toolbar-title>
            <q-chip
              color="transparent"
              text-color="primary"
              square
              icon="copyright"
              label="Copyrights reserved Abubakr-DEPI"
            />
            <q-btn
              flat
              icon="link"
              label="Linkedin/in/abubakr-dev"
              type="a"
              target="_blank"
              href="https://www.linkedin.com/in/abubakr-dev"
            />
          </q-toolbar-title>

          <LanguageSelector></LanguageSelector>
        </q-toolbar>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import LanguageSelector from 'src/components/Nav/LanguageSelector.vue';
import NavBar from 'src/components/Nav/NavBar.vue';

// import { useQuasar } from 'quasar';
// const quasar = useQuasar();

import { useI18n } from 'vue-i18n';
// import { computed } from 'vue';
const { locale } = useI18n();

defineOptions({
  name: 'MainLayout',
});

// const fontSize = computed(() => {
//   return locale.value == 'ar' ? '1.9rem' : '1rem';
// });
</script>
