import { useState } from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import A from './components/a/a'
import Layout from './components/Layout/layout'
import Header from './components/Header/Header'
import Notfound from './components/Nonfound/Notfound'

const routes = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> }, 
      { path: "/A", element: <A/> },
      { path: "/Header", element: <Header/> },
      {path:"*",element:<Notfound/>}
    ]
  }
]);



function App() {

  return (
  
    <>
    <RouterProvider router={routes}/>
  </>

 
  )
}

export default App
