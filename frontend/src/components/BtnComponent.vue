<template>
  <div>
    <router-link :to="routeComponent">
      <v-btn :class="classComponent" @click="emits('get-click')">{{ titleComponent }}</v-btn>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const classComponent = ref<string>();
const titleComponent = ref<string>();
const routeComponent = ref<string | undefined>();

const props = defineProps({
  class: String,
  title: String,
  route: String
});

const emits = defineEmits([
  "get-click"
])


classComponent.value = props.class;
titleComponent.value = props.title;
routeComponent.value = props.route;

</script>
