import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrayerTime } from '../../../store/prayer-time-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import { Title } from '../../../styles/typography/typography'

let isActiveDhuhr = false
let isActiveAsr = false
let isActiveMaghrib = false
let isActiveIsha = false
let isActiveFajr = false

const TimePrayer = () => {
   const dispatch = useDispatch()
   const { prayerTime } = useSelector((state) => state.prayer)

   useEffect(() => {
      dispatch(getPrayerTime())
   }, [])

   const getTime = (time) => time && time.split(' ')[0]

   function timeToDate(time) {
      if (time) {
         const chunks = time.split(':')
         const date = new Date()
         date.setHours(Number(chunks[0]))
         date.setMinutes(Number(chunks[1]))
         return date
      }
      return null
   }

   const Fajr = getTime(prayerTime?.timings?.Fajr)
   const Sunrise = getTime(prayerTime?.timings?.Sunrise)
   const Dhuhr = getTime(prayerTime?.timings?.Dhuhr)
   const Asr = getTime(prayerTime?.timings?.Asr)
   const Maghrib = getTime(prayerTime?.timings?.Maghrib)
   const Isha = getTime(prayerTime?.timings?.Isha)
   const Lastthird = getTime(prayerTime?.timings?.Lastthird)

   if (prayerTime) {
      if (
         new Date().getTime() > timeToDate(Dhuhr).getTime() &&
         new Date().getTime() < timeToDate(Asr).getTime()
      ) {
         isActiveDhuhr = true
      }

      if (
         new Date().getTime() > timeToDate(Asr).getTime() &&
         new Date().getTime() < timeToDate(Maghrib).getTime()
      ) {
         isActiveAsr = true
      }

      if (
         new Date().getTime() > timeToDate(Maghrib).getTime() &&
         new Date().getTime() < timeToDate(Isha).getTime()
      ) {
         isActiveMaghrib = true
      }

      if (new Date().getTime() < timeToDate(Lastthird).getTime()) {
         isActiveIsha = true
      }
      if (
         new Date().getTime() > timeToDate(Lastthird).getTime() &&
         new Date().getTime() < timeToDate(Sunrise).getTime()
      ) {
         isActiveFajr = true
      }
   }

   return (
      <Container>
         <h1>Бугунку кунго карата намаз убактысы (Мады)</h1>
         <Flex gap="50px">
            <PrayerTimeStyled
               isActive={isActiveFajr}
               align="center"
               direction="column"
               gap="10px"
            >
               <Title size="40px">{getTime(prayerTime?.timings?.Fajr)}</Title>
               <p>Багымдат</p>
            </PrayerTimeStyled>
            <PrayerTimeStyled align="center" direction="column" gap="10px">
               <Title size="40px">
                  {getTime(prayerTime?.timings?.Sunrise)}
               </Title>
               <p>Кун чыгуу</p>
            </PrayerTimeStyled>
            <PrayerTimeStyled
               isActive={isActiveDhuhr}
               align="center"
               direction="column"
               gap="10px"
            >
               <Title size="40px">{getTime(prayerTime?.timings?.Dhuhr)}</Title>
               <p>Бешим</p>
            </PrayerTimeStyled>
            <PrayerTimeStyled
               isActive={isActiveAsr}
               align="center"
               direction="column"
               gap="10px"
            >
               <Title size="40px">{getTime(prayerTime?.timings?.Asr)}</Title>
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
               <Title size="40px">{getTime(prayerTime?.timings?.Isha)}</Title>
               <p>Куптан</p>
            </PrayerTimeStyled>
         </Flex>
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
   padding: 0rem 1rem 10rem 1rem;
`
const PrayerTimeStyled = styled(Flex)`
   padding: 1rem;
   border: ${({ isActive }) => (isActive ? '1px solid #4e8e8c' : 'none')};
   border-radius: 50%;
   p {
      color: gray;
      font-size: 20px;
   }
`

export default TimePrayer
