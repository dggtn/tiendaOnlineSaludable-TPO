import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Windmill } from '@windmill/react-ui'
import {Provider} from 'react-redux'
import {store} from "./redux/store"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Windmill/>
    <ToastContainer closeButton={false} autoClose={3000} position={'bottom-right'}/>
    <App />
        </Provider>
  </StrictMode>,
)
