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

    <q-drawer show-if-above v-model="left" side="left" elevated>
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar rounded size="48px">
            <img src="/images/Avatar.png" />
            <!-- <q-badge floating color="teal">Admin</q-badge> -->
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-label caption>{{ title }} {{ department }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            class="glossy"
            round
            color="deep-orange"
            icon="logout"
            size="sm"
            @click.stop="logout"
          >
            <q-tooltip>登出</q-tooltip>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />
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
      alert(this.$store.state.auth.name);
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
    this.$nextTick(function() {
      if (
        this.$store.state.auth.name == "" &&
        this.$store.state.auth.token != ""
      ) {
        this.$store.dispatch("auth/refreshLogin", this);
      }
    });
  }
};
</script>
