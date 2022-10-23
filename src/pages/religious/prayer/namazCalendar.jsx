import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getPrayerTime } from '../../../store/prayer-time-slice'

const NamazCalendar = () => {
   const dispatch = useDispatch()

   const { prayerTimes, prayerTime } = useSelector((state) => state.prayer)

   useEffect(() => {
      dispatch(getPrayerTime())
   }, [])

   return (
      <div>
         <Table>
            <Thead>
               <tr>
                  <th>Число</th>
                  <th>Фаджр</th>
                  <th>Восход</th>
                  <th>Зухр</th>
                  <th>Аср</th>
                  <th>Магриб</th>
                  <th>Иша</th>
               </tr>
            </Thead>
            <Tbody>
               {prayerTimes.map((item) => (
                  <tr key={Math.random()}>
                     <td>{item.length}</td>
                     <td>{item.timings.Fajr}</td>
                     <td>{item.timings.Sunrise}</td>
                     <td>{item.timings.Dhuhr}</td>
                     <td>{item.timings.Asr}</td>
                     <td>{item.timings.Maghrib}</td>
                     <td>{item.timings.Isha}</td>
                  </tr>
               ))}
            </Tbody>
         </Table>
      </div>
   )
}
const Table = styled.table`
   border: 1px solid black;
   width: 100%;
   padding: 0;
`
const Thead = styled.thead`
   th {
      padding: 5px;
   }
`
const Tbody = styled.tbody`
   width: 100%;
   td {
      padding: 5px;
   }
`

export default NamazCalendar
