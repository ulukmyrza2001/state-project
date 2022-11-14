import React from 'react'
import styled from '@emotion/styled'
import videoMady from '../../assets/video/mady.MP4'
import CarouselComponent from './CarouselComponent'
import TimePrayer from './time-prayer'
import News from './news/News'
import GlobalNews from './news/GlobalNews'

const MainPage = () => {
   return (
      <>
         <MainStyled>
            <VideoBackground
               src={videoMady}
               autoPlay
               auto
               muted
               loop
               type="video/mp4"
               playsInline
            />
            <Effect>
               <CarouselComponent />
            </Effect>
         </MainStyled>
         <NewsContent>
            <News />
         </NewsContent>
         <NewsContent>
            <GlobalNews />
         </NewsContent>
         {/* <Weather /> */}
         <TimePrayer />
      </>
   )
}
const NewsContent = styled.div`
   width: 100%;
   margin: auto;
   padding: 1rem;
`
const MainStyled = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
`
const Effect = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
   height: 100vh;
   background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 26%,
      rgba(0, 0, 0, 0) 100%
   );
   display: flex;
   justify-content: center;
   align-items: center;
`
const VideoBackground = styled.video`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 0;
   width: 100%;
   height: 100vh;
   object-fit: cover;
`

export default MainPage
