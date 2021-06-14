<template>
  <q-layout>
    <q-page class="fullscreen row" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
      <q-card bordered class="absolute-center col-xs-12 col-md-4 shadow-16 bg-grey-3">
        <q-card-section>
          <q-tabs v-model="tab" inline-label class="text-teal">
            <q-tab name="login" icon="face" label="登录" />
            <q-tab name="register" icon="how_to_reg" label="注册" />
          </q-tabs>
        </q-card-section>
        <q-card-section>
          <q-form class="">
            <div>
              <q-input
                bottom-slots
                v-model="classForm.username"
                label="用户名"
                counter
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>

                <template v-slot:append>
                  <q-icon
                    name="close"
                    @click="classForm.username = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
              <q-input
                :type="classForm.isPwd ? 'password' : 'text'"
                bottom-slots
                v-model="classForm.password"
                label="密码"
                counter
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="classForm.isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="classForm.isPwd = !classForm.isPwd"
                  />
                  <q-icon
                    name="close"
                    @click="classForm.password = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
          </q-form>
        </q-card-section>
        <q-card-actions class="justify-end">
          <q-btn color="primary" icon="login" label="登录" v-show="isLogin" />
          <q-btn color="primary" icon="send" label="注册" v-show="!isLogin" />
        </q-card-actions>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "login",
      visible: true,
      classForm: {
        username: "",
        password: "",
        isPwd: true
      },
      userToken: ""
    };
  },

  methods: {},
  computed: {
    isLogin: function() {
      return this.tab === "login" ? true : false;
    }
  }
};
</script>
