import React, { forwardRef } from 'react'
import {
   A,
   Container,
   Text,
   WrapperImage,
   WrapperLeftContent,
   WrapperText,
} from '../../styles/detail-styles'

const DetailLeadership = forwardRef(({ oneData }, ref) => {
   return (
      <Container key={oneData?.id}>
         <WrapperLeftContent>
            <WrapperText width="90%" align="center" direction="column">
               <h3>Кызматкер жонундо маалымат</h3>
               <Text ref={ref} />
            </WrapperText>
            <div>
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
            </div>
         </WrapperLeftContent>
         <WrapperImage>
            <h2>
               {oneData?.firstName} {oneData?.lastName} {oneData?.patronymic}
            </h2>
            <img src={oneData?.fileInformation?.photo} alt="" />
         </WrapperImage>
      </Container>
   )
})

export default DetailLeadership
