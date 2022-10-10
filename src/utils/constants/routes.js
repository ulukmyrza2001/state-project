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
}
