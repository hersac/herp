<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Menu</v-toolbar-title>
      <div v-for="(title, index) in titles" :key="index">
        <BtnComponent
          :title="title.name"
          :route="title.route"
        />
      </div>
      <div v-for="(subTitle, index) in subTitles" :key="index">
        <SubNavBarComponent
          :title="'Maestros'"
          :subTitles="subTitles"
        />
      </div>
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BtnComponent from "@/components/BtnComponent.vue";
import SubNavBarComponent from '../components/SubNavBarComponent.vue';
import titlesService from '../services/titlesService';
import { titlesMenu } from '../services/models/TitlesMenu';

const titles = ref<string[]>([]);
const subTitles = ref<titlesMenu[]>([]);

titles.value = titlesService.titlesArray;
subTitles.value = titlesService.subTitleMasters;
</script>
