'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

const ButtonComponent = ({
    btnText,
    btnClass
}: {
    btnText: string
    btnClass: string
}) => {
    return (
        <Button className={`rounded-none border-none shadow-none bg-[--primary] text-sm uppercase ${btnClass} font-calibri`}>
            {btnText}
        </Button>
    )
}

export default ButtonComponent