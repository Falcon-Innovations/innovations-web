import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { twMerge } from "tailwind-merge"
interface CustomTextAreaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  classNames?: string
  error?: any
  registration?: Partial<UseFormRegisterReturn>
}

export const TextArea = ({ classNames, registration, ...props }: CustomTextAreaProps) => {
  return (
    <textarea
      className={twMerge(
        "focus:ring-deluge-600 focus:border-deluge-600 block w-full rounded-lg border border-[#E9E9E9] bg-[#fefefe] p-2 px-4 py-3 text-black outline-none",
        classNames
      )}
      {...registration}
      {...props}
    />
  )
}
