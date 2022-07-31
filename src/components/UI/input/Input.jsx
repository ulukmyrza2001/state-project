import React, { forwardRef } from 'react'
import styled from 'styled-components'

export const Input = forwardRef((props, ref) => {
   return (
      <WrapperInput>
         {props.label ? (
            <label htmlFor={props.id}>
               {props.title} &nbsp;
               {props.required ? <b style={{ color: 'red' }}>*</b> : ''}
            </label>
         ) : (
            ''
         )}
         <InputStyled
            {...props}
            ref={ref}
            error={props.error}
            autoComplete="off"
         />
      </WrapperInput>
   )
})
const WrapperInput = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 10px;
   font-family: 'Open Sans', sans-serif;
   font-weight: 700;
   font-size: 18px;
   label {
      font-weight: 500;
      text-transform: capitalize;
   }
`
const InputStyled = styled.input`
   width: 100%;
   height: auto;
   border-radius: 4px;
   outline: none;
   border: 1px solid #d1d7dc;
   padding: 10px 14px;
   font-family: 'Open Sans', sans-serif;
   font-weight: 400;
   font-size: 16px;
   color: gray;
   ::placeholder {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
   }
   :focus {
      border: 1px solid #85c0ff;
      box-shadow: 0px 0px 3px 0px #85c0ff;
   }
   border: ${({ error }) => (error ? '1px solid #F61414' : '')};
   box-shadow: ${({ error }) => (error ? '0px 0px 3px 0px #F61414' : '')}; ;
`

export default Input
