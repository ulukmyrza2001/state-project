import { useEffect, useState } from 'react'
import { Title } from '../../../styles/typography/typography'

export default function Clock() {
   const [date, setDate] = useState(new Date())

   useEffect(() => {
      setInterval(() => setDate(new Date()), 1000)
   }, [])

   return (
      <div>
         <Title size="30px" color="#c2b7bf">
            {`0${date.getHours()}`.slice(-2)}
            <span>:</span>
            {`0${date.getMinutes()}`.slice(-2)}
            <span>:</span>
            {`0${date.getSeconds()}`.slice(-2)}
         </Title>
      </div>
   )
}
