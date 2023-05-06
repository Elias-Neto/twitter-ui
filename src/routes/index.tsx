import { createBrowserRouter } from "react-router-dom"

import { Default } from "../layouts/Default"
import { Timeline } from "../pages/Timeline"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
    ],
  },
])
