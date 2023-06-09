import {cva, type VariantProps} from "class-variance-authority"
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
    underline?: boolean
    href: string
}

const CustomButton = () => {
    return (
        <div>CustomButton</div>
    )
}

export default CustomButton