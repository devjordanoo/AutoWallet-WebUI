import { useAuth } from './../../../app/hooks/_useAuth';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { authService } from "@/app/services"
import { SigninData } from "@/app/services/auth/_signin" 

const schema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty()
})

type FormData = z.infer<typeof schema>

export const useLoginController = () => {
  const { 
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({ 
    mutationFn: async (data: SigninData) => {
      return authService.signin(data)
    }
  })

  const { signin } = useAuth()

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