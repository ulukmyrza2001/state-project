import * as React from 'react'
import styled from 'styled-components'
import { Pagination as MuiPagination } from '@mui/material'

const Paginations = (props) => {
   let content = ''
   if (props.count > 0) {
      content = (
         <StyledPagination
            page={props.page}
            onChange={props.onChange}
            {...props}
         />
      )
   }
   return content
}

const StyledPagination = styled(MuiPagination)`
   height: 22px;
   .MuiButtonBase-root {
      color: #bdbdbd;
      font-family: 'PT Sans Narrow';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
   }
   .MuiPaginationItem-root {
      &:hover {
         background-color: transparent;
      }
   }
   .Mui-selected {
      color: #051640;
      background-color: transparent !important;
   }
   .MuiPaginationItem-icon {
      color: #051640;
      width: 30px;
      height: 30px;
   }
`
export default Paginations
