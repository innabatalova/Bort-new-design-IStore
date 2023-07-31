import React from 'react'

const FormField = ({ titleFormFieldProps, typeFormFieldProps, nameFormFieldProps, classFormFieldProps }) => {
    return (
        <>
            <span className="bort-modal-text authorization-form-text">{titleFormFieldProps}</span>
            <input type={typeFormFieldProps} name={nameFormFieldProps} className={`bort-modal-contacts ` + classFormFieldProps} required minLength="2" />
        </>

    )
}

export default FormField