import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { List, NavButton, NavIconWrapper } from './styles'

const Navigations = ({ navigations, onMouseOut, onMouseMove }) => {
   return (
      <List>
         {navigations.map((item) => (
            <NavButton
               key={item.id}
               id={item.id}
               onMouseOut={onMouseOut}
               onMouseMove={onMouseMove}
            >
               {item.title}
               <span />
               <NavIconWrapper>
                  <IoIosArrowDown fontSize={14} />
               </NavIconWrapper>
            </NavButton>
         ))}
      </List>
   )
}

export default Navigations
