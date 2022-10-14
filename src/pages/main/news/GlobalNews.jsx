import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import styled from 'styled-components'
import { getNewsWorld } from '../../../store/news-slice'
import { Flex, Grid } from '../../../styles/style-for-positions/style'
import { CLIENT_ROUTES } from '../../../utils/constants/routes'
import { converterDate, localstorage } from '../../../utils/helpers/general'

const breadCrumb = {
   id: uuid(),
   title: 'Дуйнолук Жаңылыктар жана кулактандыруулар',
   path: CLIENT_ROUTES.newsAndAnnouncementsWorld.newsAndAnnouncements.path,
}

const GlobalNews = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { newsWorld } = useSelector((state) => state.news)

   useEffect(() => {
      dispatch(getNewsWorld())
   }, [])
   const getYear = (date) => converterDate(date).split(' ')[2]
   const getMonth = (date) => converterDate(date).split(' ')[1]
   const getDay = (date) => converterDate(date).split(' ')[0]

   const navigateToInnerGlobalPage = (id) => {
      navigate(
         `${CLIENT_ROUTES.newsAndAnnouncementsWorld.newsAndAnnouncements.path}/${id}`
      )
      localstorage.save('link', breadCrumb)
   }

   return (
      <Container>
         <GridContainer>
            {newsWorld.map((item) => (
               <Card
                  key={item.id}
                  onClick={() => navigateToInnerGlobalPage(item.id)}
               >
                  <ZoomImg>
                     <img src={item?.fileInformation.photo} alt="IMG..." />
                  </ZoomImg>
                  <Flex align="flex-start">
                     <Date>
                        <h1>{getDay(item?.dateOfNewAnnouncement)}</h1>
                        <div>
                           <div>{getMonth(item?.dateOfNewAnnouncement)}</div>
                           <div>{getYear(item?.dateOfNewAnnouncement)}</div>
                        </div>
                     </Date>
                     <Title>{item?.title}</Title>
                  </Flex>
               </Card>
            ))}
         </GridContainer>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`
const GridContainer = styled(Grid)`
   width: 90%;
   max-width: 1440px;
   grid-gap: 15px;
   @media (min-width: 160px) {
      grid-template-columns: repeat(1, 1fr);
   }
   @media (min-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
   }
`
const ZoomImg = styled.div`
   overflow: hidden;
   img {
      width: 100%;
      height: 50%;
      aspect-ratio: 15/10;
      object-fit: cover;
      border-radius: 3px;
      overflow: hidden;
      transition: all 0.8s;
      :hover {
         transition: all 0.8s;
         transform: scale(1.2);
      }
   }
`

const Title = styled.span`
   width: 70%;
   padding-top: 5px;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   overflow: hidden;
   -webkit-box-orient: vertical;
`
const Card = styled.div`
   align-self: start;
   cursor: pointer;
   :hover ${Title} {
      color: #191270;
      text-decoration: underline;
   }
`

const Date = styled.p`
   width: 30%;
   display: flex;
   align-items: center;
   gap: 5px;
   /* justify-content: start; */
   color: grey;
   h1 {
      color: #1a1471;
      font-size: 35px;
   }
`
export default GlobalNews
