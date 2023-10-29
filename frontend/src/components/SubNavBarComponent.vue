<template>
  <div>
    <v-toolbar class='d-flex justify-center'>
      <v-toolbar-title>{{ titleSubComponent }}</v-toolbar-title>
      <div v-for="(title, index) in subTitles" :key="index">
          <BtnComponent
          :title="title.name"
          :route="title.route"
          />
      </div>
    </v-toolbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BtnComponent from "../components/BtnComponent.vue";
import { TitlesMenu } from '../services/models/TitlesMenu';

const props = defineProps({
  title: String,
  subTitles: Array<TitlesMenu>
});

const subTitlesComponent = ref<TitlesMenu[] | undefined>([]);

const titleSubComponent = props.title;
subTitlesComponent.value = props.subTitles;

</script>
