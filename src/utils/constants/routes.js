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
   },
   education: {
      schools: {
         path: '/admin/bilim-beruu/mektepter',
         label: 'Schools',
      },
      drivingSchool: {
         path: '/admin/bilim-beruu/avto-mektepter',
         label: 'Driving-schools',
      },
      iyrymder: {
         path: '/admin/bilim-beruu/iyrymder',
         label: '',
      },
      olympiads: {
         path: '/admin/bilim-beruu/olimpiadalar',
         label: 'Olympiads',
      },
      kindergartens: {
         path: '/admin/bilim-beruu/bala-bakchalar',
         label: 'Kindergartens',
      },
      аctivities: {
         path: '/admin/bilim-beruu/ish-charalar',
         label: 'Activities',
      },
      GRT: {
         path: '/admin/bilim-beruu/ORT',
         label: 'GeneralRepublicanTesting',
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
   },
}
