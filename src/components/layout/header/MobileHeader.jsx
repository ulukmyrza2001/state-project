import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import styled from '@emotion/styled'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/buttons/Button'

const MobileHeader = ({ isVisible, navigations, setShowMenuBurger }) => {
   const navigate = useNavigate()

   const navigateHandler = (detail) => {
      navigate(`${detail.path}`, { state: detail })
      setShowMenuBurger(false)
   }

   return (
      <Menu isVisible={isVisible}>
         {navigations.map((navigation) => (
            <Accordion key={navigation.id}>
               <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<AiOutlineCaretRight />}
               >
                  <Categoryes>
                     {navigation.icon} {navigation.title}
                  </Categoryes>
               </AccordionSummary>
               <AccordionDetails>
                  {navigation.innerList.map((detail) => (
                     <ListCategoryButton
                        onClick={() => navigateHandler(detail)}
                        key={detail.id}
                     >
                        {detail.title}
                     </ListCategoryButton>
                  ))}
               </AccordionDetails>
            </Accordion>
         ))}
      </Menu>
   )
}
const Categoryes = styled.h5`
   display: flex;
   align-items: center;
   gap: 4px;
`
const ListCategoryButton = styled(Button)`
   font-size: 11px;
   width: 100%;
   border-radius: 0px;
   border-bottom: 1px solid #011835;
`
const Menu = styled.div`
   position: absolute;
   top: ${({ isVisible }) => (isVisible ? '100%' : '70%')};
   width: 100%;
   padding: ${({ isVisible }) => (isVisible ? '2rem 0.3rem' : '0')};
   background-color: #011835;
   max-height: ${({ isVisible }) => (isVisible ? '90vh' : '0vh')};
   overflow-y: auto;
   ::-webkit-scrollbar {
      display: none;
   }
`

export default MobileHeader
