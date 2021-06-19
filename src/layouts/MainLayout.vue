<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <router-view name="toolbar" />
    </q-header>

    <router-view name="sidebar" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {

};
</script>
