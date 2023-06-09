import React from 'react'
import {twMerge} from 'tailwind-merge'


type ContainerProps = {
    children: React.ReactNode,
    classNames?: string
}
const Container = ({children, classNames}: ContainerProps) => {
    return (
        <div className={twMerge('container mx-auto sm:px-16 2xl:px-0', classNames)}>{children}</div>
    )
}

export default Container