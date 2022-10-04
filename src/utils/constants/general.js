export const SERVER_BASE_URL = 'https://mady-app-kutu.herokuapp.com/api'
export const LOCALSTORAGE_KEY_USER = ''
export const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'CLIENT',
}
export const API_ROUTES_GET = {
   leadership: {
      path: 'agriculture/acEvent/employees',
   },
   educationSC: {
      path: 'agriculture/acEvent/schools',
   },
   educationDrivingSC: {
      path: 'agriculture/acEvent/drivingSchool',
   },
   educationCircles: {
      path: 'agriculture/acEvent/circles',
   },
   educationEvents: {
      path: 'agriculture/acEvent/moeEvent',
   },
   educationKinger: {
      path: 'agriculture/acEvent/kindergartens',
   },
   educationGRT: {
      path: 'agriculture/acEvent/ort',
   },
   educationOlympiads: {
      path: 'agriculture/acEvent/olympians',
   },
   youthAffairsYI: {
      path: 'agriculture/acEvent/youthInitiatives',
   },
   youthAffairsHC: {
      path: 'agriculture/acEvent/youthCommitteeManager',
   },
   youthAffairsOY: {
      path: 'agriculture/acEvent/offerForYouth',
   },
   youthAffairsSA: {
      path: 'agriculture/acEvent/sportsEvents',
   },
   youthAffairsAY: {
      path: 'agriculture/acEvent/enterprisingYouth',
   },
   healthHospitals: {
      path: 'agriculture/acEvent/hospitals',
   },
   healthDoctorAdvice: {
      path: 'agriculture/acEvent/doctorsAdvice',
   },
   healthFAPs: {
      path: 'agriculture/acEvent/medicalCenter',
   },
   healthOMS: {
      path: 'agriculture/acEvent/insurance',
   },

   agroAdvice: {
      path: 'agriculture/tips',
   },
   agroAnimalUsbundry: {
      path: 'agriculture/animalHusbandry',
   },
   agroGrainGrowing: {
      path: 'agriculture/grainGrowing',
   },
   agroLaws: {
      path: 'agriculture/laws',
   },
}
export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g
