import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import styled from '@emotion/styled'
import { VscExport } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/buttons/Button'

const MobileHeader = ({ isVisible, navigations }) => {
   const navigate = useNavigate()
   return (
      <Menu isVisible={isVisible}>
         {navigations.map((navigation) => (
            <Accordion key={navigation.id}>
               <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<VscExport />}
               >
                  <h5>{navigation.title}</h5>
               </AccordionSummary>
               <AccordionDetails>
                  {navigation.innerList.map((detail) => (
                     <Button
                        onClick={() =>
                           navigate(`${detail.path}`, { state: detail })
                        }
                        key={detail.id}
                        size="11px"
                        width="100%"
                     >
                        {detail.title}
                     </Button>
                  ))}
               </AccordionDetails>
            </Accordion>
         ))}
      </Menu>
   )
}

const Menu = styled.div`
   position: absolute;
   top: ${({ isVisible }) => (isVisible ? '100%' : '-1500%')};
   width: 100%;
   padding: 1rem 0.3rem;
   background-color: #011835;
   max-height: 90vh;
   overflow-y: auto;
   ::-webkit-scrollbar {
      display: none;
   }
`

export default MobileHeader
