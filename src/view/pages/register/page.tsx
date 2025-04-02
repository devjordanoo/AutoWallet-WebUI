import { Link } from "react-router-dom"

import { Input, Button } from "@/view/components"
import { useRegisterController } from "./useRegisterController"

export const Register = () => {
  const { errors, handleSubmit, register, isPending } = useRegisterController()

  return (
    <>
      <header className="gap-4 flex flex-col items-center text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-0.1px]">Crie sua conta</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Já possui uma conta?</span>
          <Link className="text-teal-900 font-medium" to="/login">Fazer Login</Link>
        </p>
      </header>

      <form className="flex flex-col gap-4 mt-[60px]" onSubmit={handleSubmit}>
        <Input {...register("name")} error={errors.name?.message} placeholder="Nome" type="text"  />
        <Input {...register("email")} error={errors.email?.message} placeholder="E-mail" type="email"  />
        <Input {...register("password")} error={errors.password?.message} placeholder="Senha" type="password" />

        <Button className="mt-2" type="submit" isLoading={isPending}>Criar conta</Button>
      </form>
    </>
  )
}