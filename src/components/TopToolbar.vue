<template>
  <q-toolbar>
    <q-btn dense flat round icon="menu" @click="toggleLeftSideBar" />
    <q-toolbar-title>
      <q-avatar>
        <img src="/icons/SYE.ico" />
      </q-avatar>
      项目跟进管理系统
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
export default {
  name: "TopToolbar",
  methods: {
    toggleLeftSideBar: function(){
      this.$store.commit('toggleLeftSideBar')
    }
  }
};
</script>
