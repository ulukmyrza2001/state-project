/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ImFacebook2 } from 'react-icons/im'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import { Title } from '../../styles/typography/typography'

const SOCIAL_ICONS = [<ImFacebook2 />, <BsInstagram />, <BsWhatsapp />]

const socialsRender = (socials) => {
   return SOCIAL_ICONS.map((icon, i) => (
      <Social key={i} to={socials[i]}>
         {icon}
      </Social>
   ))
}

const TemplateLeaderShipPages = ({
   headerTitle,
   children,
   socials,
   navigationTitle,
   navigation,
}) => {
   return (
      <Container>
         <GlobalStyle />
         <Header>
            <InnerHeader>
               <TitleHeader>{headerTitle}</TitleHeader>
               <Flex gap="7px" align="center">
                  {socialsRender(socials)}
               </Flex>
            </InnerHeader>
         </Header>
         <Flex
            margin="12px 0"
            width="100%"
            justify="center"
            mobileJustify="center"
         >
            <Flex
               mobileDirection="column"
               maxWidth="1440px"
               width="90%"
               justify="space-between"
               mobileAlign="center"
            >
               <NavigationBlock>
                  <NavigationTitle>{navigationTitle}</NavigationTitle>
                  <InnerNavigationLi>
                     {navigation.map((item, index) => (
                        <li key={index}>
                           {item.title}
                           <div>
                              <IoIosArrowForward />
                           </div>
                        </li>
                     ))}
                  </InnerNavigationLi>
               </NavigationBlock>
               <ContainerContent>{children}</ContainerContent>
            </Flex>
         </Flex>
      </Container>
   )
}

const TitleHeader = styled(Title)`
   @media (max-width: 800px) {
      font-size: 15px;
   }
`
const Container = styled.div`
   padding-top: 60px;
   width: 100%;
   margin: 0 auto;
   @media (max-width: 800px) {
      width: 100%;
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
const GlobalStyle = createGlobalStyle`
    body{
        background: #f1f1f1;
    }
`
const Social = styled(Link)`
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
const ContainerContent = styled.div`
   max-width: 70%;
   background: #ffffff;
   padding: 1rem;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
   @media (max-width: 800px) {
      max-width: 100%;
   }
`

const NavigationTitle = styled.div`
   padding: 15px 20px;
   background-color: #dddddd;
   border-radius: 8px 8px 0 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-weight: 400;
   font-style: normal;
   font-size: 20px;
`
const NavigationBlock = styled.div`
   width: 20%;
   min-width: 240px;
   border-radius: 10px;
   background-color: #ffffff;
   @media (max-width: 800px) {
      width: 100%;
   }
`
const InnerNavigationLi = styled.ul`
   list-style: none;
   li {
      padding: 15px 20px;
      border-bottom: 0 solid #f1f1f1;
      border-top: 0.1px solid #f1f1f1;
      cursor: pointer;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      :last-child {
         border-radius: 0 0 8px 8px;
      }
      div {
         display: flex;
         transition: 0.5s;
      }
      :hover {
         background-color: #dddddd;
      }
      :hover div {
         transform: translateX(3px);
      }
   }
`
export default TemplateLeaderShipPages
