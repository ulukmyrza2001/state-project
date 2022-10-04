import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clientGetData } from '../../../store/client-slice'
import { Flex } from '../../../styles/style-for-positions/style'

const Government = () => {
   const { government } = useSelector((state) => state.client)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(clientGetData('leadership'))
   }, [])

   return (
      <Flex
         width="100%"
         direction="column"
         mobileDirection="column"
         mobileAlign="center"
         mobileGap="20px"
      >
         {government.map((item) => (
            <>
               <h2>{item.positions}</h2>
               <Flex
                  key={item.id}
                  mobileJustify="center"
                  mobileWrap="wrap"
                  mobileGap="20px"
                  mobileDirection="column-reverse"
                  mobileAlign="center"
                  gap="20px"
               >
                  <Flex
                     mobileDirection="column"
                     direction="column"
                     justify="space-between"
                     mobileGap="20px"
                     gap="10px 0"
                  >
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quidem accusamus, accusantium odit iusto
                        voluptatem ab dolor iste placeat similique assumenda
                        illum corporis porro eveniet. Explicabo distinctio sint
                        amet corporis magni. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Quidem accusamus,
                        accusantium odit iusto voluptatem ab dolor iste placeat
                        similique assumenda illum corporis porro eveniet.
                        Explicabo distinctio sint amet corporis magni. Lorem
                        ipsum dolor sit amet consectetur, adipisicing elit.
                        Quidem accusamus, accusantium odit iusto voluptatem ab
                        dolor iste placeat similique assumenda illum corporis
                        porro eveniet. Explicabo distinctio sint amet corporis
                        magni. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Quidem accusamus, accusantium odit
                        iusto voluptatem ab dolor iste placeat similique
                        assumenda illum corporis porro eveniet. Explicabo
                        distinctio sint amet corporis magni.
                     </p>
                     <div>
                        <p>
                           <b>Байланыш телефону:</b> {item.phoneNumber} <br />
                        </p>
                        <p>
                           <b>Электрондук почтасы:</b> {item.email}
                        </p>
                     </div>
                  </Flex>
                  <WrapperImage>
                     <img src={item.fileInformation.photo} alt="" />
                     <h4>
                        {item.firstName} {item.lastName}
                     </h4>
                  </WrapperImage>
               </Flex>
            </>
         ))}
      </Flex>
   )
}

const WrapperImage = styled.div`
   img {
      width: 250px;
   }
`

export default Government
