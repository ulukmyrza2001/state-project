import React, { useLayoutEffect, useRef } from 'react'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailCircles = ({ oneData }) => {
   const textRef = useRef()

   useLayoutEffect(() => {
      if (oneData) {
         textRef.current.innerHTML = oneData.info
      }
   }, [oneData])
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText width="90%" align="center" direction="column">
               <h3>Ийрим жонундо маалымат</h3>
               <Text ref={textRef} />
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Ийримдин аталышы:</b> {oneData?.courseName}
               </p>
               <p>
                  <b>Ийримдин мугалими:</b> {oneData?.courseTeacher}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.address}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phoneNumber}`}>
                     {oneData?.phoneNumber}
                  </A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.courseName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailCircles
