import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CATEGORYES } from '../../utils/constants/categoryes'

const SideBarNav = () => {
   const navigate = useNavigate()
   const [listId, setlistId] = useState(null)
   const isVisibleInner = (id) => listId === id

   const toggleInnerMenu = (id) => {
      switch (id) {
         case listId:
            setlistId(null)
            break
         default:
            setlistId(id)
            break
      }
   }

   return (
      <Container>
         {CATEGORYES.map((el) => (
            <Fragment key={el.id}>
               <List onClick={() => toggleInnerMenu(el.id)}>
                  <span
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                     }}
                  >
                     {el.icon} {el.title}
                  </span>{' '}
                  <Icon
                     isvisibleinner={isVisibleInner(el.id) || undefined}
                     fontSize={14}
                  />
               </List>
               {el.innerList.map((item) => (
                  <InnerList
                     key={item.id}
                     onClick={() => navigate(`${item.path}`, { state: item })}
                     isvisibleinner={isVisibleInner(el.id)}
                  >
                     {item.title}
                  </InnerList>
               ))}
            </Fragment>
         ))}
      </Container>
   )
}
const Icon = styled(AiOutlineCaretRight)`
   transform: ${({ isvisibleinner }) =>
      isvisibleinner ? 'rotate(90deg)' : 'rotate(0deg)'};
`
const InnerList = styled.div`
   width: 100%;
   padding: ${({ isvisibleinner }) =>
      isvisibleinner ? '0.4rem 0 0.4rem 2rem' : '0rem'};
   height: ${({ isvisibleinner }) => (isvisibleinner ? 'fit-content' : '0px')};
   color: ${({ isvisibleinner }) => (isvisibleinner ? 'black' : 'transparent')};
   background-color: white;
   margin-bottom: ${({ isvisibleinner }) => (isvisibleinner ? '3px' : '0px')};
   pointer-events: ${({ isvisibleinner }) => (isvisibleinner ? '' : 'none')};
   font-size: 13px;
   cursor: pointer;
   :hover {
      background-color: #000408;
      color: white;
   }
   :active {
      opacity: 0.5;
   }
`
const Container = styled.div`
   max-width: 1000px;
   width: 100%;
   padding: 0.2rem;
   margin: 0 auto;
   background-color: white;
   @media (max-width: 800px) {
      display: none;
   }
`
const List = styled.div`
   width: 100%;
   padding: 0.5rem;
   background-color: white;
   color: black;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   margin-bottom: 6px;
   font-size: 13px;
   cursor: pointer;
   :hover {
      background-color: #000408;
      color: white;
      padding-right: 5px;
   }
   :active {
      opacity: 0.5;
   }
`

export default SideBarNav
