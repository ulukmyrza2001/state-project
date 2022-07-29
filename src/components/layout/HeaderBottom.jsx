/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import WindowMenuImage from '../../assets/images/windowMenu.webp'
import Button from '../UI/buttons/Button'

const navigations = [
   {
      id: Math.random().toString(),
      title: 'Маданият',
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
      title: 'МЧС',
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
      title: 'Тазалык',
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
      title: 'Атактуулар',
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
      title: 'Жанылыктар жана кулактандыруулар',
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
      title: 'Камера',
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

const HeaderBottom = () => {
   const [windowMenu, setWindowMenu] = useState(false)
   const [is, setIs] = useState({ innerList: [] })

   const visibleMenuHandler = () => setWindowMenu(true)

   const hideMenuHandler = () => setWindowMenu(false)

   return (
      <HeaderStyled windowMenu={windowMenu}>
         <StyledFlag />
         <List>
            {navigations.map((item) => (
               <NavButton
                  key={item.id}
                  id={item.id}
                  onMouseMove={(e) => {
                     visibleMenuHandler()
                     setIs(
                        navigations.find((el) => el.id === e.currentTarget.id)
                     )
                  }}
                  onMouseOut={hideMenuHandler}
               >
                  {item.title}
                  <span />
                  <div>
                     <IoIosArrowDown fontSize={20} />
                  </div>
               </NavButton>
            ))}
         </List>
         <StyledFlag />
         <WindowMenu
            onMouseMove={visibleMenuHandler}
            onMouseOut={hideMenuHandler}
            windowMenu={windowMenu}
            image={WindowMenuImage}
         >
            <div>
               {is.innerList.map((el) => (
                  <Button key={el.id}>{el.title}</Button>
               ))}
            </div>
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
   img {
      border-radius: 50%;
      width: 60px;
      height: 80%;
      object-fit: cover;
   }
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
   div {
      display: flex;
      align-items: center;
      margin-top: 2px;
   }
   :hover {
      background-color: white;
      color: #1e336f;
   }
   :hover div {
      transform: rotate(180deg);
   }
`

const WindowMenu = styled.div`
   width: 100%;
   height: 400px;
   position: absolute;
   top: -400px;
   background: url(${({ image }) => image});
   background-position: center;
   background-size: cover;
   display: ${({ windowMenu }) => (windowMenu ? 'block' : 'none')};
   div {
      width: 100%;
      height: 100%;
      padding: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
   }
`
const HeaderStyled = styled.header`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 70px;
   background-color: ${({ windowMenu }) =>
      windowMenu ? '#011835' : 'transparent'};
   display: flex;
   align-items: center;
   justify-content: center;
`
const List = styled.ul`
   display: flex;
   list-style: none;
   height: 100%;
   align-items: center;
   background-color: #1e336f;
`

export default HeaderBottom
