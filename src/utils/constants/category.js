import uuid from 'react-uuid'
import {
   MdOutlineManageAccounts,
   MdOutlineCleaningServices,
} from 'react-icons/md'
import { IoIosSchool } from 'react-icons/io'
import { FaHandHoldingMedical, FaPeopleCarry } from 'react-icons/fa'
import { HiMoon } from 'react-icons/hi'
import { GiCow, GiNewspaper } from 'react-icons/gi'
import { AiFillBank, AiFillStar } from 'react-icons/ai'
import { TbFiretruck } from 'react-icons/tb'
import { CLIENT_ROUTES } from './routes'

const { LEADERSHIP, education, healthCare } = CLIENT_ROUTES

export const NAVIGATIONS = [
   {
      id: uuid(),
      title: 'Жетекчилик',
      icon: <MdOutlineManageAccounts fontSize={20} />,
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Өкмөт',
            path: GOVERNMENT.path,
         },
         {
            id: uuid(),
            title: 'Окмот аппараты',
            path: LEADERSHIP.GOVERNMENT_APPARATUS.path,
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
            id: uuid(),
            title: 'Мектептер',
            path: education.schools.path,
         },
         {
            id: uuid(),
            title: 'Авто мектептер',
            path: education.drivingSchool.path,
         },
         {
            id: uuid(),
            title: 'Ийримдер',
            path: education.iyrymder.path,
         },
         {
            id: uuid(),
            title: 'Олимпиадалар',
            path: education.olympiads.path,
         },
         {
            id: uuid(),
            title: 'Бала бакчалар',
            path: education.kindergartens.path,
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
      id: uuid(),
      title: 'Саламаттыкты сактоо',
      icon: <FaHandHoldingMedical fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Ооруканалар',
            path: healthCare.hospitals.path,
         },
         {
            id: uuid(),
            title: 'ФАПтар',
            path: healthCare.paramedicPoint.path,
         },
         {
            id: uuid(),
            title: 'ОМС',
            path: healthCare.OMS.path,
         },
         {
            id: Math.random().toString(),
            title: 'Дарыгердин кеңеши',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Жаштар иштери',
      icon: <FaPeopleCarry fontSize={20} />,
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
      id: uuid(),
      title: 'Дин иштери',
      icon: <HiMoon fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Мечиттер',
         },
         {
            id: uuid(),
            title: 'Медреселер',
         },
         {
            id: uuid(),
            title: 'Ажылык',
         },
         {
            id: uuid(),
            title: 'Айт',
         },
         {
            id: uuid(),
            title: 'Рамазан',
         },
         {
            id: uuid(),
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
      id: uuid(),
      title: 'Айыл чарба',
      icon: <GiCow fontSize={20} />,
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
            id: uuid(),
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
      id: uuid(),
      title: 'Маданият',
      icon: <AiFillBank fontSize={20} />,
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Маданият үйлөрү',
         },
         {
            id: uuid(),
            title: 'Музейлер',
         },
         {
            id: uuid(),
            title: 'Маданият кызматкерлери',
         },
         {
            id: Math.random().toString(),
            title: 'Маданий иш-чаралар',
         },
         {
            id: uuid(),
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
      id: uuid(),
      title: 'Тазалык',
      icon: <MdOutlineCleaningServices fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Тазалык',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Атактуулар',
      icon: <AiFillStar fontSize={20} />,
      innerList: [
         {
            id: uuid(),
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
      id: uuid(),
      title: 'Камера',
      icon: <GiNewspaper fontSize={20} />,
      innerList: [
         {
            id: uuid(),
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
            path: LEADERSHIP.GOVERNMENT_APPARATUS.path,
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
