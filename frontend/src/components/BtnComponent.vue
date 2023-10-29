<template>
  <div>
    <router-link :to="routeComponent">
      <v-btn :class="classComponent" @click="functionWithParam($event)">{{ titleComponent }}</v-btn>
    </router-link>
  </div>
</template>
<script setup lang="ts">

const props = defineProps({
  class: String,
  title: String,
  route: String
});

const emits = defineEmits([
  "get-click"
])

const classComponent = props.class;
const titleComponent = props.title;
const routeComponent = props.route;

const functionWithParam = (param: any)=>{
  emits('get-click', param);
};

</script>
