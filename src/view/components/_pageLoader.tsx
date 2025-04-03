import { Transition } from "@headlessui/react"

import { Logo } from "./_logo"
import { Spinner } from "./_spinner"

interface PageLoaderProps {
  isLoading: boolean
}

export const PageLoader = ({ isLoading }: PageLoaderProps) => {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-teal-900 fixed w-full h-full grid place-items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Logo className="h-10 text-white" />
          <Spinner className="text-teal-900 fill-white" />
        </div>
      </div>
    </Transition>
  )
}