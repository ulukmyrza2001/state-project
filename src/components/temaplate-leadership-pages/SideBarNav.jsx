import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CATEGORYES } from '../../utils/constants/categoryes'

const SideBarNav = () => {
   const navigate = useNavigate()
   const [toggle, setToggle] = useState(false)
   const [listId, setlistId] = useState(null)
   const isVisibleInner = (id) => listId === id && toggle

   const toggleInnerMenu = (id) => {
      setToggle(!toggle)
      setlistId(id)
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
   padding: ${({ isvisibleinner }) => (isvisibleinner ? '0.4rem' : '0rem')};
   box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
   height: ${({ isvisibleinner }) => (isvisibleinner ? 'fit-content' : '0px')};
   color: ${({ isvisibleinner }) => (isvisibleinner ? 'black' : 'transparent')};
   background-color: #dddddd;
   margin-bottom: ${({ isvisibleinner }) => (isvisibleinner ? '3px' : '0px')};
   pointer-events: ${({ isvisibleinner }) => (isvisibleinner ? '' : 'none')};
   font-size: 13px;
   cursor: pointer;
   :hover {
      background-color: #949494;
   }
   :active {
      opacity: 0.5;
   }
`
const Container = styled.div`
   max-width: 1000px;
   width: 100%;
   max-height: 60vh;
   overflow: scroll;
   padding: 0.2rem;
   margin: 0 auto;
   background-color: #dddddd;
   overflow: hidden;
`
const List = styled.div`
   width: 100%;
   padding: 0.5rem;
   background-color: #dddddd;
   color: black;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   margin-bottom: 6px;
   font-size: 13px;
   cursor: pointer;
   :hover {
      background-color: #949494;
      padding-right: 5px;
   }
   :active {
      opacity: 0.5;
   }
`

export default SideBarNav
