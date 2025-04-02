import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { authService } from "@/app/services"
import { SignupData } from "@/app/services/auth/_signup" 
import { useAuth } from "@/app/hooks"

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty()
})

type FormData = z.infer<typeof schema>

export const useRegisterController = () => {
  const { signin } = useAuth()

  const { 
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({ 
    mutationFn: async (data: SignupData) => {
      return authService.signup(data)
    }
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)
      signin(accessToken);
    } catch {
      toast.error("Something went wrong")
    }
  })

  return { handleSubmit, register, errors, isPending }
}