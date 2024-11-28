<template v-slot="default">
  <q-layout view="hHh lpR lff">
    <NavBar></NavBar>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
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
          </q-toolbar-title>
          <q-btn
            flat
            icon="link"
            label="Linkedin/in/abubakr-dev"
            type="a"
            target="_blank"
            href="https://www.linkedin.com/in/abubakr-dev"
          />
        </q-toolbar>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import NavBar from 'src/components/Nav/NavBar.vue';

defineOptions({
  name: 'MainLayout',
});


</script>

