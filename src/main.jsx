import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#110430]'>
      <div className='max-w-6xl mx-auto text-white'>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
