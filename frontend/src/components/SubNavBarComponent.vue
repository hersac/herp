<template>
  <div>
    <v-toolbar class='d-flex justify-center'>
      <v-toolbar-title>{{ titlesecondnav }}</v-toolbar-title>
      <div v-for="(subtitle, index) in subtitles" :key="index">
          <BtnComponent
          :title="subtitle.name"
          :route="subtitle.route"
          />
      </div>
    </v-toolbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BtnComponent from "../components/BtnComponent.vue";

const props = defineProps({
  titlesecondnav: String,
  subtitles: Array<any>
});

</script>
