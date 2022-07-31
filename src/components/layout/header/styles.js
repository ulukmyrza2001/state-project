/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { CgMenuGridR } from 'react-icons/cg'
import WindowMenuImage from '../../../assets/images/windowMenu.webp'

export const MenuBurger = styled(CgMenuGridR)`
   font-size: 40px;
   color: white;
   cursor: pointer;
   opacity: 0.7;
   display: none;
   :hover {
      opacity: 1;
   }
   @media (max-width: 800px) {
      display: block;
   }
`

export const StyledFlag = styled.div`
   max-width: 150px;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 800px) {
      max-width: 90px;
   }
`
export const Img = styled.img`
   border-radius: 50%;
   width: ${({ isScroll }) => (isScroll ? '50px' : '75px')};
   height: 80%;
   object-fit: cover;
   @media (max-width: 1200px) {
      width: 54px;
   }
`
export const NavIconWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-top: 2px;
`
export const NavButton = styled.li`
   font-size: 12px;
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
         @media (max-width: 1200px) {
            margin: 0 7px 3px 7px;
         }
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
   @media (max-width: 1200px) {
      font-size: 10px;
      line-height: 15px;
      text-align: center;
   }
`

export const WindowMenu = styled.div`
   width: 100%;
   height: 400px;
   position: absolute;
   bottom: ${({ isBottom }) => (isBottom ? '' : '-400px')};
   top: ${({ isBottom }) => (isBottom ? '-400px' : '')};
   background: url(${WindowMenuImage});
   background-position: center;
   background-size: cover;
   display: ${({ windowMenu }) => (windowMenu ? 'block' : 'none')};
`
export const InnerWindowMenu = styled.div`
   width: 100%;
   height: 100%;
   padding: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 10px;
`
export const List = styled.ul`
   display: flex;
   list-style: none;
   height: 100%;
   align-items: center;
   background-color: #011835;
   @media (max-width: 800px) {
      display: none;
   }
`
