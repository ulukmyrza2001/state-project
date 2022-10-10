/* eslint-disable import/prefer-default-export */
export const CLIENT_ROUTES = {
   MAIN: {
      path: '/',
      label: 'main',
   },
   LEADERSHIP: {
      GOVERNMENT: {
         path: '/jetekchilik/okmot',
         label: 'okmot',
      },
      GOVERNMENT_APPARATUS: {
         path: '/jetekchilik/apparat',
         label: 'apparat',
      },
      VILLAGE_COUNCIL: {
         path: '/jetekchilik/aiyldyk-kenesh',
      },
      INNER_PAGE_GOVERNMENT_APPARATUS: {
         path: '/jetekchilik/apparat/:id',
      },
      INNER_PAGE_VILLAGE_COUNCIL: {
         path: '/jetekchilik/aiyldyk-kenesh/:id',
      },
   },
   education: {
      schools: {
         path: '/bilim-beruu/mektepter',
         label: 'Schools',
      },
      drivingSchool: {
         path: '/bilim-beruu/avto-mektepter',
         label: 'Driving-schools',
      },
      iyrymder: {
         path: '/bilim-beruu/iyrymder',
         label: '',
      },
      olympiads: {
         path: '/bilim-beruu/olimpiadalar',
         label: 'Olympiads',
      },
      kindergartens: {
         path: '/bilim-beruu/bala-bakchalar',
         label: 'Kindergartens',
      },
      аctivities: {
         path: '/bilim-beruu/ish-charalar',
         label: 'Activities',
      },
      GRT: {
         path: '/bilim-beruu/ORT',
         label: 'GeneralRepublicanTesting',
      },
      innerPageSchools: {
         path: '/bilim-beruu/mektepter/:id',
      },
      innerPageDrivingSchools: {
         path: '/bilim-beruu/avto-mektepter/:id',
      },
      innerPageCircles: {
         path: '/bilim-beruu/iyrymder/:id',
      },
      innerPageActivities: {
         path: '/bilim-beruu/ish-charalar/:id',
      },
      innerPageOlympiads: {
         path: '/bilim-beruu/olimpiadalar/:id',
      },
      innerPageGRT: {
         path: '/bilim-beruu/ORT/:id',
      },
      innerPageKindergartens: {
         path: '/bilim-beruu/bala-bakchalar/:id',
      },
   },
   healthCare: {
      hospitals: {
         path: '/admin/salamattykty-saktoo/oorukanalar',
         label: 'Hospitals',
      },
      paramedicPoint: {
         path: '/admin/salamattykty-saktoo/PHAP',
         label: 'Paramedic Point',
      },
      OMS: {
         path: '/admin/salamattykty-saktoo/OMS',
         label: 'OMS',
      },
      doctorAdvice: {
         path: '/admin/salamattykty-saktoo/darygerdin-keneshi',
         label: 'Doctor Advice',
      },
      innerPageHospitals: {
         path: '/admin/salamattykty-saktoo/oorukanalar/:id',
      },
      innerPageParamedicPoint: {
         path: '/admin/salamattykty-saktoo/PHAP/:id',
      },
      innerPageOMS: {
         path: '/admin/salamattykty-saktoo/OMS/:id',
      },
      innerPageDoctorAdvice: {
         path: '/admin/salamattykty-saktoo/darygerdin-keneshi/:id',
      },
   },
   religiousAffairs: {
      mosques: {
         path: '/admin/din-ishteri/mechitter',
         label: 'Mosques',
      },
      madrasas: {
         path: '/admin/din-ishteri/medreseler',
         label: 'Madrasa',
      },
      pilgrimage: {
         path: '/admin/din-ishteri/azhylyk',
         label: 'Pilgrimage',
      },
      ait: {
         path: '/admin/din-ishteri/ait',
         label: 'Ait',
      },
      ramadan: {
         path: '/admin/din-ishteri/ramazan',
         label: 'Ramadan',
      },
      prayer: {
         path: '/din-ishteri/namaz',
         label: 'Namaz',
      },
      morality: {
         path: '/admin/din-ishteri/adep-ahlak',
         label: 'Morality',
      },
      religiousActivities: {
         path: '/admin/din-ishteri/din-ishteri',
         label: 'Religious Activities',
      },
   },
   youthAffairs: {
      headOfCommittee: {
         path: '/admin/jashtar-ishteri/komitet-jetekchisi',
         label: 'Head of the Committee',
      },
      sportActivities: {
         path: '/admin/jashtar-ishteri/sport-ishteri',
         label: 'Sport Activities',
      },
      activeYouth: {
         path: '/admin/jashtar-ishteri/jigerduu-jashtar',
         label: 'Active youth',
      },
      initiativies: {
         path: '/admin/jashtar-ishteri/demilgeler',
         label: 'Initiativies',
      },
      offersForYouth: {
         path: '/admin/jashtar-ishteri/jashtarga-sunushtar',
         label: 'Offers For Youth',
      },
   },
   agriculture: {
      animalUsbandry: {
         path: '/admin/aiyl-charba/mal-charba-comiteti',
         label: 'Animal Usbandry Committee',
      },
      pastureCommittee: {
         path: '/admin/aiyl-charba/jaiyt-comiteti',
         label: 'Pasture Committee',
      },
      seedsFarm: {
         path: '/admin/aiyl-charba/uroon',
         label: 'Seeds Farm',
      },
      laws: {
         path: '/admin/aiyl-charba/myizamdar',
         label: 'Laws',
      },
      agroActivities: {
         path: '/admin/jashtar-ishteri/agro-ish-charalar',
         label: 'Agro Activities',
      },
      agroAdvices: {
         path: '/admin/jashtar-ishteri/keneshter',
         label: 'Agro Advices',
      },
   },
   culture: {
      cultureHouses: {
         path: '/admin/madanyat/madanyat-uiloru',
         label: 'Culture Houses',
      },
      museums: {
         path: '/admin/madanyat/mezeyler',
         label: 'Museums',
      },
      culturalWorkers: {
         path: '/admin/madanyat/madanyat-kyzmatkerleri',
         label: 'Cultural Workers',
      },
      culturalActivities: {
         path: '/admin/madanyat/madanyat-ish-charalar',
         label: 'Cultural Activities',
      },
      culturalCompetitions: {
         path: '/admin/jashtar-ishteri/madanyat-synaktar',
         label: 'Cultural Competitions',
      },
   },
   okm: {
      okm: {
         path: '/admin/OKM/okm',
         label: 'OKM',
      },
   },
   cleanliness: {
      cleanline: {
         path: '/admin/tazalyk/tazalyk',
         label: 'Cleanliness',
      },
   },
   celebrities: {
      celebrities: {
         path: '/admin/ataktuular/ataktuular',
         label: 'Сelebrities',
      },
   },
   newsAndAnnouncements: {
      newsAndAnnouncements: {
         path: '/admin/Janylyktar-jana-kulaktandyruular/janylyktar-jana-kulaktandyruular',
         label: 'News and Announcements',
      },
   },
}
