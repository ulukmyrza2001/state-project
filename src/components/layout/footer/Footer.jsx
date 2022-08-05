import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ReactComponent as GERB } from '../../../assets/svg/GERB.svg'

const BilimBeruuNav = [
   {
      id: 1,
      title: 'Мектептер',
   },
   {
      id: 2,
      title: 'Авто мектептер',
   },
   {
      id: 3,
      title: 'Ийримдер',
   },
   {
      id: 4,
      title: 'Олимпиадалар',
   },
   {
      id: 5,
      title: 'Бала бакчалар',
   },
   {
      id: 6,
      title: 'Иш чаралар',
   },
   {
      id: 7,
      title: 'ОРТ',
   },
]
const SalamattyktySaktooNav = [
   {
      id: 1,
      title: 'Ооруканалары',
   },
   {
      id: 2,
      title: 'Фаптар',
   },
   {
      id: 3,
      title: 'Омс',
   },
   {
      id: 4,
      title: 'Дарыгердин кенеши',
   },
]
const JashtarIshteriNav = [
   {
      id: 1,
      title: 'Коммиттет жетекчиси',
   },
   {
      id: 2,
      title: 'Жигердуу жаштар',
   },
   {
      id: 3,
      title: 'Жаштар учун сунуштар',
   },
   {
      id: 4,
      title: 'Спорттук  иш чаралар',
   },
   {
      id: 5,
      title: 'Инициативалар',
   },
]

const Footer = () => {
   return (
      <>
         <WrapperFooter>
            <InnerFooter>
               <NavBlock>
                  <h2>БИЛИМ БЕРУУ</h2>
                  {BilimBeruuNav.map((item) => (
                     <ul key={item.id}>
                        <li>
                           <div>
                              <IoIosArrowRoundForward fontSize="20px" />
                           </div>
                           <a href="/"> {item.title}</a>
                        </li>
                     </ul>
                  ))}
               </NavBlock>
               <NavBlock>
                  <h2>САЛАМАТТЫКТЫ САКТОО</h2>
                  {SalamattyktySaktooNav.map((item) => (
                     <ul key={item.id}>
                        <li>
                           <div>
                              <IoIosArrowRoundForward fontSize="20px" />
                           </div>
                           <a href="/">{item.title}</a>
                        </li>
                     </ul>
                  ))}
               </NavBlock>
               <NavBlock>
                  <h2>Жаштар Иштери</h2>
                  {JashtarIshteriNav.map((item) => (
                     <ul key={item.id}>
                        <li>
                           <div>
                              <IoIosArrowRoundForward fontSize="20px" />
                           </div>
                           <a href="/">{item.title}</a>
                        </li>
                     </ul>
                  ))}
               </NavBlock>
               <NavBlock>
                  <h2>КАМЕРА</h2>
                  {BilimBeruuNav.map((item) => (
                     <ul key={item.id}>
                        <li>
                           <div>
                              <IoIosArrowRoundForward fontSize="20px" />
                           </div>
                           <a href="/">{item.title}</a>
                        </li>
                     </ul>
                  ))}
               </NavBlock>
               <WrapperBlock>
                  <WrapperLogo>
                     <span>Ulukmyrza, BekBolsun, BaIaaly, BeyBars</span>
                     <GERB />
                  </WrapperLogo>
                  <WrapperInforation>
                     <li>erkulow26@gmail.com</li>
                     <li>+996 (550) 500 556</li>
                     <li>Kyrgyzstan, Bishkek</li>
                  </WrapperInforation>
               </WrapperBlock>
            </InnerFooter>
         </WrapperFooter>
         <UnderFooter>
            <InnerUnderFooter>
               <span>Copyright © 2022 T.C. GOS PROJECT</span>
               <WrapperIcons>
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
               </WrapperIcons>
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
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 25px;
`
const NavBlock = styled.div`
   h2 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 60px;
      color: #ffffff;
   }
   ul {
      list-style: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
      li {
         margin: 10px 0;
         gap: 5px;
         cursor: pointer;
         display: flex;
         align-items: center;
         div {
            display: flex;
            transition: 0.4s;
         }
         :hover div {
            transform: translateX(4px);
            color: #ff9500;
         }
         :hover a {
            color: #ff9500;
         }
         a {
            text-decoration: none;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
            color: #ffffff;
            transition: 0.4s;
         }
      }
   }
`
const WrapperBlock = styled.div`
   width: 250px;
   padding: 65px 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
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
      :hover ul {
         border-color: #ff9500;
      }
   }
`
const WrapperLogo = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 100%;
   span {
      font-family: 'Cairo', sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      color: #ffffff;
      display: flex;
      text-align: end;
      margin-right: 5px;
   }
   div {
      width: 170px;
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
