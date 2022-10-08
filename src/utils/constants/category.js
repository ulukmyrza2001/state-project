import { CLIENT_ROUTES } from './routes'

const { LEADERSHIP } = CLIENT_ROUTES
const { GOVERNMENT, GOVERNMENT_APPARATUS, VILLAGE_COUNCIL } = LEADERSHIP

export const NAVIGATIONS = [
   {
      id: Math.random().toString(),
      title: 'Жетекчилик',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Өкмөт',
            path: GOVERNMENT.path,
         },
         {
            id: Math.random().toString(),
            title: 'Аппарат',
            path: GOVERNMENT_APPARATUS.path,
         },
         {
            id: Math.random().toString(),
            title: 'Айылдык кеңеш',
            path: VILLAGE_COUNCIL.path,
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Билим берүү',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мектептер',
         },
         {
            id: Math.random().toString(),
            title: 'Авто мектептер',
         },
         {
            id: Math.random().toString(),
            title: 'Ийримдер',
         },
         {
            id: Math.random().toString(),
            title: 'Олимпиадалар',
         },
         {
            id: Math.random().toString(),
            title: 'Бала бакчалар',
         },
         {
            id: Math.random().toString(),
            title: 'Иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'ЖРТ (ОРТ)',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Саламаттыкты сактоо',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Ооруканалар',
         },
         {
            id: Math.random().toString(),
            title: 'ФАПтар',
         },
         {
            id: Math.random().toString(),
            title: 'ОМС',
         },
         {
            id: Math.random().toString(),
            title: 'Дарыгердин кеңеши',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Жаштар иштери',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Комитет жетекчиси',
         },
         {
            id: Math.random().toString(),
            title: 'Жигердүү жаштар',
         },
         {
            id: Math.random().toString(),
            title: 'Жаштар үчүн сунуштар',
         },
         {
            id: Math.random().toString(),
            title: 'Спорттук иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'Демилгелер',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Дин иштери',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мечиттер',
         },
         {
            id: Math.random().toString(),
            title: 'Медреселер',
         },
         {
            id: Math.random().toString(),
            title: 'Ажылык',
         },
         {
            id: Math.random().toString(),
            title: 'Айт',
         },
         {
            id: Math.random().toString(),
            title: 'Рамазан',
         },
         {
            id: Math.random().toString(),
            title: 'Намаз',
         },
         {
            id: Math.random().toString(),
            title: 'Адеп-ахлак',
         },
         {
            id: Math.random().toString(),
            title: 'Диний иш-чаралар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Айыл чарба',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мал чарба комитети',
         },
         {
            id: Math.random().toString(),
            title: 'Жайыт комитети',
         },
         {
            id: Math.random().toString(),
            title: 'Үрөөн чарбасы',
         },
         {
            id: Math.random().toString(),
            title: 'Мыйзамдар',
         },
         {
            id: Math.random().toString(),
            title: 'Кеңештер',
         },
         {
            id: Math.random().toString(),
            title: 'Иш-чаралар',
         },
      ],
   },
]
export const NAVIGATIONS_BOTTOM = [
   {
      id: Math.random().toString(),
      title: 'Маданият',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Маданият үйлөрү',
         },
         {
            id: Math.random().toString(),
            title: 'Музейлер',
         },
         {
            id: Math.random().toString(),
            title: 'Маданият кызматкерлери',
         },
         {
            id: Math.random().toString(),
            title: 'Маданий иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'Маданий сынактар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'ӨКМ',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'ӨКМ',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Тазалык',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Тазалык',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Атактуулар',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Атактуулар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Жаңылыктар жана кулактандыруулар',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Жаңылыктар жана кулактандыруу',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Камера',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Камера',
         },
      ],
   },
]
export const NAVIGATIONS_MOBILE = [
   {
      id: Math.random().toString(),
      title: 'Жетекчилик',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Өкмөт',
         },
         {
            id: Math.random().toString(),
            title: 'Аппарат',
         },
         {
            id: Math.random().toString(),
            title: 'Айылдык кеңеш',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Билим берүү',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мектептер',
         },
         {
            id: Math.random().toString(),
            title: 'Авто мектептер',
         },
         {
            id: Math.random().toString(),
            title: 'Ийримдер',
         },
         {
            id: Math.random().toString(),
            title: 'Олимпиадалар',
         },
         {
            id: Math.random().toString(),
            title: 'Бала бакчалар',
         },
         {
            id: Math.random().toString(),
            title: 'Иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'ЖРТ (ОРТ)',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Саламаттыкты сактоо',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Ооруканалар',
         },
         {
            id: Math.random().toString(),
            title: 'ФАПтар',
         },
         {
            id: Math.random().toString(),
            title: 'ОМС',
         },
         {
            id: Math.random().toString(),
            title: 'Дарыгердин кеңеши',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Жаштар иштери',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Комитет жетекчиси',
         },
         {
            id: Math.random().toString(),
            title: 'Жигердүү жаштар',
         },
         {
            id: Math.random().toString(),
            title: 'Жаштар үчүн сунуштар',
         },
         {
            id: Math.random().toString(),
            title: 'Спорттук иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'Демилгелер',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Дин иштери',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мечиттер',
         },
         {
            id: Math.random().toString(),
            title: 'Медреселер',
         },
         {
            id: Math.random().toString(),
            title: 'Ажылык',
         },
         {
            id: Math.random().toString(),
            title: 'Айт',
         },
         {
            id: Math.random().toString(),
            title: 'Рамазан',
         },
         {
            id: Math.random().toString(),
            title: 'Намаз',
         },
         {
            id: Math.random().toString(),
            title: 'Адеп-ахлак',
         },
         {
            id: Math.random().toString(),
            title: 'Диний иш-чаралар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Айыл чарба',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мал чарба комитети',
         },
         {
            id: Math.random().toString(),
            title: 'Жайыт комитети',
         },
         {
            id: Math.random().toString(),
            title: 'Үрөөн чарбасы',
         },
         {
            id: Math.random().toString(),
            title: 'Мыйзамдар',
         },
         {
            id: Math.random().toString(),
            title: 'Кеңештер',
         },
         {
            id: Math.random().toString(),
            title: 'Иш-чаралар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Маданият',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Маданият үйлөрү',
         },
         {
            id: Math.random().toString(),
            title: 'Музейлер',
         },
         {
            id: Math.random().toString(),
            title: 'Маданият кызматкерлери',
         },
         {
            id: Math.random().toString(),
            title: 'Маданий иш-чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'Маданий сынактар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'ӨКМ',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'ӨКМ',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Тазалык',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Тазалык',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Атактуулар',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Атактуулар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Жаңылыктар жана кулактандыруулар',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Жаңылыктар жана кулактандыруу',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Камера',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Камера',
         },
      ],
   },
]
