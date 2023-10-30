<template>
  <div>
    <v-toolbar class='d-flex justify-center'>
      <v-toolbar-title>{{ titleSubComponent }}</v-toolbar-title>
      <div v-for="(subtitle, index) in subTitlesComponent" :key="index">
          <BtnComponent
          :title="subtitle.name"
          :route="subtitle.route"
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
  titlesecondnav: String,
  subtitles: Array<Array<TitlesMenu>>
});

const titleSubComponent = ref<String | undefined>('');
const subTitlesComponent = ref<any[] | undefined>([]);

titleSubComponent.value = props.titlesecondnav;
subTitlesComponent.value = props.subtitles;

subTitlesComponent.value?.forEach(e =>{
  console.log(e.name);
});

</script>
