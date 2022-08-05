import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/buttons/Button'

const NavSectionItem = ({ sections }) => {
   return sections?.innerList?.map((el) => (
      <Link to={el.path || '/'} key={el.id}>
         <Button>{el.title}</Button>
      </Link>
   ))
}

export default NavSectionItem
