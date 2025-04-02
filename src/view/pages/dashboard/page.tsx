import { useAuth } from "@/app/hooks"

export const Dashboard = () => {
  const { signout } = useAuth()

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={signout}>Signout</button>
    </div>
  )
}