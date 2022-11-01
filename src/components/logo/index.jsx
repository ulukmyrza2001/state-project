import React from 'react'
import styled from 'styled-components'
import madyLogo from '../../assets/icons/logoMady.png'
import { Title } from '../../styles/typography/typography'
import AuthorPhoto from '../../assets/images/author.jpg'

const Logotip = ({ isScroll }) => {
   return (
      <Wrapper>
         <Logo isScroll={isScroll} src={madyLogo} />
         <AboutAuthor>
            <Title size="14px">
               <b>Логотиптин автору</b>
            </Title>
            <Img src={AuthorPhoto} />
            <Text size="14px">Муратов Абдыкерим Аттокурович</Text>
         </AboutAuthor>
      </Wrapper>
   )
}
const Img = styled.img`
   object-fit: cover;
   width: 85%;
`
const Text = styled(Title)`
   white-space: nowrap;
   @media (max-width: 430px) {
      font-size: 11px;
   }
`
const Wrapper = styled.div`
   position: relative;
   :hover div {
      display: block;
   }
`
const AboutAuthor = styled.div`
   position: absolute;
   text-align: center;
   top: 100%;
   left: 50%;
   display: flex;
   padding: 0.6rem;
   transform: translateX(-50%);
   background-color: white;
   box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
   border-radius: 8px;
   display: none;
   animation: yes 0.5s;
   @keyframes yes {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
   ::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 18px solid white;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
   }
   @media screen and (max-width: 1000px) {
      left: 110%;
      ::after {
         left: 20%;
      }
   }
   @media (max-width: 730px) {
      left: 100%;
      ::after {
         left: 10%;
      }
   }
`
const Logo = styled.img`
   width: ${({ isScroll }) => (isScroll ? '80px' : '115px')};
   height: 80%;
   object-fit: cover;
   margin-bottom: 10px;
   @media (max-width: 1200px) {
      width: 90px;
   }
   @media (max-width: 800px) {
      margin-right: 30px;
      margin-top: 5px;
   }
`
export default Logotip
