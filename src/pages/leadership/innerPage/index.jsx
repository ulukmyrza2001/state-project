import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import TempleteInnerPage from '../../../components/temaplate-inner-pages'
import { getOneData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'

const InnerPage = () => {
   const { oneData, isLoading } = useSelector((state) => state.client)
   const textRef = useRef()

   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getOneData({ category: 'leadership', id }))
   }, [])

   useLayoutEffect(() => {
      if (oneData) {
         textRef.current.innerHTML = oneData.text
      }
   }, [oneData])

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '/jetekchilik/apparat',
         name: 'Айыл окмотунун аппараты',
      },
      {
         path: '/jetekchilik/apparat',
         name: `${oneData?.firstName} ${oneData?.lastName}`,
      },
   ]
   return (
      <TempleteInnerPage pathsArray={pathsArray}>
         {isLoading && <div>loading</div>}
         {!isLoading && (
            <Container key={oneData?.id}>
               <WrapperLeftContent>
                  <Flex width="100%" align="center" direction="column">
                     <h3>Кызматкер жонундо маалымат</h3>
                     <Text ref={textRef} />
                  </Flex>
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
                  <img src={oneData?.fileInformation?.photo} alt="" />
                  <h4>
                     {oneData?.firstName} {oneData?.lastName}{' '}
                     {oneData?.patronymic}
                  </h4>
               </WrapperImage>
            </Container>
         )}
      </TempleteInnerPage>
   )
}
const Container = styled(Flex)`
   gap: 20px;
   @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      flex-wrap: wrap;
   }
`
const Wrapper = styled(Flex)``
const WrapperLeftContent = styled(Flex)`
   flex-direction: column;
   justify-content: space-between;
   gap: 10px 0;
   @media (max-width: 800px) {
      gap: 20px;
   }
`
const Text = styled.p`
   @media (max-width: 800px) {
      text-align: center;
   }
`
const A = styled.a`
   color: black;
`

const WrapperImage = styled.div`
   img {
      width: 550px;
   }
`

export default InnerPage
