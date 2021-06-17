export function changeLogin (state,user) {
    state.id=user.id;
    state.name=user.name;
    state.title=user.title;
    state.department=user.department;
    state.phone=user.phone;
    state.email=user.email;
    state.token=user.token;
}
