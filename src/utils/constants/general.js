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
   agroActivites: {
      path: 'agriculture/acEvent',
   },
   agroPasture: {
      path: 'agriculture/pasture',
   },

   cultureWorkers: {
      path: 'agriculture/acEvent/culturalFigures',
   },
   cultureEvents: {
      path: 'agriculture/acEvent/cultureEvents',
   },
   museums: {
      path: 'agriculture/acEvent/museums',
   },
   cultureContests: {
      path: 'agriculture/acEvent/contests',
   },
   housesOfCultures: {
      path: 'agriculture/acEvent/housesOfCultures',
   },

   religiousMosques: {
      path: 'agriculture/acEvent/mechitter',
   },
   religiousMadrasa: {
      path: 'agriculture/acEvent/religionSchool',
   },
   religiousPilgrimage: {
      path: 'agriculture/acEvent/hadj',
   },
   religiousAit: {
      path: 'agriculture/acEvent/ait',
   },
   religiousRamadan: {
      path: 'agriculture/acEvent/ramazan',
   },
   religiousMorality: {
      path: 'agriculture/acEvent/ethics',
   },
   religiousNamaz: {
      path: 'agriculture/acEvent/prayer',
   },
   religiousActivities: {
      path: 'agriculture/acEvent/dEvent',
   },
   cleanliness: {
      path: 'agriculture/acEvent/cleanliness',
   },
   news: {
      path: 'agriculture/acEvent/newsAnnouncement',
   },
   OKM: {
      path: 'agriculture/acEvent/mchs',
   },
}
export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g
