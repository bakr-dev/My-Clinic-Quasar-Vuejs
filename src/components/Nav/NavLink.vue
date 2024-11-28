<template>

  <q-btn
    color="grey-7"
    stretch
    flat
    :label="props.link.title"
    :to="props.link.link"
    :class="{ active: $route.path === props.link.link }"
  ></q-btn>
</template>

<script setup lang="ts">
type PropTypes = {
  link: {
    title: string;
    link: string;
  };
};
const props = defineProps<PropTypes>();
</script>

