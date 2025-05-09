import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Router } from "./router"
import { AuthProvider } from "./app/contexts/AuthContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
