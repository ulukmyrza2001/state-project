import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import videoMady from '../../assets/video/mady.MP4'
import CarouselComponent from './CarouselComponent'
import Slideshow from '../../components/carousel'
import { clientGetData } from '../../store/client-slice'
import TimePrayer from './time-prayer'

const MainPage = () => {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.client)
   useEffect(() => {
      dispatch(clientGetData('news'))
   }, [])
   return (
      <>
         <MainStyled>
            <VideoBackground
               src={videoMady}
               autoPlay
               muted
               loop
               type="video/mp4"
            />
            <Effect>
               <CarouselComponent />
            </Effect>
         </MainStyled>
         <NewsContent>
            <Slideshow news={data} />
         </NewsContent>
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
   background: #011835c5;
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
