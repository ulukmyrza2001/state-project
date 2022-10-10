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
         path: '/salamattykty-saktoo/oorukanalar',
         label: 'Hospitals',
      },
      paramedicPoint: {
         path: '/salamattykty-saktoo/PHAP',
         label: 'Paramedic Point',
      },
      OMS: {
         path: '/salamattykty-saktoo/OMS',
         label: 'OMS',
      },
      doctorAdvice: {
         path: '/salamattykty-saktoo/darygerdin-keneshi',
         label: 'Doctor Advice',
      },
      innerPageHospitals: {
         path: '/salamattykty-saktoo/oorukanalar/:id',
      },
      innerPageParamedicPoint: {
         path: '/salamattykty-saktoo/PHAP/:id',
      },
      innerPageOMS: {
         path: '/salamattykty-saktoo/OMS/:id',
      },
      innerPageDoctorAdvice: {
         path: '/salamattykty-saktoo/darygerdin-keneshi/:id',
      },
   },
   religiousAffairs: {
      mosques: {
         path: '/din-ishteri/mechitter',
         label: 'Mosques',
      },
      madrasas: {
         path: '/din-ishteri/medreseler',
         label: 'Madrasa',
      },
      pilgrimage: {
         path: '/din-ishteri/azhylyk',
         label: 'Pilgrimage',
      },
      ait: {
         path: '/din-ishteri/ait',
         label: 'Ait',
      },
      ramadan: {
         path: '/din-ishteri/ramazan',
         label: 'Ramadan',
      },
      prayer: {
         path: '/din-ishteri/namaz',
         label: 'Namaz',
      },
      morality: {
         path: '/din-ishteri/adep-ahlak',
         label: 'Morality',
      },
      religiousActivities: {
         path: '/din-ishteri/din-ishteri',
         label: 'Religious Activities',
      },
      innerPageAit: {
         path: '/din-ishteri/ait/:id',
      },
      innerPagePrayer: {
         path: '/din-ishteri/namaz/:id',
      },
      innerPageRamadan: {
         path: '/din-ishteri/ramazan/:id',
      },
      innerPageMosques: {
         path: '/din-ishteri/mechitter/:id',
      },
      innerPageMadrasas: {
         path: '/din-ishteri/medreseler/:id',
      },
      innerPagePilgrimage: {
         path: '/din-ishteri/azhylyk/:id',
      },
      innerPagereligiousActivities: {
         path: '/din-ishteri/din-ishteri/:id',
      },
      innerPageMorality: {
         path: '/din-ishteri/adep-ahlak/:id',
      },
   },
   youthAffairs: {
      headOfCommittee: {
         path: '/jashtar-ishteri/komitet-jetekchisi',
         label: 'Head of the Committee',
      },
      sportActivities: {
         path: '/jashtar-ishteri/sport-ishteri',
         label: 'Sport Activities',
      },
      activeYouth: {
         path: '/jashtar-ishteri/jigerduu-jashtar',
         label: 'Active youth',
      },
      initiativies: {
         path: '/jashtar-ishteri/demilgeler',
         label: 'Initiativies',
      },
      offersForYouth: {
         path: '/jashtar-ishteri/jashtarga-sunushtar',
         label: 'Offers For Youth',
      },
      // INNER PAGES
      innerHeadOfCommittee: {
         path: '/jashtar-ishteri/komitet-jetekchisi/:id',
      },
      innerSportActivities: {
         path: '/jashtar-ishteri/sport-ishteri/:id',
      },
      innerActiveYouth: {
         path: '/jashtar-ishteri/jigerduu-jashtar/:id',
      },
      innerInitiativies: {
         path: '/jashtar-ishteri/demilgeler/:id',
      },
      innerOffersForYouth: {
         path: '/jashtar-ishteri/jashtarga-sunushtar/:id',
      },
   },
   agriculture: {
      animalUsbandry: {
         path: '/aiyl-charba/mal-charba-comiteti',
         label: 'Animal Usbandry Committee',
      },
      pastureCommittee: {
         path: '/aiyl-charba/jaiyt-comiteti',
         label: 'Pasture Committee',
      },
      seedsFarm: {
         path: '/aiyl-charba/uroon',
         label: 'Seeds Farm',
      },
      laws: {
         path: '/aiyl-charba/myizamdar',
         label: 'Laws',
      },
      agroActivities: {
         path: '/jashtar-ishteri/agro-ish-charalar',
         label: 'Agro Activities',
      },
      agroAdvices: {
         path: '/jashtar-ishteri/keneshter',
         label: 'Agro Advices',
      },
   },
   culture: {
      cultureHouses: {
         path: '/madanyat/madanyat-uiloru',
         label: 'Culture Houses',
      },
      museums: {
         path: '/madanyat/mezeyler',
         label: 'Museums',
      },
      culturalWorkers: {
         path: '/madanyat/madanyat-kyzmatkerleri',
         label: 'Cultural Workers',
      },
      culturalActivities: {
         path: '/madanyat/madanyat-ish-charalar',
         label: 'Cultural Activities',
      },
      culturalCompetitions: {
         path: '/jashtar-ishteri/madanyat-synaktar',
         label: 'Cultural Competitions',
      },
   },
   okm: {
      okm: {
         path: '/OKM/okm',
         label: 'OKM',
      },
   },
   cleanliness: {
      cleanline: {
         path: '/tazalyk/tazalyk',
         label: 'Cleanliness',
      },
   },
   celebrities: {
      celebrities: {
         path: '/ataktuular/ataktuular',
         label: 'Сelebrities',
      },
   },
   newsAndAnnouncements: {
      newsAndAnnouncements: {
         path: '/Janylyktar-jana-kulaktandyruular/janylyktar-jana-kulaktandyruular',
         label: 'News and Announcements',
      },
   },
}
