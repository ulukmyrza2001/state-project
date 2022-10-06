import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clientGetData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'

const GovernmentApparatus = () => {
   const { governmentApparatus } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return governmentApparatus.map((item) => (
      <Wrapper key={item.id}>
         <Flex
            gap="20px"
            mobileDirection="column"
            mobileAlign="center"
            mobileGap="10px 0"
         >
            <WrapperImage>
               <img src={item.fileInformation.photo} alt="" />
            </WrapperImage>
            <Flex
               direction="column"
               gap="10px"
               justify="center"
               mobileDirection="column"
               mobileGap="10px 0"
               align="flex-start"
            >
               <Flex
                  direction="column"
                  gap="10px"
                  mobileDirection="column"
                  mobileAlign="center"
                  justify="center"
               >
                  <h3>{item.positions}</h3>

                  <h4>
                     {item.firstName} {item.lastName} {item.patronymic}
                  </h4>
               </Flex>
               <p>Иштеген убактысы: 20.20.2020 </p>
            </Flex>
         </Flex>
      </Wrapper>
   ))
}
const Wrapper = styled(Flex)`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 0 10px 0;
   box-shadow: 0px 2px 0px 0px rgba(34, 60, 80, 0.2);
   p {
      font-size: 13px;
   }
`
const WrapperImage = styled.div`
   display: flex;
   img {
      width: 200px;
      height: 220px;
      object-fit: cover;
   }
`
export default GovernmentApparatus
