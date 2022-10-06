import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailLeadership = ({ oneData }) => {
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
               <h3>Кызматкер жонундо маалымат</h3>
               <Text ref={textRef} />
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Позициясы:</b> {oneData?.positions} <br />
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phoneNumber}`}>
                     {oneData?.phoneNumber}
                  </A>{' '}
                  <br />
               </p>
               <p>
                  <b>Электрондук почтасы:</b>{' '}
                  <A target="_blank" href={`mailto:${oneData?.email}`}>
                     {oneData?.email}
                  </A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>
               {oneData?.firstName} {oneData?.lastName} {oneData?.patronymic}
            </h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailLeadership
