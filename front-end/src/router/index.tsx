import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { Home } from "../pages/Home"
import { Agendado } from "../pages/Agendado"

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/days/:id" element={<Agendado />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}
