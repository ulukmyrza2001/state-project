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

const DetailDrivingSchools = ({ oneData }) => {
   const textRef = useRef()

   useLayoutEffect(() => {
      if (oneData) {
         textRef.current.innerHTML = oneData.text
      }
   }, [oneData])
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText width="90%" align="center" direction="column">
               <h3>Авто мектеп жонундо маалымат</h3>
               <Text ref={textRef} />
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Авто мектептин аталышы:</b> {oneData?.drivingCourseName}
               </p>
               <p>
                  <b>Авто мектептин директору:</b> {oneData?.director}
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
            <h2>{oneData?.drivingCourseName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailDrivingSchools
