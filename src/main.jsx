import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '@fontsource/urbanist/400.css';
import '@fontsource/urbanist/500.css';
import '@fontsource/urbanist/600.css';
import '@fontsource/urbanist/700.css';
import '@fontsource/urbanist/800.css';
import '@fontsource/urbanist/900.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
