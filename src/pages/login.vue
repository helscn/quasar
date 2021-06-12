<template>
  <q-layout>
    <q-page-container>
      <q-page docs-input row justify-center>
        <div id="container" class="fullscreen">
          <div id="form" class="fixed-center">
            <h5>登录</h5>
            <!-- <q-field
              icon="person"
              :count="20"
              label="用户名"
              helper="请输入登录用户名"
              error="mailHasError"
              error-label="We need a valid email"
            > -->
            <q-input
              :before="[
                {
                  icon: 'person',
                  content: true,
                  handler() {
                    // do something...
                  }
                }
              ]"
              v-model="username"
              placeholder="请输入用户名..."
              clearable="True"
            />
            <!-- </q-field> -->
            <q-field label="密码" helper="请输入您的密码">
              <q-input
                type="password"
                max-length="16"
                v-model="password"
                clearable="True"
              />
            </q-field>
            <q-field
              icon="card_travel"
              label="Travel card"
              helper="Some helper"
            >
              <q-input
                v-model="username"
                icon="person"
                float-label="Float label"
              />
            </q-field>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
#form {
  margin-top: -50px;
}
</style>

<script>
export default {
  methods: {
    ToLogin: function() {
      this.showLogin = true;
      this.showRegister = false;
    },
    ToRegister: function() {
      this.showLogin = false;
      this.showRegister = true;
    },
    login: function() {
      let _this = this;

      /////判读账号密码是否输入，没有则alert 出来
      if (this.username === "" || this.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.$axios({
          method: "post",
          url: "/login",
          data: {
            username: _this.username,
            password: _this.password
          }
        })
          .then(res => {
            let token = res.data.token;
            console.log(token);
            // 将用户token保存到vuex中
            _this.$store.commit("changeLogin", {
              Token: token
            });
            this.$q.notify({
              message: "欢迎",
              type: "positive",
              detail: "登陆成功，正常跳转至主页...",
              position: "center"
            });
            _this.$router.push("/");
          })
          .catch(error => {
            this.$q.notify({
              message: "错误",
              type: "negative",
              detail: "账号或密码错误！",
              position: "center"
            });
            _this.$store.commit("changeLogin", {
              Token: ""
            });
            _this.$router.push("/login");
          });
      }
    },
    register: function() {
      let _this = this;
      this.$axios({
        method: "get",
        url: "/gettoken"
      }).then(res => {
        alert(res.data);
      });
    }
  },
  data() {
    return {
      // count: 20,
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      token: ""
    };
  }
};
</script>
