import React from 'react'
import parse from 'html-react-parser'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../../styles/detail-styles'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailKindergartens = ({ oneData }) => {
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3>Бала-бакча жонундо маалымат</h3>
               <Text>{parse(String(oneData?.text))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Бала-бакчанын толук аталышы:</b>{' '}
                  {oneData?.kindergartensName}
               </p>
               <p>
                  <b>Бала-бакчанын директору:</b> {oneData?.directorFullName}
               </p>
               <p>
                  <b>Бала-бакчанын окутуу тили:</b> {oneData?.language}
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
               <p>
                  <b>Электрондук почтасы:</b>{' '}
                  <A href={`mailto:${oneData?.email}`}>{oneData?.email}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>{oneData?.kindergartensName}</h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailKindergartens
