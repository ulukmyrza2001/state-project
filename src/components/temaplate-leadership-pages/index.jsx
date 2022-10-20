/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Outlet, useLocation } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import { Title } from '../../styles/typography/typography'
import BreadCrumbs from '../UI/breadcrumbs/BreadCrumbs'
import SideBarNav from './SideBarNav'
import { findOneCategory, localstorage } from '../../utils/helpers/general'

const SOCIAL_ICONS = [<BsLinkedin />, <BsInstagram />, <BsWhatsapp />]

const socialsRender = (socials) => {
   return SOCIAL_ICONS.map((icon, i) => (
      <Social key={i} href={socials[i]} target="_blank">
         {icon}
      </Social>
   ))
}

const TemplateLeaderShipPages = ({
   socials = [
      'https://www.linkedin.com/in/ulukmyrza-zhanybekov-54905b23a/',
      'https://www.instagram.com/erkulow',
      'https://api.whatsapp.com/send/?phone=996554785515&text&type=phone_number&app_absent=0',
   ],
}) => {
   const { pathname } = useLocation()

   const breadCrumbLinks = localstorage.get('link')

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '!#',
         name: breadCrumbLinks?.title,
      },
   ]

   return (
      <Container>
         <GlobalStyle />
         <Header>
            <InnerHeader>
               <HeaderLeft>
                  <TitleHeader>{`Мады айыл өкмөтү / ${
                     findOneCategory(pathname).title
                  }`}</TitleHeader>
                  <BreadCrumbs pathsArray={pathsArray} />
               </HeaderLeft>
               <Flex gap="7px" align="center">
                  {socialsRender(socials)}
               </Flex>
            </InnerHeader>
         </Header>
         <HeaderRight>
            <WrapperContent>
               <SideBarNav />
               <ContainerContent>
                  <Outlet />
               </ContainerContent>
            </WrapperContent>
         </HeaderRight>
      </Container>
   )
}

const Container = styled.div`
   padding-top: 60px;
   width: 100%;
   margin: 0 auto;
`
const TitleHeader = styled(Title)`
   font-weight: bold;
   @media (max-width: 800px) {
      font-size: 15px;
   }
   @media (max-width: 500px) {
      font-size: 13px;
      margin: 5px 0;
   }
`
const Header = styled.div`
   width: 100%;
   padding: 0.7rem 1rem;
   background-color: #ffffff;
`
const InnerHeader = styled.div`
   max-width: 1140px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
   }
`
const HeaderLeft = styled(Flex)`
   width: 100%;
   flex-direction: column;
   @media (max-width: 800px) {
      align-items: center;
   }
`
const HeaderRight = styled(Flex)`
   margin: 12px 0;
   width: 100%;
   justify-content: center;
`
const GlobalStyle = createGlobalStyle`
    body{
        background: #f1f1f1;
    }
`
const Social = styled.a`
   padding: 0.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #212529;
   border: 1px solid #c2ccd8;
   border-radius: 5px;
   font-size: 15px;
   :hover {
      color: #536577;
   }
`
const WrapperContent = styled(Flex)`
   max-width: 1380px;
   width: 100%;
   justify-content: space-between;
   align-items: flex-start;
   @media (max-width: 800px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
   }
`
const ContainerContent = styled.div`
   max-width: 80%;
   width: 100%;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
   margin-bottom: 20px;
   @media (max-width: 800px) {
      min-width: 100%;
      max-width: 100%;
   }
`

export default TemplateLeaderShipPages
