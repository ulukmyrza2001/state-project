import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './App'
import './index.css'
import { Centered } from './styles/style-for-positions/style'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   // <React.StrictMode>
   <React.Suspense fallback={<Centered />}>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.Suspense>
   // {/* </React.StrictMode> */}
)
