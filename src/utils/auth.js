const authKey = 'TOKEN'

export default {
  set(value) {
    window.sessionStorage.setItem(authKey, value)
  },
  get() {
    return window.sessionStorage.getItem(authKey)
  },
  remove() {
    window.sessionStorage.removeItem(authKey)
  }
}