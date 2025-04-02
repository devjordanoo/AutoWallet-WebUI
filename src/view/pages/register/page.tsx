import { Link } from "react-router-dom"

import { Input, Button } from "@/view/components"

export const Register = () => {
  return (
    <>
      <header className="gap-4 flex flex-col items-center text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-0.1px]">Crie sua conta</h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text-gray-700">Já possui uma conta?</span>
          <Link className="text-teal-900 font-medium" to="/login">Fazer Login</Link>
        </p>
      </header>

      <form className="flex flex-col gap-4 mt-[60px]">
        <Input name="name" placeholder="Nome" type="text"  />
        <Input name="email" placeholder="E-mail" type="email"  />
        <Input name="password" placeholder="Senha" type="password" />

        <Button className="mt-2" type="submit">Criar conta</Button>
      </form>
    </>
  )
}