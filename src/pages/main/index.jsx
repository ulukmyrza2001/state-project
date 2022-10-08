import React from 'react'
import styled from 'styled-components'
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
         <Effect />
      </MainStyled>
   )
}
const MainStyled = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
   /* background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   background-color: black;
   background: linear-gradient(
      90deg,
      rgba(23, 15, 42, 0.85) 0%,
      rgba(23, 15, 42, 0.3) 100%
   );  */
`
const Effect = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
   height: 100vh;
   background: rgba(23, 15, 42, 0.5);
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
