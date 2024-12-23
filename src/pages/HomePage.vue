<template>
  <q-page>
    <div>
      <div class="container row q-pa-md justify-center">
        <div
          class="column col-12 col-md-5 justify-center"
          style="min-height: 500px"
        >
          <h4
            class="col-3 row items-center justify-center border-bottom"
            style="margin: 0"
          >
            {{ t('pages.home.welcome') }}
          </h4>
          <div class="col-6 row text-h5 items-center">
            {{ t('pages.home.text') }}
          </div>

          <div class="col-3 row justify-evenly items-center full-width">
            <q-btn
              dense
              outline
              rounded
              class="bg-primary text-white appointment-btn"
              :label="t('layout.buttons.appointment')"
              style="height: 60px; width: min(50%, 200px)"
            />

            <q-btn
              dense
              outline
              rounded
              no-caps
              class="bg-primary text-white appointment-btn"
              style="height: 60px; width: min(50%, 200px)"
            >
              <div class="row items-center content-center no-wrap">
                <q-icon
                  :class="locale == 'ar' ? 'flip-horizontal' : 'ltr'"
                  size="lg"
                  left
                  name="call"
                />
                <div class="column items-start">
                  <q-item-label caption style="font-size: 0.7rem">{{
                    t('layout.buttons.callUs')
                  }}</q-item-label>
                  <q-item-label dir="ltr">+201020002000</q-item-label>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
        <div class="row col-12 col-md-7 self-center justify-center">
          <q-img src="../assets/png/best.png"> </q-img>
          <h4 class="text-primary">
            {{ t('pages.home.imgText') }}
            <q-icon name="favorite_border"></q-icon>
          </h4>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>

<!-- class="bg-cyan-1" -->
