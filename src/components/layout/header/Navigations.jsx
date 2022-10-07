import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import NavSectionItem from './NavSectionItem'
import { List, NavButton, NavIconWrapper, WindowMenu } from './styles'

const Navigations = ({
   navigations,
   onMouseOut,
   onMouseMove,
   isbottom,
   isBottom,
   headerBackground,
   windowMenu,
   setWindowMenu,
   sections,
}) => {
   return (
      <List headerBackground={headerBackground} isBottom={isbottom}>
         {navigations.map((item) => (
            <NavButton
               key={item.id}
               id={item.id}
               onMouseOut={onMouseOut}
               onMouseMove={onMouseMove}
            >
               <WindowMenu
                  onMouseMove={() => setWindowMenu(true)}
                  onMouseOut={() => setWindowMenu(false)}
                  windowMenu={item.id === windowMenu}
                  isBottom={isBottom}
               >
                  <NavSectionItem
                     windowMenu={item.id === windowMenu}
                     sections={sections}
                  />
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
