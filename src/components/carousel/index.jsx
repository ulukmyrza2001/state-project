/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import './carousel.css'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { BsArrowRight } from 'react-icons/bs'
import { Flex } from '../../styles/style-for-positions/style'
import { CLIENT_ROUTES } from '../../utils/constants/routes'
import { converterDate, localstorage } from '../../utils/helpers/general'

const delay = 5500

const breadCrumb = {
   id: uuid(),
   title: 'Жаңылыктар жана кулактандыруулар (Мамлекеттик)',
   path: CLIENT_ROUTES.newsAndAnnouncementsState.newsAndAnnouncements.path,
}

const Slideshow = ({ news = [] }) => {
   const navigate = useNavigate()
   const [index, setIndex] = useState(0)
   const timeoutRef = useRef(null)

   function resetTimeout() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current)
      }
   }

   useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(
         () =>
            setIndex((prevIndex) =>
               prevIndex === news.length - 1 ? 0 : prevIndex + 1
            ),
         delay
      )

      return () => {
         resetTimeout()
      }
   }, [index])

   const navigateToInnerPageNews = (id) => {
      navigate(
         `${CLIENT_ROUTES.newsAndAnnouncementsState.newsAndAnnouncements.path}/${id}`
      )
      localstorage.save('link', breadCrumb)
   }

   return (
      <div className="slideshow">
         <Flex width="100%" margin="4rem 0 4rem 0">
            <TitleSection>Жаңылыктар жана кулактандыруулар</TitleSection>
         </Flex>
         <GlobalStyle />
         <Flex direction="column" gap="0">
            <div
               className="slideshowSlider"
               style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
               {news.map((item, index) => (
                  <Div
                     photo={item.fileInformation.photo}
                     className="slide"
                     key={index}
                  >
                     <Flex
                        className="content"
                        direction="column"
                        width="100%"
                        gap="10px"
                     >
                        <h1>{item.title}</h1>
                        <p>{converterDate(item.dateOfNewAnnouncement)}</p>
                        <NavigateDiv
                           onClick={() => navigateToInnerPageNews(item.id)}
                        >
                           Кененирээк <BsArrowRight />
                        </NavigateDiv>
                     </Flex>
                     <Effect />
                  </Div>
               ))}
            </div>
            <div className="slideshowDots">
               {news.map((_, idx) => (
                  <div
                     key={idx}
                     className={`slideshowDot${index === idx ? ' active' : ''}`}
                     onClick={() => {
                        setIndex(idx)
                     }}
                  />
               ))}
            </div>
         </Flex>
      </div>
   )
}
const GlobalStyle = createGlobalStyle`
    body{
        background-color: white;
    }
`
const NavigateDiv = styled.span`
   color: white;
   text-decoration: underline;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 4px;
   opacity: 0.7;
   :hover {
      opacity: 1;
      svg {
         transform: translateX(10px);
      }
   }
`
const Div = styled.div`
   background: url(${({ photo }) => photo});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 600px;
   position: relative;
   h1,
   p {
      color: white;
      max-width: 99%;
   }
   .content {
      position: absolute;
      bottom: 10px;
      left: 10px;
      z-index: 2;
   }
   @media screen and (max-width: 800px) {
      h1 {
         font-size: 19px;
      }
   }
`
const TitleSection = styled.h1`
   color: black;
   @media screen and (max-width: 800px) {
      font-size: 19px;
   }
`
const Effect = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
   height: 100%;
   background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 26%,
      rgba(0, 0, 0, 0) 100%
   );
   display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 800px) {
      align-items: flex-start;
   }
`
export default Slideshow
