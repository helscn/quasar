export function refreshLogin ({commit},that) {
    that.$axios({
        method: "post",
        url: "/auth/gettoken"
    }).then(res=>{
        commit('changeLogin',res.data)
    }).catch(error=>{
        that.$router.push("/login");
    })
}
