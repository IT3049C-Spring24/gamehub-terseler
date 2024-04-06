import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from '/pages/HomePage.jsx'
import RPSGame from '../pages/rps/RPS-Game'
import Layout from '/src/Layout'
import TicTacToeGame from '../pages/ticTacToe/src/App'

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/rps",
        element: <RPSGame/>,
      },
      {
        path: "/tictactoe",
        element: <TicTacToeGame/>,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}/>
  </React.StrictMode>,
)
