<template>
  <div>
    <v-toolbar class='d-flex justify-center'>
      <v-toolbar-title>{{ titleSecondNav }}</v-toolbar-title>
      <div v-for="(subtitle, index) in onSubtitles" :key="index">
        <BtnComponent :title="subtitle.name" :route="subtitle.route" />
      </div>
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineProps, computed } from "vue";
import BtnComponent from "../components/BtnComponent.vue";
import { TitlesMenu } from "@/services/models/TitlesMenu";

const props = defineProps({
  titlesecondnav: String,
  subtitles: Array<any>
});

const titleSecondNav = ref(props.titlesecondnav);
const subTitles = ref<TitlesMenu[] | undefined>(props.subtitles);

const getReloaded = ()=>{
  subTitles.value = [];
}

watchEffect(() => {
  titleSecondNav.value = props.titlesecondnav;
  getReloaded();
  subTitles.value = props.subtitles;
});

const onSubtitles = computed(() => {
  console.log("Este es el subtitles:", subTitles.value);
  return subTitles.value || [];
});
</script>
