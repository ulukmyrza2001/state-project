import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import LogoKGZ from '../../../assets/images/logo_ky.png'
import madyLogo from '../../../assets/icons/logoMady.png'
import { Text } from '../../../styles/typography/typography'

const Footer = () => {
   return (
      <>
         <WrapperFooter>
            <InnerFooter>
               <WrapperLogo>
                  <a href="/">
                     <img src={madyLogo} alt="Logo..." />
                  </a>
                  <Text color="#ffffff">
                     Кара-Суйский р-н, Мады айылы <br />
                     715564 Ош Ошская обл.
                  </Text>
               </WrapperLogo>
               <WrapperBlock>
                  <a href="https://www.gov.kg/ky" target="_blunk">
                     <img src={LogoKGZ} alt="" />
                  </a>
                  <WrapperInforation>
                     <li>erkulow26@gmail.com</li>
                     <li>+996 (550) 75 55 95</li>
                     <li>Kyrgyzstan, Bishkek</li>
                  </WrapperInforation>
               </WrapperBlock>
            </InnerFooter>
         </WrapperFooter>
         <UnderFooter>
            <InnerUnderFooter>
               <span>Copyright © 2022 T.C. DD COMPANY. Все права защищены</span>
               {/* <WrapperIcons>
                  <li>
                     <a href="https://www.facebook.com/" target="_blnk">
                        <FaFacebookF color="#1771e6" />
                     </a>
                  </li>
                  <li>
                     <a href="https://twitter.com/twitter" target="_blnk">
                        <BsTwitter color="blue" />
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://www.youtube.com/watch?v=MFXyLTlkgxg"
                        target="_blnk"
                     >
                        <GrYoutube color="red" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/" target="_blnk">
                        <img
                           src="https://img.icons8.com/fluency/20/000000/instagram-new.png"
                           alt="instagram"
                        />
                     </a>
                  </li>
                  <li>
                     <a href="https://web.telegram.org/" target="_blnk">
                        <img
                           src="https://img.icons8.com/fluency/20/000000/telegram-app.png"
                           alt="telegram"
                        />
                     </a>
                  </li>
               </WrapperIcons> */}
            </InnerUnderFooter>
         </UnderFooter>
      </>
   )
}
const WrapperFooter = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   background-color: #333333;
   background-image: url(https://www.ankara.bel.tr/assets/images/footer-silhouette.png);
   background-repeat: no-repeat;
   background-position: bottom;
   background-size: 100%;
   position: relative;
`
const InnerFooter = styled.div`
   width: 80%;
   max-width: 1440px;
   height: auto;
   padding: 20px 0;
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   @media (max-width: 630px) {
      flex-direction: column;
      align-items: center;
   }
`
const WrapperBlock = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
`
const WrapperLogo = styled.div`
   display: flex;
   flex-direction: column;
   img {
      height: 80%;
      max-width: 150px;
      width: 100%;
      height: 100%;
   }
   @media (max-width: 630px) {
      margin-bottom: 50px;
   }
`

const WrapperInforation = styled.ul`
   width: 100%;
   margin-top: 50px;
   li {
      width: 245px;
      padding: 8px;
      border-radius: 4px;
      border: 1pz solid grey;
      box-shadow: 0 0 1px 1px gray;
      list-style: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
      color: #ffffff;
      margin-top: 15px;
      cursor: pointer;
   }
`

const UnderFooter = styled.div`
   width: 100%;
   height: 35px;
   display: flex;
   justify-content: center;
   background-color: #fff;
`
const WrapperIcons = styled.ul`
   display: flex;
   list-style: none;
   column-gap: 15px;
   li {
      cursor: pointer;
   }
`
const InnerUnderFooter = styled.div`
   width: 80%;
   max-width: 1440px;
   height: auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export default Footer
