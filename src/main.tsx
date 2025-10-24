import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './style.css'

import {AppLayout} from './modules/layout/AppLayout'
import {HomePage} from './modules/home/HomePage'
import {ProjectsPage} from './modules/projects/ProjectsPage'
import {ProjectDetail} from './modules/projects/ProjectDetail'
import {ExperiencePage} from './modules/experience/ExperiencePage'
import {ContactPage} from './modules/contact/ContactPage'
import {ResumePage} from './modules/resume/ResumePage'
import {AboutPage} from './modules/about/AboutPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'about', element: <AboutPage/>},
            {path: 'projects', element: <ProjectsPage/>},
            {path: 'projects/:slug', element: <ProjectDetail/>},
            {path: 'experience', element: <ExperiencePage/>},
            {path: 'contact', element: <ContactPage/>},
            {path: 'resume', element: <ResumePage/>},
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
        <RouterProvider router={router}/>
    </React.StrictMode>
)
