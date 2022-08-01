import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <React.Suspense fallback={<div>Loading</div>}>
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
      </React.Suspense>
   </React.StrictMode>
)
