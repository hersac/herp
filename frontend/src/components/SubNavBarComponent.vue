<template>
  <div>
    <v-toolbar>
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
import { titlesMenu } from '../services/models/TitlesMenu';

const props = defineProps({
  title: String,
  subTitles: Array<titlesMenu>
});

const subTitlesComponent = ref<titlesMenu[]>([]);

const titleSubComponent = props.title;
subTitlesComponent.value = props.subTitles;

</script>
