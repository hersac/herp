<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Menu</v-toolbar-title>
      <div v-for="(title, index) in titles" :key="index">
        <BtnComponent
          :title="title.name"
          :route="title.route"
          @get-click="selectMenu(title.name)"
        />
      </div>
    </v-toolbar>
      <div>
        <SubNavBarComponent
          :title="titleSubmenu"
          :subTitles="subTitles"
        />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BtnComponent from "@/components/BtnComponent.vue";
import SubNavBarComponent from '../components/SubNavBarComponent.vue';
import titlesService from '../services/titlesService';
import { TitlesMenu } from '../services/models/TitlesMenu';

const titles = ref<TitlesMenu[]>([]);
const subTitles = ref<TitlesMenu[]>([]);
const titleSubmenu = ref<string>('');

titles.value = titlesService.titlesArray;
subTitles.value = titlesService.subTitleMasters;

const selectMenu = (title: any)=>{
  titleSubmenu.value = title;
};

</script>
