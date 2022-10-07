import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Flex } from '../../../styles/style-for-positions/style'

const NavSectionItem = ({ sections, windowMenu }) => {
   const navigate = useNavigate()
   return (
      <Container>
         {sections?.innerList?.map((el) => (
            <Li
               windowMenu={windowMenu}
               key={el.id}
               onClick={() => navigate(`${el.path}`, { state: el })}
            >
               {el.title}
               <BsArrowRight />
            </Li>
         ))}
      </Container>
   )
}
const Container = styled(Flex)`
   width: 100%;
   flex-direction: column;
   gap: 10px;
   align-items: center;
`
const Li = styled.p`
   width: 100%;
   font-size: 16px;
   letter-spacing: 0.4px;
   text-transform: capitalize;
   display: flex;
   align-items: center;
   gap: 5px;
   padding: 0.5em;
   transition: all 0.1;
   color: ${({ windowMenu }) => (windowMenu ? '#131517' : 'transparent')};
   :hover {
      color: #53538f;
      svg {
         transform: translateX(4px);
      }
   }
`

export default NavSectionItem
