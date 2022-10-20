import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
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
         if (e.clientY >= window.innerHeight - 30) setIsScroll(true)
         if (e.clientY < window.innerHeight - 190) setIsScroll(false)
      }
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', () => {
         scrollHandler()
      })
      return () => window.removeEventListener('scroll', scrollHandler)
   }, [])

   useEffect(() => {
      document.addEventListener('mousemove', mouseMoveHander)
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
   width: 100%;
   height: 70px;
   background-color: transparent;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 800px) {
      display: none;
   }
`
export default HeaderBottom
