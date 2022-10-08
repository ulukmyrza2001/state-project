import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Li } from './styles'

const NavSectionItem = ({ sections }) => {
   const navigate = useNavigate()
   return sections?.map((el) => (
      <Li key={el.id} onClick={() => navigate(`${el.path}`, { state: el })}>
         {el.title}
         <BsArrowRight />
      </Li>
   ))
}

export default NavSectionItem
