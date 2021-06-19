<template>
  <div>
    <q-item clickable v-ripple @click="test">
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
          <q-tooltip>退出</q-tooltip>
        </q-btn>
      </q-item-section>
    </q-item>
    <q-separator spaced inset />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LeftSideBar",
  props: {},
  data() {
    return {
      left: false
    };
  },
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
  computed: mapState({
    name: state => state.auth.name,
    title: state => state.auth.title,
    department: state => state.auth.department,
    phone: state => state.auth.phone,
    email: state => state.auth.email
  }),
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
