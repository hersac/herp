<template>
  <v-app>
    <v-main>
      <div>
        <NavBarComponent />
      </div>
      <div>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBarComponent from "@/components/NavBarComponent.vue";

</script>
