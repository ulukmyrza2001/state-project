import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../UI/buttons/Button'

const NavSectionItem = ({ sections }) => {
   const navigate = useNavigate()
   return sections?.innerList?.map((el) => (
      <Button onClick={() => navigate(`${el.path}`, { state: el })}>
         {el.title}
      </Button>
   ))
}

export default NavSectionItem
