import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AuthGuard } from "./guards/AuthGuard"

import { Login, Register, Dashboard } from "@/view/pages"
import { AuthLayout, PrivateLayout } from "@/view/layouts"

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<AuthGuard isPrivate={false} />}>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>

          <Route element={<AuthGuard isPrivate={true} />}>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<Dashboard />} /> 
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}