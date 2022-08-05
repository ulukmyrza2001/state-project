import React from 'react'
import styled from 'styled-components'

const MainPage = () => {
   return (
      <MainStyled>
         <VideoBackground autoPlay muted loop id="myVideo" />
      </MainStyled>
   )
}
const MainStyled = styled.div`
   width: 100%;
   height: ${window.innerHeight};
   position: relative;
   z-index: -1;
`
const VideoBackground = styled.video`
   position: fixed;
   left: 60%;
   top: 30%;
   transform: translate(-50%, -50%);
   min-width: 100%;
   min-height: 100%;
   object-position: center;
   object-fit: cover;
`

export default MainPage
