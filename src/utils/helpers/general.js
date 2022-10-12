import store from '../../store'
import { CATEGORYES } from '../constants/categoryes'

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

export const findOneCategory = (pathname) => {
   let oneCategory = null
   CATEGORYES.forEach((category) =>
      category.innerList.forEach((item) => {
         if (item.path === pathname) {
            oneCategory = category
         }
         return category
      })
   )
   return oneCategory
}

export const converterDate = (date) => {
   const incomingDate = new Date(date)
   let convertedMonth = 'январь'
   const month = incomingDate.getMonth() + 1
   const year = incomingDate.getFullYear()
   const day = incomingDate.getDate()
   switch (month) {
      case 2:
         convertedMonth = 'февраль'
         break
      case 3:
         convertedMonth = 'март'
         break
      case 4:
         convertedMonth = 'апрель'
         break
      case 5:
         convertedMonth = 'май'
         break
      case 6:
         convertedMonth = 'июнь'
         break
      case 7:
         convertedMonth = 'июль'
         break
      case 8:
         convertedMonth = 'август'
         break
      case 9:
         convertedMonth = 'сентябрь'
         break
      case 10:
         convertedMonth = 'октябрь'
         break
      case 11:
         convertedMonth = 'ноябрь'
         break
      case 12:
         convertedMonth = 'декабрь'
         break
      default:
         convertedMonth = 'январь'
         break
   }
   return `${day}-${convertedMonth} ${year}-жыл.`
}
