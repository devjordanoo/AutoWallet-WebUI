import { Navigate, Outlet } from "react-router-dom"

interface AuthLayoutProps {
  isPrivate: boolean
}

export const AuthGuard = ({ isPrivate }: AuthLayoutProps) => {
  const signedIn = false;

  if(!signedIn && isPrivate) {
    return <Navigate to="/login" replace />
  }

  if(signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}