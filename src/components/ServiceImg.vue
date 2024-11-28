<template>
  <q-img class="cursor-pointer" :src="props.service.imgLink">
    <div class="absolute-bottom text-center bg-primary text-subtitle1">
      {{ props.service.title }}
    </div>
  </q-img>
</template>

<script setup lang="ts">
import { IServicesProps } from '../types/types';

const props = defineProps<IServicesProps>();
console.log(props.service);
</script>

<!-- class="bg-cyan-1" -->
