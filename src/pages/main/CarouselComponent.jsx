import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

const data = [
   'Эл журттун ажырагыс бүтүндүгү жана бир жакадан баш, бир жеңден кол чыгарган ички биримдиги.',
   'Улуттар аралык ынтымак, достук жана кызматташтык.',
   'Улуттук ар намыс жана жарандык ариет.',
   'Арыбас мээнет, алдыңкы өнөр-билим аркылуу бакубат дөөлөткө умтулуу.',
   'Гуманизм, айкөлдүк, кечиримдүүлүк.',
   'Табият менен таттуу мамиледе болуу.',
   'Кыргыз мамлекетин чыңдоо жана аны көздүн карегиндей сактоо.',
]

const CarouselComponent = () => {
   const [index, setIndex] = useState(0)
   const [oneData, setOneData] = useState([data[0]])

   useEffect(() => {
      const nextTextTime = setTimeout(() => {
         switch (index) {
            case data.length - 1:
               setIndex(0)
               break
            default:
               setIndex((prev) => prev + 1)
               break
         }
      }, 8000)
      return () => {
         clearTimeout(nextTextTime)
      }
   }, [index])

   useEffect(() => {
      const one = data.filter((el, i) => i === index)
      setOneData([...one])
   }, [index])

   return oneData?.map((el) => (
      <Text
         as={motion.div}
         key={el}
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 1,
         }}
         exit={{
            opacity: 0,
         }}
      >
         {el}
      </Text>
   ))
}
const Text = styled.div`
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

export default CarouselComponent
