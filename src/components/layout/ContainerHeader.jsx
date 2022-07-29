import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import HeaderBottom from './HeaderBottom'

const ContainerHeader = () => {
   return (
      <ContainerHeaderStyled>
         <Header />
         <HeaderBottom />
      </ContainerHeaderStyled>
   )
}
const ContainerHeaderStyled = styled.div`
   height: ${`${window.innerHeight}px`};
   width: 100%;
   position: relative;
`

export default ContainerHeader
