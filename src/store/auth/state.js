export default function () {
  return {
    userid: null,
    username: null,
    token: localStorage.getItem('Token') ? localStorage.getItem('Token') : '',
    expiration: null
  }
}
