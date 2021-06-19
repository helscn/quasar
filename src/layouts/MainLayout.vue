<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="left" side="left" :width="280" elevated>
      <router-view name="sidebar" />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      left: false
    };
  },
  computed: mapState({
    name: state => state.auth.name,
    title: state => state.auth.title,
    department: state => state.auth.department,
    phone: state => state.auth.phone,
    email: state => state.auth.email
  }),
  methods: {
    test: function() {
      alert(this.$store.getters["auth/isLogined"]);
    },
    logout: function() {
      let _this = this;
      _this.$q.notify({
        type: "warning",
        position: "center",
        icon: "announcement",
        message: "已登出，正在跳转至登录界面...",
        timeout: 500,
        progress: true
      });
      setTimeout(() => {
        _this.$store.commit("auth/logout");
        _this.$router.push("/login");
      }, 1500);
    }
  },
  mounted: function() {
    // this.$nextTick(function() {
    if (
      this.$store.state.auth.name == "" &&
      this.$store.state.auth.token != ""
    ) {
      this.$store.dispatch("auth/refreshLogin", this);
    }
    // });
  }
};
</script>
