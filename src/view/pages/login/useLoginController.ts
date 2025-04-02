import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

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

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data)
  })

  return { handleSubmit, register, errors }
}