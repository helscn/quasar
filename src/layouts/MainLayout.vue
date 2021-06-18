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
      <q-item clickable v-ripple @click="test">
        <q-item-section>
          <q-avatar rounded size="48px">
            <img src="/images/Avatar.png" />
            <q-badge floating color="teal">Admin</q-badge>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-label caption>{{ title }}</q-item-label>
        </q-item-section>
        <q-item-section side> {{ department }}</q-item-section>
      </q-item>
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
