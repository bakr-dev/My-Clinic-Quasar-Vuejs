<template>
  <div>
    <q-btn color="accent" @click="changeLanguage('en')"
      >Switch to English</q-btn
    >
    <q-btn color="positive" @click="changeLanguage('ar')">اللغة العربية</q-btn>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function changeLanguage(lang: string) {
  locale.value = lang;
}
</script>
