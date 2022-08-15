import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [formState, setFormState] = useState(initialForm)
    //funcionaes personalizadas en vase a los validadores
    const [formValidation, setFormValidation] = useState({

    })
    useEffect(() => {
      createValidators()
    }, [formState])
    
    const isFormValid = useMemo(()=> {
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false
        }
        return true
    }, [formValidation])

    //onInputChange base del hook
    const onInputChange = ( { target} ) => {
        const { name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }
    //funcion personalizada en base a los validadores de RegisterPage.jsx
    const createValidators = () =>{
        const formCheckedValues = {}
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage ] = formValidations[formField]
            //creamos la funcion ....Valid de cada elemento que tenemos en registerpage
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage
        }

        setFormValidation(formCheckedValues)
    }

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm,
        //propiedad del validador
        ...formValidation,
        isFormValid
    }
}