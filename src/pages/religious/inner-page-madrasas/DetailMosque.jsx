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

const DetailMosque = ({ oneData }) => {
   return (
      <Container>
         <WrapperLeftContent>
            <WrapperText
               gap="20px"
               width="90%"
               align="center"
               direction="column"
            >
               <h3 style={{ minWidth: '100%' }}>Медресе жонундо маалымат</h3>
               <Text>{parse(String(oneData?.text))}</Text>
            </WrapperText>
            <Flex direction="column" margin="20px 0 0 0" gap="6px">
               <p>
                  <b>Медресенин толук аталышы:</b> {oneData?.schoolName}
               </p>
               <p>
                  <b>Медресенин имамы:</b> {oneData?.director}
               </p>
               <p>
                  <b>Медресенин курулган куну:</b> {oneData?.directorBirthDay}
               </p>
               <p>
                  <b>Дареги:</b> {oneData?.address}
               </p>
               <p>
                  <b>Байланыш телефону:</b>{' '}
                  <A href={`tel:${oneData?.phone}`}>{oneData?.phone}</A>
               </p>
            </Flex>
         </WrapperLeftContent>
         <WrapperImage>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
}

export default DetailMosque
