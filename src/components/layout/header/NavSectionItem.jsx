import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Li } from './styles'
import { localstorage } from '../../../utils/helpers/general'

const NavSectionItem = ({ sections }) => {
   const navigate = useNavigate()

   const navigateHandler = (item) => {
      navigate(`${item.path}`)
      localstorage.save('link', item)
   }

   return sections?.map((el) => (
      <Li key={el.id} onClick={() => navigateHandler(el)}>
         {el.title}
         <BsArrowRight />
      </Li>
   ))
}

export default NavSectionItem
