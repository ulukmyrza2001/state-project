import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import { NAVIGATIONS_BOTTOM } from '../../../utils/constants/category'
import MobileHeader from './MobileHeader'
import { List, NavButton, NavIconWrapper } from './styles'

const Navigations = ({ navigations, onMouseOut, onMouseMove }) => {
   const { pathname } = useLocation()
   const [otherNavigation, setOtherNavitgation] = useState(false)

   const toggleOtherNavigation = () => setOtherNavitgation(!otherNavigation)

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
         {pathname !== '/' && (
            <NavButton onClick={toggleOtherNavigation}>
               <RiMenuUnfoldFill />
            </NavButton>
         )}
         <MobileHeader
            isVisible={otherNavigation}
            navigations={NAVIGATIONS_BOTTOM}
         />
      </List>
   )
}

export default Navigations
