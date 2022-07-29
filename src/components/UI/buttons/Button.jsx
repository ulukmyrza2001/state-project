import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
   return <ButtonStyled {...props}>{props.children}</ButtonStyled>
}
const ButtonStyled = styled.button`
   border: none;
   background-color: white;
   border-radius: 6px;
   color: #302e2e;
   text-transform: uppercase;
   font-size: 20px;
   padding: 1em;
   border-bottom: 3px solid #011835;
   cursor: pointer;
   :hover {
      background-color: #011835;
      color: white;
   }
   :active {
      opacity: 0.8;
   }
`

export default Button
