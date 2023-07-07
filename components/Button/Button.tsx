/* eslint-disable tailwindcss/no-custom-classname */
import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-lg",
    "text-center",
    "transition-colors",
    "delay-50",
    "cursor-pointer ",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-blue-600", "text-white", "hover:enabled:bg-blue-700"],
        secondary: ["bg-orange-100", "text-orange-500", "hover:enabled:bg-orange-500", "hover:enabled:text-white"],
        info: ["bg-[#EFEFEF], text-blue-500"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-3", "px-4"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href?: string
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </a>
  )
}
