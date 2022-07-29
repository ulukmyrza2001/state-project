import store from '../../store'

export const getJwt = () => {
   return store.getState().auth.token
}

export const localstorage = {
   get(key) {
      return JSON.parse(localStorage.getItem(key))
   },
   save(key, value) {
      return localStorage.setItem(key, JSON.stringify(value))
   },
   remove(key) {
      return localStorage.removeItem(key)
   },
   clear() {
      return localStorage.clear()
   },
}

export const scrollHeader = () => {
   if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
   ) {
      return true
   }
   return false
}
