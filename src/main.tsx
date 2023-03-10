import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/global.css"

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>
)
