import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
   Table,
   TableBody,
   TableCell,
   tableCellClasses,
   TableHead,
   TableRow,
} from '@mui/material'
import { getPrayerTime } from '../../../store/prayer-time-slice'
import { converterDate, getTime } from '../../../utils/helpers/general'

const StyledTableCell = styled(TableCell)(() => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#424c5f',
      color: 'white',
      fontSize: 13,
      fontFamily: 'PT Sans Narrow',
      padding: '5px',
      fontWeight: '600',
      lineBreak: '2',
      '@media (max-width:600px)': {
         fontSize: '11px',
      },
   },
   [`&.${tableCellClasses.body}`]: {
      border: 0,
      fontSize: 12,
      color: '#363636',
      padding: '5px',
      fontFamily: 'PT Sans Narrow',
      fontWeight: '500',
   },
}))

const StyledTableRow = styled(TableRow)((props) => ({
   background: `${props.isActive ? 'lightGray' : ''}`,
   '&:hover': {
      backgroundColor: '#D8D8D8',
   },
   '& td': {
      color: `${props.isActive ? 'white' : ''}`,
   },
}))

const NamazCalendar = () => {
   const dispatch = useDispatch()

   const { prayerTimes } = useSelector((state) => state.prayer)

   useEffect(() => {
      dispatch(getPrayerTime())
   }, [])

   return (
      <Table>
         <Head>
            <TableRow>
               <StyledTableCell>Число</StyledTableCell>
               <StyledTableCell>Фаджр</StyledTableCell>
               <StyledTableCell>Восход</StyledTableCell>
               <StyledTableCell>Зухр</StyledTableCell>
               <StyledTableCell>Аср</StyledTableCell>
               <StyledTableCell>Магриб</StyledTableCell>
               <StyledTableCell>Иша</StyledTableCell>
            </TableRow>
         </Head>
         <Body>
            {prayerTimes.map((item) => {
               return (
                  <StyledTableRow
                     isActive={
                        new Date().getDate() ===
                        new Date(item.date.readable).getDate()
                     }
                     key={Math.random()}
                  >
                     <TableTitle>
                        {converterDate(new Date(item.date.readable))}
                     </TableTitle>
                     <TableTitle>{getTime(item.timings.Fajr)}</TableTitle>
                     <TableTitle>{getTime(item.timings.Sunrise)}</TableTitle>
                     <TableTitle>{getTime(item.timings.Dhuhr)}</TableTitle>
                     <TableTitle>{getTime(item.timings.Asr)}</TableTitle>
                     <TableTitle>{getTime(item.timings.Maghrib)}</TableTitle>
                     <TableTitle>{getTime(item.timings.Isha)}</TableTitle>
                  </StyledTableRow>
               )
            })}
         </Body>
      </Table>
   )
}

const Head = styled(TableHead)``

const Body = styled(TableBody)``

const TableTitle = styled(StyledTableCell)`
   font-style: normal;
   font-family: 'PT Sans Narrow';
   font-weight: 500;
   padding: 3px 7px;
   align-self: flex-end;
   @media (max-width: 450px) {
      font-size: 16px;
      line-height: 19px;
   }
`
export default NamazCalendar
