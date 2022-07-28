import React from 'react'
import styled from 'styled-components'
import Footer from './components/layout/Footer'

const App = () => {
   return (
      <div>
         <Div />
         <Footer />
      </div>
   )
}
const Div = styled.div`
   width: 100%;
   height: 1500px;
   background-color: black;
`

export default App
