import { Link } from "react-router-dom"

import { Input, Button } from "@/view/components"
import { useLoginController } from "./useLoginController"

export const Login = () => {
  const { handleSubmit, register, errors } = useLoginController()

  return (
    <>
      <header className="gap-4 flex flex-col items-center text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-0.1px]">Entre em sua conta</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Novo por aqui?</span>
          <Link className="text-teal-900 font-medium" to="/register">Crie uma conta</Link>
        </p>
      </header>

      <form className="flex flex-col gap-4 mt-[60px]" onSubmit={handleSubmit}>
        <Input error={errors?.email?.message} {...register("email")} placeholder="E-mail" type="email"  />
        <Input error={errors?.password?.message} {...register("password")} placeholder="Senha" type="password" />

        <Button className="mt-2" type="submit">Entrar</Button>
      </form>
    </>
  )
}