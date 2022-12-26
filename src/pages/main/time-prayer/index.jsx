import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrayerTime } from '../../../store/prayer-time-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import { Text, Title } from '../../../styles/typography/typography'
import {
   converterDate,
   getTime,
   timeToDate,
} from '../../../utils/helpers/general'
import Clock from './Clock'
import islamPhoto from '../../../assets/images/prayer.jpg'

let isActiveDhuhr = false
let isActiveAsr = false
let isActiveMaghrib = false
let isActiveIsha = false
let isActiveFajr = false

const currentTime = new Date().getTime()

const TimePrayer = () => {
   const dispatch = useDispatch()
   const { prayerTime } = useSelector((state) => state.prayer)

   useEffect(() => {
      dispatch(getPrayerTime())
   }, [])

   const Fajr = getTime(prayerTime?.timings?.Fajr)
   const Sunrise = getTime(prayerTime?.timings?.Sunrise)
   const Dhuhr = getTime(prayerTime?.timings?.Dhuhr)
   const Asr = getTime(prayerTime?.timings?.Asr)
   const Maghrib = getTime(prayerTime?.timings?.Maghrib)
   const Isha = getTime(prayerTime?.timings?.Isha)
   const Lastthird = getTime(prayerTime?.timings?.Lastthird)

   if (prayerTime) {
      if (currentTime > timeToDate(Dhuhr) && currentTime < timeToDate(Asr)) {
         isActiveDhuhr = true
      }

      if (currentTime > timeToDate(Asr) && currentTime < timeToDate(Maghrib)) {
         isActiveAsr = true
      }

      if (currentTime > timeToDate(Maghrib) && currentTime < timeToDate(Isha)) {
         isActiveMaghrib = true
      }

      if (
         currentTime < timeToDate(Lastthird) ||
         currentTime > timeToDate(Maghrib)
      ) {
         isActiveIsha = true
      }
      if (
         currentTime > timeToDate(Lastthird) &&
         currentTime < timeToDate(Sunrise)
      ) {
         isActiveFajr = true
      }
   }

   return (
      <Container photo={islamPhoto}>
         <PrayerTimeWrapper direction="column" align="center" gap="30px">
            <h1>Бугунку кунго карата намаз убактысы (Мады)</h1>
            <Flex gap="100px" align="center">
               <Text color="#c2b7bf">{converterDate(new Date())}</Text>
               <Text color="#c2b7bf">
                  Кундун аты: {prayerTime?.date?.hijri?.weekday?.en}
               </Text>
            </Flex>
            <Clock />
            <Flex
               wrap="wrap"
               justify="center"
               align="center"
               gap="50px"
               margin="20px 0"
            >
               <PrayerTimeStyled
                  isActive={isActiveFajr}
                  align="center"
                  direction="column"
                  gap="10px"
               >
                  <Title size="40px">{Fajr}</Title>
                  <p>Багымдат</p>
               </PrayerTimeStyled>
               <PrayerTimeStyled align="center" direction="column" gap="10px">
                  <Title size="40px">{getTime(Sunrise)}</Title>
                  <p>Кун чыгуу</p>
               </PrayerTimeStyled>
               <PrayerTimeStyled
                  isActive={isActiveDhuhr}
                  align="center"
                  direction="column"
                  gap="10px"
               >
                  <Title size="40px">{Dhuhr}</Title>
                  <p>Бешим</p>
               </PrayerTimeStyled>
               <PrayerTimeStyled
                  isActive={isActiveAsr}
                  align="center"
                  direction="column"
                  gap="10px"
               >
                  <Title size="40px">{Asr}</Title>
                  <p>Аср</p>
               </PrayerTimeStyled>
               <PrayerTimeStyled
                  isActive={isActiveMaghrib}
                  align="center"
                  direction="column"
                  gap="10px"
               >
                  <Title size="40px">
                     {getTime(prayerTime?.timings?.Maghrib)}
                  </Title>
                  <p>Шам</p>
               </PrayerTimeStyled>
               <PrayerTimeStyled
                  isActive={isActiveIsha}
                  align="center"
                  direction="column"
                  gap="10px"
               >
                  <Title size="40px">
                     {getTime(prayerTime?.timings?.Isha)}
                  </Title>
                  <p>Куптан</p>
               </PrayerTimeStyled>
            </Flex>
         </PrayerTimeWrapper>
      </Container>
   )
}
const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 40px;
   padding: 11rem 1rem;
   background-color: #f1f1f1;
   background: url(${islamPhoto});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   h1 {
      color: #0d1550;
   }
`
const PrayerTimeWrapper = styled(Flex)`
   position: relative;
   backdrop-filter: blur(40px);
   border-radius: 8px;
   padding: 0.7rem;
`
const PrayerTimeStyled = styled(Flex)`
   padding: 1rem;
   border: ${({ isActive }) => (isActive ? '1px solid #09203e' : 'none')};
   z-index: 2;
   border-radius: 50%;
   p {
      color: #09203e;
      font-size: 25px;
   }
   h3 {
      color: #09203e;
   }
`

export default TimePrayer
