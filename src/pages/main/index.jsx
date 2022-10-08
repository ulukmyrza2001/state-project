import React from 'react'
import styled from '@emotion/styled'
import videoMady from '../../assets/video/mady.MP4'

const MainPage = () => {
   return (
      <MainStyled>
         <VideoBackground
            src={videoMady}
            autoPlay
            muted
            loop
            type="video/mp4"
         />
         <Effect>
            <Text>
               Эл журттун ажырагыс бүтүндүгү жана бир жакадан баш, бир жеңден
               кол чыгарган ички биримдиги.
            </Text>
         </Effect>
      </MainStyled>
   )
}
const Text = styled.h1`
   color: white;
   font-size: 50px;
   max-width: 70%;
   text-align: center;
   @media screen and (max-width: 800px) {
      max-width: 90%;
      font-size: 30px;
      margin-top: 200px;
   }
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
   background: #011835c5;
   display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width: 800px) {
      align-items: flex-start;
   }
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
