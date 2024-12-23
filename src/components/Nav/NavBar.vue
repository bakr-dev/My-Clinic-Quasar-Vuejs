<template>
  <q-header elevated>
    <div class="bg-white">
      <q-toolbar class="container text-primary q-pa-sm">
        <q-toolbar-title
          class="text-h4 text-weight-bold"
          style="min-width: fit-content"
        >
          <q-icon class="text-h2 q-pr-sm" name="diversity_1" />
          {{ t('layout.navbar.title') }}</q-toolbar-title
        >

        <div class="gt-sm">
          <NavLink v-for="link in links.list" :key="link.title" :link="link" />
        </div>

        <q-space class="gt-sm"></q-space>

        <div class="gt-sm">
          <q-btn flat outline rounded no-caps color="primary">
            <div class="row items-center content-center no-wrap">
              <q-icon
                :class="locale == 'ar' ? 'flip-horizontal' : 'ltr'"
                size="lg"
                left
                name="call"
              />
              <div class="column items-start">
                <q-item-label
                  class="text-uppercase"
                  caption
                  style="font-size: 0.7rem"
                  >{{ t('layout.buttons.callUs') }}</q-item-label
                >
                <q-item-label style="direction: ltr"
                  >+201020002000</q-item-label
                >
              </div>
            </div>
          </q-btn>

          <q-btn flat outline rounded no-caps color="primary">
            <div class="row items-center content-center no-wrap">
              <q-icon size="lg" left name="location_on" />
              <div class="column items-start">
                <q-item-label
                  class="text-uppercase"
                  caption
                  style="font-size: 0.7rem"
                  >{{ t('layout.buttons.location') }}</q-item-label
                >
                <q-item-label>{{
                  t('layout.buttons.locationAddress')
                }}</q-item-label>
              </div>
            </div>
          </q-btn>

          <q-btn
            outline
            rounded
            class="bg-primary text-white appointment-btn"
            style="min-width: 120px"
            :label="t('layout.buttons.appointment')"
          />
        </div>

        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </div>
  </q-header>

  <!-- :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white'" -->
  <q-drawer
    v-model="leftDrawerOpen"
    :width="200"
    :breakpoint="500"
    overlay
    bordered
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(link, index) in links.list" :key="index">
          <q-item clickable :active="link.link === 'Outbox'" v-ripple>
            <q-item-section>
              <NavLink :link="link" />
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="link.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
// import { INavLink } from 'src/types/types';
import NavLink from './NavLink.vue';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const links = computed(() => {
  return {
    list: [
      {
        title: t('layout.navbar.home'),
        link: '/',
        separator: true,
      },
      {
        title: t('layout.navbar.services'),
        link: '/services',
        separator: true,
      },
      {
        title: t('layout.navbar.contact'),
        link: '/contact',
        separator: true,
      },
    ],
  };
});

// const linksList: INavLink[] = [...links.value.list];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
