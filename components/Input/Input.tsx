import { UseFormRegisterReturn } from "react-hook-form"
import { twMerge } from "tailwind-merge"
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showIcon?: JSX.Element
  classNames?: string
  error?: any
  registration?: Partial<UseFormRegisterReturn>
}

type CustomInputProps = Omit<InputProps, "className">

export const Input = ({ type = "text", classNames = "", registration, error, ...rest }: CustomInputProps) => {
  return (
    <div className="flex w-full flex-col">
      <input
        type={type}
        className={twMerge(
          "focus:ring-deluge-600  focus:border-deluge-600  block w-full rounded border border-[#E9E9E9] bg-[#fefefe] px-4  py-3 text-black outline-none",
          error && "focus:ring-error  focus:border-error border-error border-2",
          classNames
        )}
        {...registration}
        {...rest}
      />
      <div role="alert" aria-label={error?.message} className="text-error text-xs">
        {error?.message}
      </div>
    </div>
  )
}

Input.displayName = "Input"
