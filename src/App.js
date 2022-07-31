import styled from 'styled-components'
import ClientRoutes from './routes/ClientRoutes'

function App() {
   return (
      <div className="App">
         <ClientRoutes />
      </div>
   )
}
const Div = styled.div`
   width: 100%;
   height: 1500px;
   background-color: red;
`

export default App
