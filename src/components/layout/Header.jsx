/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'
import WindowMenuImage from '../../assets/images/windowMenu.webp'
import flag from '../../assets/icons/Flag_of_Kyrgyzstan.svg'
import gerb from '../../assets/icons/GERB.svg'

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
   const windowMenuRef = useRef()
   const headerRef = useRef()
   const [is, setIs] = useState({ innerList: [] })

   const visibleMenuHandler = (id) => {
      windowMenuRef.current.style.display = 'block'
      headerRef.current.style.background = '#1e336f'
      setIs(navigations.find((el) => el.id === id))
   }
   const visible = () => {
      windowMenuRef.current.style.display = 'block'
      headerRef.current.style.background = '#1e336f'
   }
   const hideMenuHandler = () => {
      windowMenuRef.current.style.display = 'none'
      headerRef.current.style.background = 'transparent'
   }

   return (
      <HeaderStyled ref={headerRef}>
         <StyledFlag>
            <img src={flag} alt="" />
         </StyledFlag>
         <List>
            {navigations.map((item) => (
               <NavButton
                  key={item.id}
                  id={item.id}
                  onMouseMove={(e) => visibleMenuHandler(e.currentTarget.id)}
                  onMouseOut={(e) => hideMenuHandler(e.currentTarget.id)}
               >
                  {item.title}
                  <span />
                  <div>
                     <IoIosArrowDown fontSize={20} />
                  </div>
               </NavButton>
            ))}
         </List>
         <StyledFlag>
            <img src={gerb} alt="" />
         </StyledFlag>
         <WindowMenu
            onMouseMove={visible}
            onMouseOut={hideMenuHandler}
            ref={windowMenuRef}
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

const WindowMenu = styled.div`
   width: 100%;
   height: 400px;
   position: absolute;
   bottom: -400px;
   background: url(${({ image }) => image});
   background-position: center;
   background-size: cover;
   display: none;
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
   position: relative;
   width: 100%;
   height: 70px;
   background-color: transparent;
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
const NavButton = styled.li`
   font-size: 14px;
   background-color: #1e336f;
   color: white;
   text-transform: uppercase;
   box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
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
   :hover ${WindowMenu} {
      display: block;
   }
   :hover {
      background-color: white;
      color: #1e336f;
   }
   :hover div {
      transform: rotate(180deg);
   }
`
const Button = styled.button`
   border: none;
   background-color: white;
   border-radius: 6px;
   color: #302e2e;
   text-transform: uppercase;
   font-size: 20px;
   padding: 1em;
   border-bottom: 3px solid #1e336f;
`

export default Header
