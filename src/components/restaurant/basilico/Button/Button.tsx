'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import styles from './Button.module.css'

type classType = 'btnDefault' | 'btnPrimary' | 'btnHeader';

type btnProps = {
    btnText: string
    btnTypeClass: classType
}

const ButtonComponent = ({
    btnText,
    btnTypeClass
}: btnProps) => {
    
    const classBtnType = () => {        
        let classStyle = ''

        switch (btnTypeClass) {
            case 'btnDefault': 
                classStyle = styles.btnDefault
                break;
            case 'btnHeader':
                classStyle = styles.btnHeader
                break;
            case 'btnPrimary':
                classStyle = styles.btnPrimary
                break;
            default:
                break;
        }
        return classStyle
    }

    return (
        <Button className={`rounded-none border-none shadow-none uppercase font-calibri ${styles.btnStyle} ${classBtnType()}`}>
            {btnText}
        </Button>
    )
}

export default ButtonComponent