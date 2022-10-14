import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../../../store/weather-slice'

const Weather = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getWeather())
   }, [])
   return <div>index</div>
}

export default Weather
