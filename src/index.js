import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './App'
import './index.css'
import Loader from './components/UI/loader/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   // <React.StrictMode>
   <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.Suspense>
   // {/* </React.StrictMode> */}
)
