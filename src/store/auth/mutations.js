export function changeLogin (state,user) {
        if ('userid' in user){
            state.userid = user.userid;
        }
        if ('username' in user){
            state.username = user.username;
        }
        if ('token' in user){
            state.token = user.token;
            if (!user.token){
                localStorage.removeItem('Token')
            }else{
                localStorage.setItem('Token', user.token);
            }
        }
        if ('expiration' in user){
            state.expiration = user.expiration;
        }
}
