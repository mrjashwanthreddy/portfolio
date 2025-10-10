import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'

import { AppLayout } from './modules/layout/AppLayout'
import { HomePage } from './modules/home/HomePage'
import { ProjectsPage } from './modules/projects/ProjectsPage'
import { ExperiencePage } from './modules/experience/ExperiencePage'
import { ContactPage } from './modules/contact/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container not found')
}

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


