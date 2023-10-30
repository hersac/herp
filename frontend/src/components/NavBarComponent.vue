<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Menu</v-toolbar-title>
      <div v-for="(title, index) in titles" :key="index">
        <BtnComponent
          :title="title.name"
          :route="title.route"
          @get-click="getSubMenu(title.name, title.subtitle)"
        />
      </div>
    </v-toolbar>
      <div>
        <SubNavBarComponent
        :titlesecondnav="titleSub"
        :subtitles="subTitles"
        />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BtnComponent from "@/components/BtnComponent.vue";
import SubNavBarComponent from '../components/SubNavBarComponent.vue';
import principalTitles from '../services/titlesService';
import { TitlesMenu } from '../services/models/TitlesMenu';

const titles = ref<TitlesMenu[][]>([]);
const titleSub = ref<string>('');
const subTitles = ref<TitlesMenu[][]>([]);

titles.value = principalTitles;

const getSubMenu = (title: string, submenu: TitlesMenu[][]) => {
  titleSub.value = title;
  subTitles.value = submenu;
};


</script>
