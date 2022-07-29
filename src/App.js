import styled from 'styled-components'
import ContainerHeader from './components/layout/ContainerHeader'

function App() {
   return (
      <div className="App">
         <ContainerHeader />
         <Div />
      </div>
   )
}
const Div = styled.div`
   width: 100%;
   height: 1500px;
   background-color: red;
`

export default App
