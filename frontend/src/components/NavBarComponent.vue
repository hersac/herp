<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Menu</v-toolbar-title>
      <div v-for="(title, index) in titles" :key="index">
        <BtnComponent :title="title.name" :route="title.route" @get-click="getSubMenu(title)" />
      </div>
    </v-toolbar>
    <div>
      <SubNavBarComponent :titlesecondnav="titleSub" :subtitles="subTitles" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BtnComponent from "@/components/BtnComponent.vue";
import SubNavBarComponent from '../components/SubNavBarComponent.vue';
import { TitlesMenu } from '../services/models/TitlesMenu';
import principalTitles from '../services/titlesService';

const titles = ref<TitlesMenu[] | undefined>([]);
const titleSub = ref<string>();
const subTitles = ref<Object[] | undefined>([]);
titles.value = principalTitles;


const getSubMenu = (title: TitlesMenu) => {
  titleSub.value = title.name;
  titles.value?.forEach(datos => {
    if (datos.name == "Config") {
      subTitles.value = datos.subtitle;
    }
  });

  subTitles.value = title.subtitle;
};

</script>
