import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import NavSectionItem from './NavSectionItem'
import { List, NavButton, NavIconWrapper, WindowMenu } from './styles'

const Navigations = ({ navigations, isBottom, headerBackground }) => {
   return (
      <List headerBackground={headerBackground} isBottom={isBottom}>
         {navigations.map((item) => (
            <NavButton key={item.id} id={item.id}>
               <WindowMenu isBottom={isBottom}>
                  <NavSectionItem sections={item.innerList} />
               </WindowMenu>
               {item.icon} {item.title}
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
