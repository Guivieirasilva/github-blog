import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Posts } from './pages/Posts'
import './styles/global.css'
import { IssuesProvider } from './context/IssuesContext/index.tsx'
import { ProfileProvider } from './context/ProfileContext/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/posts/:postId/',
        element: <Posts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProfileProvider>
      <IssuesProvider>
        <RouterProvider router={router} />
      </IssuesProvider>
    </ProfileProvider>
  </React.StrictMode>,
)
