import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import { StyledFlag } from './styles'
import Navigations from './Navigations'
import { scrollHeader } from '../../../utils/helpers/general'

const HeaderBottom = () => {
   const [isScroll, setIsScroll] = useState(true)

   const scrollHandler = useCallback(() => {
      if (scrollHeader()) setIsScroll(false)
      else setIsScroll(true)
   })

   const mouseMoveHander = useCallback((e) => {
      if (scrollHeader()) {
         if (e.clientY >= 756) setIsScroll(true)
         if (e.clientY < 700) setIsScroll(false)
      }
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', () => {
         scrollHandler()
      })
      return () => window.removeEventListener('scroll', scrollHandler)
   }, [])

   useEffect(() => {
      window.addEventListener('mousemove', mouseMoveHander)
      return () => {
         window.removeEventListener('mousemove', mouseMoveHander)
      }
   }, [mouseMoveHander])

   return (
      <HeaderStyled isScroll={isScroll}>
         <StyledFlag />
         <Navigations isBottom navigations={NAVIGATIONS_BOTTOM} />
         <StyledFlag />
      </HeaderStyled>
   )
}

const HeaderStyled = styled.header`
   position: fixed;
   transition: ${({ isScroll }) => (isScroll ? 'all 0.2s' : 'all 1.4s')};
   z-index: 3;
   bottom: ${({ isScroll }) => (isScroll ? '0' : '-100%')};
   /* bottom: 0; */
   /* left: ${({ isScroll }) => (isScroll ? '20px' : '')}; */
   /* width: ${({ isScroll }) => (isScroll ? '60px' : '100%')}; */
   width: 100%;
   height: 70px;
   background-color: transparent;
   /* height: ${({ isScroll }) => (isScroll ? '50px' : '70px')}; */
   /* background-color: ${({ isScroll }) =>
      isScroll ? '#081646' : 'transparent'}; */
   border-radius: 10px;
   /* box-shadow: ${({ isScroll }) =>
      isScroll ? '6px 6px 10px rgba(0,0,0,0.4)' : 'none'}; */
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
