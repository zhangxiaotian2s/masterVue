export default {
  local: {
    get(key) {
      return JSON.parse(window.localStorage.getItem(key))
    },
    save(key, items) {
      window.localStorage.setItem(key, JSON.stringify(items))
    }
  },
  session: {
    get(key) {
      return JSON.parse(window.sessionStorage.getItem(key))
    },
    save(key, items) {
      window.sessionStorage.setItem(key, JSON.stringify(items))
    }
  }
}
