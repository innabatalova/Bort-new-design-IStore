import React from 'react'

const FormField = ({ titleFormFieldProps, typeFormFieldProps, nameFormFieldProps, classFormFieldProps, valueFormFieldProps }) => {
    return (
        <>
            <span className="bort-modal-text authorization-form-text">{titleFormFieldProps}</span>
            <input type={typeFormFieldProps} name={nameFormFieldProps} className={`bort-modal-contacts ` + classFormFieldProps} required minLength="2" value={valueFormFieldProps}/>
        </>

    )
}

export default FormField