<template>
  <div>
    <div class="wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{ tishi }}</p>
      <input type="text" placeholder="请输入用户名" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <q-btn dense label="登录" v-on:click="login" />
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="wrap" v-show="showRegister">
      <h3>注册</h3>
      <input type="text" placeholder="请输入注册用户名" v-model="newUsername" />
      <input type="password" placeholder="请输入新密码" v-model="newPassword" />
      <q-btn dense label="注册" @click="register" />
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
    {{ token }}
  </div>
</template>

<style scoped>
.wrap {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  cursor: pointer;
}
span {
  cursor: pointer;
}
span:hover {
  color: #41b883;
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
            alert("登陆成功");
            _this.$router.push("/");
          })
          .catch(error => {
            alert("账号或密码错误");
            localStorage.removeItem("Token");
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
