import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailSchools = () => {
   const textRef = useRef()
   const { oneData } = useSelector((state) => state.client)
   useEffect(() => {
      if (oneData) {
         textRef.current.innerHTML = oneData?.text
      }
   }, [oneData])
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Мектеп жонундо маалымат</h3>
               <Text ref={textRef} />
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Мектептин толук аталышы:</b> {oneData?.schoolName}
               </p>
               <p>
                  <b>Мектептин директору:</b> {oneData?.directorFullName}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.directorFullName}
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
            <h2>{oneData?.schoolName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailSchools
