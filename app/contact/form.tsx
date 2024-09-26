'use client'
import {useFormState} from 'react-dom';
import { Alert, Box, SxProps, Theme } from "@mui/material";
import { type ChangeEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { sendMessage, type FormState } from "@/serverActions";

export default function Form ({children, sx}: {children: ReactNode; sx: SxProps<Theme> | undefined}) {
    const formElement = useRef<HTMLFormElement>(null);
    const [alertElements, setAlarmElements] = useState<ReactNode[]>([]);
    
    function onChangeHandler () {
        if (alertElements.length > 0) {
            setAlarmElements([]);
        }        
    }

    function onSubmitHandler () {
        setTimeout (() => {
            formElement.current!.reset();
        }, 1000);        
    }

    const [ formState, formAction ]= useFormState<FormState, FormData>(sendMessage, {status: '', message: []});

    useEffect(() => {
        let helperText: ReactNode[] = [];
        if (formState.status === 'fail') {
            helperText = formState.message.map((message, index) =>
                (<Alert key={index} severity="error" sx={{ mt: 2 }}>
                  {message}
                </Alert>)
            )        
        } else if (formState.status === 'success') {
            helperText =
                [<Alert severity="success" sx={{ mt: 2 }}>
                  {"Message Sent Successfully."}
                </Alert>]
        } 

        setAlarmElements(helperText)
    }, [formState])

    
    

    return (
        <Box ref={formElement} onSubmit={onSubmitHandler} onChange={onChangeHandler} component="form" action={formAction} sx={sx}>
            {children}
            {alertElements}
        </Box>
    )
}