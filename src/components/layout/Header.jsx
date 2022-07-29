/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import WindowMenuImage from '../../assets/images/windowMenu.webp'
import flag from '../../assets/icons/Flag_of_Kyrgyzstan.svg'
import gerb from '../../assets/icons/GERB.svg'
import Button from '../UI/buttons/Button'
import { scrollHeader } from '../../utils/helpers/general'

const navigations = [
   {
      id: Math.random().toString(),
      title: 'Жетекчилик',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Окмот',
         },
         {
            id: Math.random().toString(),
            title: 'Аппарат',
         },
         {
            id: Math.random().toString(),
            title: 'Айылдык кенеш',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Билим беруу',
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
            title: 'Иш чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'ОРТ',
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
            title: 'Дарыгердин кенеши',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Жаштар иштери',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Коммиттет жетекчиси',
         },
         {
            id: Math.random().toString(),
            title: 'Жигердуу жаштар',
         },
         {
            id: Math.random().toString(),
            title: 'Жаштар учун сунуштар',
         },
         {
            id: Math.random().toString(),
            title: 'Спорттук иш чаралар',
         },
         {
            id: Math.random().toString(),
            title: 'Инициативалар',
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
            title: 'Адеп ахлак',
         },
         {
            id: Math.random().toString(),
            title: 'Диний иш чаралар',
         },
      ],
   },
   {
      id: Math.random().toString(),
      title: 'Айыл чарба',
      innerList: [
         {
            id: Math.random().toString(),
            title: 'Мал чарба коммиттети',
         },
         {
            id: Math.random().toString(),
            title: 'Жайыт коммиттети',
         },
         {
            id: Math.random().toString(),
            title: 'Уроон чарбасы',
         },
         {
            id: Math.random().toString(),
            title: 'Мыйзамдар',
         },
         {
            id: Math.random().toString(),
            title: 'Кенештер',
         },
         {
            id: Math.random().toString(),
            title: 'Иш чаралар',
         },
      ],
   },
]

const Header = () => {
   const [headerBackground, setHeaderBackground] = useState(false)
   const [windowMenu, setWindowMenu] = useState(false)
   const [sections, setSections] = useState({ innerList: [] })

   window.addEventListener('scroll', () => {
      if (scrollHeader()) setHeaderBackground(true)
      else setHeaderBackground(false)
   })

   return (
      <HeaderStyled windowMenu={windowMenu} headerBackground={headerBackground}>
         <StyledFlag>
            <Img src={gerb} alt="" />
         </StyledFlag>
         <List>
            {navigations.map((item) => (
               <NavButton
                  key={item.id}
                  id={item.id}
                  onMouseMove={(e) => {
                     setWindowMenu(true)
                     setSections(
                        navigations.find((el) => el.id === e.currentTarget.id)
                     )
                  }}
                  onMouseOut={() => setWindowMenu(false)}
               >
                  {item.title}
                  <span />
                  <NavIconWrapper>
                     <IoIosArrowDown fontSize={20} />
                  </NavIconWrapper>
               </NavButton>
            ))}
         </List>
         <StyledFlag>
            <Img src={flag} alt="" />
         </StyledFlag>
         <WindowMenu
            onMouseMove={() => setWindowMenu(true)}
            onMouseOut={() => setWindowMenu(false)}
            windowMenu={windowMenu}
         >
            <InnerWindowMenu>
               {sections.innerList.map((el) => (
                  <Button key={el.id}>{el.title}</Button>
               ))}
            </InnerWindowMenu>
         </WindowMenu>
      </HeaderStyled>
   )
}

const StyledFlag = styled.div`
   max-width: 150px;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Img = styled.img`
   border-radius: 50%;
   width: 75px;
   height: 80%;
   object-fit: cover;
`
const NavIconWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-top: 2px;
`
const NavButton = styled.li`
   font-size: 14px;
   background-color: #011835;
   color: white;
   text-transform: uppercase;
   box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
   height: 100%;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   cursor: pointer;
   span {
      display: flex;
      align-items: center;
      ::before {
         content: '|';
         color: #ffffff44;
         margin: 0 5px 3px 5px;
      }
   }
   :hover span::before {
      color: #1e346f53;
   }
   :hover {
      background-color: white;
      color: #1e336f;
   }
   :hover ${NavIconWrapper} {
      transform: rotate(180deg);
   }
`

const WindowMenu = styled.div`
   width: 100%;
   height: 400px;
   position: absolute;
   bottom: -400px;
   background: url(${WindowMenuImage});
   background-position: center;
   background-size: cover;
   display: ${({ windowMenu }) => (windowMenu ? 'block' : 'none')};
`
const InnerWindowMenu = styled.div`
   width: 100%;
   height: 100%;
   padding: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px;
`
const HeaderStyled = styled.header`
   position: fixed;
   width: 100%;
   height: 90px;
   background-color: ${({ headerBackground, windowMenu }) =>
      windowMenu || headerBackground ? '#011835' : 'transparent'};
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1;
`
const List = styled.ul`
   display: flex;
   list-style: none;
   height: 100%;
   align-items: center;
   background-color: #011835;
`

export default Header
