'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import styles from './Button.module.css'

type classType = 'btnDefault' | 'btnPrimary' | 'btnHeader' | 'btnBookTable';

type btnProps = {
    btnText: string
    btnTypeClass: classType
    btnType?: any
}

const ButtonComponent = ({
    btnText,
    btnTypeClass,
    btnType
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
            case 'btnBookTable':
                classStyle = styles.btnBookTable
                break;
            default:
                break;
        }
        return classStyle
    }

    return (
        <Button className={`rounded-none border-none shadow-none uppercase font-calibri ${styles.btnStyle} ${classBtnType()}`} type={btnType || 'button'}>
            {btnText}
        </Button>
    )
}

export default ButtonComponent