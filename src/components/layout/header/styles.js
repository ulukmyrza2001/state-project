/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { CgMenuRightAlt } from 'react-icons/cg'

export const MenuBurger = styled(CgMenuRightAlt)`
   width: 80px;
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
export const Logo = styled.img`
   width: ${({ isScroll }) => (isScroll ? '80px' : '115px')};
   height: 80%;
   object-fit: cover;
   margin-bottom: 10px;
   @media (max-width: 1200px) {
      width: 80px;
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
   display: flex;
   align-items: center;
   gap: 3px;
   font-size: 14px;
   position: relative;
   color: white;
   height: 100%;
   padding: 0 0.4rem;
   cursor: pointer;
   span {
      display: flex;
      align-items: center;
      ::before {
         content: '|';
         color: #ffffff44;
         margin: 0 3px 3px 3px;
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
      font-size: 8px;
      line-height: 15px;
      text-align: center;
   }
`
export const WindowMenu = styled.div`
   width: max-content;
   padding: ${({ windowMenu }) => (windowMenu ? '0.4rem' : '0rem')};
   height: ${({ windowMenu }) => (windowMenu ? 'fit-content' : '0px')};
   pointer-events: ${({ windowMenu }) => (windowMenu ? '' : 'none')};
   position: absolute;
   bottom: ${({ isBottom }) => (isBottom ? '100%' : '0')};
   top: ${({ isBottom }) => (isBottom ? '' : '100%')};
   left: 0;
   background-color: white;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   transition: all 0.1;
`
export const InnerWindowMenu = styled.div`
   width: 100%;
   height: 100%;
`
export const List = styled.ul`
   display: flex;
   list-style: none;
   height: 100%;
   align-items: center;
   box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.6);
   box-shadow: ${({ headerBackground }) =>
      headerBackground ? 'none' : '  2px 2px 40px rgba(0, 0, 0, 0.6)'};
   border-bottom-left-radius: ${({ isBottom }) => (isBottom ? '0' : '10px')};
   border-bottom-right-radius: ${({ isBottom }) => (isBottom ? '0' : '10px')};
   border-top-left-radius: ${({ isBottom }) => (!isBottom ? '0' : '10px')};
   border-top-right-radius: ${({ isBottom }) => (!isBottom ? '0' : '10px')};
   background: ${({ headerBackground }) =>
      headerBackground
         ? 'transparent'
         : ' linear-gradient(-45deg, #1b1374, #011835)'};
   animation: gradientBG 15s ease infinite;

   @keyframes gradientBG {
      0% {
         background-position: 0% 50%;
      }
      50% {
         background-position: 100% 50%;
      }
      100% {
         background-position: 0% 50%;
      }
   }

   @media (max-width: 800px) {
      display: none;
   }
`
