import { useEffect, useState } from 'react'

export default function Clock() {
   const [date, setDate] = useState(new Date())

   useEffect(() => {
      setInterval(() => setDate(new Date()), 1000)
   }, [])

   return (
      <div className="Clock">
         <h2 className="Digits">
            {`0${date.getHours()}`.slice(-2)}
            <span>:</span>
            {`0${date.getMinutes()}`.slice(-2)}
            <span>:</span>
            {`0${date.getSeconds()}`.slice(-2)}
         </h2>
      </div>
   )
}
