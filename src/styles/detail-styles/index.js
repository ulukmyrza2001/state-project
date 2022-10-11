import styled from 'styled-components'
import { Flex } from '../style-for-positions/style'

export const WrapperText = styled(Flex)`
   @media (max-width: 800px) {
      width: 100%;
   }
   p,
   li,
   span {
      color: black !important;
   }
   ul,
   ol {
      margin-left: 20px !important;
   }
`
export const Container = styled(Flex)`
   gap: 20px;
   justify-content: space-between;
   @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
      flex-wrap: wrap;
   }
`
export const Wrapper = styled(Flex)``
export const WrapperLeftContent = styled(Flex)`
   flex-direction: column;
   justify-content: space-between;
   gap: 10px 0;
   @media (max-width: 800px) {
      gap: 20px;
   }
`
export const Text = styled.p`
   @media (max-width: 800px) {
      text-align: center;
   }
`
export const A = styled.a`
   color: black;
`

export const WrapperImage = styled.div`
   text-align: center;
   img {
      width: 500px;
      margin-top: 10px;
      @media (max-width: 900px) {
         width: 400px;
      }
      @media (max-width: 440px) {
         width: 100%;
      }
   }
`
